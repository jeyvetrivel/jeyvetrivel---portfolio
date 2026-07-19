# Jeyvetrivel R — Portfolio

A premium, cinematic personal portfolio for Jeyvetrivel R, a Digital Marketing
Professional (SEO, Technical SEO, Content Marketing, Google Ads, Performance
Marketing). Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. The `npm run build` command
requires internet access on first run, since `next/font/google` downloads
the Anton and Manrope typefaces at build time.

## Project structure

```
app/                Route, layout, global styles, metadata & JSON-LD
components/          Section components (Hero, About, Skills, Projects, ...)
components/ui/       Shared primitives (Reveal, SectionHeading, AnimatedCounter)
lib/data.ts          All content: skills, projects, experience, education, contact
public/               Placeholder SVG images (profile, project thumbnails, OG image)
```

## Replacing placeholders

- **Profile portrait** — replace `public/profile-placeholder.svg` with a real
  photo (e.g. `profile.jpg`) and update the `src` in `components/About.tsx`.
- **Project thumbnails** — replace `public/project-1.svg` ... `project-11.svg`
  with real screenshots, keeping the same filenames, or update the `src` in
  `components/Projects.tsx`.
- **GitHub profile** — `lib/data.ts` → `contactInfo.github` currently points to
  the generic `https://github.com/` as a clearly labeled placeholder. Update it
  once the real profile URL is available.
- **Phone number** — `lib/data.ts` → `contactInfo.phone` is a placeholder;
  update with the real number.

## Editing content

All text content (skills, projects, experience, education, certifications,
contact details) lives in `lib/data.ts` — edit there rather than in the
components.

## Deployment

The project is a standard Next.js app and deploys as-is to Vercel, Netlify,
or any Node.js host:

```bash
npm run build
npm run start
```
