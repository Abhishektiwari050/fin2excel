"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

export function FloatingContact() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const whatsappNumber = "919560759494"
  const phoneNumber = "919560759494"

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: scrolled ? 1 : 0, 
        x: scrolled ? 0 : 20,
        pointerEvents: scrolled ? "auto" : "none"
      }}
      className="fixed bottom-8 right-6 md:right-10 z-[90] flex flex-col gap-4"
    >
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-swiss-black/5 rounded-full shadow-lg hover:bg-swiss-black transition-all duration-500"
        aria-label="Call Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-swiss-black group-hover:text-white transition-colors duration-500"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01-.36-1.11-.56-2.3-.56-3.53 0-.55-.45-1-1-1H4.03c-.55 0-1 .45-1 1C3.03 11.23 12.77 21 21.03 21c.55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" />
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-swiss-black text-white text-[10px] font-bold tracking-widest uppercase rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Call Principal
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-swiss-black/5 rounded-full shadow-lg hover:bg-[#25D366] transition-all duration-500"
        aria-label="WhatsApp Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-swiss-black group-hover:text-white transition-colors duration-500"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-swiss-black text-white text-[10px] font-bold tracking-widest uppercase rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Advisory
        </span>
      </a>
    </motion.div>
  )
}
