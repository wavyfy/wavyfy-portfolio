"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import DarkCTACard from "./DarkCTACard";
import StatusBadge from "./StatusBadge";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "What does your architecture stack look like?",
    answer:
      "We build heavily on robust modern primitives: React/Next.js for the frontend, Node/Go for microservices, and specialized edge infrastructure for global delivery.",
  },
  {
    question: "Can your systems handle burst scaling?",
    answer:
      "Absolutely. We architect for high concurrency from day one, utilizing edge caching, horizontal scaling policies, and automated failovers to handle extreme traffic spikes.",
  },
  {
    question: "Do you integrate with legacy enterprise platforms?",
    answer:
      "Yes. We frequently build scalable integration layers and proxy services that allow modern frontends to securely communicate with legacy backend systems.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security is fully integrated into our pipelines, including automated vulnerability scanning, strict IAM configurations, and core compliance readiness for data handling.",
  },
  {
    question: "Do you provide post-deployment SLA?",
    answer:
      "We offer extended SLA agreements covering uptime guarantees, continuous performance monitoring, and critical bug resolutions post-launch.",
  },
  {
    question: "What is your typical development cycle?",
    answer:
      "We run lean, iterative sprints with high-frequency deployments. Our CI/CD pipelines ensure we ship improvements daily without disrupting live user traffic.",
  },
  {
    question: "Are your platforms SEO optimized out of the box?",
    answer:
      "Yes. Utilizing server-side rendering and dynamic metadata injection, our platforms achieve near-perfect lighthouse scores to dominate Core Web Vitals.",
  },
  {
    question: "Can we migrate from our existing monolithic stack?",
    answer:
      "Our team excels at strangler fig migrations, allowing you to steadily migrate from legacy monoliths to decoupled microservices with zero operational downtime.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="sm:px-4 py-16 md:py-20 md:px-10">
      <Reveal delay={0.5}>
        <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-0 items-start">
          {/* Left Column: Header & CTA */}
          <div className="flex flex-col h-full">
            {/* Header sticks inside this div only */}
            <div className="flex-1 mb-0 md:mb-10">
              <div className="lg:sticky lg:top-32 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
                <div className="flex items-center gap-2 mb-4">
                  <StatusBadge dotColor="bg-red-500" title="FAQ" />
                </div>
                <h2 className="text-4xl sm:text-4xl md:text-[2.3rem] font-semibold leading-[1.2] tracking-tight mb-0">
                  <span className="text-gray-900">Technical</span>
                  <br />
                  <span className="text-gray-500">Clarifications.</span>
                </h2>
              </div>
            </div>

            {/* CTA sits at bottom, completely separate */}
            <div className="hidden lg:block">
              <DarkCTACard className="max-w-md">
                <p className="text-white text-3xl font-semibold">
                  Still analyzing?
                </p>
              </DarkCTACard>
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
                  className={`bg-white border rounded-3xl border-gray-200 cursor-pointer transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "" : " hover:border-gray-300"}`}
                >
                  {/* Top Row: Question + Icon */}
                  <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-5 select-none">
                    <h4
                      className={`text-[16px] font-semibold transition-colors ${
                        isOpen ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {faq.question}
                    </h4>
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-gray-500" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden
            ${isOpen ? "max-h-60 opacity-100 m-3" : "max-h-0 opacity-0 "}`}
                  >
                    <div className="bg-gray-200 rounded-2xl p-3">
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile CTA sits after Accordion */}
          <div className="block lg:hidden w-full mt-4">
            <DarkCTACard className="w-full">
              <p className="text-white text-3xl font-semibold">
                Still analyzing?
              </p>
            </DarkCTACard>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
