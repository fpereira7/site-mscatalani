import { steps } from "@/lib/site";

export function Process() {
  return (
    <section id="como-funciona" className="bg-cream px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Método</p>
          <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
            Como o trabalho começa
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Quatro passos objetivos — da primeira mensagem à rotina mensal.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.n} className="relative">
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-6 left-16 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-gold/70 to-transparent lg:block"
                />
              ) : null}
              <p className="font-serif text-4xl text-gold">{step.n}</p>
              <h3 className="mt-4 font-serif text-2xl text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
