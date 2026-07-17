"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MyImage from "../assets/images/ChatGPT Image Jul 16, 2026, 07_15_32 PM.png"

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-10 sm:px-6 lg:px-16">
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border border-white/50
          bg-[#D1FAE5]
          p-5
          shadow-[0_24px_60px_rgba(0,0,0,0.05)]
          sm:p-8
          lg:p-12
        "
      >
        {/* Paper texture */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.45),transparent_38%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#000_0.6px,transparent_0.6px)] [background-size:18px_18px]" />

        <div className="relative grid items-center gap-10 lg:gap-14 lg:grid-cols-[340px_1fr]">
          {/* Portrait */}

          <div className="relative mx-auto max-w-full px-2 sm:px-0">
            {/* Flower */}

            <svg
              className="absolute -left-6 -top-6 z-20 h-16 w-16"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="28" r="12" fill="#F6C6D8" />
              <circle cx="70" cy="48" r="12" fill="#FFD8A8" />
              <circle cx="50" cy="68" r="12" fill="#FFE6A7" />
              <circle cx="30" cy="48" r="12" fill="#F9CFF0" />
              <circle cx="50" cy="48" r="10" fill="#F4B400" />
            </svg>

            {/* Tape */}

            <div className="absolute left-1/2 top-0 z-20 h-8 w-24 -translate-x-1/2 -translate-y-4 rotate-2 rounded-sm bg-white/50 backdrop-blur-sm" />

            {/* Postcard */}

            <div className="-rotate-2 rounded-[22px] bg-[#FFFDF8] p-3 shadow-[0_30px_60px_rgba(0,0,0,.10)] transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02] max-w-full">
              <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl sm:max-w-[260px] lg:h-[330px] lg:max-w-[285px]">
                <Image
                  src={MyImage}
                  alt="Portrait of Pearl"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 flex items-center justify-between font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#7B7B7B] sm:text-[11px]">
                <span>OVER 20 PROJECTS</span>
                <span>2+ YEARS</span>
              </div>
            </div>
          </div>

          {/* Content */}

          <div>
            <p className="font-['IBM_Plex_Mono'] text-[13px] uppercase tracking-[0.15em] text-[#4B5552]">
              My Story
            </p>

            <h2 className="mt-6 max-w-lg font-['EB_Garamond'] text-4xl leading-[1.08] tracking-[-0.02em] text-[#1B1B1B] md:text-5xl break-words">
              Software with
              <br />
              purpose.
            </h2>

            <div className="mt-8 max-w-2xl space-y-4 text-base leading-7 text-[#4A4F4D] break-words">
              <p>
                I bridge the gap between technical infrastructure and flawless user experiences. My engineering philosophy centers on the idea that deep software architecture shouldn't feel heavy to the end user. From engineering decoupled backend microservices with NestJS to building responsive, typed frontend layouts in React and Next.js, I look at every application through the dual lenses of system performance and semantic UX polish.
              </p>

              

              <p>
                I thrive on solving complex, real-world utility problems—whether that means optimizing context windows for AI integrations, implementing bulletproof payment infrastructure, or breaking down monolithic challenges into clean, modular components.
              </p>
            </div>

            <Link
              href="/story"
              className="group mt-10 inline-flex items-center gap-3 font-medium text-[#111111] transition-all duration-300 hover:gap-5"
            >
              The story behind the code

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}