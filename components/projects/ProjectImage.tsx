"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProjectImageProps {
  image: StaticImageData;
  title: string;
}

export default function ProjectImage({
  image,
  title,
}: ProjectImageProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group"
    >
      <div
        className="
        overflow-hidden
        rounded-[34px]
        border
        border-[#E5DDD5]
        bg-[#FCFAF7]
        p-6
        shadow-[0_30px_90px_rgba(38,35,33,.08)]
      "
      >
        <div className="rounded-[24px] bg-white p-5">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[18px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}