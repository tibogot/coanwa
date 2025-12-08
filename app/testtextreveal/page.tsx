import TextReveal from "../components/TextReveal";
import Image from "next/image";

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section - 100vh */}
        <section className="h-screen flex items-center justify-center px-8">
          <div className="text-center">
            <TextReveal animateOnScroll={false} blockColor="#000" delay={0.3}>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-tight font-pp-neue-montreal">
                Beautiful Text
                <br />
                Reveal Animation
              </h1>
            </TextReveal>
          </div>
        </section>

        {/* Image Section 1 */}
        <section className="py-24 px-8 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video overflow-hidden">
            <Image
              src="https://picsum.photos/1200/675?random=1"
              alt="Beautiful Landscape"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Text Section 1 */}
        <section className="py-32 px-8 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto w-full">
            <TextReveal blockColor="#3b82f6" stagger={0.2} duration={0.8}>
              <div className="space-y-6 mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
                  Smooth & Elegant
                </h2>
                <p className="text-2xl md:text-3xl text-gray-700 font-light text-center">
                  Experience the power of GSAP animations
                </p>
                <p className="text-xl md:text-2xl text-gray-600 font-light text-center">
                  With customizable reveal effects
                </p>
              </div>
            </TextReveal>
          </div>
        </section>

        {/* Image Section 2 */}
        <section className="py-24 px-8 flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-square overflow-hidden">
            <Image
              src="https://picsum.photos/800/800?random=2"
              alt="Portrait Photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 768px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Text Section 2 */}
        <section className="py-32 px-8 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto w-full">
            <TextReveal animateOnScroll={true} blockColor="#10b981" delay={0.2}>
              <div className="mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-8 text-center font-pp-neue-montreal">
                  Scroll Down to See Magic
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 font-light text-center font-pp-neue-montreal">
                  Each section reveals as you scroll
                </p>
              </div>
            </TextReveal>
          </div>
        </section>

        {/* Image Section 3 - Full Width */}
        <section className="py-24 px-8">
          <div className="relative w-full h-[60vh] overflow-hidden">
            <Image
              src="https://picsum.photos/1600/900?random=3"
              alt="Wide Landscape"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Text Section 3 */}
        <section className="py-32 px-8 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto w-full">
            <TextReveal
              blockColor="#8b5cf6"
              stagger={0.1}
              animateOnScroll={true}
            >
              <div className="space-y-8 mx-auto text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 text-center font-pp-neue-montreal">
                  Multiple Elements
                </h3>
                <p className="text-2xl md:text-3xl text-gray-700 font-light text-center font-pp-neue-montreal">
                  Use data-copy-wrapper attribute
                </p>
                <p className="text-xl md:text-2xl text-gray-600 font-light text-center font-pp-neue-montreal">
                  To animate all children separately
                </p>
              </div>
            </TextReveal>
          </div>
        </section>

        {/* Image Section 4 */}
        <section className="py-24 px-8 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video overflow-hidden">
            <Image
              src="https://picsum.photos/1200/675?random=4"
              alt="Nature Scene"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Text Section 4 */}
        <section className="py-32 px-8 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto w-full">
            <TextReveal
              animateOnScroll={false}
              blockColor="#ef4444"
              delay={0.5}
            >
              <div className="mx-auto text-center">
                <p className="text-4xl md:text-5xl font-light text-gray-800 text-center font-pp-neue-montreal">
                  This reveals immediately on page load
                </p>
              </div>
            </TextReveal>
          </div>
        </section>

        {/* Text Section - Long Paragraph Example */}
        <section className="py-32 px-8 flex items-center justify-center">
          <div className="max-w-4xl mx-auto w-full text-left">
            <TextReveal
              animateOnScroll={true}
              blockColor="#ec4899"
              stagger={0.15}
              duration={0.8}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-pp-neue-montreal">
                Long Paragraph Example
              </h2>
            </TextReveal>
            <TextReveal
              animateOnScroll={true}
              blockColor="#ec4899"
              stagger={0.15}
              duration={0.8}
            >
              <p className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed font-pp-neue-montreal">
                This is a longer paragraph that will definitely wrap to multiple
                lines when displayed on the screen. The TextReveal component
                will automatically detect each line break and create a separate
                block revealer for each line of text. As you can see, this
                paragraph contains enough text to span across several lines,
                allowing you to observe how the animation creates individual
                blocks for each line. The stagger effect will make each line
                reveal sequentially, creating a beautiful cascading animation
                effect that draws attention to the content as it appears on
                screen. This demonstrates the power of GSAPs SplitText plugin
                combined with custom reveal animations to create engaging and
                professional text animations.
              </p>
            </TextReveal>
          </div>
        </section>

        {/* Image Section 5 */}
        <section className="py-24 px-8 flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-square overflow-hidden">
            <Image
              src="https://picsum.photos/800/800?random=5"
              alt="Artistic Photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 768px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Text Section 5 - Dark Background */}
        <section className="py-32 px-8 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto w-full">
            <TextReveal blockColor="#f59e0b" duration={1} stagger={0.15}>
              <div className="bg-gray-900 p-12 md:p-16 rounded-3xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-black text-white text-center font-pp-neue-montreal">
                  Works With Any Styling
                </h2>
                <p className="text-2xl md:text-3xl text-gray-300 font-light mt-6 text-center font-pp-neue-montreal">
                  Dark backgrounds, light backgrounds, gradients
                </p>
              </div>
            </TextReveal>
          </div>
        </section>

        {/* Final Image Section - Full Width 100vh */}
        <section className="relative w-full h-screen overflow-hidden">
          <Image
            src="https://picsum.photos/1920/1080?random=6"
            alt="Full Width Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8 w-full max-w-6xl mx-auto">
              <TextReveal blockColor="#ffffff" duration={0.9} stagger={0.2}>
                <div className="mx-auto text-center">
                  <h2 className="text-6xl md:text-8xl font-black text-white text-center font-pp-neue-montreal">
                    Text Over Image
                  </h2>
                  <p className="text-2xl md:text-3xl text-white/90 font-light mt-6 text-center font-pp-neue-montreal">
                    Beautiful reveal on any background
                  </p>
                </div>
              </TextReveal>
            </div>
          </div>
        </section>

        {/* Spacer for final scroll */}
        <div className="h-32" />
      </div>
    </div>
  );
}
