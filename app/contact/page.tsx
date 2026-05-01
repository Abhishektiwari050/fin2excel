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
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-24">
          <span className="text-[10px] tracking-[0.5em] uppercase text-swiss-blue font-bold mb-6 block">
            Private Access
          </span>
          <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-display font-bold uppercase mb-8">
            The Inner<br />Circle
          </h1>
          <p className="text-xl md:text-3xl text-swiss-dark-gray max-w-3xl leading-tight font-medium">
            Begin your journey with India&apos;s premier private financial concierge. We operate on a strictly referral and application basis to maintain the highest level of personalized care.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-4">Direct Inquiry</p>
                <a href="mailto:concierge@fin2excel.com" className="text-4xl md:text-5xl font-display font-bold group-hover:text-swiss-blue transition-colors block">
                  concierge@fin2excel.com
                </a>
                <div className="w-0 group-hover:w-full h-1 bg-swiss-blue transition-all duration-700 mt-4" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-6">Global Presence</p>
                  <div className="space-y-4">
                    {[
                      { city: "Mumbai", area: "Nariman Point" },
                      { city: "Dubai", area: "DIFC" },
                      { city: "London", area: "Mayfair" },
                      { city: "Singapore", area: "Marina Bay" }
                    ].map((loc) => (
                      <div key={loc.city} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full border border-swiss-blue group-hover:bg-swiss-blue transition-colors" />
                        <span className="text-sm font-bold uppercase tracking-widest">{loc.city} <span className="text-swiss-dark-gray/40 font-normal ml-2">/ {loc.area}</span></span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-6">Support</p>
                  <a href="tel:+919876543210" className="text-xl font-bold block hover:text-swiss-blue transition-colors">+91 98765 43210</a>
                  <p className="text-xs text-swiss-dark-gray mt-4 leading-relaxed">
                    Available 24/7 for existing portfolio clients. <br />
                    Response time for new applications: <span className="text-swiss-blue font-bold">4 Hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Image/Element */}
            <div className="relative aspect-video overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 group">
              <img 
                src="/assets/hero-office.png" 
                alt="Fin2Excel Office" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-swiss-blue/10 mix-blend-overlay" />
            </div>
          </div>

          {/* Booking Form */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-sm relative z-10 border border-swiss-black/5"
            >
              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 space-y-8"
                >
                  <div className="w-24 h-24 bg-swiss-blue rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-display font-bold uppercase tracking-tight">Application Received</h2>
                  <p className="text-swiss-dark-gray max-w-sm text-lg">Your inquiry has been encrypted and sent to our private concierge team.</p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="text-xs font-bold tracking-[0.4em] uppercase border-b-2 border-swiss-blue pb-2 hover:text-swiss-blue transition-colors"
                  >
                    Send another application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label htmlFor="full-name" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Full Name</label>
                        <input id="full-name" required type="text" className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl" placeholder="John Doe" />
                      </div>
                      <div className="space-y-4">
                        <label htmlFor="email" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Private Email</label>
                        <input id="email" required type="email" className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl" placeholder="john@doe.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label htmlFor="location" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Primary Residence</label>
                        <input id="location" type="text" className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl" placeholder="Dubai, UAE" />
                      </div>
                      <div className="space-y-4">
                        <label htmlFor="service-select" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Desired Concierge Service</label>
                        <select id="service-select" className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl bg-transparent appearance-none">
                          <option>Wealth Strategy</option>
                          <option>Property Asset Management</option>
                          <option>Legal & Compliance</option>
                          <option>Family Stewardship</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label htmlFor="message" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Inquiry Details</label>
                      <textarea id="message" rows={3} className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl resize-none" placeholder="Briefly outline your objectives..."></textarea>
                    </div>
                  </div>

                  <div className="pt-10">
                    <button 
                      disabled={formState === "sending"}
                      className="w-full py-6 bg-swiss-blue text-swiss-bg text-xs font-bold tracking-[0.6em] uppercase hover:bg-swiss-black transition-all duration-700 disabled:opacity-50"
                    >
                      {formState === "sending" ? "Processing..." : "Submit for Verification"}
                    </button>
                    <p className="text-[10px] text-swiss-dark-gray/60 mt-6 text-center tracking-[0.2em] uppercase">
                      Strict Confidentiality Assured • RSA 2048-bit Encryption
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
            {/* Background decorative text */}
            <div className="absolute -bottom-16 -right-16 text-[20vw] font-display font-bold text-swiss-black/[0.03] select-none pointer-events-none uppercase">
              Trust
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
