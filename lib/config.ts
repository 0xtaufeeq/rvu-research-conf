/**
 * Images are served from `public/images/` (copied from project root `*_files` folders).
 * Run `npm run copy-assets` after adding or updating files in those folders.
 *
 * Optional: set NEXT_PUBLIC_LEGACY_SITE_BASE to load images from a deployed mirror instead of
 * local files (committee: …/committee_files/, branding: …/WEBP_Images/).
 */

export const siteConfig = {
  shortName: "RAISQE'26",
  title:
    "International Conference on Responsible AI, Secure System and Quantum Engineering",
  dates: "23rd – 24th July 2026",
  locationLine: "Bengaluru, Karnataka, India",
  venue: "RV University",
  copyright: "Taufeeq Riyaz",
  submitPaperUrl: "#submit-paper",
  brochureUrl: "#brochure",
  mapEmbedSrc:
    "https://www.google.com/maps?q=RV+University,+Bengaluru&output=embed",
} as const;

function remoteMirrorBase(): string | null {
  const override = process.env.NEXT_PUBLIC_LEGACY_SITE_BASE?.replace(/\/$/, "");
  if (override === "" || override === "local") return null;
  return override ?? null;
}

/** Committee photos — filenames match `committee_files/*.webp` in the repo root. */
export function committeeImageSrc(filename: string): string {
  const mirror = remoteMirrorBase();
  if (mirror) return `${mirror}/committee_files/${filename}`;
  return `/images/committee/${filename}`;
}

export function brandingImage(
  filename: "RVU_logo.webp" | "RVU_ieee_logo.webp" | "rvu_banner.webp",
): string {
  const mirror = remoteMirrorBase();
  if (mirror) return `${mirror}/WEBP_Images/${filename}`;
  return `/images/branding/${filename}`;
}
