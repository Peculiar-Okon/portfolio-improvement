import mealRadarImage from "@/assets/images/ChatGPT Image Jul 16, 2026, 05_07_26 PM.png";
import skylineImage from "@/assets/images/ChatGPT Image Jul 16, 2026, 05_12_23 PM.png";
import commitMateImage from "@/assets/images/ChatGPT Image Jul 16, 2026, 05_17_20 PM.png";

export const projects = [
  {
    id: 1,
    name: "CommitMate",
    category: "AI Developer Tool",
    description:
      "AI-powered Git copilot helping developers simplify complex Git workflows and commit with confidence.",
    image: commitMateImage,
    tech: ["Typescript", "NestJS", "OpenAI", "PostgreSQL"],
    status: "Active Development",
    started: "July 2026",
    role: "Solo Developer",
    progress: 30,
    demo: "#",
    github: "https://github.com/Peculiar-Okon/Commit-Mate",
  },

  // Temporarily hidden from the carousel. Uncomment to restore DotOrg.
  // {
  //   id: 2,
  //   name: "DotOrg",
  //   category: "Productivity",
  //   description:
  //     "A digital decluttering workspace that helps users organize files intelligently.",
  //   image: "/projects/dotorg.png",
  //   tech: ["React", "Supabase", "TypeScript"],
  //   status: "Designing",
  //   started: "2026",
  //   role: "Solo Developer",
  //   progress: 38,
  //   updated: "1 week ago",
  //   demo: "#",
  //   github: "#",
  // },

  // Temporarily hidden from the carousel. Uncomment to restore Foundry.
  // {
  //   id: 3,
  //   name: "Foundry",
  //   category: "Business Platform",
  //   description:
  //     "Restaurant operations platform built to simplify management and analytics.",
  //   image: "/projects/foundry.png",
  //   tech: ["Next.js", "NestJS"],
  //   status: "Planning",
  //   started: "2026",
  //   role: "Solo Developer",
  //   progress: 15,
  //   updated: "Recently",
  //   demo: "#",
  //   github: "#",
  // },

  {
    id: 5,
    name: "MealRadar",
    category: "Campus App",
    description:
      "A campus based meal ordering mobile app where meals can be updated and bought in real time.",
    image: mealRadarImage,
    tech: ["Flutter", "Supabase", "TypeScript", "Paystack"],
    status: "Prototype",
    started: "January 2026",
    role: "Solo Developer",
    progress: 95,
    demo: "#",
    github: "https://github.com/Peculiar-Okon/MealRadar",
  },

  {
    id: 6,
    name: "Skyline",
    category: "Travel",
    description:
      "A modern travel experience focused on elegant interfaces and memorable exploration.",
    image: skylineImage,
    tech: ["React", "Vite", "Supabase", "TypeScript"],
    status: "Rebuilding",
    started: "2025",
    role: "Solo Developer",
    progress: 52,
    demo: "#",
    github: "https://github.com/Peculiar-Okon/Skyline_app",
  },
];
