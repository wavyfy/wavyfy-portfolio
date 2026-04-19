import BookCallButton from "./BookCallButton";
import StatusBadge from "./StatusBadge";
// import SecondaryButton from "./SecondaryButton";
import TestimonialCard from "./TestimonialCard";
import { Reveal } from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      <div className="relative max-w-8xl mx-auto px-2 sm:px-4 pt-16 pb-0">
        {/* Floating Testimonials — Left Side */}
        <Reveal delay={1} duration={1.5} y={30}>
          <div className="hidden lg:block absolute left-4 xl:left-8 top-0 w-58 space-y-10">
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
          <div className="hidden lg:block absolute right-4 xl:right-8 top-0 w-58 space-y-10">
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
            <div className="flex flex-col items-center justify-center gap-4 mb-10">
              <BookCallButton
                className="flex items-center gap-3 bg-[#0B1220] text-white text-md font-medium px-3 py-2 rounded-xl border shadow-xl shadow-black/30 border-white/10 hover:bg-[#0f172a] transition-all"
                iconContainerClassName="w-12 h-8 rounded-lg bg-white/10"
                iconClassName="w-4 h-4 text-white"
              />
              {/* <SecondaryButton>View Projects</SecondaryButton> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
