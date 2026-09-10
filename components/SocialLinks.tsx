import { ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yusril7",
    Icon: FaLinkedinIn,
  },
  { label: "GitHub", href: "https://github.com/Atzee7", Icon: FaGithub },
];

interface SocialLinksProps {
  className?: string;
  compact?: boolean;
}

export function SocialLinks({ className = "", compact = false }: SocialLinksProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-10 gap-y-4 sm:gap-x-12 ${className}`}
    >
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
        >
          <Icon aria-hidden="true" size={compact ? 14 : 16} />
          <span>{label}</span>
          <ExternalLink
            aria-hidden="true"
            size={compact ? 13 : 14}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      ))}
    </div>
  );
}
