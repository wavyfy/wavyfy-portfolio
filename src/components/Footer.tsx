import { ArrowUpRight } from "lucide-react";
import BookCallButton from "./BookCallButton";
// import StatusBadge from "./StatusBadge";
import SecondaryButton from "./SecondaryButton";

// const LogoPlaceholder = ({ className }: { className?: string }) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     className={className}
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M12 2L2 22h20L12 2z"
//     />
//   </svg>
// );

export default function Footer() {
  return (
    <footer className="pb-5 z-50">
      <div className="bg-white rounded-[24px] md:rounded-[32px] max-w-8xl mx-auto pt-24 pb-8 px-4 sm:px-6 md:px-10 flex flex-col items-center relative overflow-hidden shadow-2xl border border-gray-200">
        {/* --- Top CTA Section & Socials --- */}
        <div className="w-full flex flex-col xl:flex-row justify-between items-center xl:items-start gap-12 z-10 relative px-4 md:px-8">
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:w-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[0.8] tracking-tight">
              <span className="text-gray-900 text-3xl sm:text-4xl lg:text-[2.4rem]">
                Ready to ship?
              </span>
              <br />
              <span className="text-gray-500 text-3xl sm:text-4xl lg:text-[2.4rem]">
                Initialize your next project.
              </span>
            </h2>

            <p className="mt-8 text-gray-600 max-w-sm mx-auto xl:mx-0 text-sm md:text-base leading-relaxed font-medium">
              Secure an architectural review to benchmark your current
              infrastructure and map out an execution plan.
            </p>

            {/* <StatusBadge className="mt-10" /> */}

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
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
          </div>

          {/* --- Bottom Section: Links & Socials --- */}
          <div className="flex flex-wrap gap-10 sm:gap-16 md:gap-24 lg:mr-8 mt-12 xl:mt-0 xl:self-end">
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Company</h4>
              <a
                href="#"
                className="group flex items-center text-base font-medium text-gray-600 hover:text-[#de5145] transition-all duration-500"
              >
                <span className="relative pb-0.5">
                  Contact us
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
              </a>
              <a
                href="#"
                className="group flex items-center text-base font-medium text-gray-600 hover:text-[#de5145] transition-all duration-500"
              >
                <span className="relative pb-0.5">
                  About us
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
              </a>
              <a
                href="#"
                className="group flex items-center text-base font-medium text-gray-600 hover:text-[#de5145] transition-all duration-500"
              >
                <span className="relative pb-0.5">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
              </a>
              
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Socials</h4>

              {/* Twitter/X */}
              <a
                href="#"
                className="group flex items-center gap-2.5 text-base font-medium text-gray-600 hover:text-[#de5145] transition-all duration-500"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="flex items-center">
                  <span className="relative pb-0.5">
                    Twitter
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                </span>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="group flex items-center gap-2.5 text-base font-medium text-gray-600 hover:text-[#de5145] transition-all duration-500"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="flex items-center">
                  <span className="relative pb-0.5">
                    Instagram
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-[#de5145] transition-all duration-500"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="flex items-center">
                  <span className="relative pb-0.5">
                    LinkedIn
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Very large faded background text */}
        <div className="w-full flex justify-center pointer-events-none select-none z-0 mt-10 md:mt-16 sm:-mb-[3%] md:-mb-[5%]">
          <span
            className="text-[25vw] font-bold text-gray-300 leading-[0.8] tracking-tighter"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 15%, transparent 95%)",
              maskImage:
                "linear-gradient(to bottom, black 15%, transparent 95%)",
            }}
          >
            Wavyfy<span className="text-red-500">.</span>
          </span>
        </div>

        {/* --- Bottom Base Row --- */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-8 md:mt-0 z-20 relative">
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="group flex items-center text-xs font-semibold text-gray-800 hover:text-[#de5145] transition-all duration-500"
            >
              <span className="relative pb-0.5">
                Privacy policy
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
              </span>
              <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </a>
            <a
              href="#"
              className="group flex items-center text-xs font-semibold text-gray-800 hover:text-[#de5145] transition-all duration-500"
            >
              <span className="relative pb-0.5">
                Terms of services
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
              </span>
              <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </a>
            <a
              href="#"
              className="group flex items-center text-xs font-semibold text-gray-800 hover:text-[#de5145] transition-all duration-500"
            >
              <span className="relative pb-0.5">
                Refund Policy
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full"></span>
              </span>
              <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            </a>
          </div>
          <p className="text-xs font-semibold text-gray-800">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#de5145] ">Wavyfy India. </span> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
