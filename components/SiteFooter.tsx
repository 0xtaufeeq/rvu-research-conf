import Link from "next/link";
import { siteConfig } from "@/lib/config";

const quick = [
  { href: "/about", label: "About" },
  { href: "/author-information", label: "Author Info" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-[var(--text)]">{siteConfig.shortName}</p>
            <p className="mt-1 max-w-sm text-sm text-[var(--muted)]">
              {siteConfig.dates} · {siteConfig.locationLine}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {quick.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--muted-light)]">
          © {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}
