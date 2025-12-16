"use client";

// import ShaderBackground from "./components/ShaderBackground4";
import TextReveal from "./components/TextReveal";
import StickyCards3D from "./components/StickyCards3D";
import ProfilesTicker from "./components/ProfilesTicker";
import FAQ from "./components/FAQ";
// import GlassCards from "./components/GlassCards";
import { Leva } from "leva";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Leva hidden />
      {/* <ShaderBackground /> */}
      {/* Hero Section with Image Background */}
      <section className="relative h-screen w-full">
        {/* Background Image - 100vh, not fixed */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sticky-cards/stickycard-1.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 flex h-full w-full items-end">
          <div className="w-full px-4 pb-8 md:px-8 md:pb-12">
            <p className="font-pp-neue-montreal text-2xl text-white md:text-6xl">
              Building excellence
              <br />
              across West Africa
            </p>
            <p className="font-pp-neue-montreal mt-4 max-w-2xl text-base text-white/80 md:mt-6 md:text-lg lg:text-xl">
              Three decades of expertise in construction and engineering,
              delivering integrated solutions that shape the future of
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Cards Section */}
      {/* <StickyCards /> */}
      <section className="w-full bg-white px-4 py-30 md:px-8">
        <div className="flex h-full max-w-7xl flex-col">
          <div className="text-left">
            <TextReveal blockColor="#ff4d00" animateOnScroll={true}>
              <h2 className="font-pp-neue-montreal text-left text-4xl text-black md:text-5xl lg:text-6xl">
                A construction <span className="text-secondary">company,</span>
                <br />
                offering integrated solution and
                <br />
                related <span className="text-secondary">services.</span>
              </h2>
            </TextReveal>
          </div>
          <div className="mt-32 flex flex-col items-start gap-6 md:mt-48">
            <p className="font-pp-neue-montreal max-w-2xl text-base text-black/80 md:text-lg lg:text-xl">
              Three decades of expertise in construction and engineering across
              West Africa.
              <br />
              We deliver integrated solutions from planning to execution.
              <br />
              Quality, innovation, and reliability in every project we
              undertake.
              <br />
              Transforming infrastructure and shaping the future of the region.
              <br />
              Your trusted partner for comprehensive construction services.
            </p>
            <Link
              href="/company"
              className="font-pp-neue-montreal hover:text-secondary flex cursor-pointer items-center gap-2 text-sm text-black transition-colors"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      {/* Service Scroll Section */}
      {/* <ServiceScroll /> */}

      <StickyCards3D />

      {/* Glass Cards Section */}
      {/* <GlassCards /> */}

      {/* Profiles Ticker Section */}
      <section className="relative w-full bg-white py-24 md:py-32">
        <div className="mb-16 px-4 md:mb-24 md:px-8">
          <div className="flex flex-col items-start">
            <TextReveal
              animateOnScroll={true}
              blockColor="#ff4d00"
              stagger={0.15}
              duration={0.8}
            >
              <p className="font-pp-neue-montreal mb-8 max-w-2xl text-left text-4xl font-medium text-black md:text-5xl lg:text-6xl">
                Our Team
              </p>
            </TextReveal>
            <div className="text-left">
              <TextReveal
                animateOnScroll={true}
                blockColor="#ff4d00"
                stagger={0.15}
                duration={0.8}
              >
                <p className="font-pp-neue-montreal max-w-2xl text-left text-base leading-relaxed text-black/80 sm:text-lg md:text-xl">
                  Meet the dedicated professionals driving excellence across all
                  our construction and engineering projects.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
        <ProfilesTicker />
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Full Width Background Image Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sticky-cards/stickycard-1.webp"
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
    </>
  );
}
