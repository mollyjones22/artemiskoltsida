import type { Metadata } from "next";
import Link from "next/link";

const islandTitle = "\u039d\u03ae\u03c3\u03bf\u03c2 \u0391\u03c5\u03c4\u03af";
const mapPdf = "/Nisos%20Afti/AFTI-ISLAND%20UPSOMETRIKStars.pdf";

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
          <div className="min-h-[70vh] bg-white">
            <object
              data={mapPdf}
              type="application/pdf"
              className="h-[80vh] min-h-[36rem] w-full"
              aria-label={`${islandTitle} island map PDF`}
            >
              <p className="p-6 text-center">
                Your browser cannot display this PDF.{" "}
                <a href={mapPdf} className="text-[#0645ad] underline">
                  Open the island map PDF
                </a>
                .
              </p>
            </object>
          </div>
          <figcaption className="mt-2 text-center text-sm leading-snug">
            {islandTitle}
          </figcaption>
        </figure>
      </article>
    </main>
  );
}
