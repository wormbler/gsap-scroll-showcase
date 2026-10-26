# GSAP Scroll Showcase

A small, scroll-driven animation page built with React and GSAP ScrollTrigger. It demonstrates four ScrollTrigger techniques on one page: a line-by-line text reveal on load, a pinned section with scrubbed animation, a sideways-scrolling card section, and numbers that count up when they enter the screen. A thin progress bar at the top fills as you scroll.

Live: coming soon

## Tech stack

- React 19 (Vite)
- GSAP and ScrollTrigger
- @gsap/react (`useGSAP`)
- Plain CSS

## Features

- Responsive from 360px wide up. The sideways scroll stacks vertically on small screens.
- Respects `prefers-reduced-motion`: animations are skipped and the content shows in its final state.

## Setup

```bash
git clone https://github.com/wormbler/gsap-scroll-showcase.git
cd gsap-scroll-showcase
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Author

Angelo Ang - [github.com/wormbler](https://github.com/wormbler)
