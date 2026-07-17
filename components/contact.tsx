"use client";

import {
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

export default function ContactSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8"  id="contact">
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[#D8D3EC]
          bg-[#EDE9FE]/60
          p-5
          shadow-[0_30px_80px_rgba(0,0,0,.05)]
          backdrop-blur-md
          sm:p-8
          lg:p-16
        "
      >
        {/* paper grain */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <filter id="contact-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".85"
                numOctaves="2"
              />
            </filter>

            <rect
              width="100%"
              height="100%"
              filter="url(#contact-noise)"
            />
          </svg>
        </div>

        <div className="relative grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT */}

          <div className="flex flex-col justify-center">
            <p
              className="
                font-['IBM_Plex_Mono']
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-neutral-500
              "
            >
              Contact
            </p>

            <h2
              className="
                mt-5
                font-['EB_Garamond']
                text-4xl
                sm:text-5xl
                leading-tight
                text-[#1A1C1B]
                lg:text-6xl
                break-words
              "
            >
              Let's build
              <br />

              <span className="relative inline-block">
                something memorable.

                <span
                  className="
                    absolute
                    bottom-1
                    left-0
                    h-[5px]
                    w-full
                    rounded-full
                    bg-black/25
                    -rotate-1
                  "
                />
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-md
                text-[17px]
                leading-8
                text-neutral-600
                break-words
              "
            >
              I'm currently open to internships,
              collaborations and interesting software
              projects. If you've got an idea worth
              building, I'd love to hear about it.
            </p>

            <div className="mt-10 sm:mt-12 space-y-6">
              <a
                href="mailto:peculiarken36@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  transition
                  hover:translate-x-1
                  break-all
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    bg-white/60
                  "
                >
                  <Mail size={18} />
                </div>

                <span className="text-lg text-[#1A1C1B] break-all">
                  peculiarken36@gmail.com
                </span>
              </a>

              <div
                className="
                  flex
                  gap-8
                  font-['IBM_Plex_Mono']
                  text-sm
                  uppercase
                  tracking-wide
                  text-neutral-500
                "
              >
                <a href="https://github.com/Peculiar-Okon" target="_blank" rel="noopener noreferrer">
                  <RiGithubFill size={20} />
                </a>

                <a href="https://X.com/SheThinksInCode" target="_blank" rel="noopener noreferrer">
                  <RiTwitterXFill size={20} />
                </a>

                <a href="https://linkedin.com/in/peculiar-kenedy-b94903329" target="_blank" rel="noopener noreferrer">
                  <RiLinkedinBoxFill size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <form
            className="
              rounded-[28px]
              border
              border-black/5
              bg-white/45
              p-6
              sm:p-8
              backdrop-blur-sm
              overflow-hidden
            "
          >
            <div className="space-y-8 sm:space-y-10">
              <div>
                <label
                  className="
                    font-['IBM_Plex_Mono']
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    text-neutral-500
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    mt-3
                    w-full
                    border-b
                    border-black/20
                    bg-transparent
                    pb-3
                    text-lg
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-black
                    max-w-full
                  "
                />
              </div>

              <div>
                <label className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    mt-3
                    w-full
                    border-b
                    border-black/20
                    bg-transparent
                    pb-3
                    text-lg
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-black
                    max-w-full
                  "
                />
              </div>

              <div>
                <label className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Let's work together"
                  className="
                    mt-3
                    w-full
                    border-b
                    border-black/20
                    bg-transparent
                    pb-3
                    text-lg
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-black
                    max-w-full
                  "
                />
              </div>

              <div>
                <label className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="
                    mt-3
                    w-full
                    resize-none
                    border-b
                    border-black/20
                    bg-transparent
                    pb-3
                    text-lg
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-black
                    max-w-full
                  "
                />
              </div>
            </div>

            <button
              type="submit"
              className="
                mt-10
                sm:mt-12
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#1A1C1B]
                px-6
                py-3.5
                sm:px-7
                sm:py-4
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                text-sm
                sm:text-base
              "
            >
              Send Message

              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}