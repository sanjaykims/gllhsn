import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#6d28d9",
          color: "#ffffff",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#f5e6c8" }}>
          {site.churchName}
        </div>
        <div style={{ fontSize: 96, fontWeight: 900, marginTop: 24 }}>
          {site.choirName}
        </div>
        <div style={{ fontSize: 32, marginTop: 32, color: "#f5e6c8" }}>
          {site.tagline}
        </div>
      </div>
    ),
    size,
  );
}
