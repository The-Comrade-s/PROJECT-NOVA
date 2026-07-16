import { LEGAL_LINKS, SOCIAL_LINKS } from "@/constants/footer";
import { NAV_LINKS } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-content flex flex-col gap-10 py-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <span className="text-lg font-semibold text-text-primary">NOVA</span>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10
                    text-text-secondary transition-colors hover:text-text-primary"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} NOVA. All rights reserved.</span>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <a key={link.id} href={link.href} className="hover:text-text-secondary">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
