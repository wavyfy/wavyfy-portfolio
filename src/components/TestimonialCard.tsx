interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 max-w-[200px] ${className}`}
    >
      {/* Quote mark */}
      <div className="flex justify-between items-start mb-2">
        <p className="text-xs text-gray-600 leading-relaxed pr-4">{quote}</p>
        <span className="text-gray-300 text-lg font-serif leading-none flex-shrink-0">
          &#x201D;&#x201D;
        </span>
      </div>
      <p className="text-xs font-medium text-gray-900 mt-2">– {author}</p>
    </div>
  );
}
