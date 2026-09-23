import { CtaLink } from "@/components/CtaLink";
import { IconBuilding, IconChart, IconScale } from "@/components/Icons";
import { extraServices, primaryCta, serviceGroups } from "@/lib/site";

const icons = [IconBuilding, IconScale, IconChart];

export function Services() {
  const cta = primaryCta();

  return (
    <section id="servicos" className="bg-cream px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Atuação</p>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep md:text-5xl">
            O que cuidamos por você
          </h2>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            Da abertura da empresa à regularização, aos tributos e ao Imposto
            de Renda — com foco no que o empresário precisa decidir.
          </p>
        </div>

        <ul className="mt-14 grid gap-px bg-olive/10 lg:grid-cols-3">
          {serviceGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <li key={group.title} className="bg-cream p-8 md:p-9">
                <span className="inline-flex text-bronze-deep">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 font-serif text-3xl text-olive-deep">
                  {group.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  {group.body}
                </p>
                <div className="hairline mt-6" />
                <ul className="mt-6 space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.7rem] h-px w-3 shrink-0 bg-bronze"
                      />
                      <span>
                        <span className="block text-[0.95rem] leading-snug text-olive-deep">
                          {item.label}
                        </span>
                        {item.detail ? (
                          <span className="mt-1 block text-sm leading-snug text-muted">
                            {item.detail}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          {extraServices.lead}{" "}
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-olive-deep underline decoration-bronze/60 underline-offset-4 transition hover:decoration-bronze"
          >
            {extraServices.text}
          </a>
        </p>

        <div className="mt-10">
          <CtaLink variant="ghost">Quero conversar sobre o meu caso</CtaLink>
        </div>
      </div>
    </section>
  );
}
