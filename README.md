# Portfolio Muhammad Yusril Islam

Website portofolio satu halaman untuk Front-End Developer, dibuat dengan Next.js App Router, TypeScript, Tailwind CSS, Lucide React, dan React Icons.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
```

Proyek menggunakan static export Next.js sehingga dapat langsung di-deploy ke Vercel.

## Mengganti data pribadi

- Ganti tautan GitHub dan LinkedIn pada `components/SocialLinks.tsx`.
- CV yang diunduh dari tombol hero berada di `public/cv/CV_Muhammad_Yusril_Islam.pdf`.
- Data pengalaman kerja berada di `data/experience.ts`.
- Data Tech Stack dikelompokkan berdasarkan kategori pada `data/techStack.ts`.
- Ganti gambar sementara pada `data/projects.ts` dengan `/images/projects/ummilaa-kitchen.png`, `/images/projects/rph-health.png`, dan `/images/projects/disnaker.png` setelah file tersedia.
- Foto formal berada di `public/images/profile.jpg`.
- Ganti URL project `#` pada `data/projects.ts` dengan URL live project.
