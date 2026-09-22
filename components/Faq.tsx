import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="bg-cream px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="eyebrow">Dúvidas</p>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep md:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Respostas diretas sobre MEI, IR, troca de contador, documentos e o
            início da rotina.
          </p>
        </div>

        <div className="border-t border-olive/15">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="faq-item group border-b border-olive/15"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5">
                <span className="font-serif text-xl text-olive-deep">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="relative size-8 shrink-0 rounded-full border border-bronze/50"
                >
                  <span className="absolute top-1/2 right-2 left-2 h-px bg-bronze-deep" />
                  <span className="absolute top-2 bottom-2 left-1/2 w-px bg-bronze-deep transition group-open:scale-y-0" />
                </span>
              </summary>
              <p className="pb-5 pr-12 text-[0.95rem] leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
