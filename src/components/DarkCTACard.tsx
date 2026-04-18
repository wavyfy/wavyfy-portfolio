import { ReactNode } from "react";
import BookCallButton from "./BookCallButton";

interface DarkCTACardProps {
  className?: string;
  children?: ReactNode;
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
            <span className="text-white">{text?.line1 ?? "You command "}</span>
            <span className="text-gray-500">the</span>
            <br />
            <span className="text-gray-500">
              {text?.line2 ?? "market."}
            </span>
            <br />
            <span className="text-gray-500">We engineer </span>
            <span className="text-white">{text?.line3 ?? "the systems"}</span>
            <br />
            <span className="text-white font-semibold mt-1 block">
              {text?.highlight ?? "that make it possible."}
            </span>
          </p>
        )}
      </div>
      <div className="relative z-10 flex justify-end mt-8">
        <BookCallButton
          className="flex items-center gap-3 bg-white text-gray-900 text-lg font-medium pl-6 pr-3 py-3 rounded-xl transition-all hover:bg-gray-100"
          iconContainerClassName="w-12 h-8 border border-gray-300 rounded-lg bg-gray-100"
          iconClassName="w-4 h-4 text-gray-900"
        />
      </div>
    </div>
  );
}
