import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="bg-nude-soft px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="relative w-full max-w-[20rem] lg:max-w-[26rem]">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 border border-bronze/50 sm:translate-x-4 sm:translate-y-4"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-nude">
              <Image
                src="/brand/michelle-catalani.jpg"
                alt="Michelle Catalani, contadora e gestora da MS Catalani"
                width={880}
                height={1100}
                className="size-full object-cover object-[50%_20%]"
                sizes="(max-width: 1024px) 20rem, 26rem"
              />
            </div>
          </div>
          <p className="mt-10 max-w-sm font-serif text-2xl leading-snug text-olive-deep">
            Contadora, palestrante, mãe e atleta de águas abertas — com o mesmo
            método nos números da empresa.
          </p>
        </div>

        <div>
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep md:text-5xl">
            {site.ownerName}
          </h2>
          <p className="mt-2 text-sm tracking-[0.18em] text-olive uppercase">
            Contadora e gestora da MS Catalani
          </p>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Foram mais de 20 anos de contabilidade, a maior parte em
              multinacionais e empresas de grandes nomes do mercado — onde
              prazo, controle e conformidade não admitem improviso. Hoje, esse
              mesmo padrão está a serviço da sua empresa.
            </p>
            <p>
              O atendimento é consultivo e estratégico em cada etapa: vai além
              da execução e orienta com base nos aspectos legais, tributários e
              financeiros, para decisões mais seguras.
            </p>
            <p>
              A MS Catalani valoriza relações sólidas, conduzidas com
              responsabilidade, transparência e compromisso com resultados.
            </p>
            <p>
              No Instagram{" "}
              <a
                href={site.instagramUrl}
                className="text-olive-deep underline decoration-bronze/60 underline-offset-4 transition hover:decoration-bronze"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.instagramHandle}
              </a>{" "}
              e em{" "}
              <a
                href={site.ownerInstagramUrl}
                className="text-olive-deep underline decoration-bronze/60 underline-offset-4 transition hover:decoration-bronze"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.ownerInstagramHandle}
              </a>{" "}
              está o dia a dia da profissão — MEI, imposto de renda, senha GOV,
              desenquadramento — explicado para o empresário decidir com clareza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
