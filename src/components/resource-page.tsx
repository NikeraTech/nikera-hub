import Link from "next/link";
import { getCalculator } from "@/lib/calculators";
import { articles, guides, type Resource } from "@/lib/resources";

const baseUrl = "https://hub.nikera.co.uk";

export function ResourcePage({ resource }: { resource: Resource }) {
  const collection = resource.kind === "guide" ? "guides" : "blogs";
  const collectionLabel = resource.kind === "guide" ? "Guides" : "Articles";
  const url = `${baseUrl}/${collection}/${resource.slug}`;
  const relatedCalculator = resource.relatedCalculatorSlug
    ? getCalculator(resource.relatedCalculatorSlug)
    : undefined;
  const relatedResources = (resource.kind === "guide" ? articles : guides)
    .filter(
      (item) =>
        item.slug !== resource.slug &&
        (item.relatedCalculatorSlug === resource.relatedCalculatorSlug ||
          item.category === resource.category),
    )
    .slice(0, 2);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What does ${resource.title} explain?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${resource.title} explains ${resource.description.toLowerCase()} This content is written for UK users researching ${resource.category.toLowerCase()} decisions.`,
        },
      },
      {
        "@type": "Question",
        name: "Is this page personalised financial advice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This page provides general information only and is not personalised mortgage, insurance, tax or financial advice.",
        },
      },
      {
        "@type": "Question",
        name: relatedCalculator
          ? `Which calculator should I use after reading ${resource.title}?`
          : `How should I use the information in ${resource.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: relatedCalculator
            ? `A useful next step is the ${relatedCalculator.shortTitle}. It can help you turn the ideas on this page into an illustrative estimate before requesting advice.`
            : "Use this page to understand the topic, then compare it with your own circumstances and request professional advice if you need a recommendation tailored to you.",
        },
      },
    ],
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: resource.title,
      description: resource.description,
      datePublished: resource.published,
      dateModified: resource.updated,
      inLanguage: "en-GB",
      about: {
        "@type": "Thing",
        name: resource.category,
      },
      audience: {
        "@type": "Audience",
        geographicArea: {
          "@type": "Country",
          name: "United Kingdom",
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: "Nikera Hub", url: baseUrl },
      publisher: {
        "@type": "Organization",
        name: "Nikera Technologies",
        url: "https://nikera.co.uk",
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
      },
      articleSection: resource.category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: collectionLabel, item: `${baseUrl}/${collection}` },
        { "@type": "ListItem", position: 3, name: resource.title, item: url },
      ],
    },
    faqSchema,
  ];

  return (
    <main id="main" className="resource-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="resource-header">
        <div className="container resource-header-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${collection}`}>{collectionLabel}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{resource.title}</span>
          </nav>
          <span className="kicker">{resource.category}</span>
          <h1>{resource.title}</h1>
          <p>{resource.description}</p>
          <div className="resource-meta">
            <span>{resource.readTime}</span>
            <span>
              Updated{" "}
              <time dateTime={resource.updated}>
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(`${resource.updated}T00:00:00Z`))}
              </time>
            </span>
          </div>
        </div>
      </header>
      <div className="container resource-layout">
        <article className="resource-body">
          {resource.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <aside className="resource-disclaimer">
            <strong>Important information</strong>
            <p>
              This content is general information, not personalised financial advice. Mortgage and
              insurance eligibility, costs and terms depend on individual circumstances and provider
              criteria.
            </p>
          </aside>
          {(relatedResources.length > 0 || relatedCalculator) && (
            <section className="resource-next-steps">
              <span className="kicker">CONTINUE EXPLORING</span>
              <h2>Related tools and reading</h2>
              <div className="resource-next-grid">
                {relatedCalculator && (
                  <article className="resource-next-card resource-next-card-accent">
                    <small>CALCULATOR</small>
                    <h3>{resource.relatedCalculatorTitle ?? relatedCalculator.shortTitle}</h3>
                    <p>{relatedCalculator.description}</p>
                    <Link href={`/calculators/${relatedCalculator.slug}`}>
                      {resource.relatedCalculatorCta ?? "Try calculator"}
                    </Link>
                  </article>
                )}
                {relatedResources.map((item) => {
                  const href = `/${item.kind === "guide" ? "guides" : "blogs"}/${item.slug}`;
                  return (
                    <article className="resource-next-card" key={item.slug}>
                      <small>{item.kind === "guide" ? "GUIDE" : "ARTICLE"}</small>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Link href={href}>
                        Read {item.kind === "guide" ? "guide" : "article"}
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </article>
        <div className="resource-aside-stack">
          <aside className="resource-aside">
            <span>NEED PERSONAL GUIDANCE?</span>
            <h2>Speak with a professional.</h2>
            <p>Discuss your circumstances and the options that may be relevant to you.</p>
            <Link className="button button-primary" href="/contact">
              Request advice
            </Link>
          </aside>
          <aside className="resource-aside promo-card">
            <span>FOR ADVISERS</span>
            <h2>Explore Nikera Flow.</h2>
            <p>Mortgage CRM built for specialist mortgage journeys, protection workflows and adviser use cases.</p>
            <a
              className="button button-primary"
              href="https://www.nikera.co.uk/products/nikera-flow"
              target="_blank"
              rel="noreferrer"
            >
              Explore Nikera Flow
            </a>
          </aside>
          {relatedCalculator && (
            <aside className="resource-aside calculator-promo">
              <span>{resource.relatedCalculatorEyebrow ?? "CHECK YOUR ELIGIBILITY"}</span>
              <h2>{resource.relatedCalculatorTitle ?? relatedCalculator.shortTitle}</h2>
              <p>{relatedCalculator.description}</p>
              <Link className="button button-primary" href={`/calculators/${relatedCalculator.slug}`}>
                {resource.relatedCalculatorCta ?? "Try calculator"}
              </Link>
            </aside>
          )}
        </div>
      </div>
    </main>
  );
}
