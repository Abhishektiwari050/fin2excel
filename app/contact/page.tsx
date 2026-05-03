"use client"

import { useState } from "react"
import { motion } from "motion/react"

export default function ContactPage() {
  const [formState, setFormState] = useState("idle") // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("sending")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      location: formData.get('location'),
      service: formData.get('service'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setFormState("success")
      } else {
        setFormState("error")
        setErrorMessage(result.error || "Failed to send application. Please try again.")
      }
    } catch (err) {
      setFormState("error")
      setErrorMessage("Network error. Please try again.")
    }
  }

  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-24">
          <span className="text-[10px] tracking-[0.5em] uppercase text-swiss-blue font-bold mb-6 block">
            Private Access
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.8] font-display font-bold uppercase mb-8 tracking-tighter">
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
                <a href="mailto:info@fin2excel.com" className="text-4xl md:text-5xl font-display font-bold group-hover:text-swiss-blue transition-colors block">
                  info@fin2excel.com
                </a>
                <div className="w-0 group-hover:w-full h-1 bg-swiss-blue transition-all duration-700 mt-4" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-6">Headquarters</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 group">
                      <div className="w-2 h-2 mt-1.5 rounded-full border border-swiss-blue group-hover:bg-swiss-blue transition-colors" />
                      <span className="text-sm font-bold uppercase tracking-widest leading-relaxed">
                        E-578, Greater Kailash II, <br />
                        <span className="text-swiss-dark-gray/40 font-normal">New Delhi-110070</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-6">Direct Line</p>
                  <div className="space-y-2">
                    <a href="tel:+919560759494" className="text-xl font-bold block hover:text-swiss-blue transition-colors">+91 95607 59494</a>
                    <a href="tel:+919891096567" className="text-xl font-bold block hover:text-swiss-blue transition-colors">+91 98910 96567</a>
                  </div>
                  <div className="mt-6">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-2">Whatsapp</p>
                    <a href="https://wa.me/919560759494" target="_blank" rel="noopener noreferrer" className="text-xl font-bold block hover:text-green-600 transition-colors">+91 95607 59494</a>
                  </div>

                  <div className="mt-10 pt-10 border-t border-swiss-black/5">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-swiss-blue font-bold mb-6">Digital Presence</p>
                    <div className="flex gap-4">
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
                      ].map(social => (
                        <a 
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center text-swiss-black/40 hover:text-swiss-blue transition-all duration-300 border border-swiss-black/5 hover:border-swiss-blue/30 rounded-sm hover:bg-swiss-blue/5"
                          aria-label={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-swiss-dark-gray mt-10 leading-relaxed italic opacity-60">
                    Response time for digital inquiries: <span className="text-swiss-blue font-bold">2 Hours</span>
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
                        <input id="full-name" name="name" required type="text" className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl" placeholder="John Doe" />
                      </div>
                      <div className="space-y-4">
                        <label htmlFor="email" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Private Email</label>
                        <input id="email" name="email" required type="email" className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl" placeholder="john@doe.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label htmlFor="location" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Primary Residence</label>
                        <input id="location" name="location" type="text" className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl" placeholder="Dubai, UAE" />
                      </div>
                      <div className="space-y-4">
                        <label htmlFor="service-select" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Desired Concierge Service</label>
                        <select id="service-select" name="service" className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl bg-transparent appearance-none">
                          <option>Wealth Strategy</option>
                          <option>Property Asset Management</option>
                          <option>Legal & Compliance</option>
                          <option>Family Stewardship</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label htmlFor="message" className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue">Inquiry Details</label>
                      <textarea id="message" name="message" rows={3} className="w-full border-b-2 border-swiss-black/5 py-4 focus:border-swiss-blue outline-none transition-colors font-display text-2xl resize-none" placeholder="Briefly outline your objectives..."></textarea>
                    </div>
                  </div>

                  {formState === "error" && (
                    <div className="text-red-500 text-sm mt-4 p-4 bg-red-50 border border-red-200">
                      {errorMessage}
                    </div>
                  )}

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
