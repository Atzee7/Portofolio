import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TechStack } from "@/components/TechStack";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal>
        <WorkExperience />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <TechStack />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Projects />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
