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
  color: string;
}

export interface TechCategory {
  category: string;
  technologies: Technology[];
}

export const techCategories: TechCategory[] = [
  {
    category: "Languages",
    technologies: [
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
      { name: "PHP", Icon: SiPhp, color: "#777bb4" },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", Icon: SiCss, color: "#1572b6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952b3" },
      { name: "Blade", Icon: SiLaravel, color: "#ff2d20" },
    ],
  },
  {
    category: "Backend",
    technologies: [{ name: "Laravel", Icon: SiLaravel, color: "#ff2d20" }],
  },
  {
    category: "Database",
    technologies: [{ name: "MySQL", Icon: SiMysql, color: "#4479a1" }],
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", Icon: SiGit, color: "#f05032" },
      { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
    ],
  },
];
