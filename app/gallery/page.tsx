"use client";

export default function Gallery() {
  return (
    <section className="relative flex h-screen w-full items-end bg-cover bg-center bg-no-repeat">
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
      <div className="relative z-10 w-full px-4 pb-8 md:px-8 md:pb-12">
        <h1 className="font-pp-neue-montreal text-2xl text-white md:text-6xl">
          Our portfolio of exceptional projects
          <br />
          across West Africa
        </h1>
      </div>
    </section>
  );
}
