export type ResourceSubsection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: ResourceSubsection[];
};

export type ResourceFaq = {
  question: string;
  answer: string;
};

export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourceTopicSlug =
  | "mortgage-basics"
  | "first-time-buyers"
  | "remortgaging"
  | "protection"
  | "expats"
  | "self-employed"
  | "visa-borrowing"
  | "language-mortgage"
  | "language-protection"
  | "family-deposit-support"
  | "cross-border-income";

export type Resource = {
  slug: string;
  kind: "guide" | "article";
  topicSlug?: ResourceTopicSlug;
  category: string;
  title: string;
  description: string;
  readTime: string;
  published: string;
  updated: string;
  sections: ResourceSection[];
  keywords?: string[];
  faq?: ResourceFaq[];
  internalLinks?: ResourceLink[];
  authorityLinks?: ResourceLink[];
  relatedCalculatorSlug?: string;
  relatedCalculatorEyebrow?: string;
  relatedCalculatorTitle?: string;
  relatedCalculatorCta?: string;
};
