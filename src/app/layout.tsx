import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { defaultSeoKeywords } from "@/lib/seo";
import "./globals.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hub.nikera.co.uk"),
  title: { default: "Hub by Nikera | Financial Knowledge & Tools", template: "%s | Nikera Hub" },
  description:
    "Trusted UK mortgage calculators, practical guides and expert resources to help you make better mortgage and protection decisions.",
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
  alternates: { canonical: "/", languages: { "en-GB": "/" } },
  openGraph: {
    type: "website", locale: "en_GB", url: "/", siteName: "Nikera Hub",
    title: "Hub by Nikera | UK Mortgage Calculators, Guides & Protection Tools",
    description: "Trusted UK calculators, practical guides and expert mortgage and protection resources.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nikera Hub | Knowledge. Tools. Confidence." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub by Nikera | UK Mortgage & Protection Hub",
    description: "UK mortgage calculators, guides and protection tools.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  other: {
    "content-language": "en-GB",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nikera Hub",
    url: "https://hub.nikera.co.uk",
    description:
      "A trusted UK destination for mortgage knowledge, practical tools and professional guidance.",
    inLanguage: "en-GB",
    audience: {
      "@type": "Audience",
      geographicArea: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Nikera Technologies",
      url: "https://nikera.co.uk",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nikera Technologies",
    url: "https://nikera.co.uk",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsAbout: [
      "UK mortgages",
      "UK remortgaging",
      "Mortgage protection",
      "Protection insurance",
      "Mortgage calculators",
    ],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${body.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ERQZTMLFQF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ERQZTMLFQF');
          `}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
