# NKH-012 — Local Hub Launch Readiness Audit

Audit date: 2026-06-30

Scope: local codebase inspection only. No packages installed. No website files modified. This report is based on the current repository state in `C:\xampp\htdocs\nikera\nikera-hub`.

## Executive summary

Nikera Hub is structurally close to launch. The advice lead flow is materially stronger than the rest of the product and the SEO foundation is good. The main blockers are content depth, a few UX/compliance gaps, and mobile performance.

The biggest issue is content quality versus launch standard:

- All 6 blog articles are under 800 estimated words.
- All 6 guides are also under 800 estimated words.
- There is some topical overlap in the first-time-buyer content set.

There is also one visible functional mismatch on the homepage:

- The newsletter form is present but has no submission flow.

## 1. Blog Content Audit

Total blog posts: 6

Estimated word counts below are derived from the article body strings defined in `src/lib/resources.ts`. They are estimates, not CMS-export counts.

| Title | URL / slug | Est. words | Under 800 | H1 | H2/H3 sections | Meta title | Meta description | Internal links | Related calculator link | Request Advice CTA | Disclaimer |
|---|---|---:|---|---|---|---|---|---|---|---|---|
| Understanding mortgage rates without the noise | `/blogs/understanding-mortgage-rates` | 586 | Yes | Yes | H2 only | Yes | Yes | Yes | Yes | Yes | Yes |
| How much deposit might you need? | `/blogs/how-much-deposit-do-you-need` | 686 | Yes | Yes | H2 only | Yes | Yes | Yes | Yes | Yes | Yes |
| Five costs to consider before switching | `/blogs/five-remortgaging-costs` | 539 | Yes | Yes | H2 only | Yes | Yes | Yes | Yes | Yes | Yes |
| Life cover and critical illness cover are not the same | `/blogs/life-cover-vs-critical-illness` | 715 | Yes | Yes | H2 only | Yes | Yes | Yes | Yes | Yes | Yes |
| Why lender affordability differs from online estimates | `/blogs/why-lender-affordability-differs` | 502 | Yes | Yes | H2 only | Yes | Yes | Yes | Yes | Yes | Yes |
| What rental stress testing means | `/blogs/rental-stress-testing` | 652 | Yes | Yes | H2 only | Yes | Yes | Yes | Yes | Yes | Yes |

Findings:

- No obvious duplicate article pages.
- All articles are thin relative to the requested 800+ word threshold.
- Shared article rendering is strong:
  - page-level metadata is generated
  - breadcrumbs exist
  - Article + BreadcrumbList + FAQ structured data exist
  - disclaimer exists
  - related calculator card exists
  - full Request Advice section exists
- Content structure is clean, but all articles rely on H2 sections only. There is no H3 depth.

Strict assessment:

- Blog SEO framework: good
- Blog content depth: below launch standard

## 2. Guides Audit

Total guides: 6

| Title | URL / slug | Est. words | Under 800 | Content depth | Internal links | Related calculator link | Request Advice CTA |
|---|---|---:|---|---|---|---|---|
| First Time Buyer Guide | `/guides/first-time-buyer-guide` | 704 | Yes | Moderate | Yes | Yes | Yes |
| Remortgaging Explained | `/guides/remortgaging-explained` | 691 | Yes | Moderate | Yes | Yes | Yes |
| Life Insurance Explained | `/guides/life-insurance-explained` | 713 | Yes | Moderate | Yes | Yes | Yes |
| Income Protection Guide | `/guides/income-protection-guide` | 653 | Yes | Moderate | Yes | Yes | Yes |
| Self-employed Mortgage Guide | `/guides/self-employed-mortgage-guide` | 745 | Yes | Moderate | Yes | Yes | Yes |
| Buying Your First Home | `/guides/buying-your-first-home` | 682 | Yes | Moderate | Yes | Yes | Yes |

Findings:

- All guides are also under 800 estimated words.
- Internal linking is implemented through:
  - related calculator cards
  - related reading cards
  - persistent advice CTA
