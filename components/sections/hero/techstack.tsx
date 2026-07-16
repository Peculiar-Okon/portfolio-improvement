"use client";

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "NestJS",
  "Supabase",
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-8">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/5
            bg-white/[0.04]
            px-4
            py-2
            text-sm
            font-medium
            text-[#D3C2C9]
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#F1B5D5]/25
            hover:bg-[#F1B5D5]/10
            hover:text-[#F6D5E7]
            hover:shadow-[0_8px_24px_rgba(241,181,213,0.12)]
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}