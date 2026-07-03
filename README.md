# Artemis Koltsida Portfolio

Digital portfolio for Artemis Koltsida, an architect and creative practitioner working across analog and digital media.

Live site: [mollyjones22.github.io/artemiskoltsida](https://mollyjones22.github.io/artemiskoltsida)

## Sections

| Route | Description |
|-------|-------------|
| `/` | Info page with bio links |
| `/analog` | Analog portfolio landing page |
| `/analog/3d-prints` | 3D printed objects and process notes |
| `/analog/analog-photography` | Analog photography projects |
| `/analog/constructions-installations` | Constructions, installations, and spatial projects |
| `/analog/drawings` | Drawings, paintings, and mixed-media works |
| `/analog/silkscreen-prints` | Silkscreen printing and Tipomata archive |
| `/analog/zines` | Zines and self-published printed works |
| `/digital` | Digital portfolio landing page |
| `/digital/3d-visualization-architectural-projects` | Architectural visualization projects |
| `/digital/postgraduate-research-digital-storytelling` | Postgraduate research on digital storytelling |
| `/digital/diploma-thesis-architecture` | Architecture diploma thesis |
| `/digital/film-editing` | Film, editing, and production projects |
| `/digital/how-to-be-curious` | Video series archive |
| `/digital/web-design` | Web and visual identity projects |
| `/digital/digital-photography` | Digital photography projects |
| `/nisos-afti` | Standalone Nisos Afti project page |

## Tech Stack

- [Next.js 16](https://nextjs.org) with App Router and static export
- [React 19](https://react.dev) and [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Bun](https://bun.sh) package manager

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
bun run build
```

The production build is exported to the `out/` directory for static hosting.

## Project Structure

```text
app/
  page.tsx                    Info page
  analog/                     Analog portfolio pages and project data
  digital/                    Digital portfolio pages and project data
  nisos-afti/                 Standalone project page
  components/                 Shared navigation, footer, audio, and galleries
  layout.tsx                  Root layout and metadata
  globals.css                 Global styles
public/                       Static assets and project images
```
