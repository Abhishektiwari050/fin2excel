'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface PillShowcaseProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function PillShowcase({ src, alt, title, subtitle, className = '' }: PillShowcaseProps) {
  return (
    <motion.div 
      className={`pill-container h-[500px] w-full bg-swiss-muted/10 group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale-hover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
          <div className="w-32 h-32 rounded-full border border-white/50 flex flex-col items-center justify-center text-white p-4 text-center">
            {title && <p className="text-xs font-bold uppercase tracking-widest">{title}</p>}
            {subtitle && <p className="text-[10px] opacity-70 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
