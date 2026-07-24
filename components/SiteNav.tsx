"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/author-information", label: "Author Info" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="border-t border-[var(--nav-border)] bg-[var(--nav-bg)] text-white"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6 md:justify-end md:py-0">
        <span className="text-[13px] font-semibold tracking-wide text-white/90 md:hidden">
          {siteConfig.shortName}
        </span>
        <button
          type="button"
          className="relative h-10 w-10 rounded-md border border-white/15 transition-colors hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute left-2.5 top-[13px] block h-0.5 w-5 origin-center bg-white transition-transform duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-2.5 top-[19px] block h-0.5 w-5 bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-2.5 top-[25px] block h-0.5 w-5 origin-center bg-white transition-transform duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
        <ul
          id="site-nav-menu"
          className={`${
            open ? "flex" : "hidden"
          } w-full flex-col border-t border-white/10 py-1 md:flex md:w-auto md:flex-row md:justify-end md:gap-0.5 md:border-0 md:py-0`}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative block px-3 py-2.5 text-[13px] font-medium tracking-wide transition-colors md:py-4 md:pl-4 md:pr-4 ${
                    active
                      ? "border-l-[3px] border-white bg-white/[0.08] text-white md:border-l-0 md:bg-transparent md:after:absolute md:after:bottom-0 md:after:left-4 md:after:right-4 md:after:h-[3px] md:after:rounded-t-sm md:after:bg-white md:after:content-['']"
                      : "border-l-[3px] border-transparent text-white/75 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
