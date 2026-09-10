import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiTailwindcss,
} from "react-icons/si";

export interface Technology {
  name: string;
  Icon: IconType;
}

export interface TechCategory {
  category: string;
  technologies: Technology[];
}

export const techCategories: TechCategory[] = [
  {
    category: "Languages",
    technologies: [
      { name: "JavaScript", Icon: SiJavascript },
      { name: "PHP", Icon: SiPhp },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "Blade", Icon: SiLaravel },
    ],
  },
  {
    category: "Backend",
    technologies: [{ name: "Laravel", Icon: SiLaravel }],
  },
  {
    category: "Database",
    technologies: [{ name: "MySQL", Icon: SiMysql }],
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
    ],
  },
];
