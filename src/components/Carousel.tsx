"use client";

import React, { useRef, useEffect, useState } from "react";

type CarouselProps = {
  slides: React.ReactNode[];
  direction?: "horizontal" | "vertical";
  interval?: number; // deprecated for continuous, kept for compatibility
  speed?: number; // deprecated for continuous, kept for compatibility
  pauseOnHover?: boolean;
  slowDownOnHover?: boolean;
  slideSize?: string;
  gap?: string;
  className?: string;
};

export default function Carousel({
  slides,
  direction = "horizontal",
  pauseOnHover = false,
  slowDownOnHover = true,
  slideSize = "100%",
  gap = "0px",
  className = "",
}: CarouselProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  // Triple the array:
  // Set 1 transitions to Set 2.
  // Set 3 exists so the trailing edge is visually filled.
  const extendedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    if (!containerRef.current) return;

    const itemsPerSet = slides.length;
    // Calculate the precise pixel/percentage coordinate to jump back exactly 1 array-length
    const distanceCalc = `calc(-${itemsPerSet} * (${slideSize} + ${gap}))`;
    const offset =
      direction === "horizontal"
        ? `translate3d(${distanceCalc}, 0, 0)`
        : `translate3d(0, ${distanceCalc}, 0)`;

    const keyframes = [
      { transform: "translate3d(0, 0, 0)" },
      { transform: offset },
    ];

    // Smooth continuous loop timing.
    // Roughly 4 seconds per slide for a premium feeling scrolling speed.
    const scrollDuration = itemsPerSet * 4000;

    const timing: KeyframeAnimationOptions = {
      duration: scrollDuration,
      iterations: Infinity,
      easing: "linear",
    };

    const anim = containerRef.current.animate(keyframes, timing);
    animationRef.current = anim;

    return () => {
      anim.cancel();
    };
  }, [slides.length, slideSize, gap, direction]);

  useEffect(() => {
    if (animationRef.current) {
      if (isHovered && pauseOnHover) {
        animationRef.current.playbackRate = 0;
      } else if (isHovered && slowDownOnHover) {
        animationRef.current.playbackRate = 0.25; // 25% speed
      } else {
        animationRef.current.playbackRate = 0.5; // 100% speed
      }
    }
  }, [isHovered, slowDownOnHover, pauseOnHover]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className={`flex w-full h-full mb-5 ${
          direction === "horizontal" ? "flex-row" : "flex-col"
        }`}
        style={{ gap: gap }}
      >
        {extendedSlides.map((slide, idx) => (
          <div
            key={idx}
            className="shrink-0 relative"
            style={{
              width: direction === "horizontal" ? slideSize : "100%",
              height: direction === "vertical" ? slideSize : "100%",
            }}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
