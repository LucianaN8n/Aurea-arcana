import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const linkClass =
    'text-xs text-[#A6A29A] hover:text-[#D4AF37] transition-colors cursor-pointer text-left';

  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#050609] pt-16 pb-24 sm:pb-16 text-[#A6A29A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <span className="font-display text-2xl font-bold tracking-[0.18em] text-[#F4EFE6]">
              {SITE_CONFIG.brandName}
            </span>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-[#A6A29A]">
              {SITE_CONFIG.brandTagline}. Estudos sérios, grimórios digitais, sabedoria botânica e rituais coletivos conduzidos com rigor histórico, estética e respeito à identidade de cada tradição.
            </p>
            <p className="mt-4 text-xs text-[#8E8980]">
              Contato:{' '}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="text-[#D4AF37] hover:underline"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </p>
          </div>

          {/* Portal Links */}
          <div>
            <h3 className="font-display text-base font-semibold tracking-wider text-[#F4EFE6]">
              Navegação do Portal
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button type="button" onClick={() => onNavigate('/')} className={linkClass}>
                  Início
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/rituais')} className={linkClass}>
                  Calendário de Rituais
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/biblioteca')} className={linkClass}>
                  Biblioteca Digital
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/conhecimento')}
                  className={linkClass}
                >
                  Portal de Conhecimento
                </button>
              </li>
            </ul>
          </div>

          {/* Destaques */}
          <div>
            <h3 className="font-display text-base font-semibold tracking-wider text-[#F4EFE6]">
              Obras & Rituais
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/rituais/portal-da-prosperidade-10-10')}
                  className={linkClass}
                >
                  Portal 10/10 — Prosperidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/biblioteca/magias-de-prosperidade-com-exu')}
                  className={linkClass}
                >
                  Magias de Prosperidade com Exu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/biblioteca/grimorio-da-prosperidade')}
                  className={linkClass}
                >
                  Grimório da Prosperidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/biblioteca/biblioteca-secreta-da-prosperidade')}
                  className={linkClass}
                >
                  Biblioteca Secreta Completa
                </button>
              </li>
            </ul>
          </div>

          {/* Institucional & Legal */}
          <div>
            <h3 className="font-display text-base font-semibold tracking-wider text-[#F4EFE6]">
              Institucional & Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button type="button" onClick={() => onNavigate('/sobre')} className={linkClass}>
                  Sobre a Marca & Princípios
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/faq')} className={linkClass}>
                  Perguntas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/contato')} className={linkClass}>
                  Contato & Chancelaria
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/politica-de-privacidade')}
                  className={linkClass}
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/termos-de-uso')}
                  className={linkClass}
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/aviso-legal')}
                  className={linkClass}
                >
                  Aviso Legal e Ético
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/admin-config')}
                  className="text-xs text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                >
                  Gestão do Catálogo & Analytics
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Ethical & Legal Notice */}
        <div className="mt-12 border-t border-[#D4AF37]/15 pt-8 text-[11px] leading-relaxed text-[#7E7A72] space-y-2">
          <p>{SITE_CONFIG.traditionSeparationNotice}</p>
          <p>{SITE_CONFIG.legalDisclaimer}</p>
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[#6E6A63]">
            <span>
              © {new Date().getFullYear()} {SITE_CONFIG.brandName}. Todos os direitos reservados.
            </span>
            <span>Brasil · Tradição, Simbologia & Conhecimento</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
