export function About() {
  return (
    <section id="sobre" className="bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <div className="relative min-h-[22rem] overflow-hidden border-b border-gold/20 lg:min-h-[36rem] lg:border-b-0 lg:border-r">
          <div className="absolute inset-8 border border-gold/25" />
          <div className="absolute inset-12 border border-gold/10" />
          <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-10 md:p-14 lg:min-h-[36rem]">
            <p className="font-serif text-7xl text-gold/90 md:text-8xl">MC</p>
            <p className="mt-6 max-w-xs font-serif text-2xl leading-snug">
              Um escritório com nome, voz e presença — não uma fila de protocolos.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-20">
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Contabilidade próxima, do jeito que o Instagram já mostra.
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-cream/75">
            <p>
              A MS Catalani é um escritório de contabilidade que fala a língua de
              quem empreende: prazos, regime, folha e a dúvida que aparece no meio
              da semana.
            </p>
            <p>
              O perfil{" "}
              <a
                href="https://www.instagram.com/ms_catalani/"
                className="text-gold underline decoration-gold/40 underline-offset-4 transition hover:decoration-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ms_catalani
              </a>{" "}
              reúne orientação prática sobre abertura de empresa, MEI, obrigações
              fiscais e organização da rotina. Este site reúne esse mesmo recado,
              com um canal direto para conversar.
            </p>
            <p>
              Sem promessa inflada e sem jargão de software. O trabalho é
              contábil: deixar a casa fiscal em ordem para o negócio decidir com
              mais segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
