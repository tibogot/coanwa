"use client";

import TextReveal from "../components/TextReveal";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="w-full">
      <section className="flex h-screen w-full items-center justify-center">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <TextReveal
            animateOnScroll={true}
            blockColor="#0f121d"
            stagger={0.15}
            duration={0.8}
          >
            <h1 className="font-pp-neue-montreal text-5xl text-black md:text-6xl lg:text-7xl">
              Let’s connect
            </h1>
          </TextReveal>
        </div>
      </section>

      <section className="min-h-screen w-full bg-tertiary px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid w-full gap-10 rounded-3xl bg-[#0b0f1a] p-10 md:grid-cols-2 md:gap-12 md:p-14">
            {/* Left gradient panel */}
            <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-linear-to-b from-[#ff3a00] via-[#ff3a00] to-[#ff7a2b] md:min-h-[640px]">
              <div className="absolute inset-x-10 bottom-10 text-white">
                <p className="font-pp-neue-montreal text-5xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
                  Company, offering
                  <br />
                  integrated solution.
                </p>
              </div>
            </div>

            {/* Right form */}
            <div className="flex flex-col justify-center">
              <h2 className="font-pp-neue-montreal text-5xl leading-[1.05] text-white md:text-6xl">
                Sign up Account
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Le groupe structure et gère des véhicules.
              </p>

              <form className="mt-12 space-y-7" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-10 md:grid-cols-2">
                  <label className="block">
                    <span className="text-xs text-white/70">First Name</span>
                    <input
                      className="mt-3 h-12 w-full rounded-lg bg-white/7 px-4 text-white outline-none ring-1 ring-white/0 transition focus:ring-white/15"
                      type="text"
                      name="firstName"
                      autoComplete="given-name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs text-white/70">Last Name</span>
                    <input
                      className="mt-3 h-12 w-full rounded-lg bg-white/7 px-4 text-white outline-none ring-1 ring-white/0 transition focus:ring-white/15"
                      type="text"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs text-white/70">Email</span>
                  <input
                    className="mt-3 h-12 w-full rounded-lg bg-white/7 px-4 text-white outline-none ring-1 ring-white/0 transition focus:ring-white/15"
                    type="email"
                    name="email"
                    autoComplete="email"
                  />
                </label>

                <label className="block">
                  <span className="text-xs text-white/70">Email</span>
                  <input
                    className="mt-3 h-12 w-full rounded-lg bg-white/7 px-4 text-white outline-none ring-1 ring-white/0 transition focus:ring-white/15"
                    type="email"
                    name="email2"
                    autoComplete="off"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-8 h-14 w-full rounded-lg bg-white text-sm font-medium text-[#0b0f1a]"
                >
                  Email
                </button>

                <p className="pt-2 text-center text-sm text-white/70">
                  Le groupe structure et gère des véhicules.
                </p>
              </form>
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
