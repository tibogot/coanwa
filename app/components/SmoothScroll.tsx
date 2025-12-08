"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsapConfig";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile/touch
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isTouchDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    // Stop Lenis on mobile devices for native scrolling
    if (isMobile) {
      lenis.stop();
    } else {
      lenis.start();
    }

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
  }, [isMobile]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
