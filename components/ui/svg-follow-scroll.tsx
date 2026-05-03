"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "A comprehensive audit of your Indian footprint and family requirements."
  },
  {
    number: "02",
    title: "Onboarding",
    description: "Setting up your dedicated concierge desk and legal framework."
  },
  {
    number: "03",
    title: "Execution",
    description: "Active management, reporting, and 24/7 logistical oversight."
  }
];

const Skiper19 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  return (
    <section
      ref={ref}
      className="relative mx-auto flex min-h-[300vh] w-full flex-col items-center justify-center overflow-hidden bg-swiss-bg px-6 py-32 text-swiss-black"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 w-full">
        <p className="text-[10px] tracking-[0.6em] uppercase font-bold text-swiss-blue mb-4">The Lifecycle</p>
        <h2 className="text-5xl md:text-8xl uppercase leading-[0.85] tracking-tighter">
          How we <br /> handle it.
        </h2>
      </div>

      <div className="relative w-full max-w-6xl flex flex-col items-center h-full mt-[10vh] z-10 space-y-32 md:space-y-64 pb-32">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex w-full flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Content Side */}
            <div className={`flex-1 flex flex-col ${i % 2 !== 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"} items-center text-center`}>
              <div className="bg-swiss-bg/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-swiss-black/5 max-w-lg hover:border-swiss-blue/30 transition-colors duration-500 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-swiss-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                <span className="text-xl font-display font-bold text-swiss-blue mb-4 block">{step.number}</span>
                <h3 className="text-4xl md:text-5xl uppercase font-bold tracking-tighter mb-4">
                  {step.title}
                </h3>
                <p className="text-swiss-dark-gray text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Spacer for the other side to keep SVG centered */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
        <LinePath
          className="w-full h-full"
          scrollYProgress={scrollYProgress}
        />
      </div>
    </section>
  );
};

export { Skiper19 };

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 3000"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M 500 0 C 500 300, 400 400, 400 700 C 400 1100, 600 1300, 600 1500 C 600 1800, 400 2000, 400 2300 C 400 2700, 500 2800, 500 3000"
        stroke="#0066FF"
        strokeWidth="4"
        vectorEffect="nonScalingStroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          pathLength,
        }}
      />
    </svg>
  );
};

