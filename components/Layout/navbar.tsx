"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Writing", href: "#writing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#12131ACC]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#E3E1EC]"
        >
          Pearl
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "relative text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300",
                index === 0
                  ? "text-white"
                  : "text-[#C8C5CA] hover:text-white"
              )}
            >
              {item.name}

              {index === 0 && (
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#F1B5D5]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="#contact"
          className="hidden rounded-full border border-[#F1B5D5] px-6 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#F1B5D5] transition-all duration-300 hover:bg-[#F1B5D5] hover:text-[#09090B] md:inline-flex"
        >
          Contact
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/10 p-2 text-[#E3E1EC] transition hover:border-[#F1B5D5]/40 hover:bg-white/5 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "overflow-hidden border-t border-white/10 bg-[#12131A]/95 backdrop-blur-xl transition-all duration-500 md:hidden",
          open ? "max-h-[500px]" : "max-h-0 border-transparent"
        )}
      >
        <div className="flex flex-col px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-4 text-sm font-medium text-[#C8C5CA] transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit rounded-full border border-[#F1B5D5] px-6 py-3 text-sm font-semibold text-[#F1B5D5] transition hover:bg-[#F1B5D5] hover:text-[#09090B]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}