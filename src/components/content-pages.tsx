import Link from "next/link";
import { Suspense } from "react";
import { CalculatorCard } from "./calculator-card";
import { ContactForm } from "./contact-form";
import { ArrowIcon, GuideIcon, ShieldIcon } from "./icons";
import { ProfessionalAdviceForm } from "./professional-advice-form";
import { getSuggestedAdviceTopic } from "@/lib/advice";
import { calculators } from "@/lib/calculators";
import { articles as resourceArticles, guides as resourceGuides } from "@/lib/resources";

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="inner-hero">
      <div className="container">
        <span className="kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </header>
  );
}

function CTA() {
  return (
    <div className="cta-stack">
      <section className="inner-cta">
        <div>
          <span>PERSONALISED GUIDANCE</span>
          <h2>Ready to speak with someone?</h2>
          <p>Tell us what you need help with and we&apos;ll connect you with a trusted professional.</p>
        </div>
        <Link className="button button-light" href="/request-advice">
          Request advice <ArrowIcon />
        </Link>
      </section>
      <section className="inner-cta promo-card">
        <div>
          <span>FOR ADVISERS</span>
          <h2>Explore Nikera Flow.</h2>
          <p>
            Mortgage CRM built for specialist mortgage journeys, protection workflows and adviser use
            cases.
          </p>
        </div>
        <a
          className="button button-light"
          href="https://www.nikera.co.uk/products/nikera-flow"
          target="_blank"
          rel="noreferrer"
        >
          Explore Nikera Flow
        </a>
      </section>
    </div>
  );
}

