import { readdirSync } from "node:fs";
import path from "node:path";

const photoExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

export type ProjectPhoto = {
  alt: string;
  caption?: string;
  src: string;
};

const nisosPhotoCaptions: Record<string, string> = {
  "n-01-01":
    "Imaginary recipe handwritten by Eleni Papadopoulou, designed and aged by Molly",
  "n-02-01": "The moment of the explosion",
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

function getNisosPrefix(projectNumber: string) {
  const section = projectNumber.split(".")[0];

  if (section === "\u039b") {
    return "n-01-";
  }

  if (section === "\u0394") {
    return "n-02-";
  }

  if (section === "\u03a0") {
    return "n-03-";
  }

  if (section === "\u0391") {
    return "n-04-";
  }

  return null;
}

export function getProjectPhotos(projectNumber: string, projectTitle: string): ProjectPhoto[] {
  const publicDirectory = path.join(process.cwd(), "public");
  const prefix =
    getNisosPrefix(projectNumber) ??
    `p-${projectNumber.toLowerCase().replaceAll(".", "-")}-`;
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

      const caption = nisosPhotoCaptions[path.basename(filename, extension)];

      return {
        alt: `${projectTitle} photo ${Number(match[1])}`,
        ...(caption ? { caption } : {}),
        order: Number(match[1]),
        src,
      };
    })
    .filter((photo): photo is ProjectPhoto & { order: number } => photo !== null)
    .sort(
      (a, b) =>
        a.order - b.order ||
        b.src.split("/").length - a.src.split("/").length ||
        a.src.localeCompare(b.src),
    )
    .filter(
      (photo, index, photos) =>
        index === 0 || photo.order !== photos[index - 1].order,
    )
    .map(({ alt, caption, src }) => ({ alt, caption, src }));
}
