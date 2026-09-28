# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Fellow engineers** who arrive from a post, a tool (e.g. van-damme), or a shared link, and want to read the thinking or try the thing.
- **Recruiters and hiring managers** evaluating Guilherme for roles, advisory work, or collaborations. They need to quickly judge seniority, range, and credibility.

- **Prospective freelance clients**, arriving from a freelance platform profile through a direct link to a case study. They judge whether Guilherme can deliver their kind of project: the problem, what was built, and proof that it shipped.

Both groups skim before they read. The site has to make a strong impression within seconds and still hold up when someone digs in.

## Product Purpose

Guilherme Carvalho's personal site, serving mainly as a **professional presence**. Writing and experiments back up the professional claim. They are not the headline.

Success: a visitor leaves believing three things, backed by the work on the page:

1. **Staff-level judgment.** Shapes platforms, architecture, and delivery quality across teams, not just tickets.
2. **A builder who ships.** Still writes code and makes real tools (Rust/Ratatui session manager, AI workflows).
3. **AI-first engineering.** Thinks seriously about how engineering changes with AI, both in practice and in writing.

After that, the visitor goes to GitHub or LinkedIn.

## Positioning

Guilherme's career combines four roles that rarely appear together: a Rails studio co-founder who ran client work for ten years and sold the studio (Guava → VTEX, 2021), an engineering manager who led FastStore, a Staff Engineer who is now redefining that platform for an AI-first world, and an MSc in machine learning with published papers. Peers can claim one of these. The site's credibility comes from showing all of them together with real, shipped artifacts.

## Operating Context

- Static site on GitHub Pages at `https://gvc.github.io`, deployed by `.github/workflows/deploy.yml`.
- Content is Markdown in Astro content collections:
  - `src/content/logs/` shown as **Writings** (`/writings`): fields are title, description, date, severity, tags, icon.
  - `src/content/experiments/` shown as **Experiments** (`/experiments`): fields are title, projectId, description, date, status, stack, featured, and optional stats/metadata.
- Other routes: `/` (home), `/who-am-i` (bio and career timeline), `/pomodoro` (a small working utility), `/signal` (a hidden easter-egg page linked from a log).
- `/cases/*` (Ulah, Sambadeiras, Van Damme): case studies for freelance clients, reached only by direct link. They are not linked from any page and carry `noindex`.
- Privacy-friendly analytics via Umami.
- The author writes and publishes posts himself, so templates must work for real Markdown prose (headings, code blocks, links, lists).

## Capabilities and Constraints

- Stack: Astro 6, Tailwind CSS 4 via `@tailwindcss/vite`, TypeScript. Image service is `noop`. The package manager is being moved to pnpm.
- There is no backend. Everything is static and built at deploy time.
- Contact paths are **GitHub** (`https://github.com/gvc`) and **LinkedIn** (`https://www.linkedin.com/in/guieevc/`). There is no public email.
- The current terminal / "classified system" voice (SYSTEM_LOGS, DOSSIER, ACCESS_DENIED, `_UNDERSCORE_` labels) is **not binding**. It was a starting point and may change.
- Open: whether `/signal`, the severity/status taxonomy on content, and the Pomodoro utility stay as they are.

## Brand Commitments

- Name: **Guilherme Carvalho**. Handle: **gvc** (`~/gvc` is the current wordmark; not confirmed as binding).
- Based in Recife, Brazil.
- Portrait: `public/profile.webp`.
- Favicons in `public/`.

## Evidence on Hand

- **Career facts** (from `src/pages/who-am-i.astro`):
  - VTEX Staff Software Engineer, Sep 2023 to present.
  - VTEX Engineering Manager, Sep 2021 to Mar 2024, leading FastStore (faststore.dev).
  - Guava Software co-founder and lead developer, Jan 2011 to Aug 2021, acquired by VTEX. Clients included True & Co, MetaMaster, PetPlate, Endossa.
  - BSc and MSc from CIn/UFPE. The MSc focused on ensemble methods in ML.
- **Publications:** IEEE 2011 (pedestrian detection with PCA-based reconstruction) and PRL 2016 (diversity measures for ensemble pruning).
- **Experiment:** van-damme, a Rust/Ratatui manager for tmux + Claude Code sessions (`https://github.com/gvc/van-damme`).
- **Writing:** so far, `system-init` (intro) and a placeholder incident "field report" pointing to `/signal`. The body of written work is still small.
- **Absent, never fabricate:** testimonials, employer endorsements, metrics or impact numbers, talks, press, client logos. The "Recommend for critical system operations" assessment note on `/who-am-i` is self-written flavor text and must not be presented as a third-party quote.

## Product Principles

1. **Credibility through artifacts.** Every claim about judgment or skill should point at something real: a shipped tool, a post, a role, a paper.
2. **Seconds to signal, depth on demand.** A recruiter should get the gist from the first screen, and an engineer should find real substance one click in.
3. **Writing is the growth engine.** Adding a post or experiment should be trivial, and the design should still look good with only one or two entries.
4. **Personality serves the professional read.** Wit and easter eggs are welcome as long as they never obscure who Guilherme is or what has been built.