export function MortgagePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="MORTGAGE & PROTECTION"
        title="Clearer choices for your home and family."
        intro="Explore practical calculators, straightforward guidance and professional support for mortgage and protection decisions."
      />
      <section className="inner-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">START WITH THE NUMBERS</span>
              <h2>Featured mortgage calculators</h2>
            </div>
            <Link href="/calculators">
              View every calculator <ArrowIcon />
            </Link>
          </div>
          <div className="three-grid">
            {calculators
              .filter((x) =>
                ["mortgage-repayment", "mortgage-affordability", "loan-to-value"].includes(x.slug),
              )
              .map((x) => (
                <CalculatorCard key={x.slug} item={x} />
              ))}
          </div>
        </div>
      </section>
      <section className="inner-section soft-bg">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">LEARN AT YOUR PACE</span>
              <h2>Mortgage and protection essentials</h2>
            </div>
            <Link href="/guides">
              Browse guides <ArrowIcon />
            </Link>
          </div>
          <div className="feature-grid">
            {resourceGuides.slice(0, 3).map((guide) => (
              <article className="resource-tile" key={guide.slug}>
                <GuideIcon />
                <small>
                  {guide.category} · {guide.readTime}
                </small>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <Link href={`/guides/${guide.slug}`}>
                  Read guide <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="inner-section">
        <div className="container">
          <ProfessionalAdviceForm
            pageKind="page"
            pageSlug="mortgage-protection"
            pageTitle="Mortgage & Protection"
            pageCategory="Mortgage & protection"
            defaultTopic={getSuggestedAdviceTopic({
              slug: "mortgage-protection",
              title: "Mortgage & Protection",
              category: "Mortgage & protection",
              kind: "page",
            })}
          />
        </div>
      </section>
      <section className="container">
        <CTA />
      </section>
    </main>
  );
}

export function ExpatMortgagesPage() {
  const expatArticles = resourceArticles.filter((article) => article.category.toLowerCase().includes("expat"));

  return (
    <main id="main">
      <PageHero
        eyebrow="EXPAT MORTGAGES"
        title="UK mortgage guidance for expats and returning residents."
        intro="Understand the practical issues around UK mortgages while living abroad, returning to the UK or remortgaging an existing property from overseas."
      />
      <section className="inner-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="kicker">WHAT MAKES EXPAT CASES DIFFERENT?</span>
              <h2>Fewer lenders. More policy detail. More preparation.</h2>
              <p>
                Expat mortgage cases often depend on residency, income currency, employment
                structure, property purpose and the quality of your documentation. The broad UK
                mortgage market is not always the market that applies to you.
              </p>
              <p>
                Hub helps you understand the moving parts, test the numbers with illustrative tools
                and request professional support where the case needs lender-specific judgement.
              </p>
            </div>
            <aside>
              <ShieldIcon />
              <b>Important</b>
              <p>
                Expat mortgage content on Hub is general information only. Eligibility, deposit
                requirements, accepted currencies and product availability depend on lender policy
                and your own circumstances.
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section className="inner-section soft-bg">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">START WITH THE BASICS</span>
              <h2>Useful tools for expat mortgage planning</h2>
            </div>
            <Link href="/calculators">
              View all calculators <ArrowIcon />
            </Link>
          </div>
          <div className="three-grid">
            {calculators
              .filter((x) =>
                ["mortgage-affordability", "deposit", "remortgage-savings"].includes(x.slug),
              )
              .map((x) => (
                <CalculatorCard key={x.slug} item={x} />
              ))}
          </div>
        </div>
      </section>
      <section className="inner-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">EXPAT ARTICLES</span>
              <h2>Read the details that matter before you apply</h2>
            </div>
            <Link href="/blogs">
              Browse all articles <ArrowIcon />
            </Link>
          </div>
          <div className="feature-grid">
            {expatArticles.map((article) => (
              <article className="resource-tile" key={article.slug}>
                <GuideIcon />
                <small>
                  {article.category} · {article.readTime}
                </small>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link href={`/blogs/${article.slug}`}>
                  Read article <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="inner-section">
        <div className="container">
          <ProfessionalAdviceForm
            pageKind="page"
            pageSlug="expat-mortgages"
            pageTitle="Expat Mortgages"
            pageCategory="Expat mortgages"
            defaultTopic="General Mortgage Advice"
          />
        </div>
      </section>
      <section className="container">
        <CTA />
      </section>
    </main>
  );
}

export function GuidesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="EXPERT GUIDES"
        title="Practical guidance, written clearly."
        intro="Build your understanding with structured, plain-English guides covering mortgages, protection and the home-buying journey."
      />
      <section className="inner-section">
        <div className="container">
          <div className="filter-pills" aria-label="Guide topics">
            <span>All guides</span>
            <span>Mortgages</span>
            <span>Protection</span>
            <span>First-time buyers</span>
            <span>Remortgaging</span>
            <Link href="/expat-mortgages">Expats</Link>
          </div>
          <div className="feature-grid">
            {resourceGuides.map((guide) => (
              <article className="resource-tile" key={guide.slug}>
                <GuideIcon />
                <small>
                  {guide.category} · {guide.readTime}
                </small>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <Link href={`/guides/${guide.slug}`}>
                  Read guide <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
          <CTA />
        </div>
      </section>
    </main>
  );
}

export function BlogsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="HUB INSIGHTS"
        title="Useful context for financial decisions."
        intro="Accessible articles that explain market changes, common questions and the details worth understanding."
      />
      <section className="inner-section">
        <div className="container">
          <div className="article-grid">
            {resourceArticles.map((article, i) => (
              <article className={i === 0 ? "article-tile featured" : "article-tile"} key={article.slug}>
                <small>
                  {article.category} · {article.readTime}
                </small>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <Link href={`/blogs/${article.slug}`}>
                  Read article <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
          <div className="related-tools">
            <div>
              <span className="kicker">RELATED TOOLS</span>
              <h2>Turn knowledge into useful numbers.</h2>
            </div>
            <div className="button-row">
              <Link className="button button-primary" href="/calculators">
                Browse calculators <ArrowIcon />
              </Link>
              <Link className="button button-secondary" href="/expat-mortgages">
                Explore expat mortgages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="ABOUT HUB"
        title="Financial knowledge should feel empowering."
        intro="Hub is an independent product within the Nikera ecosystem, created to make complex financial topics easier to understand and act on."
      />
      <section className="inner-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="kicker">OUR PURPOSE</span>
              <h2>Better information. More confident decisions.</h2>
              <p>
                Important financial choices often arrive with unfamiliar language, competing
                information and pressure to act. Hub brings useful tools and practical education
                together in one considered experience.
              </p>
              <p>
                We focus first on Mortgage &amp; Protection, with future knowledge hubs planned for
                property, lettings, investments and business.
              </p>
            </div>
            <aside>
              <ShieldIcon />
              <b>Hub is not a bank or comparison website.</b>
              <p>
                We provide educational resources and illustrative tools. Where personal guidance is
                needed, we help visitors request a conversation with a trusted professional.
              </p>
            </aside>
          </div>
          <div className="values-grid">
            {[
              ["01", "Clear", "Plain English, transparent assumptions and prominent limitations."],
              ["02", "Useful", "Tools and content designed around real decisions, not clicks."],
              [
                "03",
                "Responsible",
                "Balanced information that does not create unrealistic expectations.",
              ],
              ["04", "Evolving", "A scalable platform that improves as new knowledge areas are introduced."],
            ].map(([n, title, text]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <CTA />
        </div>
      </section>
    </main>
  );
}

export function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="CONTACT HUB"
        title="How can we help?"
        intro="Ask a question, share feedback or request a conversation about your mortgage and protection needs."
      />
      <section className="inner-section">
        <div className="container contact-layout">
          <div>
            <span className="kicker">SEND AN ENQUIRY</span>
            <h2>Tell us what you need.</h2>
            <p>
              Complete the form and we&apos;ll send your enquiry directly to{" "}
              <a href="mailto:hello@nikera.co.uk">hello@nikera.co.uk</a>.
            </p>
            <div className="contact-points">
              <div>
                <b>General enquiries</b>
                <a href="mailto:hello@nikera.co.uk">hello@nikera.co.uk</a>
              </div>
              <div>
                <b>Response expectations</b>
                <span>We aim to respond as soon as reasonably possible during UK business days.</span>
              </div>
              <div>
                <b>Important</b>
                <span>Do not send passwords, bank details or other sensitive financial information.</span>
              </div>
            </div>
          </div>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export function RequestAdvicePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="REQUEST ADVICE"
        title="Professional Mortgage & Protection guidance."
        intro="Tell us what you need help with and we’ll safely pass your enquiry to a trusted adviser for a no-obligation review."
      />
      <section className="inner-section">
        <div className="container">
          <ProfessionalAdviceForm
            standalone
            pageKind="page"
            pageSlug="request-advice"
            pageTitle="Request Advice"
            pageCategory="Mortgage & protection"
            defaultTopic={getSuggestedAdviceTopic({
              slug: "request-advice",
              title: "Request Advice",
              category: "Mortgage & protection",
              kind: "page",
            })}
          />
        </div>
      </section>
    </main>
  );
}

const privacySections = [
  ["Who we are", "Nikera Hub is a product developed and maintained by Nikera Technologies. For privacy questions, contact hello@nikera.co.uk."],
  ["Information we collect", "We may collect information you provide through enquiry or newsletter forms, including your name, email address, telephone number, preferred contact time and message. Calculator inputs are processed in your browser and are not submitted unless you include them in an enquiry."],
  ["How we use information", "We use information to respond to enquiries, provide requested communications, improve Hub, maintain security and meet legal obligations. We do not sell personal information."],
  ["Our lawful bases", "Depending on the activity, processing may be necessary to respond before entering into a contract, based on consent, required by law, or supported by our legitimate interests in operating and improving Hub."],
  ["Sharing information", "We may share information with service providers supporting hosting, communications and security, or with a relevant trusted professional when you ask us to arrange guidance. We may also disclose information where required by law."],
  ["Retention and security", "We retain personal information only for as long as reasonably needed for the purpose collected and applicable legal requirements. We use proportionate organisational and technical measures, but no internet transmission is completely secure."],
  ["Your rights", "Depending on the circumstances, you may have rights to access, correct, erase or restrict personal data, object to processing, request portability, and withdraw consent. You may also complain to the UK Information Commissioner’s Office."],
  ["Cookies and analytics", "Essential technologies may be used to operate the website. If non-essential analytics or marketing technologies are introduced, appropriate information and controls should be provided before they are used."],
  ["Changes to this notice", "We may update this notice when our services or legal obligations change. The current version and effective date will be published on this page."],
] as const;

const termSections = [
  ["About these terms", "These terms apply when you access or use Nikera Hub. By using the website, you agree to them. If you do not agree, do not use the website."],
  ["Information, not advice", "Hub content and calculator results are general educational information. They are not financial, mortgage, insurance, tax or legal advice, and do not take account of your complete circumstances."],
  ["Calculator limitations", "Calculator results are estimates based on the values and assumptions shown. They are not offers, quotations or guarantees of eligibility. Rates, taxes, lender criteria and product terms can change."],
  ["Professional guidance", "Requests for advice do not create an adviser-client relationship. Any regulated advice or product recommendation must be provided separately by an appropriately authorised professional under their own terms and disclosures."],
  ["Acceptable use", "You must not misuse Hub, attempt unauthorised access, interfere with its operation, introduce malicious code, scrape it excessively, or use its content unlawfully."],
  ["Intellectual property", "Unless stated otherwise, Hub’s design, branding, text and original materials belong to Nikera Technologies or its licensors. You may use the website for personal, non-commercial purposes but may not reproduce or commercialise it without permission."],
  ["External links", "Links to third-party services are provided for convenience. We do not control their availability, content, privacy practices or terms."],
  ["Availability and liability", "We aim to keep Hub accurate and available but cannot promise uninterrupted or error-free operation. Nothing in these terms excludes liability that cannot legally be excluded."],
  ["Changes and governing law", "We may update Hub and these terms. These terms are governed by the laws of England and Wales, subject to any mandatory consumer rights that apply to you."],
] as const;

function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  const sections = privacy ? privacySections : termSections;

  return (
    <main id="main">
      <PageHero
        eyebrow={privacy ? "PRIVACY NOTICE" : "TERMS OF USE"}
        title={privacy ? "Your information, explained clearly." : "Terms for using Nikera Hub."}
        intro={
          privacy
            ? "This notice explains what information we may collect, why we use it and the choices available to you."
            : "Please read these terms before using Hub’s content, calculators and enquiry services."
        }
      />
      <section className="legal-section">
        <div className="container legal-layout">
          <aside>
            <b>On this page</b>
            {sections.map(([title]) => (
              <a key={title} href={`#${title.toLowerCase().replaceAll(" ", "-")}`}>
                {title}
              </a>
            ))}
          </aside>
          <article>
            <p className="effective-date">
              <b>Effective:</b> 28 June 2026
            </p>
            {sections.map(([title, text]) => (
              <section id={title.toLowerCase().replaceAll(" ", "-")} key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </section>
            ))}
            <div className="legal-contact">
              <b>Questions?</b>
              <p>
                Email <a href="mailto:hello@nikera.co.uk">hello@nikera.co.uk</a>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export function PrivacyPage() {
  return <LegalPage type="privacy" />;
}

export function TermsPage() {
  return <LegalPage type="terms" />;
}
