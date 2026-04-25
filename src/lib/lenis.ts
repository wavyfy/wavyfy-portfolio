import Lenis from "lenis";

let lenis: Lenis | null = null;

export function getLenis() {
  if (typeof window === "undefined") return null;

  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
  }

  return lenis;
}
