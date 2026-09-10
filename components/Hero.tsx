import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[92svh] w-full max-w-[1180px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.75fr)] lg:gap-8 lg:px-12 lg:py-20">
      <div className="relative z-10 max-w-3xl">
        <p className="mb-5 text-base font-medium tracking-[-0.01em] text-neutral-400 sm:text-lg">
        </p>
        <h1 className="text-[clamp(2.75rem,8vw,5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
          Muhammad
          <span className="block text-neutral-500">Yusril Islam</span>
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="text-lg font-medium text-white sm:text-xl">
            Front-End Developer
          </p>
          <p className="inline-flex items-center gap-1.5 text-sm text-neutral-400 sm:text-base">
            <MapPin aria-hidden="true" size={16} strokeWidth={1.8} />
            Malang, Indonesia
          </p>
        </div>
        <p className="mt-4 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
          I create responsive and user-focused web interfaces with clean design and efficient front-end development.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-colors duration-200 hover:bg-neutral-200"
          >
            View Projects
          </a>
          <a
            href="/cv/CV_Muhammad_Yusril_Islam.pdf"
            download
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-neutral-700 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:border-neutral-400 hover:bg-neutral-900"
          >
            <Download aria-hidden="true" size={16} strokeWidth={1.8} />
            Download CV
          </a>
        </div>

        <SocialLinks className="mt-9" />
      </div>

      <div className="mx-auto w-full max-w-[290px] sm:max-w-[330px] lg:max-w-[350px] lg:justify-self-start">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-[#080808]">
          <Image
            src="/images/profile.jpg"
            alt="Foto formal Muhammad Yusril Islam"
            fill
            priority
            sizes="(max-width: 640px) 290px, 350px"
            className="object-cover object-[center_20%] grayscale contrast-[1.04]"
          />
        </div>
        <p className="mt-4 text-center font-mono text-[0.65rem] tracking-[0.18em] text-neutral-600">
        </p>
      </div>
    </section>
  );
}
