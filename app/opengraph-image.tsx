import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "MS Catalani | Contabilidade";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E1C2F",
          color: "#F6F1E8",
          padding: 72,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            border: "1px solid rgba(201,168,106,0.35)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#C9A86A",
            }}
          >
            MS Catalani · Contabilidade
          </div>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.12,
              maxWidth: 900,
              fontFamily: "Georgia, serif",
            }}
          >
            Clareza fiscal para o seu negócio crescer com segurança.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(246,241,232,0.7)",
          }}
        >
          <span>Abertura · MEI · Fiscal · Folha · Tributos</span>
          <span style={{ color: "#C9A86A" }}>@ms_catalani</span>
        </div>
      </div>
    ),
    size,
  );
}
