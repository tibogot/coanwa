"use client";

import ShaderBackground from "./components/ShaderBackground4";
import TextReveal from "./components/TextReveal";
import StickyCards3D from "./components/StickyCards3D";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Leva hidden />
      <ShaderBackground />
      {/* Hero Section - on top of ShaderBackground */}
      <section className="relative z-10 flex h-screen w-full items-end">
        <div className="w-full px-4 pb-8 md:px-8 md:pb-12">
          <p className="font-pp-neue-montreal text-2xl text-white md:text-6xl">
            A construction company,
            <br />
            offering integrated solution
          </p>
          <p className="font-pp-neue-montreal mt-4 max-w-2xl text-base text-white/80 md:mt-6 md:text-lg lg:text-xl">
            With over 34 years of excellence in the industry, we deliver
            comprehensive construction and engineering services across West
            Africa. 
          </p>
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

      {/* Service Scroll Section */}
      {/* <ServiceScroll /> */}
      {/* Sticky Cards Section */}
      {/* <StickyCards /> */}
      <StickyCards3D />

      {/* Glass Cards Section */}
      <section className="relative min-h-[150vh] w-full bg-transparent px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center md:mb-24">
            <h2 className="font-pp-neue-montreal mb-6 text-4xl font-medium text-white md:text-5xl lg:text-6xl">
              Our Services
            </h2>
            <p className="font-pp-neue-montreal mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
              Comprehensive solutions tailored to your construction needs, from
              initial planning to ongoing maintenance and support.
            </p>
          </div>

          {/* Glass Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="mb-4 text-3xl">🏗️</div>
              <h3 className="font-pp-neue-montreal mb-3 text-2xl font-medium text-white">
                Project Management
              </h3>
              <p className="font-pp-neue-montreal text-sm leading-relaxed text-white/70">
                Expert oversight from conception to completion, ensuring
                timelines, budgets, and quality standards are met.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="mb-4 text-3xl">📐</div>
              <h3 className="font-pp-neue-montreal mb-3 text-2xl font-medium text-white">
                Design & Engineering
              </h3>
              <p className="font-pp-neue-montreal text-sm leading-relaxed text-white/70">
                Innovative architectural solutions and structural engineering
                that balance aesthetics with functionality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="mb-4 text-3xl">🔧</div>
              <h3 className="font-pp-neue-montreal mb-3 text-2xl font-medium text-white">
                Quality Assurance
              </h3>
              <p className="font-pp-neue-montreal text-sm leading-relaxed text-white/70">
                Rigorous testing and inspection protocols to guarantee the
                highest standards of construction excellence.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="mb-4 text-3xl">🚛</div>
              <h3 className="font-pp-neue-montreal mb-3 text-2xl font-medium text-white">
                Logistics & Supply
              </h3>
              <p className="font-pp-neue-montreal text-sm leading-relaxed text-white/70">
                Streamlined material sourcing and delivery systems to keep your
                project moving efficiently.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="mb-4 text-3xl">👷</div>
              <h3 className="font-pp-neue-montreal mb-3 text-2xl font-medium text-white">
                Skilled Workforce
              </h3>
              <p className="font-pp-neue-montreal text-sm leading-relaxed text-white/70">
                Certified professionals and craftspeople dedicated to delivering
                exceptional workmanship on every project.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/15">
              <div className="mb-4 text-3xl">📊</div>
              <h3 className="font-pp-neue-montreal mb-3 text-2xl font-medium text-white">
                Cost Optimization
              </h3>
              <p className="font-pp-neue-montreal text-sm leading-relaxed text-white/70">
                Strategic planning and resource management to maximize value
                without compromising on quality or safety.
              </p>
            </div>
          </div>

          {/* Bottom Text Section */}
          <div className="mt-24 text-center md:mt-32">
            <p className="font-pp-neue-montreal mx-auto max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
              With over 18 years of experience, we&apos;ve built a reputation
              for excellence in construction, delivering projects that stand the
              test of time while exceeding client expectations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
