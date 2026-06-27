import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Analog",
  description:
    "Analog portfolio projects by Artemis Koltsida, including physical art projects and media notes.",
  path: "/analog",
});

const analogCatalogue = [
  {
    number: "A.01",
    slug: "3d-prints",
    title: "3D Prints",
    href: "/analog/3d-prints",
    details: ["3D printed objects, stencils, charms, and wearable pieces."],
  },
  {
    number: "A.02",
    slug: "analog-photography",
    title: "Analog Photography",
    href: "/analog/analog-photography",
    details: ["Film photography projects and analog calendar archives."],
  },
  {
    number: "A.03",
    slug: "constructions-installations",
    title: "Constructions - Installations",
    details: ["Catalogue placeholder."],
  },
  {
    number: "A.04",
    slug: "drawings",
    title: "Drawings",
    details: ["Catalogue placeholder."],
  },
  {
    number: "A.05",
    slug: "silkscreen-prints",
    title: "Silkscreen Prints",
    details: ["Catalogue placeholder."],
  },
  {
    number: "A.06",
    slug: "zines",
    title: "Zines",
    details: ["Catalogue placeholder."],
  },
];

export default function AnalogPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white px-6 py-6 text-left text-black sm:px-16">
        <section className="mx-auto max-w-4xl" aria-labelledby="analog-title">
          <h1 id="analog-title" className="sr-only">
            Analog
          </h1>

          <nav
            aria-label="Analog catalogue links"
            className="mb-10 grid grid-cols-3 gap-2 sm:grid-cols-6"
          >
            {analogCatalogue.map((item) => (
              <Link
                key={`${item.number}-tile`}
                href={item.href ?? `#${item.slug}`}
                className="flex aspect-square w-full max-w-[4.5rem] items-center justify-center border border-[#0000ee] p-2 text-center text-sm leading-none text-black no-underline hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                aria-label={`Jump to ${item.title}`}
              >
                {item.number}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-12">
            {analogCatalogue.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="scroll-mt-8 grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)]"
              >
                <p className="text-sm leading-normal">{item.number}</p>
                <div>
                  <h2 className="mb-3 text-lg font-normal leading-normal underline underline-offset-4">
                    {item.href ? (
                      <Link href={item.href}>{item.title}</Link>
                    ) : (
                      item.title
                    )}
                  </h2>

                  <div className="mb-4 flex flex-col gap-1 text-base leading-normal">
                    {item.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>

                  <div
                    className="flex min-h-40 items-center justify-center border border-dashed border-black px-4 py-8 text-center text-sm leading-normal"
                    aria-label={`${item.title} photo gallery placeholder`}
                  >
                    <p>Photo gallery placeholder</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
