"use client";

import {
  ArrowRight,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-28 lg:px-10">
      <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#F1B5D5]/20 hover:shadow-[0_30px_80px_rgba(241,181,213,.12)] md:p-14 lg:p-20">

        {/* Watermark */}
        <MessageCircle
          strokeWidth={1}
          className="pointer-events-none absolute -right-16 -top-12 h-[320px] w-[320px] text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
        />

        {/* Pink Glow */}
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#F1B5D5]/10 blur-[120px]" />

        <div className="relative grid gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col justify-between">

            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#F1B5D5]">
                Contact
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-[#EAE0E2] md:text-6xl">
                Let's build
                <br />
                something rare.
              </h2>

              <p className="mt-10 max-w-md text-lg leading-8 text-[#D3C2C9]">
                Have a product idea, an opportunity, or simply want to talk
                about engineering, design or the future of software? I'd love
                to hear from you.
              </p>
            </div>

            <div className="mt-14 space-y-5">

              <a
                href="mailto:hello@pearl.dev"
                className="group/item flex items-center gap-5 rounded-2xl transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1B5D5]/10 text-[#F1B5D5] transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-[#F1B5D5]/20">
                  <Mail size={20} />
                </div>

                <span className="text-lg font-medium text-[#EAE0E2]">
                  peculiarken36@gmail.com
                </span>
              </a>

              <div className="group/item flex items-center gap-5 rounded-2xl transition-all duration-300 hover:translate-x-2">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#D3C2C9] transition-all duration-300 group-hover/item:bg-[#F1B5D5]/10 group-hover/item:text-[#F1B5D5]">
                  <MapPin size={20} />
                </div>

                <span className="text-lg font-medium text-[#EAE0E2]">
                  AkwaIbom, Nigeria
                </span>

              </div>

            </div>
          </div>

          {/* RIGHT */}

          <form className="space-y-8">

            <div className="grid gap-8 md:grid-cols-2">

              <div>
                <label className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#D3C2C9]/60">
                  Full Name
                </label>

                <input
                  placeholder="John Doe"
                  className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#F1B5D5] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(241,181,213,.12)]"
                />
              </div>

              <div>
                <label className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#D3C2C9]/60">
                  Email Address
                </label>

                <input
                  placeholder="john@example.com"
                  className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#F1B5D5] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(241,181,213,.12)]"
                />
              </div>

            </div>

            <div>

              <label className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#D3C2C9]/60">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 p-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#F1B5D5] focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(241,181,213,.12)]"
              />

            </div>

            <button
              type="submit"
              className="group/button flex h-16 w-full items-center justify-center gap-4 rounded-xl bg-[#F1B5D5] font-semibold text-[#161214] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(241,181,213,.35)] active:scale-[0.98]"
            >
              Send Message

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
