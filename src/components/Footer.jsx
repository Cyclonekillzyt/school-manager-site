import Container from "./Container.jsx";
import { REPO_URL } from "../constants.js";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Install", href: "#install" },
  { label: "GitHub", href: REPO_URL, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-violet/15 dark:border-white/10">
      <Container
        className="flex flex-col items-center gap-5 py-10 sm:flex-row sm:justify-between"
        style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <div className="text-[12.5px] text-muted dark:text-muted-dark">
          © 2026 School Manager · Built for Kwabenya MA2
        </div>
        <nav className="flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[13px] font-semibold text-ink-soft transition-colors hover:text-violet dark:text-ink-dark-soft dark:hover:text-violet-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
