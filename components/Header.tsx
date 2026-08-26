"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import { Wordmark } from "@/components/Wordmark";
import { nav, primaryCta } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cta = primaryCta();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? "border-b border-gold/20 bg-navy/95 backdrop-blur-md"
          : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy-deep"
      >
        Ir para o conteúdo
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#topo" aria-label="MS Catalani — início">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] font-medium tracking-[0.16em] text-cream/75 uppercase transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaLink className="!px-5 !py-2.5">{cta.shortLabel}</CtaLink>
        </div>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center text-cream lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`absolute h-px w-5 bg-current transition ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-gold/20 bg-navy px-5 py-8 lg:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-serif text-2xl text-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <CtaLink className="w-full">{cta.label}</CtaLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
