import { IconInstagram } from "@/components/Icons";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-olive-deep text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="font-serif text-2xl tracking-[0.12em] uppercase">
            {site.name}
          </p>
          <p className="mt-1 text-[0.65rem] tracking-[0.34em] text-nude uppercase">
            Contabilidade
          </p>
          <p className="mt-5 max-w-sm font-serif text-lg leading-snug text-cream/85 italic">
            {site.slogan[0]}. {site.slogan[1]}.
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] tracking-[0.16em] text-cream/75 uppercase transition hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm text-cream/80">
          <a
            href={`mailto:${site.email}`}
            className="transition hover:text-cream"
          >
            {site.email}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-cream"
          >
            <IconInstagram />
            {site.instagramHandle}
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs tracking-wide text-cream/55 md:flex-row md:justify-between md:px-8">
          <p>
            © 2026 {site.legalName}. Todos os direitos reservados.
          </p>
          <p>
            Este site não coleta dados pessoais além do necessário para a
            navegação.
          </p>
        </div>
      </div>
    </footer>
  );
}
