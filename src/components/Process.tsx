"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";


const steps = [
  {
    number: "01",
    title: "Audit & Analysis",
    description:
      "Deep-dive diagnostics into your current architecture and market positioning.",
  },
  {
    number: "02",
    title: "Architectural Design",
    description:
      "Crafting the blueprint for a scalable, high-performance user experience.",
  },
  {
    number: "03",
    title: "Precision Development",
    description:
      "Deploying robust, battle-tested code built with modern stacks.",
  },
  {
    number: "04",
    title: "Performance Scaling",
    description:
      "Continuous optimization to ensure your product leads, never follows.",
  },
];

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const stepRef = useRef<HTMLDivElement>(null);
  const total = steps.length;

  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start 0.85", "center 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const lineScaleY = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <div ref={stepRef} className="flex gap-5 ml-2 sm:ml-10">
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

      <motion.div
        className="bg-white rounded-3xl border h-50 border-gray-200 p-4 sm:p-6 mt-6 mb-6 flex-1 shadow-xs"
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
    <section className="sm:px-4 py-20 md:py-28 md:px-10">
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
                Strategic Execution.
              </span>
              <br />
              <span className="text-gray-500">Zero compromises.</span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-800 max-w-md text-[1rem]">
              We systematically architect, build, and deploy high-conversion systems tailored to your technical requirements.
            </p>
          </div>

          {/* Right: Vertical Timeline */}
          <div ref={containerRef} className="flex flex-col ">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
