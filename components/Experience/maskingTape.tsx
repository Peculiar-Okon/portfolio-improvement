"use client";

interface MaskingTapeProps {
  className?: string;
  rotate?: string;
}

export default function MaskingTape({
  className = "",
  rotate = "-3deg",
}: MaskingTapeProps) {
  return (
    <div
      className={`
        absolute
        h-8
        w-24
        rounded-md
        border
        border-white/20
        bg-[#F6EFCF]/90
        shadow-sm
        backdrop-blur-[2px]
        ${className}
      `}
      style={{
        transform: `rotate(${rotate})`,
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <filter id="tapeNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".9"
            numOctaves="2"
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter="url(#tapeNoise)"
        />
      </svg>
    </div>
  );
}