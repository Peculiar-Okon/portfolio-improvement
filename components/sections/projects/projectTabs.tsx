"use client";

import clsx from "clsx";

interface ProjectTabsProps {
  projects: {
    id: number;
    name: string;
  }[];
  activeProject: number;
  onChange: (id: number) => void;
}

export default function ProjectTabs({
  projects,
  activeProject,
  onChange,
}: ProjectTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-8">
      {projects.map((project, index) => {
        const active = index === activeProject;

        return (
          <button
            key={project.id}
            onClick={() => onChange(index)}
            className="group flex flex-col items-start"
          >
            <span
              className={clsx(
                "font-mono text-sm uppercase tracking-[0.24em] transition-all duration-300",
                active
                  ? "text-[#F1B5D5]"
                  : "text-[#EAE0E2]/40 group-hover:text-[#EAE0E2]/80"
              )}
            >
              {project.name}
            </span>

            <span
              className={clsx(
                "mt-3 h-[2px] rounded-full transition-all duration-500",
                active
                  ? "w-full bg-[#F1B5D5]"
                  : "w-0 bg-[#F1B5D5] group-hover:w-full"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}