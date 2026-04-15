# AGENTS.md

## Project Mission
- Build a GitHub Pages-friendly web portfolio aimed at a frontend/design-minded application to Danggeun Market.
- Keep the experience warm, local, optimistic, and practical rather than corporate or overly glossy.
- Treat this repository as a static site first: no mandatory build step, simple file structure, easy to publish.

## Working Order
1. Update the visual and content system directly in `index.html` when making major UI changes.
2. Keep shared behavior in `styles/main.css` and `scripts/*.js`.
3. Prefer small, reviewable iterations over parallel page variants.

## Design Direction
- Reference mood: Danggeun Market's approachable orange energy, neighborhood warmth, and friendly utility.
- Do not clone Danggeun Market screens or brand assets directly.
- Favor warm neutrals, peach/orange highlights, rounded surfaces, soft gradients, and clear hierarchy.
- Avoid purple-heavy palettes, sterile SaaS layouts, and generic dark themes.

## Content Rules
- Write Korean-first copy unless the user asks otherwise.
- Keep claims grounded in actual work or easily editable placeholders.
- Prefer concise story-driven sections over dense resume dumps.

## Frontend Guardrails
- Mobile-first, responsive, and static-hosting safe.
- Use progressive enhancement with plain HTML/CSS/JS.
- Keep interactions lightweight: reveal-on-scroll, hover feedback, simple nav behavior.
- Centralize editable portfolio content in `scripts/site-content.js`.

## File Map
- `index.html`: main public portfolio page.
- `styles/main.css`: shared design tokens and component styles.
- `scripts/site-content.js`: editable portfolio data.
- `scripts/main.js`: shared page rendering and interactions.

## Definition of Done
- Main page works when opened directly or from GitHub Pages.
- No broken placeholder structure, empty sections, or inaccessible contrast issues.
