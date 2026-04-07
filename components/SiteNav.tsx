"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/tracks", label: "Tracks" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-t border-stone-200/80 bg-[var(--nav-bg)] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 md:py-0">
        <div className="hidden min-w-0 flex-1 py-3 md:block">
          <p className="truncate text-[13px] font-medium tracking-tight text-white/95">
            {siteConfig.title}
          </p>
          <p className="text-[11px] text-white/65">
            {siteConfig.dates} · {siteConfig.locationLine}
          </p>
        </div>
        <button
          type="button"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-white/15 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>
        <ul
          className={`${
            open ? "flex" : "hidden"
          } w-full flex-col gap-0 border-t border-white/10 py-2 md:flex md:w-auto md:flex-row md:border-0 md:py-0`}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-3 py-2 text-sm font-medium tracking-wide transition hover:bg-white/10 md:rounded-sm md:py-4 ${
                    active ? "bg-white/10 text-white" : "text-white/85"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <span
              className="block cursor-not-allowed px-3 py-2 text-sm text-white/40 md:py-4"
              title="Coming soon"
            >
              Timeline
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
