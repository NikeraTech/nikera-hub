import Link from "next/link";
import { ArrowIcon } from "./icons";
import { Logo } from "./logo";
import { SearchAndAdvice } from "./search-advice";
const links = [["Home","/"],["Mortgage & Protection","/mortgage-protection"],["Calculators","/calculators"],["Guides","/guides"],["Blogs","/blogs"],["About","/about"]];
export function Header() { return <header className="site-header"><div className="container header-inner"><Logo /><nav aria-label="Main navigation">{links.map(([name,href]) => <Link key={href} href={href}>{name}</Link>)}</nav><SearchAndAdvice /><Link href="/contact" className="header-cta">Contact us <ArrowIcon /></Link></div></header>; }
