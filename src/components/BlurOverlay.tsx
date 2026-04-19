// Component added by Ansh - github.com/ansh-dhanani

import GradualBlur from "./GradualBlur";

export default function GradualBlurSection() {
  return (
    <section
      style={{ position: "fixed", height: 500, overflow: "hidden", zIndex: 10 }}
    >
      <div className="relative">
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
      </div>
    </section>
  );
}
