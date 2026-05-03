"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

const testimonials = [
  {
    category: "NRI Property Sale, Low TDS & Repatriation",
    quote: "Selling my apartment in South Delhi while living abroad seemed like a financial nightmare due to the 20% TDS rule. I was worried about having a massive chunk of my capital locked up with the Income Tax Department for over a year. Fin2Excel helped me secure a Low TDS Certificate in record time, allowing me to receive almost my entire sale proceeds upfront. Their expertise in the Income-tax Act 2025 made the process seamless.",
    author: "Anita Saxena",
    location: "USA"
  },
  {
    category: "Taxation on Property Sale",
    quote: "As an NRI, navigating the documentation for a Section 195 certificate is incredibly daunting. From calculating the indexed cost of acquisition to coordinating with the Assessing Officer, the technicalities are endless. I am grateful for the professional guidance I received; they handled the entire online application and represented my case perfectly. I managed to close my property sale with a 3% TDS rate instead of the standard 20%.",
    author: "Sandeep Kumar",
    location: "Canada"
  },
  {
    category: "Taxation on Property Sale",
    quote: "We needed to sell my family property in India but couldn't travel back for the paperwork. The 'surrogate' level of support I received was outstanding. They didn't just handle the legalities; they gave me the confidence that my tax compliance was 100% accurate. Getting the Lower Tax Deduction Certificate before the sale deed execution saved me from the hassle of chasing a tax refund later. Truly the best partner for NRI property matters.",
    author: "Lalit & Priya Kundnani",
    location: "Australia"
  },
  {
    category: "Taxation on Property Sale",
    quote: "If you are an NRI selling property in India, do not settle for a 20% TDS. I worked with experts who secured my Lower TDS Certificate within weeks. Fin2Excel turned a complex regulatory hurdle into a smooth transaction. Highly recommended for any HNI looking for specialized tax litigation and compliance support!",
    author: "Sourabh Sircar",
    location: "USA"
  },
  {
    category: "Property Sale",
    quote: "Finding a trustworthy partner in India to manage a high-value property sale is rare. I was impressed by the 'concierge' style approach—every detail, from coordinating with the buyer to ensuring the sale deed was compliant with the latest regulations, was handled proactively. They acted as my eyes and ears on the ground, making the entire process stress-free.",
    author: "Shakuntala Devi",
    location: "Switzerland"
  },
  {
    category: "NRI Property, Taxation, Repatriation",
    quote: "Professional, efficient, and highly knowledgeable in NRI property matters. They simplified the entire sale process, handled the tax litigation hurdles seamlessly, and ensured a smooth transfer of sale proceeds. Their expertise in the Delhi NCR market and the latest tax frameworks is a huge asset for global Indians.",
    author: "Sanjay & Zara Kaushik",
    location: "Singapore"
  },
  {
    category: "Finance Arrangement",
    quote: "What sets this team apart is their ability to look at a loan not just as debt, but as a strategic tool for wealth optimization. They didn't just find a lender; they structured a facility that maximized my tax efficiency and preserved my capital for other investments. Their understanding of the Delhi NCR high-value lending landscape is unmatched.",
    author: "Vikas Sharma",
    location: "India"
  },
  {
    category: "Property Management",
    quote: "Professional, transparent, and highly efficient. They've taken the stress out of being an NRI landlord by managing every detail of my property portfolio with expert precision. If you have assets in India and want a partner who prioritizes integrity and results, look no further.",
    author: "Gaurav Mirchia",
    location: "Los Angeles"
  },
  {
    category: "Elder Care",
    quote: "What sets this service apart is the holistic approach to senior care. Whether it was coordinating a major home repair, managing utility filings, or providing emergency support, the response has always been immediate and professional. For NRIs with elderly parents in the Delhi NCR region, this is the gold standard of care.",
    author: "Uday Vir",
    location: "California"
  }
]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-swiss-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="mb-20 border-b-4 border-double border-swiss-black pb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] tracking-[0.6em] uppercase font-bold text-swiss-blue mb-6"
          >
            The Fiduciary Voice
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.8] tracking-tighter"
          >
            Client <br /> Chronicles.
          </motion.h2>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
              className="break-inside-avoid bg-white p-8 md:p-10 border border-swiss-black/5 shadow-sm hover:shadow-xl transition-all duration-500 group relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-swiss-blue group-hover:h-full transition-all duration-700" />
              
              <span className="text-[9px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-6 block border-b border-swiss-black/5 pb-4">
                {item.category}
              </span>

              <p className="font-serif italic text-lg md:text-xl text-swiss-black/80 leading-relaxed mb-8">
                "{item.quote}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-swiss-black/5">
                <div>
                  <h4 className="font-display font-bold text-sm uppercase tracking-tight">{item.author}</h4>
                  <p className="text-[10px] text-swiss-dark-gray uppercase tracking-widest">{item.location}</p>
                </div>
                <div className="opacity-10 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-swiss-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 19.8954 13.1216 19 12.017 19H9.017C7.91243 19 7.01704 19.8954 7.01704 21V23H12.017C13.1216 23 14.017 22.1046 14.017 21ZM5.01704 21V18C5.01704 16.8954 5.91243 16 7.01704 16H10.017C11.1216 16 12.017 16.8954 12.017 18V21C12.017 22.1046 11.1216 23 10.017 23H7.01704C5.91243 23 5.01704 22.1046 5.01704 21Z" opacity="0.1" />
                    <path d="M11.189 10C11.189 12.2091 9.39811 14 7.18901 14C4.97991 14 3.18901 12.2091 3.18901 10C3.18901 7.79086 4.97991 6 7.18901 6C9.39811 6 11.189 7.79086 11.189 10Z" fill="currentColor" />
                    <path d="M20.811 10C20.811 12.2091 19.0201 14 16.811 14C14.6019 14 12.811 12.2091 12.811 10C12.811 7.79086 14.6019 6 16.811 6C19.0201 6 20.811 7.79086 20.811 10Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
