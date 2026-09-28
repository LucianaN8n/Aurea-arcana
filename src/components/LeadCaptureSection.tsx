import React, { useState } from 'react';
import { CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export interface CapturedLead {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  createdAt: string;
}

export const LeadCaptureSection: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (name.trim().length < 2) {
      setError('Por favor, informe seu nome completo.');
      return;
    }
    if (whatsapp.replace(/\D/g, '').length < 10) {
      setError('Por favor, informe um número de WhatsApp válido com DDD.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Por favor, informe um endereço de e-mail válido.');
      return;
    }

    const newLead: CapturedLead = {
      id: `lead-${Date.now()}`,
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      createdAt: new Date().toLocaleString('pt-BR'),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('aurea_arcana_leads') || '[]');
      localStorage.setItem('aurea_arcana_leads', JSON.stringify([newLead, ...existing]));
    } catch {
      // Ignore storage quota issues
    }

    trackEvent('generate_lead', {
      item_name: 'Calendário da Prosperidade 2026',
      funnel_stage: 'CONTEÚDO GRATUITO',
      source: 'lead_capture_section',
    });

    setSubmitted(true);
  };

  return (
    <section
      id="captura-calendario"
      className="relative border-y border-[#D4AF37]/20 bg-gradient-to-b from-[#0B0F19] via-[#101624] to-[#07080C] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl border border-[#D4AF37]/30 bg-[#07080C]/90 p-8 sm:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37]">
              <Calendar className="h-4 w-4" />
              <span>Estudo Sazonal & Ciclos Celestes · Acesso Gratuito</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
              RECEBA O CALENDÁRIO DA PROSPERIDADE
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A6A29A]">
              Receba gratuitamente em seu e-mail e WhatsApp o nosso mapeamento mensal com as fases lunares de semeadura e colheita, as horas planetárias de Júpiter e do Sol, os dias propícios para banhos de abertura de caminhos e os avisos antecipados das próximas cerimônias coletivas.
            </p>

            <div className="mt-6 space-y-2 text-xs text-[#C8C2B8]">
              <p>· Tabelas mensais das Luas Nova, Crescente, Cheia e Minguante</p>
              <p>· Indicação semanal de ervas e defumações para o lar e negócios</p>
              <p>· Prioridade de aviso na abertura dos cadernos litúrgicos</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            {submitted ? (
              <div className="border border-[#D4AF37]/40 bg-[#0B0F19] p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[#D4AF37]" />
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#F4EFE6]">
                  Inscrição Confirmada
                </h3>
                <p className="mt-2 text-sm text-[#A6A29A]">
                  Enviamos a edição vigente do <strong className="text-[#F4EFE6]">Calendário da Prosperidade</strong> para <span className="text-[#D4AF37]">{email}</span>.
                </p>
                <p className="mt-4 text-xs text-[#8E8980]">
                  Próximo passo recomendado: conheça o Guia Completo da Pemba ou o Guia de Banhos em nossa Biblioteca Digital.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setWhatsapp('');
                    setEmail('');
                  }}
                  className="mt-5 text-xs underline text-[#D4AF37] hover:text-[#F4EFE6]"
                >
                  Cadastrar outro contato
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1.5"
                  >
                    Nome
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full border border-[#D4AF37]/25 bg-[#0B0F19] px-4 py-3 text-sm text-[#F4EFE6] placeholder-[#6E6A63] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-whatsapp"
                    className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1.5"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="lead-whatsapp"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full border border-[#D4AF37]/25 bg-[#0B0F19] px-4 py-3 text-sm text-[#F4EFE6] placeholder-[#6E6A63] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-email"
                    className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1.5"
                  >
                    E-mail
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@dominio.com.br"
                    className="w-full border border-[#D4AF37]/25 bg-[#0B0F19] px-4 py-3 text-sm text-[#F4EFE6] placeholder-[#6E6A63] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-[#E57373]" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold tracking-wider text-[#07080C] transition-colors hover:bg-[#E5C158] whitespace-nowrap"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>QUERO RECEBER GRATUITAMENTE</span>
                </button>

                <p className="text-[11px] text-center text-[#8E8980]">
                  Seus dados estão protegidos. Zero spam. Estrutura pronta para integração via Webhook/CRM.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
