import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details and official inquiry desks for RAISQE 2026 conference.",
};

const contactDesks = [
  {
    title: "Conference Convener Desk",
    email: "manish@rvu.edu.in",
    role: "Associate Professor, School of Computer Science & Engineering",
  },
  {
    title: "Program & Submissions Co-Chair Desk",
    email: "aishwaryasg@rvu.edu.in",
    role: "Assistant Professor, School of Computer Science & Engineering",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-20">
      <PageIntro
        title="Contact & Inquiries"
        subtitle="Reach the conference secretariats for paper submission, registration, or venue inquiries."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {contactDesks.map((desk) => (
          <div
            key={desk.email}
            className="flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-sm)]"
          >
            <div>
              <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
                Official Desk
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-[var(--text)]">
                {desk.title}
              </h3>
              <p className="mt-1 text-xs text-[var(--muted)]">{desk.role}</p>
            </div>

            <div className="mt-6 border-t border-[var(--border)] pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-light)]">
                Email Contact
              </p>
              <a
                href={`mailto:${desk.email}`}
                className="mt-1 inline-block text-base font-semibold text-[var(--accent)] hover:underline"
              >
                {desk.email}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
        <h3 className="font-display text-base font-bold text-stone-900">Venue Address</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          <strong>{siteConfig.venue}</strong><br />
          {siteConfig.locationLine}
        </p>
        <div className="mt-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=RV+University+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 underline hover:text-stone-700"
          >
            <span>View on Google Maps</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
