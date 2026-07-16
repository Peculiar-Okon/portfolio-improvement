"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsHeader() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-[#F1B5D5]">
          Selected Work
        </p>

        <h2 className="mt-5 text-5xl font-bold tracking-[-0.04em] text-[#EAE0E2] md:text-6xl">
          Things I've Built.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#CFC7CB]">
          Products, experiments and ideas that solve real problems with
          thoughtful engineering and careful design.
        </p>
      </div>

      <Link href="#projects" className="group flex items-center gap-3 font-mono text-sm uppercase tracking-[0.18em] text-[#D3C2C9] transition-colors hover:text-[#F1B5D5]">
        View all

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
