type Props = { title: string; subtitle?: string };

export function PageIntro({ title, subtitle }: Props) {
  return (
    <div className="mb-10 text-center md:mb-12">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 text-pretty text-sm text-[var(--muted)] md:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
