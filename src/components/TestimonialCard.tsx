interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TestimonialCard({
  quote,
  author,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-5 border border-gray-100 max-w-[400px] ${className}`}
    >
      {/* Quote mark */}
      <div className="flex justify-between items-start mb-2">
        <p className="text-xs font-semibold  text-gray-600 leading-relaxed pr-4">
          {quote}
        </p>
        <span className="text-gray-400 text-2xl font-serif leading-none shrink-0">
          &#x201D;
        </span>
      </div>
      <p className="text-xs font-medium text-gray-900 mt-2">– {author}</p>
    </div>
  );
}
