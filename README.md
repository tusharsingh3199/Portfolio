# Tushar Singh, portfolio

One-page portfolio at [eureka7.xyz](https://eureka7.xyz), themed on a sky that rises as you scroll: dawn at the horizon, deep blue overhead.

## Features
- WebGL sky shader: drifting clouds, light ribbons, altitude tied to scroll.
- Cursor acts as wind and leaves a fading ripple trail that pushes the clouds.
- Optional ambient wind and pad, synthesised with the Web Audio API (off by default, no audio files).
- Reduced-motion and no-WebGL fallbacks (static sky and gradient).
- Single vertical page, no sliders.

## Stack
Next.js (App Router), React, TypeScript, plain CSS, raw WebGL. No UI kit, no animation library.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Structure
```
app/         layout, page, global CSS
components/  Sky (shader), Sound (audio), Reveal (scroll fade)
lib/data.ts  all text, links and project data. Edit content here.
public/      resume PDF and project images
```

## Project images
Put 2 or 3 images per project here (`1.png` is the large one):
```
public/assets/brain-tumor/1.png 2.png 3.png
public/assets/neural-flow/1.png 2.png 3.png
public/assets/agentic-game/1.png 2.png 3.png
```
Missing images show a frosted placeholder.

## Deploy
Push to GitHub and import the repo in Vercel.
