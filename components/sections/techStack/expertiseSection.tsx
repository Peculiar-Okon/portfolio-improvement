import ExpertiseCard, { ExpertiseIcon } from "./expertiseCard";

interface ExpertiseItem {
  icon: ExpertiseIcon;
  title: string;
  description: string;
  skills: string[];
  className?: string;
}

const expertise: ExpertiseItem[] = [
  {
    icon: "frontend",
    title: "Frontend",
    description:
      "Building responsive, intuitive interfaces with performance and usability at the core.",
    skills: ["React", "Next.js", "Tailwind", "TypeScript"],
    className: "lg:col-span-2",
  },
  {
    icon: "backend",
    title: "Backend",
    description:
      "Designing scalable APIs and maintainable application architecture.",
    skills: ["NestJS", "Node", "MongoDB"],
    className: "lg:col-span-1",
  },
  {
    icon: "ai",
    title: "AI",
    description:
      "Building intelligent developer experiences powered by modern LLMs.",
    skills: ["OpenAI", "RAG"],
    className: "lg:col-span-1",
  },
  {
    icon: "design",
    title: "Design",
    description:
      "Turning product ideas into thoughtful interfaces people enjoy using.",
    skills: ["Figma", "UX"],
    className: "lg:col-span-1",
  },
  {
    icon: "devops",
    title: "DevOps",
    description:
      "Shipping applications confidently with modern deployment workflows.",
    skills: ["Docker", "Git"],
    className: "lg:col-span-2",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#F1B5D5]">
            Expertise
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-[#EAE0E2] md:text-6xl">
            What I Build With
          </h2>
        </div>

        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:grid-cols-4
            lg:auto-rows-min
          "
        >
          {expertise.map((item) => (
            <ExpertiseCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}