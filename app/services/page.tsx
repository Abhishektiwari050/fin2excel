"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { Globe } from "@/components/cobe-globe"

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const services = [
    {
      id: "wealth",
      title: "Wealth & Investment",
      subtitle: "Capital Preservation & Growth",
      desc: "Sophisticated asset allocation and portfolio optimization tailored for the unique requirements of high-net-worth global families. We navigate Indian markets with surgical precision.",
      features: [
        "Private Equity Access",
        "Diversified Mutual Funds",
        "Portfolio Management Services (PMS)",
        "Fixed Income Strategies"
      ],
      img: "/assets/hero-office.png",
      color: "#0066FF"
    },
    {
      id: "legal",
      title: "Legal & Taxation",
      subtitle: "Cross-Border Compliance",
      desc: "Navigating the complexities of FEMA, Income Tax, and Estate Planning. We ensure your global footprint remains compliant and optimized for generational wealth transfer.",
      features: [
        "NRI Tax Advisory",
        "Trust & Estate Planning",
        "Succession Management",
        "Regulatory Compliance"
      ],
      img: "/assets/global-network.png",
      color: "#111111"
    },
    {
      id: "property",
      title: "Property Concierge",
      subtitle: "Asset Stewardship",
      desc: "End-to-end management of Indian real estate assets. From acquisition and maintenance to rental management and liquidation, we act as your eyes and ears on the ground.",
      features: [
        "Portfolio Maintenance",
        "Tenant Lifecycle Management",
        "Legal Verification",
        "Valuation Services"
      ],
      img: "/assets/hero-office.png",
      color: "#0066FF"
    },
    {
      id: "elder",
      title: "Elder Care",
      subtitle: "Absolute Peace of Mind",
      desc: "Dignified, single-point logistical and healthcare support for your family in India. We provide the care and attention that transcends professional boundaries.",
      features: [
        "Healthcare Coordination",
        "Logistical Support",
        "Emergency Assistance",
        "Wellness Oversight"
      ],
      img: "/assets/global-network.png",
      color: "#111111"
    }
  ]

  return (
    <div ref={containerRef} className="bg-swiss-bg text-swiss-black">
      {/* Header Section */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-swiss-blue font-bold mb-4 block">
            Our Ecosystem
          </span>
          <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] mb-8">
            Precision<br />Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-swiss-dark-gray font-sans font-medium leading-tight">
            A comprehensive suite of private concierge solutions designed for the global Indian elite.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <div className="py-20">
        {services.map((service, index) => (
          <ServiceItem key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Call to Action */}
      <section className="py-40 px-6 md:px-10 bg-swiss-black text-swiss-bg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl mb-10">Ready for Clarity?</h2>
          <button className="px-12 py-5 bg-swiss-blue text-swiss-black font-bold uppercase tracking-widest text-sm hover:bg-swiss-bg transition-colors duration-500">
            Design Your Strategy
          </button>
        </motion.div>
      </section>
    </div>
  )
}

function ServiceItem({ service, index }: { service: any, index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <motion.section 
      ref={ref}
      className={`min-h-screen flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 md:px-10 py-20 border-b border-swiss-black/5 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
      style={{ opacity }}
    >
      <div className="flex-1 space-y-8">
        <motion.div style={{ y }}>
          <span className="text-sm font-bold tracking-widest text-swiss-blue uppercase mb-2 block">
            {service.subtitle}
          </span>
          <h2 className="text-6xl md:text-8xl mb-6">{service.title}</h2>
          <p className="text-lg text-swiss-dark-gray max-w-xl mb-10 font-sans">
            {service.desc}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature: string) => (
              <li key={feature} className="flex items-center gap-3 group">
                <span className="w-1.5 h-1.5 bg-swiss-blue rounded-full" />
                <span className="text-xs font-bold tracking-wider uppercase group-hover:text-swiss-blue transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="flex-1 w-full aspect-square md:aspect-[4/5] relative overflow-hidden group">
        <motion.img 
          src={service.img} 
          alt={service.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
          style={{ scale }}
        />
        <div className="absolute inset-0 bg-swiss-black/20 group-hover:bg-transparent transition-colors duration-700" />
      </div>
    </motion.section>
  )
}
