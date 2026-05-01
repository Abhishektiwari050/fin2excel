"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import Globe from "@/components/ui/globe"

const audiences = [
  {
    number: "01",
    title: "Resident HNIs",
    description: "Simplifying complex asset management and family logistics for high-net-worth individuals within India."
  },
  {
    number: "02",
    title: "Non-Resident Indians",
    description: "Providing a trusted, single-point solution for managing Indian properties and family interests from abroad."
  },
  {
    number: "03",
    title: "Family Offices",
    description: "Bespoke advisory for multi-generational wealth preservation, succession planning, and institutional-grade governance."
  }
]

export function AudienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-20 px-6 md:px-10 relative">
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[50vw] bg-white -z-10 hidden lg:block rounded-l-3xl shadow-sm" />
      {/* On mobile, leave the top 300px transparent so the globe shows through, cover the rest with white */}
      <div className="absolute top-[300px] left-0 right-0 bottom-0 bg-white -z-20 lg:hidden rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Globe Space - The globe is placed directly here */}
        <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-[500px] py-10">
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[500px] aspect-square lg:-translate-x-8"
          >
            <Globe />
          </motion.div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <motion.p 
            className="text-[10px] tracking-[0.6em] uppercase font-bold text-swiss-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Target Audience
          </motion.p>
          
          <motion.h2 
            className="text-5xl md:text-7xl uppercase leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Tailored for <br /> the Global <br /> <span className="italic text-swiss-dark-gray">Indian.</span>
          </motion.h2>

          <div className="space-y-8">
            {audiences.map((item, i) => (
              <motion.div 
                key={i}
                className="flex gap-8 items-start group/item"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-sm font-display text-swiss-blue font-bold mt-1">{item.number}</span>
                <div>
                  <h4 className="text-xl mb-2 uppercase font-display tracking-tight group-hover/item:text-swiss-blue transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-swiss-dark-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
