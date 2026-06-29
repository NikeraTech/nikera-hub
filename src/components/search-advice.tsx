"use client";

import Link from "next/link";
import { FormEvent, useEffect, useId, useState } from "react";

const items = [
  ["Mortgage Affordability Calculator", "Calculator", "/calculators"],
  ["Mortgage Repayment Calculator", "Calculator", "/calculators"],
  ["Stamp Duty Calculator", "Calculator", "/calculators"],
  ["Life Insurance Calculator", "Calculator", "/calculators"],
  ["First Time Buyer Guide", "Guide", "/guides"],
  ["Remortgaging Explained", "Guide", "/guides"],
  ["Income Protection Guide", "Guide", "/guides"],
  ["Mortgage & Protection", "Category", "/mortgage-protection"],
  ["Latest mortgage articles", "Blog", "/blogs"],
] as const;

type FormState = "idle" | "sending" | "sent" | "error";

export function SearchAndAdvice() {
  const [search, setSearch] = useState(false);
  const [advice, setAdvice] = useState(false);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const titleId = useId();

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearch(false);
        setAdvice(false);
      }

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
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

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch("/api/advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "Professional advice request",
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        preferredTime: data.get("time"),
        notes: data.get("notes"),
        sourcePage: location.href,
        consent: data.get("consent") === "yes",
        company: data.get("company"),
        startedAt: data.get("startedAt"),
      }),
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
      return;
    }

    const payload = await response.json().catch(() => null);
    setErrorMessage(payload?.error ?? "We could not send your request right now. Please try again.");
    setStatus("error");
  }

  return (
    <>
      <button className="search-trigger" onClick={() => setSearch(true)} aria-label="Search Hub">
        <span>⌕</span> Search <kbd>⌘ K</kbd>
      </button>
      <button className="floating-advice" onClick={() => setAdvice(true)}>
        <span>↗</span>
        <b>Need Mortgage Advice?</b>
      </button>

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
              <span>⌕</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search calculators, guides, blogs…"
              />
              <button onClick={() => setSearch(false)}>ESC</button>
            </div>
            <div className="search-results">
              {results.map(([name, type, url]) => (
                <a href={url} key={name}>
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

      {advice && (
        <div className="modal-backdrop" onMouseDown={() => setAdvice(false)}>
          <section
            className="advice-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setAdvice(false)} aria-label="Close">
              ×
            </button>
            <span className="kicker">PROFESSIONAL GUIDANCE</span>
            <h2 id={titleId}>Request mortgage advice</h2>
            <p>A trusted mortgage adviser can review your needs and discuss the options available.</p>
            <form onSubmit={submit}>
              <input className="hp-field" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input type="hidden" name="startedAt" value={new Date().toISOString()} />
              <label>
                Full name
                <input name="name" required minLength={2} maxLength={120} autoComplete="name" />
              </label>
              <label>
                Email
                <input name="email" required type="email" maxLength={160} autoComplete="email" />
              </label>
              <label>
                Phone number
                <input name="phone" required type="tel" inputMode="tel" pattern="[0-9+()\-\s]{7,20}" autoComplete="tel" />
              </label>
              <label>
                Preferred contact time
                <select name="time">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </label>
              <label className="full">
                Additional notes
                <textarea name="notes" rows={3} required minLength={10} maxLength={4000} />
              </label>
              <label className="consent full">
                <input type="checkbox" name="consent" value="yes" required />
                <span>
                  I agree that my details may be stored and used to respond to this enquiry. See the{" "}
                  <Link href="/privacy">privacy notice</Link>.
                </span>
              </label>
              <button className="full" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Request Professional Advice →"}
              </button>
              {status === "sent" && (
                <p className="form-status full" role="status">
                  Thanks. Your Nikera Hub advice request has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="form-status form-status-error full" role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
            <small>Submitting sends your enquiry securely to hello@nikera.co.uk. Automated submissions are blocked.</small>
          </section>
        </div>
      )}
    </>
  );
}
