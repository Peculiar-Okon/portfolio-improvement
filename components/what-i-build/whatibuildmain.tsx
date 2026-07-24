"use client";

import { motion } from "framer-motion";

import Container from "../layout/container";
import { whatIBuild } from "./whatibuild";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function WhatIBuild() {
  return (
    <section
      id="what-i-build"
      className="
        border-y
        border-[#DED4CC]
        bg-[#F7F3F1]
        py-20
        lg:py-36
      "
    >
      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20"
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B96A48] sm:text-[12px]">
            CAPABILITIES
          </p>

          <h2 className="mt-4 sm:mt-5 max-w-xl font-serif text-4xl leading-none text-[#1D1A18] sm:text-5xl md:text-6xl">
            Areas of Expertise
          </h2>
        </motion.div>

        {/* Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 sm:gap-14 md:grid-cols-2 xl:grid-cols-4"
        >
          {whatIBuild.map((itemData) => (
            <motion.article
              key={itemData.number}
              variants={item}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.35,
              }}
              className="group"
            >
              {/* Top line */}

              <motion.div
                className="mb-5 sm:mb-6 h-[2px] w-10 rounded-full bg-[#B96A48]"
                whileHover={{
                  width: 64,
                }}
              />

              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B96A48] sm:text-[12px]">
                {itemData.number}
              </p>

              <h3 className="mt-3 sm:mt-4 font-serif text-[1.6rem] leading-none text-[#1F1C1A] sm:text-[2rem]">
                {itemData.title}
              </h3>

              <p className="mt-5 sm:mt-6 leading-8 text-[#5B544F]">
                {itemData.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}