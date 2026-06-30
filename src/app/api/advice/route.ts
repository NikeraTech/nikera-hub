import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { adviceTopics, contactMethods, contactTimes } from "@/lib/advice";

export const runtime = "nodejs";

type AdvicePayload = {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  preferredContactMethod?: string;
  preferredTime?: string;
  message?: string;
  notes?: string;
  currentPage?: string;
  sourcePage?: string;
  calculatorName?: string;
  calculationResults?: string;
  calculatorContext?: string;
  timestamp?: string;
  browser?: string;
  referralUrl?: string;
  consent?: boolean;
  company?: string;
  startedAt?: string;
};

type ProfessionalAdviceLead = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  preferredContactMethod: string;
  preferredTime: string;
  notes: string;
  currentPage: string;
  calculatorName: string;
  calculationResults: string;
  timestamp: string;
  browser: string;
  referralUrl: string;
};

type GeneralEnquiryLead = {
  type: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  preferredTime: string;
  message: string;
  sourcePage: string;
  calculatorContext: string;
  submittedAt: string;
};

const recentSubmissionCache = new Map<string, number>();

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

function trimForEmail(value: string, limit = 6000) {
  return value.length > limit ? `${value.slice(0, limit)}…` : value;
}

function buildSubmissionKey(payload: ProfessionalAdviceLead) {
  return [
    payload.email.toLowerCase(),
    payload.phone,
    payload.topic,
    payload.currentPage,
    payload.calculatorName,
    payload.calculationResults.slice(0, 250),
  ].join("|");
}

function rejectRecentDuplicate(payload: ProfessionalAdviceLead) {
  const now = Date.now();

  for (const [key, value] of recentSubmissionCache.entries()) {
    if (now - value > 5 * 60_000) {
      recentSubmissionCache.delete(key);
    }
  }

  const key = buildSubmissionKey(payload);
  const previous = recentSubmissionCache.get(key);

  if (previous && now - previous < 5 * 60_000) {
    return true;
  }

  recentSubmissionCache.set(key, now);
  return false;
}

