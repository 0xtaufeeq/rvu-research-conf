import Image from "next/image";
import Link from "next/link";
import { brandingImage, siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[min(82vh,720px)] overflow-hidden">
        <Image
          src={brandingImage("rvu_banner.webp")}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/95 via-[#1c1917]/55 to-[#292524]/35"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]" />
        <div className="relative mx-auto flex min-h-[min(82vh,720px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
          <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            {siteConfig.dates} · {siteConfig.locationLine}
          </span>
          <h1 className="font-display max-w-3xl text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Welcome to {siteConfig.shortName}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/[0.92] md:text-lg">
            {siteConfig.title}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={siteConfig.submitPaperUrl}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-stone-900 shadow-lg shadow-black/15 transition hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Submit paper
            </Link>
            <Link
              href={siteConfig.brochureUrl}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Download brochure
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-start">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--text)]">
              Venue & experience
            </h2>
            <p className="text-[15px] leading-relaxed text-[var(--muted)]">
              <span className="font-medium text-[var(--text)]">{siteConfig.venue}</span>
              <span className="text-[var(--muted-light)]"> — </span>
              {siteConfig.locationLine}
            </p>
            <p className="text-[15px] leading-relaxed text-[var(--muted)]">
              Join researchers, industry, and practitioners for keynotes, technical sessions, and
              discussions on responsible AI, secure systems, and quantum engineering.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-md)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3.5">
              <p className="text-sm font-semibold text-[var(--text)]">Location</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=RV+University+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[var(--accent)] hover:underline"
              >
                Open in Maps
              </a>
            </div>
            <div className="aspect-video w-full bg-stone-100">
              <iframe
                title="RV University on Google Maps"
                src={siteConfig.mapEmbedSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
