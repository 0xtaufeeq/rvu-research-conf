import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-[var(--surface)] py-8 text-center text-sm text-[var(--muted)]">
      <p>© {siteConfig.copyright}</p>
    </footer>
  );
}
