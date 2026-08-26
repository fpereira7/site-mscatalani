import { IconInstagram } from "@/components/Icons";
import { Wordmark } from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-deep text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
            Escritório de contabilidade. Orientação sobre abertura, MEI, rotina
            fiscal, folha e regimes tributários.
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] tracking-[0.16em] text-cream/70 uppercase transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start text-sm text-cream/80 transition hover:text-gold"
        >
          <IconInstagram />
          {site.instagramHandle}
        </a>
      </div>

      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs tracking-wide text-cream/45 md:flex-row md:justify-between md:px-8">
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
