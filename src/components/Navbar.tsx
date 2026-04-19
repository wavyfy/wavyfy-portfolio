"use client";

import { useState } from "react";
import Image from "next/image";
import BookCallButton from "./BookCallButton";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-col items-center justify-center px-4 pt-2">
        {/* Main Navbar Container that expands into a card natively */}
        <motion.div
          className="relative z-50 flex w-full max-w-6xl flex-col rounded-[20px] bg-white shadow-lg border border-gray-200 overflow-hidden"
          animate={{ borderRadius: isMobileMenuOpen ? "28px" : "16px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Top Bar - always visible */}
          <div className="flex w-full items-center justify-between px-2 py-1">
            {/* Logo */}
            <div className="flex items-center gap-1.5 pl-2">
              <Image
                src="/logo-icon.png"
                alt="Wavyfy"
                width={48}
                height={48}
                sizes="48px"
                className="h-12 w-auto"
              />
              <p className="text-xl font-semibold tracking-tight text-gray-900">
                Wavyfy
              </p>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="group flex items-center gap-1 text-md font-medium text-gray-800 hover:text-[#de5145] transition-all duration-500">
                <span className="relative pb-0.5">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                </span>
              </a>

              <a href="#projects" className="group relative flex items-center gap-1.5 text-md font-medium text-gray-800 hover:text-[#de5145] transition-all duration-500">
                <span className="relative pb-0.5">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                </span>
              </a>

              <a href="#testimonials" className="group text-md font-medium text-gray-800 hover:text-[#de5145] transition-all duration-500">
                <span className="relative pb-0.5">
                  Our Clients
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                </span>
              </a>

              <a href=" " className="group text-md font-medium text-gray-800 hover:text-[#de5145] transition-all duration-500">
                <span className="relative pb-0.5">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            {/* Desktop CTA Button */}
            <BookCallButton
              className="hidden md:flex items-center gap-3 bg-[#0B1220] text-white text-xs font-medium pl-4 pr-2 py-2 rounded-xl border border-white/10 hover:bg-[#0f172a] transition-all"
              iconContainerClassName="w-12 h-6 rounded-lg bg-white/10 "
              iconClassName="w-4 h-4 text-white"
            />

            {/* Mobile Menu Toggle Button */}
            <button
              className={`group md:hidden flex items-center justify-center p-2 w-[46px] h-[46px] relative z-50 hover:bg-gray-100 transition-all duration-500 bg-gray-200 ${
                isMobileMenuOpen ? "rounded-[24px]" : "rounded-lg"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col justify-between w-[20px] h-[12px] relative transform transition-all duration-300 origin-center">
                <span className={`absolute right-0 h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-[20px] rotate-45 top-[5px]' : 'w-[20px] top-0 group-hover:w-[24px]'}`} />
                <span className={`absolute right-0 h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-0 opacity-0 top-[5px]' : 'w-[14px] top-[5px] group-hover:w-[10px]'}`} />
                <span className={`absolute right-0 h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'w-[20px] -rotate-45 top-[5px]' : 'w-[18px] top-[10px] group-hover:w-[22px]'}`} />
              </div>
            </button>
          </div>

          {/* Height Expanding Mobile Nav Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="md:hidden border-t border-gray-100"
              >
                {/* Content wrapper isolates internal padding from height calculation jumping */}
                <div className="flex flex-col gap-[34px] px-5 pb-6 pt-6">
                  {/* Internal Links Map */}
                  <div className="flex flex-col gap-8 mt-1 px-1">
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-left group">
                      <span className="text-[17px] font-semibold text-gray-900">
                        Services
                      </span>
                    </a>

                    <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-left group">
                      <div className="flex items-center gap-2">
                        <span className="text-[17px] font-semibold text-gray-900">
                          Projects
                        </span>
                      </div>
                    </a>

                    <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-left group">
                      <span className="text-[17px] font-semibold text-gray-900">
                        Our Clients
                      </span>
                    </a>

                    <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-left group">
                      <span className="text-[17px] font-semibold text-gray-900">
                        About Us
                      </span>
                    </a>
                  </div>

                  {/* Mobile Internal Bottom CTA Button */}
                  <div className="mt-4">
                    <BookCallButton
                      text="Book A Call"
                      className="w-full bg-[#080d17] rounded-[24px] p-[6px] pl-[20px] flex items-center justify-between text-white group hover:bg-[#111A2B] transition-colors shadow-lg shadow-black/10"
                      iconContainerClassName="w-[54px] h-[46px] rounded-[18px] bg-[#222938] group-hover:bg-[#2A3346] transition-colors"
                      iconClassName="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>

      {/* Background Blur Overlay Element */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
