/**
 * Copies webp assets from the legacy HTML project (../*_files) into public/images/.
 * Run from raisqe-site: node scripts/copy-assets.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.join(__dirname, "..");
const projectRoot = path.join(siteRoot, "..");

const committeeSrc = path.join(projectRoot, "committee_files");
const brandingSrc = path.join(projectRoot, "IEEE Conference_files");
const outCommittee = path.join(siteRoot, "public", "images", "committee");
const outBranding = path.join(siteRoot, "public", "images", "branding");

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

function copyGlob(srcDir, pattern, destDir) {
  if (!fs.existsSync(srcDir)) {
    console.warn("Skip (missing):", srcDir);
    return;
  }
  ensureDir(destDir);
  for (const name of fs.readdirSync(srcDir)) {
    if (!name.endsWith(pattern)) continue;
    fs.copyFileSync(path.join(srcDir, name), path.join(destDir, name));
    console.log("Copied", name, "->", destDir);
  }
}

ensureDir(outCommittee);
ensureDir(outBranding);

copyGlob(committeeSrc, ".webp", outCommittee);

for (const f of ["RVU_logo.webp", "RVU_ieee_logo.webp"]) {
  const from = path.join(brandingSrc, f);
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, path.join(outBranding, f));
    console.log("Copied", f, "-> branding");
  } else {
    console.warn("Missing:", from);
  }
}

const bannerLocal = path.join(
  projectRoot,
  "about_files",
  "WEBP_Images",
  "rvu_banner.webp",
);
if (fs.existsSync(bannerLocal)) {
  fs.copyFileSync(bannerLocal, path.join(outBranding, "rvu_banner.webp"));
  console.log("Copied rvu_banner.webp -> branding (from about_files/WEBP_Images)");
}

console.log("Done.");
