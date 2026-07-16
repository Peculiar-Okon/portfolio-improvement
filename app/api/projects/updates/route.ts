import { projects } from "@/components/sections/projects/projectsData";

type GitHubCommit = {
  commit: {
    author: { date: string } | null;
    committer: { date: string } | null;
  };
};

function repositoryPath(url: string) {
  return new URL(url).pathname.replace(/^\//, "").replace(/\.git$/, "");
}

async function getLatestCommitDate(repository: string) {
  const response = await fetch(
    `https://api.github.com/repos/${repository}/commits?per_page=1`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 300 },
    }
  );

  if (!response.ok) return null;

  const [commit] = (await response.json()) as GitHubCommit[];
  return commit?.commit.committer?.date ?? commit?.commit.author?.date ?? null;
}

export async function GET() {
  const updates = await Promise.all(
    projects.map(async (project) => [
      project.id,
      await getLatestCommitDate(repositoryPath(project.github)),
    ])
  );

  return Response.json(
    { updates: Object.fromEntries(updates) },
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } }
  );
}
