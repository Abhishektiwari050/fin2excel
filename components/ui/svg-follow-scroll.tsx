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
            className={`flex w-full flex-col md:flex-row items-center gap-8 md:gap-16 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
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

      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <LinePath
          className="w-full h-full object-fill"
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
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C999.784 155.164 999.784 155.164 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#0066FF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          pathLength,
        }}
      />
    </svg>
  );
};

