# Complete source code

## .gitignore

```text
node_modules/
.next/
.env*

```

## app/about/page.js

```jsx
const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Responsive design"];

export default function About() {
  return (
    <section>
      <p className="eyebrow">Getting to know me</p>
      <h1>About</h1>
      <p className="intro">Sample introduction: I am a student learning web development. I enjoy building simple websites and improving my skills through practice.</p>
      <div className="about-grid">
        <article className="card">
          <h2>Skills to explore</h2>
          <p>A starting list to edit as you learn.</p>
          <ul className="skills">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </article>
        <article className="card">
          <h2>Learning goals</h2>
          <ul className="goals">
            <li>Build responsive layouts for different screen sizes.</li>
            <li>Understand components and routing in Next.js.</li>
            <li>Write clear, reusable JavaScript code.</li>
            <li>Create accessible, easy-to-use websites.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

```

## app/gallery/page.js

```jsx
const images = [
  { file: "hills.svg", caption: "Quiet hills", alt: "Illustration of overlapping hills beneath a sun" },
  { file: "leaf.svg", caption: "A little greenery", alt: "Illustration of a leafy plant" },
  { file: "desk.svg", caption: "Room to create", alt: "Illustration of a laptop on a desk" },
  { file: "arches.svg", caption: "Simple shapes", alt: "Illustration of an architectural arch" },
  { file: "books.svg", caption: "Always learning", alt: "Illustration of three upright books" },
  { file: "lake.svg", caption: "A quiet moment", alt: "Illustration of mountains reflected in a lake" },
];

export default function Gallery() {
  return (
    <section>
      <p className="eyebrow">A small collection</p>
      <h1>Gallery</h1>
      <p className="intro">Six local sample illustrations. Replace them with your own images.</p>
      <div className="gallery-grid">
        {images.map((image) => (
          <figure className="gallery-card" key={image.file}>
            <img src={`/gallery/${image.file}`} alt={image.alt} width="600" height="400" loading="lazy" />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

```

## app/globals.css

```css
/* Shared colors and sizing keep every page consistent. */
:root {
  --accent: #526b55;
  --text: #303632;
  --muted: #646b66;
  --border: #e2e6e2;
}
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: flex; flex-direction: column; background: #fff; color: var(--text); font-family: Arial, Helvetica, sans-serif; line-height: 1.7; }
a { color: inherit; text-decoration: none; }
a:focus-visible { outline: 3px solid var(--accent); outline-offset: 5px; }
.container { width: min(1080px, calc(100% - 48px)); margin: 0 auto; }
.site-header { border-bottom: 1px solid var(--border); }
.header-inner { min-height: 90px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.logo { font-size: 19px; font-weight: 700; letter-spacing: -0.5px; }
.logo span { color: var(--accent); margin-left: 5px; }
nav { display: flex; flex-wrap: wrap; gap: 8px; }
.nav-link { padding: 8px 15px; border-radius: 7px; font-size: 14px; }
.nav-link:hover { color: var(--accent); }
.nav-link.active { background: var(--accent); color: #fff; }
main.container { flex: 1; padding-top: 64px; padding-bottom: 80px; }
h1, h2, p { margin-top: 0; }
h1 { font-size: clamp(36px, 5vw, 56px); line-height: 1.15; letter-spacing: -1.5px; margin-bottom: 24px; }
h2 { font-size: 21px; line-height: 1.35; margin-bottom: 14px; }
p { color: var(--muted); }
.eyebrow { color: var(--accent); font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 18px; }
.intro { max-width: 660px; font-size: 17px; margin-bottom: 36px; }
.hero { padding-top: 24px; }
.hero h1 { font-size: clamp(40px, 6vw, 68px); }
.actions { display: flex; flex-wrap: wrap; gap: 12px; }
.button { display: inline-block; padding: 11px 22px; border: 1px solid var(--accent); border-radius: 7px; background: var(--accent); color: #fff; font-size: 14px; font-weight: 700; }
.button:hover { opacity: 0.85; }
.button.secondary { background: #fff; color: var(--accent); }
.home-note { margin-top: 64px; padding-top: 24px; border-top: 1px solid var(--border); }
.home-note p { margin: 8px 0 0; }
.project-grid, .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.card { border: 1px solid var(--border); border-radius: 12px; padding: 28px; }
.project-card { display: flex; flex-direction: column; }
.project-number { color: var(--accent); font-size: 13px; font-weight: 700; margin-bottom: 28px; }
.technologies { font-size: 12px; color: var(--accent); border-top: 1px solid var(--border); padding-top: 18px; margin-top: auto; margin-bottom: 0; }
.about-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.skills { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; margin-bottom: 0; }
.skills li { border: 1px solid var(--border); padding: 4px 12px; border-radius: 6px; font-size: 13px; }
.goals { color: var(--muted); padding-left: 20px; margin-bottom: 0; }
.goals li + li { margin-top: 12px; }
.gallery-card { margin: 0; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.gallery-card img { display: block; width: 100%; height: auto; aspect-ratio: 3 / 2; object-fit: cover; }
figcaption { padding: 14px 18px; font-size: 14px; }
.site-footer { border-top: 1px solid var(--border); }
.footer-inner { display: flex; justify-content: space-between; gap: 12px; padding-top: 24px; padding-bottom: 24px; color: var(--muted); font-size: 12px; }
.skip-link { position: absolute; left: 12px; top: -100px; padding: 8px 16px; background: #fff; z-index: 1; }
.skip-link:focus { top: 12px; }
/* Cards stack and navigation wraps on smaller screens. */
@media (max-width: 800px) {
  .project-grid { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .about-grid { grid-template-columns: 1fr; }
  .header-inner { flex-direction: column; align-items: flex-start; padding-top: 20px; padding-bottom: 20px; gap: 12px; }
}
@media (max-width: 480px) {
  .container { width: calc(100% - 32px); }
  main.container { padding-top: 40px; padding-bottom: 48px; }
  nav { gap: 2px; }
  .nav-link { padding: 8px 11px; }
  .gallery-grid { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; }
  .card { padding: 24px; }
}

```

