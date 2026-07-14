"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const analogLinks = [
  { href: "/analog/3d-prints", label: "3D Prints" },
  { href: "/analog/analog-photography", label: "Analog Photography" },
  {
    href: "/analog/constructions-installations",
    label: "Constructions - Installations",
  },
  { href: "/analog/drawings", label: "Drawings" },
  { href: "/analog/silkscreen-prints", label: "Silkscreen Prints" },
  { href: "/analog/zines", label: "Zines" },
  { href: "/analog/fun", label: "Fun", italic: true },
];

const digitalLinks = [
  {
    href: "/digital/3d-visualization-architectural-projects",
    label: "3D Visualisation - Architectural Projects",
  },
  {
    href: "/digital/postgraduate-research-digital-storytelling",
    label: "Postgraduate Research: Digital Storytelling",
  },
  {
    href: "/digital/diploma-thesis-architecture",
    label: "Diploma Thesis (Architecture)",
  },
  { href: "/digital/film-editing", label: "Film & Editing" },
  {
    href: "/digital/how-to-be-curious",
    label: "How to Be Curious",
    italic: true,
  },
  { href: "/digital/web-design", label: "Web Design" },
  { href: "/digital/digital-photography", label: "Digital Photography" },
];

interface NavigationProps {
  variant?: "light" | "dark";
}

