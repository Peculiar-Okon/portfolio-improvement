"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, GitBranchIcon } from "lucide-react";

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  started: string;
  role: string;
  progress: number;
  updated: string;
  demo: string;
  github: string;
}

export default function ProjectShowcase({
  projects,
  current,
}: {
  projects: Project[];
  current: number;
}) {
  return (
    <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02] shadow-[0_40px_120px_rgba(0,0,0,0.16)]">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {projects.map((project) => (
          <div key={project.id} className="min-w-full p-4 sm:p-6 lg:p-8">
            <ProjectSlide project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectSlide({ project }: { project: Project }) {
  const [showMeta, setShowMeta] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-[32px] bg-[#0B0A0F] shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(241,181,213,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),transparent_18%)]" />
      <div className="relative flex min-h-[520px] flex-col overflow-hidden lg:flex-row">
        <div className="relative h-72 overflow-hidden lg:h-auto lg:w-1/2">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        </div>

        <div className="relative flex w-full flex-col justify-between gap-8 bg-[#0B0A0F]/95 p-8 sm:p-10 lg:w-1/2">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-[#F1B5D5] px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-[#161214]">
              {project.category}
            </span>

            <div className="space-y-4">
              <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h3>

              <p className="max-w-2xl text-sm leading-7 text-[#D3C2C9] sm:text-base">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#D3C2C9]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.demo}
              className="inline-flex items-center gap-2 rounded-full bg-[#F1B5D5] px-5 py-3 text-sm font-semibold text-[#161214] transition duration-300 hover:-translate-y-0.5"
            >
              Live Demo
              <ArrowUpRight size={18} />
            </a>

            <a
              href={project.github}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[#EAE0E2] transition duration-300 hover:border-[#F1B5D5]/30"
            >
              <GitBranchIcon size={18} />
              Source
            </a>
          </div>

          <button
            type="button"
            onClick={() => setShowMeta((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#EAE0E2] transition duration-300 hover:border-[#F1B5D5]/30 hover:text-[#F1B5D5] lg:hidden"
          >
            {showMeta ? "Hide details" : "View details"}
          </button>
        </div>
      </div>

      <div className={`pointer-events-none absolute inset-0 bg-[#09090B]/95 transition duration-500 ${showMeta ? "opacity-95" : "opacity-0 group-hover:opacity-100"}`} />
      <div className={`absolute inset-0 flex flex-col justify-between p-8 transition duration-500 ${
        showMeta
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
      }`}>
        <div className="flex items-center justify-end lg:hidden">
          <button
            type="button"
            onClick={() => setShowMeta(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-[#EAE0E2] transition duration-300 hover:bg-white/[0.14] hover:text-[#F1B5D5]"
            aria-label="Close details"
          >
            ×
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <OverlayStat label="Status" value={project.status} />
          <OverlayStat label="Started" value={project.started} />
          <OverlayStat label="Role" value={project.role} />
          <OverlayStat label="Progress" value={`${project.progress}% Complete`} />
          <OverlayStat label="Updated" value={project.updated} />
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#F1B5D5] px-5 py-3 text-sm font-semibold text-[#161214] transition duration-300 hover:-translate-y-0.5"
          >
            Live Demo
            <ArrowUpRight size={18} />
          </a>

          <a
            href={project.github}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-[#EAE0E2] transition duration-300 hover:border-[#F1B5D5]/30"
          >
            <GitBranchIcon size={18} />
            Source
          </a>
        </div>
      </div>
    </div>
  );
}

function OverlayStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#EAE0E2]/50">
        {label}
      </p>
      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

