import React, { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  Check,
  ShieldAlert,
  Sparkles,
  ArrowLeft,
  ChevronDown,
  BookOpen,
} from 'lucide-react';
import { getRitualBySlug, isRitualExpired } from '../data/rituals';
import { getProductBySlug } from '../data/products';
import { SITE_CONFIG } from '../data/siteConfig';
import { CountdownTimer } from '../components/CountdownTimer';
import { SeoHead } from '../components/SeoHead';
import { CheckoutItemConfig } from '../components/CheckoutModal';
import { BuneSigil } from '../components/BuneSigil';
import { trackEvent } from '../utils/analytics';

interface RitualDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenCheckout: (config: CheckoutItemConfig) => void;
}

export const RitualDetailPage: React.FC<RitualDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenCheckout,
}) => {
  const ritual = getRitualBySlug(slug);
  const [expired, setExpired] = useState(() =>
    ritual ? Boolean(ritual.isPast || isRitualExpired(ritual.isoDate)) : false
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (ritual) {
      setExpired(Boolean(ritual.isPast || isRitualExpired(ritual.isoDate)));
      trackEvent('view_ritual', {
        item_id: ritual.id,
        item_name: ritual.name,
        item_category: ritual.category,
        price: ritual.price,
      });
    }
  }, [ritual]);

  if (!ritual) {
    return (
      <div className="mx-auto max-w-4xl py-24 px-4 text-center">
        <h1 className="font-display text-3xl text-[#F4EFE6]">Ritual não encontrado</h1>
        <button
          type="button"
          onClick={() => onNavigate('/rituais')}
          className="mt-6 border border-[#D4AF37] px-6 py-2.5 text-xs font-semibold text-[#D4AF37]"
        >
          Voltar ao Calendário de Rituais
        </button>
      </div>
    );
  }

  const orderBumpProduct = getProductBySlug(ritual.orderBumpProductSlug);
  const recommendedProduct = getProductBySlug(ritual.recommendedProductSlug);

  const handleParticipate = () => {
    if (expired) return;
    trackEvent('begin_checkout', {
      item_id: ritual.id,
      item_name: ritual.name,
      item_category: 'ritual',
      price: ritual.price,
    });
    onOpenCheckout({
      id: ritual.id,
      type: 'ritual',
      title: ritual.name,
      subtitle: `${ritual.dateDisplay} · ${ritual.timeDisplay}`,
      price: ritual.price,
      checkoutUrl: ritual.checkoutUrl,
      orderBumpProduct,
    });
  };

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: ritual.name,
    description: ritual.shortDescription,
    startDate: ritual.isoDate,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: expired
      ? 'https://schema.org/EventCompleted'
      : 'https://schema.org/EventScheduled',
    offers: {
      '@type': 'Offer',
      price: ritual.price.toFixed(2),
      priceCurrency: 'BRL',
      availability: expired
        ? 'https://schema.org/SoldOut'
        : 'https://schema.org/InStock',
      url: `${SITE_CONFIG.domain}/rituais/${ritual.slug}`,
    },
    organizer: {
      '@type': 'Organization',
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <div className="grimoire-grid pb-24">
      <SeoHead
        title={`${ritual.name} — Ritual Coletivo`}
        description={ritual.shortDescription}
        canonicalPath={`/rituais/${ritual.slug}`}
        jsonLd={eventJsonLd}
      />

      {/* Top Breadcrumb */}
      <div className="border-b border-[#D4AF37]/15 bg-[#07080C]/90">
        <div className="mx-auto max-w-7xl px-4 py-3.5 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#A6A29A]">
          <button
            type="button"
            onClick={() => onNavigate('/rituais')}
            className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Voltar ao Calendário de Rituais</span>
          </button>
          <span className="hidden sm:inline text-[#D4AF37]">{ritual.category}</span>
        </div>
      </div>

      {/* HERO / CONTIGUOUS REGISTRATION MODULE */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: Impactful Main Image + Status */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#D4AF37]/30 bg-[#101624] flex items-center justify-center">
              <img
                src={ritual.image}
                alt={ritual.imageAlt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-[#07080C]/35 to-transparent" />
              {ritual.id === 'ritual-10-10' && (
                <div className="relative z-10">
                  <BuneSigil className="h-40 w-40 sm:h-48 sm:w-48" showLabel />
                </div>
              )}
              <div className="absolute top-4 left-4 z-10 border border-[#D4AF37]/60 bg-[#07080C]/95 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#D4AF37]">
                {expired ? 'INSCRIÇÕES ENCERRADAS' : 'INSCRIÇÕES ABERTAS'}
              </div>
            </div>

            {/* Tradition & Symbolic Context Callout below image */}
            <div className="mt-6 border border-[#D4AF37]/20 bg-[#0B0F19] p-6">
              <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
                Linhagem & Contexto Simbólico
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#F4EFE6]">
                {ritual.traditionContext}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#A6A29A]">
                <strong className="text-[#C8C2B8]">Objetivo Simbólico:</strong>{' '}
                {ritual.symbolicObjective}
              </p>
            </div>
          </div>

          {/* Right: Sticky Registration & Countdown Box */}
          <div className="lg:col-span-5">
            <div className="border border-[#D4AF37]/35 bg-[#0B0F19] p-6 sm:p-8 lg:sticky lg:top-24">
              <div className="mb-3 flex items-center gap-2 text-xs text-[#D4AF37]">
                <span>{ritual.category}</span>
                <span aria-hidden="true">·</span>
                <span>{expired ? 'INSCRIÇÕES ENCERRADAS' : 'INSCRIÇÕES ABERTAS'}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6] leading-tight">
                {ritual.name}
              </h1>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#A6A29A]">
                {ritual.subtitle}
              </p>

              {/* Date & Time */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[#D4AF37]/20 py-4 text-xs">
                <div>
                  <span className="block text-[#A6A29A] uppercase tracking-wider">Data</span>
                  <span className="mt-1 inline-flex items-center gap-1.5 font-mono-tabular text-sm font-semibold text-[#F4EFE6]">
                    <Calendar className="h-4 w-4 text-[#D4AF37]" />
                    {ritual.dateDisplay}
                  </span>
                </div>
                <div>
                  <span className="block text-[#A6A29A] uppercase tracking-wider">Horário</span>
                  <span className="mt-1 inline-flex items-center gap-1.5 font-mono-tabular text-sm font-semibold text-[#F4EFE6]">
                    <Clock className="h-4 w-4 text-[#D4AF37]" />
                    {ritual.timeDisplay}
                  </span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="mt-6">
                <CountdownTimer
                  targetIsoDate={ritual.isoDate}
                  onExpire={() => setExpired(true)}
                />
              </div>

              {/* Price & Primary CTA */}
              <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#A6A29A]">
                    Inscrição Individual no Livro de Altar
                  </span>
                  <span className="font-mono-tabular text-3xl font-semibold text-[#D4AF37]">
                    R$ {ritual.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {ritual.registrationsNote && (
                  <p className="mt-2 text-xs text-[#C8C2B8]">{ritual.registrationsNote}</p>
                )}

                <button
                  type="button"
                  disabled={expired}
                  onClick={handleParticipate}
                  className={`mt-5 w-full flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-[0.15em] transition-colors whitespace-nowrap ${
                    expired
                      ? 'cursor-not-allowed border border-[#7A1C2E]/50 bg-[#1A1016] text-[#8E8980]'
                      : 'bg-[#D4AF37] text-[#07080C] hover:bg-[#E5C158]'
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>
                    {expired ? 'INSCRIÇÕES ENCERRADAS' : 'GARANTIR MINHA PARTICIPAÇÃO'}
                  </span>
                </button>

                {/* Discreet Mandatory Notice */}
                <p className="mt-4 text-[11px] leading-relaxed text-[#7E7A72]">
                  Aviso Ético: Práticas espirituais e ritualísticas pertencem ao campo da experiência pessoal e religiosa/espiritual e não existe garantia de resultados materiais ou financeiros específicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SECTIONS */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Explicação do Ritual */}
        <section className="border-t border-[#D4AF37]/20 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            01. Fundamento da Cerimônia
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#F4EFE6]">
            Explicação do Ritual
          </h2>
          <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-[#C8C2B8]">
            {ritual.fullExplanation.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 2. Contexto Histórico, Espiritual ou Simbólico */}
        <section className="border-t border-[#D4AF37]/20 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            02. Linhagem & Rigor Tradicional
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#F4EFE6]">
            Contexto Histórico, Espiritual e Simbólico
          </h2>
          <div className="mt-5 space-y-4 border-l-2 border-[#D4AF37]/50 pl-5 text-sm sm:text-base leading-relaxed text-[#C8C2B8]">
            {ritual.historicalAndSymbolicContext.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 3. Para Quem É & Objetivos da Experiência */}
        <section className="border-t border-[#D4AF37]/20 pt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border border-[#D4AF37]/20 bg-[#0B0F19] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">03. Perfil</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[#F4EFE6]">
              Para Quem É Este Ritual
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-[#C8C2B8]">
              {ritual.whoIsItFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#D4AF37]/20 bg-[#0B0F19] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">04. Propósitos</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[#F4EFE6]">
              Objetivos da Experiência
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-[#C8C2B8]">
              {ritual.experienceObjectives.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Como Funciona a Participação */}
        <section className="border-t border-[#D4AF37]/20 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            05. Passo a Passo Litúrgico
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#F4EFE6]">
            Como Funciona a Participação
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ritual.howParticipationWorks.map((stepObj, idx) => (
              <div key={idx} className="border border-[#D4AF37]/20 bg-[#0B0F19] p-6">
                <span className="font-mono-tabular text-xs font-semibold text-[#D4AF37]">
                  {stepObj.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#F4EFE6]">
                  {stepObj.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#A6A29A]">
                  {stepObj.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. O Que o Participante Precisa Fazer & O Que Acontece Após a Inscrição */}
        <section className="border-t border-[#D4AF37]/20 pt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#F4EFE6]">
              O Que o Participante Precisa Fazer
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#C8C2B8]">
              {ritual.whatParticipantNeedsToDo.map((item, idx) => (
                <li key={idx} className="border-l border-[#D4AF37]/40 pl-4 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#F4EFE6]">
              O Que Acontece Após a Inscrição
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#C8C2B8]">
              {ritual.whatHappensAfterRegistration.map((item, idx) => (
                <li key={idx} className="border-l border-[#D4AF37]/40 pl-4 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Perguntas Frequentes (FAQ) */}
        {ritual.faq.length > 0 && (
          <section className="border-t border-[#D4AF37]/20 pt-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Dúvidas Esclarecidas
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#F4EFE6]">
              Perguntas Frequentes Sobre Este Ritual
            </h2>
            <div className="mt-6 space-y-3">
              {ritual.faq.map((faqItem, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-[#D4AF37]/20 bg-[#0B0F19]">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm font-medium text-[#F4EFE6] hover:text-[#D4AF37]"
                    >
                      <span>{faqItem.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#D4AF37] transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-[#D4AF37]/12 px-5 py-4 text-xs sm:text-sm leading-relaxed text-[#A6A29A]">
                        {faqItem.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 7. Avisos Importantes */}
        <section className="border border-[#D4AF37]/30 bg-[#0B0F19] p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display text-xl font-semibold text-[#F4EFE6]">
                Avisos Importantes e Responsabilidade Espiritual
              </h2>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#A6A29A]">
                {ritual.importantNotices.map((notice, idx) => (
                  <li key={idx}>· {notice}</li>
                ))}
              </ul>
            </div>
          </div>

          {!expired && (
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="block text-xs text-[#A6A29A]">Valor da Inscrição Individual</span>
                <span className="font-mono-tabular text-2xl font-semibold text-[#D4AF37]">
                  R$ {ritual.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <button
                type="button"
                onClick={handleParticipate}
                className="w-full sm:w-auto bg-[#D4AF37] px-8 py-4 text-xs font-semibold tracking-[0.15em] text-[#07080C] hover:bg-[#E5C158] whitespace-nowrap"
              >
                GARANTIR MINHA PARTICIPAÇÃO
              </button>
            </div>
          )}
        </section>

        {/* 8. Recomendação Automática de Estudo Relacionado & Assinatura */}
        {recommendedProduct && (
          <section className="border-t border-[#D4AF37]/20 pt-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Leitura Complementar Recomendada
            </p>
            <div className="mt-4 border border-[#D4AF37]/25 bg-[#0B0F19] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <BookOpen className="h-4 w-4" />
                  <span>{recommendedProduct.category} · {recommendedProduct.pagesCount} páginas</span>
                </div>
                <h3 className="mt-1 font-display text-2xl font-semibold text-[#F4EFE6]">
                  {recommendedProduct.name}
                </h3>
                <p className="mt-1 text-xs text-[#A6A29A] max-w-xl">
                  {recommendedProduct.shortDescription}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate(`/biblioteca/${recommendedProduct.slug}`)}
                className="border border-[#D4AF37] px-5 py-3 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#07080C] whitespace-nowrap shrink-0"
              >
                CONHECER OBRA (R$ {recommendedProduct.price})
              </button>
            </div>
          </section>
        )}
      </div>

      {/* MOBILE FLOATING BUY BAR (Strict <= 15% mobile sticky cap compliance) */}
      {!expired && (
        <div className="fixed bottom-0 inset-x-0 z-30 md:hidden border-t border-[#D4AF37]/30 bg-[#07080C]/95 px-4 py-2.5 backdrop-blur-md flex items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-[#A6A29A] truncate max-w-[140px]">
              {ritual.name}
            </span>
            <span className="font-mono-tabular text-base font-semibold text-[#D4AF37]">
              R$ {ritual.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <button
            type="button"
            onClick={handleParticipate}
            className="bg-[#D4AF37] px-4 py-2.5 text-xs font-semibold tracking-wider text-[#07080C] whitespace-nowrap shrink-0"
          >
            GARANTIR PARTICIPAÇÃO
          </button>
        </div>
      )}
    </div>
  );
};
