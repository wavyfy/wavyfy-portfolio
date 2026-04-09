const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We uncover your goals, audience, and challenges to build a clear roadmap for success.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Transforming insights into bold, user-focused designs that connect and convert.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Bringing designs to life with clean, performant code and rigorous quality assurance.",
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description:
      "Deploying your project and continuously refining for maximum performance and growth.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#f5f5f5] sm:px-4 py-20 md:py-28">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Label + Heading + Description */}
          <div className="lg:sticky lg:top-32 self-start">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
              <span className="text-sm font-medium text-gray-700">
                Process
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.2] tracking-tight mb-6">
              <span className="text-gray-900">
                Proven &amp; effective process.
              </span>
              <br />
              <span className="text-gray-400">That delivers results.</span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              We dive deep into your goals, audience, and challenges to craft a
              strategy that drives clear direction and impact.
            </p>
          </div>

          {/* Right: Vertical Timeline */}
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5">
                {/* Number + Vertical Line */}
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-gray-400 mb-2">
                    {step.number}
                  </span>
                  <div
                    className={`w-[2px] flex-1 ${
                      index < steps.length - 1
                        ? "bg-red-400/60"
                        : "bg-transparent"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 flex-1 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
