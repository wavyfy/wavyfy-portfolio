import BookCallButton from "./BookCallButton";
import StatusBadge from "./StatusBadge";
import SecondaryButton from "./SecondaryButton";
import TestimonialCard from "./TestimonialCard";
import { Reveal } from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      <div className="relative max-w-8xl mx-auto px-2 sm:px-4 pt-16 pb-0">
        {/* Floating Testimonials — Left Side */}
        <Reveal delay={1} duration={1.5} y={30}>
          <div className="hidden lg:block absolute left-4 xl:left-8 top-16 w-58 space-y-10">
            <TestimonialCard
              quote="...days, not weeks—highly recommend."
              author="Marcus T"
              className="rotate-0 opacity-50  shadow-sm "
            />
            <TestimonialCard
              quote="The updates and attention to detail are unmatched."
              author="Nora S"
              className="rotate-0 translate-x-12  shadow-xl scale-110"
            />
            <TestimonialCard
              quote="Saved me weeks of work, and the result looks professional."
              author=""
              className="rotate-0 opacity-50  shadow-sm"
            />
          </div>
        </Reveal>

        {/* Floating Testimonials — Right Side */}
        <Reveal delay={1} duration={1.5} y={30}>
          <div className="hidden lg:block absolute right-4 xl:right-8 top-12 w-58 space-y-10">
            <TestimonialCard
              quote="...experience—launched my site in no time!"
              author="Daniel K"
              className="rotate-0 opacity-50 shadow-sm"
            />
            <TestimonialCard
              quote="Beautiful template, easy to customize, and worth every penny."
              author="Amelia R"
              className="rotate-0 -translate-x-12 shadow-xl scale-110"
            />
            <TestimonialCard
              quote="Exactly what I needed to kickstart my SaaS project fast."
              author="Leo M"
              className="rotate-0 opacity-50 shadow-sm"
            />
          </div>
        </Reveal>

        {/* Center Content */}
        <Reveal delay={0.5} duration={1} y={10}>
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
            {/* Status Badge */}
            <StatusBadge className="mb-8" />

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[3rem] font-semibold leading-[1.15] tracking-tight text-gray-900 mb-6">
              Building High-Impact Systems
              <br />
              For Global Scale
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-gray-700 max-w-md mb-10 leading-relaxed">
              We partner with visionary startups to engineer digital products
              that dominate their category and convert at scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <BookCallButton
                className="hidden md:flex items-center gap-3 bg-[#0B1220] text-white text-md font-medium pl-4 pr-2 py-2 rounded-xl border shadow-xl shadow-black/30 border-white/10 hover:bg-[#0f172a] transition-all"
                iconContainerClassName="w-12 h-8 rounded-lg bg-white/10 border border-white/20"
                iconClassName="w-4 h-4 text-white"
              />
              <SecondaryButton>View Projects</SecondaryButton>
            </div>

            {/* Social Proof / Reviews */}
            {/* <div className="flex items-center gap-4">
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
            </div> */}

            {/* Stars and text */}
            {/* <div className="flex flex-col items-start">
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
          </div> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
