import { ImageResponse } from "next/og";

export const alt = "Xiaoxuan Zhou — Language, AI & Global Experience";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f3ee",
          color: "#1c1917",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        {/* hairline frame */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "1px solid #e7e2da",
          }}
        />

        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span style={{ fontSize: 40, color: "#b4552d" }}>XZ</span>
          <span style={{ fontSize: 22, color: "#7a736a", letterSpacing: "0.2em" }}>
            PORTFOLIO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Xiaoxuan Zhou
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#b4552d",
              marginTop: 28,
              letterSpacing: "0.01em",
            }}
          >
            Language × AI × Global Experience
          </div>
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#7a736a",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Connecting languages, AI and global experiences
        </div>
      </div>
    ),
    { ...size },
  );
}
