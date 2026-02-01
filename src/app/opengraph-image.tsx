import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "SynergyPost™ AI - AI-Powered Thought Leadership";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            right: -100,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              color: "white",
            }}
          >
            SP
          </div>
          <span
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "white",
            }}
          >
            SynergyPost™ AI
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            color: "#64748b",
            fontSize: 24,
            marginBottom: 24,
            fontFamily: "monospace",
          }}
        >
          I forced a bot to watch 1,000 hours of LinkedIn posts.
        </p>

        {/* Main headline */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 8,
          }}
        >
          47 VCs rejected this bot.
        </h1>
        <h2
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#64748b",
            textAlign: "center",
            margin: 0,
            marginBottom: 40,
          }}
        >
          Now it's disrupting content.
        </h2>

        {/* CTA-style box */}
        <div
          style={{
            background: "linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)",
            padding: "16px 48px",
            borderRadius: 16,
            fontSize: 24,
            fontWeight: 700,
            color: "white",
          }}
        >
          Generate Your Thought Leadership
        </div>

        {/* Footer text */}
        <p
          style={{
            position: "absolute",
            bottom: 32,
            color: "#475569",
            fontSize: 18,
          }}
        >
          synergypost.ai • No thoughts required
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
