import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: site.legalName,
    alternateName: site.name,
    slogan: site.tagline,
    description: site.description,
    telephone: `+${site.whatsappNumber}`,
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.ownerName,
      jobTitle: "Contadora",
      sameAs: [site.ownerInstagramUrl],
    },
    sameAs: [site.instagramUrl],
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: [
      "Abertura de empresa",
      "MEI",
      "Imposto de Renda",
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
