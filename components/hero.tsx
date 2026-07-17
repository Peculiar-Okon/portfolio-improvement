"use client";

import Link from "next/link";
import {
  ArrowDown,
  GitBranchIcon,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-44 pb-28 lg:px-16">

      {/* Colorful background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FFE9C7] blur-3xl opacity-70" />
        <div className="absolute right-20 top-32 h-96 w-96 rounded-full bg-[#E6F4EA] blur-3xl opacity-80" />
        <div className="absolute left-1/3 bottom-0 h-80 w-80 rounded-full bg-[#DCEEFF] blur-3xl opacity-80" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#FFE4F2] blur-3xl opacity-70" />
    </div>

      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <h1 className="mt-8 max-w-4xl font-['EB_Garamond'] text-5xl leading-[1.02] tracking-[-0.04em] text-[#171717] md:text-7xl lg:text-[5.5rem]">

          I build software
          <br />

          that makes{" "}
          <span className="relative inline-block">

            complexity

            <span className="absolute bottom-2 left-0 h-[6px] w-full rounded-full bg-[#FFD77C]/70" />

          </span>{" "}

          feel simple.

        </h1>

        {/* Description */}

            <p className="mt-10 max-w-2xl text-lg leading-8 text-[#5F6368] md:text-xl">
            Full-stack and mobile app developer building thoughtful software that solves
            real-world problems through clean engineering, intuitive experiences and
            systems designed to last.
            </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-4">

          <Link
            href="#contact"
            className="rounded-full bg-black px-7 py-4 text-white transition hover:-translate-y-1"
          >
            Contact
          </Link>

          <Link
            href="https://github.com/Peculiar-Okon"
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-[#E5E5E3] bg-white/70 px-7 py-4 transition hover:bg-white"
          >
            <GitBranchIcon size={18} />
            GitHub
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-[#E5E5E3] bg-white/70 px-7 py-4 transition hover:bg-white"
          >
            Resume
            <ArrowDown size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}