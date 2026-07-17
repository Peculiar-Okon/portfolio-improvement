"use client";

import Link from "next/link";

export default function Footer() {
  const navigation = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const stack = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
  ];

  return (
    <footer
      className="
        mt-24
        rounded-t-[28px]
        border-t
        border-black/5
        bg-[#F6F3EE]
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-14
          lg:px-10
        "
      >
        <div
          className="
            grid
            gap-14
            md:grid-cols-[1.4fr_.8fr_.8fr]
          "
        >
          {/* Left */}

          <div>
            <h2
              className="
                font-['EB_Garamond']
                text-5xl
                text-[#171717]
              "
            >
              Peculiar.
            </h2>

            <p
              className="
                mt-5
                max-w-sm
                text-[16px]
                leading-8
                text-[#5B5B5B]
              "
            >
              Software engineer building thoughtful products,
              developer tools and delightful digital
              experiences one project at a time.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <p
              className="
                font-['IBM_Plex_Mono']
                text-xs
                uppercase
                tracking-[0.18em]
                text-neutral-500
              "
            >
              Navigation
            </p>

            <nav className="mt-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    block
                    text-[16px]
                    text-[#4A4A4A]
                    transition
                    hover:translate-x-1
                    hover:text-black
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Built With */}
        </div>

        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-black/10
            pt-8
            text-sm
            text-neutral-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>© 2026 Peculiar Kenedy. All rights reserved.</p>


        </div>
      </div>
    </footer>
  );
}