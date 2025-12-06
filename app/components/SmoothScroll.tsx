"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Linear interpolation intensity (0.1 = smooth, 1 = instant)
        duration: 1.2, // Duration of the scroll animation
        smoothWheel: true, // Smooth scrolling for mouse wheel
        syncTouch: true, // Sync touch scroll with lerp
      }}
    >
      {children}
    </ReactLenis>
  );
}

