import type { Resource } from "@/lib/resource-types";
import { managedGuides as baseGuides } from "./migrated-guides";
import type { ResourceTopicSlug } from "@/lib/resource-types";

type GuideEnhancement = Pick<Resource, "keywords" | "faq" | "internalLinks" | "authorityLinks">;

const commonGuideLinks = [{ label: "Request professional advice", href: "/request-advice" }];
const guideTopicBySlug: Record<string, ResourceTopicSlug> = {
  "first-time-buyer-guide": "first-time-buyers",
  "remortgaging-explained": "remortgaging",
  "life-insurance-explained": "protection",
  "income-protection-guide": "protection",
  "self-employed-mortgage-guide": "self-employed",
  "buying-your-first-home": "first-time-buyers",
};

const guideEnhancements: Record<string, GuideEnhancement> = {
  "first-time-buyer-guide": {
    keywords: [
      "first time buyer guide UK",
      "UK first time buyer mortgage guide",
      "how to buy your first home in the UK",
      "first time buyer deposit and mortgage guide",
    ],
    faq: [
      {
        question: "What should a first-time buyer do before viewing homes?",
        answer:
          "Start with a realistic budget, review your credit position, organise documents and understand your likely deposit and monthly ownership costs.",
      },
      {
        question: "Is an Agreement in Principle the same as a mortgage offer?",
        answer:
          "No. It is an early indication only, not a guarantee that the lender will make a full mortgage offer later.",
      },
      {
        question: "Should first-time buyers keep money aside after the deposit?",
        answer:
          "Usually yes. A buffer for legal fees, moving costs, repairs and general resilience is often just as important as hitting the minimum deposit.",
      },
      {
        question: "Do lenders look at more than income multiples?",
        answer:
          "Yes. Lenders also assess spending, credit commitments, household circumstances and their own affordability assumptions.",
      },
    ],
    internalLinks: [
      { label: "Use the mortgage affordability calculator", href: "/calculators/mortgage-affordability" },
      { label: "Read how much deposit you may need", href: "/blogs/how-much-deposit-do-you-need" },
      { label: "Read buying your first home", href: "/guides/buying-your-first-home" },
      ...commonGuideLinks,
    ],
    authorityLinks: [
      { label: "MoneyHelper: buying a home", href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home" },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
  },
  "remortgaging-explained": {
    keywords: [
      "remortgaging explained UK",
      "UK remortgage guide",
      "when to remortgage UK",
      "remortgage costs and savings UK",
    ],
    faq: [
      {
        question: "When should you start reviewing a remortgage?",
        answer:
          "Usually several months before your current deal ends so you have time to compare rates, fees, lender options and any early repayment charges.",
      },
      {
        question: "Does a lower rate always mean a better remortgage?",
        answer:
          "No. The full comparison should include fees, incentives, total cost over time and whether the product fits your plans.",
      },
      {
        question: "Is switching lender the only remortgage route?",
        answer:
          "No. A product transfer with your current lender can sometimes be simpler or cheaper, but it still needs comparing with external options.",
      },
      {
        question: "Can property value changes affect a remortgage?",
        answer:
          "Yes. Loan-to-value can change materially if the property value or mortgage balance has moved since the original deal.",
      },
    ],
    internalLinks: [
      { label: "Use the remortgage savings calculator", href: "/calculators/remortgage-savings" },
      { label: "Read five remortgaging costs to consider", href: "/blogs/five-remortgaging-costs" },
      { label: "Explore mortgage and protection guidance", href: "/mortgage-protection" },
      ...commonGuideLinks,
    ],
    authorityLinks: [
      {
        label: "MoneyHelper: remortgaging your home",
        href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/remortgaging-your-home",
      },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
  },
  "life-insurance-explained": {
    keywords: [
      "life insurance explained UK",
      "UK life insurance guide",
      "what life insurance covers UK",
      "mortgage life insurance UK guide",
    ],
    faq: [
      {
        question: "What is life insurance designed to do?",
        answer:
          "It is generally designed to pay a lump sum if the insured person dies during the policy term, helping dependants manage financial obligations.",
      },
      {
        question: "Is decreasing cover the same as level cover?",
        answer:
          "No. Decreasing cover usually falls over time, while level cover broadly stays fixed. The right structure depends on the need being protected.",
      },
      {
        question: "Should workplace benefits replace private life cover?",
        answer:
          "Not automatically. Workplace benefits can help, but they may not be sufficient or may not continue if employment changes.",
      },
      {
        question: "When should life insurance be reviewed?",
        answer:
          "Often after major life changes such as marriage, children, moving home or taking on a larger mortgage.",
      },
    ],
    internalLinks: [
      { label: "Use the protection needs calculator", href: "/calculators/protection-needs" },
      { label: "Read the income protection guide", href: "/guides/income-protection-guide" },
      { label: "Read life cover vs critical illness cover", href: "/blogs/life-cover-vs-critical-illness" },
      ...commonGuideLinks,
    ],
    authorityLinks: [
      {
        label: "MoneyHelper: do I need life insurance?",
        href: "https://www.moneyhelper.org.uk/en/family-and-care/death-and-bereavement/do-i-need-life-insurance",
      },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
  },
  "income-protection-guide": {
    keywords: [
      "income protection guide UK",
      "how income protection works UK",
      "UK income protection explained",
      "income protection deferred period guide",
    ],
    faq: [
      {
        question: "What does income protection usually cover?",
        answer:
          "It is generally designed to pay a regular benefit if illness or injury prevents you from working, subject to policy terms and assessment.",
      },
      {
        question: "Why does the deferred period matter?",
        answer:
          "It affects how long you wait before payments start and should be considered alongside sick pay, savings and other support.",
      },
      {
        question: "Does income protection replace full salary?",
        answer:
          "Usually no. Policies often replace part of income rather than the full amount, within policy limits.",
      },
      {
        question: "Should income protection be reviewed over time?",
        answer:
          "Yes. Changes to earnings, benefits and occupation can affect whether the cover still fits your needs.",
      },
    ],
    internalLinks: [
      { label: "Use the protection needs calculator", href: "/calculators/protection-needs" },
      { label: "Read life insurance explained", href: "/guides/life-insurance-explained" },
      { label: "Explore mortgage and protection guidance", href: "/mortgage-protection" },
      ...commonGuideLinks,
    ],
    authorityLinks: [
      {
        label: "MoneyHelper: insurance for illness and disability",
        href: "https://www.moneyhelper.org.uk/en/family-and-care/long-term-care/insurance-for-illness-and-disability",
      },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
  },
  "self-employed-mortgage-guide": {
    keywords: [
      "self employed mortgage guide UK",
      "UK mortgage for self employed",
      "self employed mortgage documents UK",
      "limited company mortgage guide UK",
    ],
    faq: [
      {
        question: "Can self-employed borrowers get a mortgage in the UK?",
        answer:
          "Potentially yes. The main issue is usually how lenders assess the income and whether the supporting evidence is clear and consistent.",
      },
      {
        question: "Do all lenders use the same self-employed income figure?",
        answer:
          "No. Some use profits, some use salary and dividends, and some use other documented measures depending on business structure and policy.",
      },
      {
        question: "What documents often matter in self-employed cases?",
        answer:
          "Common examples include accounts, tax calculations, tax year overviews, bank statements and clear deposit-source evidence.",
      },
      {
        question: "Should borrowers change how they draw income just for a mortgage?",
        answer:
          "Not without careful thought. Tax and lending considerations are different, so major changes should be considered carefully.",
      },
    ],
    internalLinks: [
      { label: "Use the mortgage affordability calculator", href: "/calculators/mortgage-affordability" },
      {
        label: "Read self-employed mortgage documents guidance",
        href: "/blogs/self-employed-mortgage-documents-what-lenders-usually-check",
      },
      {
        label: "Read how self-employed borrowers can improve affordability",
        href: "/blogs/how-self-employed-borrowers-can-improve-mortgage-affordability",
      },
      ...commonGuideLinks,
    ],
    authorityLinks: [
      {
        label: "MoneyHelper: mortgages if you're self-employed",
        href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgages-if-youre-self-employed",
      },
      { label: "HMRC: Self Assessment tax returns", href: "https://www.gov.uk/self-assessment-tax-returns" },
    ],
  },
  "buying-your-first-home": {
    keywords: [
      "buying your first home UK guide",
      "UK first home buying process",
      "first home guide UK",
      "first home deposit and legal process UK",
    ],
    faq: [
      {
        question: "What should buyers budget for beyond the mortgage?",
        answer:
          "Common costs include legal fees, surveys, moving, furnishing, repairs, council tax, utilities and a cash buffer after completion.",
      },
      {
        question: "Is the lender valuation enough on its own?",
        answer:
          "Not always. A lender valuation is primarily for the lender and may not give enough detail on the condition of the property for the buyer.",
      },
      {
        question: "What often delays a first home purchase?",
        answer:
          "Common delays include incomplete paperwork, legal enquiries, chain issues, leasehold complications and valuation or survey findings.",
      },
      {
        question: "Why should deposit evidence be prepared early?",
        answer:
          "Because source-of-funds questions are routine and can create avoidable delay if the documentation is only gathered late in the process.",
      },
    ],
    internalLinks: [
      { label: "Use the deposit calculator", href: "/calculators/deposit" },
      { label: "Read the first-time buyer guide", href: "/guides/first-time-buyer-guide" },
      { label: "Read gifted deposit support guidance", href: "/blogs/using-family-support-for-a-uk-deposit-what-lenders-check" },
      ...commonGuideLinks,
    ],
    authorityLinks: [
      { label: "MoneyHelper: buying a home", href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home" },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
  },
};

export const managedGuides: Resource[] = baseGuides.map((guide) => ({
  ...guide,
  topicSlug: guideTopicBySlug[guide.slug],
  ...(guideEnhancements[guide.slug] ?? {}),
}));
