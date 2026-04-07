/**
 * Legacy static site host (same paths as old HTML: committee_files/, ieee-conference/WEBP_Images/).
 * Set NEXT_PUBLIC_USE_LOCAL_IMAGES=true to use /public/images/** only.
 */
export const defaultLegacySiteBase = "https://ieee-rvu.org.in/RAISQE%2726";

export const siteConfig = {
  shortName: "RAISQE'26",
  title:
    "International Conference on Responsible AI, Secure System and Quantum Engineering",
  dates: "23rd – 24th July 2026",
  locationLine: "Bengaluru, Karnataka, India",
  venue: "RV University",
  orgLine: "IEEE Student Branch",
  copyright: "RAISQE-2026",
  submitPaperUrl: "#submit-paper",
  brochureUrl: "#brochure",
  mapEmbedSrc:
    "https://www.google.com/maps?q=RV+University,+Bengaluru&output=embed",
} as const;

function legacyBase(): string | null {
  if (process.env.NEXT_PUBLIC_USE_LOCAL_IMAGES === "true") return null;
  return (
    process.env.NEXT_PUBLIC_LEGACY_SITE_BASE?.replace(/\/$/, "") ??
    defaultLegacySiteBase
  );
}

/** Committee photos: one canonical URL per filename (deduped in browser cache across sections). */
export function committeeImageSrc(filename: string): string {
  const base = legacyBase();
  if (base) return `${base}/committee_files/${filename}`;
  return `/images/committee/${filename}`;
}

export function brandingImage(
  filename: "RVU_logo.webp" | "RVU_ieee_logo.webp" | "rvu_banner.webp",
): string {
  const base = legacyBase();
  if (base) return `${base}/ieee-conference/WEBP_Images/${filename}`;
  return `/images/branding/${filename}`;
}
