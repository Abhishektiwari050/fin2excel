"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "motion/react"

const pillars = [
  {
    number: "01",
    title: "End-to-End",
    description: "A single point of contact for your entire Indian footprint. No fragmentation, absolute clarity."
  },
  {
    number: "02",
    title: "Bespoke Trust",
    description: "Securing legacies for global Indian families through surgical discretion and legal expertise."
  },
  {
    number: "03",
    title: "Global Reach",
    description: "Connecting your global NRI life with high-trust execution on the ground in India."
  }
]

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
      width="1278"
      height="2319"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="var(--color-swiss-blue)"
        strokeWidth="30"
        strokeOpacity="0.6"
        style={{
          pathLength,
        }}
      />
    </svg>
  );
};

export function PhilosophySection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={ref} className={`relative py-12 px-6 md:px-10 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden min-h-[100vh] transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      


      <motion.div 
        className="relative z-10 mb-20 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-display leading-[0.9] tracking-tighter uppercase mb-6">
          The Stroke <br /> 
          <span className="italic text-swiss-blue">That follows</span> <br />
          the Scroll.
        </h2>
        <p className="text-swiss-dark-gray uppercase tracking-widest text-xs font-bold">
          Precision in Indian asset management.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-left w-full mt-auto pb-20">
        {pillars.map((pillar, i) => (
          <motion.div 
            key={i} 
            className="space-y-4 group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] text-swiss-blue font-bold">{pillar.number}</span>
            <h3 className="text-lg font-display uppercase tracking-tight group-hover:text-swiss-blue transition-colors duration-500">
              {pillar.title}
            </h3>
            <p className="text-swiss-dark-gray/80 leading-relaxed text-xs uppercase tracking-wider">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
