import Image from "next/image";
import Link from "next/link";
import { brandingImage, siteConfig } from "@/lib/config";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 shadow-[var(--shadow-sm)] backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10 md:py-6">
        <Link
          href="/"
          className="flex shrink-0 justify-center rounded-md outline-offset-4 transition-opacity hover:opacity-90 md:justify-start"
        >
          <Image
            src={brandingImage("RVU_logo.webp")}
            alt="RV University"
            width={160}
            height={64}
            sizes="(max-width: 768px) 140px, 160px"
            className="h-auto w-[140px] object-contain md:w-[160px]"
            style={{ height: "auto" }}
            priority
          />
        </Link>
        <div className="min-w-0 flex-1 text-center md:text-left">
          <p className="font-display text-balance text-xl font-semibold leading-snug tracking-tight text-[var(--text)] sm:text-2xl">
            {siteConfig.title}
          </p>
        </div>
      </div>
      <SiteNav />
    </header>
  );
}
