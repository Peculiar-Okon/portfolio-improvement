"use client";

import Image, { type StaticImageData } from "next/image";
import {
  GitBranchIcon,
  ExternalLink,
} from "lucide-react";

import ProjectMeta from "./projectMeta";


interface Project {

  id: number;

  title: string;

  description: string;

  image: string | StaticImageData;

  color: string;

  stack: string[];

  progress: string;

  started: string;

  role: string;

  github: string;

  live: string;

  featured: boolean;

}


interface ProjectCardProps {

  project: Project;

}


export default function ProjectCard({
  project,
}: ProjectCardProps) {

  return (

    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-black/5
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
      style={{
        background: project.color,
      }}
    >


      {/* Mobile + Desktop Details Drawer */}

      <ProjectMeta
        progress={project.progress}
        started={project.started}
        role={project.role}
        github={project.github}
        stack={project.stack}
      />



      <div
        className="
          grid
          lg:grid-cols-[1.2fr_1fr]
        "
      >


        {/* Image */}


        <div
          className="
            relative
            overflow-hidden
            min-h-[350px]
          "
        >

          <Image

            src={project.image}

            alt={project.title}

            fill

            className="
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "

          />

        </div>




        {/* Content */}


        <div
          className="
            flex
            flex-col
            justify-between
            p-10
          "
        >


          <div>


            <p
              className="
                font-['IBM_Plex_Mono']
                text-xs
                uppercase
                tracking-[0.15em]
                text-[#454746]
              "
            >
              Featured Project
            </p>



            <h3
              className="
                mt-3
                font-['EB_Garamond']
                text-5xl
                text-[#171717]
              "
            >
              {project.title}
            </h3>



            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[#5F6368]
              "
            >
              {project.description}
            </p>




            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-2
              "
            >

              {project.stack.map((tech)=> (

                <span

                  key={tech}

                  className="
                    rounded-full
                    bg-white/60
                    px-4
                    py-2
                    text-sm
                    shadow-sm
                    backdrop-blur
                  "
                >

                  {tech}

                </span>

              ))}


            </div>


          </div>




          {/* Links */}


          <div
            className="
              mt-12
              flex
              gap-4
            "
          >

            <a
              href={project.github}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-black/10
                bg-white
                px-5
                py-3
                transition
                hover:shadow-md
              "
            >

              <GitBranchIcon size={17}/>

              GitHub

            </a>




            <a
              href={project.live}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-black
                px-5
                py-3
                text-white
                transition
                hover:scale-[1.03]
              "
            >

              <ExternalLink size={17}/>

              Live Demo

            </a>


          </div>


        </div>


      </div>


    </div>

  );
}