import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { tracks } from "@/data/tracks";

export const metadata: Metadata = {
  title: "Tracks",
};

export default function TracksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <PageIntro
        title="Tracks"
        subtitle="Domains are not limited to the tracks listed below."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <li
            key={track.title}
            className="flex flex-col rounded-lg border border-stone-200 bg-[var(--surface)] p-5 shadow-sm"
          >
            <h2 className="text-base font-semibold leading-snug text-[var(--text)]">{track.title}</h2>
            <ul className="mt-4 space-y-2 border-t border-stone-100 pt-4 text-sm text-[var(--muted)]">
              {track.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
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
