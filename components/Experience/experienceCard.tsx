"use client";

import TimelineItem from "./timelineItem";
import { experience } from "./data";

export default function ExperienceCard() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[#DDD5C8]
        bg-[#F9F6EF]
        p-7
        shadow-[0_24px_80px_rgba(0,0,0,.06)]
        sm:p-9
        lg:p-12
      "
    >
      {/* Paper texture */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <svg width="100%" height="100%">
          <filter id="paper-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".82"
              numOctaves="2"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            filter="url(#paper-noise)"
          />
        </svg>
      </div>

      <div className="relative">
        <p
          className="
            font-['IBM_Plex_Mono']
            text-[11px]
            uppercase
            tracking-[0.18em]
            text-neutral-600
          "
        >
          Journey
        </p>

        <h2
          className="
            mt-3
            font-['EB_Garamond']
            text-4xl
            text-[#171717]
            sm:text-5xl
          "
        >
          Experience
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.7fr_0.9fr]">
          {/* Timeline */}

          <div className="max-w-3xl">
            <TimelineItem
              active
              period={experience.period}
              role={experience.role}
              company={experience.company}
              description={experience.description}
            />

            <a
              href="#"
              className="
                mt-10
                inline-flex
                items-center
                rounded-full
                border
                border-black/10
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#171717]
                hover:text-white
                hover:shadow-lg
              "
            >
              Follow my journey →
            </a>
          </div>




        </div>
      </div>
    </section>
  );
}