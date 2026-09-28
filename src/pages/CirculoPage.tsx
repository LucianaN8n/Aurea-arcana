import React, { useState } from 'react';
import { Check, Sparkles, ShieldCheck, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { getProductBySlug } from '../data/products';
import { SeoHead } from '../components/SeoHead';
import { CheckoutItemConfig } from '../components/CheckoutModal';
import { trackEvent } from '../utils/analytics';

interface CirculoPageProps {
  onNavigate: (path: string) => void;
  onOpenCheckout: (config: CheckoutItemConfig) => void;
}

export const CirculoPage: React.FC<CirculoPageProps> = ({
  onOpenCheckout,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const sub = SITE_CONFIG.subscription;
  const orderBump = getProductBySlug('grimorio-da-prosperidade');

  const handleSubscribe = () => {
    trackEvent('begin_checkout', {
      item_id: 'sub-circulo-prosperidade',
      item_name: sub.name,
      item_category: 'subscription',
      price: sub.monthlyPrice,
    });

    onOpenCheckout({
      id: 'sub-circulo-prosperidade',
      type: 'subscription',
      title: 'CÍRCULO DA PROSPERIDADE — ASSINATURA MENSAL',
      subtitle: '1 ritual coletivo mensal + novo conteúdo digital + calendário esotérico',
      price: sub.monthlyPrice,
      checkoutUrl: sub.checkoutUrl,
      orderBumpProduct: orderBump,
    });
  };

  const faqs = [
    {
      question: 'Como funciona a participação no ritual coletivo mensal incluso na assinatura?',
      answer:
        'Todo mês, na Lua Nova, realizamos a cerimônia exclusiva de abertura de ciclo para os membros ativos do Círculo. Seu nome e suas intenções cadastradas no perfil de membro são automaticamente incluídos no altar central.',
    },
    {
      question: 'Posso cancelar minha assinatura quando desejar?',
      answer:
        'Sim. Não há fidelidade ou multa. Você pode gerenciar ou encerrar sua assinatura a qualquer momento com um clique.',
    },
    {
      question: 'O ritual mensal do Círculo substitui os grandes portais anuais como o Portal 10/10?',
      answer:
        'O ritual mensal do Círculo trabalha a manutenção contínua do ciclo lunar. Já os grandes eventos anuais (como o Portal 10/10) são operações extraordinárias independentes, nas quais membros do Círculo contam com condição prioritária.',
    },
  ];

  return (
    <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Círculo da Prosperidade — Assinatura Mensal de Estudos e Práticas"
        description="Um novo ciclo. Uma nova prática. Todos os meses. Faça parte do Círculo da Prosperidade por R$ 39,90/mês com ritual coletivo mensal e biblioteca exclusiva."
        canonicalPath="/circulo-da-prosperidade"
      />

      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="border border-[#D4AF37]/35 bg-[#0B0F19] p-8 sm:p-14 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Confraria Mensal de Estudos & Prática Continuada
          </p>

          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl sm:text-6xl font-semibold text-[#F4EFE6] leading-tight">
            {sub.headline}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-[#C8C2B8]">
            {sub.subheadline}
          </p>

          <div className="mt-8 inline-flex flex-col items-center border border-[#D4AF37]/30 bg-[#07080C] px-8 py-6">
            <span className="text-xs uppercase tracking-widest text-[#A6A29A]">
              Assinatura Mensal Inicial
            </span>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-mono-tabular text-4xl sm:text-5xl font-semibold text-[#D4AF37]">
                R$ 39,90
              </span>
              <span className="text-sm text-[#A6A29A]">/mês</span>
            </div>

            <button
              type="button"
              onClick={handleSubscribe}
              className="mt-6 inline-flex items-center gap-2 bg-[#D4AF37] px-10 py-4 text-xs font-semibold tracking-[0.15em] text-[#07080C] transition-colors hover:bg-[#E5C158] whitespace-nowrap"
            >
              <Sparkles className="h-4 w-4" />
              <span>ENTRAR PARA O CÍRCULO</span>
            </button>

            <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#8E8980]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
              Acesso imediato · Renovação mensal sem fidelidade
            </span>
          </div>
        </div>

        {/* 6 Pillars / Benefits */}
        <section className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              O Que Está Incluso Todos os Meses
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
              Os 6 Pilares do Círculo da Prosperidade
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sub.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="border border-[#D4AF37]/20 bg-[#0B0F19] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-[#D4AF37]">
                    0{idx + 1}. PILAR DO CÍRCULO
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-[#F4EFE6]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#A6A29A]">
                    {benefit.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D4AF37]/10 flex items-center gap-2 text-xs text-[#D4AF37]">
                  <Check className="h-3.5 w-3.5" />
                  <span>Incluso na assinatura de R$ 39,90/mês</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-[#F4EFE6] text-center">
            Perguntas Frequentes Sobre a Assinatura
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-[#D4AF37]/20 bg-[#0B0F19]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-medium text-[#F4EFE6]"
                  >
                    <span>{f.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#D4AF37] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#D4AF37]/12 px-5 py-4 text-xs sm:text-sm text-[#A6A29A]">
                      {f.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={handleSubscribe}
              className="inline-flex items-center gap-2 bg-[#D4AF37] px-10 py-4 text-xs font-semibold tracking-[0.15em] text-[#07080C] hover:bg-[#E5C158]"
            >
              <Sparkles className="h-4 w-4" />
              <span>ENTRAR PARA O CÍRCULO — R$ 39,90/MÊS</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
