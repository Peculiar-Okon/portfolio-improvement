"use client";

import Image from "next/image";
import Tape from "./Tape";

interface ProjectImageProps {
  image: string;
  title: string;
  color: string;
}

export default function ProjectImage({
  image,
  title,
  color,
}: ProjectImageProps) {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden p-12"
      style={{ background: color }}
    >
      {/* background glow */}

      <div className="absolute h-64 w-64 rounded-full bg-white/40 blur-3xl" />

      {/* postcard */}

      <div className="group relative rotate-[-2deg] transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">

        <Tape className="-top-4 left-1/2 -translate-x-1/2" />

        <div className="rounded-[28px] border border-black/10 bg-[#FFFDF9] p-5 shadow-xl">

          <Image
            src={image}
            alt={title}
            width={900}
            height={600}
            className="rounded-2xl transition duration-700 group-hover:scale-[1.03]"
          />

        </div>

      </div>
    </div>
  );
}