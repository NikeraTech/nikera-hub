import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

const ogThemes = {
  default: {
    accent: "#97e3bf",
    accentBorder: "rgba(151, 227, 191, 0.24)",
    textAccent: "#06141f",
    background: "linear-gradient(135deg, #06141f 0%, #0f2740 45%, #1c5163 100%)",
    overlay:
      "radial-gradient(circle at top right, rgba(151, 227, 191, 0.22), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.12), transparent 32%)",
  },
  mortgage: {
    accent: "#67d4f1",
    accentBorder: "rgba(103, 212, 241, 0.28)",
    textAccent: "#05202b",
    background: "linear-gradient(135deg, #04131f 0%, #0d3852 46%, #136b8c 100%)",
    overlay:
      "radial-gradient(circle at top right, rgba(103, 212, 241, 0.26), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.10), transparent 34%)",
  },
  protection: {
    accent: "#7ee3a2",
    accentBorder: "rgba(126, 227, 162, 0.28)",
    textAccent: "#072015",
    background: "linear-gradient(135deg, #071710 0%, #0f3524 45%, #1e6a47 100%)",
    overlay:
      "radial-gradient(circle at top right, rgba(126, 227, 162, 0.25), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.08), transparent 34%)",
  },
  remortgage: {
    accent: "#f3c77a",
    accentBorder: "rgba(243, 199, 122, 0.28)",
    textAccent: "#2a1804",
    background: "linear-gradient(135deg, #191007 0%, #4b2f10 42%, #8a5621 100%)",
    overlay:
      "radial-gradient(circle at top right, rgba(243, 199, 122, 0.24), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.08), transparent 34%)",
  },
  firstTimeBuyer: {
    accent: "#a6bbff",
    accentBorder: "rgba(166, 187, 255, 0.28)",
    textAccent: "#11192f",
    background: "linear-gradient(135deg, #0b1020 0%, #28386c 44%, #516cc4 100%)",
    overlay:
      "radial-gradient(circle at top right, rgba(166, 187, 255, 0.24), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.10), transparent 34%)",
  },
  calculator: {
    accent: "#8cb5ff",
    accentBorder: "rgba(140, 181, 255, 0.30)",
    textAccent: "#0d1630",
    background: "linear-gradient(135deg, #06111f 0%, #14284d 44%, #24497f 100%)",
    overlay:
      "radial-gradient(circle at top right, rgba(140, 181, 255, 0.24), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.10), transparent 34%)",
  },
  buyToLet: {
    accent: "#8be2d9",
    accentBorder: "rgba(139, 226, 217, 0.28)",
    textAccent: "#071d1b",
    background: "linear-gradient(135deg, #051516 0%, #12353c 44%, #1f5961 100%)",
    overlay:
      "radial-gradient(circle at top right, rgba(139, 226, 217, 0.24), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.08), transparent 34%)",
  },
} as const;

export type OgThemeKey = keyof typeof ogThemes;

type OgImageInput = {
  eyebrow: string;
  title: string;
  description: string;
  footer?: string;
  theme?: OgThemeKey;
};

export function getOgTheme(value?: string): OgThemeKey {
  const normalized = value?.toLowerCase() ?? "";

  if (normalized.includes("first-time") || normalized.includes("first time") || normalized.includes("home buying")) {
    return "firstTimeBuyer";
  }

  if (
    normalized.includes("protection") ||
    normalized.includes("life insurance") ||
    normalized.includes("critical illness") ||
    normalized.includes("income protection")
  ) {
    return "protection";
  }

  if (normalized.includes("remortg")) {
    return "remortgage";
  }

  if (normalized.includes("buy-to-let") || normalized.includes("buy to let") || normalized.includes("rental")) {
    return "buyToLet";
  }

  if (normalized.includes("calculator")) {
    return "calculator";
  }

  if (
    normalized.includes("mortgage") ||
    normalized.includes("affordability") ||
    normalized.includes("deposit") ||
    normalized.includes("loan-to-value")
  ) {
    return "mortgage";
  }

  return "default";
}

export function createOgImage({
  eyebrow,
  title,
  description,
  footer = "Knowledge. Tools. Confidence.",
  theme = "default",
}: OgImageInput) {
  const selectedTheme = ogThemes[theme];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: selectedTheme.background,
          color: "#f7f8f5",
          position: "relative",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: selectedTheme.overlay,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "52px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: selectedTheme.accent,
                  color: selectedTheme.textAccent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                N
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 18,
                }}
              >
                <span style={{ fontWeight: 700 }}>Nikera Hub</span>
                <span style={{ color: "rgba(247, 248, 245, 0.78)" }}>UK mortgage and protection knowledge</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 16px",
                borderRadius: 999,
                background: "rgba(247, 248, 245, 0.12)",
                border: `1px solid ${selectedTheme.accentBorder}`,
                fontSize: 16,
                letterSpacing: 1.2,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              maxWidth: 920,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 66,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: -1.8,
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.35,
                color: "rgba(247, 248, 245, 0.88)",
                maxWidth: 860,
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 20,
              color: "rgba(247, 248, 245, 0.78)",
            }}
          >
            <div style={{ display: "flex" }}>hub.nikera.co.uk</div>
            <div style={{ display: "flex" }}>{footer}</div>
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
