"use client";

import { motion } from "framer-motion";

interface Props {
  period: string;
  role: string;
  company: string;
  description: string;
}

export default function ExperienceCard({
  period,
  role,
  company,
  description,
}: Props) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="absolute -left-[56px] top-2 h-3 w-3 rounded-full bg-[#924B2B]" />

      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#924B2B]">
        {period}
      </p>

      <h3 className="font-['IBM_Plex_Sans'] text-xl font-semibold text-[#100E0C]">
        {role}
      </h3>

      <p className="mt-1 text-[#7E756F]">
        {company}
      </p>

      <p className="mt-6 max-w-xl leading-8 text-[#4D4540]">
        {description}
      </p>
    </motion.div>
  );
}