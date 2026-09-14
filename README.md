# Musings and Madness

Personal blog built with Astro. Live at **https://kornalaarun.github.io/musings-and-madness/**.

Future domain: **musingsandmadness.me** (not yet connected).

---

## Local development

```bash
npm install
npm run dev        # dev server at http://localhost:4321/musings-and-madness/
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

---

## Publishing an article

1. Create a Markdown file in `src/content/blog/`:

```bash
touch src/content/blog/my-article-slug.md
```

2. Add frontmatter:

```markdown
---
title: "Article Title"
description: "One or two sentence summary."
date: 2026-09-14
topics: ["optional", "tags"]
---

Your article content here.
```

3. Commit and push to `main` — GitHub Actions builds and deploys automatically.

Optional frontmatter fields:
- `draft: true` — excludes from production build, listing, RSS, and sitemap
- `placeholder: true` — shown on site but excluded from RSS and sitemap, adds `noindex` meta

---

## Replacing placeholder articles

Three placeholder files live in `src/content/blog/` (prefixed `placeholder-`). To replace one:

1. Delete the placeholder file.
2. Create a new file with a descriptive slug (no `placeholder-` prefix).
3. Omit `placeholder` from frontmatter (it defaults to `false`).

---

## Editing site settings

All site-wide values (title, description, author, URLs) are in `src/site.config.ts`.

The home page tagline and about page copy are in:
- `src/pages/index.astro` — tagline below the site title
- `src/pages/about.astro` — full about text

---

## Deployment

Every push to `main` triggers a GitHub Actions build and deploys to GitHub Pages automatically. A manual run can be triggered from **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

---

## Connecting musingsandmadness.me

When ready to switch to the custom domain:

1. Add a `CNAME` file to `public/` containing just:
   ```
   musingsandmadness.me
   ```

2. In `astro.config.mjs`, change `base` to `'/'` and `site` to `'https://musingsandmadness.me'`.

3. In `src/site.config.ts`, update `url` to `'https://musingsandmadness.me'`.

4. In GitHub repo settings → **Pages** → **Custom domain**, enter `musingsandmadness.me` and enable **Enforce HTTPS**.

5. At your DNS provider, add:
   - `A` records pointing to GitHub Pages IPs, or
   - A `CNAME` record for `www` pointing to `kornalaarun.github.io`

Push to `main` — the next deploy serves from the custom domain.
