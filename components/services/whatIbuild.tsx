"use client";

import { motion } from "framer-motion";
import MaskingTape from "../Experience/maskingTape";
import NotebookDoodle from "./doodle";
import { services } from "./services";

export default function WhatIBuild() {
  return (
    <section id="services" className="px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.18em] text-neutral-500">
          Capabilities
        </p>

        <h2 className="mt-4 font-['EB_Garamond'] text-5xl text-[#1A1C1B]">
          What I Build
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Different problems need different tools. These are the kinds of
          products I enjoy designing and building.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`
                relative
                rounded-[24px]
                border
                border-black/5
                p-7
                shadow-[0_15px_40px_rgba(0,0,0,.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:rotate-0
                ${service.rotate}
              `}
              style={{ background: service.color }}
            >
              <MaskingTape
                className="-right-2 -top-2"
                rotate="8deg"
              />

              <div className="text-[#1A1C1B]">
                <NotebookDoodle type={service.icon as any} />
              </div>

              <h3 className="mt-6 font-['EB_Garamond'] text-3xl text-[#1A1C1B]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}