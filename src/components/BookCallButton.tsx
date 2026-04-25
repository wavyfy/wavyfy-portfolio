import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { content } from "@/content/content";

interface BookCallButtonProps {
  text?: string;
  className?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
}

export default function BookCallButton({
  text = content.cta.bookCall,
  className = "",
  iconContainerClassName = "",
  iconClassName = "w-4 h-4",
  href = "#contact",
  onClick,
  type = "button",
}: BookCallButtonProps) {
  const isLink = href && type !== "submit";
  const Tag = isLink ? "a" : "button";
  const props = isLink ? { href } : { onClick, type };

  return (
    <Tag
      className={`group transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform ${className}`}
      {...props}
    >
      <span>{text}</span>
      <span
        className={`flex items-center justify-center ${iconContainerClassName}`}
      >
        <ArrowRightIcon
          className={`transition-transform duration-300 ease-out group-hover:translate-x-2 ${iconClassName}`}
        />
      </span>
    </Tag>
  );
}
