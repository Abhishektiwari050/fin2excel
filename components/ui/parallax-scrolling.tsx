'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Image from 'next/image';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      const layers = [
        { layer: "1", yPercent: 40 },
        { layer: "2", yPercent: 30 },
        { layer: "3", yPercent: 20 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax relative z-10 bg-swiss-white" ref={parallaxRef}>
      <section className="parallax__header relative h-[200vh]">
        <div className="parallax__visuals sticky top-0 h-screen overflow-hidden">
          <div className="parallax__black-line-overflow absolute top-0 left-0 w-full h-px bg-black/10 z-20"></div>
          
          <div data-parallax-layers className="parallax__layers relative w-full h-full">
            {/* Layer 1: Background Mountains */}
            <div data-parallax-layer="1" className="absolute inset-0 w-full h-full scale-110">
              <Image 
                src="/images/parallax_bg.png" 
                alt="Swiss Backdrop" 
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* Layer 2: Modern Home */}
            <div data-parallax-layer="2" className="absolute inset-0 w-full h-full scale-110 translate-y-12">
              <Image 
                src="/images/parallax_home.png" 
                alt="Modern Architecture" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Layer 3: Branding Text */}
            <div data-parallax-layer="3" className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative w-[30vw] h-[30vw] opacity-90 drop-shadow-2xl">
                <Image 
                  src="/assets/logo.png" 
                  alt="FIN2EXCEL" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Layer 4: Character */}
            <div data-parallax-layer="4" className="absolute inset-x-0 bottom-0 w-full h-[80%] flex items-end justify-center translate-y-24">
              <div className="relative w-full max-w-4xl h-full">
                <Image 
                  src="/images/parallax_character.png" 
                  alt="Principal Advisor" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="parallax__fade absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-swiss-white via-swiss-white/80 to-transparent z-20"></div>
        </div>
      </section>
      
      {/* This section will host the "submerging footer" feel */}
      <section className="parallax__content relative z-30 -mt-[10vh] bg-swiss-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="flex justify-center mb-12">
            <div className="relative w-20 h-20 animate-pulse">
              <Image 
                src="/assets/logo.png" 
                alt="" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-swiss-black mb-6">Absolute Delegation.</h3>
          <p className="text-xl text-swiss-black/60 max-w-2xl mx-auto">
            Your Indian legacy, managed with surgical precision and unwavering trust.
          </p>
        </div>
      </section>
    </div>
  );
}
