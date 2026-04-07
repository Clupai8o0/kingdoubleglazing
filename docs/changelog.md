# Changelog

Track significant changes, decisions, and milestones. Most recent first.

---

## 2026-04-07 — Navbar redesign with Services dropdown

- Installed `@radix-ui/react-navigation-menu`, `clsx`, `tailwind-merge`, `class-variance-authority`
- Created `lib/utils.ts` — `cn()` helper
- Created `components/ui/navigation-menu.tsx` — shadcn NavigationMenu, restyled to KDG design system (0px radius, gold/black palette, Barlow Condensed)
- Updated `data/nav.ts` — `mainNav` now: Home / Emergency Glass / Areas / About Us / Blog; new `servicesNav` array groups all 10 services into Double Glazing + Other Services with descriptions
- Rewrote `components/layout/Header.tsx` — Services rendered as Radix NavigationMenu dropdown; CTA changed from "Get Estimate" → "Get Quote"

---

## 2026-04-07 — Project documentation created

- Created `CLAUDE.md` as master routing hub
- Created `docs/architecture.md` — stack, routes, file layout, data model, phases
- Created `docs/components.md` — 14 core components + estimate + UI primitives
- Created `docs/seo.md` — keywords per page, schema plan, snippet targets, PAA questions
- Created `docs/local-seo.md` — GBP, citations, reviews, backlinks, competitors
- Created `docs/content-strategy.md` — calendar, conversion, CTAs, video, top 30 questions
- Created `docs/design-system.md` — placeholder awaiting design direction
- Raw SEO research preserved in `references/` (read-only)
