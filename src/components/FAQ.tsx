"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import DarkCTACard from "./DarkCTACard";
import StatusBadge from "./StatusBadge";
import { Reveal } from "./Reveal";

import { content } from "@/content/content";

const faqs = content.faq.list;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="sm:px-4 py-16 md:py-20 md:px-10 max-w-360 mx-auto"
    >
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
                    <span className="text-gray-900">{content.faq.title}</span>
                    <br />
                    <span className="text-gray-500">{content.faq.subtitle}</span>
                  </h2>
                </div>
              </div>

              {/* CTA sits at bottom, completely separate */}
              <div className="hidden lg:block">
                <DarkCTACard className="max-w-md">
                  <p className="text-white text-3xl font-semibold">
                    {content.cta.stillAnalyzing}
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
                    className={`bg-white border rounded-3xl border-gray-200 transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "" : " hover:border-gray-300"}`}
                  >
                    {/* Top Row: Question + Icon — keyboard + screen reader accessible trigger */}
                    <button
                      className="flex items-center justify-between w-full text-left px-4 md:px-6 py-4 md:py-5 select-none cursor-pointer"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span
                        className={`text-[16px] font-semibold transition-colors ${
                          isOpen ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 transition-colors"
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <MinusIcon className="w-4 h-4 text-gray-500" />
                        ) : (
                          <PlusIcon className="w-4 h-4 text-gray-500" />
                        )}
                      </span>
                    </button>

                    {/* Expanded Content */}
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`transition-all duration-500 ease-in-out overflow-hidden
            ${isOpen ? "max-h-60 opacity-100 m-3" : "max-h-0 opacity-0"}`}
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
                  {content.cta.stillAnalyzing}
                </p>
              </DarkCTACard>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
