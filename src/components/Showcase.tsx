import Image from "next/image";
import Carousel from "./Carousel";
import { Reveal } from "./Reveal";

import { content } from "@/content/content";

const slides = content.showcase.slides;

export default function ShowcaseSection() {
  return (
    <section className="max-w-360 mx-auto px-0 sm:px-6 md:px-10 pb-16 md:pb-20 relative ">
      <Reveal delay={1} duration={2}>
        <div className="rounded-[20px] sm:rounded-[24px] p-4 shadow-sm border border-gray-100 flex flex-col gap-1 overflow-hidden">
          {/* Header */}
          <div className="order-1 md:order-2 flex items-center px-2 sm:px-4 py-3 border border-gray-200 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-1 sm:gap-3 w-full justify-between items-center md:items-baseline">
              <h2 className="text-xl sm:text-[22px] font-semibold text-gray-900 tracking-tight text-center md:text-left">
                {content.showcase.title}
              </h2>
              <span className="text-sm font-medium text-gray-500/90 md:ml-auto text-center md:text-right">
                {content.showcase.subtitle}
              </span>
            </div>
          </div>

          {/* Carousel Area */}
          <div className="order-2 md:order-1 py-4 sm:py-3 relative">
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
              slides={slides.map(({ src, alt }, i) => (
                <div
                  key={i}
                  className="rounded-[20px] p-2 bg-white/80 border border-gray-200 shadow-lg flex-1 flex flex-col w-full h-[230px] sm:h-[230px] sm:w-[400px]"
                >
                  <div className="rounded-[16px] overflow-hidden bg-white flex-1 relative group cursor-pointer">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      quality={75}
                      priority={i === 0}
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
