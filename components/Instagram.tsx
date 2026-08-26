import { IconArrow, IconInstagram } from "@/components/Icons";
import { instagramPosts, site } from "@/lib/site";

export function Instagram() {
  return (
    <section id="instagram" className="bg-offwhite px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Conteúdo</p>
            <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
              O que já publicamos sobre contabilidade
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              Temas que o perfil trata no Instagram — MEI, abertura, fiscal e
              regime tributário — reunidos aqui em formato editorial.
            </p>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.16em] text-navy uppercase transition hover:text-gold"
          >
            <IconInstagram />
            {site.instagramHandle}
            <IconArrow />
          </a>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {instagramPosts.map((post) => (
            <li key={post.title}>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-gold/30 bg-cream p-6 transition duration-300 hover:-translate-y-1 hover:border-gold"
              >
                <span className="flex aspect-square items-end border border-gold/25 bg-navy p-5">
                  <span className="font-serif text-3xl leading-none text-gold">
                    {post.kicker}
                  </span>
                </span>
                <p className="eyebrow mt-5">{post.kicker}</p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-navy group-hover:text-navy-deep">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {post.body}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
