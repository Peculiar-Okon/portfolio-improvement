"use client";

import { useState } from "react";

import { projects } from "./projects";

import ProjectCard from "./projectCard";
import ProjectNavigation from "./projectNavigation";

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((current + 1) % projects.length);

  const previous = () =>
    setCurrent(
      (current - 1 + projects.length) % projects.length
    );

  return (
    <div className="space-y-10">

      <ProjectCard
        project={projects[current]}
      />

      <ProjectNavigation
        total={projects.length}
        current={current}
        next={next}
        previous={previous}
      />

    </div>
  );
}