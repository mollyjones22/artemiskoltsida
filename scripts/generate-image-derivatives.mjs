import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDirectory = path.join(process.cwd(), "public");
const outputDirectory = path.join(publicDirectory, "optimized");
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

async function getImageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        if (entryPath === outputDirectory) return [];
        return getImageFiles(entryPath);
      }

      return imageExtensions.has(path.extname(entry.name).toLowerCase())
        ? [entryPath]
        : [];
    }),
  );

  return files.flat();
}

async function isCurrent(source, destination) {
  try {
    const [sourceStats, destinationStats] = await Promise.all([
      stat(source),
      stat(destination),
    ]);
    return destinationStats.mtimeMs >= sourceStats.mtimeMs;
  } catch {
    return false;
  }
}

async function generateDerivative(source, kind, width, quality) {
  const relativePath = path.relative(publicDirectory, source);
  const parsedPath = path.parse(relativePath);
  const destination = path.join(
    outputDirectory,
    kind,
    parsedPath.dir,
    `${parsedPath.name}.webp`,
  );

  if (await isCurrent(source, destination)) return false;

  await mkdir(path.dirname(destination), { recursive: true });
  await sharp(source, { animated: true })
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ effort: 5, quality })
    .toFile(destination);
  return true;
}

const sources = await getImageFiles(publicDirectory);
let generated = 0;

const jobs = sources.flatMap((source) => [
  [source, "gallery", 1800, 92],
  [source, "thumbnail", 320, 88],
]);
const workers = Array.from({ length: Math.min(6, jobs.length) }, async () => {
  while (jobs.length > 0) {
    const job = jobs.shift();
    if (job && (await generateDerivative(...job))) generated += 1;
  }
});

await Promise.all(workers);

console.log(
  generated === 0
    ? "Image derivatives are up to date."
    : `Generated ${generated} optimized image derivatives.`,
);
