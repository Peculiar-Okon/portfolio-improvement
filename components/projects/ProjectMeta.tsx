interface ProjectMetaProps {
  impact: string;
  stack: string;
}

export default function ProjectMeta({
  impact,
  stack,
}: ProjectMetaProps) {
  return (
    <div
      className="
      mt-6
      sm:mt-8
      border-t
      border-[#E6DED6]
      pt-5
      sm:pt-6
      grid
      grid-cols-2
      gap-5
      sm:gap-6
    "
    >
      <div>
        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#8B817A] sm:text-[11px]">
          Impact
        </p>

        <p className="mt-2 text-[14px] text-[#262321] sm:text-[15px]">
          {impact}
        </p>
      </div>

      <div>
        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#8B817A] sm:text-[11px]">
          Stack
        </p>

        <p className="mt-2 text-[14px] text-[#262321] sm:text-[15px]">
          {stack}
        </p>
      </div>
    </div>
  );
}