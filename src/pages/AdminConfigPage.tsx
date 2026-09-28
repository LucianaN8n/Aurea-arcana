import React, { useEffect, useState } from 'react';
import { RITUALS_DATA } from '../data/rituals';
import { PRODUCTS_DATA } from '../data/products';
import { ARTICLES_DATA } from '../data/articles';
import { SITE_CONFIG } from '../data/siteConfig';
import { getAnalyticsHistory, subscribeAnalytics, LoggedAnalyticsEvent } from '../utils/analytics';
import { CapturedLead } from '../components/LeadCaptureSection';
import { SeoHead } from '../components/SeoHead';

interface AdminConfigPageProps {
  onNavigate: (path: string) => void;
}

export const AdminConfigPage: React.FC<AdminConfigPageProps> = ({ onNavigate }) => {
  const [events, setEvents] = useState<LoggedAnalyticsEvent[]>(() => getAnalyticsHistory());
  const [leads, setLeads] = useState<CapturedLead[]>([]);

  useEffect(() => {
    const unsub = subscribeAnalytics(() => {
      setEvents(getAnalyticsHistory());
    });
    try {
      const saved = JSON.parse(localStorage.getItem('aurea_arcana_leads') || '[]');
      setLeads(saved);
    } catch {
      setLeads([]);
    }
    return unsub;
  }, []);

  return (
    <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Painel de Administração & Configuração Centralizada"
        description="Visualização centralizada de rituais, produtos digitais, links de checkout, leads capturados e eventos de Analytics."
        canonicalPath="/admin-config"
      />

      <div className="mx-auto max-w-7xl space-y-12">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
            Arquitetura Centralizada de Dados & Tagueamento
          </p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
            ADMINISTRAÇÃO, CHECKOUT LINKS & ANALYTICS
          </h1>
          <p className="mt-2 text-sm text-[#A6A29A] max-w-3xl">
            Conforme solicitado no escopo técnico, todos os rituais, produtos digitais (PDFs), artigos, preços, datas e links externos de checkout estão centralizados em <code className="text-[#D4AF37]">/src/data/rituals.ts</code>, <code className="text-[#D4AF37]">/src/data/products.ts</code>, <code className="text-[#D4AF37]">/src/data/articles.ts</code> e <code className="text-[#D4AF37]">/src/data/siteConfig.ts</code>.
          </p>
        </div>

        {/* 1. Rituais e Links de Checkout */}
        <section className="border border-[#D4AF37]/25 bg-[#0B0F19] p-6">
          <h2 className="font-display text-2xl font-semibold text-[#F4EFE6]">
            1. Rituais Cadastrados ({RITUALS_DATA.length})
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#D4AF37]/20 text-[#D4AF37]">
                  <th className="py-2.5 pr-4">Nome do Ritual</th>
                  <th className="py-2.5 px-4">Data / ISO</th>
                  <th className="py-2.5 px-4">Preço</th>
                  <th className="py-2.5 px-4">Link Externo de Checkout Configurado</th>
                  <th className="py-2.5 pl-4">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4AF37]/10 text-[#C8C2B8]">
                {RITUALS_DATA.map((r) => (
                  <tr key={r.id}>
                    <td className="py-3 pr-4 font-medium text-[#F4EFE6]">{r.name}</td>
                    <td className="py-3 px-4 font-mono-tabular">{r.dateDisplay}</td>
                    <td className="py-3 px-4 font-mono-tabular">R$ {r.price}</td>
                    <td className="py-3 px-4 font-mono-tabular text-[#A6A29A]">{r.checkoutUrl}</td>
                    <td className="py-3 pl-4">
                      <button
                        type="button"
                        onClick={() => onNavigate(`/rituais/${r.slug}`)}
                        className="text-[#D4AF37] hover:underline"
                      >
                        Abrir Página →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. Produtos Digitais (Biblioteca) */}
        <section className="border border-[#D4AF37]/25 bg-[#0B0F19] p-6">
          <h2 className="font-display text-2xl font-semibold text-[#F4EFE6]">
            2. Produtos Digitais da Biblioteca ({PRODUCTS_DATA.length})
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#D4AF37]/20 text-[#D4AF37]">
                  <th className="py-2.5 pr-4">Obra Digital (PDF)</th>
                  <th className="py-2.5 px-4">Categoria</th>
                  <th className="py-2.5 px-4">Preço</th>
                  <th className="py-2.5 px-4">Link Externo de Checkout Configurado</th>
                  <th className="py-2.5 pl-4">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4AF37]/10 text-[#C8C2B8]">
                {PRODUCTS_DATA.map((p) => (
                  <tr key={p.id}>
                    <td className="py-3 pr-4 font-medium text-[#F4EFE6]">{p.name}</td>
                    <td className="py-3 px-4">{p.category}</td>
                    <td className="py-3 px-4 font-mono-tabular">R$ {p.price}</td>
                    <td className="py-3 px-4 font-mono-tabular text-[#A6A29A]">{p.checkoutUrl}</td>
                    <td className="py-3 pl-4">
                      <button
                        type="button"
                        onClick={() => onNavigate(`/biblioteca/${p.slug}`)}
                        className="text-[#D4AF37] hover:underline"
                      >
                        Abrir Página →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Analytics Events & Leads */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section className="border border-[#D4AF37]/25 bg-[#0B0F19] p-6">
            <h2 className="font-display text-2xl font-semibold text-[#F4EFE6]">
              3. Monitor de Eventos (GA4 / GTM / Meta Pixel)
            </h2>
            <p className="mt-1 text-xs text-[#A6A29A]">
              IDs Configurados: GA4 ({SITE_CONFIG.analytics.ga4MeasurementId}) · GTM ({SITE_CONFIG.analytics.gtmContainerId}) · Meta Pixel ({SITE_CONFIG.analytics.metaPixelId})
            </p>
            <div className="mt-4 max-h-64 overflow-y-auto space-y-2 border-t border-[#D4AF37]/15 pt-3">
              {events.length === 0 ? (
                <p className="text-xs text-[#8E8980]">
                  Navegue pelas páginas de produtos ou rituais para ver os eventos disparados em tempo real.
                </p>
              ) : (
                events.map((ev) => (
                  <div
                    key={ev.id}
                    className="border border-[#D4AF37]/15 bg-[#07080C] p-3 text-xs font-mono-tabular"
                  >
                    <div className="flex items-center justify-between text-[#D4AF37]">
                      <strong>{ev.event}</strong>
                      <span className="text-[#8E8980]">{ev.timestamp}</span>
                    </div>
                    <div className="mt-1 text-[11px] text-[#A6A29A] truncate">
                      {JSON.stringify(ev.payload)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="border border-[#D4AF37]/25 bg-[#0B0F19] p-6">
            <h2 className="font-display text-2xl font-semibold text-[#F4EFE6]">
              4. Leads Capturados ("Calendário da Prosperidade") ({leads.length})
            </h2>
            <p className="mt-1 text-xs text-[#A6A29A]">
              Artigos publicados no Portal de Conhecimento: {ARTICLES_DATA.length} artigos SEO-friendly.
            </p>
            <div className="mt-4 max-h-64 overflow-y-auto space-y-2 border-t border-[#D4AF37]/15 pt-3">
              {leads.length === 0 ? (
                <p className="text-xs text-[#8E8980]">
                  Nenhum lead cadastrado nesta sessão ainda. Teste o formulário na Home!
                </p>
              ) : (
                leads.map((l) => (
                  <div key={l.id} className="border border-[#D4AF37]/15 bg-[#07080C] p-3 text-xs">
                    <div className="font-medium text-[#F4EFE6]">{l.name}</div>
                    <div className="text-[#A6A29A] font-mono-tabular">
                      {l.whatsapp} · {l.email} · {l.createdAt}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
