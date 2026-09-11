import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

function ProfilePhoto({ className, sizes }: { className: string; sizes: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#080808] shadow-[0_18px_55px_rgba(255,255,255,0.08)] ${className}`}
    >
      <Image
        src="/images/profile.jpg"
        alt="Formal portrait of Muhammad Yusril Islam"
        fill
        priority
        sizes={sizes}
        className="object-cover object-[center_20%] grayscale contrast-[1.04]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-layout mx-auto grid w-full max-w-[1180px] items-start gap-12 px-5 py-12 sm:px-8 sm:py-16">
      <div className="relative z-10 max-w-3xl">
        <ProfilePhoto
          className="mb-7 aspect-square w-32 rounded-[1.5rem] min-[420px]:w-36 sm:w-40 min-[900px]:hidden"
          sizes="(max-width: 419px) 128px, (max-width: 639px) 144px, (max-width: 899px) 160px, 0px"
        />

        <h1 className="text-[clamp(2.75rem,8vw,5rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
          Muhammad
          <span className="block text-neutral-500">Yusril Islam</span>
        </h1>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 min-[900px]:mt-8">
          <p className="text-lg font-medium text-white sm:text-xl">
            Front-End Web Developer
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

      <div className="hidden w-full min-[900px]:block min-[900px]:max-w-[350px] min-[900px]:justify-self-start">
        <ProfilePhoto
          className="aspect-[3/4] w-full rounded-[1.25rem]"
          sizes="350px"
        />
      </div>
    </section>
  );
}
