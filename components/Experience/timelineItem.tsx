"use client";

interface TimelineItemProps {
  period: string;
  role: string;
  company: string;
  description: string;
  active?: boolean;
}

export default function TimelineItem({
  period,
  role,
  company,
  description,
  active = false,
}: TimelineItemProps) {
  return (
    <div
      className="
        relative
        border-l
        border-black/15
        pl-8
        pb-10
      "
    >
      <span
        className={`
          absolute
          -left-[8px]
          top-1
          h-4
          w-4
          rounded-full
          border-[3px]
          border-[#FFFDF8]
          shadow-[0_0_0_6px_rgba(0,0,0,.04)]
          ${
            active
              ? "bg-black"
              : "bg-neutral-300"
          }
        `}
      />

      <p
        className="
          font-['IBM_Plex_Mono']
          text-[11px]
          uppercase
          tracking-[0.16em]
          text-neutral-500
        "
      >
        {period}
      </p>

      <h3
        className="
          mt-4
          text-xl
          font-semibold
          text-[#171717]
        "
      >
        {role}
      </h3>

      <p
        className="
          mt-1
          font-['EB_Garamond']
          text-[2rem]
          leading-none
          text-neutral-700
        "
      >
        {company}
      </p>

      <p
        className="
          mt-5
          max-w-xl
          text-[15px]
          leading-8
          text-neutral-600
        "
      >
        {description}
      </p>
    </div>
  );
}