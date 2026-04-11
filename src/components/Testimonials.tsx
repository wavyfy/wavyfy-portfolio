import { ArrowRight, Star } from "lucide-react";
import BookCallButton from "./BookCallButton";

const testimonials = [
  {
    id: 1,
    metric: "2.3x",
    title: "increase in lead conversion",
    quote:
      "Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.",
    author: "Sarah Coleman",
    role: "CMO",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    brandIcon: (
      <svg
        className="w-7 h-7 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 16L16 12L12 8" />
        <path d="M8 12H16" />
      </svg>
    ),
    column: "left",
    height: "h-95",
  },
  {
    id: 2,
    metric: "3x",
    title: "faster MVP launch",
    quote:
      "Working with Lamosa helped us cut our launch timeline dramatically. They understand product goals and build with both speed and precision. Easily one of the best agencies we've worked with.",
    author: "Amina Khatri",
    role: "Head of Product",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=150&h=150&fit=crop&crop=face",
    brandIcon: (
      <svg
        className="w-7 h-7 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    column: "left",
    height: "h-175",
  },
  {
    id: 3,
    metric: "45%",
    title: "Reduced bounce rate",
    quote:
      "The team at Lamosa not only built us a beautiful platform—they made it fast, smart, and incredibly intuitive. Their UX insights and performance tweaks made a huge difference in keeping users engaged.",
    author: "Marcus Levine",
    role: "Co-founder",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    brandIcon: (
      <svg
        className="w-7 h-7 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    column: "right",
    height: "h-95",
  },
  {
    id: 4,
    metric: "62%",
    title: "increase in mobile traffic retention",
    quote:
      "Lamosa completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.",
    author: "Julian Ortega",
    role: "CEO",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    brandIcon: (
      <svg
        className="w-7 h-7 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    column: "right",
    height: "h-95",
  },
];

const QuoteIcon = () => (
  <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// Extracted reusable card component
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div
    className={`bg-white rounded-[40px] p-8 md:p-8 shadow-lg border border-gray-200 flex flex-col ${testimonial.height}`}
  >
    <h3 className="text-3xl font-semibold text-gray-900 mb-1">
      {testimonial.metric}
    </h3>
    <p className="text-2xl text-gray-500 font-medium mb-3">
      {testimonial.title}
    </p>
    <QuoteIcon />
    <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium mt-10">
      {testimonial.quote}
    </p>
    <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            {testimonial.author}
          </h4>
          <p className="text-xs text-gray-500 font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>
      {testimonial.brandIcon}
    </div>
  </div>
);

export default function Testimonials() {
  const leftCards = testimonials.filter((t) => t.column === "left");
  const rightCards = testimonials.filter((t) => t.column === "right");

  return (
    <section className="bg-[#f5f5f5] sm:px-4 py-20 md:py-18 md:px-7">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
            <span className="text-md font-medium text-gray-700">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.3rem] font-semibold leading-[1.2] tracking-tight">
            <span className="text-gray-900">We're loved.</span>
            <br />
            <span className="text-gray-500">Just success stories.</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start border border-gray-200 bg-white rounded-[65px] p-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftCards.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightCards.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}

            {/* Dark CTA Card */}
            <div className="bg-[#0f1115] rounded-[40px] p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between h-[300px]">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "15px 15px",
                  maskImage:
                    "linear-gradient(to right, transparent, black 110%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 110%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tightest">
                  <span className="text-white">You focus </span>
                  <span className="text-gray-500">on</span>
                  <br />
                  <span className="text-gray-500">your company.</span>
                  <br />
                  <span className="text-gray-500">We make </span>
                  <span className="text-white">it happen.</span>
                  <br />
                  <span className="text-white font-semibold mt-1 block">
                    Unstoppable Growth.
                  </span>
                </p>
              </div>
              <div className="relative z-10 flex justify-end mt-8">
                <BookCallButton
                  className="flex items-center gap-3 bg-white text-gray-900 text-lg font-medium pl-6 pr-3 py-3 rounded-full transition-all hover:bg-gray-100"
                  iconContainerClassName="w-12 h-8 border border-gray-300 rounded-full bg-gray-100"
                  iconClassName="w-4 h-4 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col items-end gap-4">
          <button className="flex items-center gap-3 bg-white text-gray-900 text-md font-medium pl-6 pr-2 py-2 rounded-full border border-gray-200 shadow-sm transition-all hover:bg-gray-50">
            <span>View All Reviews</span>
            <span className="flex items-center justify-center w-12 h-8 border border-gray-300 rounded-full bg-[#f5f5f5]">
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </span>
          </button>

          {/* Social Proof / Reviews */}
          <div className="flex items-center gap-4">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#f5f5f5] bg-gray-300 overflow-hidden"
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
