"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is included with each Framer template?",
    answer:
      "Each template comes with a fully responsive design, editable components, and SEO-friendly structure ready to customize.",
  },
  {
    question: "Do I need coding skills to use your templates?",
    answer:
      "No coding skills are required. Everything is visually editable, allowing you to easily adjust text, colors, and layouts without touching any code.",
  },
  {
    question: "Can I use a template for multiple projects?",
    answer:
      "Our standard license applies to a single end product. For multiple projects, you will need to purchase an extended or multi-use license.",
  },
  {
    question: "Are the templates optimized for performance?",
    answer:
      "Yes, all templates are optimized for fast loading speeds, following best practices for modern web performance.",
  },
  {
    question: "Do you offer support after purchase?",
    answer:
      "We provide 30 days of free support for bug fixes and inquiries related to the template's core functionality.",
  },
  {
    question: "Can I integrate third-party tools with these templates?",
    answer:
      "Absolutely. You can easily integrate custom scripts, analytics, and third-party SaaS widgets depending on your platform limits.",
  },
  {
    question: "Do you offer customizations beyond the template?",
    answer:
      "Yes, we offer custom development and design services if you need functionality or layouts tailored specifically to your brand.",
  },
  {
    question: "Will my template receive updates?",
    answer:
      "Yes, we periodically push updates to ensure compatibility with platform advancements and to add new features.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f5f5f5] sm:px-4 py-20 md:py-28 md:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Header & CTA */}
          <div className="flex flex-col justify-between h-full lg:sticky lg:top-32">
            {/* Header Area */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
                <span className="text-md font-medium text-gray-700">FAQ</span>
              </div>
              <h2 className="text-4xl sm:text-4xl md:text-[2.8rem] font-semibold leading-[1.2] tracking-tight mb-12">
                <span className="text-gray-900">Got a question?</span>
                <br />
                <span className="text-gray-500">We've got answers.</span>
              </h2>
            </div>

            {/* Dark CTA Card */}
            <div className="bg-[#0b1015] rounded-[32px] p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between h-[250px] md:h-[280px] max-w-sm mt-8">
              {/* Dotted grid background overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-white text-3xl font-semibold tracking-tight leading-snug">
                  Still have questions?
                </h3>
              </div>
              <div className="relative z-10 flex justify-end mt-auto">
                <button className="flex items-center gap-3 bg-white text-gray-900 text-sm font-medium pl-6 pr-2 py-2 rounded-full transition-all hover:bg-gray-100">
                  <span>Contact Us</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f5]">
                    <ArrowRight className="w-4 h-4 text-gray-900" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;

              return (
                <div
                  key={index}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`bg-white border border-gray-200 shadow-sm cursor-pointer transition-all duration-500 overflow-hidden
                    ${isOpen ? "rounded-[32px] p-2" : "rounded-full p-2 hover:border-gray-300"}`}
                >
                  {/* Top Row: Question + Icon */}
                  <div className="flex items-center justify-between px-5 py-3 select-none">
                    <h4
                      className={`text-[15px] font-semibold transition-colors ${
                        isOpen ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {faq.question}
                    </h4>
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "border-gray-200 bg-white"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out px-2 pb-2 ${
                      isOpen ? "max-h-60 opacity-100 mt-1" : "max-h-0 opacity-0 p-0 m-0 overflow-hidden"
                    }`}
                  >
                    <div className="bg-[#f9f9f9] rounded-[24px] p-5 border border-gray-100 h-full">
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
