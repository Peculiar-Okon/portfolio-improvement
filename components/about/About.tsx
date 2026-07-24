"use client";

import { motion } from "framer-motion";

import Container from "../layout/container";
import AboutCard from "./AboutCard";

import { about, aboutCards } from "./aboutdata";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
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

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F2ECE5] py-20 md:py-36"
    >
      <Container>
        {/* Header */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-4 border-b border-[#DDD3CB] pb-8 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="font-serif text-3xl text-[#262321] md:text-5xl">
            {about.heading}
          </h2>

          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#7A706A]">
            {about.sectionLabel}
          </p>
        </motion.div>

        {/* Content */}

        <div className="mt-16 md:mt-20 grid gap-16 lg:grid-cols-[1.25fr_.75fr]">
          {/* Left */}

          <div>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B96A48] sm:text-[11px]"
            >
              {about.label}
            </motion.p>

            <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
              {about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    max-w-2xl
                    text-[16px]
                    leading-[1.8]
                    text-[#4D4540]
                    sm:text-[18px]
                    sm:leading-[1.9]
                  "
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {aboutCards.map((card) => (
              <AboutCard
                key={card.label}
                {...card}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}