"use client";

import { Sparkles } from "lucide-react";

export default function Announcement() {
  return (
    <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#F1B5D5]/20 bg-[#F1B5D5]/10 px-4 py-2 backdrop-blur-md">
      <span className="h-2 w-2 rounded-full bg-[#F1B5D5] shadow-[0_0_12px_rgba(241,181,213,0.8)] animate-pulse" />

      <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#F1B5D5]">
        Building thoughtful digital experiences
      </span>

      <Sparkles
        size={14}
        className="text-[#F1B5D5]/70"
        strokeWidth={2}
      />
    </div>
  );
}