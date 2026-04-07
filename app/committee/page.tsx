import type { Metadata } from "next";
import { CommitteeMemberCard } from "@/components/CommitteeMemberCard";
import { PageIntro } from "@/components/PageIntro";
import committee from "@/data/committee.json";

export const metadata: Metadata = {
  title: "Committee",
};

type Group = (typeof committee)[number];

export default function CommitteePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageIntro title="Organizing committee" />
      <div className="space-y-3">
        {committee.map((group: Group, index: number) => (
          <details
            key={group.title}
            open={index === 0}
            className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-sm)] transition-shadow open:shadow-[var(--shadow-md)]"
          >
            <summary className="cursor-pointer list-none px-5 py-4 text-left transition-colors hover:bg-stone-50/80 marker:content-none [&::-webkit-details-marker]:hidden md:px-6 md:py-5">
              <span className="flex items-center justify-between gap-4">
                <span className="font-display text-base font-semibold text-[var(--text)] md:text-[17px]">
                  {group.title}
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                >
                  ▼
                </span>
              </span>
            </summary>
            <div className="border-t border-[var(--border)] px-5 pb-6 pt-2 md:px-6">
              {group.message && group.members.length === 0 ? (
                <p className="py-5 text-sm leading-relaxed text-[var(--muted)]">{group.message}</p>
              ) : (
                <div className="grid gap-6 pt-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((m) => (
                    <CommitteeMemberCard
                      key={`${group.title}-${m.name}`}
                      name={m.name}
                      position={m.position}
                      email={m.email || undefined}
                      imageFile={m.image}
                    />
                  ))}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
