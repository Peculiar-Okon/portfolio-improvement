"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
  label: string;
  value: string;
  suffix?: string;
}

export default function AboutCard({ label, value, suffix }: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border border-[#DDD3CB] bg-[#FDF8F7] p-6 sm:p-8"
    >
      <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#7A706A]">
        {label}
      </p>

      <p className="mt-3 font-serif text-3xl text-[#262321] sm:text-4xl">
        {value}
        {suffix && (
          <span className="block text-lg text-[#7A706A] sm:text-xl mt-1">
            {suffix}
          </span>
        )}
      </p>
    </motion.div>
  );
}