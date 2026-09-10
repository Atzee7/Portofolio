import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkExperience />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
