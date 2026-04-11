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
    <button className={className} {...props}>
      <span>{text}</span>
      <span className={`flex items-center justify-center ${iconContainerClassName}`}>
        <ArrowRight className={iconClassName} />
      </span>
    </button>
  );
}
