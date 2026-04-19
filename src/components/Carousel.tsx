"use client";

import React, { useRef, useEffect, useState } from "react";

type CarouselProps = {
  slides: React.ReactNode[];
  direction?: "horizontal" | "vertical";
  interval?: number;
  speed?: number;
  pauseOnHover?: boolean;
  slowDownOnHover?: boolean;
  slideSize?: string;
  gap?: string;
  gapSm?: string;
  gapMd?: string;
  gapLg?: string;
  className?: string;
};

export default function Carousel({
  slides,
  direction = "horizontal",
  pauseOnHover = false,
  slowDownOnHover = true,
  slideSize = "100%",
  gap = "16px",
  gapSm,
  gapMd,
  gapLg,
  className = "",
}: CarouselProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeGap, setActiveGap] = useState(gap);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  // Responsive gap calculation
  useEffect(() => {
    const updateGap = () => {
      const w = window.innerWidth;
      if (w >= 1024 && gapLg) setActiveGap(gapLg);
      else if (w >= 768 && gapMd) setActiveGap(gapMd);
      else if (w >= 640 && gapSm) setActiveGap(gapSm);
      else setActiveGap(gap);
    };

    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, [gap, gapSm, gapMd, gapLg]);

  const extendedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    if (!containerRef.current) return;

    const itemsPerSet = slides.length;
    const distanceCalc = `calc(-${itemsPerSet} * (${slideSize} + ${activeGap}))`;
    const offset =
      direction === "horizontal"
        ? `translate3d(${distanceCalc}, 0, 0)`
        : `translate3d(0, ${distanceCalc}, 0)`;

    const keyframes = [
      { transform: "translate3d(0, 0, 0)" },
      { transform: offset },
    ];

    const scrollDuration = slides.length * 4000;

    const timing: KeyframeAnimationOptions = {
      duration: scrollDuration,
      iterations: Infinity,
      easing: "linear",
    };

    const anim = containerRef.current.animate(keyframes, timing);
    animationRef.current = anim;

    return () => anim.cancel();
  }, [slides.length, slideSize, activeGap, direction]);

  useEffect(() => {
    if (animationRef.current) {
      if (isHovered && pauseOnHover) {
        animationRef.current.playbackRate = 0;
      } else if (isHovered && slowDownOnHover) {
        animationRef.current.playbackRate = 0.25;
      } else {
        animationRef.current.playbackRate = 0.5;
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
        style={{ gap: activeGap }}
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
