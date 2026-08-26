import { CtaLink } from "@/components/CtaLink";
import { IconArrow } from "@/components/Icons";
import { primaryCta } from "@/lib/site";

export function Hero() {
  const cta = primaryCta();

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-navy text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 border border-gold/25 md:inset-6"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full border border-gold/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 size-[22rem] rounded-full border border-gold/10"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div>
          <p className="eyebrow reveal">Escritório de contabilidade</p>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-xl font-serif text-4xl leading-[1.12] font-medium text-balance sm:text-5xl lg:text-[3.35rem]">
            Clareza fiscal para o seu negócio crescer com segurança.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-lg text-[1.05rem] leading-relaxed text-cream/72">
            Contabilidade consultiva para quem precisa de rotina em dia, regime
            certo e um interlocutor que explica — sem jargão desnecessário.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink>
              {cta.label}
              <IconArrow />
            </CtaLink>
            <CtaLink href="#servicos" variant="ghost">
              Conhecer os serviços
            </CtaLink>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-md">
          <div className="gold-frame relative aspect-[4/5] bg-navy-deep/60 p-8">
            <div className="absolute inset-3 border border-gold/20" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="eyebrow">MS Catalani</p>
                <p className="mt-6 font-serif text-6xl leading-none text-gold sm:text-7xl">
                  MC
                </p>
              </div>
              <div className="space-y-4">
                <div className="hairline" />
                <p className="font-serif text-2xl leading-snug text-cream">
                  Abertura, MEI, fiscal, folha e consultoria tributária.
                </p>
                <p className="text-sm tracking-[0.18em] text-gold/80 uppercase">
                  Conteúdo no Instagram · @ms_catalani
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
