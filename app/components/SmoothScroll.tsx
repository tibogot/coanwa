"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsapConfig";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    // Sync Lenis scroll events with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Refresh ScrollTrigger after Lenis is ready and on window load
    const refreshScrollTrigger = () => {
      // Small delay to ensure DOM is fully ready
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    // Refresh on initial load
    refreshScrollTrigger();

    // Also refresh when window loads (handles page refreshes)
    if (document.readyState === "complete") {
      refreshScrollTrigger();
    } else {
      window.addEventListener("load", refreshScrollTrigger);
    }

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      window.removeEventListener("load", refreshScrollTrigger);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false, // Disable smooth scrolling on touch devices - use native scroll on mobile
        syncTouch: false, // Disable sync touch for better mobile performance
      }}
    >
      {children}
    </ReactLenis>
  );
}
