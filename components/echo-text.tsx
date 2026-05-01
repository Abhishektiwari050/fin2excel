'use client';

import React from 'react';
import { motion } from 'motion/react';

interface EchoTextProps {
  text: string;
  className?: string;
  count?: number;
  offsetStep?: number; // in em
}

const colors = ['#bfbfbf', '#c9c9c9', '#d1d1d1', '#d9d9d9'];

export function EchoText({ text, className = '', count = 5, offsetStep = 0.04 }: EchoTextProps) {
  return (
    <div className={`echo-container ${className}`}>
      {/* Background Layers */}
      {Array.from({ length: count - 1 }).map((_, i) => {
        const offset = -(i + 1) * offsetStep;
        return (
          <motion.span
            key={i}
            className="echo-layer"
            style={{
              color: colors[i] || colors[colors.length - 1],
              transform: `translate(${offset}em, ${offset}em)`,
              zIndex: -1 - i,
            }}
            aria-hidden="true"
          >
            {text}
          </motion.span>
        );
      })}
      
      {/* Foreground Layer */}
      <span className="relative z-10 text-swiss-black">
        {text}
      </span>
    </div>
  );
}
