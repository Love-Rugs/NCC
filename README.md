# North Calder Colts Website

Modern Astro + Netlify website for North Calder Colts Football Club.

## Stack
- Astro (static site)
- Decap CMS (`/admin`)
- Netlify deploy + forms

## Local development
1. Install deps:
   - `cmd /c npm.cmd install`
2. Start local server:
   - `cmd /c npm.cmd run dev`

## Build
- `cmd /c npm.cmd run build`

## CMS setup (GitHub OAuth)
1. In `public/admin/config.yml`, set:
   - `base_url`: your Netlify site URL
2. Configure OAuth endpoint (Netlify auth function/provider).
3. Add required secrets in Netlify environment variables.

## Update logo
Current logo uses `public/images/ncc-logo-placeholder.svg`.
Replace with your real club logo file and update `src/content/siteSettings/site.json` `logoPath` if needed.

## Form handling
`/join` uses Netlify Forms with:
- Honeypot field
- Netlify reCAPTCHA
- Success page at `/join/thanks`

## Content locations
- News: `src/content/news/*.md`
- Teams: `src/content/teams/*.md`
- Social highlights: `src/content/socialHighlights/*.md`
- Site settings: `src/content/siteSettings/site.json`
