import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { tracks } from "@/data/tracks";

export const metadata: Metadata = {
  title: "Tracks",
};

export default function TracksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageIntro
        title="Tracks"
        subtitle="Domains are not limited to the tracks listed below."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <li
            key={track.title}
            className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)] transition-shadow duration-200 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)]"
          >
            <h2 className="font-display border-b border-[var(--border)] pb-3 text-lg font-semibold leading-snug text-[var(--text)]">
              {track.title}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--muted)]">
              {track.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
