"use client";

import { motion } from "framer-motion";
import BookCallButton from "./BookCallButton";
import StatusBadge from "./StatusBadge";
import TestimonialCard from "./TestimonialCard";
import { Stagger, staggerItem } from "./Stagger";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-0 pb-0 md:pt-0 md:pb-28">
      <div className="relative max-w-8xl mx-auto px-2 sm:px-4 pt-5 pb-0">
        <Stagger delay={0.5} stagger={0.8} duration={1.2}>
          {/* Center Content */}
          <motion.div
            suppressHydrationWarning
            variants={staggerItem}
            className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto p-7 md:pt-25 md:pb-5"
          >
            <div className="flex justify-center">
              <StatusBadge className="mb-5" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[3rem] font-semibold leading-[1.15] tracking-tight text-gray-900 mb-6">
              Built for Scale.
              <br />
              Designed for Impact.
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-md mb-10 leading-relaxed">
              We partner with visionary startups to engineer digital products
              that dominate their category and convert at scale.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mb-10">
              <BookCallButton
                className="flex items-center gap-3 bg-[#0B1220] text-white text-md font-medium px-3 py-2 rounded-xl border shadow-xl shadow-black/30 border-white/10 hover:bg-[#0f172a] transition-all"
                iconContainerClassName="w-12 h-8 rounded-lg bg-white/10"
                iconClassName="w-4 h-4 text-white"
              />
            </div>
          </motion.div>

          {/* Both testimonial columns */}
          <motion.div
            suppressHydrationWarning
            variants={staggerItem}
            custom={1.2}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Left Side */}
            <div
              className="hidden lg:block absolute left-4 xl:left-8 top-5 w-70 space-y-5 pointer-events-auto"
              style={{ perspective: "1800px", transformStyle: "preserve-3d" }}
            >
              <TestimonialCard
                quote="...days, not weeks—highly recommend."
                author="Marcus T"
                className="translate-x-2 scale-90 opacity-30 shadow-sm"
                style={{
                  transform: "rotateY(4deg) rotateX(-2deg) translateZ(20px)",
                  backfaceVisibility: "hidden",
                }}
              />
              <TestimonialCard
                quote="The updates and attention to detail are unmatched."
                author="Nora S"
                className="translate-x-20 scale-105 opacity-100 shadow-2xl"
                style={{
                  transform: "rotateY(3deg) rotateX(1.5deg) translateZ(60px)",
                  backfaceVisibility: "hidden",
                }}
              />
              <TestimonialCard
                quote="Saved me weeks of work, and the result looks professional."
                author=""
                className="translate-x-6 scale-95 opacity-60 shadow-md"
                style={{
                  transform: "rotateY(5deg) rotateX(-2deg) translateZ(35px)",
                  backfaceVisibility: "hidden",
                }}
              />
              <TestimonialCard
                quote="Completely changed how I approach launches."
                author="Yara L"
                className="translate-x-24 scale-100 opacity-85 shadow-xl"
                style={{
                  transform: "rotateY(3deg) rotateX(2deg) translateZ(50px)",
                  backfaceVisibility: "hidden",
                }}
              />
              <TestimonialCard
                quote="...days, not weeks—highly recommend."
                author="Marcus T"
                className="translate-x-8 scale-90 opacity-25 shadow-sm"
                style={{
                  transform: "rotateY(6deg) rotateX(-1deg) translateZ(15px)",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>

            {/* Right Side */}
            <div
              className="hidden lg:block absolute right-4 xl:right-8 top-5 w-70 space-y-5 pointer-events-auto"
              style={{ perspective: "1800px", transformStyle: "preserve-3d" }}
            >
              <TestimonialCard
                quote="...experience—launched my site in no time!"
                author="Daniel K"
                className="-translate-x-20 scale-95 opacity-35 shadow-sm"
                style={{
                  transform: "rotateY(-4deg) rotateX(2deg) translateZ(25px)",
                  backfaceVisibility: "hidden",
                }}
              />
              <TestimonialCard
                quote="Beautiful template, easy to customize, and worth every penny."
                author="Amelia R"
                className="-translate-x-4 scale-105 opacity-100 shadow-2xl"
                style={{
                  transform: "rotateY(-3deg) rotateX(-1.5deg) translateZ(65px)",
                  backfaceVisibility: "hidden",
                }}
              />
              <TestimonialCard
                quote="Exactly what I needed to kickstart my SaaS project fast."
                author="Leo M"
                className="-translate-x-16 scale-90 opacity-55 shadow-md"
                style={{
                  transform: "rotateY(-5deg) rotateX(2deg) translateZ(40px)",
                  backfaceVisibility: "hidden",
                }}
              />
              <TestimonialCard
                quote="Worth every penny, shipping faster than ever."
                author="Sofia B"
                className="-translate-x-2 scale-100 opacity-85 shadow-xl"
                style={{
                  transform: "rotateY(-3deg) rotateX(-2deg) translateZ(55px)",
                  backfaceVisibility: "hidden",
                }}
              />
              <TestimonialCard
                quote="...experience—launched my site in no time!"
                author="Daniel K"
                className="-translate-x-14 scale-90 opacity-25 shadow-sm"
                style={{
                  transform: "rotateY(-6deg) rotateX(1deg) translateZ(20px)",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
}
