# NOVA

A premium, interactive, futuristic landing page demonstrating modern frontend
engineering: real-time 3D graphics, cinematic motion design, and a
production-grade component architecture.

This repository has completed **Phase 1–6** of the NOVA build (see the
originating specs: EPS-001–008, PPS-001–003):

- Project initialization, tooling, and folder structure
- Application foundation — layout, sticky navigation, smooth scrolling
- Core experience — Hero section with a real-time Three.js scene, loading
  sequence, scroll-aware motion
- Content sections — About, Features, Technology, Statistics, Testimonials,
  CTA, Footer
- Optimization — sitemap, robots.txt, JSON-LD structured data, security
  headers, skip-to-content link, throttled scroll listeners, graceful error
  and 404 pages
- Verification — `npm install`, `npm run type-check`, `npm run lint`, and
  `npm run build` have all been run against this exact codebase and pass
  cleanly, including a full production build with static prerendering.

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **3D:** Three.js, React Three Fiber, Drei
- **Motion:** GSAP, Framer Motion, Lenis
- **Utilities:** clsx, tailwind-merge, class-variance-authority, react-icons

## Getting started

### Install

```bash
npm install
```

### Configure environment

```bash
cp .env.example .env.local
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Type check & lint

```bash
npm run type-check
npm run lint
```

### Build for production

```bash
npm run build
npm run start
```

## Folder structure

```
nova/
├── app/                 # Routing, layouts, global styles
├── components/
│   ├── ui/              # Buttons, inputs, primitives
│   ├── layout/          # Navigation, footer, page shell
│   ├── sections/         # Hero, About, Features, etc.
│   ├── animations/       # Reusable motion wrappers
│   └── three/            # R3F scene, meshes, lighting
├── hooks/                # Custom React hooks
├── lib/                  # Animation configs, service helpers
├── utils/                # Pure utility functions
├── types/                # Shared TypeScript types
├── constants/            # Design tokens, config values
└── public/                # Images, fonts, icons, 3D models
```

## Continuous integration

`.github/workflows/ci.yml` runs install, lint, type-check, and build on every
push and pull request to `main`.

## Before you deploy

- Replace the placeholder social links in `constants/footer.ts` with real
  profile URLs.
- Set `NEXT_PUBLIC_SITE_URL` (and the rest of `.env.example`) to your
  production domain — it feeds `metadataBase`, Open Graph tags, the
  sitemap, and `robots.txt`.
- Swap the MIT license if the project needs different terms.

## Deployment

NOVA is built for zero-config deployment on [Vercel](https://vercel.com).
Connect the repository and Vercel will detect the Next.js project
automatically — no additional build configuration is required.

## License

MIT — see [LICENSE](./LICENSE). Swap it for a different license before
publishing if MIT doesn't fit your use case.
