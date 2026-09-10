import { techCategories } from "@/data/techStack";

export function TechStack() {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="border-t border-neutral-900 bg-[#030303]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <p className="font-mono text-xs tracking-[0.22em] text-neutral-500">
          02. TECH STACK
        </p>
        <h2
          id="tech-stack-heading"
          className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl"
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
                {technologies.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="group inline-flex min-h-12 items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950 px-4 text-sm font-medium text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-500 hover:text-white"
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-lg text-neutral-500 transition-colors duration-200 group-hover:text-white"
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
