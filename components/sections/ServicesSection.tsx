"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Service {
  title: string
  desc: string
  shape: string
  img: string
}

interface ServicesSectionProps {
  services: Service[]
}

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, inView] as const
}

// --- Header Component ---
const AnimatedHeader = () => {
  const [headerRef, headerInView] = useScrollAnimation()
  const [pRef, pInView] = useScrollAnimation()

  return (
    <div className="text-left w-full mb-16 lg:mb-24">
      <div 
        ref={headerRef}
        className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <h2 className="text-5xl md:text-8xl uppercase font-display font-bold leading-[0.85] tracking-tighter text-swiss-black">
          Core <br /> <span className="text-swiss-muted/30 italic">Services</span>
        </h2>
        <div className="mt-8 w-24 h-[2px] bg-swiss-blue" />
      </div>
      <p 
        ref={pRef}
        className={`text-swiss-dark-gray max-w-xs text-sm leading-relaxed uppercase tracking-[0.3em] font-bold mt-6 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        Surgical Precision. <br /> Absolute Delegation.
      </p>
    </div>
  )
}

// --- Main Component ---
export function ServicesSection({ services }: ServicesSectionProps) {
  // Define subtle variations in background colors to enhance the stacking effect
  const cardBgColors = [
    "bg-[#FAFAFA]",
    "bg-[#F5F5F5]",
    "bg-[#F0F0F0]",
    "bg-[#EBEBEB]"
  ]

  return (
    <div className="bg-swiss-bg font-sans relative z-10">
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* The main section for the features */}
          <section className="py-16 md:py-24 flex flex-col items-center">
            
            <AnimatedHeader />

            {/* The container for the sticky cards */}
            <div className="w-full relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  // The sticky class makes the card stick to the top of the container.
                  // By adding a small calc(200px + index * 20px) we create a staggered card stack.
                  // But as per the prompt's simplicity, we can also use top-32 etc.
                  className={`${cardBgColors[index % cardBgColors.length]} border border-swiss-black/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 p-8 md:p-12 lg:p-16 rounded-3xl mb-16 sticky`}
                  style={{ top: `calc(120px + ${index * 20}px)` }}
                >
                  {/* Card Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-[1px] bg-swiss-blue" />
                      <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-muted">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-swiss-black uppercase leading-[1.1]">
                      {service.title}
                    </h3>
                    
                    <p className="text-swiss-dark-gray text-base md:text-lg leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    <button className="flex items-center justify-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase py-4 px-8 border border-swiss-black hover:bg-swiss-black hover:text-white transition-all duration-300 w-fit">
                      <span>Explore</span>
                    </button>
                  </div>
                  
                  {/* Card Image */}
                  <div className="image-wrapper mt-8 md:mt-0 relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-swiss-muted/10">
                    <Image 
                      src={service.img} 
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
