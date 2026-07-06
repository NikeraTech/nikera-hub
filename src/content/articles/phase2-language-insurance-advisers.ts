import type { Resource } from "@/lib/resource-types";

type LanguageInsuranceArticleInput = {
  language: string;
  adjective: string;
  communityLabel: string;
};

function createLanguageInsuranceAdviserArticle({
  language,
  adjective,
  communityLabel,
}: LanguageInsuranceArticleInput): Resource {
  const languageLower = language.toLowerCase();
  const slug = `why-you-need-a-${languageLower}-speaking-insurance-adviser-in-the-uk`;
  const faq = [
    {
      question: `Why do people look for a ${language}-speaking insurance adviser in the UK?`,
      answer: `Many people want protection options, exclusions and family financial risks explained more clearly in ${language} before choosing cover.`,
    },
    {
      question: `Can a ${language}-speaking insurance adviser help with life insurance?`,
      answer: "Yes. Many can explain the purpose, term, structure and common trade-offs around life cover in a clearer and more comfortable way.",
    },
    {
      question: `Can they help with income protection and critical illness cover?`,
      answer: "Yes. A suitable adviser may help explain how these policies work, what they are designed to cover and how policy definitions can differ.",
    },
    {
      question: "Should I choose cover only because it is cheap?",
      answer: "No. Premium matters, but cover amount, term, definitions, exclusions and whether the policy actually fits the need matter more.",
    },
    {
      question: "Can an adviser guarantee a claim will be paid?",
      answer: "No. A genuine adviser should never guarantee claims. Claim outcomes depend on policy terms, medical disclosure and insurer assessment.",
    },
    {
      question: "Do I need protection if I already have workplace benefits?",
      answer: "Potentially yes. Employer benefits can be useful, but they may be limited, may not match your full need and may not continue if employment changes.",
    },
    {
      question: `Is a ${language}-speaking adviser only useful if my English is weak?`,
      answer: `No. Many people prefer discussing family finances and long-term protection decisions in ${language} even when they use English daily.`,
    },
    {
      question: "Is insurance advice the same as financial advice?",
      answer: "Protection advice is a specific area. What matters is whether the adviser is appropriately authorised for the type of advice being given.",
    },
  ];

  const internalLinks = [
    { label: "Request professional advice", href: "/request-advice" },
    { label: "Explore mortgage and protection guidance", href: "/mortgage-protection" },
    { label: "Use the protection needs calculator", href: "/calculators/protection-needs" },
    { label: "Read the life insurance guide", href: "/guides/life-insurance-explained" },
    { label: "Read the income protection guide", href: "/guides/income-protection-guide" },
    { label: "Browse all mortgage and protection articles", href: "/blogs" },
    {
      label: `Read the ${language}-speaking mortgage adviser guide`,
      href: `/blogs/why-you-need-a-${languageLower}-speaking-mortgage-adviser-in-the-uk`,
    },
  ];

  const languageLinks = ["malayalam", "tamil", "hindi", "punjabi", "telugu"]
    .filter((item) => item !== languageLower)
    .map((item) => ({
      label: `Read the ${item[0].toUpperCase()}${item.slice(1)}-speaking insurance adviser guide`,
      href: `/blogs/why-you-need-a-${item}-speaking-insurance-adviser-in-the-uk`,
    }));

  return {
    slug,
    kind: "article",
    category: "Language-specific protection advice",
    title: `Why you need a ${language}-speaking insurance adviser in the UK`,
    description: `Understand why many ${communityLabel} in the UK prefer a ${language}-speaking insurance adviser when reviewing life cover, income protection and family financial safety.`,
    readTime: "13 min read",
    published: "2026-07-05",
    updated: "2026-07-05",
    keywords: [
      `${language}-speaking insurance adviser in the UK`,
      `${language} insurance adviser UK`,
      `${language} speaking protection adviser UK`,
      `UK insurance adviser who speaks ${language}`,
      `${language} life insurance advice UK`,
    ],
    faq,
    internalLinks: [...internalLinks, ...languageLinks],
    authorityLinks: [
      {
        label: "FCA guidance on finding an adviser",
        href: "https://www.fca.org.uk/consumers/finding-adviser",
      },
      {
        label: "MoneyHelper: choosing a financial adviser",
        href: "https://www.moneyhelper.org.uk/en/getting-help-and-advice/financial-advisers/choosing-a-financial-adviser",
      },
      {
        label: "MoneyHelper: do I need life insurance?",
        href: "https://www.moneyhelper.org.uk/en/family-and-care/death-and-bereavement/do-i-need-life-insurance",
      },
      {
        label: "MoneyHelper: insurance for ill health",
        href: "https://www.moneyhelper.org.uk/en/family-and-care/long-term-care/insurance-for-illness-and-disability",
      },
    ],
    relatedCalculatorSlug: "protection-needs",
    relatedCalculatorEyebrow: "CHECK PROTECTION",
    relatedCalculatorTitle: "Estimate a simple protection gap before speaking to an adviser",
    relatedCalculatorCta: "Estimate protection needs",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Protection planning in the UK is often delayed because people do not know where to start. Life insurance, income protection and critical illness cover all sound familiar, but the details behind them are not always simple. The real difficulty is usually not hearing the product names. It is understanding what each policy is designed to do, what it does not do and whether it solves a real family financial risk.",
          `That is why many people actively look for a ${language}-speaking insurance adviser in the UK. If ${language} is the language you are most comfortable using at home, it is natural to want the same clarity when discussing family finances, illness risk, mortgage protection and long-term responsibilities.`,
          `A good adviser should explain protection clearly to any client. But when an adviser can also speak ${language}, many ${communityLabel.toLowerCase()} feel more comfortable discussing sensitive topics such as death, illness, dependency, household bills and what would happen if income stopped.`,
        ],
      },
      {
        heading: "Why people search for this service",
        paragraphs: [
          `People usually do not search for a ${language}-speaking insurance adviser only for convenience. They search because protection decisions are personal, emotional and easy to misunderstand when the wording feels too technical.`,
          `Many people in the UK speak English every day. But that does not mean they want to discuss family financial risk, medical disclosures and long-term cover choices only in English. For many households, it feels easier and more trustworthy to understand those decisions in ${language}.`,
        ],
        subsections: [
          {
            heading: "Protection conversations are sensitive",
            paragraphs: [
              "Mortgage decisions are important, but protection discussions often feel even more personal. They involve asking what would happen if you died, could not work or became seriously ill. Many people are more open and more thoughtful in those conversations when they can use the language they trust most.",
              "That usually leads to better questions and a clearer understanding of the real need instead of choosing cover only because someone else recommended it.",
            ],
          },
          {
            heading: "Family understanding matters",
            paragraphs: [
              `In many ${adjective} and wider Indian households, protection decisions are not made in isolation. A spouse, parent or other family member may want to understand what the policy is for, whether the premium is worthwhile and what would happen in a claim situation.`,
              `If the explanation can happen in ${language}, the decision often feels more transparent and less intimidating for everyone involved.`,
            ],
          },
          {
            heading: "People want to avoid buying the wrong policy",
            paragraphs: [
              "Many protection buyers worry about paying for something they do not fully understand. That concern is valid. Policies can differ in amount, term, deferment period, definitions and exclusions. Better communication can reduce the chance of choosing a policy that looks fine on price but does not match the actual need.",
            ],
          },
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          `Using a ${language}-speaking insurance adviser can offer practical benefits beyond comfort. The main benefit is better understanding of what the cover is actually meant to protect.`,
          `A clearer conversation in ${language} can help you compare life cover, decreasing cover, level cover, income protection and critical illness cover in a more realistic way. That matters because protection is only useful if the policy structure fits the problem you are trying to solve.`,
        ],
        subsections: [
          {
            heading: "More confidence to discuss personal circumstances",
            paragraphs: [
              "Protection advice works best when the adviser understands your mortgage, family responsibilities, savings, employer benefits and household income dependence. People are often more willing to explain those details properly when they feel culturally and linguistically comfortable.",
            ],
          },
          {
            heading: "Less confusion around product differences",
            paragraphs: [
              "A common problem is assuming all protection products do roughly the same thing. They do not. Life insurance, income protection and critical illness cover solve different risks. A stronger explanation can make those differences much easier to understand before you commit.",
            ],
          },
          {
            heading: "Better conversations about affordability and priority",
            paragraphs: [
              "Protection decisions are not only about what is ideal. They are also about what is realistic within the monthly budget. A good conversation helps you prioritise properly rather than trying to buy every type of cover at once or giving up because the options feel confusing.",
            ],
          },
        ],
      },
      {
        heading: "Common situations",
        paragraphs: [
          `There are several common situations where people may specifically prefer a ${language}-speaking insurance adviser in the UK. One is when a family has recently taken on a mortgage and wants to review whether there is enough protection in place if something goes wrong.`,
          "Another common situation is where one income supports most of the household. In that case, understanding the difference between life cover and income protection becomes especially important.",
        ],
        bullets: [
          "New homeowners reviewing mortgage-related protection",
          "Families with children who depend on one or two main incomes",
          "Self-employed people with limited employer sick-pay support",
          "Households reviewing life cover after marriage or childbirth",
          "People comparing workplace benefits with private protection needs",
          "Borrowers wanting protection explained alongside mortgage planning",
        ],
        subsections: [
          {
            heading: "After buying a home",
            paragraphs: [
              "A mortgage often becomes the point when people realise the scale of their financial responsibilities. They start asking what would happen to repayments if one partner died or could not work for a long period. That is a sensible moment to review protection properly rather than treating it as an afterthought.",
            ],
          },
          {
            heading: "When work benefits may not be enough",
            paragraphs: [
              "Some people assume workplace death-in-service or sick-pay arrangements solve the problem. Sometimes they help a lot. Sometimes they are limited, temporary or linked tightly to remaining in the same job. A proper review can help identify whether there is still a meaningful gap.",
            ],
          },
        ],
      },
      {
        heading: "Things to consider",
        paragraphs: [
          `Not every ${language}-speaking insurance adviser will be the right adviser for you. Language matters, but it should support quality rather than replace it.`,
          "You should check whether the adviser or firm is appropriately authorised for the type of protection advice being given and whether they explain things in a clear, balanced and realistic way.",
        ],
        subsections: [
          {
            heading: "Check what they are actually recommending and why",
            paragraphs: [
              "A good adviser should be able to explain the purpose of the recommendation in plain language. What risk is this policy solving? Why this amount? Why this term? Why this structure instead of another one? If those answers are unclear, the recommendation is harder to judge properly.",
            ],
          },
          {
            heading: "Do not focus only on premium",
            paragraphs: [
              `A cheaper premium can still be poor value if the policy does not match the need. Better cover is not always the most expensive, but proper comparison should include amount, term, features, definitions and exclusions rather than price alone.`,
            ],
          },
          {
            heading: "Be honest in medical and lifestyle disclosure",
            paragraphs: [
              "Protection policies depend heavily on accurate disclosure. Health history, smoking status, occupation and other personal details can affect underwriting. It is important to answer truthfully and completely. Trying to simplify or hide information can create serious claim problems later.",
            ],
          },
          {
            heading: "Use trusted public information alongside adviser conversations",
            paragraphs: [
              "It is sensible to compare what you hear against trusted UK information from sources such as the FCA and MoneyHelper. Those sources do not replace personalised protection advice, but they help you understand the role of the adviser and the types of questions worth asking.",
            ],
          },
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          `People often ask whether a ${language}-speaking insurance adviser is useful only when someone struggles with English. The answer is no. Many people use English confidently in normal life but still prefer discussing family risk and long-term financial planning in ${language}.`,
          "Another common question is whether an adviser can guarantee that a policy will always pay out. No genuine adviser should promise that. The quality of disclosure, the policy wording and the circumstances of any future claim all matter.",
        ],
        bullets: [
          "Can they help with life insurance? Yes, many can.",
          "Can they help with income protection? Yes, where appropriate.",
          "Can they explain critical illness cover? Yes, many can clarify how it differs from other protection types.",
          "Should I choose cover purely because it is cheap? No.",
          `Should I choose an adviser only because they speak ${language}? No, language should support proper professional quality.`,
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          `For many ${communityLabel} in the UK, the value of a ${language}-speaking insurance adviser is not only convenience. It is better understanding at the point where family financial decisions become most personal.`,
          `When life cover, income protection or critical illness cover is explained clearly in ${language}, many people feel more confident about what they are buying, what risk they are trying to manage and whether the monthly cost is justified.`,
          "Language alone is not enough, but a trustworthy and properly qualified adviser who can also communicate in your preferred language may make protection planning feel much clearer and more useful.",
        ],
      },
      {
        heading: "Call to action",
        paragraphs: [
          `If you want protection guidance explained more clearly, take time to compare advisers carefully. Look for someone who is properly authorised, transparent, clear about what they are recommending and comfortable communicating in ${language} if that helps you.`,
          "If you are unsure, speak to a qualified adviser before making a protection decision.",
          "Looking for a verified professional?",
          "Find trusted Mortgage and Insurance Advisers on Hub.Nikera.",
        ],
      },
    ],
  };
}

export const phase2LanguageInsuranceAdviserArticles: Resource[] = [
  createLanguageInsuranceAdviserArticle({
    language: "Malayalam",
    adjective: "Malayali",
    communityLabel: "Malayalis",
  }),
  createLanguageInsuranceAdviserArticle({
    language: "Tamil",
    adjective: "Tamil",
    communityLabel: "Tamils",
  }),
  createLanguageInsuranceAdviserArticle({
    language: "Hindi",
    adjective: "Hindi-speaking",
    communityLabel: "Hindi speakers",
  }),
  createLanguageInsuranceAdviserArticle({
    language: "Punjabi",
    adjective: "Punjabi",
    communityLabel: "Punjabis",
  }),
  createLanguageInsuranceAdviserArticle({
    language: "Telugu",
    adjective: "Telugu-speaking",
    communityLabel: "Telugu speakers",
  }),
];
