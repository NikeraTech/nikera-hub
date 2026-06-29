import { notFound } from "next/navigation";
import { createOgImage, getOgTheme, ogContentType, ogSize } from "@/lib/og";

const pages = {
  "mortgage-protection": {
    eyebrow: "Mortgage & protection",
    title: "Clearer choices for your home and family.",
    description:
      "Explore practical calculators, straightforward guidance and professional support for mortgage and protection decisions.",
  },
  guides: {
    eyebrow: "Expert guides",
    title: "Practical guidance, written clearly.",
    description:
      "Build your understanding with structured, plain-English guides covering mortgages, protection and the home-buying journey.",
  },
  blogs: {
    eyebrow: "Hub insights",
    title: "Useful context for financial decisions.",
    description:
      "Accessible articles that explain market changes, common questions and the details worth understanding.",
  },
  about: {
    eyebrow: "About Hub",
    title: "Financial knowledge should feel empowering.",
    description:
      "Hub is an independent product within the Nikera ecosystem, created to make complex financial topics easier to understand and act on.",
  },
  contact: {
    eyebrow: "Contact Hub",
    title: "How can we help?",
    description:
      "Ask a question, share feedback or request a conversation about your mortgage and protection needs.",
  },
  privacy: {
    eyebrow: "Privacy notice",
    title: "Your information, explained clearly.",
    description:
      "This notice explains what information we may collect, why we use it and the choices available to you.",
  },
  terms: {
    eyebrow: "Terms of use",
    title: "Terms for using Nikera Hub.",
    description:
      "Please read these terms before using Hub’s content, calculators and enquiry services.",
  },
} as const;

export const alt = "Nikera Hub page preview";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as keyof typeof pages];

  if (!page) {
    notFound();
  }

  return createOgImage({
    eyebrow: page.eyebrow,
    title: page.title,
    description: page.description,
    footer: "hub.nikera.co.uk",
    theme: getOgTheme(page.eyebrow),
  });
}
