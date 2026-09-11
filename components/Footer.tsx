import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-5 px-5 py-10 text-center sm:px-8 md:flex-row md:justify-between md:text-left lg:px-12">
        <p className="text-sm leading-6 text-neutral-500">
          © 2026 Muhammad Yusril Islam. All rights reserved.
        </p>
        <SocialLinks compact className="justify-center md:justify-start" />
      </div>
    </footer>
  );
}
