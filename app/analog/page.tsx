import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Analog",
  description:
    "Analog portfolio projects by Artemis Koltsida, including physical art projects and media notes.",
  path: "/analog",
});

const threeDPrintProjects = [
  {
    number: "A.01.06",
    title: "Spatha Dima",
    year: "2025",
    gallery: "1/1",
    details: [
      "3d printed charm",
      "Dima's sword (digital drawing)",
      "Scanned with phone camera",
      "Converted into dwg file with online free converting tools",
      "Created with AutoCAD 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, Rosa3D PLA Magic Silk - 1.75mm 300g Lagoon",
    ],
  },
  {
    number: "A.01.05",
    title: "flokXistenZ [ZELA004] by FLÖKOSH",
    year: "2024",
    gallery: "1/3",
    details: [
      "3d print included in ZELA004 TAPE release",
      "Flokxy's sketch (marker on paper)",
      "Scanned with phone camera",
      "Converted into dwg file with online free converting tools",
      "Created with AutoCAD 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, PLA copper",
      "༒︎",
      "Cassette tape and digital",
      "Collection of Flokxy's tracks since 2016 - 2024.",
      "Limited edition of 25",
      "C60",
      "Including printed insert, 3D print + CD-R",
      "༒︎",
      "digital vandalism",
      "★zelaarchives.bandcamp.com/album/flokxistenz-zela004",
    ],
  },
  {
    number: "A.01.04",
    title: "Rofos Knit Stencil",
    year: "2024",
    gallery: "1/2",
    details: [
      "Molly's Fat Flower sketch (marker on paper)",
      "Scanned with phone camera",
      "Converted into dwg file with online free converting tools",
      "Created with AutoCAD 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, PLA White",
    ],
  },
  {
    number: "A.01.03",
    title: "Stencil for Tipomata Airbrush",
    year: "2023",
    gallery: "1/2",
    details: [
      "Drawings of Flokosh translated into stencil",
      "Pen on paper",
      "Scanned with phone camera",
      "Converted into dwg file with online free converting tools",
      "Created with AutoCAD 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, PLA White",
    ],
  },
  {
    number: "A.01.02",
    title: "Tripialouda",
    year: "2023",
    gallery: "1/5",
    details: [
      "3d printed object as a festival prop.",
      "Design: Flokosh, Koketamc, Molly",
      "Printed by Tipomata",
      "Created with Photoshop 2019, Autocad 2022, Rhino 6, Cura Slicer",
      "Printed with Ender 3 Pro, white PLA",
      "Colored with MONTANA COLORS waterbased SPRAY",
    ],
  },
  {
    number: "A.01.01",
    title: "SeaCreatures Headpiece",
    year: "2023",
    gallery: "photo gallery",
    details: [
      "3D printed custom made headpiece for an extrasuperfancyqueerwedding.",
      "Created with Nomad Sculpt, Rhino 6, Meshmixer, Cura Slicer",
      "Printed with Ender 3 Pro, PLA glow in the dark blue, PLA-1.75-Copper",
      "Attached to an existing headband, star-net supported by threads, all assembled with hot glue.",
    ],
  },
];

export default function AnalogPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white px-6 py-6 text-left text-black sm:px-16">
        <div className="mx-auto max-w-4xl">
          <section
            id="3d-prints"
            className="pt-4"
            aria-labelledby="three-d-prints-title"
          >
            <h2
              id="three-d-prints-title"
              className="sr-only"
            >
              3D Prints
            </h2>

            <div className="flex flex-col gap-10">
              {threeDPrintProjects.map((project) => (
                <article
                  key={project.number}
                  className="grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)]"
                >
                  <p className="text-sm leading-normal">{project.number}</p>
                  <div>
                    <h3 className="mb-3 text-lg font-normal leading-normal underline underline-offset-4">
                      {project.title} ({project.year})
                    </h3>

                    <div className="mb-4 flex flex-col gap-1 text-base leading-normal">
                      {project.details.map((detail, index) => (
                        <p key={`${project.number}-${index}`}>{detail}</p>
                      ))}
                    </div>

                    <div
                      className="flex min-h-40 items-center justify-center border border-dashed border-black px-4 py-8 text-center text-sm leading-normal"
                      aria-label={`${project.title} photo gallery placeholder`}
                    >
                      <p>
                        Photo gallery placeholder
                        <br />
                        {project.gallery}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
