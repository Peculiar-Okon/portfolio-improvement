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
      mt-8
      border-t
      border-[#E6DED6]
      pt-6
      grid
      grid-cols-2
      gap-6
    "
    >
      <div>
        <p className="font-['IBM_Plex_Sans'] text-[11px] uppercase tracking-[0.18em] text-[#8B817A]">
          Impact
        </p>

        <p className="mt-2 text-[15px] text-[#262321]">
          {impact}
        </p>
      </div>

      <div>
        <p className="font-['IBM_Plex_Sans'] text-[11px] uppercase tracking-[0.18em] text-[#8B817A]">
          Stack
        </p>

        <p className="mt-2 text-[15px] text-[#262321]">
          {stack}
        </p>
      </div>
    </div>
  );
}