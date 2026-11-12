# Tushar Singh — Portfolio

A responsive, single-page portfolio for [eureka7.xyz](https://eureka7.xyz). The visual direction pairs a calm pale-sky palette with an original sky-rider illustration, technical typography, and restrained motion.

## Features

- Fixed, transparent, full-width navigation with links to each page section.
- One-page vertical layout: hero, about, toolkit, projects, experience, milestones, skills, and contact.
- Responsive project panels with original SVG cover illustrations and links to source repositories.
- Scroll-triggered section reveals using the browser's `IntersectionObserver`.
- Reduced-motion support for visitors who prefer less animation.
- Résumé download and direct email and social links.
- No UI framework, animation library, analytics, or required environment variables.

## Technology

- **Next.js 15** with the App Router
- **React 19** and **TypeScript**
- Custom CSS and inline SVG illustrations
- Fonts loaded with `next/font/google` (Chakra Petch and JetBrains Mono)

## Getting started

### Requirements

- Node.js 18.18 or newer
- npm

### Install and run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

The production server runs at [http://localhost:3000](http://localhost:3000) by default.

## Project scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create and type-check the production build. |
| `npm start` | Serve the production build; run `npm run build` first. |

There are currently no separate lint or test scripts in `package.json`.

## Repository structure

```text
app/
  globals.css       Global styles, responsive layout, and reduced-motion rules
  layout.tsx        Root layout, fonts, and site metadata
  page.tsx          Portfolio sections and page composition
components/
  Reveal.tsx        Scroll-triggered reveal wrapper
lib/
  data.ts           Portfolio copy, skills, project data, and external links
public/
  Tushar-Singh-Resume.pdf
  assets/
    brain-tumor/cover.svg
    neural-flow/cover.svg
    agentic-game/cover.svg
```

## Updating portfolio content

Most of the portfolio content is centralized in [`lib/data.ts`](./lib/data.ts). Update the exported data there to change:

- Social profiles and contact email
- Technology groups and skills
- Project descriptions, highlights, dates, technologies, and repository URLs
- Freelance experience and achievements

The page structure and section copy are in [`app/page.tsx`](./app/page.tsx). Update the title and description in [`app/layout.tsx`](./app/layout.tsx) when changing the site's metadata.

### Résumé

Replace `public/Tushar-Singh-Resume.pdf` to update the file served by the résumé download link. Files in `public/` are publicly accessible, so make sure the PDF contains only information you intend to publish.

### Project artwork

The project panels currently use original SVG illustrations:

```text
public/assets/brain-tumor/cover.svg
public/assets/neural-flow/cover.svg
public/assets/agentic-game/cover.svg
```

To use project screenshots, add optimized images under the matching `public/assets/<project>/` directory and update the corresponding image path and alt text in `app/page.tsx`. Keep source images suitable for mobile as well as desktop screens.

## Projects featured

- **3D Brain Tumor Segmentation** — 3D U-Net and Swin-UNETR segmentation of BraTS 2019 MRI, with a FastAPI service and Streamlit interface. [Source repository](https://github.com/tusharsingh3199/3D-Brain-Tumor-Segmentation)
- **Neural Flow Dynamics** — A weather forecasting and disaster decision-support research platform with provenance-tracked data pipelines. [Source repository](https://github.com/tusharsingh3199/Neural-Flow-Dynamics)
- **Agentic-GameAI** — A modular framework for LLM agents playing games, with shared tooling for execution, logs, and visualization. [Source repository](https://github.com/tusharsingh3199/Agentic-Game-AI)

