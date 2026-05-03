"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useMotionTemplate } from "motion/react"

// Component Imports
import { HeroSection } from "@/components/sections/HeroSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { LogoMarquee } from "@/components/sections/LogoMarquee"
import { AudienceSection } from "@/components/sections/AudienceSection"
import { CTASection } from "@/components/sections/CTASection"
import { PhilosophySection } from "@/components/sections/PhilosophySection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { ParallaxTransition } from "@/components/sections/ParallaxTransition"
import { Preloader } from "@/components/ui/preloader"
import { Globe } from "@/components/cobe-globe"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    setMounted(true)
    setIsDesktop(window.innerWidth >= 768)
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const services = [
    {
      title: "Property & Investment",
      desc: "End-to-end management of Indian real estate portfolios and diversified investment vehicles for HNIs.",
      shape: "square",
      img: "/assets/hero-office.png"
    },
    {
      title: "Legal & Taxation",
      desc: "Sophisticated tax planning and cross-border legal compliance for NRIs and global families.",
      shape: "triangle",
      img: "/assets/global-network.png"
    },
    {
      title: "Elder Care",
      desc: "Dedicated single-point solutions for family well-being and logistical support in India.",
      shape: "circle",
      img: "/assets/hero-office.png"
    },
    {
      title: "Property Management",
      desc: "Active oversight and maintenance of residential and commercial assets with surgical precision.",
      shape: "square",
      img: "/assets/global-network.png"
    }
  ]

  // Overall page scroll (used for things that need full page progress)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Specific scroll for the Hero
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Hero Globe Parallax
  const globeOpacity = useTransform(heroProgress, [0, 0.8], [0.8, 0])
  const globeScale = useTransform(heroProgress, [0, 1], [1, 0.8])
  const globeYVal = useTransform(heroProgress, [0, 1], [10, 50])
  const globeY = useMotionTemplate`${globeYVal}%`
  
  // Hero text still fades/moves up
  const textY = useTransform(heroProgress, [0, 1], [0, -100])

  return (
    <div ref={containerRef} className="bg-swiss-bg text-swiss-black noise-bg font-sans min-h-screen">
      {!mounted && <Preloader onComplete={() => {}} />}
      <div className={mounted ? "visible" : "invisible"}>
        {/* Hero Section with its own sticky globe */}
        <div ref={heroRef} className="relative bg-swiss-bg z-10">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-0">
            <motion.div 
              style={{ opacity: globeOpacity, scale: globeScale, y: globeY }}
              className="w-[100vw] md:w-[70vw] h-[100vw] md:h-[70vw] absolute"
            >
              <Globe />
            </motion.div>
          </div>

          <div className="-mt-[100vh] relative z-10">
            <HeroSection 
              globeOpacity={globeOpacity} 
              globeScale={globeScale} 
              globeY={globeYVal} 
              textY={textY}
            />
          </div>
        </div>

        <div className="bg-swiss-bg relative z-20">
          <LogoMarquee />
        </div>

        <div className="bg-swiss-bg relative z-20">
          <StatsSection />
        </div>

        <div className="relative z-30 bg-transparent">
          <AudienceSection />
        </div>

        <CTASection />

        <div id="philosophy">
          <PhilosophySection />
        </div>

        <ProcessSection />

        <div id="services">
          <ServicesSection services={services} />
        </div>

        <ParallaxTransition />
      </div>
    </div>
  )
}
