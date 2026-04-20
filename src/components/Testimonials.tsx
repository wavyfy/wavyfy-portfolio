"use client";
import DarkCTACard from "./DarkCTACard";
import Image from "next/image";
import { QuoteIcon, StarFilledIcon } from "@radix-ui/react-icons";
import StatusBadge from "./StatusBadge";
import { Reveal } from "./Reveal";
import { Stagger, staggerItem } from "./Stagger";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    metric: "3.5x",
    title: "increase in platform throughput",
    quote:
      "Their architectural choices drastically improved our data layer capacity. The system now handles 3.5x the volume without any latency spikes. Exceptional engineering.",
    author: "Sarah Coleman",
    role: "CTO",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",

    spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: 2,
    metric: "100ms",
    title: "latency reduction across core APIs",
    quote:
      "The precision with which they execute is rare. We cut 100ms off our core API responses, leading to an immediate boost in user retention and server efficiency.",
    author: "Amina Khatri",
    role: "VP of Engineering",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",

    spanClass: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    id: 3,
    metric: "Zero",
    title: "downtime during major migration",
    quote:
      "They architected and executed our v3 migration flawlessly. Moving a massive active user base with zero downtime requires a team that truly understands infrastructure routing and redundancy.",
    author: "Marcus Levine",
    role: "Co-founder & Architect",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",

    spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: 4,
    metric: "4x",
    title: "faster build pipelines",
    quote:
      "By optimizing our container configurations and caching strategies, they slashed our CI/CD pipeline times entirely. Our developers are now shipping code 4x faster.",
    author: "Julian Ortega",
    role: "Head of Infrastructure",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",

    spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
];

const TestimonialCard = ({
  testimonial,
  className,
}: {
  testimonial: (typeof testimonials)[0];
  className?: string;
}) => (
  <div
    className={`bg-white rounded-3xl p-5 md:p-5 shadow-lg border border-gray-200 flex flex-col h-full ${className || ""}`}
  >
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.author}
          width={48}
          height={48}
          sizes="48px"
          className="rounded-full object-cover"
        />
        <div suppressHydrationWarning>
          <h4 className="text-sm font-semibold text-gray-900">
            {testimonial.author}
          </h4>
          <p className="text-xs text-gray-500 font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>
      <StarFilledIcon className="w-7 h-7 text-gray-400" />
    </div>
    <QuoteIcon className="w-7 h-7 rotate-180 text-red-500 " />
    <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium mt-6 mb-10">
      {testimonial.quote}
    </p>
    <div className="mt-auto bg-gray-200 p-4 rounded-2xl">
      <h3 className="text-3xl font-semibold text-gray-900 mb-1">
        {testimonial.metric}
      </h3>
      <p className="text-2xl text-gray-500 font-medium">{testimonial.title}</p>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="sm:px-4 py-16 md:py-20 md:px-10">
      <Reveal delay={0.2}>
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <StatusBadge dotColor="bg-red-500" title="Testimonials" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.3rem] font-semibold leading-[1.2] tracking-tight">
              <span className="text-gray-900">Impact Reports.</span>
              <br />
              <span className="text-gray-500">
                Measurable technical output.
              </span>
            </h2>
          </div>

          {/* Bento Grid — Stagger wraps grid directly as motion.div */}
          <Stagger delay={0.25} stagger={0.3} duration={0.8}>
            {/* Grid is just a layout wrapper — NOT a stagger item itself */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 border border-gray-200 bg-white rounded-[32px] md:rounded-[40px] p-3 md:p-6 lg:p-8">
              {testimonials.map((t) => (
                <motion.div
                  suppressHydrationWarning
                  key={t.id}
                  variants={staggerItem}
                  custom={1}
                  className={t.spanClass}
                >
                  <TestimonialCard testimonial={t} />
                </motion.div>
              ))}

              <motion.div
                suppressHydrationWarning
                variants={staggerItem}
                custom={1}
                className="md:col-span-1 lg:col-span-2 lg:row-span-1"
              >
                <DarkCTACard className="h-full min-h-[300px]" />
              </motion.div>
            </div>
          </Stagger>
        </div>
      </Reveal>
    </section>
  );
}
