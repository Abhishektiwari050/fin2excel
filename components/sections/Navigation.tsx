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
            aria-expanded={mobileOpen ? "true" : "false"}
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
            >
              <Link 
                href="/contact"
                className="mt-8 px-10 py-4 bg-swiss-black text-swiss-bg rounded-sm text-xs font-bold tracking-[0.3em] uppercase block"
                onClick={() => setMobileOpen(false)}
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
