"use client";

import { useState } from "react";
import { CalculatorCard } from "./calculator-card";
import type { Calculator } from "@/lib/calculators";

export function CalculatorDirectory({ items }: { items: Calculator[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = items.filter((item) =>
    `${item.title} ${item.category} ${item.description}`.toLowerCase().includes(normalizedQuery),
  );

  return <section className="calculator-directory" aria-label="Calculator directory">
    <div className="calculator-finder" role="search">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
      <label htmlFor="calculator-search">Search calculators</label>
      <input id="calculator-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try ‘mortgage’, ‘deposit’ or ‘protection’" />
      <span aria-live="polite"><b>{filtered.length}</b> calculators</span>
    </div>
    {filtered.length ? <div className="three-grid">{filtered.map((item) => <CalculatorCard key={item.slug} item={item} />)}</div> : <div className="empty-results"><b>No calculators found</b><p>Try a broader term such as mortgage, deposit, protection or savings.</p><button onClick={() => setQuery("")}>Clear search</button></div>}
  </section>;
}
