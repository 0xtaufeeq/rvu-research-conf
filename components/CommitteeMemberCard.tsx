import Image from "next/image";
import { committeeImageSrc } from "@/lib/config";

type Props = {
  name: string;
  position: string;
  email?: string;
  imageFile: string;
  /** Smaller horizontal layout (e.g. contact page) */
  variant?: "default" | "compact";
};

export function CommitteeMemberCard({
  name,
  position,
  email,
  imageFile,
  variant = "default",
}: Props) {
  const src = committeeImageSrc(imageFile);

  if (variant === "compact") {
    return (
      <article className="group flex max-w-xl flex-row overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-sm)] transition-shadow duration-200 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)]">
        <div className="relative h-[9.5rem] w-[7rem] shrink-0 bg-stone-100 sm:h-40 sm:w-[7.5rem]">
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
            sizes="120px"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-4 sm:p-5">
          <h3 className="font-display text-base font-semibold leading-snug text-[var(--text)] sm:text-lg">
            {name}
          </h3>
          {email ? (
            <a
              href={`mailto:${email}`}
              className="w-fit break-all text-sm font-medium text-[var(--accent)] underline-offset-2 transition-colors hover:text-[var(--accent-hover)] hover:underline"
            >
              {email}
            </a>
          ) : null}
          <p className="text-pretty text-xs leading-relaxed text-[var(--muted)] sm:text-sm">{position}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-sm)] transition-shadow duration-200 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)]">
      <div className="relative aspect-[4/5] w-full bg-stone-100">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
          sizes="(max-width: 640px) 100vw, 280px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 md:p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-[var(--text)]">{name}</h3>
        {email ? (
          <a
            href={`mailto:${email}`}
            className="w-fit text-sm font-medium text-[var(--accent)] underline-offset-2 transition-colors hover:text-[var(--accent-hover)] hover:underline"
          >
            {email}
          </a>
        ) : null}
        <p className="text-pretty text-sm leading-relaxed text-[var(--muted)]">{position}</p>
      </div>
    </article>
  );
}
