"use client";

import {
  Layout,
  Server,
  Bot,
  Palette,
  Cloud,
} from "lucide-react";

const icons = {
  frontend: Layout,
  backend: Server,
  ai: Bot,
  design: Palette,
  devops: Cloud,
};

export type ExpertiseIcon = keyof typeof icons;

interface ExpertiseCardProps {
  icon: ExpertiseIcon;
  title: string;
  description: string;
  skills: string[];
  className?: string;
}

export default function ExpertiseCard({
  icon,
  title,
  description,
  skills,
  className = "",
}: ExpertiseCardProps) {
  const Icon = icons[icon];

  return (
    <div
      className={`group relative h-full min-h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#F1B5D5]/20 hover:shadow-[0_28px_70px_rgba(241,181,213,0.12)] ${className}`}
    >
      {/* Glow */}
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#F1B5D5]/10 blur-3xl" />

      <div className="relative flex h-full flex-col">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F1B5D5]/20 bg-[#F1B5D5]/10 text-[#F1B5D5]">
          <Icon size={24} />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-[#EAE0E2]">
            {title}
          </h3>

          <p className="mt-4 max-w-full text-sm leading-7 text-[#C8C5CA]">
            {description}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/5 bg-white/5 px-3 py-1.5 font-mono text-[11px] tracking-wide text-[#D3C2C9]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}