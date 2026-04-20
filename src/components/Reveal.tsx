"use client";

import { motion } from "framer-motion";
import { ease } from "./Stagger";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  scale?: number;
  once?: boolean;
  margin?: string;
};

export function Reveal({
  children,
  delay = 0.15,
  duration = 0.8,
  y = 40,
  blur = 8,
  scale = 1,
  once = true,
  margin = "0px",
}: RevealProps) {
  return (
    <motion.div
      suppressHydrationWarning
      initial={{
        opacity: 0,
        y,
        filter: `blur(${blur}px)`,
        scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      viewport={{ once, amount: 0.01, margin }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export const reveal = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay,
      ease,
    },
  },
});
