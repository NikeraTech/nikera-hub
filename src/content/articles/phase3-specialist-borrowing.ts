import type { Resource } from "@/lib/resource-types";

type SpecialistArticleInput = {
  slug: string;
  category: string;
  title: string;
  description: string;
  keywords: string[];
  relatedCalculatorSlug: string;
  relatedCalculatorEyebrow: string;
  relatedCalculatorTitle: string;
  relatedCalculatorCta: string;
  authorityLinks: { label: string; href: string }[];
  internalLinks: { label: string; href: string }[];
  faq: { question: string; answer: string }[];
  sections: Resource["sections"];
};

function createSpecialistArticle(input: SpecialistArticleInput): Resource {
  return {
    slug: input.slug,
    kind: "article",
    category: input.category,
    title: input.title,
    description: input.description,
    readTime: "12 min read",
    published: "2026-07-05",
    updated: "2026-07-05",
    keywords: input.keywords,
    authorityLinks: input.authorityLinks,
    internalLinks: input.internalLinks,
    faq: input.faq,
    relatedCalculatorSlug: input.relatedCalculatorSlug,
    relatedCalculatorEyebrow: input.relatedCalculatorEyebrow,
    relatedCalculatorTitle: input.relatedCalculatorTitle,
    relatedCalculatorCta: input.relatedCalculatorCta,
    sections: input.sections,
  };
}

