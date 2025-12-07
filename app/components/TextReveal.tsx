"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsapConfig";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

interface TextRevealProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
}

export default function TextReveal({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  stagger = 0.15,
  duration = 0.75,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<Element[]>([]);
  const blocks = useRef<HTMLDivElement[]>([]);
  const triggers = useRef<ScrollTriggerType[]>([]);
  const timelines = useRef<gsap.core.Timeline[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Cleanup previous state
      splitRefs.current.forEach((split) => split?.revert());
      triggers.current.forEach((t) => t.kill());
      timelines.current.forEach((tl) => tl.kill());

      splitRefs.current = [];
      lines.current = [];
      blocks.current = [];
      triggers.current = [];
      timelines.current = [];

      let elements: Element[] = [];

      if (containerRef.current?.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else if (containerRef.current) {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const split = SplitText.create(element as gsap.DOMTarget, {
          type: "lines",
          linesClass: "block-line++",
          lineThreshold: 0.1,
        });

        splitRefs.current.push(split);

        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.className = "block-line-wrapper";
          if (line.parentNode) {
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
          }

          const block = document.createElement("div");
          block.className = "block-revealer";
          block.style.backgroundColor = blockColor;
          wrapper.appendChild(block);

          lines.current.push(line);
          blocks.current.push(block);
        });
      });

      gsap.set(lines.current, { opacity: 0 });
      gsap.set(blocks.current, { scaleX: 0, transformOrigin: "left center" });

      // Make container visible now that GSAP has initialized
      if (containerRef.current) {
        gsap.set(containerRef.current, { visibility: "visible" });
      }

      const createBlockRevealAnimation = (
        block: HTMLDivElement,
        line: Element,
        index: number
      ) => {
        const tl = gsap.timeline({ delay: delay + index * stagger });

        tl.to(block, { scaleX: 1, duration: duration, ease: "power4.inOut" });
        tl.set(line, { opacity: 1 });
        tl.set(block, { transformOrigin: "right center" });
        tl.to(block, { scaleX: 0, duration: duration, ease: "power4.inOut" });

        return tl;
      };

      if (animateOnScroll) {
        blocks.current.forEach((block, index) => {
          const tl = createBlockRevealAnimation(
            block,
            lines.current[index],
            index
          );
          tl.pause();
          timelines.current.push(tl);

          const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
            onEnter: () => tl.play(),
          });
          triggers.current.push(trigger);
        });
      } else {
        blocks.current.forEach((block, index) => {
          const tl = createBlockRevealAnimation(
            block,
            lines.current[index],
            index
          );
          timelines.current.push(tl);
        });
      }

      // Cleanup function
      return () => {
        triggers.current.forEach((t) => t.kill());
        timelines.current.forEach((tl) => tl.kill());
        gsap.killTweensOf([...blocks.current, ...lines.current]);

        splitRefs.current.forEach((split) => split?.revert());

        const wrappers = containerRef.current?.querySelectorAll(
          ".block-line-wrapper"
        );

        wrappers?.forEach((wrapper: Element) => {
          if (wrapper.parentNode && wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.remove();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  return (
    <div ref={containerRef} data-text-reveal>
      {children}
    </div>
  );
}
