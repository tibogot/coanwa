"use client";

import MaskedBorderShine from "../components/MaskedBorderShine";

export default function TestShinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        <h1 className="text-center text-4xl font-bold text-white">
          Masked Border Shine Effect
        </h1>

        {/* Example 1: Card with content - glass effect */}
        <MaskedBorderShine
          className="rounded-2xl p-12"
          shineColor="hsl(0 0% 100% / 0.8)"
          borderWidth={0.8}
          enablePointer={true}
          autoAnimate={false}
        >
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Move your mouse around
            </h2>
            <p className="text-lg text-white/70">
              The shine effect follows your cursor along the border
            </p>
          </div>
        </MaskedBorderShine>

        {/* Example 2: Icon/Image container - glass effect with background */}
        <div className="relative mx-auto h-64 w-64 rounded-3xl overflow-hidden">
          {/* Background pattern for glass effect - visible through the glass */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              repeating-linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.03) 0px,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px,
                transparent 11px
              ),
              repeating-linear-gradient(
                -45deg,
                rgba(255, 255, 255, 0.03) 0px,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px,
                transparent 11px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%, 20px 20px, 20px 20px'
          }}></div>
          
          <MaskedBorderShine
            className="h-full w-full"
            shineColor="hsl(0 0% 100% / 0.8)"
            borderWidth={0.8}
            enablePointer={true}
            autoAnimate={false}
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-8xl">☀️</div>
            </div>
          </MaskedBorderShine>
        </div>

        {/* Example 3: Multiple cards - glass effect */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <MaskedBorderShine
            className="rounded-xl p-8"
            shineColor="hsl(0 0% 100% / 0.8)"
            borderWidth={0.8}
            enablePointer={true}
            autoAnimate={false}
          >
            <h3 className="mb-2 text-xl font-semibold text-white">Card 1</h3>
            <p className="text-white/70">
              Glass effect with border shine
            </p>
          </MaskedBorderShine>

          <MaskedBorderShine
            className="rounded-xl p-8"
            shineColor="hsl(0 0% 100% / 0.8)"
            borderWidth={0.8}
            enablePointer={true}
            autoAnimate={true}
          >
            <h3 className="mb-2 text-xl font-semibold text-white">Card 2</h3>
            <p className="text-white/70">
              Auto-animate enabled - animates when not hovering
            </p>
          </MaskedBorderShine>
        </div>

        {/* Example 4: Button-style - glass effect */}
        <div className="flex justify-center">
          <MaskedBorderShine
            className="inline-block rounded-full px-8 py-4"
            shineColor="hsl(0 0% 100% / 0.9)"
            borderWidth={0.8}
            enablePointer={true}
            autoAnimate={false}
          >
            <button className="font-semibold text-white">
              Click Me (with shine effect)
            </button>
          </MaskedBorderShine>
        </div>
      </div>
    </div>
  );
}
