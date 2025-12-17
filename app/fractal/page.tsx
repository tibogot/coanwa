"use client";

import FractalGlass from "../components/FractalGlass/FractalGlass";
import TextReveal from "../components/TextReveal";

export default function FractalPage() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <FractalGlass
          imgSrc="/joshua-oluwagbemiga.webp"
          lerpFactor={0.035}
          parallaxStrength={0.1}
          distortionMultiplier={10}
          glassStrength={2.0}
          glassSmoothness={0.0001}
          stripesFrequency={35}
          edgePadding={0.1}
        />
      </div>

      {/* Optional overlay to help readability */}
      <div className="absolute inset-0 z-[1] bg-black/20" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full w-full items-end">
        <div className="w-full px-4 pb-8 md:px-8 md:pb-12">
          <div className="flex flex-col items-start">
            <TextReveal animateOnScroll={true} blockColor="white">
              <h1 className="font-pp-neue-montreal max-w-5xl text-left text-3xl text-white md:text-6xl">
                Fractal glass hero
                <br />
                as a reusable section.
              </h1>
              <p className="font-pp-neue-montreal mt-6 max-w-2xl text-left text-base leading-relaxed text-white/80 md:text-xl">
                Desktop gets mouse parallax; mobile stays stable.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
