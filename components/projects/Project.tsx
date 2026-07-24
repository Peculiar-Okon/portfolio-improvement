"use client";

import { motion } from "framer-motion";

import Container from "../layout/container";
import ProjectCard from "./ProjectCard";

import { projects } from "./projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-24
            flex
            flex-col
            gap-6
            border-b
            border-[#DDD4CC]
            pb-8
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <h2 className="font-['EB_Garamond'] text-5xl text-[#262321]">
            Selected Work
          </h2>

          <p className="font-['IBM_Plex_Sans'] text-xs font-semibold uppercase tracking-[0.22em] text-[#8A8079]">
            FEATURED PROJECTS
          </p>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}