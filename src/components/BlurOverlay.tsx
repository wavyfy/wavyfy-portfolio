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
