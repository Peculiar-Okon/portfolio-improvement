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
        py-24
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
          className="mb-20"
        >
          <p className="font-['IBM_Plex_Sans'] text-[12px] font-semibold uppercase tracking-[0.25em] text-[#B96A48]">
            CAPABILITIES
          </p>

          <h2 className="mt-5 max-w-xl font-['EB_Garamond'] text-5xl leading-none text-[#1D1A18] md:text-6xl">
            Areas of Expertise
          </h2>
        </motion.div>

        {/* Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-14 md:grid-cols-2 xl:grid-cols-4"
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
                className="mb-6 h-[2px] w-10 rounded-full bg-[#B96A48]"
                whileHover={{
                  width: 64,
                }}
              />

              <p className="font-['IBM_Plex_Sans'] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B96A48]">
                {itemData.number}
              </p>

              <h3 className="mt-4 font-['EB_Garamond'] text-[2rem] leading-none text-[#1F1C1A]">
                {itemData.title}
              </h3>

              <p className="mt-6 leading-8 text-[#5B544F]">
                {itemData.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}