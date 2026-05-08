# Seminar in Greek Rhetoric, Law, and Society

Static website for the **Seminar in Greek Rhetoric, Law, and Society** — Fall 2026, University of Florida.

Generously sponsored by Harvard University and the Institute for Strategy, Politics & Security (ISHR).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with background image and floating menu |
| `/registration` | Zoom meeting registration link |
| `/seminars` | Seminar schedule table (Presenter, Topic, Date, Video) |
| `/poster` | Downloadable seminar poster |
| `/news` | News and updates (coming soon) |

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
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

Produces a static export in the `out/` directory. Serve locally with:

```bash
bunx serve out
```

## Project Structure

```
app/
  page.tsx                Homepage
  registration/page.tsx   Registration page
  seminars/page.tsx       Seminars listing
  poster/page.tsx         Poster display & download
  news/page.tsx           News (placeholder)
  components/
    Navigation.tsx        Shared navigation bar
    Footer.tsx            Sponsor logos footer
  layout.tsx              Root layout
  globals.css             Global styles & theme
public/                   Static assets (images)
```
