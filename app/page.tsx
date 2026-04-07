import Image from "next/image";
import Link from "next/link";
import { brandingImage, siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-[min(78vh,640px)] overflow-hidden">
        <Image
          src={brandingImage("rvu_banner.webp")}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/55 to-stone-900/30"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(78vh,640px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 md:pb-20 md:pt-32">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {siteConfig.dates} · {siteConfig.locationLine}
          </p>
          <h1 className="max-w-3xl text-balance font-semibold text-4xl leading-tight tracking-tight text-white md:text-5xl">
            Welcome to {siteConfig.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
            {siteConfig.title}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={siteConfig.submitPaperUrl}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 shadow-sm transition hover:bg-stone-100"
            >
              Submit paper
            </Link>
            <Link
              href={siteConfig.brochureUrl}
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Download brochure
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 md:items-start">
          <div>
            <h2 className="text-lg font-semibold text-[var(--text)]">Venue</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {siteConfig.venue} — {siteConfig.locationLine}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
              Join researchers, industry, and practitioners for keynotes, technical sessions, and
              discussions on responsible AI, secure systems, and quantum engineering.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-stone-200 bg-[var(--surface)] shadow-sm">
            <p className="border-b border-stone-200 px-4 py-3 text-sm font-medium text-[var(--text)]">
              Location
            </p>
            <div className="aspect-video w-full">
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
