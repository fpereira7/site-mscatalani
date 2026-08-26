import type { ReactNode } from "react";
import { primaryCta } from "@/lib/site";

type CtaLinkProps = {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "light";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "solid",
  className = "",
}: CtaLinkProps) {
  const cta = primaryCta();
  const target = href ?? cta.href;
  const external = target.startsWith("http");

  const styles = {
    solid:
      "bg-gold text-navy-deep hover:-translate-y-px hover:bg-gold-soft shadow-[0_1px_0_rgba(14,28,47,0.12)]",
    ghost:
      "border border-gold/45 text-cream hover:border-gold hover:bg-gold/10",
    light:
      "border border-navy/15 bg-offwhite text-navy hover:border-gold hover:text-navy",
  }[variant];

  return (
    <a
      href={target}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.8rem] font-medium tracking-[0.14em] uppercase transition duration-300 ${styles} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
