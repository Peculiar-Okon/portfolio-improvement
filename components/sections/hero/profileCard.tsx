"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function IdentityCard() {
  return (
    <div className="group relative w-full min-h-[190px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#F1B5D5]/20 hover:shadow-[0_24px_60px_rgba(241,181,213,0.12)]">
      {/* Background Glow */}
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#F1B5D5]/10 blur-3xl" />
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-violet-400/5 blur-3xl" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/5 transition-all duration-500 group-hover:ring-[#F1B5D5]/20" />

      <div className="relative flex flex-wrap items-center justify-between gap-4 px-7 py-6">
        {/* Left */}
        <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-center">
          {/* Profile */}
          {/* <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-[22px] border border-[#F1B5D5]/20 bg-[#1A1A1F] shadow-lg sm:h-24 sm:w-24">
            <Image
              src="/images/profile.jpg"
              alt="Pearl Essien"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div> */}

          {/* Text */}
          <div className="min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-[#EAE0E2]">
              Peculiar Kenedy
            </h3>

            <p className="mt-2 text-sm text-[#D3C2C9]">
              Software Engineering • Ritman University
            </p>

            <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
              <span className="text-sm text-[#C8C5CA]">
                🇳🇬 Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <Link href="#about" aria-label="Read about Pearl Essien" className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#EAE0E2] backdrop-blur-md transition-all duration-300 group-hover:border-[#F1B5D5]/30 group-hover:bg-[#F1B5D5]/10">
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
