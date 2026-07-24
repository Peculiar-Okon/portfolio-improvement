"use client";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

import Button from "../ui/button";
import ProjectImage from "./ProjectImage";
import ProjectMeta from "./ProjectMeta";

interface ProjectCardProps {
  project: {
    category: string;
    title: string;
    description: string;
    impact: string;
    stack: string;
    image: StaticImageData;
    github: string;
    demo: string;
  };

  reverse?: boolean;
}

export default function ProjectCard({
  project,
  reverse = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`
        grid
        items-center
        gap-12
        lg:gap-20
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      <ProjectImage
        image={project.image}
        title={project.title}
      />

      <div>
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#B96A48] sm:text-[12px]">
          {project.category}
        </p>

        <h3 className="mt-3 sm:mt-4 font-serif text-3xl leading-none text-[#262321] sm:text-4xl lg:text-5xl">
          {project.title}
        </h3>

        <p className="mt-6 sm:mt-8 text-base leading-8 text-[#66615C] sm:text-lg sm:leading-9">
          {project.description}
        </p>

        <ProjectMeta
          impact={project.impact}
          stack={project.stack}
        />

        <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
          <Button
            href={project.demo}
            variant="primary"
          >
            View Project
          </Button>

          <Button
            href={project.github}
            variant="text"
          >
            GitHub

            <ArrowUpRight
              size={16}
              className="ml-1"
            />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}