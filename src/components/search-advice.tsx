"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  ["Mortgage Affordability Calculator", "Calculator", "/calculators/mortgage-affordability"],
  ["Mortgage Repayment Calculator", "Calculator", "/calculators/mortgage-repayment"],
  ["Stamp Duty Calculator", "Calculator", "/calculators/stamp-duty"],
  ["Protection Needs Calculator", "Calculator", "/calculators/protection-needs"],
  ["First Time Buyer Guide", "Guide", "/guides/first-time-buyer-guide"],
  ["Remortgaging Explained", "Guide", "/guides/remortgaging-explained"],
  ["Income Protection Guide", "Guide", "/guides/income-protection-guide"],
  ["Mortgage & Protection", "Category", "/mortgage-protection"],
  ["Request Professional Advice", "Advice", "/request-advice"],
  ["Latest mortgage articles", "Blog", "/blogs"],
] as const;

export function SearchAndAdvice() {
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearch(false);
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };

    addEventListener("keydown", close);
    return () => removeEventListener("keydown", close);
  }, []);

  const results = items.filter(([name, type]) =>
    `${name} ${type}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <button type="button" className="search-trigger" onClick={() => setSearch(true)} aria-label="Search Hub">
        <span>⌕</span> Search <kbd>⌘ K</kbd>
      </button>
      <Link href="/request-advice" className="floating-advice">
        <span>↗</span>
        <b>Need Mortgage Advice?</b>
      </Link>

      {search && (
        <div className="modal-backdrop" onMouseDown={() => setSearch(false)}>
          <section
            className="search-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Search Hub"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="search-input">
              <span aria-hidden="true">⌕</span>
              <label className="sr-only" htmlFor="hub-search-input">
                Search Hub content
              </label>
              <input
                id="hub-search-input"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search calculators, guides, blogs…"
                aria-describedby="hub-search-help"
              />
              <button type="button" onClick={() => setSearch(false)}>
                ESC
              </button>
            </div>
            <p id="hub-search-help" className="sr-only">
              Search suggested calculators, guides and blog content.
            </p>
            <div className="search-results" role="list">
              {results.map(([name, type, url]) => (
                <a href={url} key={name} role="listitem">
                  <span>{type}</span>
                  <b>{name}</b>
                  <i>→</i>
                </a>
              ))}
              {!results.length && <p>No results found. Try another search.</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
