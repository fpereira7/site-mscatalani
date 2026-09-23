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
      "Alteração contratual",
      "Encerramento de empresa",
      "Regularização fiscal",
      "Parcelamento de débitos",
      "Planejamento tributário",
      "Imposto de Renda pessoa física e jurídica",
      "Registro de marcas",
      "Folha de pagamento",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
