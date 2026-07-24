"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Download } from "lucide-react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text";
  icon?: "arrow" | "download";
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full transition-all duration-300",

    "font-['IBM_Plex_Sans'] text-[13px] font-medium uppercase tracking-[0.18em]",

    variant === "primary" &&
      "bg-[#B96A48] px-6 py-3 text-[#FDF8F7] hover:-translate-y-0.5 hover:bg-[#a95d3d] shadow-sm",

    variant === "outline" &&
      "border border-[#D8CEC5] px-6 py-3 text-[#262321] hover:-translate-y-0.5 hover:border-[#262321]",

    variant === "text" &&
      `relative rounded-none px-0 py-2 text-[#4D4540] transition-colors duration-300 hover:text-[#262321] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-[#B96A48] after:transition-transform after:duration-300 hover:after:scale-x-100`,

    className
  );

  const iconElement = (
    <>
      {icon === "arrow" && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      )}

      {icon === "download" && (
        <Download
          size={15}
          className="transition-transform duration-300 group-hover:translate-y-0.5"
        />
      )}
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
        {iconElement}
      </button>
    );
  }

  return (
    <Link href={href!} target={target} rel={rel} className={classes}>
      {children}
      {iconElement}
    </Link>
  );
}