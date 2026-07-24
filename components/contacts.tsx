"use client";

import { motion } from "framer-motion";
import Button from "./ui/button";

const contacts = [
  {
    label: "Email",
    value: "peculiarken36@gmail.com",
    href: "mailto:peculiarken36@gmail.com",
  },
  {
    label: "GitHub",
    value: "Peculiar-Okon",
    href: "https://github.com/Peculiar-Okon",
  },
  {
    label: "LinkedIn",
    value: "Peculiar Kenedy",
    href: "https://linkedin.com/in/peculiar-kenedy-b94903329",
  },
  {
    label: "X",
    value: "@Pearl_thee_dev",
    href: "https://x.com/Pearl_thee_dev",
  },
  {
    label: "Location",
    value: "Nigeria • Remote",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="border border-[#CFC4BD] bg-[#FDF8F7] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-10 sm:py-20 lg:px-16 xl:px-24">

        <div className="grid gap-14 lg:gap-24 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .15, duration: .7 }}
            className="max-w-md"
          >

            <p className="mb-4 sm:mb-6 text-xs uppercase tracking-[0.25em] text-[#924B2B]">
              READY FOR NEW CHALLENGES
            </p>

            <h2 className="font-serif text-[2rem] leading-[1.15] tracking-[-0.03em] text-[#100E0C] sm:text-5xl md:text-6xl">
              Let's build
              <br />
              something worth
              <br />
              <motion.span
                initial={{ color: "#924B2B" }}
                whileInView={{ color: "#100E0C" }}
                transition={{ delay: .8, duration: .8 }}
              >
                remembering.
              </motion.span>
            </h2>

            <p className="mt-5 sm:mt-8 text-sm leading-7 text-[#4D4540] sm:text-lg sm:leading-9">
              Every great product starts with a conversation.
              Whether you're launching your first startup,
              modernizing an existing business,
              or building software that needs thoughtful engineering,
              I'd love to help turn ambitious ideas into products people genuinely enjoy using.
            </p>

            <div className="mt-8 sm:mt-14 border-t border-[#CFC4BD]">

              {contacts.map((item, index) => (

                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: .2 + index * .08 }}
                  className="flex items-start justify-between border-b border-[#CFC4BD] py-3 sm:py-5 gap-2"
                >

                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#7E756F] sm:text-[11px] shrink-0 min-w-[50px] sm:min-w-0">
                    {item.label}
                  </span>

                  {item.href ? (
                    <Button
                      href={item.href}
                      variant="text"
                      icon="arrow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-right text-xs sm:text-sm break-all leading-tight sm:leading-normal"
                    >
                      {item.value}
                    </Button>
                  ) : (
                    <span className="text-[#100E0C] text-xs sm:text-sm text-right">
                      {item.value}
                    </span>
                  )}
                </motion.div>

              ))}

            </div>

            <div className="mt-6 sm:mt-10">
              <Button
                href="/resume.pdf"
                variant="text"
                icon="download"
              >
                Download Résumé
              </Button>
            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .25, duration: .8 }}
            className="space-y-5 sm:space-y-7"
          >

            <div className="grid gap-5 sm:gap-6 md:grid-cols-2">

              <Input
                label="Name"
                placeholder="Your name"
                type="text"
              />

              <Input
                label="Email"
                placeholder="your@email.com"
                type="email"
              />

            </div>

            <Input
              label="Subject"
              placeholder="Project inquiry"
            />

            <Textarea
              label="Message"
              rows={8}
              placeholder="Tell me about your idea, your business, or the challenge you're trying to solve..."
            />

            <motion.button
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: .98,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 24,
              }}
              className="
                w-full
                sm:w-auto
                bg-[#100E0C]
                px-10
                py-4
                uppercase
                tracking-[0.18em]
                text-[#FDF8F7]
                font-sans
                text-[13px]
                font-medium
                cursor-pointer
              "
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>

      </div>
    </motion.section>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: Props) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#7E756F] sm:text-[11px]">
        {label}
      </label>

      <input
        {...props}
        className="
          h-12
          sm:h-14
          w-full
          border
          border-[#CFC4BD]
          bg-[#F7F3F1]
          px-4
          sm:px-5
          text-sm
          sm:text-base
          transition-all
          duration-300
          outline-none

          focus:border-[#924B2B]
          focus:bg-white
          focus:ring-4
          focus:ring-[#924B2B]/10
        "
      />
    </div>
  );
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#7E756F] sm:text-[11px]">
        {label}
      </label>

      <textarea
        {...props}
        className="
          w-full
          resize-none
          border
          border-[#CFC4BD]
          bg-[#F7F3F1]
          p-4
          sm:p-5
          text-sm
          sm:text-base
          leading-7
          text-[#100E0C]
          placeholder:text-[#6B7280]
          outline-none
          transition-all
          duration-300

          focus:border-[#924B2B]
          focus:bg-white
          focus:ring-4
          focus:ring-[#924B2B]/10
        "
      />
    </div>
  );
}