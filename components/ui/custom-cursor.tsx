'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnterInteractive = () => {
      dot.classList.add('hovering');
    };

    const onMouseLeaveInteractive = () => {
      dot.classList.remove('hovering');
    };

    // Smooth animation loop
    let raf: number;
    const animate = () => {
      // Smooth interpolation
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.15;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.15;

      dot.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Attach hover listeners to all interactive elements
    const updateListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    updateListeners();
    // Re-run periodically to catch dynamic elements
    const interval = setInterval(updateListeners, 2000);

    animate();

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div ref={dotRef} className="custom-cursor hidden lg:block" />
  );
}
