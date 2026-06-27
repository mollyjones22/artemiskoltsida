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
  "An Analog to Digital Journey",
  "Digital Portfolio",
  "Artemis Koltsida",
  "Alias: Molly, MJ22, Tipomata, StudioAltw.\u200b",
  "Dpl. Architect, NTUA\u200b",
  "M.A. in Information and Communication Technologies for Education, UoA, UTh, UniWA",
  "\u2729 Greek Bio Pdf",
  "\u2729 Short Bio w/ Press Photo",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      <Navigation />
      <main className="flex min-h-screen items-center justify-center px-6 py-16 text-center text-[#800080] sm:px-16">
        <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed sm:text-lg">
          {infoLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
