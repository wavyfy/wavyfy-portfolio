"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import StatusBadge from "./StatusBadge";
import { Reveal } from "./Reveal";
import { staggerItemDelayed } from "./Stagger";
import { motion } from "framer-motion";

const services = [
  {
    theme: "dark",
    title1: "Shopify",
    title2: "Development",
    description:
      "Custom Shopify stores built to convert — from theme development to full e-commerce solutions that drive sales.",
    price: "$ 2,500",
    cycle: "One time",
    pricePrefix: "",
    badge: null,
    features: [
      { text: "Custom Shopify theme development" },
      { text: "Product & collection setup", info: true },
      { text: "10-14 Days delivery-time" },
      { text: "SEO & performance optimized" },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
  },
  {
    theme: "dark",
    title1: "SaaS",
    title2: "Development",
    description:
      "End-to-end SaaS product development — from MVP to a fully scalable platform built for growth and retention.",
    price: "$ 9,000+",
    cycle: "",
    pricePrefix: "Starts at",
    badge: "Limited spots",
    features: [
      { text: "Dedicated full-stack team" },
      { text: "Auth, billing & dashboard included", info: true },
      { text: "Agile delivery, monthly commitment" },
      { text: "Scalable cloud architecture" },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
  },
  {
    theme: "dark",
    title1: "Web & App",
    title2: "Development",
    description:
      "High-performance websites and mobile applications crafted to deliver seamless user experiences across all devices.",
    price: "$ 4,500",
    cycle: "One time",
    pricePrefix: "",
    badge: null,
    features: [
      { text: "Custom web or mobile app" },
      { text: "Responsive & cross-platform", info: true },
      { text: "14-21 Days delivery-time" },
      { text: "SEO & Core Web Vitals optimized" },
      { text: "1-1 Private Slack channel" },
      { text: "50% secured upfront payment" },
    ],
  },
];

// middle=0 (first), left=1 (second), right=2 (third)
const staggerOrder = [1, 0, 2];

const FeatureIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2L15 8L21 9L16 14L18 20L12 17L6 20L8 14L3 9L9 8L12 2Z"
      opacity="0.3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      opacity="0.3"
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Inline replacement for lucide-react Info icon
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default function Services() {
  return (
    <section id="services" className="sm:px-4 py-16 md:py-20 md:px-10">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <Reveal delay={0.2}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <StatusBadge dotColor="bg-red-500" title="Services" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.3rem] font-semibold leading-[1.2] tracking-tight mb-4">
              <span className="text-gray-900">Pick a service.</span>
              <br />
              <span className="text-gray-500">Built around your goals.</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium max-w-sm mx-auto leading-relaxed">
              From Shopify stores to full SaaS platforms — we build digital
              products that perform, scale, and convert.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {services.map((service, i) => (
            <motion.div
              suppressHydrationWarning
              key={i}
              variants={staggerItemDelayed}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              custom={staggerOrder[i]}
              className={`rounded-3xl p-2 flex flex-col border shadow-xl h-full transition-transform
                ${i === 1 ? "scale-100 lg:scale-97" : "scale-100 lg:scale-93"}
                ${
                  service.theme === "dark"
                    ? "bg-[#0b1015] border-gray-800 text-white"
                    : "bg-white border-gray-100 text-gray-900"
                }`}
            >
              {/* Top Nested Card */}
              <div
                className={`rounded-3xl p-4 md:p-6 mb-6
                  ${
                    service.theme === "dark"
                      ? "bg-[#111827] shadow-lg border border-gray-800"
                      : "bg-white shadow-lg border border-gray-200"
                  }`}
              >
                <h2 className="text-2xl font-semibold text-center">
                  {service.title1}
                </h2>
                <div className="flex items-center gap-3 mb-3 flex-col">
                  <h2 className="text-lg font-regular">{service.title2}</h2>
                  <hr className="w-full border-gray-100/20" />
                </div>
                <p
                  className={`text-md mr-20 font-medium ${service.theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                >
                  {service.description}
                </p>
              </div>

              {/* Price & Features */}
              <div className="px-3 pb-3 flex flex-col flex-1">
                <div className="flex items-baseline gap-2 mb-15 mt-2">
                  {service.pricePrefix && (
                    <span className="text-sm font-medium text-gray-400">
                      {service.pricePrefix}
                    </span>
                  )}
                  <span className="text-3xl md:text-4xl font-bold tracking-tight">
                    {service.price}
                  </span>
                  {service.cycle && (
                    <span className="text-sm font-medium text-gray-400">
                      {service.cycle}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FeatureIcon
                        className={`w-4 h-4 shrink-0 ${service.theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
                      />
                      <span
                        className={`text-sm font-medium ${service.theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {feature.text}
                      </span>
                      {feature.info && (
                        <InfoIcon
                          className={`w-3.5 h-3.5 ${service.theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
                        />
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button
                    className={`group w-full flex items-center justify-between py-4 pl-6 pr-2 rounded-xl font-medium transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform ${
                      service.theme === "dark"
                        ? "bg-white text-gray-900 hover:bg-gray-100"
                        : "bg-[#0b1015] text-white hover:bg-gray-900"
                    }`}
                  >
                    Get Started Now
                    <span
                      className={`flex items-center justify-center w-14 h-9 rounded-lg mx-2 ${service.theme === "dark" ? "bg-gray-200" : "bg-gray-500"}`}
                    >
                      <ArrowRightIcon
                        className={`w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-2 ${service.theme === "dark" ? "text-gray-900" : "text-white"}`}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
