import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { createPageMetadata } from "../seo";

const installationProjects = [
  {
    number: "A.03.03",
    slug: "tom",
    title: "Tom",
    year: "2022, 2023",
    gallery: "1/14",
    imageReference: "001_Thom",
    details: [
      "PVC Zip Tie Geodesic Dome",
      "Used for the djbooth at diy festival",
      "Design: Extended Kavlona Arch Team",
      "Construction: Extended Kavlona Arch Team",
      "Tent: D.Tzatzarakis and Kavlona Arch Team",
    ],
    links: [
      {
        label: "✮www.facebook.com/tzatzarakis.tentes",
        href: "https://www.facebook.com/tzatzarakis.tentes/?locale=el_GR",
      },
    ],
  },
  {
    number: "A.03.02",
    slug: "athens-conservatorium-megaron",
    title: "6 7/6 Δραματική Σχολή Ωδείου Αθηνών στο Μέγαρο",
    subtitle: "Athens Conservatorium Megaron & The Athens Concert Hall",
    year: "2018",
    gallery: "1/4",
    imageReference: "Victor_01",
    details: [
      "Design and production of Set and Costumes",
      "for the play “All the Theatre (in Five Scenes and Ten Variations),",
      "Victor or Power to the Children”",
      "as part of the course Transformations of the Theatrical Space",
      "with the Drama School of the Athens Conservatoire",
      "at the Athens Concert Hall.",
    ],
  },
  {
    number: "A.03.01",
    slug: "distorted-desk",
    title: "Distorted Desk",
    year: "2017",
    gallery: "photo gallery",
    imageReference: "001_Distorted Desk",
    details: [
      "LabNTUA Arch School Project (5th Semester)",
      "Reworked school equipment with aerial yoga fabrics, transformed into a hammock.",
      "Design: Koltsida A., Mitsikostas D., Papadopoulou E.",
      "Supervisors: Grigoriadis I., Gyparakis G., Ntaflos K.",
      "Created at ArchNTUA Lab",
    ],
  },
];

type InstallationProject = {
  number: string;
  slug: string;
  title: string;
  subtitle?: string;
  year: string;
  gallery: string;
  imageReference: string;
  details: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

type AnalogCatalogueItem = {
  number: string;
  slug: string;
  title: string;
  href?: string;
  details: string[];
  projects?: InstallationProject[];
};

export const metadata: Metadata = createPageMetadata({
  title: "Analog",
  description:
    "Analog portfolio projects by Artemis Koltsida, including physical art projects and media notes.",
  path: "/analog",
});

const analogCatalogue: AnalogCatalogueItem[] = [
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
    details: ["Installations, scenography, and built spatial experiments."],
    projects: installationProjects,
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

                  {item.projects ? (
                    <div className="flex flex-col gap-10">
                      <nav
                        aria-label={`${item.title} project links`}
                        className="grid grid-cols-3 gap-2 sm:grid-cols-6"
                      >
                        {item.projects.map((project) => (
                          <Link
                            key={`${project.number}-tile`}
                            href={`#${project.slug}`}
                            className="flex aspect-square w-full max-w-[4.5rem] items-center justify-center border border-[#0000ee] p-2 text-center text-sm leading-none text-black no-underline hover:text-[#0000ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ee]"
                            aria-label={`Jump to ${project.title}`}
                          >
                            {project.number}
                          </Link>
                        ))}
                      </nav>

                      <div className="flex flex-col gap-12">
                        {item.projects.map((project) => (
                          <article
                            key={project.number}
                            id={project.slug}
                            className="scroll-mt-8 grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)]"
                          >
                            <p className="text-sm leading-normal">
                              {project.number}
                            </p>
                            <div>
                              <h3 className="mb-3 text-lg font-normal leading-normal underline underline-offset-4">
                                {project.title} ({project.year})
                              </h3>
                              {project.subtitle ? (
                                <p className="mb-3 text-base leading-normal">
                                  {project.subtitle}
                                </p>
                              ) : null}

                              <div className="mb-4 flex flex-col gap-1 text-base leading-normal">
                                {project.details.map((detail) => (
                                  <p key={detail}>{detail}</p>
                                ))}
                                {project.links
                                  ? project.links.map((link) => (
                                      <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        {link.label}
                                      </a>
                                    ))
                                  : null}
                              </div>

                              <div
                                className="flex min-h-40 items-center justify-center border border-dashed border-black px-4 py-8 text-center text-sm leading-normal"
                                aria-label={`${project.title} photo gallery placeholder`}
                              >
                                <p>
                                  Photo gallery placeholder
                                  <br />
                                  {project.imageReference}
                                  <br />
                                  {project.gallery}
                                </p>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex min-h-40 items-center justify-center border border-dashed border-black px-4 py-8 text-center text-sm leading-normal"
                      aria-label={`${item.title} photo gallery placeholder`}
                    >
                      <p>Photo gallery placeholder</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
