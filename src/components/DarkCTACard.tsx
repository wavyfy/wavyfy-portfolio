import { ReactNode } from "react";
import BookCallButton from "./BookCallButton";
import { content } from "@/content/content";

interface DarkCTACardProps {
  className?: string;
  children?: ReactNode;
  showButton?: boolean;
  text?: {
    line1?: string;
    line2?: string;
    line3?: string;
    highlight?: string;
  };
}

export default function DarkCTACard({
  className,
  children,
  showButton = true,
  text,
}: DarkCTACardProps) {
  return (
    <div
      className={`bg-[#0f1115] rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between ${
        className || "h-[300px]"
      }`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "15px 15px",
          maskImage: "linear-gradient(to right, transparent, black 110%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 110%)",
        }}
      />
      <div className="relative z-10 grow">
        {children || (
          <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tightest">
            <span className="text-white">
              {text?.line1 ?? content.cta.defaultCard.line1}
            </span>
            <span className="text-gray-500">the</span>
            <br />
            <span className="text-gray-500">
              {text?.line2 ?? content.cta.defaultCard.line2}
            </span>
            <br />
            <span className="text-gray-500">
              {text?.line3 ?? content.cta.defaultCard.line3}
            </span>
            <span className="text-white font-semibold mt-1 block">
              {text?.highlight ?? content.cta.defaultCard.highlight}
            </span>
          </p>
        )}
      </div>
      {showButton && (
        <div className="relative z-10 flex justify-end mt-8">
          <BookCallButton
            className="flex items-center gap-3 bg-white text-gray-900 text-lg font-medium pl-6 pr-3 py-3 rounded-xl transition-all hover:bg-gray-100"
            iconContainerClassName="w-12 h-8 rounded-lg bg-gray-200"
            iconClassName="w-4 h-4 text-gray-900"
          />
        </div>
      )}
    </div>
  );
}
