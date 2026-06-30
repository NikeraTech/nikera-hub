import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalculatorTool } from "@/components/calculator-tool";
import { calculators, getCalculator } from "@/lib/calculators";
import { articles, guides } from "@/lib/resources";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return calculators.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCalculator(slug);

  return item
    ? buildMetadata({
        title: `UK ${item.title}`,
        description: `Free UK ${item.description.charAt(0).toLowerCase()}${item.description.slice(1)}`,
        path: `/calculators/${slug}`,
        keywords: [item.title, item.shortTitle, `UK ${item.category} calculator`, "Nikera Hub calculator"],
        category: item.category,
      })
    : {};
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCalculator(slug);

  if (!item) notFound();

  const relatedGuides = guides.filter((guide) => guide.relatedCalculatorSlug === slug).slice(0, 2);
  const relatedArticles = articles.filter((article) => article.relatedCalculatorSlug === slug).slice(0, 2);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: item.title,
      description: item.description,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      inLanguage: "en-GB",
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hub.nikera.co.uk/" },
        { "@type": "ListItem", position: 2, name: "Calculators", item: "https://hub.nikera.co.uk/calculators" },
        { "@type": "ListItem", position: 3, name: item.title, item: `https://hub.nikera.co.uk/calculators/${slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What does the ${item.shortTitle} help with?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The ${item.shortTitle} gives a free illustrative estimate to help UK users understand ${item.category.toLowerCase()} decisions before requesting professional advice.`,
          },
        },
        {
          "@type": "Question",
          name: "Are the results guaranteed or personalised advice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The results are illustrative only and are not a mortgage offer, insurance recommendation or personalised financial advice.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after using this calculator?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the result as a planning estimate, then review the related guides and articles or request advice if you need a recommendation based on your own circumstances.",
          },
        },
      ],
    },
  ];

  return (
    <main id="main" className="calculator-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/calculators">Calculators</Link>
          <span>/</span>
          <span>{item.shortTitle}</span>
        </nav>
        <header className="calculator-header">
          <span className="kicker">FREE · INSTANT RESULT</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </header>
        <CalculatorTool calculator={item} />
        {slug === "stamp-duty" && (
          <p className="source-note">
            Stamp Duty bands reflect published rates for England and Northern Ireland from 1 April
            2025. Confirm your liability using the{" "}
            <a href="https://www.gov.uk/stamp-duty-land-tax/residential-property-rates">
              official GOV.UK guidance
            </a>
            .
          </p>
        )}
        <section className="calculator-disclaimer">
          <h2>Important information</h2>
          <p>
            This calculator provides an illustrative estimate only. It is not a mortgage offer,
            insurance recommendation, tax advice or financial advice. Actual eligibility, costs and
            cover depend on your circumstances and provider criteria.
          </p>
        </section>
        {(relatedGuides.length > 0 || relatedArticles.length > 0) && (
          <section className="resource-next-steps calculator-next-steps">
            <span className="kicker">RELATED GUIDANCE</span>
            <h2>Understand the result in more detail</h2>
            <div className="resource-next-grid">
              {relatedGuides.map((guide) => (
                <article className="resource-next-card" key={guide.slug}>
                  <small>GUIDE</small>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <Link href={`/guides/${guide.slug}`}>Read guide</Link>
                </article>
              ))}
              {relatedArticles.map((article) => (
                <article className="resource-next-card" key={article.slug}>
                  <small>ARTICLE</small>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <Link href={`/blogs/${article.slug}`}>Read article</Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
