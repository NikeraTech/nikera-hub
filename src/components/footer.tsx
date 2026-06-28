import Image from "next/image";
import Link from "next/link";

const companyUrl = "https://nikera.co.uk";

export function Footer() {
  return <footer className="footer">
    <div className="container footer-main">
      <div className="footer-brand"><div className="footer-logo-lockup"><Link href="/" className="logo"><Image src="/nikera-logo.png" alt="" width={52} height={46} /><span><b>Hub</b></span></Link><a href={companyUrl}>by Nikera Technologies</a></div><p>Helping you make better financial decisions through trusted knowledge, practical tools and expert guidance.</p><small>Hub is a product developed and maintained by <a href={companyUrl}>Nikera Technologies</a>.</small></div>
      <div><b>Explore</b><Link href="/mortgage-protection">Mortgage &amp; Protection</Link><Link href="/calculators">Calculators</Link><Link href="/guides">Guides</Link><Link href="/blogs">Blogs</Link></div>
      <div><b>Products</b><a href="https://flow.nikera.co.uk">Nikera Flow</a><a href="https://pdf-lab.com">PDF-Lab</a><a href={companyUrl}>Nikera Technologies</a></div>
      <div><b>Company</b><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
    </div>
    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} <a href={companyUrl}>Nikera Technologies</a>. All rights reserved.</span>
      <a className="developer-credit" href={companyUrl} target="_blank" rel="noopener noreferrer" aria-label="Designed and developed by Nikera Technologies">
        <Image src="/nikera-logo.png" alt="" width={22} height={20} aria-hidden="true" />
        <span>Designed &amp; Developed by <strong>Nikera Technologies</strong></span>
      </a>
    </div>
  </footer>;
}
