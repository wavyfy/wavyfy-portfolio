// Component added by Ansh - github.com/ansh-dhanani

import GradualBlur from "./GradualBlur";

export default function GradualBlurSection() {
  return (
    <section
      style={{ position: "fixed", height: 500, overflow: "hidden", zIndex: 10 }}
    >
      <div style={{ height: "100%", overflowY: "auto", padding: "6rem 2rem" }}>
        {/* <!-- Content Here - such as an image or text --> */}
      </div>
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
