import { ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import BookCallButton from "./BookCallButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 ">
      <div className="absolute inset-0 flex justify-center pointer-events-none h-full">
        <div
          className="w-full opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(170,170,170,0.7) 1px, rgba(170,170,170,0.25) 1.3px, transparent 1px)",
            backgroundSize: "16px 16px",

            WebkitMaskImage:
              "radial-gradient(circle at center top, black 5%, transparent 100%)",
            maskImage:
              "radial-gradient(circle at center top, black 5%, transparent 100%)",
          }}
        />
      </div>
      <div className="relative max-w-8xl mx-auto px-2 sm:px-4 pt-16 pb-0">
        {/* Floating Testimonials — Left Side */}
        <div className="hidden lg:block absolute left-4 xl:left-8 top-16 w-58 space-y-7">
          <TestimonialCard
            quote="...days, not weeks—highly recommend."
            author="Marcus T"
            className="rotate-3 opacity-50  shadow-sm"
          />
          <TestimonialCard
            quote="The updates and attention to detail are unmatched."
            author="Nora S"
            className="rotate-1 -translate-x-2  shadow-xl"
          />
          <TestimonialCard
            quote="Saved me weeks of work, and the result looks professional."
            author=""
            className="-rotate-3 opacity-50 translate-x-0  shadow-sm"
          />
        </div>

        {/* Floating Testimonials — Right Side */}
        <div className="hidden lg:block absolute right-4 xl:right-8 top-12 w-58 space-y-7">
          <TestimonialCard
            quote="...experience—launched my site in no time!"
            author="Daniel K"
            className="-rotate-3 opacity-50 translate-x-0 shadow-sm"
          />
          <TestimonialCard
            quote="Beautiful template, easy to customize, and worth every penny."
            author="Amelia R"
            className="rotate-0 translate-x-3 shadow-xl"
          />
          <TestimonialCard
            quote="Exactly what I needed to kickstart my SaaS project fast."
            author="Leo M"
            className="rotate-3 opacity-50 translate-x-0 shadow-sm"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Status Badge */}
          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping [animation-duration:2s] scale-[2.2]" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>

            <span className="text-sm font-medium text-gray-700">
              Open to Work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[3rem] font-semibold leading-[1.15] tracking-tight text-gray-900 mb-6">
            Web &amp; Brand Design
            <br />
            For Ambitious Founders
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-700 max-w-md mb-10 leading-relaxed">
            We provide the best solutions that fit your budget and goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <BookCallButton
              className="hidden md:flex items-center gap-3 bg-[#0B1220] text-white text-md font-medium pl-4 pr-2 py-2 rounded-full border shadow-xl shadow-black/30 border-white/10 hover:bg-[#0f172a] transition-all"
              iconContainerClassName="w-12 h-8 rounded-full bg-white/10 border border-white/20"
              iconClassName="w-4 h-4 text-white"
            />
            <button className="text-md font-medium px-7 py-3.5 rounded-full border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 transition-colors">
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
                    className="w-4 h-4 text-gray-800 fill-current"
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
