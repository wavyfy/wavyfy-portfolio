"use client";

// Simplified version — unused features removed:
// - hover intensity (hoverIntensity, isHovered, onMouseEnter/Leave)
// - scroll animation (animated: "scroll", IntersectionObserver, isVisible)
// - responsive breakpoints (mobileHeight, tabletHeight, desktopHeight, etc.)
// - children support
// - onAnimationComplete callback
// - PRESETS (not needed for the single static usage in BlurOverlay)
// - dynamic <style> tag injection (pointerEvents now hardcoded in containerStyle)

import React, { CSSProperties, useMemo } from "react";

type GradualBlurProps = {
  position?: "top" | "bottom" | "left" | "right";
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  opacity?: number;
  curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
  target?: "parent" | "page";
  className?: string;
  style?: CSSProperties;
};

const CURVE_FUNCTIONS: Record<NonNullable<GradualBlurProps["curve"]>, (p: number) => number> = {
  linear: (p) => p,
  bezier: (p) => p * p * (3 - 2 * p),
  "ease-in": (p) => p * p,
  "ease-out": (p) => 1 - Math.pow(1 - p, 2),
  "ease-in-out": (p) =>
    p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2,
};

const GradualBlur: React.FC<GradualBlurProps> = ({
  position = "bottom",
  strength = 2,
  height = "6rem",
  width,
  divCount = 5,
  exponential = false,
  zIndex = 1000,
  opacity = 1,
  curve = "linear",
  target = "parent",
  className = "",
  style,
}) => {
  const blurLayers = useMemo(() => {
    const layers: React.ReactNode[] = [];
    const increment = 100 / divCount;
    const fn = CURVE_FUNCTIONS[curve];

    for (let i = 1; i <= divCount; i++) {
      const progress = fn(i / divCount);
      const blur = exponential
        ? Math.pow(2, progress * 4) * 0.0625 * strength
        : 0.0625 * (progress * divCount + 1) * strength;
      const gradient = `transparent ${(i - 1) * increment}%, black ${i * increment}%`;

      layers.push(
        <div
          key={i}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${blur.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blur.toFixed(3)}rem)`,
            maskImage: `linear-gradient(to ${position}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(to ${position}, ${gradient})`,
            opacity,
          }}
        />,
      );
    }
    return layers;
  }, [divCount, curve, exponential, strength, position, opacity]);

  const containerStyle: CSSProperties = {
    position: target === "page" ? "fixed" : "absolute",
    pointerEvents: "none",
    zIndex,
    ...(position === "top" && { top: 0, left: 0, right: 0, height }),
    ...(position === "bottom" && { bottom: 0, left: 0, right: 0, height }),
    ...(position === "left" && { left: 0, top: 0, bottom: 0, width: width || height }),
    ...(position === "right" && { right: 0, top: 0, bottom: 0, width: width || height }),
    ...style,
  };

  return (
    <div className={className} style={containerStyle}>
      <div className="relative w-full h-full">{blurLayers}</div>
    </div>
  );
};

export default React.memo(GradualBlur);
