"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { PillShowcase } from "@/components/pill-showcase"

export function ShowcaseGrid() {
  return (
    <section className="py-40 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 md:auto-rows-[100px]">
          {/* Large 8-column card */}
          <motion.div 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 md:row-span-4 relative bg-swiss-muted/10 overflow-hidden group min-h-[300px] md:min-h-0"
          >
            <Image 
              src="/assets/hero-office.png" 
              alt="Estate Management" 
              fill 
              className="object-cover grayscale-hover"
            />
            <div className="absolute bottom-10 left-10 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[10px] tracking-widest font-bold uppercase">Estate Management</p>
            </div>
          </motion.div>

          {/* Vertical pill card */}
          <div className="col-span-12 md:col-span-4 md:row-span-6">
            <PillShowcase 
              src="/assets/global-network.png" 
              alt="Global Mobility" 
              title="NRI" 
              subtitle="Mobility"
            />
          </div>

          {/* Circular square card */}
          <motion.div 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5 md:row-span-4 relative aspect-square rounded-full overflow-hidden group bg-swiss-muted/10"
          >
            <Image 
              src="/assets/hero-office.png" 
              alt="Circle" 
              fill 
              className="object-cover grayscale-hover"
            />
          </motion.div>

          {/* Wide 7-column rectangle */}
          <motion.div 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 md:row-span-3 relative bg-swiss-muted/20 overflow-hidden group min-h-[200px] md:min-h-0"
          >
             <Image 
              src="/assets/global-network.png" 
              alt="Wide" 
              fill 
              className="object-cover grayscale-hover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
