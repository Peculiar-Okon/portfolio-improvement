"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Writings", href: "#writings" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#C4C7C7]/30 bg-[#F9F9F7]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[90px] max-w-[1280px] items-center justify-between px-6 lg:px-16">
        {/* Logo */}

        <Link
          href="/"
          className="font-['Instrument_Serif'] text-[2rem] tracking-[-0.05em] text-[#111111]"
        >
          Peculiar Kenedy.
        </Link>

        {/* Desktop */}

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium uppercase tracking-[0.18em] text-[#444748] transition-all duration-300 hover:-translate-y-[1px] hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition hover:bg-[#222]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#DADADA] bg-white lg:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute h-[2px] w-5 rounded bg-black transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />

          <span
            className={`absolute h-[2px] w-5 rounded bg-black transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>

        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              className="absolute left-6 right-6 top-[105px] rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-xl lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#444748] transition hover:bg-[#F5F5F2]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#222]"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}