## app/layout.js

```jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Student Portfolio",
  description: "A simple student portfolio for Exercise 1 & 2.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content" className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

```

## app/page.js

```jsx
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">A space to learn and create</p>
      <h1>Welcome to my<br />student portfolio.</h1>
      <p className="intro">Explore sample projects, discover learning goals, and browse a small collection of images. This portfolio is a starting point for sharing work and progress.</p>
      <div className="actions">
        <Link href="/portfolio" className="button">View portfolio</Link>
        <Link href="/about" className="button secondary">About me</Link>
      </div>
      <div className="home-note">
        <span className="eyebrow">Learn. Build. Improve.</span>
        <p>Small projects, steady progress, and room for new ideas.</p>
      </div>
    </section>
  );
}

```

## app/portfolio/page.js

```jsx
const projects = [
  { name: "Personal Website", description: "A simple website that introduces a student and showcases their work.", technologies: "Next.js · JavaScript · CSS" },
  { name: "Task List", description: "A practice app for adding tasks, marking them complete, and keeping track of daily work.", technologies: "HTML · CSS · JavaScript" },
  { name: "Study Notes", description: "A sample page that organizes study topics into clear, easy-to-read sections.", technologies: "React · JavaScript · CSS" },
];

export default function Portfolio() {
  return (
    <section>
      <p className="eyebrow">Practice and progress</p>
      <h1>Portfolio</h1>
      <p className="intro">Three sample project ideas. Replace these with your own work.</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="card project-card" key={project.name}>
            <span className="project-number">0{index + 1}</span>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p className="technologies">{project.technologies}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

```

## components/Footer.js

```jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>Student Portfolio</span>
        <span>Exercise 1 &amp; 2 · Built with Next.js</span>
      </div>
    </footer>
  );
}

```

## components/Header.js

```jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="container header-inner">
        <Link href="/" className="logo">Student<span>Portfolio</span></Link>
        <nav aria-label="Main navigation">
          {/* Link moves between pages without a full page reload. */}
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              // Matching the current path highlights only the active page.
              className={pathname === href ? "nav-link active" : "nav-link"}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

```

## package.json

```json
{
  "dependencies": {
    "next": "^16.3.8",
    "react": "^19.3.0",
    "react-dom": "^19.3.0"
  },
  "name": "student-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "engines": {
    "node": ">=20.9.0"
  }
}

```

## public/gallery/arches.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#f3f5f2"/><path d="M170 350V175A130 130 0 0 1 430 175V350Z" fill="#526b55"/><path d="M220 350V180A80 80 0 0 1 380 180V350Z" fill="#f3f5f2"/><path d="M120 350H480" stroke="#b9c5ba" stroke-width="10"/></svg>

```

## public/gallery/books.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#f3f5f2"/><rect x="140" y="110" width="85" height="220" rx="5" fill="#526b55"/><rect x="240" y="80" width="85" height="250" rx="5" fill="#b9c5ba"/><rect x="345" y="130" width="85" height="200" rx="5" fill="#526b55" transform="rotate(-8 345 330)"/><path d="M110 335H480" stroke="#303632" stroke-width="8"/></svg>

```

## public/gallery/desk.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#f3f5f2"/><rect x="120" y="100" width="360" height="210" rx="12" fill="#526b55"/><rect x="140" y="120" width="320" height="165" rx="4" fill="#fff"/><path d="M90 310H510L530 335H70Z" fill="#b9c5ba"/><path d="M40 350H560" stroke="#303632" stroke-width="8"/></svg>

```

## public/gallery/hills.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#f3f5f2"/><circle cx="450" cy="95" r="38" fill="#526b55"/><path d="M0 290Q150 90 320 290T600 250V400H0Z" fill="#b9c5ba"/><path d="M0 330Q220 160 400 330T600 300V400H0Z" fill="#526b55"/></svg>

```

## public/gallery/lake.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#f3f5f2"/><path d="M60 240L210 80L350 240L450 130L570 240Z" fill="#b9c5ba"/><path d="M170 123L210 80L248 123Z" fill="#fff"/><path d="M0 245H600V400H0Z" fill="#526b55"/><path d="M150 285H450M210 325H390M250 365H350" stroke="#fff" stroke-width="5"/></svg>

```

## public/gallery/leaf.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#f3f5f2"/><path d="M300 340V100" stroke="#526b55" stroke-width="10"/><path d="M300 240Q170 250 170 130Q290 120 300 240M300 190Q420 200 430 80Q310 80 300 190" fill="#526b55"/><path d="M300 310Q200 320 190 230Q290 220 300 310" fill="#b9c5ba"/></svg>

```

