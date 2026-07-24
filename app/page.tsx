import Image from "next/image";
import Link from "next/link";
import { brandingImage, siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <div>
      {/* Announcement Ticker Bar */}
      <div className="bg-amber-900 text-amber-100 border-b border-amber-800/80 px-4 py-2.5 text-xs sm:text-sm font-medium">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex shrink-0 items-center rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Announcement
            </span>
            <p className="truncate text-amber-50">
              Selected peer-reviewed papers will be published in Springer Proceedings in Information and Communication Technologies.
            </p>
          </div>
          <Link
            href="/author-information"
            className="shrink-0 font-semibold text-amber-300 underline underline-offset-2 hover:text-amber-200 transition"
          >
            Author Guidelines &rarr;
          </Link>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative min-h-[min(82vh,720px)] overflow-hidden">
        <Image
          src={brandingImage("rvu_banner.webp")}
          alt="RV University Campus Banner"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/95 via-[#1c1917]/65 to-[#292524]/40"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]" />
        <div className="relative mx-auto flex min-h-[min(82vh,720px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-32">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              {siteConfig.dates} · {siteConfig.locationLine}
            </span>
            <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 backdrop-blur-sm">
              Springer Proceedings
            </span>
          </div>
          <h1 className="font-display max-w-4xl text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Welcome to {siteConfig.shortName}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-white/[0.92] md:text-lg">
            {siteConfig.title}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={siteConfig.submitPaperUrl}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-stone-900 shadow-lg shadow-black/15 transition hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Submit Paper
            </Link>
            <Link
              href="/author-information"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-amber-400/40 bg-amber-500/20 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-amber-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Author Guidelines
            </Link>
            <Link
              href={siteConfig.brochureUrl}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* Springer Proceedings Section */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-50/90 via-stone-50 to-orange-50/50 p-6 shadow-xl shadow-stone-950/5 sm:p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/25 bg-amber-100/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
                <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Springer Proceedings Publication
              </div>

              <h2 className="font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                Proceedings with Springer Nature
              </h2>

              <p className="text-[15px] leading-relaxed text-stone-800 font-normal sm:text-base">
                It is planned to publish the peer reviewed and selected papers of conference as proceedings with Springer in their prestigious{" "}
                <a
                  href="https://www.springer.com/series/17395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-900 underline decoration-amber-400 decoration-2 underline-offset-2 transition hover:text-amber-700"
                >
                  “Springer Proceedings in Information and Communication Technologies” series
                </a>
                . For detailed instructions for author and editors of conference proceedings, kindly visit the following link:{" "}
                <a
                  href="https://www.springer.com/us/authors-editors/conference-proceedings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-900 underline decoration-amber-400 decoration-2 underline-offset-2 transition hover:text-amber-700"
                >
                  https://www.springer.com/us/authors-editors/conference-proceedings
                </a>
                . Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published. Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.springer.com/series/17395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-stone-800"
                >
                  <span>Springer Series Info</span>
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
                <Link
                  href="/author-information"
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-900/20 bg-white/90 px-4 py-2.5 text-xs font-semibold text-amber-950 shadow-sm transition hover:bg-white"
                >
                  <span>Full Author Instructions</span>
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Features & Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)]">
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">Peer Reviewed</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              All submitted papers undergo rigorous double-blind peer review by global domain experts to maintain scientific excellence.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)]">
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">No Non-Open Access Fees</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Springer Nature does not charge any publication fee for Non-Open Access content accepted in the proceedings volume.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)]">
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">Submissions Threshold</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Submissions must be at least 4 pages. Abstracts, extended abstracts, and papers under 4 pages are not considered.
            </p>
          </div>
        </div>
      </section>

      {/* Venue & Location Section */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-start">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--text)]">
              Venue & Experience
            </h2>
            <p className="text-[15px] leading-relaxed text-[var(--muted)]">
              <span className="font-medium text-[var(--text)]">{siteConfig.venue}</span>
              <span className="text-[var(--muted-light)]"> — </span>
              {siteConfig.locationLine}
            </p>
            <p className="text-[15px] leading-relaxed text-[var(--muted)]">
              Join researchers, industry leaders, and academic practitioners for keynotes, technical paper presentations, and interactive discussions on responsible AI, secure systems, and quantum engineering.
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
