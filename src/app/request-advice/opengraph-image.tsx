import { createOgImage, getOgTheme, ogContentType, ogSize } from "@/lib/og";

export const alt = "Nikera Hub request advice preview";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Request advice",
    title: "Professional Mortgage & Protection guidance.",
    description:
      "Tell us what you need help with and we’ll safely pass your enquiry to a trusted adviser for a no-obligation review.",
    footer: "hub.nikera.co.uk",
    theme: getOgTheme("Request advice"),
  });
}
