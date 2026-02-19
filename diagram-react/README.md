# Diagram – React TypeScript

React + TypeScript version of the [Diagram](https://www.figma.com/design/DtnBhF5V0w9GXZWVN68zB9/Exploration) landing page (converted from the vanilla HTML/CSS/JS in `../diagram.com`).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (with custom theme matching the Figma design)
- Assets are served from `public/assets/` (copied from `diagram.com/assets`)

## Commands

```bash
npm install
npm run dev    # dev server
npm run build  # production build
npm run preview # preview production build
```

## Structure

- `src/components/` – Header, Hero, SolarSystem, BentoCard, Footer
- `src/components/sections/` – MagicianSection, GeniusSection, AutomatorSection, UIAISection
- `src/lib/assets.ts` – Central asset paths for icons and images
- `src/App.tsx` – App shell and scroll-based nav state

Navigation uses smooth scrolling and highlights the active section (hero, magician, genius, automator, ui-ai) based on scroll position.
