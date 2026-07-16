"use client";

import { ArrowUpRight } from "lucide-react";

const items = [
  {
    label: "Building",
    value: "CommitMate",
  },
  {
    label: "Writing",
    value: "Invisible Engineering Ideas",
  },
  {
    label: "Learning",
    value: "Distributed Systems",
  },
  {
    label: "Reading",
    value: "Thinking in Systems",
  },
];

export default function CurrentlyCard() {
  return (
    <div className="group relative min-h-[395px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#F1B5D5]/20 hover:shadow-[0_30px_80px_rgba(241,181,213,0.12)]">
      {/* Glow */}
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#F1B5D5]/10 blur-[140px]" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-violet-400/5 blur-[120px]" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-[#F1B5D5]/20" />

      <div className="relative flex h-full flex-col p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F1B5D5]/80">
              Currently
            </p>

            <h3 className="mt-3 text-3xl font-bold text-[#EAE0E2]">
              Inside my world.
            </h3>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-[#F1B5D5]/30 group-hover:bg-[#F1B5D5]/10">
            <ArrowUpRight
              size={18}
              className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* Timeline */}
        <div className="mt-10 flex-1 space-y-8">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-5">
              <div className="mt-2 flex flex-col items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-[#F1B5D5] shadow-[0_0_12px_rgba(241,181,213,.6)]" />

                {item !== items[items.length - 1] && (
                  <div className="mt-2 h-10 w-px bg-gradient-to-b from-[#F1B5D5]/50 to-transparent" />
                )}
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8C5CA]">
                  {item.label}
                </p>

                <p className="mt-1 text-lg font-semibold text-[#EAE0E2]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}