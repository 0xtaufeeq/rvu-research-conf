import type { Metadata } from "next";
import { CommitteeMemberCard } from "@/components/CommitteeMemberCard";
import { PageIntro } from "@/components/PageIntro";
import { contactCommittee } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <PageIntro
        title="Contact"
        subtitle="Reach the conference contact committee for inquiries."
      />
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {contactCommittee.map((person) => (
          <CommitteeMemberCard
            key={person.email}
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
