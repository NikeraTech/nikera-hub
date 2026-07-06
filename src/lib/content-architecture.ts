import type { Resource } from "./resource-types";

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
      title: "Mortgages",
      description:
        "Core mortgage articles covering rates, affordability and practical planning before you speak to an adviser.",
      count: mortgageBasics.length,
      ctaLabel: "Browse all articles",
      ctaHref: "/blogs",
      items: mortgageBasics.map(toTopicLink),
    },
    {
      slug: "first-time-buyers",
      title: "First-time buyers",
      description:
        "Entry-point content for deposits, affordability, budgeting and the practical stages of buying your first home.",
      count: firstTimeBuyers.length,
      ctaLabel: "Read first-time buyer content",
      ctaHref: "/guides/first-time-buyer-guide",
      items: firstTimeBuyers.map(toTopicLink),
    },
    {
      slug: "remortgaging",
      title: "Remortgaging",
      description:
        "Decision support for reviewing deals, switching costs and judging whether a remortgage is genuinely worthwhile.",
      count: remortgaging.length,
      ctaLabel: "Explore remortgaging",
      ctaHref: "/guides/remortgaging-explained",
      items: remortgaging.slice(0, 4).map(toTopicLink),
    },
    {
      slug: "protection",
      title: "Protection",
      description:
        "Plain-English protection content covering life insurance, income protection and comparing cover types sensibly.",
      count: protection.length,
      ctaLabel: "Estimate protection needs",
      ctaHref: "/calculators/protection-needs",
      items: protection.slice(0, 4).map(toTopicLink),
    },
    {
      slug: "expats",
      title: "Expats",
      description:
        "A specialist cluster for UK expat mortgages, returning residents, overseas income and cross-border document preparation.",
      count: expats.length,
      ctaLabel: "Explore expat mortgages",
      ctaHref: "/expat-mortgages",
      items: expats.slice(0, 4).map(toTopicLink),
    },
    {
      slug: "self-employed",
      title: "Self-employed",
      description:
        "Focused guidance for borrowers whose income is not as simple as a standard salaried application.",
      count: selfEmployed.length,
      ctaLabel: "Read self-employed guide",
      ctaHref: "/guides/self-employed-mortgage-guide",
      items: selfEmployed.slice(0, 4).map(toTopicLink),
    },
    {
      slug: "visa-borrowing",
      title: "Visa-specific borrowing",
      description:
        "Specialist content for borrowers planning a UK mortgage while visa status still affects lender fit and case structure.",
      count: visaBorrowing.length,
      ctaLabel: "Read visa borrowing content",
      ctaHref: "/blogs/getting-a-uk-mortgage-on-a-skilled-worker-visa",
      items: visaBorrowing.map(toTopicLink),
    },
    {
      slug: "language-mortgage",
      title: "Languages: mortgages",
      description:
        "Phase 1 language-specific mortgage adviser content for users who want borrowing decisions explained more clearly.",
      count: languageMortgage.length,
      ctaLabel: "View language mortgage guides",
      ctaHref: "/blogs",
      items: languageMortgage.map(toTopicLink),
    },
    {
      slug: "language-protection",
      title: "Languages: protection",
      description:
        "Phase 2 language-specific insurance adviser content that connects protection planning to real household decisions.",
      count: languageProtection.length,
      ctaLabel: "View language protection guides",
      ctaHref: "/blogs",
      items: languageProtection.map(toTopicLink),
    },
    {
      slug: "family-deposit-support",
      title: "Family deposit support",
      description:
        "Deposit-planning content for gifted deposits, overseas family support and the source-of-funds checks that often slow cases down.",
      count: familyDepositSupport.length,
      ctaLabel: "Read family deposit support content",
      ctaHref: "/blogs/gifted-deposit-from-family-in-india-to-buy-a-uk-home",
      items: familyDepositSupport.map(toTopicLink),
    },
    {
      slug: "cross-border-income",
      title: "Overseas income",
      description:
        "Cross-border planning content for borrowers using overseas income, overseas savings and more complex evidence trails.",
      count: crossBorderIncome.length,
      ctaLabel: "Read overseas income content",
      ctaHref: "/blogs/using-overseas-income-for-a-uk-mortgage",
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
