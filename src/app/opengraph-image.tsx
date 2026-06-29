import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Nikera Hub | Knowledge. Tools. Confidence.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Nikera Hub",
    title: "Knowledge. Tools. Confidence.",
    description:
      "Trusted calculators, practical guides and expert financial resources for UK mortgage and protection decisions.",
    footer: "hub.nikera.co.uk",
  });
}
