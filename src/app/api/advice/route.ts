import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type AdvicePayload = {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  preferredTime?: string;
  message?: string;
  notes?: string;
  sourcePage?: string;
  calculatorContext?: string;
  consent?: boolean;
  company?: string;
  startedAt?: string;
};

function readEnv(name: string) {
  const value = process.env[name]?.trim();
  return value ? value : null;
}

function normaliseText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return /^[0-9+()\-\s]{7,20}$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildTextBody(payload: Required<AdvicePayload>, submittedAt: string) {
  return [
    "Nikera Hub enquiry",
    "",
    `Trigger: ${payload.type}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Topic: ${payload.topic || "Not provided"}`,
    `Preferred contact time: ${payload.preferredTime || "Not provided"}`,
    "",
    ...(payload.calculatorContext ? ["Calculator context:", payload.calculatorContext, ""] : []),
    "Message / notes:",
    payload.message || payload.notes || "Not provided",
    "",
    `Source page: ${payload.sourcePage || "Unknown"}`,
    `Submitted: ${submittedAt}`,
  ].join("\n");
}

function buildHtmlBody(payload: Required<AdvicePayload>, submittedAt: string) {
  const rows = [
    ["Trigger", payload.type],
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
    ["Topic", payload.topic || "Not provided"],
    ["Preferred contact time", payload.preferredTime || "Not provided"],
    ["Source page", payload.sourcePage || "Unknown"],
    ["Submitted", submittedAt],
  ];

  const message = escapeHtml(payload.message || payload.notes || "Not provided").replace(/\n/g, "<br />");
  const calculatorContext = payload.calculatorContext
    ? escapeHtml(payload.calculatorContext).replace(/\n/g, "<br />")
    : "";

  return `<!doctype html>
  <html>
    <body style="font-family:Arial,sans-serif;color:#102a2c;">
      <h2>Nikera Hub enquiry</h2>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#d8e1df;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><th align="left" style="background:#f3f7f6;">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      ${
        calculatorContext
          ? `<h3 style="margin-top:24px;">Calculator context</h3><p>${calculatorContext}</p>`
          : ""
      }
      <h3 style="margin-top:24px;">Message / notes</h3>
      <p>${message}</p>
    </body>
  </html>`;
}

export async function POST(request: Request) {
  const host = readEnv("SMTP_HOST");
  const port = Number(readEnv("SMTP_PORT") ?? "587");
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const to = readEnv("SMTP_TO_EMAIL");
  const fromName = readEnv("SMTP_FROM_NAME") ?? "Nikera Hub";

  if (!host || !user || !pass || !to || !Number.isFinite(port)) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const body = (await request.json()) as AdvicePayload;
  const payload: Required<AdvicePayload> = {
    type: normaliseText(body.type) || "General enquiry",
    name: normaliseText(body.name),
    email: normaliseText(body.email),
    phone: normaliseText(body.phone),
    topic: normaliseText(body.topic),
    preferredTime: normaliseText(body.preferredTime),
    message: normaliseText(body.message),
    notes: normaliseText(body.notes),
    sourcePage: normaliseText(body.sourcePage),
    calculatorContext: normaliseText(body.calculatorContext),
    consent: Boolean(body.consent),
    company: normaliseText(body.company),
    startedAt: normaliseText(body.startedAt),
  };

  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  if (payload.startedAt) {
    const startedAt = Date.parse(payload.startedAt);
    if (Number.isFinite(startedAt) && Date.now() - startedAt < 3000) {
      return NextResponse.json({ error: "Please take a little longer before submitting." }, { status: 400 });
    }
  }

  if (!payload.consent) {
    return NextResponse.json({ error: "Privacy consent is required." }, { status: 400 });
  }

  if (!payload.name || payload.name.length < 2 || payload.name.length > 120) {
    return NextResponse.json({ error: "Enter your full name." }, { status: 400 });
  }

  if (!payload.email || !isValidEmail(payload.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (payload.phone && !isValidPhone(payload.phone)) {
    return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
  }

  if (payload.message.length > 4000 || payload.notes.length > 4000) {
    return NextResponse.json({ error: "Please shorten your message and try again." }, { status: 400 });
  }

  if (!payload.message && !payload.notes) {
    return NextResponse.json({ error: "Enter your message before submitting." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
    requireTLS: true,
    auth: { user, pass },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
  });

  const subjectContext =
    payload.type === "Professional advice request"
      ? payload.preferredTime || "Advice request"
      : payload.topic || "General enquiry";

  await transporter.sendMail({
    from: `"${fromName}" <${user}>`,
    to,
    replyTo: payload.email,
    subject: `Nikera Hub - ${payload.type}: ${subjectContext}`,
    text: buildTextBody(payload, submittedAt),
    html: buildHtmlBody(payload, submittedAt),
  });

  return NextResponse.json({ ok: true });
}
