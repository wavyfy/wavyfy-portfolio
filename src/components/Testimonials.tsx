import DarkCTACard from "./DarkCTACard";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    metric: "3.5x",
    title: "increase in platform throughput",
    quote:
      "Their architectural choices drastically improved our data layer capacity. The system now handles 3.5x the volume without any latency spikes. Exceptional engineering.",
    author: "Sarah Coleman",
    role: "CTO",
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
    spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: 2,
    metric: "100ms",
    title: "latency reduction across core APIs",
    quote:
      "The precision with which they execute is rare. We cut 100ms off our core API responses, leading to an immediate boost in user retention and server efficiency.",
    author: "Amina Khatri",
    role: "VP of Engineering",
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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    column: "left",
    spanClass: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    id: 3,
    metric: "Zero",
    title: "downtime during major migration",
    quote:
      "They architected and executed our v3 migration flawlessly. Moving a massive active user base with zero downtime requires a team that truly understands infrastructure routing and redundancy.",
    author: "Marcus Levine",
    role: "Co-founder & Architect",
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
    spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: 4,
    metric: "4x",
    title: "faster build pipelines",
    quote:
      "By optimizing our container configurations and caching strategies, they slashed our CI/CD pipeline times entirely. Our developers are now shipping code 4x faster.",
    author: "Julian Ortega",
    role: "Head of Infrastructure",
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
    spanClass: "md:col-span-1 lg:col-span-2 lg:row-span-1",
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
  className,
}: {
  testimonial: (typeof testimonials)[0];
  className?: string;
}) => (
  <div
    className={`bg-white rounded-3xl p-5 md:p-5 shadow-lg border border-gray-200 flex flex-col h-full ${className || ""}`}
  >
    {/* Avatar, Author, Role & BrandIcon (Now at the top) */}
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.author}
          width={48}
          height={48}
          sizes="48px"
          className="rounded-full object-cover"
        />{" "}
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

    {/* Quote Section */}
    <QuoteIcon />
    <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium mt-6 mb-10">
      {testimonial.quote}
    </p>

    {/* Metric & Title (Now at the bottom) */}
    <div className="mt-auto bg-gray-200 p-4 rounded-2xl">
      <h3 className="text-3xl font-semibold text-gray-900 mb-1">
        {testimonial.metric}
      </h3>
      <p className="text-2xl text-gray-500 font-medium">{testimonial.title}</p>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="psm:px-4 py-20 md:py-18 md:px-7">
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
            <span className="text-gray-900">Impact Reports.</span>
            <br />
            <span className="text-gray-500">Measurable technical output.</span>
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 border border-gray-200 bg-white rounded-[32px] md:rounded-[40px] p-3 md:p-6 lg:p-8">
          {testimonials.map((t) => (
            <div key={t.id} className={t.spanClass}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}

          {/* Dark CTA Card seamlessly occupying space in grid */}
          <div className="md:col-span-1 lg:col-span-2 lg:row-span-1">
            <DarkCTACard className="h-full min-h-[300px]" />
          </div>
        </div>

        {/* {/* Footer */}
        {/* <div className="mt-12 flex flex-col items-end gap-4">
  <button className="flex items-center gap-3 bg-white text-gray-900 text-md font-medium pl-6 pr-2 py-2 rounded-xl border border-gray-200 shadow-sm transition-all hover:bg-gray-50">
    <span>View All Reviews</span>
    <span className="flex items-center justify-center w-12 h-8 border border-gray-300 rounded-lg bg-[#f5f5f5]">
      <ArrowRight className="w-4 h-4 text-gray-500" />
    </span>
  </button>

  <div className="flex items-center gap-4">
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
</div> */}
      </div>
    </section>
  );
}
