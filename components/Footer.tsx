import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p className="text-sm leading-6 text-neutral-500">
          © 2026 Muhammad Yusril Islam. All rights reserved.
        </p>
        <SocialLinks compact />
      </div>
    </footer>
  );
}
