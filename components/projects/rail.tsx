"use client";

interface RailProps {
  total: number;
  current: number;
}

export default function Rail({
  total,
  current,
}: RailProps) {
  const progress =
    total <= 1 ? 0 : current / (total - 1);

  return (
    <div className="relative h-16 w-full">

      {/* Rail */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 60"
        preserveAspectRatio="none"
      >
        {/* top rail */}

        <line
          x1="0"
          y1="22"
          x2="960"
          y2="22"
          stroke="#1A1A1A"
          strokeOpacity=".18"
          strokeWidth="2"
        />

        {/* bottom rail */}

        <line
          x1="0"
          y1="36"
          x2="960"
          y2="36"
          stroke="#1A1A1A"
          strokeOpacity=".18"
          strokeWidth="2"
        />

        {/* sleepers */}

        {Array.from({ length: 50 }).map((_, i) => (
          <line
            key={i}
            x1={i * 20}
            y1="20"
            x2={i * 20}
            y2="38"
            stroke="#1A1A1A"
            strokeOpacity=".10"
          />
        ))}
      </svg>

      {/* Train */}

      <div
        className="absolute top-1 transition-all duration-700 ease-out"
        style={{
            left: `calc(${4 + progress * 91}% - 28px)`,
        }}
      >
        <svg
          width="56"
          height="42"
          viewBox="0 0 56 42"
        >
          <rect
            x="6"
            y="8"
            width="36"
            height="20"
            rx="6"
            fill="#171717"
          />

          <rect
            x="30"
            y="3"
            width="8"
            height="8"
            rx="2"
            fill="#171717"
          />

          <circle
            cx="16"
            cy="31"
            r="4"
            fill="#171717"
          />

          <circle
            cx="34"
            cy="31"
            r="4"
            fill="#171717"
          />

          <circle
            cx="16"
            cy="15"
            r="2"
            fill="white"
          />

          <circle
            cx="28"
            cy="15"
            r="2"
            fill="white"
          />
        </svg>
      </div>

      {/* Station */}

      <div className="absolute right-0 top-0">

        <svg
          width="56"
          height="42"
          viewBox="0 0 56 42"
        >
          {/* roof */}

          <polygon
            points="8,18 28,2 48,18"
            fill="#171717"
          />

          {/* building */}

          <rect
            x="12"
            y="18"
            width="32"
            height="20"
            rx="3"
            fill="#171717"
          />

          {/* door */}

          <rect
            x="24"
            y="24"
            width="8"
            height="14"
            fill="white"
          />
        </svg>

      </div>

      {/* Counter */}

      <div className="absolute -bottom-5 right-0 font-['IBM_Plex_Mono'] text-[11px] tracking-wider text-neutral-500">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </div>

    </div>
  );
}