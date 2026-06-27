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
  "An Analog to Digital Journey",
  "Digital Portfolio",
  "Artemis Koltsida",
  "Alias: Molly, MJ22, Tipomata, StudioAltw.​",
  "Dpl. Architect, NTUA​",
  "M.A. in Information and Communication Technologies for Education, UoA, UTh, UniWA",
  "✩ Greek Bio Pdf",
  "✩ Short Bio w/ Press Photo",
];

export default function InfoPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen items-center justify-center px-6 py-16 text-center text-black sm:px-16">
        <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed sm:text-lg">
          {infoLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </main>
    </>
  );
}
