import Image from "next/image";
import { committeeImageSrc } from "@/lib/config";

type Props = {
  name: string;
  position: string;
  email?: string;
  imageFile: string;
};

export function CommitteeMemberCard({ name, position, email, imageFile }: Props) {
  const src = committeeImageSrc(imageFile);
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-[var(--surface)] shadow-sm">
      <div className="relative aspect-[4/5] w-full bg-stone-100">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, 280px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-medium text-[var(--text)]">{name}</h3>
        {email ? (
          <a
            href={`mailto:${email}`}
            className="text-sm text-[var(--accent)] hover:underline"
          >
            {email}
          </a>
        ) : null}
        <p className="text-pretty text-sm leading-relaxed text-[var(--muted)]">{position}</p>
      </div>
    </article>
  );
}
