import { experience } from "./data";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div>

      <h2 className="mb-12 font-serif text-4xl text-[#100E0C]">
        Experience
      </h2>

      <div className="border-l border-[#CFC4BD] pl-10">
        <ExperienceCard {...experience} />
      </div>

    </div>
  );
}