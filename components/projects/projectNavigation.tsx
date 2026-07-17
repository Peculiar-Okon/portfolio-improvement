"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Rail from "./rail";

interface Props {
  total: number;
  current: number;
  next: () => void;
  previous: () => void;
}

export default function ProjectNavigation({
  total,
  current,
  next,
  previous,
}: Props) {
  return (
    <div className="mt-10 space-y-8">

      <Rail
        total={total}
        current={current}
      />

      <div className="flex justify-end gap-3">

        <button
          onClick={previous}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition hover:-translate-x-1 hover:shadow-lg"
        >
          <ChevronLeft
            size={18}
            className="transition group-hover:-translate-x-0.5"
          />
        </button>

        <button
          onClick={next}
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:translate-x-1 hover:shadow-lg"
        >
          <ChevronRight
            size={18}
            className="transition group-hover:translate-x-0.5"
          />
        </button>

      </div>

    </div>
  );
}