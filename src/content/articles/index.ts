import type { Resource, ResourceTopicSlug } from "@/lib/resource-types";
import { phase1LanguageMortgageAdviserArticles } from "./phase1-language-mortgage-advisers";
import { phase2LanguageInsuranceAdviserArticles } from "./phase2-language-insurance-advisers";
import { phase3SpecialistBorrowingArticles } from "./phase3-specialist-borrowing";
import { migratedLegacyArticles } from "./legacy-migrated-articles";

const articleTopicBySlug: Record<string, ResourceTopicSlug> = {
  "why-you-need-a-malayalam-speaking-mortgage-adviser-in-the-uk": "language-mortgage",
  "why-you-need-a-tamil-speaking-mortgage-adviser-in-the-uk": "language-mortgage",
  "why-you-need-a-hindi-speaking-mortgage-adviser-in-the-uk": "language-mortgage",
  "why-you-need-a-punjabi-speaking-mortgage-adviser-in-the-uk": "language-mortgage",
  "why-you-need-a-telugu-speaking-mortgage-adviser-in-the-uk": "language-mortgage",
  "why-you-need-a-malayalam-speaking-insurance-adviser-in-the-uk": "language-protection",
  "why-you-need-a-tamil-speaking-insurance-adviser-in-the-uk": "language-protection",
  "why-you-need-a-hindi-speaking-insurance-adviser-in-the-uk": "language-protection",
  "why-you-need-a-punjabi-speaking-insurance-adviser-in-the-uk": "language-protection",
  "why-you-need-a-telugu-speaking-insurance-adviser-in-the-uk": "language-protection",
  "getting-a-uk-mortgage-on-a-skilled-worker-visa": "visa-borrowing",
  "uk-mortgage-planning-on-a-spouse-visa": "visa-borrowing",
  "self-employed-mortgage-documents-what-lenders-usually-check": "self-employed",
  "how-self-employed-borrowers-can-improve-mortgage-affordability": "self-employed",
  "gifted-deposit-from-family-in-india-to-buy-a-uk-home": "family-deposit-support",
  "using-family-support-for-a-uk-deposit-what-lenders-check": "family-deposit-support",
  "understanding-mortgage-rates": "mortgage-basics",
  "how-much-deposit-do-you-need": "first-time-buyers",
  "five-remortgaging-costs": "remortgaging",
  "life-cover-vs-critical-illness": "protection",
  "why-lender-affordability-differs": "mortgage-basics",
  "rental-stress-testing": "mortgage-basics",
  "uk-mortgages-for-expats": "expats",
  "returning-to-the-uk-mortgage-planning": "expats",
  "expat-remortgage-what-to-check": "expats",
  "buy-to-let-for-uk-expats-what-changes": "expats",
  "using-overseas-income-for-a-uk-mortgage": "cross-border-income",
  "expat-deposit-source-checklist": "cross-border-income",
};

function withArticleTopic(resource: Resource): Resource {
  const topicSlug = articleTopicBySlug[resource.slug];
  return topicSlug ? { ...resource, topicSlug } : resource;
}

export const managedArticles = [
  ...phase1LanguageMortgageAdviserArticles,
  ...phase2LanguageInsuranceAdviserArticles,
  ...phase3SpecialistBorrowingArticles,
  ...migratedLegacyArticles,
].map(withArticleTopic);

export function getManagedArticleBySlug(slug: string): Resource | undefined {
  return managedArticles.find((article) => article.slug === slug);
}
