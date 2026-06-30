import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import { createPageMetadata, DEFAULT_DESCRIPTION, SITE_NAME } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

const infoLines = [
  { text: "An Analog to Digital Journey", bold: true, underline: true },
  { text: "Digital Portfolio", bold: true },
  { text: "Artemis Koltsida" },
  { text: "Alias: Molly, MJ22, Tipomata, StudioAltw.\u200b" },
  { text: "Dpl. Architect, NTUA\u200b" },
  {
    text: "M.A. in Information and Communication Technologies for Education, UoA, UTh, UniWA",
  },
  {
    text: "\u2729 Greek Bio Pdf",
    bold: true,
    href: "/2606Artemis_Koltsida_CV.pdf",
  },
  {
    text: "\u2729 Short Bio w/ Press Photo",
    bold: true,
    href: "/short-bio.jpg",
  },
];

export default function Home() {
  return (
    <div className="relative bg-white text-black">
      <Navigation />
      <main className="flex min-h-[42vh] items-center justify-center px-6 py-4 text-center text-black sm:px-16">
        <div className="flex max-w-3xl flex-col gap-1 text-base leading-normal">
          {infoLines.map((line) => (
            <p
              key={line.text}
              className={`${line.bold ? "font-bold" : ""} ${
                line.underline ? "underline underline-offset-2" : ""
              }`}
            >
              {line.href ? (
                <a className="underline underline-offset-2" href={line.href}>
                  {line.text}
                </a>
              ) : (
                line.text
              )}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
