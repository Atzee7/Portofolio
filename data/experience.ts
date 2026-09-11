export interface WorkExperience {
  role: string;
  company: string;
  focus: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    role: "Web & Data Support Training Program Intern",
    company: "Batu City Manpower Office",
    focus: "Front-End Developer",
    period: "July 2025 - September 2025",
    location: "Batu City, East Java",
    responsibilities: [
      "Contributed to the development and maintenance of the SIJOKER website, with a focus on front-end development.",
      "Implemented and refined user interfaces based on system requirements.",
      "Improved layout, responsiveness, and visual consistency within the Laravel application to create a more structured and user-friendly experience.",
      "Performed website maintenance and verified that all features functioned correctly.",
      "Managed training participant data in Microsoft Excel, including data entry, updates, completeness checks, and organization.",
    ],
  },
];
