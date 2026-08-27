# Brantly Millegan — Personal Website

The source for [brantly.com](https://brantly.com): a concise personal website
covering Brantly's projects and education.

It is a fully static React site. There is no application server, database,
Cloudflare Worker, or server-side runtime.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The build writes deployable static files to `dist/`. Preview that build with:

```bash
npm run start
```

Run the automated checks with:

```bash
npm test
npm run lint
```

## Project structure

- `app/page.tsx` contains the page content and section structure.
- `app/globals.css` contains the visual design and responsive styles.
- `index.html` contains site-wide metadata and the browser entry point.
- `scripts/prerender.mjs` renders the page into static HTML at build time.
- `.github/workflows/deploy-pages.yml` builds and deploys the site.

Every push to `main` deploys `dist/` to GitHub Pages through GitHub Actions.
The `brantly.com` custom domain must be configured in the repository's Pages
settings; GitHub ignores `CNAME` files when a custom Actions workflow is used.
