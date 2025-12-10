"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import "./MaskedBorderShine.css";

interface MaskedBorderShineProps {
  children?: React.ReactNode;
  className?: string;
  shineColor?: string;
  borderWidth?: number;
  enablePointer?: boolean;
  angle?: number;
  autoAnimate?: boolean;
}

const MaskedBorderShine = ({
  children,
  className = "",
  shineColor = "hsl(0 0% 100% / 0.8)",
  borderWidth = 0.8,
  enablePointer = true,
  angle = 325,
  autoAnimate = false,
}: MaskedBorderShineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointerAngle, setPointerAngle] = useState(angle);
  const angleRef = useRef(angle);

  // Update ref when angle prop changes
  useEffect(() => {
    angleRef.current = angle;
    if (!enablePointer) {
      // Use requestAnimationFrame to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        setPointerAngle(angle);
      });
    }
  }, [angle, enablePointer]);

  // Calculate angle between pointer and center (matches CodePen logic exactly)
  const calculateAngle = useCallback(
    (event: MouseEvent | React.PointerEvent) => {
      if (!containerRef.current || !enablePointer) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Calculate the center of the button
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Get pointer coordinates
      const pointerX = event.clientX;
      const pointerY = event.clientY;

      // Calculate the angle in radians
      const deltaX = pointerX - centerX;
      const deltaY = pointerY - centerY;
      const angleRadians = Math.atan2(deltaY, deltaX);

      // Convert to degrees, offset by +90 so 0° is at the top, and normalize to 0-360 range
      let angleDegrees = (angleRadians * 180) / Math.PI;
      angleDegrees = (angleDegrees + 90 + 360) % 360;

      setPointerAngle(angleDegrees);
    },
    [enablePointer],
  );

  // Event listeners
  useEffect(() => {
    if (!enablePointer) {
      return;
    }

    const handleMove = (e: MouseEvent) => calculateAngle(e);
    document.addEventListener("pointermove", handleMove);

    return () => {
      document.removeEventListener("pointermove", handleMove);
    };
  }, [calculateAngle, enablePointer]);

  // Auto-animate (optional)
  useEffect(() => {
    if (!autoAnimate || enablePointer) return;

    let animationId: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = (elapsed % 4) / 4;
      setPointerAngle((progress * 360) % 360);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [autoAnimate, enablePointer]);

  // Update CSS custom properties on the element
  useEffect(() => {
    if (!containerRef.current) return;

    // Use the current angle from state or the prop when pointer is disabled
    const currentAngle = enablePointer ? pointerAngle : angleRef.current;

    containerRef.current.style.setProperty(
      "--pointer-angle",
      String(currentAngle),
    );
    containerRef.current.style.setProperty(
      "--border-width",
      `${borderWidth}px`,
    );
    containerRef.current.style.setProperty("--shine-color", shineColor);
  }, [pointerAngle, enablePointer, borderWidth, shineColor]);

  return (
    <div ref={containerRef} className={`masked-border-shine ${className}`}>
      {/* Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default MaskedBorderShine;
