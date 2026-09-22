import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { IconArrow, IconInstagram } from "@/components/Icons";
import { primaryCta, site } from "@/lib/site";

export function Contact() {
  const cta = primaryCta();

  return (
    <section id="contato" className="bg-nude px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl text-olive-deep md:text-5xl">
            Vamos conversar sobre a contabilidade da sua empresa.
          </h2>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-muted">
            {cta.kind === "whatsapp"
              ? "Chame no WhatsApp com o contexto do negócio — abertura, MEI, IR, troca de contador ou rotina fiscal. Respondemos pela conversa, sem formulário."
              : `Chame pelo Instagram ${site.instagramHandle}.`}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink>
              {cta.label}
              <IconArrow />
            </CtaLink>
            <CtaLink href={site.instagramUrl} variant="ghost">
              <IconInstagram />
              {site.instagramHandle}
            </CtaLink>
          </div>
        </div>

        <dl className="space-y-6 border-l border-bronze/40 pl-8">
          <div>
            <dt className="eyebrow">WhatsApp</dt>
            <dd className="mt-2 font-serif text-2xl text-olive-deep">
              <a href={cta.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-olive">
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">E-mail</dt>
            <dd className="mt-2 font-serif text-2xl break-all text-olive-deep">
              <a href={`mailto:${site.email}`} className="transition hover:text-olive">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Atendimento</dt>
            <dd className="mt-2 text-[1.05rem] text-muted">{site.hours}</dd>
          </div>
          <Image
            src="/brand/logo-simplificada.png"
            alt=""
            width={640}
            height={648}
            className="h-auto w-16 pt-2"
          />
        </dl>
      </div>
    </section>
  );
}
