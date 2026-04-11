import { ArrowRight, Info } from "lucide-react";

const plans = [
  {
    theme: "light",
    title: "Product design",
    description:
      "Ideal for launching or revamping a website or product to boost conversions.",
    price: "$ 2,200",
    cycle: "One time",
    pricePrefix: "",
    badge: null,
    features: [
      { text: "Senior designer" },
      { text: "One Active Request", info: true },
      { text: "7-10 Days delivery-time" },
      { text: "SEO optimized" },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
    toggle: true,
  },
  {
    theme: "light",
    title: "Design partner",
    description:
      "Perfect for monthly design partnerships, keeping your brand fresh and driving consistent conversions.",
    price: "$ 4,000",
    cycle: "/ month",
    pricePrefix: "",
    badge: null,
    features: [
      { text: "Dedicated team & expert designers" },
      { text: "Multiple requests under fair use", info: true },
      { text: "2-3 Days delivery-time" },
      { text: "Monthly CRO & Growth Strategy", info: true },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
    toggle: false,
  },
  {
    theme: "dark",
    title: "Custom",
    description:
      "Ideal for brands seeking unlimited design and motion support, delivering high-impact results without restrictions.",
    price: "$ 9,000+",
    cycle: "",
    pricePrefix: "Starts at",
    badge: "Limited spots",
    features: [
      { text: "Dedicated team & expert designers" },
      { text: "Unlimited requests", info: true },
      { text: "2 Days Delivery, monthly commitment" },
      { text: "Advanced SEO & Marketing" },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
    toggle: false,
  },
];

const FeatureIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L15 8L21 9L16 14L18 20L12 17L6 20L8 14L3 9L9 8L12 2Z" opacity="0.3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" opacity="0.3" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const PlanIconBox = ({ theme }: { theme: string }) => (
  <div
    className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-6
      ${
        theme === "dark"
          ? "bg-[#181b21] border-gray-800"
          : "bg-[#f5f5f5] border-gray-200"
      }`}
  >
    <div
      className={`w-2.5 h-2.5 rounded-sm ${
        theme === "dark" ? "bg-gray-600" : "bg-gray-400"
      }`}
    />
  </div>
);

export default function Pricing() {
  return (
    <section className="bg-[#f5f5f5] sm:px-4 py-20 md:py-28 md:px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
            <span className="text-md font-medium text-gray-700">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.3rem] font-semibold leading-[1.2] tracking-tight mb-4">
            <span className="text-gray-900">Choose a plan.</span>
            <br />
            <span className="text-gray-500">That fits your needs.</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-medium max-w-sm mx-auto leading-relaxed">
            Flexible plans designed to accelerate growth, with solutions that
            evolve as your business scales.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[40px] p-2 flex flex-col border shadow-sm h-full
                ${
                  plan.theme === "dark"
                    ? "bg-[#0b1015] border-gray-800 text-white"
                    : "bg-white border-gray-100 text-gray-900"
                }`}
            >
              {/* Top Nested Card */}
              <div
                className={`rounded-[32px] p-8 mb-6
                  ${
                    plan.theme === "dark"
                      ? "bg-[#111827] shadow-lg border border-gray-800"
                      : "bg-white shadow-lg border border-gray-200"
                  }`}
              >
                <PlanIconBox theme={plan.theme} />
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  {plan.badge && (
                    <span className="bg-red-900/30 text-red-500 text-xs font-semibold px-3 py-1 rounded-full border border-red-900/50">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price & Features */}
              <div className="px-6 flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-8 mt-2">
                  {plan.pricePrefix && (
                    <span className="text-sm font-medium text-gray-400">
                      {plan.pricePrefix}
                    </span>
                  )}
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.cycle && (
                    <span className="text-sm font-medium text-gray-400">
                      {plan.cycle}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FeatureIcon
                        className={`w-4 h-4 shrink-0 ${
                          plan.theme === "dark"
                            ? "text-gray-600"
                            : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          plan.theme === "dark"
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        {feature.text}
                      </span>
                      {feature.info && (
                        <Info
                          className={`w-3.5 h-3.5 ${
                            plan.theme === "dark"
                              ? "text-gray-600"
                              : "text-gray-400"
                          }`}
                        />
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {/* Toggle (only on first plan) */}
                  {plan.toggle && (
                    <div className="flex items-center justify-between bg-[#f5f5f5] rounded-full py-3 px-4 mb-4">
                      <div className="flex items-center gap-2">
                        <span>⚡</span>
                        <span className="text-sm font-semibold text-gray-700">
                          3X faster delivery
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-900">+1k</span>
                        {/* Static toggle switch */}
                        <div className="w-10 h-6 bg-gray-300 rounded-full flex items-center px-1">
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Button */}
                  <button
                    className={`w-full flex items-center justify-between py-2 pl-6 pr-2 rounded-full font-medium transition-all
                      ${
                        plan.theme === "dark"
                          ? "bg-white text-gray-900 hover:bg-gray-100"
                          : "bg-[#0b1015] text-white hover:bg-gray-900"
                      }`}
                  >
                    <span>Get Started Now</span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full 
                        ${
                          plan.theme === "dark"
                            ? "bg-[#f5f5f5]"
                            : "bg-[#1f2937]"
                        }`}
                    >
                      <ArrowRight
                        className={`w-4 h-4 ${
                          plan.theme === "dark" ? "text-gray-900" : "text-white"
                        }`}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
