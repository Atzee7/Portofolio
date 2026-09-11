import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasTiltedPreview = project.imagePresentation?.startsWith("tilted");
  const previewBackground =
    project.imagePresentation === "tilted-blue"
      ? "bg-[linear-gradient(125deg,#1288d8_0%,#075da8_38%,#07335f_72%,#040a12_100%)]"
      : "bg-[linear-gradient(125deg,#e58a00_0%,#b65406_38%,#3b1a0b_72%,#090909_100%)]";

  return (
    <article
      className="overflow-hidden rounded-2xl border border-[#262626] bg-[#080808] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-neutral-500 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden border-b border-[#262626] ${
          hasTiltedPreview ? previewBackground : "bg-neutral-950"
        }`}
      >
        {hasTiltedPreview ? (
          <div className="absolute inset-x-5 top-[18%] aspect-[2/1] -rotate-[4deg] overflow-hidden rounded-lg bg-white shadow-[0_24px_55px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <Image
              src={project.image}
              alt={`Screenshot project ${project.title}`}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover"
            />
          </div>
        ) : (
          <Image
            src={project.image}
            alt={`Screenshot project ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        )}
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
          {project.title}
        </h3>
        <p className="mt-4 min-h-20 text-base leading-7 text-neutral-400">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-400"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
