import type { Metadata } from "next";
import { CommitteeMemberCard } from "@/components/CommitteeMemberCard";
import { PageIntro } from "@/components/PageIntro";
import { contactCommittee } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageIntro
        title="Contact"
        subtitle="Reach the conference contact committee for inquiries."
      />
      <div className="mx-auto flex max-w-2xl flex-col gap-5">
        {contactCommittee.map((person) => (
          <CommitteeMemberCard
            key={person.email}
            variant="compact"
            name={person.name}
            email={person.email}
            position={person.role}
            imageFile={person.image}
          />
        ))}
      </div>
    </div>
  );
}
