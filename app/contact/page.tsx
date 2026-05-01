"use client"

import { useState } from "react"
import { motion } from "motion/react"

export default function ContactPage() {
  const [formState, setFormState] = useState("idle") // idle, sending, success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("sending")
    setTimeout(() => setFormState("success"), 2000)
  }

  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Contact Info */}
        <div className="space-y-16">
          <header>
            <span className="text-[10px] tracking-[0.5em] uppercase text-swiss-blue font-bold mb-6 block">
              Private Access
            </span>
            <h1 className="text-[10vw] md:text-[6vw] leading-[0.85] font-display font-bold uppercase mb-8">
              Book Your<br />Consultation
            </h1>
            <p className="text-xl text-swiss-dark-gray max-w-lg leading-relaxed">
              Begin your journey with India&apos;s premier private financial concierge. We operate on a strictly referral and application basis to maintain the highest level of personalized care.
            </p>
          </header>

          <div className="space-y-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-4">Direct Inquiry</p>
              <a href="mailto:concierge@fin2excel.com" className="text-3xl md:text-4xl font-display font-bold hover:text-swiss-blue transition-colors">
                concierge@fin2excel.com
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-4">Global Offices</p>
                <div className="space-y-2 text-sm text-swiss-dark-gray font-medium">
                  <p>Mumbai • Nariman Point</p>
                  <p>Dubai • DIFC</p>
                  <p>London • Mayfair</p>
                  <p>Singapore • Marina Bay</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-4">Immediate Assistance</p>
                <a href="tel:+919876543210" className="text-sm font-bold block hover:text-swiss-blue transition-colors">+91 98765 43210</a>
                <p className="text-xs text-swiss-dark-gray mt-2">Available 24/7 for existing clients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-2xl rounded-sm relative z-10"
          >
            {formState === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 bg-swiss-blue rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-display font-bold uppercase">Application Received</h2>
                <p className="text-swiss-dark-gray">A private wealth concierge will reach out to you within 4 business hours to verify your details.</p>
                <button 
                  onClick={() => setFormState("idle")}
                  className="text-xs font-bold tracking-widest uppercase border-b border-swiss-black pb-1 hover:text-swiss-blue hover:border-swiss-blue transition-colors"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-[9px] tracking-[0.3em] uppercase font-bold text-swiss-dark-gray">Full Name</label>
                    <input id="full-name" required type="text" className="w-full border-b border-swiss-black/10 py-3 focus:border-swiss-blue outline-none transition-colors font-medium" placeholder="E.g. Aryan Malhotra" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[9px] tracking-[0.3em] uppercase font-bold text-swiss-dark-gray">Private Email</label>
                    <input id="email" required type="email" className="w-full border-b border-swiss-black/10 py-3 focus:border-swiss-blue outline-none transition-colors font-medium" placeholder="aryan@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-[9px] tracking-[0.3em] uppercase font-bold text-swiss-dark-gray">Primary Location</label>
                    <input id="location" type="text" className="w-full border-b border-swiss-black/10 py-3 focus:border-swiss-blue outline-none transition-colors font-medium" placeholder="E.g. Dubai, UAE" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service-select" className="text-[9px] tracking-[0.3em] uppercase font-bold text-swiss-dark-gray">Service of Interest</label>
                    <select id="service-select" className="w-full border-b border-swiss-black/10 py-3 focus:border-swiss-blue outline-none transition-colors font-medium bg-transparent">
                      <option>Wealth & Investment</option>
                      <option>Property Concierge</option>
                      <option>Legal & Taxation</option>
                      <option>Elder Care</option>
                      <option>Full Concierge Suite</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[9px] tracking-[0.3em] uppercase font-bold text-swiss-dark-gray">Message / Specific Requirements</label>
                  <textarea id="message" rows={4} className="w-full border-b border-swiss-black/10 py-3 focus:border-swiss-blue outline-none transition-colors font-medium resize-none" placeholder="Briefly describe your objectives..."></textarea>
                </div>

                <div className="pt-6">
                  <button 
                    disabled={formState === "sending"}
                    className="w-full py-5 bg-swiss-black text-swiss-bg text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-swiss-blue hover:text-swiss-black transition-all duration-500 disabled:opacity-50"
                  >
                    {formState === "sending" ? "Initiating..." : "Initiate Consultation"}
                  </button>
                  <p className="text-[9px] text-swiss-dark-gray/60 mt-4 text-center tracking-widest uppercase">
                    By submitting, you agree to our strict non-disclosure terms.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
          {/* Accent decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-swiss-blue/20 -z-0" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-swiss-blue/20 -z-0" />
        </div>
      </div>
    </div>
  )
}
