import Link from "next/link";
import { ArrowIcon, CalculatorIcon, GuideIcon, ShieldIcon, SparkIcon } from "@/components/icons";
import { CalculatorCard } from "@/components/calculator-card";
import { calculators } from "@/lib/calculators";
import { formatMarketDate, getMarketSnapshot } from "@/lib/market-data";

const guides = [
  { category: "Mortgages", title: "Your complete guide to buying your first home", text: "From deposits to completion, understand every stage of the journey.", time: "8 min read", tone: "mint" },
  { category: "Protection", title: "Life insurance: what cover do you actually need?", text: "A practical look at the cover that can protect the people who matter.", time: "6 min read", tone: "blue" },
  { category: "Remortgaging", title: "When should you start looking for a new mortgage deal?", text: "Plan ahead and avoid moving onto your lender's standard variable rate.", time: "5 min read", tone: "sand" },
];

const categories = ["Mortgage & Protection", "Lettings", "Estate Agency", "Investments", "Business"];

export default async function Home() {
  const marketSnapshot = await getMarketSnapshot();
  const heroAffordabilityHref =
    "/calculators/mortgage-affordability?income=40000&secondIncome=24000&commitments=167&deposit=30000";
  const heroRepaymentHref =
    "/calculators/mortgage-repayment?loan=258000&rate=4.28&years=35&interestOnly=0";

  return (
    <main id="main">
      <section className="hero section-pad">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><SparkIcon /> Trusted Financial Knowledge Platform</span>
            <h1>Knowledge.<br />Tools.<br /><span>Confidence.</span></h1>
            <p>Helping you make better financial decisions through trusted calculators, practical guides and expert resources.</p>
            <div className="button-row">
              <Link className="button button-primary" href="/mortgage-protection">Explore Mortgage &amp; Protection <ArrowIcon /></Link>
              <Link className="button button-secondary" href="/calculators">Browse Calculators</Link>
            </div>
            <div className="trust-row"><span><ShieldIcon /> Clear and impartial</span><span>✓ No jargon</span><span>✓ Free resources</span></div>
          </div>
          <div className="hero-visual" aria-label="Example mortgage affordability result">
            <div className="float-card card-main">
              <div className="card-label"><span className="icon-box"><CalculatorIcon /></span><span>Mortgage affordability<br /><small>Your estimated borrowing</small></span></div>
              <strong>£286,000</strong>
              <div className="meter"><span /></div>
              <div className="card-stats"><span>Monthly payment<br /><b>£1,186</b></span><span>Interest rate<br /><b>4.28%</b></span></div>
              <Link className="mock-result-link" href={heroAffordabilityHref}>View your results <ArrowIcon /></Link>
            </div>
            <Link className="float-card mini-card mini-top" href={heroRepaymentHref}><span>£</span><div><b>Mortgage Calculator</b><small>Instant personalised result</small></div></Link>
            <Link className="float-card mini-card mini-bottom" href="/blogs/understanding-mortgage-rates"><span>%</span><div><b>Bank Rate</b><small>Market data, explained</small></div></Link>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why people use Hub"><div className="container">{["Plain English", "No Hidden Fees", "Free Tools", "UK Focused", "Expert Guidance"].map((item) => <span key={item}>✓ {item}</span>)}</div></section>
      <section className="category-strip"><div className="container category-list">
        {categories.map((name, i) => <div className={i === 0 ? "category active" : "category"} key={name}><span>{i === 0 ? <ShieldIcon /> : i === 1 ? "⌂" : i === 2 ? "◇" : i === 3 ? "↗" : "▦"}</span><div><b>{name}</b><small>{i === 0 ? "Available now" : "Coming soon"}</small></div></div>)}
      </div></section>

      <section className="section-pad"><div className="container">
        <div className="section-heading"><div><span className="kicker">USEFUL TOOLS</span><h2>Make the numbers make sense.</h2><p>Quick, easy-to-use calculators built to give you a clearer picture.</p></div><Link href="/calculators">View all calculators <ArrowIcon /></Link></div>
        <div className="three-grid">{calculators.map((item) => <CalculatorCard item={item} key={item.slug} />)}</div>
      </div></section>

      <section className="market-section"><div className="container"><div className="section-heading"><div><span className="kicker">CURRENT MARKET SNAPSHOT</span><h2>The mortgage market, at a glance.</h2><p>Official Bank Rate and Bank of England quoted mortgage rates. Mortgage figures are monthly averages for owner-occupied 75% LTV products, not personalised quotes.</p></div><small>Official Bank of England data</small></div><div className="market-grid">{marketSnapshot ? marketSnapshot.figures.map((figure) => <article key={figure.series}><small>{figure.label}</small><strong>{figure.value.toFixed(2)}%</strong><span>As of <time dateTime={figure.asOf}>{formatMarketDate(figure.asOf)}</time></span><div className="market-links"><Link href={figure.contextHref}>{figure.contextLabel} <ArrowIcon /></Link><a href={figure.href} target="_blank" rel="noreferrer">Official source →</a></div></article>) : <article className="market-unavailable"><small>Market data unavailable</small><strong>Check back soon</strong><p>We could not load the latest official Bank of England figures right now.</p></article>}</div></div></section>

      <section className="section-pad soft-bg"><div className="container">
        <div className="section-heading"><div><span className="kicker">LATEST GUIDES</span><h2>Guidance for the decisions that matter.</h2></div><Link href="/guides">Explore all guides <ArrowIcon /></Link></div>
        <div className="three-grid">{guides.map((item) => <article className="guide-card" key={item.title}><div className={`guide-art ${item.tone}`}><GuideIcon /><span>{item.category}</span></div><div className="guide-body"><small>{item.category.toUpperCase()} · {item.time}</small><h3>{item.title}</h3><p>{item.text}</p><Link href="/guides">Read guide <ArrowIcon /></Link></div></article>)}</div>
      </div></section>

      <section className="section-pad blog-section"><div className="container"><div className="section-heading"><div><span className="kicker">LATEST ARTICLES</span><h2>Useful context for a changing market.</h2></div><Link href="/blogs">Explore all articles <ArrowIcon /></Link></div><div className="blog-layout"><article className="feature-blog"><span>TRENDING · MARKET UPDATE</span><h3>What the latest base rate decision could mean for your mortgage</h3><p>A clear overview of fixed rates, variable deals and the practical choices available to borrowers.</p><Link href="/blogs">Read article <ArrowIcon /></Link></article><div className="topic-list"><span>POPULAR TOPICS</span>{["First-time buyers", "Remortgaging in 2026", "Understanding protection", "Self-employed mortgages"].map((topic, i) => <Link href="/blogs" key={topic}><b>0{i + 1}</b>{topic}<i>→</i></Link>)}</div></div></div></section>

      <section className="section-pad"><div className="container split-section">
        <div><span className="kicker">WHY HUB?</span><h2>Good decisions start with better information.</h2><p className="lead">Financial choices can feel complicated. Hub brings the important things together, explains them clearly and helps you move forward.</p><div className="benefits"><div><span>01</span><p><b>Plain English, always</b><br />Practical information without the technical fog.</p></div><div><span>02</span><p><b>Tools you can trust</b><br />Transparent calculators with clear assumptions.</p></div><div><span>03</span><p><b>Expert-led resources</b><br />Content shaped by real industry experience.</p></div></div></div>
        <div className="advice-stack"><aside className="advice-card"><span className="advice-icon">↗</span><span className="kicker light">NEED A HUMAN?</span><h2>Some decisions deserve a conversation.</h2><p>Tell us what you need help with and we&apos;ll connect you with a trusted professional.</p><Link className="button button-light" href="/contact">Request advice <ArrowIcon /></Link><small>No obligation. Just helpful guidance.</small></aside><aside className="advice-card promo-card"><span className="kicker light">FOR ADVISERS</span><h2>Explore Nikera Flow.</h2><p>Mortgage CRM built for specialist mortgage journeys, protection workflows and adviser use cases.</p><a className="button button-light" href="https://www.nikera.co.uk/products/nikera-flow" target="_blank" rel="noreferrer">Explore Nikera Flow</a></aside></div>
      </div></section>

      <section className="newsletter"><div className="container newsletter-inner"><div><span className="kicker">THE HUB NOTE</span><h2>Useful knowledge, delivered simply.</h2><p>Fresh guides, practical tools and insights worth knowing. No noise.</p></div><form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" required /><button type="submit">Join the newsletter <ArrowIcon /></button><small>By subscribing, you agree to our privacy policy.</small></form></div></section>
    </main>
  );
}
