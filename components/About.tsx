import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="bg-nude-soft px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Image
            src="/brand/logo-simplificada.png"
            alt=""
            width={640}
            height={648}
            className="h-auto w-40 md:w-48"
          />
          <p className="mt-8 max-w-sm font-serif text-2xl leading-snug text-olive-deep">
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
              São 19 anos de contabilidade com foco em organização, clareza e
              resultado. O atendimento é consultivo e estratégico em cada etapa:
              vai além da execução e orienta com base nos aspectos legais,
              tributários e financeiros, para decisões mais seguras.
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
