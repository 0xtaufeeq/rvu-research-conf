import Image from "next/image";
import { brandingImage, siteConfig } from "@/lib/config";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-[var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex shrink-0 justify-center md:justify-start">
          <Image
            src={brandingImage("RVU_logo.webp")}
            alt="RV University"
            width={160}
            height={64}
            className="h-auto w-[140px] object-contain md:w-[160px]"
            priority
          />
        </div>
        <div className="min-w-0 flex-1 text-center md:text-left">
          <p className="text-balance text-lg font-semibold leading-snug tracking-tight text-[var(--text)] md:text-xl">
            {siteConfig.title}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 md:max-w-[220px]">
          <Image
            src={brandingImage("RVU_ieee_logo.webp")}
            alt="IEEE RVU Student Branch"
            width={72}
            height={72}
            className="h-14 w-auto object-contain"
            priority
          />
          <div className="min-w-0 text-left text-[11px] leading-tight text-[var(--muted)]">
            <p className="font-semibold text-[var(--text)]">{siteConfig.orgLine}</p>
            <p>{siteConfig.dates}</p>
            <p>{siteConfig.locationLine}</p>
          </div>
        </div>
      </div>
      <SiteNav />
    </header>
  );
}
