import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { label: "GitHub", href: "#", Icon: FaGithub },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Email", href: "mailto:your@email.com", Icon: Mail },
];

interface SocialLinksProps {
  className?: string;
  compact?: boolean;
}

export function SocialLinks({ className = "", compact = false }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={`grid place-items-center rounded-full border border-neutral-800 text-neutral-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-500 hover:text-white ${
            compact ? "size-10" : "size-11"
          }`}
        >
          <Icon aria-hidden="true" size={compact ? 16 : 18} />
        </a>
      ))}
    </div>
  );
}
