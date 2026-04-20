"use client";

import { motion, Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: (duration: number = 0.8) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const staggerContainer = (stagger = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

export const staggerItemDelayed: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: delay * 0.2,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Stagger({
  children,
  stagger = 0.15,
  delay = 0,
  duration = 0.8,
}: {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      suppressHydrationWarning
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      custom={duration}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
