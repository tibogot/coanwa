"use client";

import TextReveal from "../components/TextReveal";

export default function Services() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sticky-cards/stickycard-2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
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
                Comprehensive construction solutions
                <br />
                tailored to your needs
              </h1>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
