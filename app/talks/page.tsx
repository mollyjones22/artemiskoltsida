import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "info",
  description:
    "Information about Artemis Koltsida, her analog to digital portfolio, education, aliases, and bio documents.",
  path: "/talks",
});

const infoLines = [
  { text: "An Analog to Digital Journey", bold: true },
  { text: "Digital Portfolio", bold: true },
  { text: "Artemis Koltsida" },
  { text: "Alias: Molly, MJ22, Tipomata, StudioAltw.\u200b" },
  { text: "Dpl. Architect, NTUA\u200b" },
  {
    text: "M.A. in Information and Communication Technologies for Education, UoA, UTh, UniWA",
  },
  { text: "\u2729 Greek Bio Pdf", bold: true },
  { text: "\u2729 Short Bio w/ Press Photo", bold: true },
];

export default function InfoPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen items-center justify-center px-6 py-16 text-center text-black sm:px-16">
        <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed sm:text-lg">
          {infoLines.map((line) => (
            <p key={line.text} className={line.bold ? "font-bold" : undefined}>
              {line.text}
            </p>
          ))}
        </div>
      </main>
    </>
  );
}
