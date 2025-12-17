"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

const StickyCards = () => {
  const stickyCardsData = [
    {
      index: "01",
      title: "Modularity",
      image: "/sticky-cards/card_1.jpg",
      description:
        "Every element is built to snap into place. We design modular systems where clarity, structure, and reuse come first—no clutter, no excess.",
    },
    {
      index: "02",
      title: "Materials",
      image: "/sticky-cards/card_2.jpg",
      description:
        "From soft gradients to hard edges, our design language draws from real-world materials—elevating interfaces that feel both digital and tangible.",
    },
    {
      index: "03",
      title: "Precision",
      image: "/sticky-cards/card_3.jpg",
      description:
        "Details matter. We work with intention—aligning pixels, calibrating contrast, and obsessing over every edge until it just feels right.",
    },
    {
      index: "04",
      title: "Character",
      image: "/sticky-cards/card_4.jpg",
      description:
        "Interfaces should have personality. We embed small moments of play and irregularity to bring warmth, charm, and a human feel to the digital.",
    },
  ];

  const container = useRef(null);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container },
  );

  return (
    <div
      className="relative h-full w-full"
      style={{ backgroundColor: "var(--bg)" }}
      ref={container}
    >
      {stickyCardsData.map((cardData, index) => (
        <div
          className="sticky-card relative flex h-screen w-full items-center justify-center overflow-hidden will-change-transform after:pointer-events-none after:absolute after:top-0 after:left-0 after:z-[2] after:h-full after:w-full after:bg-black/50 after:opacity-[var(--after-opacity,0)] after:transition-opacity after:duration-100 after:ease-linear after:content-['']"
          style={
            {
              backgroundImage: `url(${cardData.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              "--after-opacity": 0,
            } as React.CSSProperties
          }
          key={index}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 z-[1] bg-black/40" />

          {/* Content */}
          <div className="relative z-[3] mx-auto flex w-full max-w-7xl flex-col gap-12 px-8 text-white max-[1000px]:gap-8">
            {/* Index */}
            <div className="font-pp-neue-montreal">
              <h1 className="text-6xl font-light tracking-tight md:text-8xl lg:text-9xl">
                {cardData.index}
              </h1>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-8 max-[1000px]:gap-6">
              <h2 className="font-pp-neue-montreal text-5xl leading-tight md:text-6xl lg:text-7xl">
                {cardData.title}
              </h2>

              <div className="flex max-w-2xl flex-col gap-6 max-[1000px]:gap-4">
                <p className="font-pp-neue-montreal text-sm font-semibold tracking-wider text-white/80 uppercase">
                  (About the state)
                </p>
                <p className="font-pp-neue-montreal text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl">
                  {cardData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
