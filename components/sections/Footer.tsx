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
      {/* Background brand text - Large & Subtle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center items-end" aria-hidden="true">
        <h2 className="text-[22vw] font-bold leading-[0.7] tracking-tighter text-white/[0.03] uppercase whitespace-nowrap translate-y-1/4">
          FIN2EXCEL
        </h2>
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
              {[
                { 
                  name: "LinkedIn", 
                  href: "https://www.linkedin.com/in/jag-kapoor-jrf", 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )
                },
                { 
                  name: "Facebook", 
                  href: "https://www.facebook.com/jmkapoor", 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )
                },
                { 
                  name: "Instagram", 
                  href: "https://www.instagram.com/fin2excel/", 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
                    </svg>
                  )
                },
                { 
                  name: "YouTube", 
                  href: "https://www.youtube.com/@Fin2Excel", 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )
                }
              ].map(social => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-white/30 hover:text-swiss-blue transition-all duration-300 border border-white/10 hover:border-swiss-blue/30 rounded-sm hover:bg-white/5"
                  aria-label={social.name}
                >
                  {social.icon}
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
              <a href="mailto:info@fin2excel.com" className="block text-white/40 hover:text-white transition-colors duration-300">
                info@fin2excel.com
              </a>
              <a href="tel:+919560759494" className="block text-white/40 hover:text-white transition-colors duration-300">
                +91 95607 59494
              </a>
              <a href="tel:+919891096567" className="block text-white/40 hover:text-white transition-colors duration-300">
                +91 98910 96567
              </a>
              <p className="text-white/20 pt-2">
                E-578, Greater Kailash II,<br />
                New Delhi-110070
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
