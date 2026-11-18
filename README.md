# Isuru Randika — Portfolio

A premium, responsive software engineering portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

All biographical and project content is sourced from Isuru's public GitHub profile and repository metadata. The site intentionally avoids unverified employment, statistics, testimonials, and project claims.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

The production build is emitted to `dist/`.

## Content updates

Portfolio facts, project descriptions, links, and skill groups are centralized in `src/content.ts`. Add a verified email address or résumé only after those assets are available.

## Deployment

The Vite output can be deployed as a static site on Vercel, Netlify, GitHub Pages, or OpenAI Sites. The included `.openai/hosting.json` points OpenAI Sites to `dist/`.
