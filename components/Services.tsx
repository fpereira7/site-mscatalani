import { CtaLink } from "@/components/CtaLink";
import {
  IconBuilding,
  IconChart,
  IconId,
  IconLedger,
  IconPeople,
  IconScale,
} from "@/components/Icons";
import { services } from "@/lib/site";

const icons = [
  IconBuilding,
  IconId,
  IconScale,
  IconLedger,
  IconPeople,
  IconChart,
];

export function Services() {
  return (
    <section id="servicos" className="bg-cream px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Atuação</p>
          <h2 className="mt-4 font-serif text-4xl text-olive-deep md:text-5xl">
            O que cuidamos por você
          </h2>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            Serviços de escritório contábil — da constituição da empresa ao IR
            e à rotina mensal — com foco no que o empresário precisa decidir.
          </p>
        </div>

        <ul className="mt-14 grid gap-px bg-olive/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <li key={service.title} className="bg-cream p-8 md:p-9">
                <span className="inline-flex text-bronze-deep">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-olive-deep">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {service.body}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-12">
          <CtaLink variant="ghost">Quero conversar sobre o meu caso</CtaLink>
        </div>
      </div>
    </section>
  );
}
