"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-[92px] border-b border-[#E4DDD5] bg-[#F7F3ED]/90 backdrop-blur-md"
            : "h-[120px]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Brand */}

          <Link href="/" className="group">
            <div className="space-y-1">
              <h2 className="font-serif text-[28px] leading-none tracking-[-0.02em] text-[#262321] transition-colors duration-300 group-hover:text-[#B96A48]">
                Peculiar Kenedy
              </h2>

              <p className="font-['IBM_Plex_Sans'] text-[10px] uppercase tracking-[0.22em] text-[#7C746D] transition-all duration-300 group-hover:text-[#262321]">
                Software Engineer
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative font-['IBM_Plex_Sans'] text-[12px] font-medium uppercase tracking-[0.18em] text-[#4D4540]"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#B96A48] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="relative flex h-12 w-12 items-center justify-center lg:hidden"
          >
            <div className="relative h-5 w-7">
              <motion.span
                animate={
                  open
                    ? {
                        rotate: 45,
                        y: 8,
                        width: "100%",
                      }
                    : {
                        rotate: 0,
                        y: 0,
                        width: "100%",
                      }
                }
                transition={{ duration: 0.35 }}
                className="absolute left-0 top-0 h-[1.5px] bg-[#262321]"
              />

              <motion.span
                animate={
                  open
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 1,
                      }
                }
                className="absolute left-0 top-[9px] h-[1.5px] w-[65%] bg-[#262321]"
              />

              <motion.span
                animate={
                  open
                    ? {
                        rotate: -45,
                        y: -8,
                        width: "100%",
                      }
                    : {
                        rotate: 0,
                        y: 0,
                        width: "70%",
                      }
                }
                transition={{ duration: 0.35 }}
                className="absolute bottom-0 left-0 h-[1.5px] bg-[#262321]"
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.45 }}
            className="fixed left-0 right-0 top-[88px] z-40 border-b border-[#E4DDD5] bg-[#F7F3ED]/95 backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-8 py-10">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-[#ECE6DF] py-6"
                  >
                    <span className="font-serif text-3xl text-[#262321] transition-colors duration-300 group-hover:text-[#B96A48]">
                      {item.name}
                    </span>

                    <span className="font-['IBM_Plex_Sans'] text-[11px] uppercase tracking-[0.18em] text-[#7C746D]">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}