<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: Seminar in Greek Rhetoric, Law, and Society

Static website for an academic seminar series at the University of Florida (Fall 2026).

## Tech Stack

- **Next.js 16** with App Router, static export (`output: 'export'`)
- **React 19**, **TypeScript**, **Tailwind CSS v4**
- **Bun** package manager
- No API routes, no server components with data fetching — purely static

## Architecture

```
app/
  layout.tsx              Root layout: lang="el", SEO metadata, body wrapper + Footer
  page.tsx                Homepage: bgsite.png background, centered floating white menu panel
  globals.css             Tailwind theme tokens, body defaults
  registration/page.tsx   Zoom registration link
  talks/page.tsx          Talks table (desktop grid / mobile cards)
  poster/page.tsx         Poster image + download button
  news/page.tsx           Placeholder page
  components/
    Navigation.tsx        Shared nav bar (desktop centered links / mobile hamburger)
    Footer.tsx            Sponsor logos + UF logo on #021263 blue bg
```

## Design Rules

### Colors
- **Blue (brand)**: `#021263` — footer background, link accents, active nav
- **Dark blue (homepage bg fallback)**: `#231e59` — homepage wrapper behind bgsite.png
- **White**: inner pages background, homepage menu panel
- **Black**: body text on inner pages

### Layout
- Homepage has its own full-screen background (`bgsite.png` + `#231e59` fallback). No shared nav/footer background bleed.
- Inner pages are white with a top border-bottom nav bar and blue footer.
- Footer always has `#021263` background with white text.

### Responsive
- Mobile-first approach. Use `sm:` breakpoint for desktop adaptations.
- Navigation: hamburger on mobile, centered horizontal links on desktop.
- Seminar table: card layout on mobile, CSS grid (`1fr 2fr 1fr 1fr`) on desktop.
- All padding scales: `p-6 sm:p-16` pattern for inner pages.
- Images use `object-contain` with responsive height (`h-20 sm:h-24`).

### Homepage Menu
- White rounded panel with neon/spray glow effect via layered `box-shadow`.
- `inline-block` so it hugs the links tightly.
- Links stack vertically on mobile, horizontal on desktop.

## Key Patterns

- **Static export**: Always `bun run build` to verify. Output goes to `out/`.
- **Images**: `images.unoptimized: true` in next.config.ts. Use plain `<img>` tags (not `next/image`) for the poster (105MB). Smaller images can use `next/image` if needed.
- **Client components**: Only components using React hooks (`useState`, `usePathname`) need `"use client"`. Pages are server components.
- **Metadata**: Each page exports `metadata` with a `title` that uses the root layout's template (`%s | Seminar in Greek Rhetoric...`).
- **Greek language**: `<html lang="el">` across the site.

## Assets

- `public/bgsite.png` — homepage background image
- `public/poster2026.png` — seminar poster (large file)
- `public/harvard_logo.jpg` — sponsor logo
- `public/ISHR_logo.jpg` — sponsor logo
- `public/uf_logo.png` — University of Florida logo
- `old-website/` — original HTML/CSS source (reference only, not deployed)
