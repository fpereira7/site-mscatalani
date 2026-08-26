import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    sameAs: [site.instagramUrl],
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: [
      "Abertura de empresa",
      "MEI",
      "Rotina fiscal",
      "Folha de pagamento",
      "Consultoria tributária",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
