"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We uncover your goals, audience, and challenges to build a clear roadmap for success.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Transforming insights into bold, user-focused designs that connect and convert.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Bringing designs to life with clean, performant code and rigorous quality assurance.",
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description:
      "Deploying your project and continuously refining for maximum performance and growth.",
  },
];

function ProcessStep({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const total = steps.length;
  const segment = 1 / total;
  const base = index * segment;

  // Card + number reveal: first half of the segment
  const revealStart = base;
  const revealEnd = base + segment * 0.5;

  const opacity = useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]);
  const y = useTransform(scrollYProgress, [revealStart, revealEnd], [50, 0]);

  // Line fill: second half of the segment (after card is revealed)
  const lineStart = revealEnd;
  const lineEnd = base + segment;
  const lineScaleY = useTransform(scrollYProgress, [lineStart, lineEnd], [0, 1]);

  return (
    <div className="flex gap-5 ml-10 ">
      {/* Number + Vertical Line */}
      <div className="flex flex-col items-center">
        <motion.span
          className="text-lg font-semibold text-gray-800 mb-2 border border-gray-300 h-10 w-10 rounded-full flex items-center justify-center"
          style={{ opacity }}
        >
          {step.number}
        </motion.span>

        {index < total - 1 ? (
          <div className="relative w-[3px] flex-1">
            {/* Gray track (always visible) */}
            <div className="absolute inset-0 bg-gray-200 rounded-full" />
            {/* Red fill (scroll-linked) */}
            <motion.div
              className="absolute inset-0 bg-red-400 rounded-full origin-top"
              style={{ scaleY: lineScaleY }}
            />
          </div>
        ) : (
          <div className="w-[2px] flex-1 bg-transparent" />
        )}
      </div>

      {/* Card */}
      <motion.div
        className="bg-white rounded-4xl border h-50 border-gray-200 p-6 mt-6 mb-6 flex-1 shadow-xs"
        style={{ opacity, y }}
      >
        <h3 className="text-2xl font-medium text-gray-500 mb-5">
          {step.title}
        </h3>
        <p className="text-md text-gray-700 font-medium">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.5"],
  });

  return (
    <section className="bg-[#f5f5f5] sm:px-4 py-20 md:py-28 md:px-10">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Label + Heading + Description */}
          <div className="lg:sticky lg:top-32 self-start">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
              <span className="text-md font-medium text-gray-700">
                Process
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.3rem] font-semibold leading-[1.2] tracking-tight mb-6">
              <span className="text-gray-900">
                Proven &amp; effective process.
              </span>
              <br />
              <span className="text-gray-500">That delivers results.</span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-800 max-w-md text-[1rem]">
              We dive deep into your goals, audience, and challenges to craft a
              strategy that drives clear direction and impact.
            </p>
          </div>

          {/* Right: Vertical Timeline */}
          <div ref={containerRef} className="flex flex-col ">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
