import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "MS Catalani Contabilidade — Excelência que organiza, confiança que transforma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/logo-completa.png"),
    "base64",
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#EDDFD6",
          color: "#6B5F4F",
          padding: "72px 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 560,
          }}
        >
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#916940",
            }}
          >
            Mais de 20 anos · Padrão de multinacional
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 60,
              lineHeight: 1.12,
              fontFamily: "Georgia, serif",
              color: "#4A4034",
            }}
          >
            Transformo números em resultados reais.
          </div>
          <div style={{ marginTop: 32, fontSize: 24 }}>
            MEI · IR · Fiscal · Folha · @ms_catalani
          </div>
        </div>
        <img
          src={`data:image/png;base64,${logo}`}
          width={390}
          height={451}
          alt=""
        />
      </div>
    ),
    size,
  );
}
