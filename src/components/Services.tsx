"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";

const services = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    title: "Web Design & UX/UI",
    description:
      "Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    ),
    title: "No-code Development",
    description:
      "Building powerful, scalable websites without writing a single line of code using modern no-code platforms.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
    title: "MVP prototyping",
    description:
      "Rapidly turning your ideas into clickable, testable prototypes to validate concepts before full development.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
    title: "Ongoing Design  Partner",
    description:
      "A dedicated design partnership for continuous iteration, updates, and growth alongside your business.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f5f5f5]  sm:px-4 py-20 md:py-28 md:px-10">
      <div className="max-w-8xl mx-auto">
        {/* Top row: label + heading + CTA */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          {/* Left: label + heading */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
              <span className="text-md font-medium text-gray-700">
                Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[2.3rem] font-semibold leading-[1.2] tracking-tight">
              <span className="text-gray-900">From idea to scale.</span>
              <br />
              <span className="text-gray-500">We master our craft.</span>
            </h2>
          </div>

          {/* Right: CTA */}
          <button className="hidden md:flex items-center gap-3 bg-[#F3F4F6] text-gray-800 text-md font-medium pl-4 pr-2 py-3 mt-20 rounded-full border shadow-xl shadow-black/30 border-gray-200 transition-all">
            <span>Start A Project</span>

            <span className="flex items-center justify-center w-12 h-8 rounded-full bg-[#F3F4F6] border border-gray-200">
              <ArrowRight className="w-4 h-4 text-gray-800" />
            </span>
          </button>
        </div>

        {/* Content: Accordion + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Accordion List */}
          <div className="flex flex-col gap-3">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-t-4xl rounded-b-4xl border border-gray-200 transition-all duration-500 ${
                    isOpen ? "" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  >
                    {/* Icon */}
                    <span className="flex items-center justify-center w-15 h-10 rounded-4xl bg-gray-100 border border-gray-300 shrink-0">
                      {service.icon}
                    </span>

                    {/* Title */}
                    <span className="flex-1 font-semibold text-gray-900 text-xl">
                      {service.title}
                    </span>

                    {/* Chevron */}
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {/* Expanded description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className=" pb-5 px-10 text-md text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Image — switches per accordion */}
          <div className="relative rounded-[28px] p-2 bg-white/80 border border-gray-200 shadow-xl">
            <div className="relative rounded-[24px] overflow-hidden aspect-4/3 lg:aspect-auto lg:h-full lg:min-h-[600px] bg-black">
              {services.map((service, index) => (
                <img
                  key={index}
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover
        transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          openIndex === index
            ? "opacity-100 scale-100 z-10"
            : "opacity-0 scale-110 z-0"
        }`}
                />
              ))}

              {openIndex === -1 && (
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
