"use client";

import { useEffect, useRef } from "react";

export default function GlassGrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create grain texture
    const createGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Create more contrast in grain
        const noise = Math.random();
        const value = noise > 0.5 ? 255 : 0; // High contrast grain
        data[i] = value; // R
        data[i + 1] = value; // G
        data[i + 2] = value; // B
        data[i + 3] = Math.random() * 50 + 30; // A (30-80 for visible grain)
      }

      return imageData;
    };

    let grainData = createGrain();
    let offsetX = 0;
    let offsetY = 0;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grain with slight offset for animation
      ctx.putImageData(grainData, offsetX, offsetY);

      // Wrap around for seamless animation
      offsetX += 0.5;
      offsetY += 0.3;
      if (offsetX > canvas.width) offsetX = 0;
      if (offsetY > canvas.height) offsetY = 0;

      // Occasionally regenerate grain for variation
      if (Math.random() < 0.01) {
        grainData = createGrain();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Glass blur layer - needs to be separate for backdrop-filter to work */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(8px) saturate(1.2)",
          WebkitBackdropFilter: "blur(8px) saturate(1.2)",
          background: "rgba(0, 0, 0, 0.02)", // Subtle tint to make blur visible
        }}
      />
      {/* Grain layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        style={{
          imageRendering: "pixelated",
          mixBlendMode: "overlay",
        }}
      />
      {/* Glass highlight/reflection effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 40%, rgba(0, 0, 0, 0.03) 100%)",
          mixBlendMode: "overlay",
        }}
      />
      {/* Vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.08) 100%)",
        }}
      />
    </div>
  );
}
