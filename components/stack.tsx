"use client";

import {
  Code2,
  Database,
  Server,
  Wrench,
  Container,
  Sparkles,
} from "lucide-react";

const frontend = [
  "React",
  "Next.js",
  "Vite",
  "Flutter",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
];

const backend = [
  "Node.js",
  "Express",
  "NestJS",
  "REST APIs",
  "JWT",
  "Zod",
];

const databases = [
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Firebase",
];

const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Figma",
];

const devops = [
  "Docker",
];

const ai = [
  "OpenAI",
  "LLMs",
  "Prompt Engineering",
  "AI Integrations",
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="px-6 py-10 lg:px-16"
    >
          

    {/* Section Heading */}

    <div className="mb-12 max-w-5xl">

      <p className="font-['IBM_Plex_Mono'] text-[13px] uppercase tracking-[0.15em] text-[#454746]">
        Building Blocks
      </p>

      <h2 className="mt-4 font-['EB_Garamond'] text-4xl leading-[1.1] text-[#171717] md:text-5xl">
        The languages, frameworks and tools behind my work.
      </h2>

    </div>


        
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr_320px]">

        

        {/* Frontend */}

        <Card color="bg-[#DBEAFE]">
          <Code2 className="h-6 w-6" />

          <small className="section-label">
            Frontend
          </small>

          <h3 className="card-title">
            Mobile & Web
          </h3>

          <p className="card-copy">
            Responsive web applications and cross-platform mobile
            experiences built with performance and usability in mind.
          </p>

          <TagList items={frontend} />
        </Card>

        {/* Backend */}

        <Card color="bg-[#EDE9FE]">
          <Server className="h-6 w-6" />

          <small className="section-label">
            Backend
          </small>

          <h3 className="card-title">
            APIs & Systems
          </h3>

          <p className="card-copy">
            Building scalable backend services, authentication,
            APIs and application architecture that stay easy to maintain.
          </p>

          <TagList items={backend} />
        </Card>

        {/* Right Stack */}

        <div className="grid gap-5">

          <MiniCard
            icon={<Database size={20} />}
            title="Database"
            color="bg-[#D1FAE5]"
            items={databases}
          />

          <MiniCard
            icon={<Wrench size={20} />}
            title="Tools"
            color="bg-[#FFE4E6]"
            items={tools}
          />

          <MiniCard
            icon={<Container size={20} />}
            title="DevOps"
            color="bg-[#FEF3C7]"
            items={devops}
          />

          <MiniCard
            icon={<Sparkles size={20} />}
            title="AI"
            color="bg-[#CCFBF1]"
            items={ai}
          />

        </div>

      </div>
    </section>
  );
}

function Card({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div
      className={`${color} rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function MiniCard({
  title,
  icon,
  color,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}) {
  return (
    <div
      className={`${color} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="mb-5 flex items-center justify-between">

        <span className="text-black">
          {icon}
        </span>

        <p className="section-label">
          {title}
        </p>

      </div>

      <div className="flex flex-wrap gap-2">

        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#333] shadow-sm"
          >
            {item}
          </span>
        ))}

      </div>
    </div>
  );
}

function TagList({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2">

      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-white/70 px-3 py-1 text-sm text-[#222] shadow-sm"
        >
          {item}
        </span>
      ))}

    </div>
  );
}