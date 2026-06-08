# SuperSearch — marketing site

A futuristic landing page for **SuperSearch**, the intent-driven runtime for macOS —
blending the cinematic dark UI of Raycast with the premium sci-fi style of Orvantia AI.

**Live:** https://archdex-art.github.io/supersearch-site/

> Search beyond keywords. Intent. Plan. Execute.

Deployed automatically to GitHub Pages on every push to `main`
(see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS 3** — custom dark design system (matte black → deep navy → graphite, with
  electric-blue / neon-cyan / crimson / violet accent glows)
- **Framer Motion 12** — scroll reveals, parallax, layered depth, cursor-reactive glow

## Run

```bash
npm install
npm run dev      # http://localhost:5173 (or the port your launcher assigns)
npm run build    # type-check + production build
npm run preview
```

## What's inside

| Section | Highlights |
|---|---|
| **Hero** | Floating AI command bar with live typing, parallax 3D tilt, emerging result cards, constellation particle field |
| **⌘K Command Palette** | Raycast-style overlay — fuzzy filter, arrow-key nav, glassmorphism, keyboard hints |
| **Capabilities** | Bento grid, cursor-reactive radial glow, per-card accent lighting |
| **Runtime** | Real-time query decomposition — animated source-retrieval bars + grounded answer card |
| **How it thinks** | Four-move reasoning timeline with an animated gradient connector |
| **Stats** | Glowing metrics with count-up animation |
| **Ecosystem** | Rotating orbital connector diagram around a glowing search core |
| **Demo** | Tabbed, layered browser mockups (Ask / Code / Web) with animated content swaps |
| **CTA + Footer** | Immersive gradient lighting, ambient particles |

## Design system

Defined in [`tailwind.config.js`](tailwind.config.js) and [`src/index.css`](src/index.css):
custom palette, `.glass` / `.glass-strong` panels, `.btn-primary` holographic buttons,
`.metal` / `.glow-text` / `.ember-text` display gradients, grid textures, film grain,
scanlines, and a custom cursor. Respects `prefers-reduced-motion`.
