


"use client";

import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

const experiences = [
{
  year: "2026",
  company: "MyServiceAgent",
  role: "Backend Engineering Intern",
  description:
    "Built production backend features, REST APIs and authentication while collaborating on scalable systems.",
  skills: [
    "NestJS",
    "Express",
    "MongoDB",
    "REST APIs",
    "Authentication",
    "Documentation",
  ],
  current: true,
}

  // Future experiences simply get added here.
];

export default function ExperienceSection() {
  return (
    <section className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-500 hover:border-[#F1B5D5]/20 hover:shadow-[0_30px_80px_rgba(241,181,213,0.12)] sm:rounded-[32px] sm:p-8 lg:p-12">
      {/* Glow */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#F1B5D5]/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#F1B5D5]/10 blur-[120px]" />

      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#F1B5D5] sm:text-xs sm:tracking-[0.35em]">
          Experience
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-[1.08] text-[#EAE0E2] sm:mt-4 sm:text-4xl md:text-5xl">
          Learning by
          <br className="hidden sm:block" />{" "}
          building products.
        </h2>

        <div className="relative mt-10 sm:mt-16">
          {/* Timeline */}
          <div className="absolute left-[15px] top-0 h-full w-px bg-white/10 sm:left-[19px]" />

          <div className="space-y-8 sm:space-y-14">
            {experiences.map((experience) => (
              <div
                key={experience.year}
                className="group/item relative flex gap-4 sm:gap-8"
              >
                {/* Timeline Node */}
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F1B5D5]/20 bg-[#F1B5D5]/10 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-[#F1B5D5]/20 sm:h-10 sm:w-10">
                  <Briefcase
                    className="h-4 w-4 text-[#F1B5D5] sm:h-[18px] sm:w-[18px]"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 group-hover/item:border-[#F1B5D5]/20 group-hover/item:bg-white/[0.05] sm:rounded-3xl sm:p-7">
                  <div className="flex flex-col justify-between gap-3 md:flex-row">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#F1B5D5] sm:text-xs sm:tracking-[0.3em]">
                        {experience.year}
                      </p>

                      <h3 className="mt-2 break-words text-xl font-semibold text-[#EAE0E2] sm:mt-3 sm:text-2xl">
                        {experience.company}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#D3C2C9] sm:text-base">
                        {experience.role}
                      </p>
                    </div>

                    {experience.current && (
                      <span className="h-fit self-start whitespace-nowrap rounded-full border border-[#F1B5D5]/20 bg-[#F1B5D5]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#F1B5D5] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-[#C8C5CA] sm:mt-8 sm:text-base sm:leading-8">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#D3C2C9] sm:px-4 sm:py-2 sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="#projects" className="group/button mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#F1B5D5] transition-colors hover:text-white sm:mt-14 sm:text-base">
          Read more about my work

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
