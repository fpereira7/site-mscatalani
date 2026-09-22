import { trustItems } from "@/lib/site";

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="relative z-10 -mt-8 px-5 md:-mt-10 md:px-8">
      <div className="mx-auto grid max-w-6xl border border-olive/10 bg-offwhite shadow-[0_20px_40px_-28px_rgba(74,64,52,0.35)] md:grid-cols-4">
        {trustItems.map((item, index) => (
          <article
            key={item.title}
            className={`px-6 py-7 md:px-7 ${index > 0 ? "border-t border-olive/10 md:border-t-0 md:border-l" : ""}`}
          >
            <p className="eyebrow">{item.label}</p>
            <h2 className="mt-3 font-serif text-xl text-olive-deep">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
