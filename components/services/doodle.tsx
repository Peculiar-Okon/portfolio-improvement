"use client";

interface Props {
  type:
    | "wrench"
    | "rocket"
    | "phone"
    | "robot"
    | "server"
    | "building";
}

export default function NotebookDoodle({ type }: Props) {
  switch (type) {
    case "wrench":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10">
          <path
            d="M15 18c4 4 11 4 15 0l4 4-17 17-5-5 17-17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "rocket":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10">
          <path
            d="M31 12c10 3 17 10 20 20l-9 1-11 11-1 9c-10-3-17-10-20-20l9-1 11-11z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle
            cx="37"
            cy="27"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );

    case "phone":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10">
          <rect
            x="20"
            y="8"
            width="24"
            height="48"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <circle cx="32" cy="49" r="2" fill="currentColor" />
        </svg>
      );

    case "robot":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10">
          <rect
            x="18"
            y="18"
            width="28"
            height="24"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <circle cx="27" cy="30" r="2" fill="currentColor" />
          <circle cx="37" cy="30" r="2" fill="currentColor" />
          <path
            d="M32 10v8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="32" cy="8" r="2" fill="currentColor" />
        </svg>
      );

    case "server":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10">
          <rect
            x="16"
            y="14"
            width="32"
            height="12"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <rect
            x="16"
            y="32"
            width="32"
            height="12"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <circle cx="22" cy="20" r="1.8" fill="currentColor" />
          <circle cx="22" cy="38" r="1.8" fill="currentColor" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10">
          <rect
            x="18"
            y="16"
            width="28"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M24 40h16M24 33h16M24 26h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}