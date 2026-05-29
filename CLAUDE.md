# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Web3 portfolio website for "Daniel N." — a Web3 builder, node operator, and content creator. Built with React 18 + Vite + TypeScript + Tailwind CSS v3.

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # production build (tsc + vite build)
npm run preview  # preview production build locally
```

## Architecture

**Stack:** React 18 · Vite · TypeScript · Tailwind CSS v3 (npm, not CDN)

**Where to edit content** — all text, data, and links live in one file:
- [src/data/content.ts](src/data/content.ts) — NAV, HERO, ABOUT, SKILLS, EXPERIENCE, PORTFOLIO, CONTACT, FOOTER

**Components** — one file per section in [src/components/](src/components/):
- [Navbar.tsx](src/components/Navbar.tsx), [Hero.tsx](src/components/Hero.tsx) (canvas node network + typing animation), [About.tsx](src/components/About.tsx) (count-up stats), [Skills.tsx](src/components/Skills.tsx), [Experience.tsx](src/components/Experience.tsx) (timeline), [Portfolio.tsx](src/components/Portfolio.tsx), [Contact.tsx](src/components/Contact.tsx), [Footer.tsx](src/components/Footer.tsx)

**Hooks** in [src/hooks/](src/hooks/):
- `useMouseGlow` — tracks mouse position → updates `--mouse-x` / `--mouse-y` CSS vars for the radial glow overlay
- `useReveal` — IntersectionObserver that adds `.active` to a ref element when it enters the viewport (scroll-triggered fade-in)

**Styling:**
- [tailwind.config.ts](tailwind.config.ts) — full design token set (colors, spacing, typography, border-radius) per [DESIGN.md](DESIGN.md)
- [src/index.css](src/index.css) — custom CSS classes that Tailwind can't express: `.glass`, `.glass-hover`, `.neon-border-cyan`, `.dot-matrix`, `.mouse-glow`, `.reveal` / `.reveal.active`, `.stagger-item`, `.timeline-line`, `.node-network`

## Design System

Full spec in [DESIGN.md](DESIGN.md) — **Cyber-Ether Protocol**. Key values:

- **Background:** `#0a0a0f` (body), surfaces start at `#0e0e13`
- **Accent:** Electric Cyan `#00f5ff` / `#00dce5` (primary), Neon Green `#2ff801` (secondary)
- **Glass:** `rgba(255,255,255,0.03)` fill + `backdrop-filter: blur(16px)` + `1px rgba(255,255,255,0.1)` border
- **Hover elevation:** blur increases to 32px, border shifts to `rgba(0,245,255,0.4)`, lifts `translateY(-8px)`
- **Typography:** `Space Mono` for all headlines/labels, `Sora` for body copy
- **Spacing grid:** 4px unit — use `xs/sm/md/lg/xl/xxl/gutter` spacing tokens
