"use client"

import { motion, MotionValue, useTransform } from "motion/react"
import Image from "next/image"
import { EchoText } from "@/components/echo-text"
import { Globe } from "@/components/cobe-globe"
import React from "react"

interface HeroSectionProps {
  globeOpacity: MotionValue<number>
  globeScale: MotionValue<number>
  globeY: MotionValue<number>
  textY: MotionValue<number>
}

export function HeroSection({ globeOpacity, globeScale, globeY, textY }: HeroSectionProps) {
  const rightCardY = useTransform(globeY, [0, 100], [0, -200])
  const rightCardRotate = useTransform(globeY, [0, 100], [3, -5])
  const leftCardY = useTransform(globeY, [0, 100], [0, 100])
  const leftCardRotate = useTransform(globeY, [0, 100], [-6, 2])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-0 px-6 overflow-hidden">
      {/* Floating Image Card */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ delay: 1.2, duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        style={{ 
          y: rightCardY,
          rotate: rightCardRotate
        }}
        // Pushed further right and up to avoid text overlapping
        className="absolute -right-4 md:-right-10 lg:right-[-2rem] top-[5%] md:top-[8%] z-20 hidden xl:block w-48 md:w-56"
      >
        <div className="bg-white p-4 shadow-2xl rounded-sm border border-swiss-black/5 hover:scale-105 transition-all duration-700">
          <div className="relative aspect-[3/4] overflow-hidden transition-all duration-700">
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Legacy Wealth" 
              fill 
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover"
            />
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">Featured Service</p>
            <p className="text-sm font-display font-bold uppercase tracking-tight">Legacy Wealth Advisory</p>
          </div>
        </div>
      </motion.div>
 
      {/* Another Small Image Card Left */}
      <motion.div 
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: -6 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        style={{ 
          y: leftCardY,
          rotate: leftCardRotate
        }}
        // Pushed further left and down
        className="absolute -left-4 md:left-[2%] bottom-[5%] md:bottom-[10%] z-20 hidden lg:block w-40 md:w-48"
      >
        <div className="bg-white p-3 shadow-xl rounded-sm border border-swiss-black/5 hover:scale-105 transition-all duration-700">
          <div className="relative aspect-square overflow-hidden transition-all duration-700">
            <Image 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop" 
              alt="Property" 
              fill 
              sizes="(max-width: 768px) 100vw, 192px"
              className="object-cover"
            />
          </div>
          <div className="mt-3">
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase opacity-60">Indian Assets Management</p>
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 text-center flex flex-col items-center">
        <EchoText 
          text="FIN2EXCEL" 
          className="text-[15vw] md:text-[180px] font-display font-bold leading-[0.8]"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold text-swiss-black"
        >
          HNI & NRI Lifecycle Management
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-[11px] md:text-sm max-w-md mx-auto uppercase tracking-widest leading-relaxed"
        >
          We handle everything. From Indian assets to global family sanctuaries.
        </motion.p>
      </motion.div>
    </section>
  )
}
