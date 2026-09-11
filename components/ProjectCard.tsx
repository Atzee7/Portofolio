import Image from "next/image";
import { FaGithub } from "react-icons/fa";
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
        <p className="mb-4 inline-flex rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-medium tracking-[0.02em] text-neutral-400">
          {project.projectType}
        </p>
        <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
          {project.title}
        </h3>
        <p className="mt-4 min-h-20 text-base leading-7 text-neutral-400">
          {project.description}
        </p>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-full border border-neutral-700 px-4 text-sm font-medium text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-neutral-900 hover:text-white"
        >
          <FaGithub aria-hidden="true" className="text-base" />
          GitHub
        </a>
      </div>
    </article>
  );
}
