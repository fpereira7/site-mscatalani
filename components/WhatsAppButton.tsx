import { IconChat } from "@/components/Icons";
import { primaryCta } from "@/lib/site";

export function WhatsAppButton() {
  const cta = primaryCta();

  return (
    <a
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 bg-olive px-4 py-3 text-[0.72rem] font-medium tracking-[0.14em] text-cream uppercase shadow-[0_10px_30px_-8px_rgba(74,64,52,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-olive-deep md:right-8 md:bottom-8"
      aria-label={cta.label}
    >
      <IconChat className="size-5" />
      <span className="hidden sm:inline">{cta.shortLabel}</span>
    </a>
  );
}
