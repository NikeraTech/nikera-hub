"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "./icons";
import { Logo } from "./logo";
import { SearchAndAdvice } from "./search-advice";
import { trackContentCtaClick } from "@/lib/analytics";

const links = [
  ["Home", "/"],
  ["Mortgage & Protection", "/mortgage-protection"],
  ["Expat Mortgages", "/expat-mortgages"],
  ["Calculators", "/calculators"],
  ["Guides", "/guides"],
  ["Blogs", "/blogs"],
  ["About", "/about"],
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, href]) => (
            <Link key={href} href={href}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <SearchAndAdvice />
          <Link
            href="/request-advice"
            className="header-cta"
            onClick={() =>
              trackContentCtaClick({
                pageType: "header",
                section: "desktop-header",
                ctaLabel: "Request advice",
                destination: "/request-advice",
              })
            }
          >
            Request advice <ArrowIcon />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-nav-shell">
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {links.map(([name, href]) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                {name}
              </Link>
            ))}
            <Link
              href="/request-advice"
              className="mobile-nav-contact"
              onClick={() => {
                trackContentCtaClick({
                  pageType: "header",
                  section: "mobile-header",
                  ctaLabel: "Request advice",
                  destination: "/request-advice",
                });
                setMenuOpen(false);
              }}
            >
              Request advice <ArrowIcon />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
