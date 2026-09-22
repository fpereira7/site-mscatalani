import { clientRoutine, steps } from "@/lib/site";

export function Process() {
  return (
    <section id="como-funciona" className="bg-cream px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Método</p>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep md:text-5xl">
            Como o atendimento é conduzido
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Quatro passos objetivos — do envio da documentação às orientações
            finais.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.n} className="relative">
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-6 left-16 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-bronze/60 to-transparent lg:block"
                />
              ) : null}
              <p className="font-serif text-4xl text-bronze-deep">{step.n}</p>
              <h3 className="mt-4 font-serif text-2xl text-olive-deep">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 border-t border-olive/10 pt-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="eyebrow">Rotina do cliente</p>
              <h3 className="mt-4 font-serif text-3xl text-olive-deep">
                Um calendário simples, todo mês
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                Prazos claros para a contabilidade andar sem atraso — e a sua
                empresa ficar regular.
              </p>
            </div>
            <ul className="grid gap-px bg-olive/10 sm:grid-cols-3">
              {clientRoutine.map((item) => (
                <li key={item.title} className="bg-cream p-6">
                  <p className="font-serif text-4xl text-bronze-deep">
                    <span className="text-base tracking-[0.18em] text-olive uppercase">
                      Dia{" "}
                    </span>
                    {item.day}
                  </p>
                  <p className="mt-3 font-serif text-xl text-olive-deep">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
