"use client";

import ShaderBackground from "./components/ShaderBackground4";
import TextReveal from "./components/TextReveal";
import StickyCards3D from "./components/StickyCards3D";
import ProfilesTicker from "./components/ProfilesTicker";
import FAQ from "./components/FAQ";
// import GlassCards from "./components/GlassCards";
import { Leva } from "leva";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
import NigeriaMapSvg from "./components/NigeriaMapSvg";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

export default function Home() {
  const statsRowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!statsRowRef.current) return;

    const ctx = gsap.context(() => {
      const els = Array.from(
        statsRowRef.current!.querySelectorAll<HTMLElement>("[data-count]"),
      );

      els.forEach((el) => {
        const endValue = Number(el.dataset.count ?? "0");
        const suffix = el.dataset.suffix ?? "";

        const state = { value: 0 };

        // Ensure we start at 0 on mount.
        el.textContent = `0${suffix}`;

        gsap.to(state, {
          value: endValue,
          ease: "none",
          scrollTrigger: {
            trigger: statsRowRef.current!,
            start: "top 85%",
            // Finish earlier so the numbers reach their final values before the section hits the top
            end: "top 45%",
            scrub: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(state.value)}${suffix}`;
          },
        });
      });
    }, statsRowRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <>
      <Leva hidden />
      <ShaderBackground />
      {/* Hero Section with Image Background */}
      <section className="relative h-screen w-full">
        {/* Bottom-left logo overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end justify-start p-6 md:p-10">
          <Image
            src="/newlogohero.svg"
            alt="COANWA"
            width={850}
            height={260}
            priority
            className="h-auto w-[min(60vw,520px)]"
          />
        </div>
        {/* Background Image - 100vh, not fixed */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/vitalis-nwenyi.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div> */}
        {/* Hero Content */}
        {/* <div className="relative z-10 flex h-full w-full items-end">
          <div className="w-full px-4 pb-8 md:px-8 md:pb-12">
            <div className="flex flex-col items-start">
              <TextReveal
                animateOnScroll={true}
                blockColor="white"
                stagger={0.15}
                duration={0.8}
              >
                <p className="font-pp-neue-montreal mb-8 max-w-4xl text-left text-4xl text-white md:text-6xl">
                  Road Construction & Civil Engineering Excellence in
                  Nigeria{" "}
                </p>
                <p className="font-pp-neue-montreal max-w-2xl text-left text-base leading-relaxed text-white/80 md:text-xl">
                  Your Partner for Highways, Urban Roads & Infrastructure
                  Projects
                </p>
              </TextReveal>
              <div className="text-left"></div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Sticky Cards Section */}
      {/* <StickyCards /> */}
      <section className="relative min-h-[120vh] w-full overflow-hidden bg-[#EAEAEA] px-4 py-30 md:px-8">
        {/* Nigeria map background (watermark) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-50">
          <NigeriaMapSvg className="h-full w-full p-10 md:p-16" aria-hidden />
        </div>

        {/* 4 pulsing hotspots overlay */}
        {/* <div className="pointer-events-none absolute inset-0 z-1">
          <span
            className="map-pulse map-pulse--sm"
            style={{ left: "22%", top: "52%" }}
          />
          <span
            className="map-pulse map-pulse--md"
            style={{ left: "43%", top: "38%" }}
          />
          <span
            className="map-pulse map-pulse--lg"
            style={{ left: "63%", top: "66%" }}
          />
          <span
            className="map-pulse map-pulse--xl"
            style={{ left: "76%", top: "30%" }}
          />
        </div> */}

        <div className="relative z-10 mx-auto flex h-full w-full flex-col">
          <div className="text-left">
            <TextReveal blockColor="#ff3300" animateOnScroll={true}>
              <p className="font-pp-neue-montreal-mono text-orange mb-8 text-xs md:text-sm">
                ABOUT
              </p>
              <h2 className="font-pp-neue-montreal text-orange text-left text-4xl md:text-5xl lg:text-6xl">
                A construction company,
                <br />
                offering integrated solution and
                <br />
                related services.
              </h2>
            </TextReveal>
          </div>
          <div className="mt-32 flex justify-end md:mt-48">
            <div className="flex flex-col gap-6">
              <TextReveal blockColor="#ff3300" animateOnScroll={true}>
                <p className="font-pp-neue-montreal text-orange max-w-2xl text-left text-base md:text-lg lg:text-xl">
                  Three decades of expertise in construction and engineering
                  across West Africa.
                  <br />
                  We deliver integrated solutions from planning to execution.
                  <br />
                  Quality, innovation, and reliability in every project we
                  undertake.
                  <br />
                  Transforming infrastructure and shaping the future of the
                  region.
                  <br />
                  Your trusted partner for comprehensive construction services.
                </p>
              </TextReveal>
              <Link
                href="/company"
                className="font-pp-neue-montreal text-orange hover:text-orange/80 flex cursor-pointer items-center gap-2 text-sm transition-colors"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Stats Row (bottom of section) */}
          <div
            ref={statsRowRef}
            className="mt-auto flex w-full flex-col gap-8 pt-20 pb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-12 md:pt-28 md:pb-14"
          >
            <div className="text-left">
              <div
                data-count="89"
                data-suffix="%"
                className="font-pp-neue-montreal text-orange text-6xl tracking-tight md:text-7xl lg:text-8xl"
              >
                89%
              </div>
              <div className="font-pp-neue-montreal text-orange mt-2 text-sm md:text-base">
                client satisfaction
              </div>
            </div>
            <div className="text-left">
              <div
                data-count="34"
                data-suffix="+"
                className="font-pp-neue-montreal text-orange text-6xl tracking-tight md:text-7xl lg:text-8xl"
              >
                34+
              </div>
              <div className="font-pp-neue-montreal text-orange mt-2 text-sm md:text-base">
                delivering excellence
              </div>
            </div>
            <div className="text-left">
              <div
                data-count="48"
                data-suffix="+"
                className="font-pp-neue-montreal text-orange text-6xl tracking-tight md:text-7xl lg:text-8xl"
              >
                48+
              </div>
              <div className="font-pp-neue-montreal text-orange mt-2 text-sm md:text-base">
                completed successfully
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Scroll Section */}
      {/* <ServiceScroll /> */}

      <StickyCards3D />

      {/* Glass Cards Section */}
      {/* <GlassCards /> */}

      {/* 100vh Tertiary Section (pre-team spacer) */}
      <section className="bg-tertiary relative h-screen w-full">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center px-4 md:px-8">
          <p className="font-pp-neue-montreal text-2xl text-white md:text-4xl">
            Tertiary section
          </p>
        </div>
      </section>

      {/* Profiles Ticker Section */}
      <section className="relative w-full bg-[#EAEAEA] py-24 md:py-32">
        <div className="mb-16 px-4 md:mb-24 md:px-8">
          <div className="flex flex-col items-start">
            <div className="text-left">
              <TextReveal
                animateOnScroll={true}
                blockColor="#ff4d00"
                stagger={0.15}
                duration={0.8}
              >
                <p className="font-pp-neue-montreal-mono text-orange mb-6 text-xs md:text-sm">
                  TEAM
                </p>
                <p className="font-pp-neue-montreal text-orange mb-8 max-w-2xl text-left text-4xl md:text-5xl lg:text-6xl">
                  Our People
                </p>
              </TextReveal>
            </div>
            <div className="text-left">
              <TextReveal
                animateOnScroll={true}
                blockColor="#ff4d00"
                stagger={0.15}
                duration={0.8}
              >
                <p className="font-pp-neue-montreal text-orange/80 max-w-2xl text-left text-base leading-relaxed sm:text-lg md:text-xl">
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

      {/* Spacer Section (shows fixed shader background) */}
      <section className="relative h-screen w-full bg-transparent" />

      {/* Full Width Background Image Section */}
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
    </>
  );
}
