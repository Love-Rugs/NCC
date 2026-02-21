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

## CMS setup (GitHub OAuth via Netlify)
1. In Netlify, open your site settings and enable Decap/Netlify OAuth for GitHub.
2. In GitHub OAuth app settings, add your Netlify site `/admin/` callback URL.
3. Add OAuth client ID/secret in Netlify where prompted.
4. Ensure only approved GitHub users/org members can access CMS.

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
