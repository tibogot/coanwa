"use client";

import { useState } from "react";
import TextReveal from "./TextReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What types of construction projects do you handle?",
    answer:
      "We specialize in a wide range of construction projects including commercial buildings, residential developments, infrastructure projects, industrial facilities, and renovation work. Our expertise spans from initial planning and design through to completion and ongoing maintenance.",
  },
  {
    question: "How long has your company been in operation?",
    answer:
      "We have over 18 years of experience in the construction and engineering industry, with a proven track record of delivering high-quality projects across West Africa. Our extensive experience allows us to handle complex projects with confidence and precision.",
  },
  {
    question: "What geographic areas do you serve?",
    answer:
      "We primarily operate across West Africa, delivering construction and engineering solutions throughout the region. Our team has experience working in various countries and can adapt to local requirements and regulations.",
  },
  {
    question: "Do you provide project management services?",
    answer:
      "Yes, we offer comprehensive project management services. Our expert team oversees every aspect of your project from conception to completion, ensuring timelines, budgets, and quality standards are consistently met throughout the construction process.",
  },
  {
    question: "What is your approach to quality assurance?",
    answer:
      "We maintain rigorous testing and inspection protocols at every stage of construction. Our quality assurance process includes regular site inspections, material testing, compliance checks, and final quality reviews to guarantee the highest standards of construction excellence.",
  },
  {
    question: "How do you handle project timelines and deadlines?",
    answer:
      "We use advanced project management tools and methodologies to ensure efficient scheduling and timely completion. Our team works closely with clients to establish realistic timelines and provides regular updates on project progress. We're committed to meeting deadlines while maintaining quality standards.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-24 md:py-32">
      <div className="px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col items-start">
            <TextReveal
              animateOnScroll={true}
              blockColor="#ff4d00"
              stagger={0.15}
              duration={0.8}
            >
              <h2 className="font-pp-neue-montreal mb-8 max-w-2xl text-left text-4xl font-medium text-black md:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h2>
            </TextReveal>
            <div className="text-left">
              <TextReveal
                animateOnScroll={true}
                blockColor="#ff4d00"
                stagger={0.15}
                duration={0.8}
              >
                <p className="font-pp-neue-montreal max-w-2xl text-left text-base leading-relaxed text-black/80 sm:text-lg md:text-xl">
                  Find answers to common questions about our construction
                  services, processes, and expertise.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-black/10 bg-white transition-all duration-300 hover:border-black/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full cursor-pointer items-center justify-between px-6 py-6 text-left transition-colors duration-200 hover:bg-black/5 md:px-8 md:py-8"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-pp-neue-montreal pr-8 text-lg font-medium text-black md:text-xl lg:text-2xl">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`h-6 w-6 transform text-black/60 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <p className="font-pp-neue-montreal text-base leading-relaxed text-black/70 md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