- Guide structure is consistent and readable.
- There is likely search-intent overlap between:
  - `first-time-buyer-guide`
  - `buying-your-first-home`

That overlap is not a broken implementation issue, but it is a likely SEO cannibalisation risk unless the intent split is sharpened.

Strict assessment:

- Guide UX and structure: good
- Guide depth and differentiation: not yet at v1 launch standard

## 3. Calculator Audit

Total calculators: 12

| Calculator | Slug | Logic status | Advice flow connected | Results included in enquiry payload |
|---|---|---|---|---|
| Mortgage Repayment Calculator | `mortgage-repayment` | Real formula | Yes | Yes |
| Mortgage Affordability Check | `mortgage-affordability` | Real formula | Yes | Yes |
| Stamp Duty Calculator | `stamp-duty` | Real formula | Yes | Yes |
| Overpayment Calculator | `overpayment` | Real formula | Yes | Yes |
| Loan-to-Value Calculator | `loan-to-value` | Real formula | Yes | Yes |
| Deposit Calculator | `deposit` | Real formula | Yes | Yes |
| Interest-Only Calculator | `interest-only` | Real formula | Yes | Yes |
| Buy-to-Let Rental Stress Calculator | `buy-to-let` | Real formula | Yes | Yes |
| Debt-to-Income Calculator | `debt-to-income` | Real formula | Yes | Yes |
| Early Repayment Charge Calculator | `early-repayment-charge` | Real formula | Yes | Yes |
| Remortgage Savings Calculator | `remortgage-savings` | Real formula | Yes | Yes |
| Protection Needs Calculator | `protection-needs` | Real formula | Yes | Yes |

Findings:

- The listed calculators use implemented formulas in `src/components/calculator-tool.tsx`.
- They are illustrative formulas, not placeholder stubs.
- Each calculator page includes:
  - H1
  - breadcrumbs
  - metadata
  - disclaimer
  - related content
  - embedded `ProfessionalAdviceForm`
- Advice payload includes:
  - current page
  - calculator name
  - full calculation result summary
  - timestamp
  - browser
  - referral URL

Notes:

- There are extra config branches in `calculator-tool.tsx` for legacy-like slugs such as `life-insurance`, `income-protection`, and `critical-illness` that are not present in the current published calculator list. They are not breaking anything, but they should be reviewed later for dead-code cleanup.

## 4. SEO Audit

Status summary:

- `src/app/sitemap.ts` exists
- `src/app/robots.ts` exists
- metadata is implemented in layout and page files
- Open Graph metadata exists
- canonical URLs exist
- structured data exists on calculators and resources
- page title uniqueness looks good
- meta description uniqueness looks good

Detailed findings:

- Global metadata:
  - `src/app/layout.tsx`
  - `metadataBase` set to `https://hub.nikera.co.uk`
  - `lang="en-GB"`
  - UK-focused default description and keywords
- Shared metadata builder:
  - `src/lib/seo.ts`
  - canonical + language alternates generated
  - Open Graph image routes wired by path
- Dynamic metadata:
  - calculators: `src/app/calculators/[slug]/page.tsx`
  - guides: `src/app/guides/[slug]/page.tsx`
  - blogs: `src/app/blogs/[slug]/page.tsx`
  - standalone pages: `src/app/[slug]/page.tsx`
- Structured data:
  - resources: Article + BreadcrumbList + FAQPage
  - calculators: WebApplication + BreadcrumbList + FAQPage
  - layout: WebSite + Organization
- Open Graph implementation:
  - root OG image route exists
  - calculator/article/guide-specific OG image routes exist
  - themed OG generation appears implemented for different content areas

SEO concerns:

- SEO framework is stronger than the content itself.
- Thin content is the main SEO risk, not missing metadata.
- Two legal pages are set `noIndex`, which is acceptable.
- Home page guide and blog teaser cards sometimes link to collection pages instead of the exact article/guide. That is not broken, but it weakens internal-link precision.

