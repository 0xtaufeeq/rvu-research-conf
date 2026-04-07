type Props = { title: string; subtitle?: string };

export function PageIntro({ title, subtitle }: Props) {
  return (
    <header className="mb-12 text-center md:mb-16">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        RAISQE 2026
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--text)] md:text-[2.125rem] md:leading-tight">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--muted)]">
          {subtitle}
        </p>
      ) : null}
      <div
        className="mx-auto mt-8 h-px w-12 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent"
        aria-hidden
      />
    </header>
  );
}
