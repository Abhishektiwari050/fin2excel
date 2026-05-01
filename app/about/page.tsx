"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="bg-swiss-bg text-swiss-black font-sans">
      {/* Narrative Hero */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-10 pb-20 relative overflow-hidden">
        <div className="absolute top-40 right-10 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[25vw] font-display font-bold uppercase leading-none">About</span>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-swiss-blue font-bold mb-6 block">
            Our Foundation
          </span>
          <h1 className="text-[10vw] leading-[0.85] mb-12 uppercase font-display font-bold">
            Defining<br />Legacy
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <p className="text-2xl md:text-3xl text-swiss-dark-gray font-medium leading-tight max-w-xl">
              Fin2Excel was born from a simple realization: high-net-worth global families deserve more than just financial advice. They deserve a dedicated steward.
            </p>
            <div className="flex flex-col gap-4 text-sm font-bold tracking-[0.2em] uppercase">
              <span className="text-swiss-blue">Est. 2018</span>
              <span>Mumbai • Dubai • London</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 md:px-10 bg-swiss-black text-swiss-bg">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-swiss-blue">The Philosophy</span>
              <h2 className="text-6xl md:text-8xl leading-none">Absolute Trust.<br />Absolute Precision.</h2>
              <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                In a world of automated algorithms and impersonal banking, we choose the opposite. We choose human intuition, deep relationships, and the relentless pursuit of excellence in every detail.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 lg:pt-0">
              {[
                { title: "Discretion", desc: "Absolute confidentiality in every interaction and transaction." },
                { title: "Sovereignty", desc: "Protecting your interests with unwavering independence." },
                { title: "Heritage", desc: "Focusing on multi-generational wealth and legacy preservation." },
                { title: "Innovation", desc: "Modern solutions for traditional wealth management values." }
              ].map((value, i) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-white/10 hover:border-swiss-blue/50 transition-colors group"
                >
                  <h3 className="text-swiss-blue text-lg mb-4 group-hover:translate-x-2 transition-transform">{value.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Achievements */}
      <section className="py-40 px-6 md:px-10 border-b border-swiss-black/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Families Served", value: "150+" },
            { label: "Assets Under Advisory", value: "$2.5B" },
            { label: "Countries Present", value: "12" },
            { label: "Expert Concierges", value: "45" }
          ].map((stat, i) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-5xl md:text-7xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-swiss-dark-gray font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Concierge Experience */}
      <section className="py-40 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl leading-tight uppercase font-display font-bold">
            Beyond Finance. <br />
            <span className="text-swiss-blue italic font-serif normal-case">A Lifestyle of Certainty.</span>
          </h2>
          <p className="text-lg md:text-xl text-swiss-dark-gray leading-relaxed">
            Our team comprises former private bankers, legal experts, and luxury hospitality professionals. This unique intersection of expertise allows us to manage your wealth, your properties, and your family's needs with the same level of surgical precision and white-glove care.
          </p>
          <div className="pt-10">
            <button className="px-12 py-5 border border-swiss-black text-xs font-bold tracking-[0.4em] uppercase hover:bg-swiss-black hover:text-swiss-bg transition-all duration-500">
              Meet the Partners
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
