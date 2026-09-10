import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  return (
    <section className="mx-auto grid min-h-screen w-full max-w-[1280px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-20">
      <div className="relative z-10 max-w-3xl">
        <p className="mb-5 text-base font-medium tracking-[-0.01em] text-neutral-400 sm:text-lg">
          Hello, I&apos;m
        </p>
        <h1 className="text-[clamp(2.75rem,8vw,5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
          Muhammad
          <span className="block text-neutral-500">Yusril Islam</span>
        </h1>
        <p className="mt-8 text-lg font-medium text-white sm:text-xl">
          Front-End Developer
        </p>
        <p className="mt-4 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
          I build clean, responsive, and user-friendly web experiences.
          Passionate about turning ideas into reality through code.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-colors duration-200 hover:bg-neutral-200"
          >
            View Projects
          </a>
          <a
            href="mailto:your@email.com"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-700 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:border-neutral-400 hover:bg-neutral-900"
          >
            Contact Me
          </a>
        </div>

        <SocialLinks className="mt-9" />
      </div>

      <div className="relative mx-auto w-full max-w-[510px] lg:justify-self-end">
        <div className="relative aspect-[4/5] overflow-hidden border border-neutral-900 bg-[#080808]">
          <Image
            src="/images/profile-placeholder.svg"
            alt="Placeholder foto profil Muhammad Yusril Islam"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 42vw"
            className="object-cover"
          />
        </div>
        <p className="absolute -bottom-7 right-0 text-right font-mono text-[0.7rem] leading-[1.65] tracking-[0.35em] text-neutral-600 sm:-right-7 sm:bottom-8 sm:[writing-mode:vertical-rl]">
          BUILD&nbsp;&nbsp; LEARN&nbsp;&nbsp; IMPROVE&nbsp;&nbsp; EVERYDAY
        </p>
      </div>
    </section>
  );
}
