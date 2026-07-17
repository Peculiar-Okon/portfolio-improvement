interface TapeProps {
  className?: string;
  rotate?: string;
}

export default function Tape({
  className = "",
  rotate = "rotate-2",
}: TapeProps) {
  return (
    <div
      className={`
        absolute
        ${rotate}
        ${className}
      `}
    >
      <svg
        width="110"
        height="36"
        viewBox="0 0 110 36"
        fill="none"
      >
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              floodOpacity=".12"
            />
          </filter>

          <pattern
            id="grain"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1"
              cy="1"
              r=".6"
              fill="#cfcfcf"
            />

            <circle
              cx="6"
              cy="5"
              r=".5"
              fill="#cfcfcf"
            />
          </pattern>
        </defs>

        <rect
          x="5"
          y="4"
          rx="6"
          width="100"
          height="28"
          fill="#FFF9D8"
          filter="url(#shadow)"
        />

        <rect
          x="5"
          y="4"
          rx="6"
          width="100"
          height="28"
          fill="url(#grain)"
          opacity=".25"
        />

        {/* torn edges */}

        <path
          d="M5 10L0 13L5 16"
          fill="#FFF9D8"
        />

        <path
          d="M105 10L110 13L105 16"
          fill="#FFF9D8"
        />
      </svg>
    </div>
  );
}