import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import { ArrowIcon, CalculatorIcon, GuideIcon, ShieldIcon, SparkIcon } from "@/components/icons";
import { CalculatorCard } from "@/components/calculator-card";
import { calculators } from "@/lib/calculators";
import { formatMarketDate, getMarketSnapshot } from "@/lib/market-data";
import { buildMetadata, defaultSeoKeywords } from "@/lib/seo";

const guides = [
  {
    category: "Mortgages",
    title: "Your complete guide to buying your first home",
    text: "From deposits to completion, understand every stage of the journey.",
    time: "8 min read",
    tone: "mint",
    href: "/guides/first-time-buyer-guide",
  },
  {
    category: "Protection",
    title: "Life insurance: what cover do you actually need?",
    text: "A practical look at the cover that can protect the people who matter.",
    time: "6 min read",
    tone: "blue",
    href: "/guides/life-insurance-explained",
  },
  {
    category: "Remortgaging",
    title: "When should you start looking for a new mortgage deal?",
    text: "Plan ahead and avoid moving onto your lender's standard variable rate.",
    time: "5 min read",
    tone: "sand",
    href: "/guides/remortgaging-explained",
  },
];

const categories = ["Mortgage & Protection", "Lettings", "Estate Agency", "Investments", "Business"];

const popularTopics = [
  { title: "First-time buyers", href: "/guides/first-time-buyer-guide" },
  { title: "Remortgaging in 2026", href: "/guides/remortgaging-explained" },
  { title: "Understanding protection", href: "/guides/life-insurance-explained" },
  { title: "Expat mortgages", href: "/expat-mortgages" },
];

export const metadata: Metadata = buildMetadata({
  title: "Hub by Nikera | UK Mortgage Calculators, Guides & Protection Tools",
  description:
    "Trusted financial calculators, practical guides and expert resources to help you make better UK mortgage and protection decisions.",
  path: "/",
  keywords: [
    ...defaultSeoKeywords,
    "UK mortgage protection",
    "UK mortgage tools",
    "UK mortgage guides",
    "UK protection calculators",
  ],
  category: "Finance",
});

