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
    company: "Dinas Tenaga Kerja Kota Batu",
    focus: "Front-End Developer",
    period: "Juli 2025 - September 2025",
    location: "Kota Batu, Jawa Timur",
    responsibilities: [
      "Berkontribusi dalam pengembangan dan pemeliharaan website SIJOKER dengan fokus pada Front-End Development.",
      "Mengimplementasikan dan menyempurnakan antarmuka pengguna sesuai kebutuhan sistem.",
      "Menyesuaikan layout, responsivitas, dan konsistensi tampilan menggunakan Laravel agar website lebih terstruktur dan mudah digunakan.",
      "Melakukan pemeliharaan website dan memastikan seluruh fitur berjalan secara fungsional.",
      "Mengelola data peserta pelatihan menggunakan Microsoft Excel, termasuk input, pembaruan, pengecekan kelengkapan, dan penyusunan data.",
    ],
  },
];
