import { experience } from "./data";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div>

      <h2 className="mb-12 font-serif text-4xl text-[#100E0C]">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line — starts below the dot */}
        <div className="absolute left-0 top-[18px] bottom-0 w-px bg-[#CFC4BD]" />

        <ExperienceCard {...experience} />
      </div>

    </div>
  );
}