## 5. Lead Generation Audit

Request advice page:

- Exists at `/request-advice`
- Reuses `ProfessionalAdviceForm`

Form requirements status:

| Requirement | Status |
|---|---|
| Full Name | Present |
| Email Address | Present |
| Phone Number | Present |
| Help topic dropdown | Present |
| Preferred contact method: Phone / WhatsApp / Email / No Preference | Present |
| Best time to contact | Present |
| Additional notes | Present |
| GDPR consent checkbox | Present |
| Hidden source data | Present |
| Submission feedback | Present |
| Error feedback | Present |
| Client validation | Present |
| Server validation | Present |
| Duplicate submission protection | Present |
| Spam protection | Present |

Email flow:

- Backend route exists at `src/app/api/advice/route.ts`
- Uses environment variables for SMTP
- Subject for professional advice emails: `New Advice Request - Nikera Hub`
- Email body includes the requested source information

Lead-gen strengths:

- Strongest implemented area in the product
- Reusable component
- Good trust framing
- Result capture from calculators is implemented correctly

Lead-gen concern:

- The homepage newsletter form is visible but non-functional. That is not part of the professional advice flow, but it is still a lead-capture expectation mismatch and should not remain in a launch build in its current state.

## 6. Trust & Compliance Audit

Status summary:

| Requirement | Status |
|---|---|
| Privacy Policy exists | Yes |
| Terms page exists | Yes |
| Financial disclaimer exists | Yes |
| Calculator disclaimer exists | Yes |
| Wording avoids explicit personalised regulated advice on content pages | Mostly yes |
| “Figures are estimates only” language exists | Yes |

Findings:

- Privacy page exists.
- Terms page exists.
- Calculator pages clearly state results are illustrative only.
- Resource pages clearly state content is general information, not personalised advice.
- Market snapshot includes visible “illustrative / not financial advice” wording.

Compliance caution:

- The trust badge says `FCA Regulated Advisers`, but the site copy inspected here does not clearly identify the regulated entity, firm details, or authorisation context on the form itself.
- That does not make the feature unusable, but from a strict compliance/trust perspective it should be supported by clearer disclosure if it remains a prominent trust claim.

## 7. UX & Navigation Audit

Navigation:

- Main navigation present: Home, Mortgage & Protection, Calculators, Guides, Blogs, About
- Header CTA present: Request advice
- Footer links present: Mortgage & Protection, Calculators, Guides, Blogs, About, Contact, Privacy, Terms

Branding:

- Nikera branding is consistent across header, footer, metadata, and advice flow
- Nikera Flow promotional card is present where expected

Broken internal links:

- From code inspection, main internal routes look valid.
- No automated crawl was run in this audit.
- I did not find obvious hardcoded broken internal routes.

UX issues:

- Homepage newsletter form is non-functional.
- Homepage “latest guides” and “latest articles” cards are only partially deep-linked; some CTAs route to listing pages rather than the exact content item.
- The homepage contains several teaser elements that look more interactive than they are.

Responsive/mobile:

- Layout classes indicate active mobile treatment in `globals.css`.
- Existing Lighthouse artifacts include mobile runs, so mobile was at least previously exercised.

Accessibility basics:

- Form labels are present.
- Breadcrumb nav has `aria-label`.
- Mobile menu uses `aria-expanded`, `aria-controls`, and stateful label text.
- Heading hierarchy on resource/calculator pages is generally sound.
- Skip link exists in layout.

Accessibility cautions:

- Logo alt text is `Nikera Technologies` while the clickable brand is the Hub home link. This is not severe, but it is not the clearest accessible naming.
- No evidence of a full accessibility pass across every page in this audit.

## 8. Performance Audit

Evidence:

- Existing Lighthouse JSON artifacts found:
  - `lh-home-mobile.json`
  - `lh-home-desktop.json`
  - `lh-contact-mobile.json`

