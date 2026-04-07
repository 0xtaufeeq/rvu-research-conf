import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <PageIntro title="About the conference" />
      <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] p-8 shadow-[var(--shadow-md)] md:p-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Conference overview
        </h2>
        <p className="mt-6 text-pretty text-[15px] leading-[1.7] text-[var(--muted)]">
          The International Conference on Responsible AI, Secure System, and Quantum Engineering (
          <strong className="font-semibold text-[var(--text)]">RAISQE 2026</strong>) is a premier
          academic and industry forum dedicated to advancing research and innovation in three
          transformative domains:
        </p>
        <ul className="mt-6 space-y-2.5 border-l-2 border-[var(--accent)]/25 pl-5 text-[15px] text-[var(--muted)]">
          <li>Artificial Intelligence</li>
          <li>Cybersecurity</li>
          <li>Quantum Technologies</li>
        </ul>
        <p className="mt-8 text-pretty text-[15px] leading-[1.7] text-[var(--muted)]">
          The rapid adoption of AI, the growing complexity of secure systems, and the emergence of
          quantum engineering present both opportunities and challenges for society. RAISQE 2026
          provides a platform for global experts, researchers, and practitioners to exchange ideas,
          present novel findings, and discuss best practices for ensuring responsible, secure, and
          sustainable technological progress.
        </p>
        <p className="mt-6 text-pretty text-[15px] leading-[1.7] text-[var(--muted)]">
          The conference will feature keynote addresses, technical paper presentations, panel
          discussions, and specialized workshops spanning ethical and responsible AI, advanced
          cybersecurity, quantum computing applications, secure architectures, and interdisciplinary
          innovation.
        </p>
        <p className="mt-6 text-pretty text-[15px] leading-[1.7] text-[var(--muted)]">
          By fostering collaboration between academia, industry, and policymakers, RAISQE 2026 aims to
          shape the future of intelligent systems that are ethical, resilient, and prepared for the
          quantum era.
        </p>
      </div>
    </div>
  );
}
