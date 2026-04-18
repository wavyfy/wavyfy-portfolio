"use client";

import React, {
  CSSProperties,
  useEffect,
  useRef,
  useState,
  useMemo,
  PropsWithChildren,
} from "react";

type GradualBlurProps = PropsWithChildren<{
  position?: "top" | "bottom" | "left" | "right";
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: boolean | "scroll";
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
  responsive?: boolean;
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  mobileWidth?: string;
  tabletWidth?: string;
  desktopWidth?: string;
  preset?: keyof typeof PRESETS;
  gpuOptimized?: boolean;
  hoverIntensity?: number;
  target?: "parent" | "page";
  onAnimationComplete?: () => void;
  className?: string;
  style?: CSSProperties;
}>;

const DEFAULT_CONFIG: Partial<GradualBlurProps> = {
  position: "bottom",
  strength: 2,
  height: "6rem",
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: "0.3s",
  easing: "ease-out",
  opacity: 1,
  curve: "linear",
  responsive: false,
  target: "parent",
};

const PRESETS = {
  top: { position: "top", height: "6rem" },
  bottom: { position: "bottom", height: "6rem" },
  subtle: { height: "4rem", strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: "10rem", strength: 4, divCount: 8, exponential: true },
} as const;

const CURVE_FUNCTIONS = {
  linear: (p: number) => p,
  bezier: (p: number) => p * p * (3 - 2 * p),
  "ease-in": (p: number) => p * p,
  "ease-out": (p: number) => 1 - Math.pow(1 - p, 2),
  "ease-in-out": (p: number) =>
    p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2,
};

const GradualBlur: React.FC<GradualBlurProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const config = useMemo(() => {
    const preset = props.preset ? PRESETS[props.preset] : {};
    return {
      ...DEFAULT_CONFIG,
      ...preset,
      ...props,
    } as Required<GradualBlurProps>;
  }, [props]);

  useEffect(() => {
    if (config.animated !== "scroll" || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [config.animated]);

  useEffect(() => {
    if (
      isVisible &&
      config.animated === "scroll" &&
      config.onAnimationComplete
    ) {
      const t = setTimeout(
        config.onAnimationComplete,
        parseFloat(config.duration) * 1000,
      );
      return () => clearTimeout(t);
    }
  }, [isVisible, config]);

  const blurLayers = useMemo(() => {
    const layers = [];
    const increment = 100 / config.divCount;
    const strength =
      isHovered && config.hoverIntensity
        ? config.strength * config.hoverIntensity
        : config.strength;

    const curve = CURVE_FUNCTIONS[config.curve];

    for (let i = 1; i <= config.divCount; i++) {
      const  progress = curve(i / config.divCount);

      const blur = config.exponential
        ? Math.pow(2, progress * 4) * 0.0625 * strength
        : 0.0625 * (progress * config.divCount + 1) * strength;

      const gradient = `transparent ${(i - 1) * increment}%, black ${i * increment}%`;

      layers.push(
        <div
          key={i}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${blur.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blur.toFixed(3)}rem)`,
            maskImage: `linear-gradient(to ${config.position}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(to ${config.position}, ${gradient})`,
            opacity: config.opacity,
          }}
        />,
      );
    }

    return layers;
  }, [config, isHovered]);

  const containerStyle: CSSProperties = {
    position: config.target === "page" ? "fixed" : "absolute",
    pointerEvents: config.hoverIntensity ? "auto" : "none",
    opacity: isVisible ? 1 : 0,
    transition: config.animated
      ? `opacity ${config.duration} ${config.easing}`
      : undefined,
    zIndex: config.zIndex,
    ...(config.position === "top" && {
      top: 0,
      left: 0,
      right: 0,
      height: config.height,
    }),
    ...(config.position === "bottom" && {
      bottom: 0,
      left: 0,
      right: 0,
      height: config.height,
    }),
    ...(config.position === "left" && {
      left: 0,
      top: 0,
      bottom: 0,
      width: config.width || config.height,
    }),
    ...(config.position === "right" && {
      right: 0,
      top: 0,
      bottom: 0,
      width: config.width || config.height,
    }),
    ...config.style,
  };

  useEffect(() => {
    const id = "gradual-blur-style";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `.gradual-blur{pointer-events:none}`;
    document.head.appendChild(style);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`gradual-blur ${config.className}`}
      style={containerStyle}
      onMouseEnter={
        config.hoverIntensity ? () => setIsHovered(true) : undefined
      }
      onMouseLeave={
        config.hoverIntensity ? () => setIsHovered(false) : undefined
      }
    >
      <div className="relative w-full h-full">{blurLayers}</div>
      {props.children && <div className="relative">{props.children}</div>}
    </div>
  );
};

export default React.memo(GradualBlur);
