"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Carousel from "./Carousel";

const slides = [
  "https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png",
  "https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png",
  "https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg",
];

export default function ShowcaseSection() {
  return (
    <section className="max-w-360 mx-auto px-0 sm:px-6 md:px-10 w-full mt-10 mb-20">
      <div className="rounded-[20px] sm:rounded-[24px] p-4 shadow-sm border border-gray-100 flex flex-col gap-1">
        {/* Carousel Area */}
        <div className="relative py-4 sm:py-3">
          {/* Left Fade Overlay */}
          <div
            className="absolute top-0 left-0 h-full w-[2%] z-5 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #f5f5f5 0%, transparent 100%)",
            }}
          />
          {/* Right Fade Overlay */}
          <div
            className="absolute top-0 right-0 h-full w-[2%] z-5 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, #f5f5f5 0%, transparent 100%)",
            }}
          />

          <Carousel
            direction="horizontal"
            slowDownOnHover={true}
            pauseOnHover={false}
            slideSize="280px"
            gap="150px" // match gap-6 (24px)
            slides={slides.map((src, i) => (
              <div
                key={i}
                className="rounded-[20px] p-2 bg-white/80 border border-gray-200 shadow-lg flex-1 flex flex-col w-full h-[300px] sm:h-[300px] sm:w-[400px]"
              >
                <div className="rounded-[16px] overflow-hidden bg-black flex-1 relative group cursor-pointer">
                  <Image
                    src={src}
                    alt={`Slide ${i}`}
                    fill
                    sizes="300px"
                    className="object-cover opacity-100 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-2 sm:px-4 py-3 border border-gray-200 rounded-2xl">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-baseline">
            <h2 className="text-xl sm:text-[22px] font-semibold text-gray-900 tracking-tight">
              Project Showcase
            </h2>
            <span className="text-sm font-medium text-gray-500/90">
              Transforming categories at global scale
            </span>
          </div>

          <a className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-black transition-colors md:cursor-pointer">
            View All Projects
            <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center bg-gray-100/80 hover:bg-gray-200 transition-colors pointer-events-none">
              <ArrowRight
                className="w-3.5 h-3.5 text-gray-700"
                strokeWidth={2.5}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