function buildProfessionalAdviceTextBody(lead: ProfessionalAdviceLead) {
  return [
    "New Mortgage & Protection Enquiry",
    "",
    "---",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Interested In: ${lead.topic}`,
    `Preferred Contact Method: ${lead.preferredContactMethod}`,
    `Preferred Contact Time: ${lead.preferredTime}`,
    `Notes: ${lead.notes || "Not provided"}`,
    "",
    "---",
    "",
    "Source Information",
    "",
    `Current Page: ${lead.currentPage || "Unknown"}`,
    `Calculator Used: ${lead.calculatorName || "Not provided"}`,
    `Calculation Results: ${lead.calculationResults || "Not provided"}`,
    `Timestamp: ${lead.timestamp || new Date().toISOString()}`,
    `Browser: ${lead.browser || "Unknown"}`,
    `Referral URL: ${lead.referralUrl || "Not provided"}`,
    "",
    "---",
    "",
    "Submitted via Nikera Hub",
  ].join("\n");
}

function buildProfessionalAdviceHtmlBody(lead: ProfessionalAdviceLead) {
  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Interested In", lead.topic],
    ["Preferred Contact Method", lead.preferredContactMethod],
    ["Preferred Contact Time", lead.preferredTime],
    ["Notes", lead.notes || "Not provided"],
    ["Current Page", lead.currentPage || "Unknown"],
    ["Calculator Used", lead.calculatorName || "Not provided"],
    ["Calculation Results", lead.calculationResults || "Not provided"],
    ["Timestamp", lead.timestamp || new Date().toISOString()],
    ["Browser", lead.browser || "Unknown"],
    ["Referral URL", lead.referralUrl || "Not provided"],
  ];

  return `<!doctype html>
  <html>
    <body style="font-family:Arial,sans-serif;color:#102a2c;">
      <h2>New Mortgage &amp; Protection Enquiry</h2>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#d8e1df;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><th align="left" style="background:#f3f7f6;">${escapeHtml(label)}</th><td>${escapeHtml(trimForEmail(value)).replace(/\n/g, "<br />")}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top:24px;">Submitted via Nikera Hub</p>
    </body>
  </html>`;
}

function createTransporter() {
  const host = readEnv("SMTP_HOST");
  const port = Number(readEnv("SMTP_PORT") ?? "587");
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const to = readEnv("SMTP_TO_EMAIL");
  const fromName = readEnv("SMTP_FROM_NAME") ?? "Nikera Hub";

  if (!host || !user || !pass || !to || !Number.isFinite(port)) {
    throw new Error("Email service is not configured.");
  }

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

  return { transporter, to, fromName, user };
}

async function deliverLeadViaEmail(lead: ProfessionalAdviceLead) {
  const { transporter, to, fromName, user } = createTransporter();

  await transporter.sendMail({
    from: `"${fromName}" <${user}>`,
    to,
    replyTo: lead.email,
    subject: "New Advice Request - Nikera Hub",
    text: buildProfessionalAdviceTextBody(lead),
    html: buildProfessionalAdviceHtmlBody(lead),
  });
}

async function dispatchProfessionalAdviceLead(lead: ProfessionalAdviceLead) {
  await deliverLeadViaEmail(lead);
}

function buildGeneralEnquiryTextBody(lead: GeneralEnquiryLead) {
  return [
    "Nikera Hub enquiry",
    "",
    `Trigger: ${lead.type}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Topic: ${lead.topic || "Not provided"}`,
    `Preferred contact time: ${lead.preferredTime || "Not provided"}`,
    "",
    ...(lead.calculatorContext ? ["Calculator context:", lead.calculatorContext, ""] : []),
    "Message / notes:",
    lead.message || "Not provided",
    "",
    `Source page: ${lead.sourcePage || "Unknown"}`,
    `Submitted: ${lead.submittedAt}`,
  ].join("\n");
}

function buildGeneralEnquiryHtmlBody(lead: GeneralEnquiryLead) {
  const rows = [
    ["Trigger", lead.type],
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone || "Not provided"],
    ["Topic", lead.topic || "Not provided"],
    ["Preferred contact time", lead.preferredTime || "Not provided"],
    ["Source page", lead.sourcePage || "Unknown"],
    ["Submitted", lead.submittedAt],
  ];

  const message = escapeHtml(lead.message || "Not provided").replace(/\n/g, "<br />");
  const calculatorContext = lead.calculatorContext
    ? escapeHtml(lead.calculatorContext).replace(/\n/g, "<br />")
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

async function deliverGeneralEnquiryViaEmail(lead: GeneralEnquiryLead) {
  const { transporter, to, fromName, user } = createTransporter();

  await transporter.sendMail({
    from: `"${fromName}" <${user}>`,
    to,
    replyTo: lead.email,
    subject: `Nikera Hub - ${lead.type}: ${lead.topic || "General enquiry"}`,
    text: buildGeneralEnquiryTextBody(lead),
    html: buildGeneralEnquiryHtmlBody(lead),
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AdvicePayload;

    const payload = {
      type: normaliseText(body.type) || "Professional advice request",
      name: normaliseText(body.name),
      email: normaliseText(body.email),
      phone: normaliseText(body.phone),
      topic: normaliseText(body.topic),
      preferredContactMethod: normaliseText(body.preferredContactMethod) || "No Preference",
      preferredTime: normaliseText(body.preferredTime) || "Anytime",
      message: normaliseText(body.message),
      notes: normaliseText(body.notes),
      currentPage: normaliseText(body.currentPage || body.sourcePage),
      calculatorName: normaliseText(body.calculatorName),
      calculationResults: normaliseText(body.calculationResults || body.calculatorContext),
      timestamp: normaliseText(body.timestamp),
      browser: normaliseText(body.browser),
      referralUrl: normaliseText(body.referralUrl),
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

    if (payload.notes.length > 4000 || payload.message.length > 4000) {
      return NextResponse.json({ error: "Please shorten your message and try again." }, { status: 400 });
    }

    if (payload.type !== "Professional advice request") {
      if (payload.phone && !isValidPhone(payload.phone)) {
        return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
      }

      if (!payload.message) {
        return NextResponse.json({ error: "Enter your message before submitting." }, { status: 400 });
      }

      const lead: GeneralEnquiryLead = {
        type: payload.type,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        topic: payload.topic,
        preferredTime: payload.preferredTime,
        message: payload.message || payload.notes,
        sourcePage: payload.currentPage,
        calculatorContext: trimForEmail(payload.calculationResults, 8000),
        submittedAt: payload.timestamp || new Date().toISOString(),
      };

      await deliverGeneralEnquiryViaEmail(lead);
      return NextResponse.json({ ok: true });
    }

    if (!payload.phone || !isValidPhone(payload.phone)) {
      return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
    }

    if (!adviceTopics.includes(payload.topic as (typeof adviceTopics)[number])) {
      return NextResponse.json({ error: "Choose what you need help with." }, { status: 400 });
    }

    if (!contactMethods.includes(payload.preferredContactMethod as (typeof contactMethods)[number])) {
      return NextResponse.json({ error: "Choose a preferred contact method." }, { status: 400 });
    }

    if (!contactTimes.includes(payload.preferredTime as (typeof contactTimes)[number])) {
      return NextResponse.json({ error: "Choose the best time to contact you." }, { status: 400 });
    }

    const lead: ProfessionalAdviceLead = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      topic: payload.topic,
      preferredContactMethod: payload.preferredContactMethod,
      preferredTime: payload.preferredTime,
      notes: payload.notes || payload.message,
      currentPage: payload.currentPage,
      calculatorName: payload.calculatorName,
      calculationResults: trimForEmail(payload.calculationResults, 8000),
      timestamp: payload.timestamp || new Date().toISOString(),
      browser: trimForEmail(payload.browser, 1200),
      referralUrl: payload.referralUrl,
    };

    if (rejectRecentDuplicate(lead)) {
      return NextResponse.json(
        { error: "This enquiry was already submitted recently. Please wait before sending it again." },
        { status: 409 },
      );
    }

    await dispatchProfessionalAdviceLead(lead);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "We could not send your enquiry right now.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
