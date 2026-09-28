import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import {
  ARTICLES_DATA,
  ARTICLE_CATEGORIES,
  ArticleCategory,
} from '../data/articles';
import { SeoHead } from '../components/SeoHead';
import { LeadCaptureSection } from '../components/LeadCaptureSection';

interface ConhecimentoPageProps {
  onNavigate: (path: string) => void;
}

export const ConhecimentoPage: React.FC<ConhecimentoPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | ArticleCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesCategory =
      selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grimoire-grid">
      <SeoHead
        title="Portal de Conhecimento — Estudos sobre Prosperidade, Exu, Pemba, Magia e Daemons"
        description="Artigos aprofundados sobre ocultismo, magia planetária, significado da pemba, Exu e prosperidade, ervas para banhos e história dos grimórios."
        canonicalPath="/conhecimento"
      />

      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              Enciclopédia & Ensaios Aurea Arcana
            </p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-[#F4EFE6]">
              PORTAL DE CONHECIMENTO
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A6A29A]">
              Estudos fundamentados que respeitam o contexto histórico de cada tradição: da sabedoria afro-brasileira sobre Exu, pemba e ervas até o hermetismo clássico, grimórios e magia planetária.
            </p>
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A6A29A]" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar artigo ou tradição..."
              className="w-full border border-[#D4AF37]/30 bg-[#0B0F19] pl-10 pr-4 py-2.5 text-xs text-[#F4EFE6] placeholder-[#6E6A63] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#D4AF37]/20 pb-6">
          <button
            type="button"
            onClick={() => setSelectedCategory('Todos')}
            className={`px-3.5 py-2 text-xs font-medium tracking-wider transition-colors whitespace-nowrap ${
              selectedCategory === 'Todos'
                ? 'bg-[#D4AF37] text-[#07080C] font-semibold'
                : 'border border-[#D4AF37]/25 bg-[#0B0F19] text-[#C8C2B8] hover:border-[#D4AF37]'
            }`}
          >
            Todos ({ARTICLES_DATA.length})
          </button>

          {ARTICLE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 text-xs font-medium tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-[#07080C] font-semibold'
                  : 'border border-[#D4AF37]/25 bg-[#0B0F19] text-[#C8C2B8] hover:border-[#D4AF37]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between border border-[#D4AF37]/18 bg-[#0B0F19]"
            >
              <div>
                <div className="aspect-[16/9] overflow-hidden bg-[#101624]">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  {/* Unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                    <span>{article.category}</span>
                    <span aria-hidden="true" className="text-[#A6A29A]">·</span>
                    <span className="text-[#A6A29A]">{article.dateDisplay}</span>
                    <span aria-hidden="true" className="text-[#A6A29A]">·</span>
                    <span className="text-[#A6A29A]">{article.readTime}</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-[#F4EFE6] group-hover:text-[#D4AF37] transition-colors">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/conhecimento/${article.slug}`)}
                      className="text-left"
                    >
                      {article.title}
                    </button>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#A6A29A]">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#D4AF37]/12 px-6 py-4 flex items-center justify-between text-xs">
                <span className="text-[#8E8980]">{article.traditionBadge}</span>
                <button
                  type="button"
                  onClick={() => onNavigate(`/conhecimento/${article.slug}`)}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#D4AF37] hover:underline whitespace-nowrap"
                >
                  <span>Ler Estudo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <LeadCaptureSection />
    </div>
  );
};
