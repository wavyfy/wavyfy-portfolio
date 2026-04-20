// Component added by Ansh - github.com/ansh-dhanani
// Note: Previously wrapped in a <section> with position:fixed — corrected to render
// GradualBlur directly since <section> is a semantic element not intended for decorative overlays.

import GradualBlur from "./GradualBlur";

export default function BlurOverlay() {
  return (
    <GradualBlur
      target="page"
      position="bottom"
      height="5rem"
      strength={0.7}
      divCount={10}
      curve="bezier"
      exponential
      opacity={1}
    />
  );
}
