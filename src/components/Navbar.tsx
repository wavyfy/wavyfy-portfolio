"use client";

import { ChevronDown, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center px-4 pt-4">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full bg-white px-6 py-3 shadow-sm border border-gray-100">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <img
            src="/logo-icon.png"
            alt="Wavyfy"
            className="h-12 w-auto"
          />
          <p className="text-lg font-bold tracking-tight text-gray-900">
            Wavyfy
          </p>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Services
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          <button className="relative flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Projects
            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              New
            </span>
          </button>

          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Our Clients
          </button>

          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            About Us
          </button>
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
          Get Template
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1 p-2">
          <span className="w-5 h-0.5 bg-gray-900" />
          <span className="w-5 h-0.5 bg-gray-900" />
          <span className="w-5 h-0.5 bg-gray-900" />
        </button>
      </div>
    </nav>
  );
}
