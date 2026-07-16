"use client";

import {
  Brain,
  Search,
  PenSquare,
  Sparkles,
} from "lucide-react";

const strengths = [
  {
    icon: Brain,
    title: "Product-First Thinking",
    description:
      "I start with the problem before the technology. Every decision is guided by the experience I'm trying to create, not just the code I'm trying to write.",
  },
  {
    icon: Search,
    title: "Curious and always evolving",
    description:
      "I'm drawn to the invisible parts of software. APIs, distributed systems, AI tooling, networking and architecture fascinate me as much as polished interfaces.",
    featured: true,
  },
  {
    icon: PenSquare,
    title: "Learning in Public",
    description:
      "I document what I learn through articles and engineering notes. Teaching forces me to think clearly and helps other developers understand complex ideas.",
  },
  {
    icon: Sparkles,
    title: "Craft Over Complexity",
    description:
      "I believe great software feels effortless. From naming variables to designing interactions, I care about details users may never notice but always experience.",
  },
];

export default function WhatSetsMeApart() {
  return (
    <section id="strengths" className="scroll-mt-24 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#F1B5D5]">
            Beyond the Resume
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-[#EAE0E2] md:text-6xl">
            What Sets Me Apart
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#C8C5CA]">
            Technologies change. The way I approach problems doesn&apos;t.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#F1B5D5]/20 hover:shadow-[0_24px_60px_rgba(241,181,213,0.12)] md:min-h-[340px] lg:p-10
                ${
                  item.featured
                    ? "md:col-span-2 md:flex md:min-h-[300px] md:items-center md:justify-between"
                    : ""
                }`}
              >
                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F1B5D5]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  className={`relative ${
                    item.featured ? "max-w-xl" : "max-w-md"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F1B5D5]/20 bg-[#F1B5D5]/10 text-[#F1B5D5] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold leading-tight text-[#EAE0E2]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-[#C8C5CA] lg:text-base lg:leading-8">
                    {item.description}
                  </p>
                </div>

                {item.featured && (
                  <div className="pointer-events-none hidden lg:block">
                    <Search
                      size={170}
                      className="text-[#F1B5D5]/10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
