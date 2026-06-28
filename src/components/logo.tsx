import Image from "next/image";
import Link from "next/link";
export function Logo() { return <Link href="/" className="logo" aria-label="Nikera Hub home"><Image src="/nikera-logo.png" alt="Nikera Technologies" width={52} height={46} priority /><span><b>Hub</b><small>by Nikera Technologies</small></span></Link>; }
