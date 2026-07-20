"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Mail,
} from "lucide-react";

import { RiGithubFill } from "react-icons/ri";

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

        <div className="mt-12 flex flex-wrap items-center gap-4">
  {/* Primary CTA */}

  <Link
    href="#projects"
    className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-[#171717]
      px-8
      py-4
      text-[15px]
      font-medium
      text-white
      shadow-[0_12px_30px_rgba(0,0,0,.16)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-black
      hover:shadow-[0_18px_40px_rgba(0,0,0,.22)]
    "
  >
    View Projects

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>

  {/* Secondary CTA */}

  <Link
    href="#contact"
    className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-[#D8D8D5]
      bg-[#FFFDF8]/90
      px-8
      py-4
      text-[15px]
      font-medium
      text-[#171717]
      backdrop-blur-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-black/15
      hover:bg-white
      hover:shadow-lg
    "
  >
    Let's Talk

    <Mail
      size={18}
      className="transition-transform duration-300 group-hover:-rotate-12"
    />
  </Link>

  {/* GitHub */}

  <Link
    href="https://github.com/Peculiar-Okon"
    target="_blank"
    className="
      group
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      border
      border-[#D8D8D5]
      bg-white/70
      backdrop-blur-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:rotate-6
      hover:bg-white
      hover:shadow-lg
    "
  >
    <RiGithubFill
      size={20}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </Link>

  {/* Resume */}

  <Link
    href="/resume.pdf"
    target="_blank"
    className="
      group
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      border
      border-[#D8D8D5]
      bg-white/70
      backdrop-blur-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:rotate-6
      hover:bg-white
      hover:shadow-lg
    "
  >
    <ArrowDown
      size={20}
      className="transition-transform duration-300 group-hover:translate-y-1"
    />
  </Link>
</div>

        {/* <div className="mt-12 flex flex-wrap gap-4">

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

        </div> */}

      </div>

    </section>
  );
}