"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ProjectMetaProps {
  progress: string;
  started: string;
  role: string;
  github: string; // dummy repo url
  stack: string[];
}

export default function ProjectMeta({
  progress,
  started,
  role,
  github,
  stack,
}: ProjectMetaProps) {
  const [lastUpdated, setLastUpdated] = useState("Loading...");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchLastUpdated() {
      try {
        // Replace with your real repo later.
        const res = await fetch(
          `https://api.github.com/repos/${github}`
        );

        const data = await res.json();

        if (data.updated_at) {
          const updated = new Date(data.updated_at);

          const now = new Date();

          const diff =
            (now.getTime() - updated.getTime()) /
            (1000 * 60 * 60 * 24);

          if (diff < 1)
            setLastUpdated("Today");
          else if (diff < 2)
            setLastUpdated("Yesterday");
          else
            setLastUpdated(
              `${Math.floor(diff)} days ago`
            );
        } else {
          setLastUpdated("Unknown");
        }
      } catch {
        setLastUpdated("Unavailable");
      }
    }

    fetchLastUpdated();
  }, [github]);

  return (
    <>
      {/* Mobile Button */}

      <button
        onClick={() => setOpen(true)}
        className="
          absolute
          right-4
          top-4
          z-30
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-black/10
          bg-white/90
          px-4
          py-2
          text-sm
          font-medium
          shadow-lg
          shadow-black/10
          backdrop-blur
          transition
          hover:-translate-y-0.5
          hover:bg-black
          hover:text-white
          md:hidden
        "
      >
        <span className="h-2.5" />
        View Details
      </button>

      {/* Overlay */}

      <div
        className={`
          absolute
          inset-0
          z-40
          flex
          flex-col
          justify-between
          rounded-[32px]
          border
          border-black/10
          bg-gradient-to-br
          from-white/95
          via-white/90
          to-slate-100/90
          p-8
          shadow-[0_24px_80px_-28px_rgba(15,23,42,0.45)]
          backdrop-blur-2xl
          transition-all
          duration-500

          md:pointer-events-none
          md:translate-y-8
          md:opacity-0
          md:group-hover:pointer-events-auto
          md:group-hover:translate-y-0
          md:group-hover:opacity-100

          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0 md:pointer-events-none"
          }
        `}
      >
        {/* Mobile Close */}

        <button
          onClick={() => setOpen(false)}
          className="
            absolute
            right-5
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            shadow-sm
            md:hidden
          "
        >
          <X size={16} />
        </button>

        {/* Header */}

        <div>

          <p className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.18em] text-neutral-500">
            Project Information
          </p>



          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Status
              </p>

              <p className="mt-2 font-medium">
                ● In {progress}
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Started
              </p>

              <p className="mt-2 font-medium">
                {started}
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Role
              </p>

              <p className="mt-2 font-medium">
                {role}
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Last Updated
              </p>

              <p className="mt-2 font-medium">
                {lastUpdated}
              </p>
            </div>

          </div>

        </div>

        {/* Stack */}

        <div>

          <p className="mb-3 text-xs uppercase tracking-widest text-neutral-400">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">

            {stack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-black/10
                  bg-black/[0.03]
                  px-3
                  py-1.5
                  text-xs
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </div>
      </div>
    </>
  );
}