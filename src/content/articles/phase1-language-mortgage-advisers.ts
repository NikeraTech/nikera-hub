import type { Resource } from "@/lib/resource-types";

type LanguageMortgageArticleInput = {
  language: string;
  adjective: string;
  communityLabel: string;
};

function createLanguageMortgageAdviserArticle({
  language,
  adjective,
  communityLabel,
}: LanguageMortgageArticleInput): Resource {
  const languageLower = language.toLowerCase();
  const slug = `why-you-need-a-${languageLower}-speaking-mortgage-adviser-in-the-uk`;
  const faq = [
    {
      question: `Why do people look for a ${language}-speaking mortgage adviser in the UK?`,
      answer: `Many people want clearer communication, more confidence asking questions and better family understanding when discussing mortgages in ${language}.`,
    },
    {
      question: `Is a ${language}-speaking mortgage adviser useful for first-time buyers?`,
      answer: "Yes. First-time buyers often benefit from clearer explanations of deposits, affordability, Agreements in Principle and the legal stages of buying.",
    },
    {
      question: `Can a ${language}-speaking mortgage adviser help with remortgaging?`,
      answer: "Yes. Many can help compare current and new deals, explain fees, and assess whether switching may be worthwhile.",
    },
    {
      question: "Can they help if I am self-employed?",
      answer: "Potentially yes, especially if they regularly handle self-employed cases and understand how lenders assess non-standard income.",
    },
    {
      question: "Can they help if I am on a visa?",
      answer: "Some advisers can help with visa-based cases, but lender criteria vary. It is important to ask whether they have relevant experience.",
    },
    {
      question: "Is a mortgage adviser the same as a mortgage broker?",
      answer: "In everyday UK use, people often use both terms to mean broadly the same thing.",
    },
    {
      question: `Should I choose an adviser only because they speak ${language}?`,
      answer: "No. Language is helpful, but you should also check authorisation, experience, fees, communication quality and suitability for your case.",
    },
    {
      question: "Will a mortgage adviser guarantee a mortgage offer?",
      answer: "No. A genuine adviser should never guarantee approval. Final decisions still depend on lender checks, affordability and property details.",
    },
  ];
  const internalLinks = [
    { label: "Request professional advice", href: "/request-advice" },
    { label: "Explore mortgage and protection guidance", href: "/mortgage-protection" },
    { label: "Use the mortgage affordability calculator", href: "/calculators/mortgage-affordability" },
    { label: "Browse all mortgage and protection articles", href: "/blogs" },
  ];

  const languageLinks = ["malayalam", "tamil", "hindi", "punjabi", "telugu"]
    .filter((item) => item !== languageLower)
    .map((item) => ({
      label: `Read the ${item[0].toUpperCase()}${item.slice(1)}-speaking mortgage adviser guide`,
      href: `/blogs/why-you-need-a-${item}-speaking-mortgage-adviser-in-the-uk`,
    }));

  return {
    slug,
    kind: "article",
    category: "Language-specific mortgage advice",
    title: `Why you need a ${language}-speaking mortgage adviser in the UK`,
    description: `Understand why many ${communityLabel} buyers in the UK prefer a ${language}-speaking mortgage adviser when making major property and borrowing decisions.`,
    readTime: "13 min read",
    published: "2026-07-05",
    updated: "2026-07-05",
    keywords: [
      `${language}-speaking mortgage adviser in the UK`,
      `${language} mortgage adviser UK`,
      `${language} speaking mortgage broker UK`,
      `UK mortgage adviser who speaks ${language}`,
      `${language} mortgage advice UK`,
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
        label: "MoneyHelper: mortgage advice and choosing a mortgage",
        href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/choosing-a-mortgage-shop-around-or-get-advice",
      },
      {
        label: "MoneyHelper: find homebuying advice",
        href: "https://www.moneyhelper.org.uk/en/getting-help-and-advice/homes-advice/find-homebuying-advice",
      },
    ],
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "CHECK AFFORDABILITY",
    relatedCalculatorTitle: "See an illustrative borrowing range before speaking to an adviser",
    relatedCalculatorCta: "Check affordability",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Buying a home in the UK can feel exciting, but it can also feel overwhelming. For many people, the hardest part is not only the money. It is understanding the language used around the process. Terms like loan-to-value, product fee, stress testing, early repayment charge and Agreement in Principle can feel unfamiliar when they are tied to one of the biggest financial decisions of your life.",
          `That is why many people actively look for a ${language}-speaking mortgage adviser in the UK. If ${language} is the language you are most comfortable using at home, it is natural to want that same comfort when discussing mortgages, lender criteria and long-term commitments. A home purchase is too important to rely on half-understood explanations or assumptions based on what other people did in different situations.`,
          `A good adviser should explain things clearly to any client. But when an adviser can also speak ${language}, the conversation often becomes easier, calmer and more useful. You may feel more comfortable asking detailed questions, involving your family and understanding the trade-offs between different options. In a process full of paperwork, deadlines and pressure, that clarity matters.`,
        ],
      },
      {
        heading: "Why people search for this service",
        paragraphs: [
          `People usually do not search for a ${language}-speaking mortgage adviser only because of language preference. They search because they want clarity, trust and fewer misunderstandings when discussing a very large financial commitment.`,
          `Many people in the UK speak English every day for work and normal life. But mortgage conversations are different. They involve financial terminology, legal steps, lender conditions and long-term payment commitments. Even if someone speaks English well, they may still prefer discussing these topics in ${language} because it makes comparison and decision-making easier.`,
        ],
        subsections: [
          {
            heading: "Important financial decisions often feel easier in your strongest language",
            paragraphs: [
              "Mortgage discussions are rarely only about the monthly payment. They are also about risk, flexibility, future plans and what happens if circumstances change. Speaking in a language you fully trust can help you think more clearly rather than just trying to keep up with technical terms.",
              "That matters when you are comparing fixed and variable rates, checking whether fees are worth paying or trying to understand how a lender might assess your income and spending.",
            ],
          },
          {
            heading: "Family members are often part of the decision",
            paragraphs: [
              `In many ${adjective} and wider Indian households, buying a home is not treated as a purely individual decision. Parents, spouses or close relatives often want to understand the borrowing, the deposit, the likely monthly costs and the risks involved. If the adviser can explain things in ${language}, the wider discussion may feel more transparent and less intimidating.`,
              "This can be especially useful where family members are helping with a gifted deposit or simply want confidence that the plan is sensible.",
            ],
          },
          {
            heading: "People are more willing to ask 'basic' questions",
            paragraphs: [
              "Many buyers hold back because they do not want to sound inexperienced. But better decisions usually come from asking direct questions. What is the difference between a broker and an adviser? What does a lender really check? What happens after the fixed-rate period ends? How much deposit is actually needed?",
              "When the conversation feels culturally and linguistically comfortable, people are often more willing to ask those questions early, which reduces confusion later.",
            ],
          },
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          `Using a ${language}-speaking mortgage adviser can offer practical benefits, not just emotional comfort. The biggest benefit is better understanding. If you understand the advice properly, you are less likely to make decisions based on confusion or assumptions.`,
          `A clear explanation in ${language} can help you understand affordability, lender criteria, the documents required, the difference between products and where the real costs may sit. That clarity becomes especially useful when the case is more complex than a straightforward salaried application.`,
        ],
        subsections: [
          {
            heading: "More confidence to ask questions",
            paragraphs: [
              "A language-comfort advantage often removes the fear of asking for clarification. You may be more likely to say: can you explain that again, why is this lender more suitable, what happens if we move home later, or how realistic is this monthly payment for our budget?",
              "Those questions are not a sign of weakness. They are usually the starting point of better mortgage decisions.",
            ],
          },
          {
            heading: "Less room for misunderstanding",
            paragraphs: [
              "Mortgage applications depend on detail. Confusing gross income with take-home pay, underestimating commitments, misunderstanding gifted deposit rules or assuming an online calculation is the same as lender approval can create expensive problems.",
              "Stronger communication can reduce the chance of those errors and make the whole process more controlled.",
            ],
          },
          {
            heading: "Better family involvement and stronger trust",
            paragraphs: [
              `If your spouse or parents are more comfortable in ${language}, they may find it easier to engage with the decision and ask sensible questions. That does not replace professional competence, but it can create more trust and a calmer decision-making environment.`,
              "Trust matters when you are sharing income details, discussing long-term plans and choosing between options that may affect your finances for years.",
            ],
          },
        ],
      },
      {
        heading: "Common situations",
        paragraphs: [
          `There are several common situations where people may specifically prefer a ${language}-speaking mortgage adviser in the UK. The first is first-time buying. First-time buyers often need more help understanding deposits, Agreements in Principle, budgeting, lender checks and the legal stages of a purchase.`,
          "Another common situation is a joint application, where two incomes, two sets of commitments and two future plans need to be considered together. Clear communication helps both applicants understand what the lender is really assessing.",
        ],
        bullets: [
          "First-time buyers who want the process explained clearly",
          "Couples buying together and comparing affordability",
          "Families using gifted deposit support",
          "Self-employed applicants with more document-heavy cases",
          "Applicants on visas who need lender-specific guidance",
          "Borrowers reviewing remortgage options before a deal ends",
        ],
        subsections: [
          {
            heading: "Self-employed and non-standard income cases",
            paragraphs: [
              "Self-employed mortgages often involve more explanation than salaried applications. Borrowers may need help understanding whether lenders focus on salary, dividends, net profit or average income over time, and how different lenders interpret the same numbers differently.",
              `In these cases, being able to discuss the details comfortably in ${language} can make a real difference to how confident you feel about the route being recommended.`,
            ],
          },
          {
            heading: "Applicants on visas or recently settled in the UK",
            paragraphs: [
              "Some borrowers assume they cannot get a mortgage because of visa status. In reality, some lenders do consider applicants on certain visas, but criteria vary. People in this situation often benefit from clear, realistic guidance rather than assumptions or informal advice from community groups.",
            ],
          },
        ],
      },
      {
        heading: "Things to consider",
        paragraphs: [
          `Not every ${language}-speaking mortgage adviser will be the right adviser for you. Language matters, but it should not be the only thing you check. The adviser still needs to be properly authorised, experienced and transparent.`,
          "You should check whether the adviser or firm is authorised to give mortgage advice in the UK and whether they regularly deal with cases like yours. That might include first-time buyers, self-employed clients, remortgages, applicants on visas or families using gifted deposits.",
        ],
        subsections: [
          {
            heading: "Ask how they work and how they are paid",
            paragraphs: [
              "Not all advisers operate in the same way. Some have access to a wider part of the market than others. Some focus on certain client types. Some may charge a fee, while others may be paid by commission from the lender or a mix of both.",
              "Ask clear questions about whether a fee applies, when it applies and what service is included.",
            ],
          },
          {
            heading: "Do not choose only on language",
            paragraphs: [
              `A ${language}-speaking adviser may feel easier to talk to, but professional quality still matters more. Look for clear explanations, realistic expectations, good responsiveness, transparency on costs and evidence that they understand your type of case.`,
              "Language should support quality, not replace it.",
            ],
          },
          {
            heading: "Be honest about your situation",
            paragraphs: [
              "Good mortgage advice depends on accurate information. Be open about income, debts, monthly commitments, visa status, deposit source and any credit issues. Trying to hide details usually creates bigger problems later in the application.",
            ],
          },
          {
            heading: "Use trusted UK sources alongside adviser conversations",
            paragraphs: [
              "It is sensible to compare what you hear against trusted UK information sources such as the FCA and MoneyHelper. Those sources will not replace personalised mortgage advice, but they can help you understand the process, the role of an adviser and the kinds of questions worth asking.",
              "That combination of professional advice and trusted public guidance usually leads to better decisions than relying only on informal WhatsApp groups, hearsay or outdated assumptions.",
            ],
          },
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          `People often ask whether a ${language}-speaking mortgage adviser is only for those who do not speak English well. The answer is no. Many people speak English perfectly well but still prefer discussing major financial decisions in ${language} because it feels clearer and more natural.`,
          `Another common question is whether a ${language}-speaking adviser can guarantee a mortgage offer. No genuine adviser should guarantee approval. A good adviser may help identify more suitable lenders and reduce confusion, but final approval still depends on lender checks, affordability, credit profile and the property itself.`,
        ],
        bullets: [
          "Can they help first-time buyers? Yes, often very effectively.",
          "Can they help self-employed applicants? Potentially yes, if they have relevant experience.",
          "Can they help with remortgaging? Yes, many can compare switching options and costs.",
          "Are mortgage adviser and mortgage broker the same? In everyday UK use, often yes.",
          `Should I choose an adviser only because they speak ${language}? No, language should support proper professional quality.`,
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          `A mortgage is one of the biggest financial commitments most people will ever make. For many ${communityLabel} living in the UK, the value of a ${language}-speaking mortgage adviser is simple: better understanding. When you understand the process more clearly, you can ask better questions. When you ask better questions, you are more likely to make better decisions.`,
          "That can matter whether you are buying your first home, remortgaging, applying jointly, self-employed or trying to understand lender rules more clearly. Language alone is not enough, but a qualified and trustworthy mortgage adviser who can also communicate in your preferred language may make the whole process feel clearer, calmer and more accessible.",
        ],
      },
      {
        heading: "Call to action",
        paragraphs: [
          `If you are looking for a mortgage adviser who understands both the UK mortgage process and the value of clear communication, take time to compare carefully. Look for an adviser who is properly authorised, experienced with your type of case, transparent about fees and comfortable communicating in ${language} if that helps you.`,
          "If you are unsure, speak to a qualified FCA-authorised mortgage adviser before making a mortgage decision.",
          "Looking for a verified professional?",
          "Find trusted Mortgage and Insurance Advisers on Hub.Nikera.",
        ],
      },
    ],
  };
}

export const phase1LanguageMortgageAdviserArticles: Resource[] = [
  createLanguageMortgageAdviserArticle({
    language: "Malayalam",
    adjective: "Malayali",
    communityLabel: "Malayalis",
  }),
  createLanguageMortgageAdviserArticle({
    language: "Tamil",
    adjective: "Tamil",
    communityLabel: "Tamils",
  }),
  createLanguageMortgageAdviserArticle({
    language: "Hindi",
    adjective: "Hindi-speaking",
    communityLabel: "Hindi speakers",
  }),
  createLanguageMortgageAdviserArticle({
    language: "Punjabi",
    adjective: "Punjabi",
    communityLabel: "Punjabis",
  }),
  createLanguageMortgageAdviserArticle({
    language: "Telugu",
    adjective: "Telugu-speaking",
    communityLabel: "Telugu speakers",
  }),
];