export default function Navigation({ variant = "light" }: NavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<"analog" | "digital" | null>(
    pathname.startsWith("/analog")
      ? "analog"
      : pathname.startsWith("/digital")
        ? "digital"
        : null,
  );
  const nisosAftiLabel = "\u039d\u03ae\u03c3\u03bf\u03c2 \u0391\u03c5\u03c4\u03af";

  const isDark = variant === "dark";
  const borderColor = isDark ? "border-white/20" : "border-gray-200";
  const burgerBg = "bg-[#0000ee]";
  const panelBg = isDark ? "bg-[#231e59]" : "bg-white";
  const hoverBg = isDark ? "hover:bg-white/10" : "hover:bg-blue-50";
  const activeBg = isDark ? "bg-white/10" : "bg-transparent";
  const underlineColor = isDark ? "bg-white" : "bg-[#0000ee]";
  const isSubmenuPage =
    pathname.startsWith("/analog/") || pathname.startsWith("/digital/");
  const compactMobileHeader = isSubmenuPage || open;
  const mobileSectionButton = `w-full rounded px-3 py-2 text-center text-base no-underline underline-offset-4 transition-colors duration-200 hover:underline ${hoverBg}`;
  const mobileSubmenuLink = `w-full rounded px-3 py-1.5 text-center text-sm no-underline underline-offset-4 transition-colors duration-200 hover:underline sm:text-base ${hoverBg}`;

  function toggleMenu() {
    setOpen((current) => {
      const next = !current;
      if (next) {
        setOpenSection(
          pathname.startsWith("/analog")
            ? "analog"
            : pathname.startsWith("/digital")
              ? "digital"
              : null,
        );
      }
      return next;
    });
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div
      className={`sticky top-0 z-40 ${
        isDark ? "bg-[#231e59]/85 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-6xl items-center px-3 sm:flex-col sm:gap-3 sm:px-4 sm:py-4 ${
          compactMobileHeader
            ? "flex-row justify-between gap-2 py-2"
            : "flex-col gap-3 py-3"
        }`}
      >
        <Link
          href="/"
          className={`flex items-center justify-center sm:hidden ${
            compactMobileHeader ? "h-10 w-10" : "h-20 w-20"
          }`}
        >
          <img
            src="/artlogo.png"
            alt="Artemis Koltsida logo"
            className="block h-full w-full object-contain"
          />
        </Link>

        <Link
          href="/"
          className={`text-center font-semibold no-underline underline-offset-4 hover:underline sm:text-lg sm:tracking-[0.18em] md:text-xl ${
            compactMobileHeader
              ? "min-w-0 flex-1 text-sm tracking-[0.08em]"
              : "text-base tracking-[0.18em]"
          }`}
        >
          {"\u263c artemis koltsida \u263e"}
        </Link>

        <Link
          href="/"
          className="absolute right-[calc(50%+9rem)] top-3 hidden h-20 w-20 items-center justify-center no-underline sm:flex md:right-[calc(50%+11rem)] md:top-4"
          aria-label="artemis koltsida home"
        >
          <img
            src="/artlogo.png"
            alt="Artemis Koltsida logo"
            className="block h-full w-full object-contain"
          />
        </Link>

        <Link
          href="/nisos-afti"
          target="_blank"
          rel="noreferrer"
          className="nisos-afti-tab absolute left-[calc(50%+9rem)] top-3 hidden h-20 w-20 items-center justify-center overflow-hidden p-2 text-center text-xs leading-tight no-underline sm:flex md:left-[calc(50%+11rem)] md:top-4"
          aria-label={nisosAftiLabel}
        >
          <img
            src="/afti island 1-1.svg"
            alt=""
            className="absolute left-1/2 top-1/2 z-0 block h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <span className="nisos-afti-label relative z-10 text-[#0000ee]">
            {nisosAftiLabel}
          </span>
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
                  className="w-full px-3 py-1 text-center text-base text-[#0000ee] no-underline underline-offset-4 hover:underline"
                >
                  {link.italic ? <span className="italic">{link.label}</span> : link.label}
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
                  {link.italic ? <span className="italic">{link.label}</span> : link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className={`flex shrink-0 flex-col items-center justify-center gap-[5px] md:hidden ${
            compactMobileHeader ? "p-1" : "p-2"
          }`}
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

        <Link
          href="/nisos-afti"
          target="_blank"
          rel="noreferrer"
          className={`nisos-afti-tab relative flex items-center justify-center overflow-hidden text-center leading-tight no-underline sm:hidden ${
            compactMobileHeader ? "h-10 w-10 p-1 text-[0.55rem]" : "h-20 w-20 p-2 text-xs"
          }`}
          aria-label={nisosAftiLabel}
        >
          <img
            src="/afti island 1-1.svg"
            alt=""
            className="absolute left-1/2 top-1/2 z-0 block h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <span className="nisos-afti-label relative z-10 text-[#0000ee]">
            {nisosAftiLabel}
          </span>
        </Link>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          className={`absolute right-0 top-full z-50 max-h-[calc(100dvh-3.5rem)] w-full overflow-y-auto overscroll-contain ${panelBg} border-t ${borderColor} shadow-lg md:hidden`}
        >
          <div className="flex flex-col items-center gap-1 px-3 py-2 sm:px-4 sm:py-3">
            <button
              type="button"
              onClick={() =>
                setOpenSection((current) => (current === "analog" ? null : "analog"))
              }
              className={mobileSectionButton}
              aria-expanded={openSection === "analog"}
            >
              Analog {"\u25be"}
            </button>
            {openSection === "analog" && (
              <>
                {analogLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`text-[#0000ee] ${mobileSubmenuLink}`}
                  >
                    {link.italic ? <span className="italic">{link.label}</span> : link.label}
                  </Link>
                ))}
              </>
            )}
            <Link
              href="/"
              onClick={closeMenu}
              className={`w-full rounded px-3 py-2 text-center text-base no-underline underline-offset-4 transition-colors duration-200 hover:underline sm:text-lg ${
                pathname === "/" ? `font-semibold ${activeBg}` : hoverBg
              }`}
            >
              info
            </Link>
            <button
              type="button"
              onClick={() =>
                setOpenSection((current) => (current === "digital" ? null : "digital"))
              }
              className={mobileSectionButton}
              aria-expanded={openSection === "digital"}
            >
              Digital {"\u25be"}
            </button>
            {openSection === "digital" && (
              <>
                {digitalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={mobileSubmenuLink}
                  >
                    {link.italic ? <span className="italic">{link.label}</span> : link.label}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
