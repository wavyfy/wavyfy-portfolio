import { content } from "@/content/content";

interface StatusBadgeProps {
  className?: string;
  title?: string;
  dotColor?: string;
}

export default function StatusBadge({
  className = "",
  title = content.common.status,
  dotColor = "bg-green-500",
}: StatusBadgeProps) {
  return (
    <div
      className={`flex items-center gap-4 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm w-fit ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping [animation-duration:2s] scale-[2.2] ${dotColor}`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}
        />
      </span>
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
}
