import type { ReactNode } from "react";
import { primaryCta } from "@/lib/site";

type CtaLinkProps = {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
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
      "bg-olive text-cream hover:-translate-y-px hover:bg-olive-deep shadow-[0_8px_24px_-12px_rgba(74,64,52,0.55)]",
    ghost:
      "border border-olive/35 text-olive-deep hover:border-olive hover:bg-olive/5",
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
