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
      "Website toko online untuk penjualan frozen food, catering, dan bumbu dapur.",
    image: "/images/projects/ummilaa-kitchen.png",
    imagePresentation: "tilted",
    technologies: ["Laravel", "Tailwind CSS", "Midtrans"],
    url: "#",
  },
  {
    title: "RPH Health",
    description:
      "Sistem monitoring kesehatan sapi untuk mendukung pengendalian PMK di RPH.",
    image: "/images/projects/rph-health-placeholder.svg",
    technologies: ["Laravel", "Tailwind CSS", "MySQL"],
    url: "#",
  },
  {
    title: "AK1 DISNAKER Kota Batu",
    description:
      "Pengembangan dan pemeliharaan website pelayanan AK1 (Kartu Pencari Kerja).",
    image: "/images/projects/disnaker-placeholder.svg",
    technologies: ["PHP", "JavaScript", "MySQL"],
    url: "#",
  },
];
