"use client";

interface Project {
  status: string;
  started: string;
  role: string;
  progress: number;
  updated: string;
}

export default function ProjectMeta({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
      <div className="space-y-7">
        <Meta label="Status" value={project.status} />

        <Meta label="Started" value={project.started} />

        <Meta label="Role" value={project.role} />

        <Meta label="Updated" value={project.updated} />

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#EAE0E2]/50">
            Progress
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              style={{
                width: `${project.progress}%`,
              }}
              className="h-full rounded-full bg-[#F1B5D5]"
            />
          </div>

          <p className="mt-3 text-sm text-[#D3C2C9]">
            {project.progress}% Complete
          </p>
        </div>
      </div>
    </div>
  );
}

function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#EAE0E2]/50">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-[#EAE0E2]">
        {value}
      </p>
    </div>
  );
}