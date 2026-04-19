import { ArrowRight } from "lucide-react";
import React from "react";

interface BookCallButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
}

export default function BookCallButton({
  text = "Book A Call",
  className = "",
  iconContainerClassName = "",
  iconClassName = "w-4 h-4",
  ...props
}: BookCallButtonProps) {
  return (
    <button 
      className={`group active:scale-[0.96] hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform ${className}`} 
      {...props}
    >
      <span>{text}</span>
      <span className={`flex items-center justify-center ${iconContainerClassName}`}>
        <ArrowRight className={`transition-transform duration-300 ease-out group-hover:translate-x-1 ${iconClassName}`} />
      </span>
    </button>
  );
}
