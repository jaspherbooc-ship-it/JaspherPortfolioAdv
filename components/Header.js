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
        <Link href="/" className="logo" aria-label="Jaspher Booc, home"><span>J/B</span><small>Student<br />Developer</small></Link>
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
