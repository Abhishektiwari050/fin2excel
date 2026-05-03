"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="bg-swiss-bg text-swiss-black font-sans selection:bg-swiss-blue selection:text-white">
      {/* Narrative Hero */}
      <section className="min-h-[75vh] flex flex-col justify-start px-6 md:px-10 pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-40 right-[-10%] opacity-[0.02] select-none pointer-events-none">
          <span className="text-[20vw] font-display font-bold uppercase leading-none tracking-tighter">Legacy</span>
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-swiss-blue font-bold mb-6 block">
              The Fin2Excel Story
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] mb-10 uppercase font-display font-bold tracking-tighter">
              Bridging<br />The Gap
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 space-y-8">
                <p className="text-xl md:text-3xl text-swiss-dark-gray font-medium leading-[1.2] max-w-2xl">
                  Fin2Excel is a premier multi-disciplinary consultancy based in South Delhi, dedicated to bridging the gap between complex Indian regulations and the unique needs of global citizens.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="px-4 py-2 bg-white border border-swiss-black/5 text-[10px] font-bold tracking-widest uppercase">Legal</span>
                  <span className="px-4 py-2 bg-white border border-swiss-black/5 text-[10px] font-bold tracking-widest uppercase">Financial</span>
                  <span className="px-4 py-2 bg-white border border-swiss-black/5 text-[10px] font-bold tracking-widest uppercase">Real Estate</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase border-l border-swiss-black/10 pl-10 h-fit">
                <div className="space-y-2">
                  <span className="text-swiss-blue block">Headquarters</span>
                  <span className="leading-relaxed opacity-60">E-578, Greater Kailash II,<br />New Delhi-110070</span>
                </div>
                <div className="space-y-2">
                  <span className="text-swiss-blue block">Founded</span>
                  <span className="opacity-60">2018 • India</span>
                </div>
                <div className="pt-6 mt-6 border-t border-swiss-black/5">
                  <span className="text-swiss-blue block mb-4">Social Access</span>
                  <div className="flex gap-4">
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
                        className="text-swiss-black/40 hover:text-swiss-blue transition-colors duration-300"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 px-6 md:px-10 bg-swiss-cream border-y border-swiss-black/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden group shadow-xl bg-white p-2"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src="/assets/founder.png" 
                  alt="Adv. Jag Mohan Kapoor - Founder of Fin2Excel" 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-swiss-black/5 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-0" />
              </div>
              <div className="absolute bottom-6 left-6 z-20 w-[calc(100%-48px)]">
                <div className="bg-white/95 backdrop-blur-sm px-8 py-6 border border-swiss-black/5 shadow-2xl">
                  <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue mb-2">Founding Visionary</p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight">Adv. Jag Mohan Kapoor</h3>
                  <p className="text-[10px] text-swiss-dark-gray uppercase tracking-[0.2em] mt-1">Founder & Managing Director</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-swiss-blue">Our Philosophy</span>
                <h2 className="text-5xl md:text-7xl leading-[0.95] tracking-tighter">
                  Absolute Trust. <br />
                  <span className="italic font-serif normal-case font-medium text-swiss-blue">Seamless Execution.</span>
                </h2>
              </div>
              <div className="space-y-8 text-lg md:text-xl text-swiss-dark-gray leading-relaxed font-sans font-medium">
                <p>
                  "We understand that our clients often manage their Indian interests from thousands of miles away. That is why we prioritize being more than just consultants—we are your trusted executors on the ground."
                </p>
                <p className="text-base text-swiss-dark-gray/60 font-normal">
                  Fin2Excel was built to provide the Indian diaspora with a single, reliable point of contact for legal, financial, and administrative needs, ensuring that distance never compromises excellence.
                </p>
              </div>
              <div className="pt-8">
                <button className="flex items-center gap-6 group">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Strategic Stewardship</span>
                  <div className="w-12 h-px bg-swiss-black/20 group-hover:w-20 group-hover:bg-swiss-blue transition-all duration-700" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-40 px-6 md:px-10 bg-swiss-black text-swiss-bg relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-swiss-blue">The Fin2Excel Edge</span>
              <h2 className="text-6xl md:text-8xl leading-[0.85] tracking-tighter">Surgical<br />Precision.</h2>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-lg font-sans">
                Our approach is defined by deep local mastery and a global perspective, providing mid-market enterprises and families with surgical legal and financial expertise.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-fit">
              {[
                { title: "Integrated Solutions", desc: "A single point of contact for legal, financial, and administrative needs." },
                { title: "Fixed-Fee Transparency", desc: "No hidden costs; just clear, predictable value on a transparent basis." },
                { title: "Local Mastery", desc: "Deep-rooted connections and insights into the South Delhi landscape." },
                { title: "Proactive Advocacy", desc: "Building enduring partnerships through proactive and strategic counsel." }
              ].map((value, i) => (
                <motion.div 
                   key={value.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1, duration: 0.8 }}
                   viewport={{ once: true }}
                   className="p-10 bg-white/5 border border-white/10 hover:border-swiss-blue/50 hover:bg-white/10 transition-all duration-700 group cursor-pointer"
                >
                  <h3 className="text-swiss-blue text-sm mb-4 tracking-[0.2em] uppercase font-bold">{value.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-sans group-hover:text-white/70 transition-colors">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Verticals Section */}
      <section className="py-40 px-6 md:px-10 bg-swiss-bg">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-swiss-black/5 pb-16"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.5em] uppercase text-swiss-blue font-bold block">What We Do</span>
              <h2 className="text-5xl md:text-7xl uppercase font-display font-bold tracking-tighter">Our Core Verticals</h2>
            </div>
            <p className="text-swiss-dark-gray max-w-sm text-sm font-sans italic opacity-70">
              Integrated suites tailored for NRIs, HNIs, and corporate entities navigating the Indian landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { 
                title: "Tax & Legal Advocacy", 
                desc: "Specializing in corporate tax litigation and representation at CIT, ITAT, and High Court levels. We operate on a Modern Outsourced Counsel model, providing high-level legal expertise." 
              },
              { 
                title: "Financial Solutions", 
                desc: "Navigating the lending landscape can be daunting. We facilitate both Secured and Unsecured Loans, ensuring our clients access the best market rates with fast-tracked approvals." 
              },
              { 
                title: "Real Estate Portfolio", 
                desc: "From builder collaborations in Greater Kailash to leasing luxury spaces in Anand Niketan, we manage the entire lifecycle of real estate and compliance." 
              },
              { 
                title: "Comprehensive NRI Support", 
                desc: "We serve as the \"boots on the ground\" for the Indian diaspora, handling everything from local guardianship to complex property repatriations." 
              }
            ].map((vertical, i) => (
              <motion.div 
                key={vertical.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="bg-white p-12 border border-swiss-black/5 hover:border-swiss-blue/20 hover:shadow-[0_20px_50px_rgba(0,102,255,0.05)] transition-all duration-700 group flex flex-col justify-between min-h-[350px]"
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-swiss-blue" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Vertical 0{i+1}</span>
                  </div>
                  <div className="text-3xl font-display font-bold text-swiss-black uppercase tracking-tight group-hover:text-swiss-blue transition-colors duration-500">{vertical.title}</div>
                  <p className="text-swiss-dark-gray leading-relaxed font-sans text-base">{vertical.desc}</p>
                </div>
                <div className="mt-12 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">Explore Expertise</span>
                  <div className="w-12 h-12 rounded-full border border-swiss-black/5 flex items-center justify-center group-hover:bg-swiss-blue group-hover:border-swiss-blue transition-all duration-500 shadow-sm">
                    <svg className="w-5 h-5 text-swiss-black group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-48 px-6 md:px-10 bg-swiss-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] opacity-[0.015] pointer-events-none select-none">
          <span className="text-[25vw] font-display font-black uppercase leading-none block text-center tracking-tighter">Partnership</span>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
        >
          <h2 className="text-5xl md:text-8xl leading-tight uppercase font-display font-bold tracking-tighter">
            Strategic <br />
            <span className="text-swiss-blue italic font-serif normal-case font-medium">Stewardship.</span>
          </h2>
          <p className="text-lg md:text-2xl text-swiss-dark-gray leading-relaxed font-sans max-w-2xl mx-auto opacity-70">
            Defining legacy through professional management and absolute trust. Your partner on the ground in India.
          </p>
          <div className="pt-10">
            <button className="px-16 py-6 bg-swiss-black text-swiss-bg text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-swiss-blue hover:shadow-2xl transition-all duration-700 group flex items-center gap-4 mx-auto">
              Initiate Consultation
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
