"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  scale?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 40,
  blur = 8,
  scale = 1,
  once = true,
}: RevealProps) {
  return (
    <motion.div
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
      viewport={{ once, amount: 0.01, margin: "100px" }}
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