export default async function Home() {
  const marketSnapshot = await getMarketSnapshot();
  const heroAffordabilityHref =
    "/calculators/mortgage-affordability?income=40000&secondIncome=24000&commitments=167&deposit=30000";
  const heroRepaymentHref =
    "/calculators/mortgage-repayment?loan=258000&rate=4.28&years=35&interestOnly=0";

  return (
    <main id="main">
      <section className="hero section-pad">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <SparkIcon /> Trusted Financial Knowledge Platform
            </span>
            <h1>
              Knowledge.
              <br />
              Tools.
              <br />
              <span>Confidence.</span>
            </h1>
            <p>
              Helping you make better financial decisions through trusted calculators, practical
              guides and expert resources.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/mortgage-protection">
                Explore Mortgage &amp; Protection <ArrowIcon />
              </Link>
              <Link className="button button-secondary" href="/calculators">
                Browse Calculators
              </Link>
            </div>
            <div className="trust-row">
              <span>
                <ShieldIcon /> Clear and impartial
              </span>
              <span>✓ No jargon</span>
              <span>✓ Free resources</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Example mortgage affordability result">
            <div className="float-card card-main">
              <div className="card-label">
                <span className="icon-box">
                  <CalculatorIcon />
                </span>
                <span>
                  Mortgage affordability
                  <br />
                  <small>Your estimated borrowing</small>
                </span>
              </div>
              <strong>£286,000</strong>
              <div className="meter">
                <span />
              </div>
              <div className="card-stats">
                <span>
                  Monthly payment
                  <br />
                  <b>£1,186</b>
                </span>
                <span>
                  Interest rate
                  <br />
                  <b>4.28%</b>
                </span>
              </div>
              <TrackedLink
                className="mock-result-link"
                href={heroAffordabilityHref}
                label="View your results"
                pageType="home"
                section="hero-card"
              >
                View your results <ArrowIcon />
              </TrackedLink>
            </div>
            <TrackedLink
              className="float-card mini-card mini-top"
              href={heroRepaymentHref}
              label="Mortgage Calculator"
              pageType="home"
              section="hero-card"
            >
              <span>£</span>
              <div>
                <b>Mortgage Calculator</b>
                <small>Instant personalised result</small>
              </div>
            </TrackedLink>
            <TrackedLink
              className="float-card mini-card mini-bottom"
              href="/blogs/understanding-mortgage-rates"
              label="Bank Rate"
              pageType="home"
              section="hero-card"
            >
              <span>%</span>
              <div>
                <b>Bank Rate</b>
                <small>Market data, explained</small>
              </div>
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why people use Hub">
        <div className="container">
          {["Plain English", "No Hidden Fees", "Free Tools", "UK Focused", "Expert Guidance"].map(
            (item) => (
              <span key={item}>✓ {item}</span>
            ),
          )}
        </div>
      </section>

      <section className="category-strip">
        <div className="container category-list">
          {categories.map((name, i) => (
            <div className={i === 0 ? "category active" : "category"} key={name}>
              <span>{i === 0 ? <ShieldIcon /> : i === 1 ? "⌂" : i === 2 ? "◇" : i === 3 ? "↗" : "▦"}</span>
              <div>
                <b>{name}</b>
                <small>{i === 0 ? "Available now" : "Coming soon"}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad deferred-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">USEFUL TOOLS</span>
              <h2>Make the numbers make sense.</h2>
              <p>Quick, easy-to-use calculators built to give you a clearer picture.</p>
            </div>
            <Link href="/calculators">
              View all calculators <ArrowIcon />
            </Link>
          </div>
          <div className="three-grid">
            {calculators.map((item) => (
              <CalculatorCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="market-section deferred-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">CURRENT MARKET SNAPSHOT</span>
              <h2>The mortgage market, at a glance.</h2>
              <p>
                Official Bank Rate and Bank of England quoted mortgage rates. Mortgage figures are
                monthly averages for owner-occupied 75% LTV products, not personalised quotes.
              </p>
            </div>
            <small>Official Bank of England data</small>
          </div>
          <div className="market-grid">
            {marketSnapshot ? (
              marketSnapshot.figures.map((figure) => (
                <article key={figure.series}>
                  <small>{figure.label}</small>
                  <strong>{figure.value.toFixed(2)}%</strong>
                  <span>
                    As of <time dateTime={figure.asOf}>{formatMarketDate(figure.asOf)}</time>
                  </span>
                  <div className="market-links">
                    <TrackedLink
                      href={figure.contextHref}
                      label={figure.contextLabel}
                      pageType="home"
                      section="market-context"
                    >
                      {figure.contextLabel} <ArrowIcon />
                    </TrackedLink>
                    <a href={figure.href} target="_blank" rel="noreferrer">
                      Official source →
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <article className="market-unavailable">
                <small>Market data unavailable</small>
                <strong>Check back soon</strong>
                <p>We could not load the latest official Bank of England figures right now.</p>
              </article>
            )}
          </div>
          <p className="market-disclaimer">
            Important: market figures are illustrative, provided for general information and are
            not financial advice or personalised mortgage recommendations.
          </p>
        </div>
      </section>

      <section className="section-pad soft-bg deferred-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">LATEST GUIDES</span>
              <h2>Guidance for the decisions that matter.</h2>
            </div>
            <Link href="/guides">
              Explore all guides <ArrowIcon />
            </Link>
          </div>
          <div className="three-grid">
            {guides.map((item) => (
              <article className="guide-card" key={item.title}>
                <div className={`guide-art ${item.tone}`}>
                  <GuideIcon />
                  <span>{item.category}</span>
                </div>
                <div className="guide-body">
                  <small>
                    {item.category.toUpperCase()} · {item.time}
                  </small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link href={item.href}>
                    Read guide <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad blog-section deferred-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">LATEST ARTICLES</span>
              <h2>Useful context for a changing market.</h2>
            </div>
            <Link href="/blogs">
              Explore all articles <ArrowIcon />
            </Link>
          </div>
          <div className="blog-layout">
            <article className="feature-blog">
              <span>TRENDING · MARKET UPDATE</span>
              <h3>Understanding mortgage rates without the noise</h3>
              <p>
                A clearer explanation of why Bank Rate, swap pricing, fees and lender policy do not
                always move in lockstep.
              </p>
              <Link href="/blogs/understanding-mortgage-rates">
                Read article <ArrowIcon />
              </Link>
            </article>
            <div className="topic-list">
              <span>POPULAR TOPICS</span>
              {popularTopics.map((topic, i) => (
                <Link href={topic.href} key={topic.title}>
                  <b>0{i + 1}</b>
                  {topic.title}
                  <i>→</i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad deferred-section">
        <div className="container split-section">
          <div>
            <span className="kicker">WHY HUB?</span>
            <h2>Good decisions start with better information.</h2>
            <p className="lead">
              Financial choices can feel complicated. Hub brings the important things together,
              explains them clearly and helps you move forward.
            </p>
            <div className="benefits">
              <div>
                <span>01</span>
                <p>
                  <b>Plain English, always</b>
                  <br />
                  Practical information without the technical fog.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <b>Tools you can trust</b>
                  <br />
                  Transparent calculators with clear assumptions.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <b>Expert-led resources</b>
                  <br />
                  Content shaped by real industry experience.
                </p>
              </div>
            </div>
          </div>
          <div className="advice-stack">
            <aside className="advice-card">
              <span className="advice-icon">↗</span>
              <span className="kicker light">NEED A HUMAN?</span>
              <h2>Some decisions deserve a conversation.</h2>
              <p>
                Tell us what you need help with and we&apos;ll connect you with a trusted
                professional.
              </p>
              <TrackedLink
                className="button button-light"
                href="/request-advice"
                label="Request advice"
                pageType="home"
                section="advice-card"
              >
                Request advice <ArrowIcon />
              </TrackedLink>
              <small>No obligation. Just helpful guidance.</small>
            </aside>
            <aside className="advice-card promo-card">
              <span className="kicker light">FOR ADVISERS</span>
              <h2>Explore Nikera Flow.</h2>
              <p>
                Mortgage CRM built for specialist mortgage journeys, protection workflows and
                adviser use cases.
              </p>
              <TrackedLink
                className="button button-light"
                href="https://www.nikera.co.uk/products/nikera-flow"
                label="Explore Nikera Flow"
                pageType="home"
                section="adviser-promo"
                target="_blank"
                rel="noreferrer"
              >
                Explore Nikera Flow
              </TrackedLink>
            </aside>
          </div>
        </div>
      </section>

      <section className="newsletter deferred-section">
        <div className="container newsletter-inner">
          <div>
            <span className="kicker">NEXT STEP</span>
            <h2>Explore the area that matches your situation.</h2>
            <p>
              Browse UK mortgage guides, expat content and practical calculators without hitting a
              dead-end form.
            </p>
          </div>
          <div className="newsletter-actions">
            <TrackedLink
              className="button button-primary"
              href="/blogs"
              label="Browse articles"
              pageType="home"
              section="newsletter"
            >
              Browse articles <ArrowIcon />
            </TrackedLink>
            <TrackedLink
              className="button button-secondary"
              href="/expat-mortgages"
              label="Explore expat mortgages"
              pageType="home"
              section="newsletter"
            >
              Explore expat mortgages
            </TrackedLink>
            <TrackedLink
              className="button button-secondary"
              href="/request-advice"
              label="Request advice"
              pageType="home"
              section="newsletter"
            >
              Request advice
            </TrackedLink>
            <small>
              General information only. Personal recommendations require an adviser review.
            </small>
          </div>
        </div>
      </section>
    </main>
  );
}
