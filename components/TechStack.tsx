import { techCategories } from "@/data/techStack";

export function TechStack() {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="border-t border-neutral-900 bg-[#030303]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <h2
          id="tech-stack-heading"
          className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl"
        >
          Tech Stack
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#262626] bg-[#080808]">
          {techCategories.map(({ category, technologies }, index) => (
            <div
              key={category}
              className={`grid gap-5 p-6 sm:grid-cols-[11rem_1fr] sm:items-center sm:p-8 ${
                index > 0 ? "border-t border-neutral-900" : ""
              }`}
            >
              <h3 className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-3" aria-label={category}>
                {technologies.map(({ name, Icon, color }) => (
                  <li
                    key={name}
                    className="group inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-neutral-700/70 bg-neutral-800 px-3.5 text-sm font-medium text-neutral-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-500 hover:bg-neutral-700/80 hover:text-white"
                  >
                    <Icon
                      aria-hidden="true"
                      style={{ color }}
                      className="text-lg transition-transform duration-200 group-hover:scale-110"
                    />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
