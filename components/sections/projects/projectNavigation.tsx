"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectNavigationProps {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ProjectNavigation({
  current,
  total,
  onPrevious,
  onNext,
}: ProjectNavigationProps) {
  return (
    <div className="flex items-center gap-5">
      {/* Counter */}
      <span className="font-mono text-sm tracking-[0.2em] text-[#EAE0E2]/50">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </span>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrevious}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#EAE0E2] backdrop-blur-md transition-all duration-300 hover:border-[#F1B5D5]/30 hover:bg-[#F1B5D5]/10"
        >
          <ChevronLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
        </button>

        <button
          onClick={onNext}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#EAE0E2] backdrop-blur-md transition-all duration-300 hover:border-[#F1B5D5]/30 hover:bg-[#F1B5D5]/10"
        >
          <ChevronRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </div>
  );
}