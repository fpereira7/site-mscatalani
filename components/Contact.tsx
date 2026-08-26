import { CtaLink } from "@/components/CtaLink";
import { IconArrow, IconInstagram } from "@/components/Icons";
import { primaryCta, site } from "@/lib/site";

export function Contact() {
  const cta = primaryCta();

  return (
    <section id="contato" className="bg-navy px-5 py-24 text-cream md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="gold-frame relative overflow-hidden px-6 py-14 md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-16 font-serif text-[11rem] leading-none text-gold/10 select-none"
          >
            MC
          </div>
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl md:text-5xl">
            Vamos conversar sobre a contabilidade da sua empresa.
          </h2>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-cream/70">
            {cta.kind === "whatsapp"
              ? "Chame no WhatsApp com o contexto do negócio — abertura, MEI, troca de contador ou rotina fiscal. Respondemos pela conversa, sem formulário."
              : "Chame pelo Instagram @ms_catalani. Quando o WhatsApp do escritório for definido, este botão passa a abrir a conversa direto no aplicativo."}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink>
              {cta.label}
              <IconArrow />
            </CtaLink>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gold/45 px-6 py-3 text-[0.8rem] font-medium tracking-[0.14em] text-cream uppercase transition hover:border-gold hover:bg-gold/10"
            >
              <IconInstagram />
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
