import type { Metadata } from "next";
import Link from "next/link";

const islandTitle = "\u039d\u03ae\u03c3\u03bf\u03c2 \u0391\u03c5\u03c4\u03af";

const mapLinks = [
  {
    label: "\u0394\u03a1\u0391\u039a\u039f\u039a\u0391\u0396\u0391",
    href: "/nisos-afti/delta",
    className: "left-[6.5%] top-[16.1%] h-[2.6%] w-[25.5%]",
  },
  {
    label: "\u03a0\u03a1\u039f\u03a6\u0397\u03a4\u0397\u03a3 \u0397\u039b\u0399\u0391\u03a3",
    href: "/nisos-afti/eta",
    className: "left-[36.5%] top-[26.6%] h-[2.4%] w-[29%]",
  },
  {
    label: "\u039b\u0399\u039c\u039d\u0397 \u039b\u0391\u0392\u03a5\u03a1\u0399\u039d\u0398\u039f\u03a3",
    href: "/nisos-afti/mu",
    className: "left-[54.5%] top-[42.2%] h-[2.4%] w-[31.5%]",
  },
  {
    label: "\u03a0\u0391\u039b\u0399\u039f \u03a7\u03a9\u03a1\u0399\u039f",
    href: "/nisos-afti/pi",
    className: "left-[32.5%] top-[51%] h-[2.5%] w-[20.5%]",
  },
  {
    label: "\u03a7\u03a9\u03a1\u0399\u039f",
    href: "/nisos-afti/chi",
    className: "left-[61%] top-[56.8%] h-[2.5%] w-[11%]",
  },
  {
    label: "\u039a\u039f\u03a1\u03a5\u03a6\u0397 \u039b\u0395\u039d\u03a4\u0397\u03a3",
    href: "/nisos-afti/kappa",
    className: "left-[27%] top-[66.1%] h-[2.5%] w-[26%]",
  },
];

export const metadata: Metadata = {
  title: `Map | ${islandTitle}`,
  description: "Interactive island map for the Nisos Afti archive.",
};

export default function NisosAftiMapPage() {
  return (
    <main className="min-h-screen bg-white p-2 text-[#202122] sm:p-4">
      <h1 className="sr-only">Interactive map of {islandTitle}</h1>

      <Link
        href="/nisos-afti"
        className="fixed left-3 top-3 z-20 bg-white/90 px-2 py-1 text-sm text-[#0645ad] underline sm:left-4 sm:top-4"
      >
        Back to {islandTitle}
      </Link>

      <figure className="relative mx-auto w-fit max-w-full">
        <img
          src="/Nisos%20Afti/afti-island-map.png"
          alt={`${islandTitle} island map`}
          className="block h-auto max-h-[calc(100vh-1rem)] max-w-full object-contain sm:max-h-[calc(100vh-2rem)]"
        />

        {mapLinks.map((mapLink) => (
          <Link
            key={mapLink.href}
            href={mapLink.href}
            className={`group absolute block cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0645ad] ${mapLink.className}`}
            aria-label={`Open ${mapLink.label} project`}
            title={mapLink.label}
          >
            <span className="sr-only">{mapLink.label}</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 border-b border-[#0645ad] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
            />
          </Link>
        ))}
      </figure>
    </main>
  );
}
