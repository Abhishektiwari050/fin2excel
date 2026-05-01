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

      {/* The Legacy Timeline */}
      <section className="py-40 px-6 md:px-10 bg-swiss-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] tracking-[0.5em] uppercase text-swiss-blue font-bold mb-4 block">The Journey</span>
            <h2 className="text-5xl md:text-7xl uppercase font-display font-bold">Our Evolution</h2>
          </div>
          
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-swiss-black/10 -translate-x-1/2" />
            
            {[
              { year: "2018", title: "Inception in Mumbai", desc: "Founded with a vision to bridge the gap between traditional banking and personalized financial stewardship." },
              { year: "2020", title: "Middle East Expansion", desc: "Established our Dubai HQ to serve the growing needs of the global Indian diaspora in the Gulf." },
              { year: "2022", title: "The $1B Milestone", desc: "Crossed $1 Billion in Assets Under Advisory, solidifying our position as a premier financial concierge." },
              { year: "2024", title: "European Gateway", desc: "Opened our London office to provide seamless cross-border legal and taxation advisory." },
              { year: "2026", title: "Digital Frontier", desc: "Launching high-fidelity digital interfaces to complement our white-glove human-first service." }
            ].map((event, i) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative mb-24 w-full md:w-1/2 ${i % 2 === 0 ? "pl-12 md:pl-0 md:pr-16 text-left md:text-right md:ml-0" : "pl-12 md:pl-16 text-left md:text-left md:ml-auto"}`}
              >
                {/* Dot */}
                <div className={`absolute top-2 w-4 h-4 bg-swiss-blue rounded-full border-4 border-swiss-bg z-10 
                  ${i % 2 === 0 ? "left-4 md:left-auto md:-right-2 -translate-x-1/2 md:translate-x-1/2" : "left-4 md:-left-2 -translate-x-1/2"}`} 
                />
                
                <div className="text-4xl font-display font-bold text-swiss-blue mb-2">{event.year}</div>
                <h3 className="text-xl font-bold uppercase mb-4">{event.title}</h3>
                <p className="text-swiss-dark-gray leading-relaxed max-w-md md:ml-auto">{i % 2 === 0 ? event.desc : <span className="md:ml-0">{event.desc}</span>}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Winning Spirit / Results */}
      <section className="py-40 px-6 md:px-10 bg-swiss-blue text-swiss-bg">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl md:text-9xl leading-none font-display font-bold uppercase">A Winning<br />Culture.</h2>
            <p className="text-xl md:text-2xl font-sans leading-tight opacity-90 max-w-xl">
              We don't just manage wealth; we engineer success. Our "winning" approach means we are relentlessly proactive, anticipating market shifts before they happen.
            </p>
            <div className="pt-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-px bg-white/30 group-hover:w-24 group-hover:bg-white transition-all" />
                  <span className="text-sm font-bold tracking-[0.3em] uppercase">98% Client Retention</span>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-px bg-white/30 group-hover:w-24 group-hover:bg-white transition-all" />
                  <span className="text-sm font-bold tracking-[0.3em] uppercase">Global Compliance Mastery</span>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-px bg-white/30 group-hover:w-24 group-hover:bg-white transition-all" />
                  <span className="text-sm font-bold tracking-[0.3em] uppercase">Unrivaled Network Access</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="/assets/hero-office.png" 
              alt="The Winning Strategy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-swiss-blue/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats/Achievements */}
      <section className="py-40 px-6 md:px-10 border-b border-swiss-black/5 bg-swiss-bg">
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
      <section className="py-40 px-6 md:px-10 bg-swiss-bg">
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
