"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StatusBadge from "./StatusBadge";
import { Reveal } from "./Reveal";
import BookCallButton from "./BookCallButton";
import { AnimatedLink } from "./AnimatedLink";
import { content } from "@/content/content";

import DarkCTACard from "./DarkCTACard";

export default function Contact() {
  const c = content.contact;
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsLoading(true);
    setResult("");
    setIsSuccess(false);
    setIsError(false);
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setIsSuccess(true);
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Failed to send message.");
        setIsError(true);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong!");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="sm:px-4 py-16 md:py-20 md:px-10 max-w-360 mx-auto"
    >
      <Reveal delay={0.5}>
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-8 items-start">
            {/* Left Column: Header & CTA (swapped to right on lg) */}
            <div className="flex flex-col h-full order-1 lg:order-2">
              {/* Header sticks inside this div only */}
              <div className="flex-1 mb-0 md:mb-10">
                <div className="lg:sticky lg:top-32 flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <StatusBadge dotColor="bg-red-500" title="Contact" />
                  </div>
                  <h2 className="text-4xl sm:text-4xl md:text-[2.8rem] font-semibold leading-[1.2] tracking-tight mb-4">
                    <span className="text-gray-900">{c.title}</span>
                    <br />
                    <span className="text-gray-500">{c.subtitle}</span>
                  </h2>
                  <p className="text-sm md:text-base font-medium text-gray-500 max-w-sm lg:ml-auto lg:mr-0 mx-auto">
                    {c.description}
                  </p>
                </div>
              </div>

              {/* CTA sits at bottom, completely separate */}
              <div className="hidden lg:block lg:pl-8">
                <DarkCTACard className="w-full" showButton={false}>
                  <div className="flex flex-col gap-6">
                    <p className="text-white text-3xl font-semibold">
                      Contact info
                    </p>
                    <div className="flex flex-col gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          {/* <Mail className="w-4 h-4 text-white" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                        <AnimatedLink
                          href={`mailto:${c.emailCard.email}`}
                          label={c.emailCard.email}
                          className="text-white font-medium hover:text-white"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          {/* <Phone className="w-4 h-4 text-white" /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <AnimatedLink
                          href={c.callCard.href}
                          label={c.callCard.linkText}
                          className="text-white font-medium hover:text-white"
                        />
                      </div>
                    </div>
                  </div>
                </DarkCTACard>
              </div>
            </div>

            {/* Right Column: Form Card (swapped to left on lg) */}
            <div className="bg-white border rounded-[32px] border-gray-200 shadow-sm p-8 md:p-10 flex flex-col h-full w-full order-2 lg:order-1">
              <form onSubmit={onSubmit} className="flex flex-col gap-5 flex-1">
                {/* Honeypot Spam Protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1"
                  >
                    {c.form.fields.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={c.form.placeholders.name}
                    className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b1015] focus:bg-white transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1"
                  >
                    {c.form.fields.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={c.form.placeholders.email}
                    className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b1015] focus:bg-white transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1"
                  >
                    {c.form.fields.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder={c.form.placeholders.subject}
                    className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b1015] focus:bg-white transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1"
                  >
                    {c.form.fields.message}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder={c.form.placeholders.message}
                    rows={4}
                    className="w-full h-full min-h-[120px] bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b1015] focus:bg-white transition-all resize-none"
                    required
                  />
                </div>

                <div className="mt-2 w-full">
                  <BookCallButton
                    type="submit"
                    text={c.form.submitText}
                    className={`w-full flex items-center justify-between gap-4 bg-[#0b1015] text-white text-sm font-medium pl-6 pr-2 py-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-transform ${
                      isLoading ? "opacity-70 pointer-events-none" : ""
                    }`}
                    iconContainerClassName="w-12 h-10 rounded-lg bg-[#1b2025]"
                    iconClassName="w-5 h-5 text-white"
                  />
                  <div className="h-6 mt-4">
                    <AnimatePresence mode="wait">
                      {(isLoading || result) && (
                        <motion.p
                          key={isLoading ? "loading" : "result"}
                          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                          transition={{ duration: 0.3 }}
                          className={`text-center text-sm font-medium ${
                            isLoading
                              ? "text-gray-500"
                              : isSuccess
                                ? "text-green-600"
                                : isError
                                  ? "text-red-600"
                                  : "text-gray-600"
                          }`}
                        >
                          {isLoading ? "Sending message..." : result}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </form>
            </div>

            {/* Mobile CTA sits after form */}
            <div className="block lg:hidden w-full mt-4 order-3">
              <DarkCTACard className="w-full" showButton={false}>
                <div className="flex flex-col gap-6">
                  <p className="text-white text-3xl font-semibold">
                    Contact info
                  </p>
                  <div className="flex flex-col gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        {/* <Mail className="w-4 h-4 text-white" /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <AnimatedLink
                        href={`mailto:${c.emailCard.email}`}
                        label={c.emailCard.email}
                        className="text-white font-medium hover:text-white"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        {/* <Phone className="w-4 h-4 text-white" /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <AnimatedLink
                        href={c.callCard.href}
                        label={c.callCard.linkText}
                        className="text-white font-medium hover:text-white"
                      />
                    </div>
                  </div>
                </div>
              </DarkCTACard>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
