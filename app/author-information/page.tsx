import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Author Information",
  description:
    "Author instructions, Springer proceedings publication details, formatting guidelines, and paper submission information for RAISQE 2026.",
};

export default function AuthorInformationPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      <PageIntro
        title="Author Information & Guidelines"
        subtitle="Detailed instructions for paper submission, Springer proceedings publication, formatting, and review policies."
      />

      {/* Springer Proceedings Highlight Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-50/90 via-stone-50 to-orange-50/50 p-6 shadow-xl shadow-stone-950/5 sm:p-8 md:p-10">
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/25 bg-amber-100/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
              <svg
                className="h-4 w-4 text-amber-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Springer Proceedings Publication
            </div>

            <h2 className="font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Publication in Springer ICT Series
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

              <a
                href="https://www.springer.com/us/authors-editors/conference-proceedings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-900/20 bg-white/90 px-4 py-2.5 text-xs font-semibold text-amber-950 shadow-sm transition hover:bg-white"
              >
                <span>Springer Author Instructions</span>
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">Paper Length & Format</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)] list-disc list-inside leading-relaxed">
            <li>Full research papers must be at least <strong>4 pages</strong> in length.</li>
            <li>Abstracts, extended abstracts, and short papers under 4 pages are <strong>not considered for publication</strong>.</li>
            <li>Submissions must adhere strictly to standard Springer proceedings guidelines.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">Peer Review & Quality Check</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)] list-disc list-inside leading-relaxed">
            <li>All submitted papers will undergo double-blind peer review by international domain experts.</li>
            <li>Springer will perform independent quality checks on accepted manuscripts prior to volume publication.</li>
            <li>Only papers passing Springer quality checks will be included in the proceedings volume.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">Publication Charges</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            <strong>Springer Nature does not charge any fee for publication of Non-Open Access content.</strong> Registration and participation details for conference delegates will be announced upon acceptance.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">Ethics & Originality</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Submissions must contain original research that has not been published or under consideration elsewhere. Similarity index and plagiarism checks will be conducted strictly.
          </p>
        </div>
      </section>

      {/* Action Banner */}
      <section className="mt-12 rounded-xl bg-stone-900 p-8 text-center text-white shadow-xl">
        <h3 className="font-display text-2xl font-bold">Ready to Submit Your Research?</h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-stone-300">
          Ensure your manuscript complies with all formatting guidelines and page length requirements before submitting.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href={siteConfig.submitPaperUrl}
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-stone-900 shadow transition hover:bg-stone-100"
          >
            Submit Paper
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Contact Chairs
          </Link>
        </div>
      </section>
    </div>
  );
}
