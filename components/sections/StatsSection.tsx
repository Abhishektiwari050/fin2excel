"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

interface StatItem {
  label: string
  value: number
  prefix?: string
  suffix: string
}

const stats: StatItem[] = [
  { label: "Assets Managed", value: 450, prefix: "₹", suffix: "Cr+" },
  { label: "Global Families", value: 120, suffix: "+" },
  { label: "Cities in India", value: 18, suffix: "" },
  { label: "Expert Advisors", value: 25, suffix: "+" },
]

function AnimatedCounter({ value, prefix = "", suffix, inView }: { value: number, prefix?: string, suffix: string, inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000
    const startTime = Date.now()

    const step = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic for satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * value)
      setCount(start)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [inView, value])

  return <span>{prefix}{count}{suffix}</span>
}

export function StatsSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className={`py-16 md:py-24 border-b border-swiss-black/5 bg-transparent transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <dl className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 gap-x-6 md:gap-x-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center space-y-4 group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <dt className="text-[10px] tracking-[0.4em] uppercase text-swiss-dark-gray font-bold group-hover:text-swiss-blue transition-colors duration-500">
              {stat.label}
            </dt>
            <dd className="text-4xl md:text-6xl font-display font-bold tracking-tight text-swiss-black">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                inView={inView}
              />
            </dd>
            <div className="w-8 h-[1.5px] bg-swiss-blue/30 group-hover:w-16 group-hover:bg-swiss-blue transition-all duration-700 ease-out" />
          </motion.div>
        ))}
      </dl>
    </div>
  )
}
