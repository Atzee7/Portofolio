export interface Project {
  title: string;
  projectType: "Personal Project" | "Internship Project";
  description: string;
  image: string;
  imagePresentation?: "tilted" | "tilted-blue";
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Ummilaa Kitchen",
    projectType: "Personal Project",
    description:
      "An e-commerce website for frozen food, catering services, and kitchen seasoning products.",
    image: "/images/projects/ummilaa-kitchen.png",
    imagePresentation: "tilted",
    githubUrl: "https://github.com/Atzee7/ummilaa-kitchen",
  },
  {
    title: "RPH Health",
    projectType: "Personal Project",
    description:
      "A cattle health monitoring system designed to support foot-and-mouth disease control at a slaughterhouse.",
    image: "/images/projects/rph-health-placeholder.svg",
    githubUrl: "https://github.com/Atzee7",
  },
  {
    title: "Sijoker Disnaker Kota Batu",
    projectType: "Internship Project",
    description:
      "Development and maintenance of the Sijoker employment service website for training registration cards.",
    image: "/images/projects/ak1-disnaker-kota-batu.png",
    imagePresentation: "tilted-blue",
    githubUrl: "https://github.com/Atzee7/-Sijoker",
  },
];
