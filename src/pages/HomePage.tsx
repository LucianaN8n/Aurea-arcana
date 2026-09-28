import React from 'react';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, Shield, Lock } from 'lucide-react';
import { getFeaturedRitual, isRitualExpired, RITUALS_DATA } from '../data/rituals';
import { PRODUCTS_DATA } from '../data/products';
import { ARTICLES_DATA } from '../data/articles';
import { SITE_CONFIG } from '../data/siteConfig';
import { CountdownTimer } from '../components/CountdownTimer';
import { ProductCard } from '../components/ProductCard';
import { RitualCard } from '../components/RitualCard';
import { SeoHead } from '../components/SeoHead';
import { BuneSigil } from '../components/BuneSigil';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredRitual = getFeaturedRitual();
  const featuredExpired = isRitualExpired(featuredRitual.isoDate);
  const pastRituals = RITUALS_DATA.filter((r) => r.isPast);
  const featuredProducts = PRODUCTS_DATA.slice(0, 4);
  const recentArticles = ARTICLES_DATA.slice(0, 3);

  return (
    <div className="grimoire-grid">
      <SeoHead
        title="Desperte os Caminhos da Prosperidade — Rituais, Grimórios e Simbologia"
        description="Conhecimento, simbolismo e práticas ancestrais para quem deseja explorar os mistérios da prosperidade, abertura de caminhos, poder pessoal e transformação."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#D4AF37]/20 py-20 sm:py-28 lg:py-32">
        {/* Background visual with measured luxury contrast scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={featuredRitual.image}
            alt="Santuário esotérico com grimório antigo encadernado em couro e ouro sob luz de velas"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-[#07080C]/80 to-[#07080C]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Tradição Escrita · Simbologia Sagrada · Experiência Ritualística
            </p>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#F4EFE6] leading-[1.08]">
              DESPERTE OS CAMINHOS DA PROSPERIDADE
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#C8C2B8]">
              Conhecimento, simbolismo e práticas ancestrais para quem deseja explorar os mistérios da prosperidade, do poder pessoal e da transformação.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/rituais')}
                className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] px-8 py-4 text-xs font-semibold tracking-[0.15em] text-[#07080C] transition-colors hover:bg-[#E5C158] whitespace-nowrap"
              >
                <span>EXPLORAR RITUAIS</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/biblioteca')}
                className="inline-flex items-center justify-center gap-3 border border-[#D4AF37]/50 bg-[#0B0F19]/80 px-8 py-4 text-xs font-semibold tracking-[0.15em] text-[#F4EFE6] transition-colors hover:border-[#D4AF37] hover:bg-[#101624] whitespace-nowrap"
              >
                <BookOpen className="h-4 w-4 text-[#D4AF37]" />
                <span>CONHECER A BIBLIOTECA</span>
              </button>
            </div>

            {/* Quiet structural pillar distinction */}
            <div className="mt-12 border-t border-[#D4AF37]/20 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#A6A29A]">
              <div>
                <strong className="block font-medium text-[#F4EFE6]">Rigor Tradicional</strong>
                <span>Distinção histórica entre matrizes afro-brasileiras e ocultismo europeu</span>
              </div>
              <div>
                <strong className="block font-medium text-[#F4EFE6]">Acervo Editorial Próprio</strong>
                <span>Grimórios, tratados de ervas, magia planetária e estudos da pemba</span>
              </div>
              <div>
                <strong className="block font-medium text-[#F4EFE6]">Rituais Coletivos</strong>
                <span>Cerimônias em datas de convergência simbólica com registro nominal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRÓXIMO RITUAL COLETIVO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/15">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                Convocação Litúrgica Principal
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
                PRÓXIMO RITUAL COLETIVO
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/rituais')}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#D4AF37] hover:underline whitespace-nowrap"
            >
              <span>Ver calendário completo de rituais</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#D4AF37]/30 bg-[#0B0F19]">
            {/* Image Column */}
            <div className="relative lg:col-span-6 min-h-[340px] sm:min-h-[440px] overflow-hidden bg-[#101624] flex items-center justify-center">
              <img
                src={featuredRitual.image}
                alt={featuredRitual.imageAlt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#07080C]/40 to-transparent lg:bg-gradient-to-r lg:from-[#07080C]/35 lg:to-[#0B0F19]" />
              {featuredRitual.id === 'ritual-10-10' && (
                <div className="relative z-10 my-8">
                  <BuneSigil className="h-36 w-36 sm:h-44 sm:w-44" showLabel />
                </div>
              )}
              <div className="absolute top-4 left-4 z-10 border border-[#D4AF37]/50 bg-[#07080C]/90 px-3.5 py-1.5 text-xs font-medium tracking-wider text-[#D4AF37]">
                {featuredExpired ? 'INSCRIÇÕES ENCERRADAS' : 'INSCRIÇÕES ABERTAS'}
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#A6A29A] mb-2">
                  <span>{featuredRitual.traditionContext}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-semibold text-[#F4EFE6]">
                  {featuredRitual.name}
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#C8C2B8]">
                  {featuredRitual.shortDescription}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[#D4AF37]/15 py-4 text-xs">
                  <div>
                    <span className="block text-[#A6A29A] uppercase tracking-wider">Data da Cerimônia</span>
                    <span className="mt-1 inline-flex items-center gap-1.5 font-mono-tabular text-sm font-medium text-[#F4EFE6]">
                      <Calendar className="h-4 w-4 text-[#D4AF37]" />
                      {featuredRitual.dateDisplay}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[#A6A29A] uppercase tracking-wider">Horário</span>
                    <span className="mt-1 inline-flex items-center gap-1.5 font-mono-tabular text-sm font-medium text-[#F4EFE6]">
                      <Clock className="h-4 w-4 text-[#D4AF37]" />
                      {featuredRitual.timeDisplay}
                    </span>
                  </div>
                </div>

                {featuredRitual.registrationsNote && (
                  <p className="mt-3 text-xs text-[#D4AF37]/90">
                    Nota Litúrgica: {featuredRitual.registrationsNote}
                  </p>
                )}

                {/* Real-time Countdown */}
                <div className="mt-6">
                  <CountdownTimer targetIsoDate={featuredRitual.isoDate} />
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#A6A29A]">
                    Valor de Participação Individual
                  </span>
                  <span className="font-mono-tabular text-3xl font-semibold text-[#F4EFE6]">
                    R$ {featuredRitual.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate(`/rituais/${featuredRitual.slug}`)}
                  className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-8 py-4 text-xs font-semibold tracking-[0.15em] text-[#07080C] transition-colors hover:bg-[#E5C158] whitespace-nowrap"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{featuredExpired ? 'VER DETALHES DO RITO' : 'QUERO PARTICIPAR'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Rituais Realizados & Inscrições Encerradas */}
          {pastRituals.length > 0 && (
            <div className="mt-16 border-t border-[#D4AF37]/15 pt-12">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#A6A29A]">
                    <Lock className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>Histórico Litúrgico do Templo</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold text-[#F4EFE6]">
                    RITUAIS REALIZADOS & INSCRIÇÕES ENCERRADAS
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('/rituais')}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#D4AF37] hover:underline whitespace-nowrap"
                >
                  <span>Ver histórico completo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {pastRituals.map((ritual) => (
                  <div key={ritual.id} className="opacity-90">
                    <RitualCard ritual={ritual} onNavigate={onNavigate} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. BIBLIOTECA DIGITAL SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/15">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                Obras de Referência & Grimórios Digitais
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
                BIBLIOTECA DIGITAL AUREA ARCANA
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[#A6A29A]">
                Manuais técnicos, tratados de simbologia da pemba, firmezas tradicionais com Exu, alquimia das ervas, magia planetária e estudos históricos sobre daemons.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/biblioteca')}
              className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-5 py-2.5 text-xs font-semibold tracking-wider text-[#F4EFE6] hover:border-[#D4AF37] hover:text-[#D4AF37] whitespace-nowrap shrink-0"
            >
              <span>ACESSAR TODAS AS OBRAS</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. JORNADA / FUNIL COMERCIAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/15 bg-[#090C14]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              Arquitetura de Estudo e Prática
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
              A JORNADA DENTRO DO PORTAL
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A6A29A]">
              Estruturamos nosso ecossistema para acompanhar você desde o primeiro estudo gratuito até os tratados completos e rituais coletivos.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {SITE_CONFIG.funnelSteps.map((step, index) => (
              <div
                key={step.stage}
                className="flex flex-col justify-between border border-[#D4AF37]/20 bg-[#07080C] p-6"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-medium text-[#D4AF37]">
                    0{index + 1}. {step.stage}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-[#F4EFE6]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#A6A29A]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/12">
                  <span className="block font-mono-tabular text-xs text-[#C8C2B8] mb-3">
                    {step.priceLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate(step.targetUrl)}
                    className="w-full border border-[#D4AF37]/40 py-2 px-3 text-xs font-medium text-[#F4EFE6] hover:bg-[#D4AF37] hover:text-[#07080C] transition-colors whitespace-nowrap truncate"
                  >
                    {step.ctaLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTAL DE CONHECIMENTO (ARTIGOS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                Ensaios & Pesquisa Esotérica
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
                PORTAL DE CONHECIMENTO
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/conhecimento')}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#D4AF37] hover:underline whitespace-nowrap"
            >
              <span>Ler todos os artigos e estudos</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {recentArticles.map((article) => (
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
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                      <span>{article.category}</span>
                      <span aria-hidden="true" className="text-[#A6A29A]">·</span>
                      <span className="text-[#A6A29A]">{article.readTime}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-xl font-semibold text-[#F4EFE6] group-hover:text-[#D4AF37] transition-colors">
                      <button
                        type="button"
                        onClick={() => onNavigate(`/conhecimento/${article.slug}`)}
                        className="text-left"
                      >
                        {article.title}
                      </button>
                    </h3>

                    <p className="mt-2.5 text-xs leading-relaxed text-[#A6A29A] line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#D4AF37]/12 px-6 py-4 flex items-center justify-between text-xs">
                  <span className="text-[#8E8980]">{article.traditionBadge}</span>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/conhecimento/${article.slug}`)}
                    className="font-semibold text-[#D4AF37] hover:underline whitespace-nowrap"
                  >
                    Ler Artigo →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Ethical Distinction Banner */}
          <div className="mt-14 border border-[#D4AF37]/20 bg-[#0B0F19] p-6 sm:p-8 flex items-start gap-4">
            <Shield className="h-6 w-6 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed text-[#A6A29A]">
              <strong className="block text-sm font-semibold text-[#F4EFE6] mb-1">
                Compromisso com a Integridade de Cada Tradição
              </strong>
              {SITE_CONFIG.traditionSeparationNotice}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
