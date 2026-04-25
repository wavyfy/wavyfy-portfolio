"use client";

import { ReactNode } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface AnimatedLinkProps {
  href?: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const AnimatedLink = ({
  href,
  label,
  icon,
  className = "text-sm",
  onClick,
  target,
}: AnimatedLinkProps) => {
  const isMailto = href?.startsWith("mailto:");
  const finalTarget = isMailto ? undefined : target;

  const content = (
    <>
      {icon && icon}
      <span className="flex items-center">
        <span className="relative pb-0.5">
          {label}
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#de5145] transition-all duration-500 group-hover:w-full" />
        </span>
        <ArrowTopRightIcon className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
      </span>
    </>
  );

  const sharedClassName = `group inline-flex items-center gap-2.5 font-medium text-gray-600 hover:text-[#de5145] transition-all duration-500 text-left ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={sharedClassName}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={finalTarget}
      rel={finalTarget === "_blank" ? "noopener noreferrer" : undefined}
      className={sharedClassName}
    >
      {content}
    </a>
  );
};
