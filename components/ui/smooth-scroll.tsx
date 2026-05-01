'use client';

import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const SmoothScroll = forwardRef<HTMLElement, { children?: React.ReactNode }>((props, ref) => {
  return (
    <ReactLenis root>
      <main ref={ref}>
        {props.children}
      </main>
    </ReactLenis>
  );
});

SmoothScroll.displayName = 'SmoothScroll';

export default SmoothScroll;

