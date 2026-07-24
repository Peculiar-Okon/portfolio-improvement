"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Button from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-t border-[#CFC4BD] bg-[#F7F3F1]"
    >
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-10 sm:py-14 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:items-end md:justify-between">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="max-w-lg"
          >
            <motion.h2
              whileHover={{
                letterSpacing: ".03em",
              }}
              transition={{ duration: 0.3 }}
              className="font-serif text-2xl text-[#100E0C] sm:text-3xl md:text-4xl"
            >
              Peculiar.
            </motion.h2>

            <p className="mt-3 sm:mt-5 max-w-md text-[14px] leading-6 text-[#4D4540] sm:text-[17px] sm:leading-8">
              Thoughtfully engineered software.
              Quietly solving real problems.
            </p>

            <p className="mt-5 sm:mt-8 text-[9px] uppercase tracking-[0.18em] text-[#7E756F] sm:text-xs">
              Built with Next.js • Tailwind CSS • Framer Motion
            </p>

            <p className="mt-2 sm:mt-4 text-[9px] uppercase tracking-[0.14em] text-[#7E756F]/80 sm:text-xs">
              © {new Date().getFullYear()} Peculiar Okon. All rights reserved.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
            className="self-start md:self-end"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button
                onClick={scrollToTop}
                variant="text"
                className="group"
              >
                Back to Top

                <ArrowUp
                  className="
                    ml-2
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}