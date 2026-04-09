import { ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dot pattern background — centered band like the original */}
      <div
        className="absolute inset-x-0 top-8 bottom-0 flex justify-center pointer-events-none"
      >
        <div
          className="w-full max-w-7xl h-full opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #aaa 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-2 sm:px-4 pt-16 pb-20">
        {/* Floating Testimonials — Left Side */}
        <div className="hidden lg:block absolute left-4 xl:left-8 top-16 w-52 space-y-5">
          <TestimonialCard
            quote="...days, not weeks—highly recommend."
            author="Marcus T"
            className="-rotate-6 opacity-60 -translate-x-6"
          />
          <TestimonialCard
            quote="The updates and attention to detail are unmatched."
            author="Nora S"
            className="rotate-1 -translate-x-2"
          />
          <TestimonialCard
            quote="Saved me weeks of work, and the result looks professional."
            author=""
            className="-rotate-3 opacity-50 -translate-x-8"
          />
        </div>

        {/* Floating Testimonials — Right Side */}
        <div className="hidden lg:block absolute right-4 xl:right-8 top-12 w-52 space-y-5">
          <TestimonialCard
            quote="...experience—launched my site in no time!"
            author="Daniel K"
            className="rotate-3 opacity-60 translate-x-6"
          />
          <TestimonialCard
            quote="Beautiful template, easy to customize, and worth every penny."
            author="Amelia R"
            className="-rotate-1 translate-x-3"
          />
          <TestimonialCard
            quote="Exactly what I needed to kickstart my SaaS project fast."
            author="Leo M"
            className="rotate-3 opacity-50 translate-x-10"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Status Badge */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm font-medium text-gray-700">
              Open to Work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-semibold leading-[1.15] tracking-tight text-gray-900 mb-6">
            Web &amp; Brand Design
            <br />
            For Ambitious Founders
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-500 max-w-md mb-10 leading-relaxed">
            We build conversion-driven websites and marketing that attract,
            engage, and convert.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-gray-800 transition-colors">
              Book A Call
              <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
            <button className="text-sm font-medium px-7 py-3.5 rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              View Projects
            </button>
          </div>

          {/* Social Proof / Reviews */}
          <div className="flex items-center gap-4">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/64?img=${i + 10}`}
                    alt={`Reviewer ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Stars and text */}
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-700 mt-0.5 font-semibold">
                From 150+ reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
