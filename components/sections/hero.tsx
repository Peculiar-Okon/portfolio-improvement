"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

import Container from "../layout/container";
import Button from "../ui/button";

import Portrait from "@/assets/images/ChatGPT Image Jul 16, 2026, 07_15_32 PM.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const portrait = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    x: 40,
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44"
    >

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          {/* LEFT */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            {/* Small Label */}

            <motion.p
              variants={fadeUp}
              className="font-sans text-[11px] uppercase tracking-[0.32em] text-[#8A7E76] sm:text-[12px]"
            >
              Software Engineer • Nigeria
            </motion.p>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="mt-6 sm:mt-8 font-serif text-[2.5rem] leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-[4rem] lg:text-[5rem]"
            >
              I build software
              <br />

              that makes{" "}

              <span className="relative inline-block">
                complexity

                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-1 left-0 h-[5px] w-full origin-left rounded-full bg-[#E5B96C]/60 sm:bottom-3 sm:h-[7px]"
                />
              </span>

              <br />

              feel simple.
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-6 sm:mt-8 max-w-2xl text-base leading-8 text-[#5F6368] md:text-lg"
            >
              Full-stack and mobile app developer building thoughtful
              software that solves real-world problems through clean
              engineering, intuitive experiences, and systems designed
              to last.
            </motion.p>

            {/* CTA */}

            <motion.div
              variants={fadeUp}
              className="mt-10 sm:mt-14 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <Button
                href="#contact"
                variant="primary"
              >
                <Mail size={17} />
                Contact Me
              </Button>

              <Button
                href="#projects"
                variant="outline"
              >
                View Projects
              </Button>

              <Button
                href="https://github.com/Peculiar-Okon"
                variant="text"
                icon="arrow"
              >
                GitHub
              </Button>

              <Button
                href="/resume.pdf"
                variant="text"
                icon="download"
              >
                Résumé
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={portrait}
            initial="hidden"
            animate="show"
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            <motion.div
              whileHover={{
                y: -6,
                rotate: 0.4,
              }}
              transition={{
                duration: 0.45,
              }}
              className="group"
            >
              {/* Portrait */}

              <div className="overflow-hidden rounded-[24px] sm:rounded-[30px] border border-[#E7DED7] bg-[#FCFAF7] p-3 sm:p-4 shadow-[0_25px_80px_rgba(38,35,33,0.08)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] sm:rounded-[22px]">
                  <Image
                    src={Portrait}
                    alt="Portrait"
                    fill
                    priority
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Caption */}

                <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-[#EEE7E1] pt-4 sm:pt-5">
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#9C9087] sm:text-[11px]">
                      Software Engineer
                    </p>

                    <h3 className="mt-1 sm:mt-2 font-serif text-lg text-[#222] sm:text-xl">
                      Peculiar Okon
                    </h3>
                  </div>

                  <ArrowDown
                    className="text-[#B96A48]"
                    size={22}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}