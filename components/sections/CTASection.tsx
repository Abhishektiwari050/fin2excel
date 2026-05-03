"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 md:py-24 px-6 md:px-10 text-swiss-bg overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster=""
        >
          {/* Aerial city skyline at night — luxury financial feel */}
          <source
            src="https://videos.pexels.com/video-files/8814715/8814715-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Subtle grid texture on top of video */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1]" aria-hidden="true">
        <span className="text-[15vw] font-display font-bold text-white/[0.03] uppercase tracking-tighter whitespace-nowrap">
          Legacy
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Blue accent line */}
        <motion.div
          className="w-16 h-[2px] bg-swiss-blue mx-auto mb-12"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        />

        <motion.p
          className="text-[10px] tracking-[0.6em] uppercase text-swiss-blue font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Private Consultation
        </motion.p>

        <motion.h2
          className="text-4xl md:text-7xl lg:text-8xl uppercase leading-[0.85] tracking-tighter mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Your Indian <br /> Legacy, <br />
          <span className="italic text-swiss-blue/80">Managed.</span>
        </motion.h2>

        <motion.p
          className="text-white/70 text-sm md:text-base max-w-lg mx-auto uppercase tracking-[0.2em] font-bold mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Book a private consultation with our principal advisors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button className="group relative px-14 py-6 bg-transparent border border-swiss-blue/40 text-swiss-bg rounded-sm text-xs font-bold tracking-[0.4em] uppercase overflow-hidden transition-all duration-500 hover:border-swiss-blue backdrop-blur-sm">
            <span className="relative z-10 group-hover:text-swiss-black transition-colors duration-500">
              Start Your Journey
            </span>
            <div className="absolute inset-0 bg-swiss-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-[10px] tracking-[0.3em] uppercase text-white/40"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <span>SEBI Registered</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-swiss-blue/40" />
          <span>ISO 27001 Compliant</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-swiss-blue/40" />
          <span>NRI Specialist</span>
        </motion.div>
      </div>
    </section>
  )
}
