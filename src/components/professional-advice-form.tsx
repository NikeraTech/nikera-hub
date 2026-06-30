"use client";

import Link from "next/link";
import { FormEvent, useId, useMemo, useState } from "react";
import { ArrowIcon, ShieldIcon } from "./icons";
import {
  adviceTopics,
  contactMethods,
  contactTimes,
  getSuggestedAdviceTopic,
  type AdviceTopic,
} from "@/lib/advice";

type FormState = "idle" | "sending" | "sent" | "error";

type ProfessionalAdviceFormProps = {
  pageTitle?: string;
  pageCategory?: string;
  pageSlug?: string;
  pageKind?: "calculator" | "guide" | "article" | "page";
  calculatorName?: string;
  calculationResults?: string;
  defaultTopic?: AdviceTopic;
  standalone?: boolean;
};

type HiddenContext = {
  currentPage: string;
  browser: string;
  referralUrl: string;
  timestamp: string;
};

const trustBadges = [
  "No Obligation",
  "FCA Regulated Advisers",
  "We Respect Your Preferred Contact Method",
  "Your Information Is Never Sold",
];

const reasons = [
  "Trusted Mortgage & Protection professionals",
  "Clear, jargon-free guidance",
  "No obligation",
  "We respect your preferred contact preference",
  "No spam",
];

function getClientContext(): HiddenContext {
  if (typeof window === "undefined") {
    return {
      currentPage: "",
      browser: "",
      referralUrl: "",
      timestamp: new Date().toISOString(),
    };
  }

  return {
    currentPage: window.location.href,
    browser: window.navigator.userAgent,
    referralUrl: document.referrer || "",
    timestamp: new Date().toISOString(),
  };
}

