import Link from "next/link";
import { ProfessionalAdviceForm } from "./professional-advice-form";
import { TrackedLink } from "./tracked-link";
import { getSuggestedAdviceTopic } from "@/lib/advice";
import { getCalculator } from "@/lib/calculators";
import { getResourceConversionCopy } from "@/lib/resource-conversion";
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
  const faqItems =
    resource.faq && resource.faq.length > 0
      ? resource.faq
      : [
          {
            question: `What does ${resource.title} explain?`,
            answer: `${resource.title} explains ${resource.description.toLowerCase()} This content is written for UK users researching ${resource.category.toLowerCase()} decisions.`,
          },
          {
            question: "Is this page personalised financial advice?",
            answer:
              "No. This page provides general information only and is not personalised mortgage, insurance, tax or financial advice.",
          },
          {
            question: relatedCalculator
              ? `Which calculator should I use after reading ${resource.title}?`
              : `How should I use the information in ${resource.title}?`,
            answer: relatedCalculator
              ? `A useful next step is the ${relatedCalculator.shortTitle}. It can help you turn the ideas on this page into an illustrative estimate before requesting advice.`
              : "Use this page to understand the topic, then compare it with your own circumstances and request professional advice if you need a recommendation tailored to you.",
          },
        ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": resource.kind === "article" ? "BlogPosting" : "Article",
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
      keywords: resource.keywords?.join(", "),
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
  const sectionCount = resource.sections.length;
  const inlineConversionIndex = sectionCount > 4 ? 1 : 0;
  const conversionCopy = getResourceConversionCopy(resource, relatedCalculator);

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
          <div className="resource-action-strip">
            {relatedCalculator ? (
              <TrackedLink
                className="button button-primary"
                href={`/calculators/${relatedCalculator.slug}`}
                label={resource.relatedCalculatorCta ?? "Try calculator"}
                pageType={resource.kind}
                pageSlug={resource.slug}
                pageTitle={resource.title}
                pageCategory={resource.category}
                section="resource-header"
              >
                {resource.relatedCalculatorCta ?? "Try calculator"}
              </TrackedLink>
            ) : (
              <TrackedLink
                className="button button-primary"
                href="#professional-advice"
                label="Request advice"
                pageType={resource.kind}
                pageSlug={resource.slug}
                pageTitle={resource.title}
                pageCategory={resource.category}
                section="resource-header"
              >
                Request advice
              </TrackedLink>
            )}
            <TrackedLink
              className="button button-secondary"
              href="#professional-advice"
              label="Speak with a professional"
              pageType={resource.kind}
              pageSlug={resource.slug}
              pageTitle={resource.title}
              pageCategory={resource.category}
              section="resource-header"
            >
              Speak with a professional
            </TrackedLink>
            <p>
              {conversionCopy.actionNote}
            </p>
          </div>
        </div>
      </header>
      <div className="container resource-layout">
        <article className="resource-body">
          {resource.sections.map((section, index) => (
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
              {section.subsections?.map((subsection) => (
                <div key={subsection.heading}>
                  <h3>{subsection.heading}</h3>
                  {subsection.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {subsection.bullets && (
                    <ul>
                      {subsection.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {index === inlineConversionIndex && (
                <aside className="resource-inline-conversion">
                  <small>NEXT BEST STEP</small>
                  <h3>{conversionCopy.inlineHeading}</h3>
                  <p>{conversionCopy.inlineDescription}</p>
                  <div className="resource-inline-actions">
                    {relatedCalculator ? (
                      <TrackedLink
                        className="button button-primary"
                        href={`/calculators/${relatedCalculator.slug}`}
                        label={resource.relatedCalculatorCta ?? "Try calculator"}
                        pageType={resource.kind}
                        pageSlug={resource.slug}
                        pageTitle={resource.title}
                        pageCategory={resource.category}
                        section="resource-inline"
                      >
                        {resource.relatedCalculatorCta ?? "Try calculator"}
                      </TrackedLink>
                    ) : null}
                    <TrackedLink
                      className="button button-secondary"
                      href="#professional-advice"
                      label="Request advice"
                      pageType={resource.kind}
                      pageSlug={resource.slug}
                      pageTitle={resource.title}
                      pageCategory={resource.category}
                      section="resource-inline"
                    >
                      Request advice
                    </TrackedLink>
                  </div>
                  <div className="resource-inline-trust">
                    {conversionCopy.trustPoints.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </aside>
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
          {resource.internalLinks && resource.internalLinks.length > 0 && (
            <section className="resource-next-steps">
              <span className="kicker">HELPFUL HUB LINKS</span>
              <h2>Useful next steps on Hub.Nikera</h2>
              <div className="resource-next-grid">
                {resource.internalLinks.map((item) => (
                  <article className="resource-next-card" key={item.href}>
                    <small>INTERNAL LINK</small>
                    <h3>{item.label}</h3>
                    <Link href={item.href}>Open page</Link>
                  </article>
                ))}
              </div>
            </section>
          )}
          {resource.authorityLinks && resource.authorityLinks.length > 0 && (
            <section className="resource-next-steps">
              <span className="kicker">TRUSTED UK SOURCES</span>
              <h2>Check official and authoritative guidance</h2>
              <div className="resource-next-grid">
                {resource.authorityLinks.map((item) => (
                  <article className="resource-next-card" key={item.href}>
                    <small>AUTHORITY LINK</small>
                    <h3>{item.label}</h3>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Visit source
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}
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
                    <TrackedLink
                      href={`/calculators/${relatedCalculator.slug}`}
                      label={resource.relatedCalculatorCta ?? "Try calculator"}
                      pageType={resource.kind}
                      pageSlug={resource.slug}
                      pageTitle={resource.title}
                      pageCategory={resource.category}
                      section="related-tools"
                    >
                      {resource.relatedCalculatorCta ?? "Try calculator"}
                    </TrackedLink>
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
          {faqItems.length > 0 && (
            <section className="resource-next-steps">
              <span className="kicker">FAQ</span>
              <h2>Frequently asked questions</h2>
              <div className="resource-faq-list">
                {faqItems.map((item) => (
                  <article className="resource-next-card" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
          <section className="resource-end-cta">
            <div>
              <span className="kicker">READY FOR THE NEXT STEP?</span>
              <h2>{conversionCopy.endHeading}</h2>
              <p>{conversionCopy.endDescription}</p>
            </div>
            <div className="resource-end-cta-actions">
              {relatedCalculator ? (
                <TrackedLink
                  className="button button-primary"
                  href={`/calculators/${relatedCalculator.slug}`}
                  label={resource.relatedCalculatorCta ?? "Try calculator"}
                  pageType={resource.kind}
                  pageSlug={resource.slug}
                  pageTitle={resource.title}
                  pageCategory={resource.category}
                  section="resource-end-cta"
                >
                  {resource.relatedCalculatorCta ?? "Try calculator"}
                </TrackedLink>
              ) : null}
              <TrackedLink
                className="button button-secondary"
                href="#professional-advice"
                label="Request advice"
                pageType={resource.kind}
                pageSlug={resource.slug}
                pageTitle={resource.title}
                pageCategory={resource.category}
                section="resource-end-cta"
              >
                Request advice
              </TrackedLink>
            </div>
          </section>
        </article>
        <div className="resource-aside-stack">
          <aside className="resource-aside">
            <span>NEED PERSONAL GUIDANCE?</span>
            <h2>Speak with a professional.</h2>
            <p>{conversionCopy.asideDescription}</p>
            <TrackedLink
              className="button button-primary"
              href="#professional-advice"
              label="Request advice"
              pageType={resource.kind}
              pageSlug={resource.slug}
              pageTitle={resource.title}
              pageCategory={resource.category}
              section="resource-aside"
            >
              Request advice
            </TrackedLink>
          </aside>
          <aside className="resource-aside promo-card">
            <span>FOR ADVISERS</span>
            <h2>Explore Nikera Flow.</h2>
            <p>Mortgage CRM built for specialist mortgage journeys, protection workflows and adviser use cases.</p>
            <TrackedLink
              className="button button-primary"
              href="https://www.nikera.co.uk/products/nikera-flow"
              label="Explore Nikera Flow"
              pageType={resource.kind}
              pageSlug={resource.slug}
              pageTitle={resource.title}
              pageCategory={resource.category}
              section="resource-promo"
              target="_blank"
              rel="noreferrer"
            >
              Explore Nikera Flow
            </TrackedLink>
          </aside>
          {relatedCalculator && (
            <aside className="resource-aside calculator-promo">
              <span>{resource.relatedCalculatorEyebrow ?? "CHECK YOUR ELIGIBILITY"}</span>
              <h2>{resource.relatedCalculatorTitle ?? relatedCalculator.shortTitle}</h2>
              <p>{relatedCalculator.description}</p>
              <TrackedLink
                className="button button-primary"
                href={`/calculators/${relatedCalculator.slug}`}
                label={resource.relatedCalculatorCta ?? "Try calculator"}
                pageType={resource.kind}
                pageSlug={resource.slug}
                pageTitle={resource.title}
                pageCategory={resource.category}
                section="resource-calculator-promo"
              >
                {resource.relatedCalculatorCta ?? "Try calculator"}
              </TrackedLink>
            </aside>
          )}
        </div>
      </div>
      <section className="resource-advice-section" id="professional-advice">
        <div className="container">
          <ProfessionalAdviceForm
            standalone
            pageKind={resource.kind === "guide" ? "guide" : "article"}
            pageSlug={resource.slug}
            pageTitle={resource.title}
            pageCategory={resource.category}
            defaultTopic={getSuggestedAdviceTopic({
              slug: resource.slug,
              title: resource.title,
              category: resource.category,
              kind: resource.kind === "guide" ? "guide" : "article",
            })}
          />
        </div>
      </section>
    </main>
  );
}
