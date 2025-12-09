"use client";

import ShaderBackground from "./components/ShaderBackground4";
import TextReveal from "./components/TextReveal";
import StickyCards from "./components/StickyCards";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Leva hidden />
      <ShaderBackground />
      {/* Hero Section - on top of ShaderBackground */}
      <section className="relative z-10 flex h-screen w-full items-center justify-center">
        <div className="mx-auto max-w-7xl px-8">
          {/* Hero content goes here */}
        </div>
      </section>
      {/* New Section - 100vh with Primary Background */}
      <section className="h-screen w-full bg-white px-4 md:px-8">
        <div className="mx-auto flex h-full max-w-7xl flex-col py-[120px]">
          <div className="text-center">
            <TextReveal blockColor="#ff4d00" animateOnScroll={true}>
              <h2 className="font-pp-neue-montreal text-center text-4xl text-black md:text-5xl lg:text-6xl">
                A construction <span className="text-secondary">company,</span>
                <br />
                offering integrated solution and
                <br />
                related <span className="text-secondary">services.</span>
              </h2>
            </TextReveal>
          </div>
        </div>
      </section>
      {/* Sticky Cards Section */}
      <StickyCards />
    </>
  );
}
