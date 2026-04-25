"use client";
import {  useState } from "react";
import BookCallButton from "./BookCallButton";
import SecondaryButton from "./SecondaryButton";
import LegalDialog from "./LegalDialog";
import { AnimatedLink } from "./AnimatedLink";

import { content } from "@/content/content";
import { LegalDetails, LegalSection } from "@/content/types";

const socials = content.footer.socials.map((s) => ({
  ...s,
  icon:
    s.iconName === "Instagram" ? (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Instagram</title>
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
      </svg>
    ) : s.iconName === "LinkedIn" ? (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ) : s.iconName === "Twitter" ? (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>X</title>
        <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
      </svg>
    ) : (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>YouTube</title>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
}));

const renderContent = (text: string) => {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
  const parts = text.split(emailRegex);

  return parts.map((part, i) => {
    if (emailRegex.test(part)) {
      return (
        <AnimatedLink
          key={i}
          href={`mailto:${part}`}
          label={part}
          className="text-gray-900 font-bold inline-flex"
        />
      );
    }
    return part;
  });
};

const PolicyContent = ({ policy }: { policy: string }) => {
  const details = (content.footer.legalDetails as Record<string, LegalDetails>)[
    policy
  ];
  if (!details) return null;

  return (
    <div className="space-y-6">
      {details.effectiveDate && (
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-8">
          Effective: {details.effectiveDate} • Updated: {details.lastUpdated}
        </p>
      )}
      {details.sections.map((section: LegalSection, idx: number) => (
        <section key={idx}>
          <h4 className="font-bold text-gray-900 mb-3">{section.title}</h4>
          {section.subtitle1 && (
            <h5 className="font-bold text-gray-800 text-sm mb-1">
              {section.subtitle1}
            </h5>
          )}
          {section.content1 && (
            <p className="mb-4 text-sm">{renderContent(section.content1)}</p>
          )}
          {section.subtitle2 && (
            <h5 className="font-bold text-gray-800 text-sm mb-1">
              {section.subtitle2}
            </h5>
          )}
          {section.content2 && (
            <p className="mb-4 text-sm">{renderContent(section.content2)}</p>
          )}
          {section.content && (
            <div className="whitespace-pre-line text-sm leading-relaxed">
              {renderContent(section.content)}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  return (
    <footer className="mb-5 max-w-360 mx-auto  @container relative">
      <LegalDialog
        isOpen={activePolicy !== null}
        onClose={() => setActivePolicy(null)}
        title={activePolicy || ""}
        content={activePolicy ? <PolicyContent policy={activePolicy} /> : null}
      />
      <div className="bg-white rounded-[24px] md:rounded-[32px]  pt-14 pb-5 px-4 sm:px-6 md:px-10  flex flex-col items-center overflow-hidden shadow-2xl border border-gray-200">
        {/* --- Top CTA Section & Socials --- */}
        <div className="w-full flex flex-col xl:flex-row justify-between items-center xl:items-start gap-12 px-4 md:px-8">
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:w-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[0.8] tracking-tight">
              <span className="text-gray-900 text-3xl sm:text-4xl lg:text-[2.4rem]">
                {content.footer.cta.line1}
              </span>
              <br />
              <span className="text-gray-500 text-3xl sm:text-4xl lg:text-[2.4rem]">
                {content.footer.cta.line2}
              </span>
            </h2>
            <p className="mt-8 text-gray-600 max-w-sm mx-auto xl:mx-0 text-sm md:text-base leading-relaxed font-medium">
              {content.footer.cta.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
              <BookCallButton
                className="flex items-center gap-4 bg-[#0b1015] text-white text-sm font-medium pl-6 pr-2 py-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-transform"
                iconContainerClassName="w-12 h-10 rounded-lg bg-[#1b2025]"
                iconClassName="w-5 h-5 text-white"
              />
              <a href="#services">
                <SecondaryButton className="w-full sm:w-auto text-lg">
                  {content.footer.cta.button}
                </SecondaryButton>
              </a>
            </div>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-wrap gap-10 sm:gap-16 md:gap-24 lg:mr-8 mt-12 xl:mt-0 xl:self-end">
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {content.footer.headings.company}
              </h4>
              {content.footer.company.map((link, i) => (
                <AnimatedLink key={i} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {content.footer.headings.contacts}
              </h4>
              {content.footer.contacts.map((contact, i) => (
                <AnimatedLink
                  key={i}
                  href={contact.href}
                  label={contact.label}
                  target={i !== 0 ? "_blank" : undefined}
                />
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {content.footer.headings.socials}
              </h4>
              {socials.map((social, i) => (
                <AnimatedLink
                  key={i}
                  href={social.href}
                  label={social.label}
                  icon={social.icon}
                  target="_blank"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Faded background text */}
        <div className="max-w-8xl flex justify-center pointer-events-none select-none mt-10 md:mt-16 sm:-mb-[3%] md:-mb-[3%] mx-auto">
          <span
            className=" font-bold text-gray-300 leading-[0.8] tracking-tighter text-[clamp(60px,25cqw,420px)]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 15%, transparent 95%)",
              maskImage:
                "linear-gradient(to bottom, black 15%, transparent 95%)",
            }}
          >
            {content.navbar.logo}<span className="text-red-500">.</span>
          </span>
        </div>

        {/* Bottom Base Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-8 md:mt-0 z-10">
          <div className="flex items-center gap-8">
            {content.footer.legal.map((link, i) => (
              <AnimatedLink
                key={i}
                label={link.label}
                onClick={() => setActivePolicy(link.label)}
                className="text-xs font-semibold text-gray-800 cursor-pointer"
              />
            ))}
          </div>
          <p className="text-xs font-semibold text-gray-800">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#de5145]">{content.footer.copyright} </span>
            {content.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
