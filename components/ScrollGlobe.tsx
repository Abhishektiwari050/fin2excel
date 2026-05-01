"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import Globe from "@/components/ui/globe"

interface ScrollGlobeProps {
  heroAnchorRef: React.RefObject<HTMLDivElement | null>
  audienceAnchorRef: React.RefObject<HTMLDivElement | null>
}

/**
 * ScrollGlobe — A single CSS 3D globe that morphs from the hero section
 * background into the AudienceSection's left column as the user scrolls.
 *
 * Phases:
 *  Phase 1 (hero):       Large, centered, faded, grayscale background
 *  Phase 2 (transition): Shrinks, moves left, gains color + opacity
 *  Phase 3 (audience):   Settled into audience section left column
 */
export function ScrollGlobe({ heroAnchorRef, audienceAnchorRef }: ScrollGlobeProps) {
  // Track rects of both anchor elements
  const [heroCenter, setHeroCenter] = useState({ x: 0, y: 0, size: 500 })
  const [audienceCenter, setAudienceCenter] = useState({ x: 0, y: 0, size: 350 })
  const [transitionRange, setTransitionRange] = useState({ start: 0.08, end: 0.30 })
  const [isReady, setIsReady] = useState(false)

  const measure = useCallback(() => {
    const heroEl = heroAnchorRef.current
    const audEl = audienceAnchorRef.current
    if (!heroEl || !audEl) return

    const hRect = heroEl.getBoundingClientRect()
    const aRect = audEl.getBoundingClientRect()
    const scrollY = window.scrollY
    const docHeight = document.documentElement.scrollHeight
    const vh = window.innerHeight

    // Hero globe center (absolute page coords)
    const hCenterX = hRect.left + hRect.width / 2
    const hCenterY = hRect.top + hRect.height / 2
    const hSize = Math.min(hRect.width, hRect.height)

    // Audience globe center (absolute page coords)
    const aCenterX = aRect.left + aRect.width / 2
    const aCenterY = aRect.top + aRect.height / 2
    const aSize = Math.min(aRect.width, aRect.height)

    setHeroCenter({ x: hCenterX, y: hCenterY, size: hSize })
    setAudienceCenter({ x: aCenterX, y: aCenterY, size: aSize })

    // Calculate scroll progress thresholds
    const totalScroll = docHeight - vh
    if (totalScroll > 0) {
      // Transition starts when hero bottom leaves viewport
      const heroBottomProgress = (scrollY + hRect.bottom) / docHeight
      // Transition ends when audience center is at viewport center
      const audienceCenterProgress = (scrollY + aRect.top) / docHeight

      setTransitionRange({
        start: Math.max(0.03, heroBottomProgress - 0.03),
        end: Math.min(0.95, audienceCenterProgress + 0.01),
      })
    }

    setIsReady(true)
  }, [heroAnchorRef, audienceAnchorRef])

  // Measure on mount, scroll, and resize
  useEffect(() => {
    // Initial measure after a small delay for layout to settle
    const timer = setTimeout(measure, 100)

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          measure()
          ticking = false
        })
      }
    }

    const onResize = () => requestAnimationFrame(measure)

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [measure])

  const { scrollYProgress } = useScroll()
  const { start, end } = transitionRange

  // --- Position X (center-based, offset by -50% via translateX) ---
  const x = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [heroCenter.x, heroCenter.x, audienceCenter.x, audienceCenter.x]
  )

  // --- Position Y ---
  const y = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [heroCenter.y, heroCenter.y, audienceCenter.y, audienceCenter.y]
  )

  // --- Size ---
  const size = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [heroCenter.size, heroCenter.size, audienceCenter.size, audienceCenter.size]
  )

  // --- Opacity: faded in hero → full in audience ---
  const opacity = useTransform(
    scrollYProgress,
    [0, start, (start + end) / 2, end, 1],
    [0.3, 0.3, 0.65, 1, 1]
  )

  // --- Grayscale: full grey in hero → none in audience ---
  const grayscaleVal = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [1, 0.8, 0, 0]
  )

  // --- Mask fade (bottom fade in hero, removed in audience) ---
  const maskFade = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [1, 0.5, 0, 0]
  )

  // --- Scale boost during mid-transition for a "pop" feel ---
  const scaleBoost = useTransform(
    scrollYProgress,
    [0, start, (start + end) / 2, end, 1],
    [1, 1, 1.08, 1, 1]
  )

  // Pointer events: interactive only when in audience section
  const [isInteractive, setIsInteractive] = useState(false)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIsInteractive(v >= end - 0.02)
  })

  // Derived CSS filter string
  const [filterStr, setFilterStr] = useState("grayscale(1)")
  useMotionValueEvent(grayscaleVal, "change", (v) => {
    setFilterStr(`grayscale(${v.toFixed(2)})`)
  })

  // Derived CSS mask string (bottom fade for hero positioning)
  const [maskStr, setMaskStr] = useState(
    "linear-gradient(to bottom, black 50%, transparent 100%)"
  )
  useMotionValueEvent(maskFade, "change", (v) => {
    if (v > 0.01) {
      const solidStop = Math.round(50 + (1 - v) * 50)
      setMaskStr(`linear-gradient(to bottom, black ${solidStop}%, transparent 100%)`)
    } else {
      setMaskStr("none")
    }
  })

  if (!isReady) return null

  return (
    <motion.div
      className="fixed z-30"
      style={{
        left: 0,
        top: 0,
        x,
        y,
        width: size,
        height: size,
        translateX: "-50%",
        translateY: "-50%",
        opacity,
        scale: scaleBoost,
        filter: filterStr,
        WebkitMaskImage: maskStr,
        maskImage: maskStr,
        pointerEvents: isInteractive ? "auto" : "none",
        willChange: "transform, opacity, filter",
      }}
    >
      <Globe
        className="w-full h-full"
      />
    </motion.div>
  )
}