export function ProfessionalAdviceForm({
  pageTitle,
  pageCategory,
  pageSlug,
  pageKind = "page",
  calculatorName = "",
  calculationResults = "",
  defaultTopic,
  standalone = false,
}: ProfessionalAdviceFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [context, setContext] = useState<HiddenContext>(() => getClientContext());
  const radioId = useId();
  const topic =
    defaultTopic ??
    getSuggestedAdviceTopic({
      slug: pageSlug,
      title: pageTitle,
      category: pageCategory,
      kind: pageKind,
    });

  const dedupeKey = useMemo(
    () =>
      ["nkh-advice", context.currentPage, calculatorName, calculationResults.slice(0, 120)]
        .filter(Boolean)
        .join("::"),
    [calculatorName, calculationResults, context.currentPage],
  );

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    if (typeof window !== "undefined") {
      const last = window.sessionStorage.getItem(dedupeKey);
      if (last && Date.now() - Number(last) < 90_000) {
        setState("error");
        setErrorMessage("This request was just sent. Please wait a moment before submitting again.");
        return;
      }
    }

    setState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      type: "Professional advice request",
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      topic: data.get("topic"),
      preferredContactMethod: data.get("preferredContactMethod"),
      preferredTime: data.get("preferredTime"),
      notes: data.get("notes"),
      currentPage: data.get("currentPage"),
      sourcePage: data.get("currentPage"),
      calculatorName: data.get("calculatorName"),
      calculationResults: data.get("calculationResults"),
      timestamp: data.get("timestamp"),
      browser: data.get("browser"),
      referralUrl: data.get("referralUrl"),
      consent: data.get("consent") === "yes",
      company: data.get("company"),
      startedAt: data.get("startedAt"),
    };

    const response = await fetch("/api/advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(dedupeKey, String(Date.now()));
      }
      setState("sent");
      form.reset();
      setContext(getClientContext());
      return;
    }

    const body = await response.json().catch(() => null);
    setState("error");
    setErrorMessage(body?.error ?? "We could not send your enquiry right now. Please try again.");
  }

  return (
    <section
      id="professional-advice"
      className={standalone ? "professional-advice standalone" : "professional-advice"}
      aria-labelledby="professional-advice-title"
    >
      <div className="professional-advice-shell">
        <div className="professional-advice-overview">
          <div className="professional-advice-intro">
            <span className="kicker">PROFESSIONAL GUIDANCE</span>
            <h2 id="professional-advice-title">Need Personalised Mortgage &amp; Protection Advice?</h2>
            <p>Our trusted Mortgage &amp; Protection advisers are here to help.</p>
            <p>
              Whether you&apos;re buying your first home, remortgaging or reviewing your protection
              needs, we&apos;ll connect you with an experienced adviser who can guide you through your
              options.
            </p>
            <div className="professional-advice-points">
              <span>No obligation.</span>
              <span>No pressure.</span>
              <span>Just professional guidance.</span>
            </div>
          </div>

          <div className="professional-trust-banner" aria-label="Trust highlights">
            {trustBadges.map((item) => (
              <span key={item}>
                <ShieldIcon />
                {item}
              </span>
            ))}
          </div>

          <div className="professional-why professional-why-overview">
            <b>Why choose Nikera Hub?</b>
            <ul>
              {reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <form className="professional-advice-form" onSubmit={submit}>
          <div className="form-wide professional-form-card-header">
            <span className="kicker">COMPLETE THE FORM BELOW</span>
            <h3>Request a professional review</h3>
            <p>
              Share a few details and one of our trusted Mortgage &amp; Protection advisers will
              review your enquiry and contact you using your preferred method.
            </p>
          </div>
          <input className="hp-field" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="startedAt" value={context.timestamp} />
          <input type="hidden" name="currentPage" value={context.currentPage} />
          <input type="hidden" name="calculatorName" value={calculatorName} />
          <input type="hidden" name="calculationResults" value={calculationResults} />
          <input type="hidden" name="timestamp" value={context.timestamp} />
          <input type="hidden" name="browser" value={context.browser} />
          <input type="hidden" name="referralUrl" value={context.referralUrl} />

          {calculatorName && calculationResults && (
            <div className="form-context form-wide">
              <b>Calculator context will be included securely</b>
              <p>
                This request will include your latest result from <strong>{calculatorName}</strong>.
              </p>
            </div>
          )}

          <div className="form-wide professional-form-heading">
            <span className="kicker">PERSONAL DETAILS</span>
          </div>

          <div>
            <label htmlFor="professional-name">Full Name *</label>
            <input id="professional-name" name="name" required minLength={2} maxLength={120} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="professional-email">Email Address *</label>
            <input
              id="professional-email"
              name="email"
              type="email"
              required
              maxLength={160}
              autoComplete="email"
            />
          </div>
          <div className="form-wide">
            <label htmlFor="professional-phone">Phone Number *</label>
            <input
              id="professional-phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              pattern="[0-9+()\-\s]{7,20}"
              autoComplete="tel"
            />
          </div>

          <div className="form-wide professional-form-heading">
            <span className="kicker">WHAT DO YOU NEED HELP WITH?</span>
          </div>

          <div className="form-wide">
            <label htmlFor="professional-topic">Select the area you need help with</label>
            <select id="professional-topic" name="topic" defaultValue={topic}>
              {adviceTopics.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <fieldset className="form-wide professional-radio-group">
            <legend>Preferred Contact Method</legend>
            <div className="professional-radio-options">
              {contactMethods.map((item, index) => {
                const id = `${radioId}-${index}`;
                return (
                  <label key={item} htmlFor={id} className="professional-radio">
                    <input
                      id={id}
                      type="radio"
                      name="preferredContactMethod"
                      value={item}
                      defaultChecked={item === "No Preference"}
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="form-wide">
            <label htmlFor="professional-time">Best Time To Contact</label>
            <select id="professional-time" name="preferredTime" defaultValue="Anytime">
              {contactTimes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="form-wide">
            <label htmlFor="professional-notes">Additional Notes</label>
            <textarea
              id="professional-notes"
              name="notes"
              rows={6}
              maxLength={4000}
              placeholder={`Tell us anything that may help our advisers understand your enquiry.

Examples:

"I'm planning to buy within six months."
"I'm self-employed."
"I already have an Agreement in Principle."`}
            />
          </div>

          <label className="consent form-wide professional-consent">
            <input type="checkbox" name="consent" value="yes" required />
            <span>
              I agree that Nikera Technologies may use my information to respond to my enquiry and,
              where appropriate, introduce me to one of its trusted Mortgage &amp; Protection
              partners. I understand my information will only be used for this enquiry in accordance
              with the <Link href="/privacy">Privacy Policy</Link>.
            </span>
          </label>

          <button className="form-wide professional-submit" type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending your enquiry..." : "Request Professional Advice"}
            {state === "sending" ? null : <ArrowIcon />}
          </button>

          {state === "sent" && (
            <div className="professional-success form-wide" role="status">
              <b>Thank you.</b>
              <p>We&apos;ve safely received your enquiry.</p>
              <p>
                One of our trusted Mortgage &amp; Protection advisers will review your request and
                contact you using your preferred contact method.
              </p>
            </div>
          )}

          {state === "error" && (
            <p className="form-status form-status-error form-wide" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
