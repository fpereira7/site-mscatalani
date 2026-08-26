import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MS Catalani | Contabilidade",
    template: "%s | MS Catalani",
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "contabilidade",
    "MS Catalani",
    "abertura de empresa",
    "MEI",
    "consultoria tributária",
    "Simples Nacional",
    "folha de pagamento",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    title: "MS Catalani | Contabilidade",
    description: site.description,
    locale: "pt_BR",
    type: "website",
    siteName: site.legalName,
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Catalani | Contabilidade",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