Observed Lighthouse category scores from those files:

| Artifact | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Home mobile | 82 | 96 | 100 | 100 |
| Home desktop | 100 | 96 | 100 | 100 |
| Contact mobile | 84 | 96 | 100 | 100 |

Key Lighthouse findings from existing artifacts:

- Home mobile LCP: 4.7s
- Contact mobile LCP: 4.2s
- Home mobile TBT: 130ms
- Contact mobile TBT: 180ms
- Unused JavaScript savings: ~27–28 KiB

Code inspection findings:

- `next/image` is used for branding images.
- Largest static public asset found: `public/nikera-logo.png` at 308,901 bytes.
- Client components are limited to 6 files, which is reasonable:
  - `contact-form.tsx`
  - `calculator-directory.tsx`
  - `calculator-tool.tsx`
  - `header.tsx`
  - `professional-advice-form.tsx`
  - `search-advice.tsx`

Performance concerns:

- Mobile performance is acceptable but not strong enough to ignore.
- The main performance issue is mobile LCP, not catastrophic JS bloat.
- The logo PNG is relatively heavy for a repeated branding asset.

## 9. Final Score

These scores are strict and reflect launch readiness, not just code completeness.

| Area | Score / 10 | Notes |
|---|---:|---|
| Content | 4 | All blogs and all guides are under 800 estimated words |
| SEO | 8 | Strong metadata, OG, sitemap, structured data; content depth limits outcome |
| Lead Generation | 9 | Advice flow is well implemented and reusable |
| Trust | 7 | Good disclaimers and legal pages; FCA trust claim needs stronger supporting disclosure |
| UX | 7 | Navigation is good; homepage newsletter mismatch and shallow teaser linking hurt quality |
| Accessibility | 8 | Strong baseline and 96 Lighthouse accessibility in existing reports |
| Performance | 7 | Good desktop, acceptable mobile, but mobile LCP is still weak |
| Brand Consistency | 8 | Strong overall, though some teaser/promo areas dilute polish |
| Production Readiness | 6 | Core systems are present, but content and a few trust/UX gaps still block sign-off |

Overall score: 64 / 100

## 10. Final Verdict

Not ready, major fixes needed

Reason:

- The content layer does not meet the requested depth standard.
- A visible homepage lead form is non-functional.
- Mobile performance is not poor, but still weak enough to matter.
- Some trust/compliance claims should be supported more clearly before launch.

## 11. Action List

### Critical fixes

- Expand every blog article to a genuine 800+ word standard.
- Expand every guide to a genuine 800+ word standard.
- Either remove the homepage newsletter form or connect it to a real backend flow before launch.
- Review and clarify the `FCA Regulated Advisers` trust claim with supporting disclosure.

### Important improvements

- Differentiate `first-time-buyer-guide` and `buying-your-first-home` more clearly to reduce intent overlap.
- Deep-link homepage guide/article teaser cards to the exact destination pages instead of generic listing routes where possible.
- Reduce mobile LCP, starting with image optimisation and above-the-fold payload review.
- Review unused or legacy calculator config branches not represented in the published calculator directory.

### Nice-to-have improvements

- Add more H3 sub-structure within long-form guides and articles.
- Tighten accessible naming around brand/logo treatment.
- Add automated internal-link checking to CI or pre-launch QA.
- Add richer editorial cross-linking inside article body copy, not only in related cards.

### Future roadmap

- Move advice delivery from SMTP-only to CRM / Nikera Flow / partner allocation architecture.
- Add author profiles, review dates, and editorial methodology pages for stronger E-E-A-T signals.
- Add real newsletter capture with consent logging and preference management.
- Add route-level automated Lighthouse and accessibility regression checks.

## Final assessment

The platform foundation is solid:

- calculators are functional
- SEO plumbing is strong
- advice capture is well implemented

The launch blocker is not the framework. It is the publishing standard. Until the content depth and visible UX mismatches are fixed, Hub should not be marked complete as v1.0.
