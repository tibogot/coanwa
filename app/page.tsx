"use client";

import ShaderBackground from "./components/ShaderBackground4";
import TextReveal from "./components/TextReveal";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Leva hidden />
      <ShaderBackground />
      {/* Hero Section - on top of ShaderBackground */}
      <section className="h-screen w-full flex items-center justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          {/* Hero content goes here */}
        </div>
      </section>
      {/* New Section - 100vh with Primary Background */}
      <section className="h-screen w-full bg-primary px-4 md:px-8">
        <div className="max-w-7xl mx-auto h-full flex flex-col py-[120px]">
          <div className="text-center">
            <TextReveal blockColor="#ff4d00" animateOnScroll={true}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-black font-pp-neue-montreal  text-center">
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
    </>
  );
}
