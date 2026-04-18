import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  className?: string;
}

export default function SecondaryButton({
  children,
  className = "",
}: SecondaryButtonProps) {
  return (
    <button
      className={`text-md font-medium px-7 py-3.5 rounded-xl border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
