import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

type OgImageInput = {
  eyebrow: string;
  title: string;
  description: string;
  footer?: string;
};

export function createOgImage({ eyebrow, title, description, footer = "Knowledge. Tools. Confidence." }: OgImageInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #06141f 0%, #0f2740 45%, #1c5163 100%)",
          color: "#f7f8f5",
          position: "relative",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(151, 227, 191, 0.22), transparent 30%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.12), transparent 32%)",
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
                  background: "#97e3bf",
                  color: "#06141f",
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
                border: "1px solid rgba(247, 248, 245, 0.16)",
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
