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
              className="inline-block rounded-lg bg-[#231e59] px-6 py-3 text-base font-bold text-white no-underline transition-colors duration-300 hover:bg-black"
            >
              Download Poster
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
