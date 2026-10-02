# Student Portfolio: Exercise 1 & 2

A beginner-friendly Next.js App Router project using JavaScript and plain CSS.
Only Next.js, React, and React DOM are installed. All text is editable sample content.

## Setup

Install Node.js 20.9 or newer. Extract the ZIP, open a terminal in its parent folder, then run:

```bash
cd student-portfolio
npm install
npm run dev
```

Open http://localhost:3000. Stop the server with Ctrl+C.

For a production build:

```bash
npm run build
npm start
```

## Folder structure

```text
student-portfolio/
  app/
    layout.js
    globals.css
    page.js
    portfolio/page.js
    about/page.js
    gallery/page.js
  components/
    Header.js
    Footer.js
  public/gallery/
    hills.svg
    leaf.svg
    desk.svg
    arches.svg
    books.svg
    lake.svg
  package.json
  package-lock.json
  .gitignore
  README.md
  SOURCE.md
```

## Routing and active navigation

Each `page.js` creates a route based on its folder:
- `app/page.js` → `/`
- `app/portfolio/page.js` → `/portfolio`
- `app/about/page.js` → `/about`
- `app/gallery/page.js` → `/gallery`

`app/layout.js` wraps every page with the same Header and Footer.
`Link` from `next/link` handles navigation between pages.
`Header.js` uses `usePathname()` to read the current route and compares it with each link's `href`.
Matching links receive the `active` CSS class and `aria-current="page"`.
The Header starts with `"use client"` because `usePathname` is a client hook.
Other components do not need it.

## Editing content

Edit text directly in each page file. Project and gallery arrays are at the top of their pages.
Replace illustrations in `public/gallery` with your own images; update filenames, captions, and alt text in `app/gallery/page.js`.
Public files are served from `/`, so `public/gallery/hills.svg` becomes `/gallery/hills.svg`.
Gallery uses standard `img` elements with local sources, explicit dimensions, and lazy loading.
SVG files are self-contained image assets, not React components.
Change `--accent` in `app/globals.css` to adjust the sage green accent.

## Design

White background, dark gray text, sage green accent, consistent content width, rounded cards, and subtle borders.
CSS Grid handles cards. Flexbox handles navigation, actions, and the footer.
Cards stack on smaller screens; navigation remains visible and wraps without a menu dependency.
Keyboard focus outlines and a skip link support keyboard navigation.

## Documentation

https://nextjs.org/docs/app/getting-started/installation
https://nextjs.org/docs/app/getting-started/layouts-and-pages
https://nextjs.org/docs/app/api-reference/functions/use-pathname
