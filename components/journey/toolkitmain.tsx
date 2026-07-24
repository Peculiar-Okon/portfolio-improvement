"use client";

import { motion } from "framer-motion";
import { toolkit } from "./data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const categoryVariants: any = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemVariants: any = {
  hidden: {
    opacity: 0,
    x: -20,
    filter: "blur(2px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      delay: i * 0.05,
      ease: "easeOut",
    },
  }),
};

const levelDot = (level: string) => {
  const dots =
    level === "Daily"
      ? 3
      : level === "Strong"
        ? 3
        : level === "Frequent"
          ? 2
          : level === "Familiar"
            ? 2
            : 1;

  const active =
    level === "Daily"
      ? 3
      : level === "Strong"
        ? 2
        : level === "Frequent"
          ? 2
          : level === "Familiar"
            ? 1
            : 1;

  return (
    <span className="inline-flex items-center gap-[5px]">
      {Array.from({ length: dots }).map((_, i) => (
        <span
          key={i}
          className={`inline-block h-[6px] w-[6px] rounded-full transition-colors duration-300 ${
            i < active ? "bg-[#B96A48]" : "bg-[#D8CEC5]"
          }`}
        />
      ))}
    </span>
  );
};

export function Toolkit() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
      className="flex flex-col gap-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl text-[#100E0C]"
      >
        The Toolkit
      </motion.h2>

      <motion.div variants={containerVariants} className="space-y-12">
        {toolkit.map((group) => (
          <motion.div
            key={group.category}
            variants={categoryVariants}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="space-y-4 rounded-lg p-4 transition-colors duration-300 hover:bg-[#FDF8F7]/60"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm uppercase tracking-[0.15em] text-[#924B2B]"
            >
              {group.category}
            </motion.h3>

            <div>
              {group.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={itemVariants}
                  whileHover={{
                    x: 8,
                    backgroundColor: "rgba(185, 106, 72, 0.04)",
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center justify-between border-b border-[#CFC4BD] py-2.5 rounded px-2 -mx-2 cursor-default"
                >
                  <motion.span
                    whileHover={{ color: "#B96A48" }}
                    transition={{ duration: 0.2 }}
                    className="text-[16px] text-[#100E0C] transition-colors duration-200"
                  >
                    {item.name}
                  </motion.span>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[13px] text-[#7E756F] min-w-[44px] text-right">
                      {item.level === "Learning" ? "" : item.level}
                    </span>
                    {item.level === "Learning" ? (
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#B96A48]/60 italic">
                        Learning
                      </span>
                    ) : (
                      levelDot(item.level)
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}