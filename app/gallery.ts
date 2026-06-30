import { readdirSync } from "node:fs";
import path from "node:path";

const photoExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

export type ProjectPhoto = {
  alt: string;
  src: string;
};

function getPublicFiles(directory: string, baseUrl = ""): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    const entryUrl = `${baseUrl}/${entry.name}`;

    if (entry.isDirectory()) {
      return getPublicFiles(entryPath, entryUrl);
    }

    return entry.isFile() ? [entryUrl] : [];
  });
}

export function getProjectPhotos(projectNumber: string, projectTitle: string): ProjectPhoto[] {
  const publicDirectory = path.join(process.cwd(), "public");
  const prefix = `p-${projectNumber.toLowerCase().replaceAll(".", "-")}-`;
  const photoPattern = new RegExp(
    `^${prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\d+)\\.[^.]+$`,
    "i",
  );

  return getPublicFiles(publicDirectory)
    .map((src) => {
      const filename = path.basename(src);
      const extension = path.extname(filename).toLowerCase();
      const match = filename.toLowerCase().match(photoPattern);

      if (!match || !photoExtensions.has(extension)) {
        return null;
      }

      return {
        alt: `${projectTitle} photo ${Number(match[1])}`,
        order: Number(match[1]),
        src,
      };
    })
    .filter((photo): photo is ProjectPhoto & { order: number } => photo !== null)
    .sort((a, b) => a.order - b.order || a.src.localeCompare(b.src))
    .map(({ alt, src }) => ({ alt, src }));
}
