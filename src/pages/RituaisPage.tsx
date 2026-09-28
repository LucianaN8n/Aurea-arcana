import React, { useState } from 'react';
import { RITUALS_DATA, RITUAL_CATEGORIES, RitualCategory, isRitualExpired } from '../data/rituals';
import { RitualCard } from '../components/RitualCard';
import { SeoHead } from '../components/SeoHead';
import { SITE_CONFIG } from '../data/siteConfig';

interface RituaisPageProps {
  onNavigate: (path: string) => void;
}

export const RituaisPage: React.FC<RituaisPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'TODOS' | RitualCategory>('TODOS');

  const upcomingRituals = RITUALS_DATA.filter((r) => !r.isPast && !isRitualExpired(r.isoDate));
  const pastRituals = RITUALS_DATA.filter((r) => r.isPast || isRitualExpired(r.isoDate));

  const filteredUpcoming =
    selectedCategory === 'TODOS'
      ? upcomingRituals
      : upcomingRituals.filter((r) => r.category === selectedCategory);

  return (
    <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Calendário de Rituais Coletivos — Prosperidade, Abertura de Caminhos e Proteção"
        description="Conheça o calendário de rituais coletivos da Aurea Arcana: Portal 10/10, Firmeza das Sete Encruzilhadas com Exu, Escudo de Proteção e Magia Planetária."
        canonicalPath="/rituais"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
            Agenda Litúrgica & Operações Coletivas
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-[#F4EFE6]">
            CALENDÁRIO DE RITUAIS
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A6A29A]">
            Cerimônias coletivas conduzidas em datas de convergência astronômica, horas planetárias eleitas e dias tradicionais de fundamento. Cada rito explicita com transparência sua tradição de origem, seus objetivos simbólicos e seu protocolo de participação.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#D4AF37]/20 pb-6">
          <button
            type="button"
            onClick={() => setSelectedCategory('TODOS')}
            className={`px-4 py-2 text-xs font-medium tracking-wider transition-colors whitespace-nowrap ${
              selectedCategory === 'TODOS'
                ? 'bg-[#D4AF37] text-[#07080C] font-semibold'
                : 'border border-[#D4AF37]/25 bg-[#0B0F19] text-[#C8C2B8] hover:border-[#D4AF37]'
            }`}
          >
            TODOS ({upcomingRituals.length})
          </button>

          {RITUAL_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-medium tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-[#D4AF37] text-[#07080C] font-semibold'
                  : 'border border-[#D4AF37]/25 bg-[#0B0F19] text-[#C8C2B8] hover:border-[#D4AF37]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Upcoming Rituals Grid */}
        <div className="mt-10">
          {filteredUpcoming.length === 0 ? (
            <div className="border border-[#D4AF37]/20 bg-[#0B0F19] p-12 text-center">
              <p className="font-display text-2xl text-[#F4EFE6]">
                Nenhum ritual aberto nesta categoria específica no momento.
              </p>
              <p className="mt-2 text-xs text-[#A6A29A]">
                Selecione "TODOS" para visualizar as cerimônias com inscrições abertas.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('TODOS')}
                className="mt-5 border border-[#D4AF37] px-5 py-2.5 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#07080C]"
              >
                MOSTRAR TODOS OS RITUAIS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredUpcoming.map((ritual) => (
                <RitualCard key={ritual.id} ritual={ritual} onNavigate={onNavigate} />
              ))}
            </div>
          )}
        </div>

        {/* RITUAIS REALIZADOS (Historical Archive) */}
        <div className="mt-24 border-t border-[#D4AF37]/20 pt-16">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[#A6A29A]">
              Memória Litúrgica & Histórico do Templo
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
              RITUAIS REALIZADOS
            </h2>
            <p className="mt-2 text-sm text-[#A6A29A]">
              Registro das operações coletivas anteriormente celebradas pela Aurea Arcana, cujas atas e orientações já foram entregues aos respectivos participantes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 opacity-85">
            {pastRituals.map((ritual) => (
              <RitualCard key={ritual.id} ritual={ritual} onNavigate={onNavigate} />
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-16 border border-[#D4AF37]/15 bg-[#0B0F19] p-6 text-xs text-[#8E8980]">
          {SITE_CONFIG.legalDisclaimer}
        </div>
      </div>
    </div>
  );
};
