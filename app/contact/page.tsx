"use client";

import TextReveal from "../components/TextReveal";

export default function Contact() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <TextReveal
          animateOnScroll={true}
          blockColor="#0f121d"
          stagger={0.15}
          duration={0.8}
        >
          <h1 className="font-pp-neue-montreal text-5xl font-medium text-black md:text-6xl lg:text-7xl">
            Contact
          </h1>
        </TextReveal>
      </div>
    </section>
  );
}

