"use client";

import TextReveal from "../components/TextReveal";

export default function Projects() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sticky-cards/stickycard-3.webp')",
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
                Our portfolio of excellence
                <br />
                across West Africa
              </h1>
              <p className="font-pp-neue-montreal mt-4 max-w-2xl text-left text-base text-white/80 md:mt-6 md:text-lg lg:text-xl">
                Discover the projects that define our legacy of construction
                excellence and engineering innovation.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

