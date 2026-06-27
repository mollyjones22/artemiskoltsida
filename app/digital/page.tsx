import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Digital",
  description:
    "Digital portfolio projects by Artemis Koltsida, including visualization, research, film, web design, and photography.",
  path: "/digital",
});

const digitalCatalogue = [
  {
    number: "D.01",
    slug: "3d-visualization-architectural-projects",
    title: "3D Visualization / Architectural Projects",
  },
  {
    number: "D.02",
    slug: "postgraduate-research-digital-storytelling",
    title: "Postgraduate Research: Digital Storytelling",
  },
  {
    number: "D.03",
    slug: "diploma-thesis-architecture",
    title: "Diploma Thesis (Architecture)",
  },
  {
    number: "D.04",
    slug: "film-editing",
    title: "Film & Editing",
  },
  {
    number: "D.05",
    slug: "web-design",
    title: "Web Design",
  },
  {
    number: "D.06",
    slug: "digital-photography",
    title: "Digital Photography",
  },
];

export default function DigitalPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white px-6 py-6 text-left text-black sm:px-16">
        <section className="mx-auto max-w-4xl" aria-labelledby="digital-title">
          <h1 id="digital-title" className="sr-only">
            Digital
          </h1>

          <nav
            aria-label="Digital catalogue links"
            className="mb-10 grid grid-cols-3 gap-2 sm:grid-cols-6"
          >
            {digitalCatalogue.map((item) => (
              <Link
                key={`${item.number}-tile`}
                href={`#${item.slug}`}
                className="flex aspect-square w-full max-w-[4.5rem] items-center justify-center border border-[#0000ee] p-2 text-center text-sm leading-none text-black no-underline hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                aria-label={`Jump to ${item.title}`}
              >
                {item.number}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-12">
            {digitalCatalogue.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="scroll-mt-8 grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)]"
              >
                <p className="text-sm leading-normal">{item.number}</p>
                <div>
                  <h2 className="mb-3 text-lg font-normal leading-normal underline underline-offset-4">
                    {item.title}
                  </h2>

                  <div className="mb-4 flex flex-col gap-1 text-base leading-normal">
                    <p>Project Name (Year)</p>
                    <p>Project Description</p>
                    <p>Medias Used</p>
                    <p>*Link</p>
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
