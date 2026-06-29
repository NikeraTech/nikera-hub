import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { defaultSeoKeywords } from "@/lib/seo";
import "./globals.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hub.nikera.co.uk"),
  title: { default: "Hub by Nikera | Financial Knowledge & Tools", template: "%s | Nikera Hub" },
  description: "Trusted financial calculators, practical guides and expert resources to help you make better financial decisions.",
  keywords: defaultSeoKeywords,
  authors: [{ name: "Nikera Technologies", url: "https://nikera.co.uk" }],
  creator: "Nikera Technologies",
  publisher: "Nikera Technologies",
  applicationName: "Nikera Hub",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [{ url: "/nikera-logo.png", type: "image/png" }],
    shortcut: "/nikera-logo.png",
    apple: "/nikera-logo.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_GB", url: "/", siteName: "Nikera Hub",
    title: "Hub by Nikera | Knowledge. Tools. Confidence.",
    description: "Trusted calculators, practical guides and expert financial resources.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nikera Hub | Knowledge. Tools. Confidence." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub by Nikera",
    description: "Knowledge. Tools. Confidence.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebSite", name: "Nikera Hub",
  url: "https://hub.nikera.co.uk", description: "A trusted destination for financial knowledge, practical tools and professional guidance.",
  publisher: { "@type": "Organization", name: "Nikera Technologies", url: "https://nikera.co.uk" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
