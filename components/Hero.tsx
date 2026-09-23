import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { IconArrow } from "@/components/Icons";
import { primaryCta, site } from "@/lib/site";

export function Hero() {
  const cta = primaryCta();

  return (
    <section id="topo" className="relative overflow-hidden bg-nude text-ink">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <p className="eyebrow reveal">Padrão de multinacional</p>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-xl font-serif text-4xl leading-[1.1] font-medium text-balance text-olive-deep sm:text-5xl lg:text-[3.5rem]">
            Transformo números em resultados reais.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted">
            Mais de 20 anos de contabilidade, a maior parte em multinacionais e
            empresas de grandes nomes do mercado. O mesmo rigor, agora dedicado
            à sua empresa.
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

        <div className="reveal reveal-delay-2 mx-auto flex w-full max-w-sm flex-col items-center text-center">
          <Image
            src="/brand/logo-simplificada.png"
            alt=""
            width={640}
            height={648}
            priority
            className="h-auto w-36 sm:w-56 lg:w-80"
          />
          <p className="mt-6 font-serif text-xl sm:mt-8 leading-snug text-olive italic sm:text-2xl">
            {site.slogan[0]}
            <br />
            {site.slogan[1]}
          </p>
        </div>
      </div>
    </section>
  );
}
