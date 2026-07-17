import MealRadar from "../../assets/images/ChatGPT Image Jul 16, 2026, 05_07_26 PM.png"
import Skyline from "../../assets/images/ChatGPT Image Jul 16, 2026, 05_12_23 PM.png"
import CommitMate from "../../assets/images/ChatGPT Image Jul 16, 2026, 05_17_20 PM.png"

export const projects = [
  {
    id: 1,

    title: "CommitMate",

    image: CommitMate,

    color: "#DBEAFE",

    description:
      "Architected a scalable NestJS microservice integrating OpenAI to automate complex Git workflows. Implemented intelligent context-window management and prompt optimizations to minimize token overhead while handling asynchronous parsing of heavy repository payloads.",

    progress: "Active Development",

    started: "July 2026",

    role: "Lead Engineer",

    github: "https://github.com/Peculiar-Okon/Commit-Mate.git",

    live: "#",

    featured: true,

    stack: [
      "NestJS",
      "React",
      "TypeScript",
      "OpenAI",
      "VS Code API",
      "PostgreSQL",
    ],
  },

  {
    id: 2,

    title: "MealRadar",

    image: MealRadar,

    color: "#D1FAE5",

    description:
      "Engineered a cross-platform mobile ecosystem utilizing Flutter and Supabase. Implemented rigid relational database logic, real-time data synchronization, and secure transaction verification via Paystack to ensure absolute consistency during peak high-concurrency order rushes.",

    progress: "Completed",

    started: "January 2026",

    role: "Lead Engineer",

    github: "https://github.com/Peculiar-Okon/MealRadar.git",

    live: "#",

    featured: true,

    stack: [
      "Flutter",
      "Paystack",
      "Supabase",
      "Typescript",
    ],
  },

  /*
  {
    id: 3,

    title: "DotOrg",

    image: "/projects/dotorg.png",

    color: "#FEF3C7",

    description:
      "A digital decluttering platform that intelligently organizes, surfaces and manages forgotten files.",

    progress: "Planning",

    started: "2026",

    role: "Solo Developer",

    github: "yourusername/dotorg",

    live: "#",

    featured: true,

    stack: [
      "Flutter",
      "Supabase",
      "AI",
    ],
  },

  {
    id: 4,

    title: "Foundry",

    image: "/projects/foundry.png",

    color: "#FCE7F3",

    description:
      "Restaurant operations software for inventory, staff, orders and business insights.",

    progress: "Planning",

    started: "2026",

    role: "Solo Developer",

    github: "yourusername/foundry",

    live: "#",

    featured: true,

    stack: [
      "Flutter",
      "Node.js",
      "PostgreSQL",
    ],
  },
  */

  {
    id: 5,

    title: "Skyline",

    image: Skyline,

    color: "#EDE9FE",

    description:
      "Architected a full-stack travel booking platform using React, TypeScript, and Supabase. Engineered complex relational database schemas, real-time availability queries, and secure authentication flows. Focused on performance optimization and a polished, responsive UI across devices.",

    progress: "Rebuilding",

    started: "2025",

    role: "Lead Engineer",

    github: "https://github.com/Peculiar-Okon/Skyline_app.git",

    live: "#",

    featured: true,

    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Supabase",
    ],
  },
];