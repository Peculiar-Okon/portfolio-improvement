"use client";

import { ArrowRight } from "lucide-react";

export default function ProjectsCTA() {
  return (
    <section className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] px-8 py-16 backdrop-blur-md transition-all duration-500 hover:border-[#F1B5D5]/20 hover:shadow-[0_30px_80px_rgba(241,181,213,0.12)] lg:px-16">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,181,213,0.08),transparent_70%)]" />

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#F1B5D5]/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#F1B5D5]/10 blur-[120px]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#F1B5D5]">
          LET'S BUILD
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-[#EAE0E2] md:text-5xl">
          Need a strategic engineering partner for your next product?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C8C5CA]">
          I enjoy turning ambitious ideas into thoughtful digital products,
          balancing clean engineering with intuitive user experiences.
        </p>

        <button className="mt-10 group/button inline-flex items-center gap-3 rounded-full bg-[#F1B5D5] px-8 py-4 font-semibold text-[#161214] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(241,181,213,0.30)]">
          Start a Conversation

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </button>
      </div>
    </section>
    );
}