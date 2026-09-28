import React, { useEffect, useState } from 'react';
import {
  Check,
  ArrowLeft,
  Sparkles,
  FileText,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Lock,
  BookOpen,
  Unlock,
} from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { getRitualBySlug } from '../data/rituals';
import { isEbookUnlocked, lockEbook, EBOOK_MAGIAS_EXU_PAGES } from '../data/ebookMagiasExu';
import { EBOOK_GRIMORIO_PROSPERIDADE_PAGES } from '../data/ebookGrimorioProsperidade';
import { SITE_CONFIG } from '../data/siteConfig';
import { BookCover3D } from '../components/BookCover3D';
import { SeoHead } from '../components/SeoHead';
import { CheckoutItemConfig } from '../components/CheckoutModal';
import { trackEvent } from '../utils/analytics';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenCheckout: (config: CheckoutItemConfig) => void;
  onOpenEbook: (ebookSlug: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenCheckout,
  onOpenEbook,
}) => {
  const product = getProductBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ebookUnlocked, setEbookUnlocked] = useState<boolean>(() =>
    product ? isEbookUnlocked(product.slug) : false
  );

  useEffect(() => {
    if (product) {
      setEbookUnlocked(isEbookUnlocked(product.slug));
      trackEvent('view_item', {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        funnel_stage: product.funnelStage,
      });
    }

    const handleUnlockEvent = () => {
      if (product) {
        setEbookUnlocked(isEbookUnlocked(product.slug));
      }
    };
    window.addEventListener('ebook-unlocked', handleUnlockEvent);
    return () => window.removeEventListener('ebook-unlocked', handleUnlockEvent);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl py-24 px-4 text-center">
        <h1 className="font-display text-3xl text-[#F4EFE6]">Obra digital não encontrada</h1>
        <button
          type="button"
          onClick={() => onNavigate('/biblioteca')}
          className="mt-6 border border-[#D4AF37] px-6 py-2.5 text-xs font-semibold text-[#D4AF37]"
        >
          Voltar à Biblioteca Digital
        </button>
      </div>
    );
  }

  const upsellProduct = getProductBySlug(product.upsellProductSlug);
  const recommendedRitual = getRitualBySlug(product.nextRecommendedRitualSlug);
  const ebookPages =
    product.slug === 'grimorio-da-prosperidade'
      ? EBOOK_GRIMORIO_PROSPERIDADE_PAGES
      : EBOOK_MAGIAS_EXU_PAGES;

  const handleBuyNow = () => {
    trackEvent('begin_checkout', {
      item_id: product.id,
      item_name: product.name,
      item_category: product.category,
      price: product.price,
    });

    onOpenCheckout({
      id: product.id,
      slug: product.slug,
      type: 'product',
      title: product.name,
      subtitle: `${product.formatLabel} · ${product.traditionLineage}`,
      originalPrice: product.originalPrice,
      price: product.price,
      hasEmbeddedEbook: product.hasEmbeddedEbook,
      checkoutUrl: product.checkoutUrl,
      orderBumpProduct:
        upsellProduct && upsellProduct.id !== product.id ? upsellProduct : undefined,
    });
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.price.toFixed(2),
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: `${SITE_CONFIG.domain}/biblioteca/${product.slug}`,
    },
  };

  return (
    <div className="grimoire-grid pb-24">
      <SeoHead
        title={`${product.name} — Biblioteca Digital`}
        description={product.shortDescription}
        canonicalPath={`/biblioteca/${product.slug}`}
        ogType="product"
        jsonLd={productJsonLd}
      />

      {/* Breadcrumb */}
      <div className="border-b border-[#D4AF37]/15 bg-[#07080C]/90">
        <div className="mx-auto max-w-7xl px-4 py-3.5 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#A6A29A]">
          <button
            type="button"
            onClick={() => onNavigate('/biblioteca')}
            className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Voltar à Biblioteca Digital</span>
          </button>
          <span className="text-[#D4AF37]">
            {product.category} · {product.pagesCount} páginas
          </span>
        </div>
      </div>

      {/* HERO / CONTIGUOUS PURCHASE MODULE */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: 3D Cover Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center border border-[#D4AF37]/20 bg-gradient-to-b from-[#101624] to-[#0B0F19] py-12 px-6">
            <BookCover3D product={product} size="lg" />
            <p className="mt-6 text-center text-xs text-[#A6A29A]">
              {product.formatLabel}
            </p>
          </div>

          {/* Right: Headline, Price & Primary CTA */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>{product.traditionLineage}</span>
            </div>

            <h1 className="mt-2 font-display text-3xl sm:text-5xl font-semibold text-[#F4EFE6] leading-tight">
              {product.name}
            </h1>

            <p className="mt-3 font-display text-xl sm:text-2xl italic text-[#D4AF37]/90">
              {product.headline}
            </p>

            <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-[#C8C2B8]">
              {product.fullDescription.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Contiguous Purchase Box */}
            <div className="mt-8 border border-[#D4AF37]/35 bg-[#0B0F19] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#A6A29A]">
                    Investimento Único · Acesso Vitalício
                  </span>
                  {product.originalPrice && (
                    <span className="mt-1 block font-mono-tabular text-sm text-[#A6A29A] line-through">
                      De R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                  <span className="font-mono-tabular text-3xl sm:text-4xl font-semibold text-[#D4AF37]">
                    {product.originalPrice ? 'por ' : ''}R${' '}
                    {product.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {product.hasEmbeddedEbook && ebookUnlocked ? (
                  <button
                    type="button"
                    onClick={() => onOpenEbook(product.slug)}
                    className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-8 py-4 text-xs font-semibold tracking-[0.15em] text-[#07080C] transition-colors hover:bg-[#E5C158] whitespace-nowrap"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>LER PDF LIBERADO ({ebookPages.length} PÁGINAS)</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-8 py-4 text-xs font-semibold tracking-[0.15em] text-[#07080C] transition-colors hover:bg-[#E5C158] whitespace-nowrap"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>QUERO ACESSAR AGORA</span>
                  </button>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-[#D4AF37]/15 flex flex-wrap items-center gap-6 text-xs text-[#A6A29A]">
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-[#D4AF37]" />
                  E-book em PDF ({product.pagesCount} páginas)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                  {product.hasEmbeddedEbook
                    ? 'E-book liberado na tela e por e-mail logo após o pagamento'
                    : 'Entrega Digital Imediata por E-mail'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY DETAILS */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* E-book Access Module (Shown for products with embedded PDF) */}
        {product.hasEmbeddedEbook && (
          <section className="border border-[#D4AF37]/40 bg-[#0B0F19] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D4AF37]/20 pb-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  {ebookUnlocked ? (
                    <>
                      <Unlock className="h-4 w-4" />
                      <span>PDF Liberado · Acesso Desbloqueado</span>
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4" />
                      <span>Conteúdo Digital Integrado · Liberado Após o Pagamento</span>
                    </>
                  )}
                </div>
                <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold text-[#F4EFE6]">
                  PDF: {product.name} ({ebookPages.length} Páginas)
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#A6A29A]">
                  {product.headline}
                </p>
              </div>

              {ebookUnlocked ? (
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenEbook(product.slug)}
                    className="inline-flex items-center gap-2 bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold tracking-wider text-[#07080C] hover:bg-[#E5C158] whitespace-nowrap shrink-0"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>ABRIR PDF COMPLETO ({ebookPages.length} PÁGS.)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => lockEbook(product.slug)}
                    className="inline-flex items-center gap-1.5 border border-[#E57373]/40 bg-[#1A1016] px-3 py-3.5 text-xs text-[#E57373] hover:border-[#E57373]"
                    title="Bloquear PDF novamente"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    <span>Bloquear</span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="inline-flex items-center gap-2 border border-[#D4AF37] bg-[#D4AF37]/15 px-6 py-3.5 text-xs font-semibold tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#07080C] transition-colors whitespace-nowrap shrink-0"
                >
                  <Lock className="h-3.5 w-3.5" />
                  <span>PAGAR R$ {product.price.toFixed(2).replace('.', ',')} PARA LIBERAR</span>
                </button>
              )}
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {ebookPages.map((p) => (
                <div
                  key={p.pageNumber}
                  onClick={() => {
                    if (ebookUnlocked) {
                      onOpenEbook(product.slug);
                    } else {
                      handleBuyNow();
                    }
                  }}
                  className="cursor-pointer border border-[#D4AF37]/15 bg-[#07080C] p-3.5 transition-colors hover:border-[#D4AF37]/50"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#D4AF37]">
                    <span>PÁGINA {String(p.pageNumber).padStart(2, '0')}</span>
                    {ebookUnlocked ? (
                      <span className="text-[#81C784]">LIBERADA</span>
                    ) : (
                      <Lock className="h-3 w-3 text-[#8E8980]" />
                    )}
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#F4EFE6] line-clamp-1">
                    {p.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
        {/* Benefícios */}
        <section className="border-t border-[#D4AF37]/20 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            01. Domínio Teórico e Prático
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#F4EFE6]">
            Benefícios Desta Obra
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {product.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 border border-[#D4AF37]/20 bg-[#0B0F19] p-5 text-sm text-[#C8C2B8]"
              >
                <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sumário / Conteúdo */}
        <section className="border-t border-[#D4AF37]/20 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            02. Estrutura Interna do Tratado
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#F4EFE6]">
            Sumário e Conteúdo Programático
          </h2>
          <div className="mt-6 space-y-4">
            {product.tableOfContents.map((item, idx) => (
              <div key={idx} className="border border-[#D4AF37]/20 bg-[#0B0F19] p-6">
                <span className="font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  {item.chapter}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-[#F4EFE6]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#A6A29A]">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para Quem É & O Que Você Recebe */}
        <section className="border-t border-[#D4AF37]/20 pt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border border-[#D4AF37]/20 bg-[#0B0F19] p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#F4EFE6]">
              Para Quem É Este Material
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#C8C2B8]">
              {product.whoIsItFor.map((who, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
                  <span>{who}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#D4AF37]/20 bg-[#0B0F19] p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#F4EFE6]">
              O Que Você Recebe Imediatamente
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#C8C2B8]">
              {product.whatYouReceive.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Perguntas Frequentes */}
        <section className="border-t border-[#D4AF37]/20 pt-12">
          <h2 className="font-display text-3xl font-semibold text-[#F4EFE6]">
            Perguntas Frequentes
          </h2>
          <div className="mt-6 space-y-3">
            {product.faq.map((faqItem, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-[#D4AF37]/20 bg-[#0B0F19]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-medium text-[#F4EFE6]"
                  >
                    <span>{faqItem.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#D4AF37] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#D4AF37]/12 px-5 py-4 text-xs sm:text-sm text-[#A6A29A]">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final Conversion Block */}
        <section className="border border-[#D4AF37]/40 bg-[#0B0F19] p-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-[#F4EFE6]">
            Adicione {product.name} ao Seu Acervo Hoje
          </h2>
          <p className="mt-2 text-sm text-[#A6A29A]">
            Acesso imediato por R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
          <button
            type="button"
            onClick={handleBuyNow}
            className="mt-6 inline-flex items-center gap-2 bg-[#D4AF37] px-10 py-4 text-xs font-semibold tracking-[0.15em] text-[#07080C] hover:bg-[#E5C158]"
          >
            <Sparkles className="h-4 w-4" />
            <span>QUERO ACESSAR AGORA</span>
          </button>
        </section>

        {/* Automatic Funnel Next-Offer Recommendation */}
        {recommendedRitual && (
          <section className="border-t border-[#D4AF37]/20 pt-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              Próximo Passo Recomendado na Jornada
            </p>
            <div className="mt-4 border border-[#D4AF37]/25 bg-[#0B0F19] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <Calendar className="h-4 w-4" />
                  <span>Ritual Coletivo Relacionado · {recommendedRitual.dateDisplay}</span>
                </div>
                <h3 className="mt-1 font-display text-2xl font-semibold text-[#F4EFE6]">
                  {recommendedRitual.name}
                </h3>
                <p className="mt-1 text-xs text-[#A6A29A] max-w-xl">
                  {recommendedRitual.shortDescription}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate(`/rituais/${recommendedRitual.slug}`)}
                className="border border-[#D4AF37] px-5 py-3 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#07080C] whitespace-nowrap shrink-0"
              >
                CONHECER RITUAL
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
