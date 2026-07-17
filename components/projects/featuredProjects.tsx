import ProjectCarousel from "./ProjectCarousel";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="font-['IBM_Plex_Mono'] text-[13px] uppercase tracking-[0.15em] text-[#454746]">
              Featured Projects
            </p>

            <h2 className="mt-4 font-['EB_Garamond'] text-5xl leading-none text-[#171717]">
              Software I've brought to life.
            </h2>

            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#5F6368]">
              Every project started with a real problem worth solving.
              Some are finished, some are still evolving, but each one reflects
              how I think about software, systems and product design.
            </p>
          </div>

          <span className="hidden font-medium text-[#454746] md:block">
            5 Projects
          </span>
        </div>

        <ProjectCarousel />
      </div>
    </section>
  );
}