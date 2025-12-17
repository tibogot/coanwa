"use client";

import TextReveal from "../components/TextReveal";
import Image from "next/image";

export default function Gallery() {
  return (
    <main className="w-full">
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/joshua-oluwagbemiga.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 z-[1] bg-black/20" />

        {/* Content - Bottom left like home hero */}
        <div className="relative z-10 flex h-full w-full items-end">
          <div className="w-full px-4 pb-8 md:px-8 md:pb-12">
            <div className="flex flex-col items-start">
              <TextReveal
                animateOnScroll={true}
                blockColor="white"
                stagger={0.15}
                duration={0.8}
              >
                <h1 className="font-pp-neue-montreal text-left text-2xl text-white md:text-6xl">
                  Our portfolio of exceptional projects
                  <br />
                  across West Africa
                </h1>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vitalis-nwenyi.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 flex h-full w-full items-end">
          <div className="w-full px-4 pb-8 md:px-8 md:pb-12">
            <p className="font-pp-neue-montreal max-w-6xl text-2xl text-white md:text-6xl">
              <span className="opacity-0">Fortransforming </span>Transforming
              landscapes and shaping futures through innovative construction
              solutions and engineering excellence across West Africa.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
