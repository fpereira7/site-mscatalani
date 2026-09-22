import { IconArrow, IconInstagram } from "@/components/Icons";
import { instagramPosts, site } from "@/lib/site";

export function Instagram() {
  return (
    <section id="instagram" className="bg-nude-soft px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Conteúdo</p>
            <h2 className="mt-4 font-serif text-4xl text-olive-deep md:text-5xl">
              O que já publicamos sobre contabilidade
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              Temas que o perfil trata no Instagram — MEI, IR, senha GOV e
              desenquadramento — reunidos aqui em formato editorial.
            </p>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.16em] text-olive-deep uppercase transition hover:text-olive"
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
                className="group flex h-full flex-col bg-offwhite p-6 shadow-[0_18px_36px_-30px_rgba(74,64,52,0.5)] transition duration-300 hover:-translate-y-1"
              >
                <span className="relative flex aspect-square items-center justify-center bg-nude">
                  <svg
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                    className="absolute inset-[10%] transition duration-500 group-hover:rotate-12"
                  >
                    <defs>
                      <linearGradient id={`ring-${post.kicker}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#A8794E" />
                        <stop offset="0.6" stopColor="#916940" />
                        <stop offset="1" stopColor="#C29C79" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 78 18 A 44 44 0 1 0 86 28"
                      fill="none"
                      stroke={`url(#ring-${post.kicker})`}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="relative font-serif text-3xl text-olive-deep">
                    {post.kicker}
                  </span>
                </span>
                <h3 className="mt-5 font-serif text-xl leading-snug text-olive-deep">
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
