"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "20+",
    label: "Projects",
    description: "Web, mobile & backend products",
    color: "bg-[#FFF7E8]",
  },
  {
    value: "2+",
    label: "Years",
    description: "Building production software",
    color: "bg-[#EAF8EF]",
  },
  {
    value: "AI • Mobile • Web",
    label: "Tech Stack",
    description: "Solutions Built",
    color: "bg-[#EEF6FF]",
  },
  {
    value: "Open",
    label: "Availability",
    description: "Internships & freelance work",
    color: "bg-[#F8EEFF]",
  },
];

export default function HeroStats() {
  return (
    <section className="-mt-6 px-6 pb-24 lg:px-16">
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-2 gap-5">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
                rotateX: 6,
                rotateY: -4,
                scale: 1.02,
              }}
              className={`
                ${item.color}
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-white/60
                p-6
                shadow-[0_18px_45px_rgba(0,0,0,.06)]
                transition-all
                duration-500
              `}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* glow */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.55),transparent_45%)]" />

              {/* grain */}

              <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#000_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

              <div className="relative">

                <p className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.18em] text-[#666]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-['EB_Garamond'] text-4xl text-[#171717] lg:text-5xl">
                  {item.value}
                </h3>

                <p className="mt-3 max-w-[18rem] text-sm leading-7 text-[#666]">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}