import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Nikera Hub calculators";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "Financial calculators",
    title: "Calculators built for clarity.",
    description:
      "Explore mortgage, remortgage, buy-to-let and protection tools with clear assumptions and instant illustrative results.",
    footer: "Free tools from Nikera Hub",
    theme: "calculator",
  });
}
