import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-8 border-t border-neutral-900 bg-[#030303]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <p className="font-mono text-xs tracking-[0.22em] text-neutral-500">
          03. LATEST PROJECTS
        </p>
        <div className="mt-4 flex items-end justify-between gap-8">
          <h2
            id="projects-heading"
            className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl"
          >
            Latest Projects
          </h2>
          <span className="hidden font-mono text-xs tracking-[0.18em] text-neutral-600 sm:block">
          </span>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
