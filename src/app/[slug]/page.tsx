import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AboutPage,
  BlogsPage,
  ContactPage,
  ExpatMortgagesPage,
  FamilyDepositSupportPage,
  GuidesPage,
  MortgagePage,
  MortgageAdviserLanguagesPage,
  PrivacyPage,
  RequestAdvicePage,
  SelfEmployedMortgagesPage,
  TermsPage,
  VisaMortgagesPage,
} from "@/components/content-pages";
import { buildMetadata } from "@/lib/seo";

const pages = {
  "mortgage-protection": {
    title: "Mortgage & Protection",
    description:
      "Practical UK mortgage calculators, plain-English protection guidance and access to professional support.",
    component: MortgagePage,
    keywords: ["UK mortgage protection", "UK mortgage calculators", "UK life insurance guidance"],
    category: "Mortgage & protection",
  },
  "expat-mortgages": {
    title: "UK Expat Mortgages",
    description:
      "UK-focused guidance for expat mortgages, returning residents and overseas borrowers reviewing property plans.",
    component: ExpatMortgagesPage,
    keywords: [
      "UK expat mortgages",
      "mortgage for UK expats",
      "returning to the UK mortgage",
      "expat remortgage UK",
    ],
    category: "Expat mortgages",
  },
  "mortgage-adviser-languages": {
    title: "Mortgage Adviser Guidance by Language",
    description:
      "Language-specific UK mortgage adviser guides for users who want first-time buyer, affordability and lender conversations explained more clearly.",
    component: MortgageAdviserLanguagesPage,
    keywords: [
      "language-specific mortgage adviser UK",
      "Tamil mortgage adviser UK",
      "Hindi mortgage adviser UK",
      "Punjabi mortgage adviser UK",
      "Telugu mortgage adviser UK",
      "Malayalam mortgage adviser UK",
    ],
    category: "Language-specific mortgage advice",
  },
  "self-employed-mortgages": {
    title: "Self-employed Mortgages",
    description:
      "UK self-employed mortgage guidance covering income evidence, affordability, lender interpretation and document preparation.",
    component: SelfEmployedMortgagesPage,
    keywords: [
      "self-employed mortgage UK",
      "self-employed mortgage documents",
      "company director mortgage UK",
      "sole trader mortgage UK",
    ],
    category: "Self-employed mortgages",
  },
  "visa-mortgages": {
    title: "Visa Mortgage Guidance",
    description:
      "UK mortgage guidance for borrowers on visas, including Skilled Worker and spouse visa mortgage planning.",
    component: VisaMortgagesPage,
    keywords: [
      "visa mortgage UK",
      "Skilled Worker visa mortgage",
      "spouse visa mortgage UK",
      "mortgage on visa UK",
    ],
    category: "Visa-specific borrowing",
  },
  "family-deposit-support": {
    title: "Family Deposit Support",
    description:
      "UK mortgage guidance for gifted deposits, overseas family support and deposit source-of-funds preparation.",
    component: FamilyDepositSupportPage,
    keywords: [
      "gifted deposit UK mortgage",
      "family deposit support mortgage",
      "overseas gifted deposit UK",
      "deposit source checks mortgage",
    ],
    category: "Family deposit support",
  },
  guides: {
    title: "Expert Guides",
    description: "Plain-English UK guides for mortgages, protection, remortgaging and buying a home.",
    component: GuidesPage,
    keywords: ["UK mortgage guides", "UK protection guides", "UK first-time buyer guides"],
    category: "Guides",
  },
  blogs: {
    title: "Mortgage & Protection Insights",
    description:
      "Structured UK-focused content covering mortgages, protection, expats, first-time buyers and language-specific adviser journeys.",
    component: BlogsPage,
    keywords: [
      "UK mortgage articles",
      "UK protection articles",
      "UK expat mortgage content",
      "language-specific mortgage adviser guides",
      "UK remortgage insights",
    ],
    category: "Articles",
  },
  about: {
    title: "About Hub",
    description:
      "Learn why Nikera Hub exists and how we approach UK financial education and practical tools.",
    component: AboutPage,
    keywords: ["about Nikera Hub", "UK financial education", "UK mortgage knowledge"],
    category: "About",
  },
  contact: {
    title: "Contact Hub",
    description:
      "Contact Nikera Hub, ask a question or request professional UK mortgage and protection guidance.",
    component: ContactPage,
    keywords: ["contact Nikera Hub", "UK mortgage enquiry", "request advice"],
    category: "Contact",
  },
  "request-advice": {
    title: "Request Professional Advice",
    description:
      "Request professional UK mortgage and protection advice with a no-obligation enquiry through Nikera Hub.",
    component: RequestAdvicePage,
    keywords: ["request mortgage advice", "UK protection advice", "Nikera Hub advice request"],
    category: "Contact",
  },
  privacy: {
    title: "Privacy Notice",
    description: "How Nikera Hub collects, uses, protects and shares personal information.",
    component: PrivacyPage,
    keywords: ["privacy notice", "data protection", "Nikera Hub privacy"],
    category: "Legal",
    noIndex: true,
  },
  terms: {
    title: "Terms of Use",
    description: "The terms that apply when accessing Nikera Hub content, calculators and enquiry services.",
    component: TermsPage,
    keywords: ["terms of use", "website terms", "Nikera Hub terms"],
    category: "Legal",
    noIndex: true,
  },
} as const;

type PageSlug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as PageSlug];

  return page
    ? buildMetadata({
        title: page.title,
        description: page.description,
        path: `/${slug}`,
        keywords: page.keywords,
        category: page.category,
        noIndex: "noIndex" in page ? page.noIndex : false,
      })
    : {};
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages[slug as PageSlug];

  if (!page) notFound();

  const Component = page.component;
  return <Component />;
}
