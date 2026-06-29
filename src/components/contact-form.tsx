"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

function decodeCalculatorContext(value: string | null) {
  if (!value) {
    return "";
  }

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();
  const defaultTopic = searchParams.get("topic") ?? "Mortgage advice";
  const calculatorName = searchParams.get("calculator") ?? "";
  const calculatorContext = useMemo(
    () => decodeCalculatorContext(searchParams.get("calculatorContext")),
    [searchParams],
  );

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch("/api/advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "Website enquiry",
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        topic: data.get("topic"),
        message: data.get("message"),
        sourcePage: location.href,
        calculatorContext,
        consent: data.get("consent") === "yes",
        company: data.get("company"),
        startedAt: data.get("startedAt"),
      }),
    });

    if (response.ok) {
      setState("sent");
      form.reset();
      return;
    }

    const payload = await response.json().catch(() => null);
    setErrorMessage(payload?.error ?? "We could not send your enquiry right now. Please try again.");
    setState("error");
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate={false}>
      {calculatorName && calculatorContext && (
        <div className="form-context form-wide">
          <b>Calculator context included</b>
          <p>
            This enquiry will include your latest result from <strong>{calculatorName}</strong>.
          </p>
        </div>
      )}
      <input className="hp-field" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="startedAt" value={new Date().toISOString()} />
      <div>
        <label htmlFor="contact-name">Full name</label>
        <input id="contact-name" name="name" required minLength={2} maxLength={120} autoComplete="name" />
      </div>
      <div>
        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="email" type="email" required maxLength={160} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="contact-phone">
          Phone number <small>Optional</small>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          pattern="[0-9+()\-\s]{7,20}"
          autoComplete="tel"
        />
      </div>
      <div>
        <label htmlFor="contact-topic">How can we help?</label>
        <select id="contact-topic" name="topic" defaultValue={defaultTopic}>
          <option>Mortgage advice</option>
          <option>Protection advice</option>
          <option>Calculator question</option>
          <option>Content feedback</option>
          <option>Partnership enquiry</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="form-wide">
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" rows={6} required minLength={10} maxLength={4000} />
      </div>
      <label className="consent form-wide">
        <input type="checkbox" name="consent" value="yes" required />{" "}
        <span>
          I agree that my details may be stored and used to respond to this enquiry. See the{" "}
          <Link href="/privacy">privacy notice</Link>.
        </span>
      </label>
      <button className="form-wide" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Send enquiry →"}
      </button>
      {state === "sent" && (
        <p className="form-status form-wide" role="status">
          Thanks. Your Nikera Hub enquiry has been sent.
        </p>
      )}
      {state === "error" && (
        <p className="form-status form-status-error form-wide" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
