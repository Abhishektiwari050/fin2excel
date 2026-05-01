'use client';

import { useState, useEffect } from 'react';

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 2800); // Matches animation duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-text">Fin2Excel</div>
    </div>
  );
}
