"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const testimonials = [
  {
    id: 1,
    category: "NRI Property Sale & Low TDS",
    quote: "Selling my apartment in South Delhi while living abroad seemed like a financial nightmare due to the 20% TDS rule. Fin2Excel helped me secure a Low TDS Certificate in record time, allowing me to receive almost my entire sale proceeds upfront.",
    author: "Anita Saxena",
    role: "Property Owner",
    company: "USA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    category: "Taxation on Property Sale",
    quote: "As an NRI, navigating Section 195 was daunting. They handled the entire online application and represented my case perfectly. I managed to close my property sale with a 3% TDS rate instead of the standard 20%.",
    author: "Sandeep Kumar",
    role: "Investor",
    company: "Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    category: "Cross-Border Compliance",
    quote: "The 'surrogate' level of support was outstanding. They didn't just handle legalities; they gave me confidence that my tax compliance was 100% accurate. Truly the best partner for NRI property matters.",
    author: "Lalit & Priya Kundnani",
    role: "Family Estate",
    company: "Australia",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    category: "Tax Litigation",
    quote: "Fin2Excel turned a complex regulatory hurdle into a smooth transaction. Highly recommended for any HNI looking for specialized tax litigation and compliance support in India.",
    author: "Sourabh Sircar",
    role: "HNI Client",
    company: "USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    category: "Property Concierge",
    quote: "Every detail, from coordinating with the buyer to ensuring the sale deed was compliant, was handled proactively. They acted as my eyes and ears on the ground, making the entire process stress-free.",
    author: "Shakuntala Devi",
    role: "Estate Owner",
    company: "Switzerland",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    category: "Repatriation of Funds",
    quote: "Professional, efficient, and highly knowledgeable in NRI property matters. They simplified the entire sale process and ensured a smooth transfer of sale proceeds back to Singapore.",
    author: "Sanjay & Zara Kaushik",
    role: "Global Indians",
    company: "Singapore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 7,
    category: "Wealth Optimization",
    quote: "They structured a facility that maximized my tax efficiency and preserved my capital. Their understanding of the Delhi NCR high-value lending landscape is unmatched.",
    author: "Vikas Sharma",
    role: "Business Leader",
    company: "India",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 8,
    category: "Property Management",
    quote: "They've taken the stress out of being an NRI landlord by managing every detail of my property portfolio with expert precision. Integrity and results are their priorities.",
    author: "Gaurav Mirchia",
    role: "Property Investor",
    company: "Los Angeles",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 9,
    category: "Elder Care",
    quote: "For HNIs and NRIs with elderly parents in Delhi NCR, this is the gold standard. They have bridged the distance, allowing my parents to maintain their independence while staying safe.",
    author: "Uday Vir",
    role: "Tech Executive",
    company: "California",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
  }
]

export default function TestimonialsEditorial() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const handleChange = (index: number) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1
    setDirection(-1)
    setActive(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1
    setDirection(1)
    setActive(newIndex)
  }

  const current = testimonials[active]

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* Large Index & Visual Accent */}
        <div className="relative flex-shrink-0">
          <motion.span
            key={active}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[120px] md:text-[200px] font-display font-bold leading-none text-swiss-black/5 select-none"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {String(active + 1).padStart(2, "0")}
          </motion.span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-swiss-blue/10 rounded-full animate-pulse" />
        </div>

        <div className="flex-1 pt-4 md:pt-12 overflow-hidden">
          {/* Category Tag */}
          <motion.div
            key={`cat-${active}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 bg-swiss-blue/5 border border-swiss-blue/10 text-[10px] tracking-[0.3em] uppercase font-bold text-swiss-blue mb-8"
          >
            {current.category}
          </motion.div>

          {/* Quote */}
          <div className="relative">
            <Quote className="absolute -top-8 -left-8 w-12 h-12 text-swiss-blue/5" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl md:text-4xl font-serif italic leading-tight text-swiss-black tracking-tight"
              >
                "{current.quote}"
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author Info */}
          <motion.div
            key={`author-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 group cursor-default"
          >
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-swiss-black/5 group-hover:border-swiss-blue/30 transition-all duration-500 shadow-xl">
                <Image
                  src={current.image}
                  alt={current.author}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              <div>
                <p className="font-display font-bold text-lg uppercase tracking-tight text-swiss-black">{current.author}</p>
                <p className="text-xs text-swiss-dark-gray uppercase tracking-widest font-medium">
                  {current.role}
                  <span className="mx-3 text-swiss-black/10">|</span>
                  <span className="text-swiss-blue">{current.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-swiss-black/5 pt-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => handleChange(index)} 
                className="group relative py-4"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`block h-[2px] transition-all duration-500 ease-out ${
                    index === active
                      ? "w-12 bg-swiss-blue"
                      : "w-6 bg-swiss-black/10 group-hover:w-8 group-hover:bg-swiss-black/30"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-[10px] font-bold text-swiss-dark-gray tracking-[0.4em] uppercase">
            {String(active + 1).padStart(2, "0")} <span className="text-swiss-black/20 mx-1">/</span> {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="group flex items-center gap-2 px-6 py-3 border border-swiss-black/10 rounded-full hover:bg-swiss-black hover:text-white transition-all duration-500"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Prev</span>
          </button>
          <button
            onClick={handleNext}
            className="group flex items-center gap-2 px-6 py-3 bg-swiss-black text-white rounded-full hover:bg-swiss-blue transition-all duration-500"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Next Story</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}
