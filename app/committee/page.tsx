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
    <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <PageIntro title="Organizing committee" />
      <div className="space-y-2">
        {committee.map((group: Group, index: number) => (
          <details
            key={group.title}
            open={index === 0}
            className="group rounded-lg border border-stone-200 bg-[var(--surface)] open:shadow-sm"
          >
            <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold tracking-wide text-[var(--text)] marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {group.title}
                <span className="text-[var(--muted)] transition group-open:rotate-180">▼</span>
              </span>
            </summary>
            <div className="border-t border-stone-100 px-5 pb-5 pt-2">
              {group.message && group.members.length === 0 ? (
                <p className="py-4 text-sm text-[var(--muted)]">{group.message}</p>
              ) : (
                <div className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
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
