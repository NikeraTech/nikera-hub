import type { ResourceTopicSlug } from "./resource-types";

type EditorialManifestLinkRule = {
  type: "guide" | "article" | "calculator" | "page";
  target:
    | string
    | {
        href: string;
        label: string;
      };
  purpose: string;
};

export type EditorialManifest = {
  topicSlug: ResourceTopicSlug;
  title: string;
  description: string;
  audience: string[];
  searchIntent: "informational" | "commercial investigation" | "mixed";
  conversionObjective: string;
  primaryCalculatorSlugs: string[];
  preferredCta: {
    label: string;
    href: string;
  };
  authoritySources: string[];
  internalLinkRules: EditorialManifestLinkRule[];
  editorialNotes: string[];
};

export const editorialManifests: Record<ResourceTopicSlug, EditorialManifest> = {
  "mortgage-basics": {
    topicSlug: "mortgage-basics",
    title: "Mortgages",
    description:
      "Understand mortgage rates, monthly repayments and how lenders assess affordability.",
    audience: [
      "UK mortgage researchers",
      "buyers comparing borrowing routes",
      "users who need plain-English mortgage explanations",
    ],
    searchIntent: "mixed",
    conversionObjective:
      "Move users from broad mortgage education into affordability tools and advice requests when the case becomes personal.",
    primaryCalculatorSlugs: ["mortgage-affordability", "mortgage-repayment", "loan-to-value"],
    preferredCta: {
      label: "Browse all articles",
      href: "/blogs",
    },
    authoritySources: [
      "Bank of England",
      "MoneyHelper",
      "FCA",
    ],
    internalLinkRules: [
      { type: "calculator", target: "mortgage-affordability", purpose: "Turn broad understanding into an illustrative borrowing starting point." },
      { type: "calculator", target: "mortgage-repayment", purpose: "Help users connect rates to monthly payment impact." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer a direct handoff once general guidance is no longer enough." },
    ],
    editorialNotes: [
      "Keep wording plain and practical.",
      "Avoid over-indexing on market noise without user-specific context.",
    ],
  },
  "first-time-buyers": {
    topicSlug: "first-time-buyers",
    title: "First-time buyers",
    description:
      "Plan your deposit, buying costs and the steps towards purchasing your first UK home.",
    audience: [
      "first-time buyers in the UK",
      "buyers planning deposits and affordability",
      "users who need process clarity before making an offer",
    ],
    searchIntent: "commercial investigation",
    conversionObjective:
      "Move users from first-home education into deposit and affordability tools, then into advice when they are approaching a live purchase.",
    primaryCalculatorSlugs: ["mortgage-affordability", "deposit", "loan-to-value"],
    preferredCta: {
      label: "Explore the first-time buyer guide",
      href: "/guides/first-time-buyer-guide",
    },
    authoritySources: [
      "MoneyHelper",
      "FCA",
      "GOV.UK",
    ],
    internalLinkRules: [
      { type: "calculator", target: "deposit", purpose: "Help buyers quantify deposit targets." },
      { type: "calculator", target: "mortgage-affordability", purpose: "Help buyers set a realistic borrowing range." },
      { type: "guide", target: "buying-your-first-home", purpose: "Support process understanding beyond pure affordability." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer guidance before an offer is made or where the purchase becomes real." },
    ],
    editorialNotes: [
      "Prioritize practical next steps over abstract explanation.",
      "Keep disclaimers visible around affordability and deposit assumptions.",
    ],
  },
  remortgaging: {
    topicSlug: "remortgaging",
    title: "Remortgaging",
    description:
      "Compare the costs of switching your mortgage and understand what to check before your current deal ends.",
    audience: [
      "existing mortgage holders",
      "users nearing product expiry",
      "borrowers comparing staying versus switching",
    ],
    searchIntent: "commercial investigation",
    conversionObjective:
      "Move users from rate curiosity into realistic savings comparison and advice where lender fit, timing or cost details matter.",
    primaryCalculatorSlugs: ["remortgage-savings", "early-repayment-charge", "mortgage-repayment"],
    preferredCta: {
      label: "Explore remortgaging",
      href: "/guides/remortgaging-explained",
    },
    authoritySources: [
      "MoneyHelper",
      "FCA",
      "Bank of England",
    ],
    internalLinkRules: [
      { type: "calculator", target: "remortgage-savings", purpose: "Test the broad payment and break-even logic." },
      { type: "calculator", target: "early-repayment-charge", purpose: "Help users understand whether timing could undermine the switch." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer a route into more case-specific remortgage review." },
    ],
    editorialNotes: [
      "Always push users toward total cost comparison, not headline rate fixation.",
    ],
  },
  protection: {
    topicSlug: "protection",
    title: "Protection",
    description:
      "Explore life insurance, income protection and the differences between types of cover.",
    audience: [
      "homeowners reviewing protection",
      "families comparing life and income protection",
      "users needing jargon-free cover explanations",
    ],
    searchIntent: "mixed",
    conversionObjective:
      "Move users from product confusion into a basic protection-needs estimate and then into advice where family context matters.",
    primaryCalculatorSlugs: ["protection-needs"],
    preferredCta: {
      label: "Estimate protection needs",
      href: "/calculators/protection-needs",
    },
    authoritySources: [
      "MoneyHelper",
      "FCA",
    ],
    internalLinkRules: [
      { type: "calculator", target: "protection-needs", purpose: "Help users quantify a starting-point gap." },
      { type: "guide", target: "life-insurance-explained", purpose: "Support foundational cover understanding." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer tailored guidance for family-specific cover decisions." },
    ],
    editorialNotes: [
      "Avoid sounding like a product recommendation.",
      "Keep 'general information only' messaging prominent.",
    ],
  },
  expats: {
    topicSlug: "expats",
    title: "Expats",
    description:
      "Prepare for a UK mortgage while living abroad or planning your return to the UK.",
    audience: [
      "UK expats",
      "returning UK residents",
      "overseas borrowers planning UK property decisions",
    ],
    searchIntent: "commercial investigation",
    conversionObjective:
      "Move users from broad expat research into realistic planning tools and specialist advice where policy fit and documents matter.",
    primaryCalculatorSlugs: ["mortgage-affordability", "deposit", "remortgage-savings"],
    preferredCta: {
      label: "Explore expat mortgages",
      href: "/expat-mortgages",
    },
    authoritySources: [
      "MoneyHelper",
      "FCA",
      "GOV.UK",
    ],
    internalLinkRules: [
      { type: "page", target: { href: "/expat-mortgages", label: "Explore expat mortgages" }, purpose: "Create a focused journey for expat cases." },
      { type: "calculator", target: "mortgage-affordability", purpose: "Provide a planning baseline before lender-specific review." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer specialist review once the broad outline looks workable." },
    ],
    editorialNotes: [
      "Make policy-fit uncertainty clear.",
      "Do not let generic mortgage assumptions drive expat content.",
    ],
  },
  "self-employed": {
    topicSlug: "self-employed",
    title: "Self-employed",
    description:
      "Understand the income records and business documents lenders may request from self-employed applicants.",
    audience: [
      "sole traders",
      "company directors",
      "self-employed borrowers comparing affordability and evidence expectations",
    ],
    searchIntent: "commercial investigation",
    conversionObjective:
      "Move users from self-employed uncertainty into affordability testing and document-aware advice.",
    primaryCalculatorSlugs: ["mortgage-affordability"],
    preferredCta: {
      label: "Explore self-employed mortgages",
      href: "/self-employed-mortgages",
    },
    authoritySources: [
      "MoneyHelper",
      "HMRC",
      "FCA",
    ],
    internalLinkRules: [
      { type: "calculator", target: "mortgage-affordability", purpose: "Provide an indicative borrowing frame." },
      { type: "article", target: "self-employed-mortgage-documents-what-lenders-usually-check", purpose: "Support evidence-led planning." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer a route into lender-fit review." },
    ],
    editorialNotes: [
      "Keep the focus on evidence quality and lender interpretation rather than crude income headlines.",
    ],
  },
  "visa-borrowing": {
    topicSlug: "visa-borrowing",
    title: "Visa-specific borrowing",
    description:
      "Learn how visa status may affect mortgage options, deposits and the evidence lenders request.",
    audience: [
      "Skilled Worker visa borrowers",
      "spouse visa borrowers",
      "users who need visa-aware mortgage planning",
    ],
    searchIntent: "commercial investigation",
    conversionObjective:
      "Move users from visa uncertainty into affordability planning and specialist advice around lender fit and documents.",
    primaryCalculatorSlugs: ["mortgage-affordability", "deposit"],
    preferredCta: {
      label: "Explore visa mortgage guidance",
      href: "/visa-mortgages",
    },
    authoritySources: [
      "GOV.UK",
      "MoneyHelper",
      "FCA",
    ],
    internalLinkRules: [
      { type: "calculator", target: "mortgage-affordability", purpose: "Set an early affordability frame." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer specialist review before users rely on broad market assumptions." },
    ],
    editorialNotes: [
      "Be explicit that visa borrowing is often more policy-sensitive than mainstream cases.",
    ],
  },
  "language-mortgage": {
    topicSlug: "language-mortgage",
    title: "Languages: mortgages",
    description:
      "Prepare for a mortgage discussion in your preferred language, with questions to ask and documents to gather.",
    audience: [
      "Indian-origin users in the UK",
      "native-language mortgage researchers",
      "families who want clearer mortgage discussions",
    ],
    searchIntent: "mixed",
    conversionObjective:
      "Build trust and move users into calculators and advice once they feel more confident asking the right questions.",
    primaryCalculatorSlugs: ["mortgage-affordability"],
    preferredCta: {
      label: "View language mortgage guides",
      href: "/mortgage-adviser-languages",
    },
    authoritySources: [
      "FCA",
      "MoneyHelper",
    ],
    internalLinkRules: [
      { type: "calculator", target: "mortgage-affordability", purpose: "Create an immediate practical next step after trust-building content." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer a guided handoff once trust has been built." },
    ],
    editorialNotes: [
      "Prioritize clarity and trust over promotion.",
    ],
  },
  "language-protection": {
    topicSlug: "language-protection",
    title: "Languages: protection",
    description:
      "Find practical questions for discussing life insurance and protection in your preferred language.",
    audience: [
      "Indian-origin users in the UK",
      "families comparing cover types",
      "native-language protection researchers",
    ],
    searchIntent: "mixed",
    conversionObjective:
      "Build trust and move users into protection tools and advice where family context affects the right next step.",
    primaryCalculatorSlugs: ["protection-needs"],
    preferredCta: {
      label: "View language protection guides",
      href: "/blogs",
    },
    authoritySources: [
      "FCA",
      "MoneyHelper",
    ],
    internalLinkRules: [
      { type: "calculator", target: "protection-needs", purpose: "Turn trust-building content into a quantified starting point." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer a supportive handoff where protection needs are personal." },
    ],
    editorialNotes: [
      "Keep tone calm, personal and educational.",
    ],
  },
  "family-deposit-support": {
    topicSlug: "family-deposit-support",
    title: "Family deposit support",
    description:
      "Understand gifted deposits, family loans and the records you may need when relatives help fund a purchase.",
    audience: [
      "buyers using gifted deposits",
      "families supporting UK property purchases",
      "users with overseas deposit-source complexity",
    ],
    searchIntent: "commercial investigation",
    conversionObjective:
      "Move users from deposit uncertainty into cleaner planning and advice before the transaction becomes time-sensitive.",
    primaryCalculatorSlugs: ["deposit", "loan-to-value"],
    preferredCta: {
      label: "Explore family deposit support",
      href: "/family-deposit-support",
    },
    authoritySources: [
      "MoneyHelper",
      "HMRC",
      "FCA",
    ],
    internalLinkRules: [
      { type: "calculator", target: "deposit", purpose: "Help quantify the amount before dealing with funding-route detail." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer guidance where source-of-funds and timing create risk." },
    ],
    editorialNotes: [
      "Push users to prepare evidence early, not reactively.",
    ],
  },
  "cross-border-income": {
    topicSlug: "cross-border-income",
    title: "Overseas income",
    description:
      "Prepare overseas income and savings records, and understand how currency and lender requirements may affect your plans.",
    audience: [
      "overseas earners",
      "expats using foreign income",
      "buyers with currency and document complexity",
    ],
    searchIntent: "commercial investigation",
    conversionObjective:
      "Move users from broad eligibility questions into realistic affordability planning and specialist advice where lender treatment differs.",
    primaryCalculatorSlugs: ["mortgage-affordability", "deposit"],
    preferredCta: {
      label: "Explore overseas income guides",
      href: "/blogs/using-overseas-income-for-a-uk-mortgage",
    },
    authoritySources: [
      "MoneyHelper",
      "FCA",
      "GOV.UK",
    ],
    internalLinkRules: [
      { type: "calculator", target: "mortgage-affordability", purpose: "Set a realistic borrowing baseline before lender-specific review." },
      { type: "page", target: { href: "/request-advice", label: "Request professional advice" }, purpose: "Offer specialist review where income treatment may vary materially." },
    ],
    editorialNotes: [
      "Keep reminding users that calculators are planning tools, not lender decisions.",
    ],
  },
};

export function getEditorialManifest(topicSlug?: ResourceTopicSlug) {
  return topicSlug ? editorialManifests[topicSlug] : undefined;
}
