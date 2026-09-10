import { techStack } from "@/data/techStack";

export function TechStack() {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.22em] text-neutral-500">
        02. TECH STACK
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
        Tech Stack
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {techStack.map(({ name, Icon }) => (
          <div
            key={name}
            className="group flex min-h-32 flex-col items-center justify-center rounded-xl border border-[#262626] bg-[#080808] p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-neutral-500"
          >
            <Icon
              aria-hidden="true"
              className="text-3xl text-neutral-400 transition-colors duration-200 group-hover:text-white"
            />
            <p className="mt-4 text-sm font-medium text-neutral-300">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
