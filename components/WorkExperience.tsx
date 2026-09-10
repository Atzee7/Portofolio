import { BriefcaseBusiness, MapPin } from "lucide-react";
import { workExperiences } from "@/data/experience";

export function WorkExperience() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="grid gap-12 border-t border-neutral-900 pt-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 lg:pt-24">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-neutral-500">
            01. WORK EXPERIENCE
          </p>
          <h2
            id="experience-heading"
            className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl"
          >
            Work Experience
          </h2>
        </div>

        <div className="space-y-5">
          {workExperiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="rounded-2xl border border-[#262626] bg-[#080808] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-300">
                    <BriefcaseBusiness aria-hidden="true" size={14} />
                    {experience.focus}
                  </div>
                  <h3 className="text-xl font-semibold leading-7 tracking-[-0.025em] text-white sm:text-2xl">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-base font-medium text-neutral-300">
                    {experience.company}
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="font-mono text-sm text-neutral-400">
                    {experience.period}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-neutral-500">
                    <MapPin aria-hidden="true" size={14} />
                    {experience.location}
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-4 border-t border-neutral-900 pt-7">
                {experience.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="grid grid-cols-[0.5rem_1fr] gap-3 text-base leading-7 text-neutral-400"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] size-1.5 rounded-full bg-neutral-600"
                    />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
