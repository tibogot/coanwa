"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsapConfig";
import { gsap } from "@/lib/gsapConfig";

interface SmoothScrollProps {
  children: ReactNode;
}

// Component to sync Lenis with ScrollTrigger (must be inside ReactLenis)
function LenisScrollSync({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Wait for Lenis to initialize
    const initIntegration = () => {
      // Access Lenis instance from ReactLenis context
      // ReactLenis stores instance on window.lenis
      const lenis =
        typeof window !== "undefined"
          ? (
              window as Window & {
                lenis?: {
                  on: (event: string, callback: () => void) => void;
                  off: (event: string, callback: () => void) => void;
                  raf: (time: number) => void;
                };
              }
            ).lenis
          : null;

      if (lenis && typeof lenis.on === "function" && lenis.raf) {
        // Sync Lenis scroll events with ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        // Integrate Lenis RAF with GSAP ticker for smooth synchronization
        function raf(time: number) {
          if (lenis?.raf) {
            lenis.raf(time * 1000);
          }
        }

        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
          lenis.off("scroll", ScrollTrigger.update);
          gsap.ticker.remove(raf);
          gsap.ticker.lagSmoothing(500, 33); // Restore default lag smoothing
        };
      }
    };

    // Try immediately and also after a short delay to ensure Lenis is initialized
    const cleanup = initIntegration();
    const timeoutId = setTimeout(() => {
      const delayedCleanup = initIntegration();
      if (delayedCleanup) delayedCleanup();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (cleanup) cleanup();
    };
  }, []);

  return <>{children}</>;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      <LenisScrollSync>{children}</LenisScrollSync>
    </ReactLenis>
  );
}
