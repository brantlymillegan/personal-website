# Brantly Millegan — Personal Website

The source for [brantly.com](https://brantly.com): a concise personal website
covering Brantly's work history, education, and life beyond the résumé.

This first version establishes the design and content structure. The detailed
CV chronology will be added in a later pass.

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

## Project structure

- `app/page.tsx` contains the page content and section structure.
- `app/globals.css` contains the visual design and responsive styles.
- `app/layout.tsx` contains site-wide metadata.
- `.openai/hosting.json` contains the Sites deployment configuration.

The site is built with React and vinext for deployment to Cloudflare Workers.
