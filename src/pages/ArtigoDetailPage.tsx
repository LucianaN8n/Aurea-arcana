import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Sparkles } from 'lucide-react';
import { getArticleBySlug } from '../data/articles';
import { getFeaturedRitual, getRitualBySlug, isRitualExpired } from '../data/rituals';
import { getProductBySlug, PRODUCTS_DATA } from '../data/products';
import { SITE_CONFIG } from '../data/siteConfig';
import { CountdownTimer } from '../components/CountdownTimer';
import { ProductCard } from '../components/ProductCard';
import { SeoHead } from '../components/SeoHead';
import { BuneSigil } from '../components/BuneSigil';
import { trackEvent } from '../utils/analytics';

interface ArtigoDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArtigoDetailPage: React.FC<ArtigoDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const article = getArticleBySlug(slug);
  const featuredRitual = getFeaturedRitual();
  const featuredExpired = isRitualExpired(featuredRitual.isoDate);

  useEffect(() => {
    if (article) {
      trackEvent('view_item', {
        item_id: article.id,
        item_name: article.title,
        item_category: `Artigo: ${article.category}`,
        funnel_stage: 'CONTEÚDO GRATUITO',
      });
    }
  }, [article]);

  if (!article) {
    return (
      <div className="mx-auto max-w-4xl py-24 px-4 text-center">
        <h1 className="font-display text-3xl text-[#F4EFE6]">Artigo não encontrado</h1>
        <button
          type="button"
          onClick={() => onNavigate('/conhecimento')}
          className="mt-6 border border-[#D4AF37] px-6 py-2.5 text-xs font-semibold text-[#D4AF37]"
        >
          Voltar ao Portal de Conhecimento
        </button>
      </div>
    );
  }

  const relatedProducts = article.relatedProductSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const recommendedLibraryProducts =
    relatedProducts.length >= 2 ? relatedProducts : PRODUCTS_DATA.slice(0, 3);

  const relatedRituals = article.relatedRitualSlugs
    .map((s) => getRitualBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.isoDate,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.brandName,
    },
  };

  return (
    <div className="grimoire-grid pb-20">
      <SeoHead
        title={article.title}
        description={article.metaDescription}
        canonicalPath={`/conhecimento/${article.slug}`}
        ogType="article"
        jsonLd={articleJsonLd}
      />

      {/* Top Bar */}
      <div className="border-b border-[#D4AF37]/15 bg-[#07080C]/90">
        <div className="mx-auto max-w-4xl px-4 py-3.5 sm:px-6 flex items-center justify-between text-xs text-[#A6A29A]">
          <button
            type="button"
            onClick={() => onNavigate('/conhecimento')}
            className="inline-flex items-center gap-2 hover:text-[#D4AF37]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Voltar ao Portal de Conhecimento</span>
          </button>
          <span className="text-[#D4AF37]">{article.category}</span>
        </div>
      </div>

      {/* Article Body */}
      <article className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4AF37]">
          <span>{article.category}</span>
          <span aria-hidden="true" className="text-[#A6A29A]">·</span>
          <span className="text-[#A6A29A]">{article.traditionBadge}</span>
          <span aria-hidden="true" className="text-[#A6A29A]">·</span>
          <span className="text-[#A6A29A]">{article.readTime}</span>
        </div>

        <h1 className="mt-3 font-display text-3xl sm:text-5xl font-semibold text-[#F4EFE6] leading-tight">
          {article.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 border-y border-[#D4AF37]/15 py-3 text-xs text-[#A6A29A]">
          <span>Por <strong className="text-[#F4EFE6]">{article.author}</strong></span>
          <span aria-hidden="true">·</span>
          <span>{article.authorRole}</span>
          <span aria-hidden="true">·</span>
          <span>{article.dateDisplay}</span>
        </div>

        <div className="my-8 aspect-[16/9] overflow-hidden border border-[#D4AF37]/25 bg-[#101624]">
          <img
            src={article.image}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-10 text-base leading-relaxed text-[#C8C2B8]">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F4EFE6]">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {sec.subheadings && (
                <div className="mt-4 space-y-4 border-l-2 border-[#D4AF37]/40 pl-5">
                  {sec.subheadings.map((sub, sIdx) => (
                    <div key={sIdx}>
                      <h3 className="font-display text-xl font-semibold text-[#D4AF37]">
                        {sub.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#A6A29A]">{sub.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Rituais Relacionados */}
        {relatedRituals.length > 0 && (
          <div className="mt-12 border border-[#D4AF37]/25 bg-[#0B0F19] p-6">
            <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
              Prática Coletiva Relacionada a Este Estudo
            </p>
            <div className="mt-3 space-y-3">
              {relatedRituals.map((rit) => (
                <div
                  key={rit.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#D4AF37]/12 pt-3"
                >
                  <div>
                    <h4 className="font-display text-lg font-semibold text-[#F4EFE6]">
                      {rit.name}
                    </h4>
                    <p className="text-xs text-[#A6A29A]">
                      {rit.dateDisplay} · R$ {rit.price.toFixed(2).replace('.', ',')}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/rituais/${rit.slug}`)}
                    className="border border-[#D4AF37]/50 px-4 py-2 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#07080C] whitespace-nowrap"
                  >
                    VER RITUAL
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* AUTOMATIC FOOTER SECTIONS MANDATED FOR ALL ARTICLES:
          1) PRÓXIMO RITUAL COLETIVO
          2) CONTEÚDOS RECOMENDADOS DA BIBLIOTECA */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-20 space-y-20">
        {/* 1. PRÓXIMO RITUAL COLETIVO */}
        <section className="border-t border-[#D4AF37]/25 pt-16">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              Agenda Ritualística Aberta
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-[#F4EFE6]">
              PRÓXIMO RITUAL COLETIVO
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#D4AF37]/35 bg-[#0B0F19]">
            <div className="lg:col-span-5 relative min-h-[260px] overflow-hidden bg-[#101624] flex items-center justify-center">
              <img
                src={featuredRitual.image}
                alt={featuredRitual.imageAlt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#07080C]/35 to-transparent" />
              {featuredRitual.id === 'ritual-10-10' && (
                <div className="relative z-10 my-4">
                  <BuneSigil className="h-32 w-32" showLabel />
                </div>
              )}
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#D4AF37]">{featuredRitual.traditionContext}</span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-[#F4EFE6]">
                  {featuredRitual.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#A6A29A]">
                  {featuredRitual.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#C8C2B8] font-mono-tabular">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                    {featuredRitual.dateDisplay}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
                    {featuredRitual.timeDisplay}
                  </span>
                </div>

                <div className="mt-5">
                  <CountdownTimer targetIsoDate={featuredRitual.isoDate} />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-mono-tabular text-2xl font-semibold text-[#F4EFE6]">
                  R$ {featuredRitual.price.toFixed(2).replace('.', ',')}
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate(`/rituais/${featuredRitual.slug}`)}
                  className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-6 py-3 text-xs font-semibold tracking-wider text-[#07080C] hover:bg-[#E5C158]"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{featuredExpired ? 'VER DETALHES' : 'QUERO PARTICIPAR'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CONTEÚDOS RECOMENDADOS DA BIBLIOTECA */}
        <section className="border-t border-[#D4AF37]/25 pt-16">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                Aprofundamento Técnico em PDF
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#F4EFE6]">
                CONTEÚDOS RECOMENDADOS DA BIBLIOTECA
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/biblioteca')}
              className="text-xs font-semibold text-[#D4AF37] hover:underline"
            >
              Ver toda a Biblioteca Digital →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedLibraryProducts.map((product) => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
