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

- Ganti email placeholder `your@email.com` pada `components/Hero.tsx` dan `components/SocialLinks.tsx`.
- Ganti tautan sosial pada `components/SocialLinks.tsx`.
- Ganti gambar sementara pada `data/projects.ts` dengan `/images/projects/ummilaa-kitchen.png`, `/images/projects/rph-health.png`, dan `/images/projects/disnaker.png` setelah file tersedia.
- Ganti `/images/profile-placeholder.svg` pada `components/Hero.tsx` dengan `/images/profile.png` setelah foto profil tersedia.
- Ganti URL project `#` pada `data/projects.ts` dengan URL live project.
