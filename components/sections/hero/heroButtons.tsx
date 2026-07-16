"use client";

import Link from "next/link";
import { ArrowUpRight, GitBranchIcon } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Primary Button */}
      <Link
        href="#projects"
        className="group inline-flex h-16 items-center justify-center gap-3 rounded-xl bg-[#F1B5D5] px-10 text-base font-bold text-[#161214] shadow-[0_20px_40px_rgba(241,181,213,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(241,181,213,0.28)] active:translate-y-0"
      >
        <span>View Projects</span>

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>

      {/* Secondary Button */}
      <Link
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex h-16 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-10 text-base font-bold text-[#EAE0E2] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#F1B5D5]/40 hover:bg-white/10"
      >
        <GitBranchIcon
          size={20}
          className="transition-transform duration-300 group-hover:rotate-6"
        />

        <span>GitHub</span>
      </Link>
    </div>
  );
}