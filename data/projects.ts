export interface Project {
  title: string;
  description: string;
  image: string;
  imagePresentation?: "tilted";
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "UMMILAA Kitchen",
    description:
      "An e-commerce website for frozen food, catering services, and kitchen seasoning products.",
    image: "/images/projects/ummilaa-kitchen.png",
    imagePresentation: "tilted",
    technologies: ["Laravel", "Tailwind CSS", "Midtrans"],
    url: "#",
  },
  {
    title: "RPH Health",
    description:
      "A cattle health monitoring system designed to support foot-and-mouth disease control at a slaughterhouse.",
    image: "/images/projects/rph-health-placeholder.svg",
    technologies: ["Laravel", "Tailwind CSS", "MySQL"],
    url: "#",
  },
  {
    title: "AK1 DISNAKER Kota Batu",
    description:
      "Development and maintenance of the AK1 employment service website for job seeker registration cards.",
    image: "/images/projects/disnaker-placeholder.svg",
    technologies: ["PHP", "JavaScript", "MySQL"],
    url: "#",
  },
];
