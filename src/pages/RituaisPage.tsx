import React from 'react';
import { Sparkles, CheckCircle2, Lock } from 'lucide-react';
import { RITUALS_DATA, isRitualExpired } from '../data/rituals';
import { RitualCard } from '../components/RitualCard';
import { SeoHead } from '../components/SeoHead';
import { SITE_CONFIG } from '../data/siteConfig';

interface RituaisPageProps {
  onNavigate: (path: string) => void;
}

export const RituaisPage: React.FC<RituaisPageProps> = ({ onNavigate }) => {
  const activeRituals = RITUALS_DATA.filter(
    (ritual) => !ritual.isPast && !isRitualExpired(ritual.isoDate)
  );
  const pastRituals = RITUALS_DATA.filter(
    (ritual) => ritual.isPast || isRitualExpired(ritual.isoDate)
  );

  return (
    <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Calendário de Rituais — Portal 10/10 com o Duque Bune & Histórico Litúrgico"
        description="Participe da Operação Cerimonial Salomônica com o Duque Bune no Portal 10/10 às 10:10 da manhã e consulte o acervo de rituais coletivos já realizados pela Aurea Arcana."
        canonicalPath="/rituais"
      />

      <div className="mx-auto max-w-7xl">
        {/* 1. ACTIVE RITUAL SECTION (BUNE 10/10) */}
        <section>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Convocação Litúrgica com Inscrições Abertas · Portal 10/10 às 10:10</span>
            </div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-[#F4EFE6]">
              PRÓXIMO RITUAL COLETIVO
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A6A29A]">
              Cerimônia coletiva conduzida na convergência do Portal 10/10 às 10:10 da manhã, consagrada ao Grande Duque Bune (26º Espírito do Lemegeton / Ars Goetia) para abertura de caminhos financeiros, eloquência e prosperidade.
            </p>
          </div>

          <div className="mt-10 max-w-xl">
            {activeRituals.map((ritual) => (
              <RitualCard key={ritual.id} ritual={ritual} onNavigate={onNavigate} />
            ))}
          </div>
        </section>

        {/* 2. PAST / COMPLETED RITUALS SECTION */}
        {pastRituals.length > 0 && (
          <section className="mt-20 border-t border-[#D4AF37]/20 pt-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#A6A29A]">
                <Lock className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>Histórico Litúrgico do Templo · Atas Encerradas</span>
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#F4EFE6]">
                RITUAIS REALIZADOS & INSCRIÇÕES ENCERRADAS
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#A6A29A]">
                Registro das operações cerimoniais e firmezas coletivas já concluídas pela Aurea Arcana. As inscrições para estas datas encontram-se encerradas e seus respectivos Cadernos de Altar já foram consagrados.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pastRituals.map((ritual) => (
                <div key={ritual.id} className="opacity-90">
                  <RitualCard ritual={ritual} onNavigate={onNavigate} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Legal Notice */}
        <div className="mt-16 border border-[#D4AF37]/15 bg-[#0B0F19] p-6 text-xs text-[#8E8980]">
          {SITE_CONFIG.legalDisclaimer}
        </div>
      </div>
    </div>
  );
};
