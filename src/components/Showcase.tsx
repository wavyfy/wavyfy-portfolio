"use client";

import Image from "next/image";
import Carousel from "./Carousel";
import { Reveal } from "./Reveal";

const slides = [
  "https://framerusercontent.com/images/1KCYDj61X5Ycm5Vp5kluuhMho.png",
  "https://framerusercontent.com/images/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png",
  "https://framerusercontent.com/images/MAVstedJYqQvsrJ7l1kxjR498.jpg",
];

export default function ShowcaseSection() {
  return (
    <section className="max-w-360 mx-auto px-0 sm:px-6 md:px-10 w-full pb-16 md:pb-20">
      <Reveal delay={1.5} duration={2}>
        <div className="rounded-[20px] sm:rounded-[24px] p-4 shadow-sm border border-gray-100 flex flex-col gap-1">
          {/* Carousel Area */}
          <div className="relative py-4 sm:py-3">
            {/* Left Fade Overlay */}
            <div
              className="absolute top-0 h-full md:left-0 -left-2 w-[5%] md:w-[2%] z-5 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #f5f5f5 0%, transparent 100%)",
              }}
            />
            {/* Right Fade Overlay */}
            <div
              className="absolute top-0 md:right-0 -right-1 h-full w-[5%] md:w-[2%] z-5 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, #f5f5f5 0%, transparent 100%)",
              }}
            />

            <Carousel
              direction="horizontal"
              slowDownOnHover={true}
              pauseOnHover={false}
              slideSize="380px"
              gap="20px"
              gapLg="50px"
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
          <div className="flex items-center px-2 sm:px-4 py-3 border border-gray-200 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-1 sm:gap-3 w-full justify-between items-center md:items-baseline">
              <h2 className="text-xl sm:text-[22px] font-semibold text-gray-900 tracking-tight text-center md:text-left">
                What type of services you want
              </h2>
              <span className="text-sm font-medium text-gray-500/90 md:ml-auto text-center md:text-right">
                Transforming categories at global scale
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
