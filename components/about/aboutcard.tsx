"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
  label: string;
  value: string;
  suffix: string;
}

export default function AboutCard({
  label,
  value,
  suffix,
}: AboutCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="
        rounded-[24px]
        border
        border-[#E4DDD5]
        bg-[#FCFAF7]
        p-6
        shadow-[0_10px_30px_rgba(38,35,33,0.05)]
        transition-all
        duration-300
        hover:border-[#D6CCC4]
        hover:shadow-[0_18px_40px_rgba(38,35,33,0.08)]
      "
    >
      <p className="font-['IBM_Plex_Sans'] text-[11px] uppercase tracking-[0.28em] text-[#B96A48]">
        {label}
      </p>

      <div className="mt-5">
        <h3 className="font-['EB_Garamond'] text-[2.25rem] leading-none tracking-[-0.04em] text-[#262321]">
          {value}
        </h3>

        <p className="mt-1.5 font-['Manrope'] text-[14px] text-[#6E6762]">
          {suffix}
        </p>
      </div>
    </motion.article>
  );
}