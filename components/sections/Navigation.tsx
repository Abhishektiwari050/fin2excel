"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ]

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-[100] h-20 px-6 md:px-10 flex justify-between items-center transition-all duration-500 ${
          scrolled 
            ? "glass-header shadow-sm" 
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-110">
            <Image 
              src="/assets/logo-gray.png" 
              alt="Fin2Excel Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter hover:text-swiss-blue transition-colors duration-300">
            FIN2EXCEL
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className={`relative group py-2 transition-colors duration-300 ${
                pathname === link.href ? "text-swiss-blue" : "hover:text-swiss-blue"
              }`}
            >
              <span>{link.label}</span>
              <motion.span 
                className="absolute bottom-0 left-0 h-[1px] bg-swiss-blue"
                initial={{ width: pathname === link.href ? "100%" : "0%" }}
                animate={{ width: pathname === link.href ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/contact"
            className="hidden md:block px-6 py-2.5 border border-swiss-black rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-swiss-black hover:text-swiss-bg transition-all duration-300"
          >
            Book Consultation
          </Link>

          {/* Mobile hamburger */}
          <button 
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span 
              className="w-6 h-[1.5px] bg-swiss-black block"
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6.5 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="w-6 h-[1.5px] bg-swiss-black block"
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-6 h-[1.5px] bg-swiss-black block"
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6.5 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="fixed inset-0 z-[99] bg-swiss-bg flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-4xl font-display font-bold uppercase tracking-tighter transition-colors ${
                    pathname === link.href ? "text-swiss-blue" : "hover:text-swiss-blue"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-8"
            >
              <Link 
                href="/contact"
                className="mt-8 px-10 py-4 bg-swiss-black text-swiss-bg rounded-sm text-xs font-bold tracking-[0.3em] uppercase block"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>
              
              <div className="flex gap-6 pt-8">
                {[
                  { 
                    name: "LinkedIn", 
                    href: "https://www.linkedin.com/in/jag-kapoor-jrf", 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )
                  },
                  { 
                    name: "Facebook", 
                    href: "https://www.facebook.com/jmkapoor", 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )
                  },
                  { 
                    name: "Instagram", 
                    href: "https://www.instagram.com/fin2excel/", 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
                      </svg>
                    )
                  },
                  { 
                    name: "YouTube", 
                    href: "https://www.youtube.com/@Fin2Excel", 
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-swiss-black/40 hover:text-swiss-blue transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
