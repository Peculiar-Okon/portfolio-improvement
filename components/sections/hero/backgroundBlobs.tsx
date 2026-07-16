"use client";

export default function BackgroundBlobs() {
  return (
    <>
      {/* Top Left Pink Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-48
          -left-48
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#F1B5D5]/10
          blur-[140px]
          animate-float-slow
        "
      />

      {/* Top Right Lavender Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-32
          right-[-140px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-300/8
          blur-[120px]
          animate-float-reverse
        "
      />

      {/* Bottom Left Soft Pink */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-[15%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#F1B5D5]/6
          blur-[120px]
          animate-float-slower
        "
      />

      {/* Bottom Right */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[5%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-fuchsia-200/5
          blur-[100px]
          animate-float-slow
        "
      />

      {/* Subtle Radial Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_65%)]" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#09090B]" />
    </>
  );
}