import type { Metadata } from "next";
import Link from "next/link";

const islandTitle = "\u039d\u03ae\u03c3\u03bf\u03c2 \u0391\u03c5\u03c4\u03af";

export const metadata: Metadata = {
  title: `Map | ${islandTitle}`,
  description: "Island map for the Nisos Afti archive.",
};

export default function NisosAftiMapPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-5 text-[#202122] sm:px-6 lg:px-10">
      <article className="mx-auto max-w-6xl">
        <Link href="/nisos-afti" className="mb-6 inline-block text-[#0645ad]">
          Back to {islandTitle}
        </Link>

        <header className="mb-5 border-b border-[#a2a9b1] pb-2">
          <h1 className="text-4xl font-normal leading-tight">Map</h1>
        </header>

        <figure className="border border-[#a2a9b1] bg-[#f8f9fa] p-3">
          <div className="flex min-h-[70vh] items-center justify-center bg-white p-4">
            <img
              src="/afti island 1-1.svg"
              alt={`${islandTitle} island map`}
              className="max-h-[78vh] w-full object-contain"
            />
          </div>
          <figcaption className="mt-2 text-center text-sm leading-snug">
            {islandTitle}
          </figcaption>
        </figure>
      </article>
    </main>
  );
}
