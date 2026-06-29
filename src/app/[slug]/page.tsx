import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AboutPage,
  BlogsPage,
  ContactPage,
  GuidesPage,
  MortgagePage,
  PrivacyPage,
  TermsPage,
} from "@/components/content-pages";
import { buildMetadata } from "@/lib/seo";

const pages = {
  "mortgage-protection": {
    title: "Mortgage & Protection",
    description:
      "Practical mortgage calculators, plain-English protection guidance and access to professional support.",
    component: MortgagePage,
    keywords: ["mortgage protection", "mortgage calculators", "life insurance guidance"],
    category: "Mortgage & protection",
  },
  guides: {
    title: "Expert Guides",
    description: "Plain-English guides for mortgages, protection, remortgaging and buying a home.",
    component: GuidesPage,
    keywords: ["mortgage guides", "protection guides", "first-time buyer guides"],
    category: "Guides",
  },
  blogs: {
    title: "Mortgage & Protection Insights",
    description:
      "Useful articles explaining mortgage markets, affordability, protection and property finance.",
    component: BlogsPage,
    keywords: ["mortgage articles", "market updates", "remortgage insights"],
    category: "Articles",
  },
  about: {
    title: "About Hub",
    description:
      "Learn why Nikera Hub exists and how we approach financial education and practical tools.",
    component: AboutPage,
    keywords: ["about Nikera Hub", "financial education", "mortgage knowledge"],
    category: "About",
  },
  contact: {
    title: "Contact Hub",
    description:
      "Contact Nikera Hub, ask a question or request professional mortgage and protection guidance.",
    component: ContactPage,
    keywords: ["contact Nikera Hub", "mortgage enquiry", "request advice"],
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
