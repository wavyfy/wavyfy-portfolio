import { ArrowRight, ArrowUpRight } from "lucide-react";
import BookCallButton from "./BookCallButton";
import StatusBadge from "./StatusBadge";
import SecondaryButton from "./SecondaryButton";

const LogoPlaceholder = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2L2 22h20L12 2z"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="pb-5 z-50">
      <div className="bg-white rounded-[24px] md:rounded-[32px] max-w-8xl mx-auto pt-24 pb-8 px-4 sm:px-6 md:px-10 flex flex-col items-center relative overflow-hidden shadow-2xl border border-gray-200">
        {/* Very large faded background text */}
        <div className="absolute bottom-[-5%] left-0 w-full flex justify-center pointer-events-none select-none z-0 ">
          <span
            className="text-[25vw] font-bold text-gray-300 leading-none tracking-tighter"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 5%, transparent 90%)",
              maskImage:
                "linear-gradient(to bottom, black 5%, transparent 90%)",
            }}
          >
            Wavyfy<span className="text-red-500">.</span>
          </span>
        </div>

        {/* --- Top CTA Section --- */}
        <div className="flex flex-col items-center text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[0.8] tracking-tight">
            <span className="text-gray-900 text-3xl sm:text-4xl lg:text-[2.4rem]">
              Ready to ship?
            </span>
            <br />
            <span className="text-gray-500 text-3xl sm:text-4xl lg:text-[2.4rem]">
              Initialize your next project.
            </span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-sm mx-auto text-sm md:text-base leading-relaxed font-medium">
            Secure an architectural review to benchmark your current infrastructure and map out an execution plan.
          </p>

          <StatusBadge className="mt-10" />

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Book A Call Button */}
            <BookCallButton
              className="flex items-center gap-4 bg-[#0b1015] text-white text-sm font-medium pl-6 pr-2 py-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
              iconContainerClassName="w-12 h-10 rounded-lg bg-[#1b2025]"
              iconClassName="w-5 h-5 text-white"
            />
            {/* View Plans Button */}
            <SecondaryButton className="w-full sm:w-auto text-lg">
              View Plans
            </SecondaryButton>
          </div>

          {/* Client Logos Row */}
          <div className="flex items-center gap-8 justify-center mt-8 opacity-30 grayscale saturate-0">
            <div className="flex items-center gap-2">
              <LogoPlaceholder className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">
                Acme Corp
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="font-bold text-lg tracking-tight">Quantum</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="4" />
              </svg>
              <span className="font-bold text-lg tracking-tight">APEX</span>
            </div>
          </div>
        </div>

        {/* --- Middle Columns Section --- */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 mt-24 z-10 relative">
          {/* Left Col: Brand & Newsletter */}
          <div className="max-w-sm">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-12">
              <svg
                className="w-8 h-8 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 20h4L16 4h-4zM12 20h4L24 4h-4z" />
              </svg>
              <span className="text-3xl font-bold tracking-tight text-gray-900">
                Wavyfy
              </span>
            </div>

            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Join our newsletter
            </h4>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed font-medium">
              Stay ahead with strategies uniting design, technology, and
              marketing to deliver measurable growth.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full bg-white border border-gray-200 rounded-xl py-3.5 px-5 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-gray-400"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-[#de5145] rounded-lg flex items-center justify-center text-white hover:bg-[#c9453a] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Col: Links */}
          <div className="flex flex-wrap gap-10 sm:gap-16 md:gap-24 lg:mr-8">
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Company</h4>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                About us
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Projects
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Socials</h4>

              {/* Twitter/X */}
              <a
                href="#"
                className="text-sm font-medium flex items-center gap-2.5 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-sm font-medium flex items-center gap-2.5 text-[#de5145] hover:text-[#c9453a] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
                <ArrowUpRight className="w-3 h-3" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="text-sm font-medium flex items-center gap-2.5 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              {/* GitHub */}
              {/* <a
                href="#"
                className="text-sm font-medium flex items-center gap-2.5 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a> */}

              {/* YouTube */}
              {/* <a
                href="#"
                className="text-sm font-medium flex items-center gap-2.5 text-gray-600 hover:text-[#FF0000] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a> */}
            </div>
          </div>
        </div>

        {/* --- Bottom Base Row --- */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-16 md:mt-24 z-10 relative">
          <p className="text-xs font-semibold text-gray-800">
            @ 2025 Built in <span className="text-[#de5145]">Framer</span> by{" "}
            <span className="text-[#de5145]">Lunixify Studio</span>
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-xs font-semibold text-gray-800 hover:text-[#de5145] transition-colors"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-xs font-semibold text-gray-800 hover:text-[#de5145] transition-colors"
            >
              Terms of services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
