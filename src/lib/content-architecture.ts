import type { Resource } from "./resource-types";
import { editorialManifests } from "./editorial-manifests";

type TopicLink = {
  label: string;
  href: string;
};

export type ContentTopic = {
  slug: string;
  title: string;
  description: string;
  count: number;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
  items: TopicLink[];
};

export type PlannedTopic = {
  slug: string;
  title: string;
  description: string;
  nextStep: string;
};

function toTopicLink(resource: Resource): TopicLink {
  return {
    label: resource.title,
    href: `/${resource.kind === "guide" ? "guides" : "blogs"}/${resource.slug}`,
  };
}

function byTopic(resources: Resource[], topicSlug: Resource["topicSlug"]) {
  return resources.filter((resource) => resource.topicSlug === topicSlug);
}

export function buildContentTopics({
  guides,
  articles,
}: {
  guides: Resource[];
  articles: Resource[];
}) {
  const allResources = [...guides, ...articles];

  const mortgageBasics = byTopic(allResources, "mortgage-basics");
  const firstTimeBuyers = byTopic(allResources, "first-time-buyers");
  const remortgaging = byTopic(allResources, "remortgaging");
  const protection = byTopic(allResources, "protection");
  const expats = byTopic(allResources, "expats");
  const languageMortgage = byTopic(articles, "language-mortgage");
  const languageProtection = byTopic(articles, "language-protection");
  const selfEmployed = byTopic(allResources, "self-employed");
  const visaBorrowing = byTopic(articles, "visa-borrowing");
  const familyDepositSupport = byTopic(articles, "family-deposit-support");
  const crossBorderIncome = byTopic(allResources, "cross-border-income");

  const liveTopics: ContentTopic[] = [
    {
      slug: "mortgage-basics",
      title: editorialManifests["mortgage-basics"].title,
      description: editorialManifests["mortgage-basics"].description,
      count: mortgageBasics.length,
      ctaLabel: editorialManifests["mortgage-basics"].preferredCta.label,
      ctaHref: editorialManifests["mortgage-basics"].preferredCta.href,
      items: mortgageBasics.map(toTopicLink),
    },
    {
      slug: "first-time-buyers",
      title: editorialManifests["first-time-buyers"].title,
      description: editorialManifests["first-time-buyers"].description,
      count: firstTimeBuyers.length,
      ctaLabel: editorialManifests["first-time-buyers"].preferredCta.label,
      ctaHref: editorialManifests["first-time-buyers"].preferredCta.href,
      items: firstTimeBuyers.map(toTopicLink),
    },
    {
      slug: "remortgaging",
      title: editorialManifests.remortgaging.title,
      description: editorialManifests.remortgaging.description,
      count: remortgaging.length,
      ctaLabel: editorialManifests.remortgaging.preferredCta.label,
      ctaHref: editorialManifests.remortgaging.preferredCta.href,
      items: remortgaging.slice(0, 4).map(toTopicLink),
    },
    {
      slug: "protection",
      title: editorialManifests.protection.title,
      description: editorialManifests.protection.description,
      count: protection.length,
      ctaLabel: editorialManifests.protection.preferredCta.label,
      ctaHref: editorialManifests.protection.preferredCta.href,
      items: protection.slice(0, 4).map(toTopicLink),
    },
    {
      slug: "expats",
      title: editorialManifests.expats.title,
      description: editorialManifests.expats.description,
      count: expats.length,
      ctaLabel: editorialManifests.expats.preferredCta.label,
      ctaHref: editorialManifests.expats.preferredCta.href,
      items: expats.slice(0, 4).map(toTopicLink),
    },
    {
      slug: "self-employed",
      title: editorialManifests["self-employed"].title,
      description: editorialManifests["self-employed"].description,
      count: selfEmployed.length,
      ctaLabel: editorialManifests["self-employed"].preferredCta.label,
      ctaHref: editorialManifests["self-employed"].preferredCta.href,
      items: selfEmployed.slice(0, 4).map(toTopicLink),
    },
    {
      slug: "visa-borrowing",
      title: editorialManifests["visa-borrowing"].title,
      description: editorialManifests["visa-borrowing"].description,
      count: visaBorrowing.length,
      ctaLabel: editorialManifests["visa-borrowing"].preferredCta.label,
      ctaHref: editorialManifests["visa-borrowing"].preferredCta.href,
      items: visaBorrowing.map(toTopicLink),
    },
    {
      slug: "language-mortgage",
      title: editorialManifests["language-mortgage"].title,
      description: editorialManifests["language-mortgage"].description,
      count: languageMortgage.length,
      ctaLabel: editorialManifests["language-mortgage"].preferredCta.label,
      ctaHref: editorialManifests["language-mortgage"].preferredCta.href,
      items: languageMortgage.map(toTopicLink),
    },
    {
      slug: "language-protection",
      title: editorialManifests["language-protection"].title,
      description: editorialManifests["language-protection"].description,
      count: languageProtection.length,
      ctaLabel: editorialManifests["language-protection"].preferredCta.label,
      ctaHref: editorialManifests["language-protection"].preferredCta.href,
      items: languageProtection.map(toTopicLink),
    },
    {
      slug: "family-deposit-support",
      title: editorialManifests["family-deposit-support"].title,
      description: editorialManifests["family-deposit-support"].description,
      count: familyDepositSupport.length,
      ctaLabel: editorialManifests["family-deposit-support"].preferredCta.label,
      ctaHref: editorialManifests["family-deposit-support"].preferredCta.href,
      items: familyDepositSupport.map(toTopicLink),
    },
    {
      slug: "cross-border-income",
      title: editorialManifests["cross-border-income"].title,
      description: editorialManifests["cross-border-income"].description,
      count: crossBorderIncome.length,
      ctaLabel: editorialManifests["cross-border-income"].preferredCta.label,
      ctaHref: editorialManifests["cross-border-income"].preferredCta.href,
      items: crossBorderIncome.map(toTopicLink),
    },
  ];

  const plannedTopics: PlannedTopic[] = [
    {
      slug: "partner-led-local-pages",
      title: "Local and partner-led pages",
      description:
        "City or community landing pages should only be introduced once there is genuine local differentiation and partner coverage behind them.",
      nextStep: "Create only when real adviser inventory and trust signals exist.",
    },
    {
      slug: "visa-expansion",
      title: "Deeper visa scenarios",
      description:
        "The next expansion within visa borrowing should cover more specific situations such as returning applicants, dependent visas and mixed-income household structures.",
      nextStep: "Add narrower high-intent pages only where the search intent is clearly distinct.",
    },
  ];

  return {
    liveTopics,
    plannedTopics,
  };
}
