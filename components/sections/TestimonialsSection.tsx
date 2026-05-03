"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import TestimonialsEditorial from "@/components/ui/editorial-testimonial"

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-swiss-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="mb-12 border-b-4 border-double border-swiss-black pb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] tracking-[0.6em] uppercase font-bold text-swiss-blue mb-6"
          >
            The Fiduciary Voice
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.8] tracking-tighter"
          >
            Client <br /> Chronicles.
          </motion.h2>
        </header>

        <div className="relative">
          <TestimonialsEditorial />
        </div>
      </div>
    </section>
  )
}
