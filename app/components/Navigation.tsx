"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const analogLinks = [
  { href: "/analog#3d-prints", label: "3D Prints" },
  { href: "/analog#analog-photography", label: "Analog Photography" },
  {
    href: "/analog#constructions-installations",
    label: "Constructions - Installations",
  },
  { href: "/analog#drawings", label: "Drawings" },
  { href: "/analog#silkscreen-prints", label: "Silkscreen Prints" },
  { href: "/analog#zines", label: "Zines" },
];

const digitalLinks = [
  {
    href: "/digital#3d-visualization-architectural-projects",
    label: "3D Visualization / Architectural Projects",
  },
  {
    href: "/digital#postgraduate-research-digital-storytelling",
    label: "Postgraduate Research: Digital Storytelling",
  },
  {
    href: "/digital#diploma-thesis-architecture",
    label: "Diploma Thesis (Architecture)",
  },
  { href: "/digital#film-editing", label: "Film & Editing" },
  { href: "/digital#web-design", label: "Web Design" },
  { href: "/digital#digital-photography", label: "Digital Photography" },
];

interface NavigationProps {
  variant?: "light" | "dark";
}

export default function Navigation({ variant = "light" }: NavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";
  const borderColor = isDark ? "border-white/20" : "border-gray-200";
  const burgerBg = isDark ? "bg-white" : "bg-black";
  const panelBg = isDark ? "bg-[#231e59]" : "bg-white";
  const hoverBg = isDark ? "hover:bg-white/10" : "hover:bg-blue-50";
  const activeBg = isDark ? "bg-white/10" : "bg-transparent";
  const underlineColor = isDark ? "bg-white" : "bg-[#0000ee]";

  return (
    <div
      className={`sticky top-0 z-40 ${
        isDark ? "bg-[#231e59]/85 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 px-3 py-3 sm:px-4 sm:py-4">
        <Link
          href="/"
          className="text-center text-base font-semibold tracking-[0.18em] no-underline underline-offset-4 hover:underline sm:text-lg md:text-xl"
        >
          {"\u263c artemis koltsida \u263e"}
        </Link>

        <Link
          href="/nisos-afti"
          className="nisos-afti-tab absolute left-[calc(50%+9rem)] top-3 hidden h-20 w-20 items-center justify-center border border-[#0000ee] bg-white p-2 text-center text-xs leading-tight no-underline sm:flex md:left-[calc(50%+11rem)] md:top-4"
          aria-label={"Νήσος Αυτί"}
        >
          {"Νήσος Αυτί"}
        </Link>

        {/* Inline links on desktop */}
        <nav className="hidden items-center justify-center gap-4 md:flex">
          <div className="group relative">
            <Link
              href="/analog"
              className={`block rounded-md px-1 py-2 text-base no-underline underline-offset-4 transition-colors duration-200 hover:underline lg:text-lg ${
                pathname === "/analog" ? `font-semibold ${activeBg}` : hoverBg
              }`}
            >
              Analog {"\u25be"}
            </Link>
            <div className="absolute left-1/2 top-full z-50 hidden w-56 -translate-x-1/2 flex-col items-center bg-white py-2 shadow-sm group-hover:flex group-focus-within:flex">
              {analogLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-full px-3 py-1 text-center text-base no-underline underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/"
            className={`relative rounded-md px-1 py-2 text-base no-underline underline-offset-4 transition-colors duration-200 hover:underline lg:text-lg ${
              pathname === "/" ? `font-semibold ${activeBg}` : hoverBg
            }`}
          >
            info
            {pathname === "/" && (
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-[2px] ${underlineColor}`}
              />
            )}
          </Link>

          <div className="group relative">
            <Link
              href="/digital"
              className={`block rounded-md px-1 py-2 text-base no-underline underline-offset-4 transition-colors duration-200 hover:underline lg:text-lg ${
                pathname === "/digital" ? `font-semibold ${activeBg}` : hoverBg
              }`}
            >
              Digital {"\u25be"}
            </Link>
            <div className="absolute left-1/2 top-full z-50 hidden w-72 -translate-x-1/2 flex-col items-center bg-white py-2 shadow-sm group-hover:flex group-focus-within:flex">
              {digitalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-full px-3 py-1 text-center text-base no-underline underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex shrink-0 flex-col items-center justify-center gap-[5px] p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-6 ${burgerBg} transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 ${burgerBg} transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 ${burgerBg} transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          className={`absolute right-0 top-full z-50 w-full ${panelBg} border-t ${borderColor} shadow-lg md:hidden`}
        >
          <div className="flex flex-col items-center gap-1 px-3 py-3 sm:px-4 sm:py-4">
            <Link
              href="/analog"
              onClick={() => setOpen(false)}
              className={`w-full rounded px-3 py-2 text-center text-base no-underline underline-offset-4 transition-colors duration-200 hover:underline ${hoverBg}`}
            >
              Analog {"\u25be"}
            </Link>
            {analogLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`w-full rounded px-3 py-1 text-center text-sm no-underline underline-offset-4 transition-colors duration-200 hover:underline sm:text-base ${hoverBg}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`w-full rounded px-3 py-2 text-center text-base no-underline underline-offset-4 transition-colors duration-200 hover:underline sm:text-lg ${
                pathname === "/" ? `font-semibold ${activeBg}` : hoverBg
              }`}
            >
              info
            </Link>
            <Link
              href="/digital"
              onClick={() => setOpen(false)}
              className={`w-full rounded px-3 py-2 text-center text-base no-underline underline-offset-4 transition-colors duration-200 hover:underline sm:text-lg ${
                pathname === "/digital" ? `font-semibold ${activeBg}` : hoverBg
              }`}
            >
              Digital {"\u25be"}
            </Link>
            {digitalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`w-full rounded px-3 py-1 text-center text-sm no-underline underline-offset-4 transition-colors duration-200 hover:underline sm:text-base ${hoverBg}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
