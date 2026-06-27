import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Fall 2026 Seminar Poster",
  description:
    "View and download the official Fall 2026 poster for the University of Florida Seminar Series in Greek Rhetoric, Law, and Society.",
  path: "/poster",
});

export default function PosterPage() {
  return (
    <>
      <Navigation />
      <main className="px-6 py-10 text-base sm:px-16 sm:text-lg">
        <h1 className="mb-8 text-xl font-bold sm:text-2xl">Fall 2026 Seminar Poster</h1>

        <div className="mx-auto max-w-4xl">
          <img
            src="/poster2026.png"
            alt="Fall 2026 Seminar Series in Greek Rhetoric, Law, and Society poster"
            loading="lazy"
            className="w-full rounded-lg"
          />

          <div className="mt-8 text-center">
            <a
              href="/poster2026.png"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-block px-6 py-3 text-base font-bold no-underline underline-offset-4 transition-colors duration-300 hover:underline"
            >
              Download Poster
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
