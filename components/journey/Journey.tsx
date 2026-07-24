"use client";

import { motion } from "framer-motion";
import Experience from "./Experience";
import { Toolkit } from "./toolkitmain";

export default function Journey() {
  return (
    <section className="border-y border-[#CFC4BD] bg-[#F7F3F1] py-32">
      <div className="mx-auto grid max-w-7xl gap-24 px-8 lg:grid-cols-[1fr_0.9fr]">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <Experience />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7, delay: .15 }}
        >
          <Toolkit />
        </motion.div>

      </div>
    </section>
  );
}