"use client";

import Image from "next/image";
import BookCallButton from "./BookCallButton";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center px-4 pt-2">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-2xl bg-white px-2 py-2 shadow-xs border border-gray-200">
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

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-md font-medium text-gray-800 hover:text-gray-900 transition-colors">
            Services
            {/* <ChevronDown className="w-3.5 h-3.5" /> */}
          </button>

          <button className="relative flex items-center gap-1.5 text-md font-medium text-gray-800 hover:text-gray-900 transition-colors">
            Projects
            {/* <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              New
            </span> */}
          </button>

          <button className="text-md font-medium text-gray-800 hover:text-gray-900 transition-colors">
            Our Clients
          </button>

          <button className="text-md font-medium text-gray-800 hover:text-gray-900 transition-colors">
            About Us
          </button>
        </div>

        {/* CTA Button */}
        <BookCallButton
          className="hidden md:flex items-center gap-3 bg-[#0B1220] text-white text-xs font-medium pl-4 pr-2 py-2 rounded-xl border border-white/10 hover:bg-[#0f172a] transition-all"
          iconContainerClassName="w-12 h-6 rounded-lg bg-white/10 border border-white/20"
          iconClassName="w-4 h-4 text-white"
        />

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
