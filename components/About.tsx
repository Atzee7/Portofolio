import { TechStack } from "@/components/TechStack";

export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="grid gap-20 border-t border-neutral-900 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:pt-24">
        <div>
          <p className="font-mono text-xs tracking-[0.22em] text-neutral-500">
        
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl"
          >
            About Me
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg sm:leading-9">
            Fresh Graduate S1 Teknik Informatika di Universitas Muhammadiyah
            Malang dengan minat pada Front-End Development. Terbiasa
            mengembangkan website mulai dari implementasi kebutuhan pengguna,
            penyempurnaan fitur, hingga memastikan sistem dapat digunakan secara
            fungsional dan terstruktur. Selalu tertarik untuk mempelajari hal
            baru dan membangun solusi digital yang bermanfaat.
          </p>
        </div>
        <TechStack />
      </div>
    </section>
  );
}
