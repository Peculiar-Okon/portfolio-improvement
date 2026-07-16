"use client";

import { useState } from "react";
import { projects } from "./projectsData";

import ProjectsHeader from "./projectsHeader";
import ProjectShowcase from "./projectShowcase";
import ProjectNavigation from "./projectNavigation";
import ProjectsCTA from "./projectsCTA";

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const handlePrevious = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-32">
      <ProjectsHeader />

      <div className="mt-16">
        <ProjectShowcase projects={projects} current={current} />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <ProjectNavigation
          current={current}
          total={projects.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        <div className="flex flex-nowrap gap-6 overflow-x-auto py-2 text-sm font-mono uppercase tracking-[0.24em] text-[#EAE0E2]/80 sm:text-base lg:text-lg">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrent(index)}
              className={`relative min-w-max whitespace-nowrap pb-2 transition duration-300 ${
                index === current
                  ? "text-[#F1B5D5]"
                  : "text-[#EAE0E2]/60 hover:text-[#F1B5D5]"
              }`}
            >
              {project.name}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[#F1B5D5]" : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <ProjectsCTA />
      </div>
    </section>
  );
}
