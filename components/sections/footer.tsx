"use client";

import Link from "next/link";
import { ArrowUp, } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#expertise" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "Twitter",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#161214]/60 px-6 py-24 backdrop-blur-xl lg:px-10">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#F1B5D5]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Top */}

        <div className="grid gap-20 lg:grid-cols-[1fr_auto]">

          {/* Left */}

          <div>

            <div className="group inline-flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1B5D5] text-[#161214] font-bold transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">

                P

              </div>

              <span className="text-3xl font-bold tracking-tight text-[#EAE0E2]">
                Pearl
              </span>

            </div>

            <p className="mt-8 max-w-sm leading-8 text-[#D3C2C9]">
              Software engineer building thoughtful products where engineering,
              design and curiosity meet.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-20">

            <div>

              <h4 className="mb-8 font-mono text-sm uppercase tracking-[0.25em] text-[#F1B5D5]">
                Explore
              </h4>

              <div className="space-y-4">

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex w-fit items-center text-[#D3C2C9] transition-all duration-300 hover:text-white"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                ))}

              </div>

            </div>

            <div>

              <h4 className="mb-8 font-mono text-sm uppercase tracking-[0.25em] text-[#F1B5D5]">
                Social
              </h4>

              <div className="space-y-4">

                {socials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="group flex items-center gap-3 text-[#D3C2C9] transition-colors hover:text-white"
                    >
                      <Icon
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-1"
                      />

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {item.name}
                      </span>
                    </a>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-20 flex flex-col gap-8 border-t border-white/5 pt-10 text-sm uppercase tracking-[0.12em] text-[#D3C2C9]/50 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Pearl. Crafted with curiosity.
          </p>

          <div className="flex items-center gap-8">

            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-2 text-[#EAE0E2] transition-colors hover:text-[#F1B5D5]"
            >
              Top

              <ArrowUp
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}