export const phase3SpecialistBorrowingArticles: Resource[] = [
  createSpecialistArticle({
    slug: "getting-a-uk-mortgage-on-a-skilled-worker-visa",
    category: "Visa-specific borrowing",
    title: "Getting a UK mortgage on a Skilled Worker visa",
    description:
      "What borrowers on a Skilled Worker visa should expect around lender appetite, deposits, affordability and documents.",
    keywords: [
      "UK mortgage Skilled Worker visa",
      "mortgage on Skilled Worker visa UK",
      "visa mortgage UK",
      "Skilled Worker visa mortgage deposit",
    ],
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "CHECK AFFORDABILITY",
    relatedCalculatorTitle: "Get an illustrative affordability starting point before speaking to an adviser",
    relatedCalculatorCta: "Check affordability",
    authorityLinks: [
      { label: "GOV.UK: Skilled Worker visa overview", href: "https://www.gov.uk/skilled-worker-visa" },
      { label: "MoneyHelper: choosing a mortgage", href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/choosing-a-mortgage-shop-around-or-get-advice" },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
    internalLinks: [
      { label: "Use the mortgage affordability calculator", href: "/calculators/mortgage-affordability" },
      { label: "Read the first-time buyer guide", href: "/guides/first-time-buyer-guide" },
      { label: "Explore expat mortgages", href: "/expat-mortgages" },
      { label: "Request professional advice", href: "/request-advice" },
      { label: "Read why affordability differs between lenders", href: "/blogs/why-lender-affordability-differs" },
    ],
    faq: [
      {
        question: "Can you get a UK mortgage on a Skilled Worker visa?",
        answer: "Potentially yes. Some lenders do consider Skilled Worker visa holders, but deposit requirements and lender choice can differ from mainstream UK cases.",
      },
      {
        question: "Do visa applicants need a bigger deposit?",
        answer: "Sometimes yes. The exact deposit depends on lender policy, how long remains on the visa, income profile and wider case details.",
      },
      {
        question: "Will all lenders accept visa income in the same way?",
        answer: "No. Lender policy can differ materially on visa status, time remaining in the UK, income type and documentation.",
      },
      {
        question: "Does a stronger salary guarantee approval?",
        answer: "No. Salary matters, but lenders also assess commitments, credit profile, deposit, visa circumstances and property details.",
      },
      {
        question: "Can joint applicants improve the case?",
        answer: "Potentially yes, but it depends on the combined profile, deposit, income evidence and lender policy.",
      },
      {
        question: "Should visa holders rely only on an online affordability estimate?",
        answer: "No. Calculators are useful planning tools, but lender-specific treatment of visa cases can differ from broad online estimates.",
      },
      {
        question: "Will lenders want to see time remaining on the visa?",
        answer: "Often yes. Time remaining can affect lender appetite and the set of lenders realistically available.",
      },
      {
        question: "Should I speak to an adviser before offering on a property?",
        answer: "Usually yes. Visa cases benefit from checking lender fit early rather than assuming the broad market is available.",
      },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "A mortgage on a Skilled Worker visa is often possible in the UK, but it is rarely a completely standard case. The main issue is not simply whether you earn enough. It is whether the lender is comfortable with your visa status, time remaining, deposit and the overall evidence behind the application.",
          "That matters because many borrowers assume the mortgage process works exactly the same for them as it does for every permanent UK resident. Sometimes the outcome is close. Sometimes the lender pool is much narrower than expected.",
          "The practical goal is to understand lender fit early, rather than searching on broad mortgage headlines that may not reflect visa-specific policy detail.",
        ],
      },
      {
        heading: "Why people search for this service",
        paragraphs: [
          "Borrowers on a Skilled Worker visa usually search because they want clarity on whether home buying is realistic now, what deposit may be needed and which parts of the case lenders focus on most.",
          "They are often comparing major life decisions at the same time: job stability, long-term plans in the UK, family commitments and whether to buy now or wait until the case looks simpler.",
        ],
        subsections: [
          {
            heading: "Visa status creates policy differences",
            paragraphs: [
              "Some lenders are comfortable with certain visa profiles. Others are more selective. The practical result is that two borrowers with similar income can see very different lender choice depending on policy fit.",
            ],
          },
          {
            heading: "People want to avoid unrealistic property searches",
            paragraphs: [
              "A broad affordability estimate can help planning, but it does not tell you whether a lender is happy with the immigration and residency side of the case. That is why early lender fit matters so much.",
            ],
          },
        ],
      },
      {
        heading: "Benefits of understanding the visa mortgage route properly",
        paragraphs: [
          "The biggest benefit is avoiding wasted time. When you know the likely lender appetite, deposit expectations and document sensitivity early, your property search becomes much more realistic.",
          "It also becomes easier to judge whether to apply now, improve the case first or wait until more time has passed on the visa or in the job.",
        ],
        bullets: [
          "More realistic budgeting",
          "Less risk of chasing unsuitable lenders",
          "Clearer expectations on documents and timelines",
          "Better decision-making around deposit and timing",
        ],
      },
      {
        heading: "Common situations",
        paragraphs: [
          "A common scenario is a salaried applicant with a stable role but uncertainty around how much deposit is enough. Another is a couple where one or both applicants are on visas and want to know how that affects lender choice.",
          "Some borrowers also want to buy quickly after moving to the UK, while others have already been in the country for some time and want to know whether that improves the case materially.",
        ],
      },
      {
        heading: "Things to consider",
        paragraphs: [
          "Time remaining on the visa, income structure, deposit source and broader affordability all matter. None of those factors should be considered in isolation.",
          "It is also important to be realistic about documents. Passport and visa evidence, employment documents, payslips, bank statements and deposit-source records all tend to matter more in specialist cases.",
        ],
        subsections: [
          {
            heading: "Deposit strength still matters",
            paragraphs: [
              "A stronger deposit can sometimes widen the lender pool or improve pricing, but it does not override every policy concern. It should be seen as one part of the case rather than the whole answer.",
            ],
          },
          {
            heading: "Affordability is still lender-specific",
            paragraphs: [
              "Even where income looks strong, lenders can still differ on how they treat commitments, joint applicants, bonus income or future plans in the UK. That is why a planning calculator is useful, but not decisive.",
            ],
          },
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "People often ask whether visa status automatically blocks borrowing. It does not. The real issue is which lenders fit the case and what evidence is needed to support it.",
          "Another common question is whether waiting always helps. Sometimes it does, but not always. The right timing depends on how the whole case looks now versus how it is likely to look later.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "A Skilled Worker visa mortgage case is usually more about policy fit and preparation than about headline mortgage rates. If you understand that early, you can search more realistically and avoid unnecessary friction.",
          "The best approach is to combine an initial affordability view with lender-specific judgement before making major commitments.",
        ],
      },
      {
        heading: "Call to action",
        paragraphs: [
          "If you are buying on a Skilled Worker visa, use affordability tools for planning, but check the lender route carefully before assuming the broad market is open to you.",
          "If you are unsure, speak to a qualified mortgage adviser before making a mortgage decision.",
          "Looking for a verified professional?",
          "Find trusted Mortgage and Insurance Advisers on Hub.Nikera.",
        ],
      },
    ],
  }),
  createSpecialistArticle({
    slug: "uk-mortgage-planning-on-a-spouse-visa",
    category: "Visa-specific borrowing",
    title: "UK mortgage planning on a spouse visa",
    description:
      "A practical guide to deposits, joint applications, affordability and documentation for spouse visa mortgage cases.",
    keywords: [
      "mortgage on spouse visa UK",
      "UK spouse visa mortgage",
      "joint mortgage spouse visa UK",
      "spouse visa deposit UK mortgage",
    ],
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "PLAN BORROWING",
    relatedCalculatorTitle: "See an illustrative borrowing range before reviewing spouse visa lender options",
    relatedCalculatorCta: "Check borrowing",
    authorityLinks: [
      { label: "GOV.UK: family visas overview", href: "https://www.gov.uk/uk-family-visa" },
      { label: "MoneyHelper: buying a home", href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home" },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
    internalLinks: [
      { label: "Use the mortgage affordability calculator", href: "/calculators/mortgage-affordability" },
      { label: "Read the first-time buyer guide", href: "/guides/first-time-buyer-guide" },
      { label: "Read the Skilled Worker visa mortgage article", href: "/blogs/getting-a-uk-mortgage-on-a-skilled-worker-visa" },
      { label: "Request professional advice", href: "/request-advice" },
      { label: "Read how much deposit you may need", href: "/blogs/how-much-deposit-do-you-need" },
    ],
    faq: [
      { question: "Can you get a UK mortgage on a spouse visa?", answer: "Potentially yes. Some lenders do accept spouse visa applicants, but policy and documentation requirements differ." },
      { question: "Does a British spouse guarantee acceptance?", answer: "No. It can help the case depending on structure, but lenders still review affordability, credit profile, deposit and immigration detail." },
      { question: "Are joint applications common?", answer: "Yes. Many spouse visa cases are considered jointly, though lender treatment still varies." },
      { question: "Do lenders check time remaining on the visa?", answer: "Often yes. That can affect lender choice and sometimes deposit expectations." },
      { question: "Is deposit source important?", answer: "Yes. Where family support or overseas funds are involved, the source and movement of the deposit usually need to be evidenced clearly." },
      { question: "Can spouse visa applicants use overseas savings?", answer: "Potentially yes, but the paper trail and cross-border transfer evidence matter." },
      { question: "Will all lenders use both incomes in the same way?", answer: "No. Income treatment varies depending on employment type, stability and lender policy." },
      { question: "Should buyers get advice early?", answer: "Usually yes, especially where visa detail and joint income structure affect lender fit." },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Mortgage planning on a spouse visa is often more achievable than borrowers fear, but it still needs careful handling. The decision is usually not about one single issue. It is about how visa status, joint income, deposit source and documentation come together.",
          "That means some spouse visa borrowers can access reasonable options, while others face a narrower lender pool than expected even with similar income.",
          "The most useful starting point is clarity: what the lender is really assessing, how the application will be structured and whether the supporting documents tell a clean story.",
        ],
      },
      {
        heading: "Why people search for this service",
        paragraphs: [
          "Spouse visa borrowers usually want practical answers. Can we buy now? Should we apply jointly? Does my partner's status change the case? How much deposit do we need?",
          "These are reasonable questions because spouse visa borrowing often sits between mainstream and specialist lending rather than fitting neatly into one category.",
        ],
      },
      {
        heading: "Benefits of getting the structure right early",
        paragraphs: [
          "The better the case is structured at the start, the less likely the application is to drift into delays, unrealistic assumptions or a poor lender match.",
          "That usually leads to a more useful property search and stronger expectations around what monthly payments and deposit levels are genuinely realistic.",
        ],
      },
      {
        heading: "Common situations",
        paragraphs: [
          "One common case is a British citizen or settled partner applying jointly with a spouse visa holder. Another is a spouse visa applicant who has already built stable UK income and wants to know how lenders will treat that income in practice.",
          "Family deposit support is also common in these cases, which means source-of-funds evidence often becomes part of the planning conversation much earlier than borrowers expect.",
        ],
      },
      {
        heading: "Things to consider",
        paragraphs: [
          "Joint affordability, credit profile, time remaining on the visa, employment stability and deposit source all matter. None should be checked in isolation.",
          "Where family support is involved, deposit evidence and transfer records can be just as important as the affordability calculation.",
        ],
        bullets: [
          "Check how the lender treats each applicant's income",
          "Be realistic about the deposit trail",
          "Understand whether the case is truly mainstream or still specialist",
          "Get clear on the likely documentation before offering on a property",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Borrowers often ask whether being married to a British citizen removes all complexity. It does not. It may help the case in some situations, but lenders still review the full profile.",
          "Another common question is whether waiting is better. Sometimes waiting strengthens the case, but sometimes a well-structured application is already viable now.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Spouse visa mortgage planning works best when the joint application, deposit route and evidence pack are treated as one connected case rather than separate questions.",
          "Once those moving parts are understood clearly, the mortgage route becomes easier to judge realistically.",
        ],
      },
      {
        heading: "Call to action",
        paragraphs: [
          "If your mortgage plans involve spouse visa status, check affordability and deposit assumptions early, but do not rely on broad market assumptions alone.",
          "If you are unsure, speak to a qualified mortgage adviser before making a mortgage decision.",
          "Looking for a verified professional?",
          "Find trusted Mortgage and Insurance Advisers on Hub.Nikera.",
        ],
      },
    ],
  }),
  createSpecialistArticle({
    slug: "self-employed-mortgage-documents-what-lenders-usually-check",
    category: "Self-employed mortgages",
    title: "Self-employed mortgage documents: what lenders usually check",
    description:
      "A practical guide to the income evidence, accounts and records self-employed borrowers often need before applying.",
    keywords: [
      "self-employed mortgage documents UK",
      "what lenders check self-employed mortgage",
      "self-employed mortgage evidence UK",
      "limited company mortgage documents",
    ],
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "CHECK AFFORDABILITY",
    relatedCalculatorTitle: "Test an illustrative affordability range before preparing your document pack",
    relatedCalculatorCta: "Check affordability",
    authorityLinks: [
      { label: "HMRC: Self Assessment", href: "https://www.gov.uk/self-assessment-tax-returns" },
      { label: "MoneyHelper: mortgages if you are self-employed", href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgages-if-youre-self-employed" },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
    internalLinks: [
      { label: "Read the self-employed mortgage guide", href: "/guides/self-employed-mortgage-guide" },
      { label: "Use the mortgage affordability calculator", href: "/calculators/mortgage-affordability" },
      { label: "Request professional advice", href: "/request-advice" },
      { label: "Read why lender affordability differs", href: "/blogs/why-lender-affordability-differs" },
      { label: "Browse all articles", href: "/blogs" },
    ],
    faq: [
      { question: "What documents do self-employed borrowers usually need?", answer: "Common examples include tax calculations, tax overviews, accounts, bank statements and identification, though requirements differ by lender and business structure." },
      { question: "Do all lenders use the same income figure?", answer: "No. Some focus on salary and dividends, some on net profit and some use averages over time." },
      { question: "Can one strong year be enough?", answer: "Sometimes, but many lenders prefer a stronger track record rather than relying on a single good year." },
      { question: "Do limited company applicants face different checks?", answer: "Often yes. Business structure can affect both income interpretation and document requirements." },
      { question: "Are bank statements important?", answer: "Yes. They help lenders see income flow, spending commitments and overall case consistency." },
      { question: "Does cleaner documentation improve lender choice?", answer: "It can. Better-prepared cases are often easier to place with suitable lenders." },
      { question: "Should borrowers wait until accounts are finalised?", answer: "Sometimes that helps, but it depends on timing and how the current evidence looks." },
      { question: "Can an adviser help decide which figures are likely to matter most?", answer: "Yes. That is often one of the most useful parts of self-employed case planning." },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Self-employed mortgage cases usually become easier or harder based on evidence quality. The challenge is often not whether the business is successful. It is whether the lender can understand the income clearly enough to rely on it.",
          "That is why document preparation matters so much. A borrower who knows what the lender is likely to focus on can usually present a much stronger case than one who starts collecting records only after a property offer is accepted.",
          "The main goal is consistency. The numbers, tax records and bank statements should tell the same story.",
        ],
      },
      {
        heading: "Why people search for this service",
        paragraphs: [
          "Self-employed borrowers often search because they do not know which figure lenders really care about. Is it turnover, net profit, salary, dividends or an average over time?",
          "They also want to know whether waiting another year, finalising accounts or changing the structure of the application could improve the outcome.",
        ],
      },
      {
        heading: "Benefits of preparing the document pack early",
        paragraphs: [
          "Early preparation reduces avoidable surprises. It becomes easier to see whether the case is strong now, whether some lenders are more likely to fit than others and whether any obvious evidence gaps need solving first.",
          "That also improves the quality of any affordability conversation, because the numbers being discussed are more likely to reflect what a lender might actually use.",
        ],
      },
      {
        heading: "Common situations",
        paragraphs: [
          "Some applicants are sole traders with straightforward trading history. Others are limited company directors where income can be interpreted in more than one way. Some have rising profits but not much trading history, while others have uneven years and want to know how that will be viewed.",
          "These differences matter because the same headline income can be treated differently depending on business structure and lender policy.",
        ],
      },
      {
        heading: "Things to consider",
        paragraphs: [
          "Lenders often look for tax documents, accounts, bank statements and evidence of stability over time. The exact mix depends on lender policy and how the business is structured.",
          "It also matters whether the case is simple and stable or whether there are recent changes in profits, trading history or business extraction strategy.",
        ],
        bullets: [
          "Make sure accounts and tax records are consistent",
          "Understand which income figure lenders may use",
          "Be ready to explain any unusual movement in income",
          "Keep personal and business records easy to follow",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "A common mistake is assuming every lender will use the same income figure. They do not. Another is assuming that a strong turnover figure proves affordability. In practice, lenders usually care more about sustainable income than raw business activity.",
          "The better approach is to prepare the evidence first and then judge lender fit from there.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Self-employed borrowing usually rewards preparation. When the documents are clear and the income story is easy to follow, the lender conversation becomes much easier.",
          "That does not guarantee the same result everywhere, but it makes the realistic lender pool easier to identify.",
        ],
      },
      {
        heading: "Call to action",
        paragraphs: [
          "If you are self-employed, organise the evidence before the property process becomes urgent. That usually improves both lender fit and the quality of decisions you make early on.",
          "If you are unsure, speak to a qualified mortgage adviser before making a mortgage decision.",
          "Looking for a verified professional?",
          "Find trusted Mortgage and Insurance Advisers on Hub.Nikera.",
        ],
      },
    ],
  }),
  createSpecialistArticle({
    slug: "how-self-employed-borrowers-can-improve-mortgage-affordability",
    category: "Self-employed mortgages",
    title: "How self-employed borrowers can improve mortgage affordability",
    description:
      "What can strengthen a self-employed mortgage case and what usually matters more than headline turnover.",
    keywords: [
      "improve self-employed mortgage affordability",
      "self-employed affordability UK mortgage",
      "self-employed mortgage borrowing power UK",
    ],
    relatedCalculatorSlug: "mortgage-affordability",
    relatedCalculatorEyebrow: "TEST BORROWING",
    relatedCalculatorTitle: "See a simple affordability starting point before reviewing your self-employed case",
    relatedCalculatorCta: "Check affordability",
    authorityLinks: [
      { label: "MoneyHelper: mortgages if you are self-employed", href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgages-if-youre-self-employed" },
      { label: "HMRC: Self Assessment", href: "https://www.gov.uk/self-assessment-tax-returns" },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
    internalLinks: [
      { label: "Read the self-employed mortgage guide", href: "/guides/self-employed-mortgage-guide" },
      { label: "Read the self-employed documents article", href: "/blogs/self-employed-mortgage-documents-what-lenders-usually-check" },
      { label: "Use the mortgage affordability calculator", href: "/calculators/mortgage-affordability" },
      { label: "Request professional advice", href: "/request-advice" },
      { label: "Read why affordability differs between lenders", href: "/blogs/why-lender-affordability-differs" },
    ],
    faq: [
      { question: "Can self-employed borrowers improve affordability before applying?", answer: "Sometimes yes. Clearer evidence, stronger consistency and lower committed spending can all help the case." },
      { question: "Does higher turnover automatically improve borrowing?", answer: "No. Lenders usually focus more on sustainable income than headline turnover." },
      { question: "Can reducing personal commitments help?", answer: "Yes. Existing loans, card balances and other committed costs can materially affect affordability." },
      { question: "Do lenders like stable income trends?", answer: "Generally yes. Stability and consistency usually help compared with sharp or unclear swings in income." },
      { question: "Can a bigger deposit help?", answer: "Potentially yes. It may improve lender choice or pricing, though it does not solve every issue on its own." },
      { question: "Should business and personal finances be easy to explain?", answer: "Yes. Clarity often matters almost as much as the raw numbers." },
      { question: "Is it worth checking affordability before property search?", answer: "Usually yes. It gives a more realistic starting point before lender-specific review." },
      { question: "Can advice help with lender selection?", answer: "Yes. Self-employed cases often depend heavily on how different lenders interpret the same numbers." },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Self-employed affordability is often more flexible than borrowers think, but also more dependent on presentation and policy detail. The main question is not only how much you earned. It is how clearly that income can be evidenced and how the lender chooses to interpret it.",
          "That means improving affordability is not always about earning more. Sometimes it is about cleaner records, stronger consistency, fewer commitments or a better lender fit.",
        ],
      },
      {
        heading: "Why people search for this service",
        paragraphs: [
          "Borrowers usually search because online calculators feel too broad and they want to know what they can realistically do to strengthen the case.",
          "They are often deciding whether to apply now, wait for another set of accounts or change the timing of the purchase.",
        ],
      },
      {
        heading: "Practical ways the case can improve",
        paragraphs: [
          "A cleaner document trail, stronger consistency in income, lower committed monthly costs and a realistic deposit plan can all help. None guarantees a better result, but each can improve how the case is viewed.",
          "In many cases, the most useful change is not dramatic. It is simply making the case easier for the lender to understand and trust.",
        ],
        bullets: [
          "Reduce avoidable personal commitments where realistic",
          "Keep income evidence tidy and consistent",
          "Understand which figures lenders are likely to use",
          "Stress-test the budget rather than chasing the highest headline number",
        ],
      },
      {
        heading: "Common situations",
        paragraphs: [
          "Some borrowers have good income but too much personal expenditure dragging affordability down. Others have strong profitability but a business structure that needs explaining carefully. Some are deciding whether another year's accounts could improve lender choice.",
          "These are planning questions, not just borrowing questions, which is why early review is so useful.",
        ],
      },
      {
        heading: "Things to consider",
        paragraphs: [
          "Trying to optimise affordability without understanding lender policy can create the wrong focus. For example, chasing turnover alone is rarely the answer if the lender is not using turnover as the main income measure.",
          "It is usually better to think in terms of sustainable income, personal commitments, evidence quality and lender fit together.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Many borrowers ask whether waiting automatically improves the case. Sometimes it does, but only if the extra time leads to stronger evidence or a better profile. Waiting without changing anything important is not always useful.",
          "Another common question is whether a calculator result equals lender affordability. It does not. It is a useful starting point, not the final answer.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Improving self-employed affordability is usually about making the case more sustainable, more consistent and easier for the lender to interpret. That is more useful than chasing a headline figure that does not survive proper underwriting.",
        ],
      },
      {
        heading: "Call to action",
        paragraphs: [
          "If you are self-employed, test the numbers early but focus on the quality of the case as much as the size of the income.",
          "If you are unsure, speak to a qualified mortgage adviser before making a mortgage decision.",
          "Looking for a verified professional?",
          "Find trusted Mortgage and Insurance Advisers on Hub.Nikera.",
        ],
      },
    ],
  }),
  createSpecialistArticle({
    slug: "gifted-deposit-from-family-in-india-to-buy-a-uk-home",
    category: "Family deposit support",
    title: "Gifted deposit from family in India to buy a UK home",
    description:
      "What UK buyers should prepare when deposit support comes from family in India and the funds need to be evidenced clearly.",
    keywords: [
      "gifted deposit from India UK mortgage",
      "family gift deposit India UK home",
      "UK mortgage gifted deposit overseas family",
      "deposit from India to UK property",
    ],
    relatedCalculatorSlug: "deposit",
    relatedCalculatorEyebrow: "PLAN YOUR DEPOSIT",
    relatedCalculatorTitle: "Estimate the deposit level you may need before structuring family support",
    relatedCalculatorCta: "Estimate deposit",
    authorityLinks: [
      { label: "MoneyHelper: buying a home", href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home" },
      { label: "HMRC: anti-money laundering supervision overview", href: "https://www.gov.uk/guidance/money-laundering-regulations-your-responsibilities" },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
    ],
    internalLinks: [
      { label: "Use the deposit calculator", href: "/calculators/deposit" },
      { label: "Read the full expat and NRI mortgage guide", href: "/guides/uk-expat-and-nri-mortgage-guide" },
      { label: "Read the expat deposit source checklist", href: "/blogs/expat-deposit-source-checklist" },
      { label: "Read how much deposit you may need", href: "/blogs/how-much-deposit-do-you-need" },
      { label: "Request professional advice", href: "/request-advice" },
      { label: "Read the first-time buyer guide", href: "/guides/first-time-buyer-guide" },
    ],
    faq: [
      { question: "Can family in India gift part of a UK house deposit?", answer: "Potentially yes, but the funds and the gift usually need to be evidenced clearly for lenders and conveyancers." },
      { question: "Is the paper trail important?", answer: "Yes. Source-of-funds evidence and transfer records are often critical in cross-border gifted deposit cases." },
      { question: "Will lenders want a gifted deposit letter?", answer: "Often yes. Conveyancers may also need donor information and supporting documentation." },
      { question: "Do multiple transfers make things harder?", answer: "They can. A cleaner and easier-to-follow trail usually reduces friction." },
      { question: "Can overseas bank statements be required?", answer: "Yes. Where the gift comes from abroad, overseas statements and related records may be needed." },
      { question: "Does a gifted deposit guarantee acceptance?", answer: "No. The lender still assesses affordability, credit profile, property and the rest of the application." },
      { question: "Should the gift route be planned before offering on a property?", answer: "Usually yes. Early clarity reduces delay later." },
      { question: "Is this only relevant for expat buyers?", answer: "No. UK-based buyers can also face these questions when the deposit support comes from overseas family." },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "A gifted deposit from family in India can be a completely legitimate way to support a UK home purchase, but it needs planning. The amount matters, but the evidence trail often matters just as much.",
          "The practical challenge is that lenders and conveyancers usually want to understand where the money came from, whether it is genuinely a gift and how it moved from the donor to the purchase.",
          "If that trail is collected late, a sensible family arrangement can still cause avoidable delay.",
        ],
      },
      {
        heading: "Why people search for this service",
        paragraphs: [
          "Buyers usually search because they want to know whether overseas family support is acceptable and what documents will likely be needed.",
          "They are often balancing urgency around a property purchase with uncertainty about cross-border transfers, donor evidence and anti-money-laundering checks.",
        ],
      },
      {
        heading: "Benefits of planning the gift properly",
        paragraphs: [
          "The earlier the donor route is made clear, the easier it becomes to judge whether the deposit is ready to rely on and whether any gaps in evidence still need solving.",
          "That helps reduce the risk that the legal or mortgage process moves faster than the paperwork supporting the deposit.",
        ],
        bullets: [
          "Clearer source-of-funds evidence",
          "Less risk of late-stage delay",
          "Better coordination between buyer, donor and professionals",
          "More realistic purchase timing",
        ],
      },
      {
        heading: "Common situations",
        paragraphs: [
          "Some buyers receive one straightforward family gift. Others receive support built from multiple family accounts or cross-border transfers. Some families send money early, while others only finalise the support once a purchase is already progressing.",
          "These details matter because the cleaner the path of funds, the easier the case usually is to evidence.",
        ],
      },
      {
        heading: "Things to consider",
        paragraphs: [
          "The gift should usually be clearly documented, the donor should be identifiable and the source of the donor funds should be understandable. Transfer records and overseas statements can also matter.",
          "Where the money passes through several accounts or is converted between currencies, the need for tidy evidence usually increases.",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "Buyers often ask whether the gift is the problem. Usually it is not. The issue is whether the evidence is clear enough for the professionals involved to rely on it with confidence.",
          "Another common question is whether the route can be tidied up later. Sometimes it can, but late reconstruction is usually harder than early preparation.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "A gifted deposit from family in India can support a strong UK purchase case, but the funding route should be treated as part of the application planning, not just a late-stage legal detail.",
        ],
      },
      {
        heading: "Call to action",
        paragraphs: [
          "If your deposit depends on family support from abroad, estimate the numbers early and make the paper trail clear before the property process becomes urgent.",
          "If you are unsure, speak to a qualified mortgage adviser before making a mortgage decision.",
          "Looking for a verified professional?",
          "Find trusted Mortgage and Insurance Advisers on Hub.Nikera.",
        ],
      },
    ],
  }),
  createSpecialistArticle({
    slug: "using-family-support-for-a-uk-deposit-what-lenders-check",
    category: "Family deposit support",
    title: "Using family support for a UK deposit: what lenders check",
    description:
      "How gifted deposits and family-backed deposit plans are usually assessed in a UK mortgage application.",
    keywords: [
      "family support deposit UK mortgage",
      "gifted deposit lender checks UK",
      "UK mortgage family deposit help",
    ],
    relatedCalculatorSlug: "deposit",
    relatedCalculatorEyebrow: "CHECK DEPOSIT",
    relatedCalculatorTitle: "Estimate how much deposit may be needed before structuring family support",
    relatedCalculatorCta: "Estimate deposit",
    authorityLinks: [
      { label: "MoneyHelper: buying a home", href: "https://www.moneyhelper.org.uk/en/homes/buying-a-home" },
      { label: "FCA guidance on finding an adviser", href: "https://www.fca.org.uk/consumers/finding-adviser" },
      { label: "HMRC: anti-money laundering supervision overview", href: "https://www.gov.uk/guidance/money-laundering-regulations-your-responsibilities" },
    ],
    internalLinks: [
      { label: "Use the deposit calculator", href: "/calculators/deposit" },
      { label: "Read the full expat and NRI mortgage guide", href: "/guides/uk-expat-and-nri-mortgage-guide" },
      { label: "Read the gifted deposit from India article", href: "/blogs/gifted-deposit-from-family-in-india-to-buy-a-uk-home" },
      { label: "Read the first-time buyer guide", href: "/guides/first-time-buyer-guide" },
      { label: "Request professional advice", href: "/request-advice" },
      { label: "Browse all articles", href: "/blogs" },
    ],
    faq: [
      { question: "Do lenders allow family-supported deposits?", answer: "Many do, but the detail matters. The lender will usually want clarity on whether the money is a genuine gift and how it is sourced." },
      { question: "What do lenders usually check?", answer: "Common checks include the source of funds, donor identity, whether the money is repayable and the broader affordability of the mortgage." },
      { question: "Does family help remove the need for affordability?", answer: "No. A stronger deposit can help, but lenders still assess income, commitments and the wider case." },
      { question: "Can gifted deposit rules differ between lenders?", answer: "Yes. Policy details and documentation expectations can vary." },
      { question: "Do conveyancers also check deposit support?", answer: "Yes. Legal and anti-money-laundering checks often sit alongside lender checks." },
      { question: "Is family support only relevant to first-time buyers?", answer: "No. It is common among first-time buyers, but other buyers can also use family support in some cases." },
      { question: "Should the donor paperwork be prepared early?", answer: "Usually yes. That reduces the chance of late delay." },
      { question: "Can overseas family support make the case more document-heavy?", answer: "Yes. Cross-border support often increases the need for a tidy evidence trail." },
    ],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Family support is one of the most common ways buyers strengthen a deposit in the UK, especially where saving the full amount alone would take too long. The real issue is not whether family help exists. It is how that help is structured and evidenced.",
          "Lenders usually want to understand whether the support is a genuine gift, whether it needs repaying and where the money came from. Those questions become even more important when the support is substantial or cross-border.",
        ],
      },
      {
        heading: "Why people search for this service",
        paragraphs: [
          "Buyers and families usually search because they want a practical answer to a simple question: if family helps with the deposit, what does the lender actually care about?",
          "That question matters because many people assume the deposit is only about hitting the percentage. In practice, the structure and proof of the funds can matter almost as much as the amount.",
        ],
      },
      {
        heading: "Benefits of understanding the checks early",
        paragraphs: [
          "If you know what the lender and conveyancer are likely to ask, you can build a cleaner deposit route and avoid scrambling for documents under time pressure later.",
          "It also becomes easier to judge whether the deposit plan is genuinely ready to support a live purchase.",
        ],
      },
      {
        heading: "Common situations",
        paragraphs: [
          "Some buyers receive a direct gift from parents. Others combine personal savings with wider family support. Some have domestic donors, while others rely on relatives abroad.",
          "These routes can all work, but the more moving parts involved, the more valuable early simplification becomes.",
        ],
      },
      {
        heading: "Things to consider",
        paragraphs: [
          "Clarity on donor identity, source of funds, gift status and transfer trail is usually essential. The mortgage still needs to work on affordability and lender criteria as well.",
          "A family-supported deposit should therefore be seen as one part of the overall case, not a substitute for the rest of the assessment.",
        ],
        bullets: [
          "Be clear whether the support is a gift or something else",
          "Keep the money trail easy to follow",
          "Prepare donor paperwork before the process becomes urgent",
          "Treat deposit evidence and affordability as linked parts of the same case",
        ],
      },
      {
        heading: "Frequently asked questions",
        paragraphs: [
          "A common mistake is assuming that because the family relationship is genuine, the paper trail is less important. In practice, the professionals involved still need formal evidence.",
          "Another is focusing on the deposit amount but not on how the money got there. That can create more friction than buyers expect.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Family support can make home buying more realistic, but only when the deposit route is structured clearly enough for the lender and conveyancer to rely on it.",
        ],
      },
      {
        heading: "Call to action",
        paragraphs: [
          "If your deposit plan includes family support, estimate the numbers and organise the evidence before the purchase becomes time-sensitive.",
          "If you are unsure, speak to a qualified mortgage adviser before making a mortgage decision.",
          "Looking for a verified professional?",
          "Find trusted Mortgage and Insurance Advisers on Hub.Nikera.",
        ],
      },
    ],
  }),
];
