"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="relative bg-swiss-black text-swiss-bg pt-32 pb-12 px-6 md:px-10 overflow-hidden">
      {/* Background brand text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
        <div className="relative w-[40vw] h-[40vw] opacity-[0.03]">
          <Image 
            src="/assets/logo.png" 
            alt="" 
            fill 
            className="object-contain grayscale brightness-0 invert opacity-[0.03]"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Top section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-sm">
                <Image 
                  src="/assets/logo.png" 
                  alt="Fin2Excel Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tighter">FIN2EXCEL</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              India&apos;s premier private financial concierge for global families and high-net-worth individuals.
            </p>
            {/* Social links */}
            <div className="flex gap-4 pt-4">
              {["LinkedIn", "Twitter", "Instagram"].map(platform => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-[9px] tracking-[0.3em] uppercase text-white/30 hover:text-swiss-blue transition-colors duration-300 border border-white/10 hover:border-swiss-blue/30 px-3 py-1.5 rounded-sm"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-swiss-blue font-bold mb-6">Services</p>
            <ul className="space-y-3">
              {[
                { name: "Property Management", href: "/services" },
                { name: "Wealth Advisory", href: "/services" },
                { name: "Legal & Taxation", href: "/services" },
                { name: "Elder Care", href: "/services" }
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-swiss-blue font-bold mb-6">Company</p>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Process", href: "/#process" },
                { name: "Book Consultation", href: "/contact" },
                { name: "Blog", href: "/blog" }
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-swiss-blue font-bold mb-6">Contact</p>
            <div className="space-y-3 text-sm">
              <a href="mailto:advisory@fin2excel.com" className="block text-white/40 hover:text-white transition-colors duration-300">
                advisory@fin2excel.com
              </a>
              <a href="tel:+919876543210" className="block text-white/40 hover:text-white transition-colors duration-300">
                +91 98765 43210
              </a>
              <p className="text-white/20 pt-2">
                Mumbai • Delhi • Bangalore<br />
                Dubai • Singapore • London
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom bar */}
        <motion.div 
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] uppercase text-white/30"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} FIN2EXCEL PRIVATE ADVISORY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors duration-300">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Regulatory</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Terms</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
