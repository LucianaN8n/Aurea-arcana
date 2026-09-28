import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Printer, BookOpen, List, Lock } from 'lucide-react';
import {
  EBOOK_MAGIAS_EXU_PAGES,
  EbookPageContent,
  isEbookUnlocked,
  lockEbook,
} from '../data/ebookMagiasExu';
import { EBOOK_GRIMORIO_PROSPERIDADE_PAGES } from '../data/ebookGrimorioProsperidade';

interface EbookReaderModalProps {
  ebookSlug: string | null;
  onClose: () => void;
}

export const EbookReaderModal: React.FC<EbookReaderModalProps> = ({ ebookSlug, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');

  useEffect(() => {
    setCurrentPage(1);
    setViewMode('single');
  }, [ebookSlug]);

  if (!ebookSlug) return null;

  const isGrimorio = ebookSlug === 'grimorio-da-prosperidade';
  const pages: EbookPageContent[] = isGrimorio
    ? EBOOK_GRIMORIO_PROSPERIDADE_PAGES
    : EBOOK_MAGIAS_EXU_PAGES;

  const ebookTitle = isGrimorio
    ? 'GRIMÓRIO DA PROSPERIDADE'
    : 'MAGIAS COM EXU';
  const ebookFooterTitle = isGrimorio
    ? 'Grimório da Prosperidade — Hermetismo • Magia Cerimonial • Simbologia Alquímica'
    : 'Magias com Exu — Guia de Estudo e Práticas Simbólicas';

  const unlocked = isEbookUnlocked(ebookSlug);

  if (!unlocked) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
      >
        <div className="max-w-md border border-[#D4AF37]/40 bg-[#0B0F19] p-8 text-center shadow-2xl">
          <Lock className="mx-auto h-12 w-12 text-[#D4AF37]" />
          <h2 className="mt-4 font-display text-2xl font-semibold text-[#F4EFE6]">
            PDF Bloqueado — Pagamento Necessário
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-[#A6A29A]">
            O conteúdo integral de <strong>{ebookTitle} ({pages.length} páginas)</strong> só é liberado após a realização do pagamento no checkout.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full bg-[#D4AF37] px-6 py-3 text-xs font-semibold tracking-wider text-[#07080C] hover:bg-[#E5C158]"
          >
            VOLTAR E REALIZAR O PAGAMENTO
          </button>
        </div>
      </div>
    );
  }

  const totalPages = pages.length;
  const activePageData =
    pages.find((p) => p.pageNumber === currentPage) || pages[0];

  const handlePrintOrSavePdf = () => {
    setViewMode('all');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const renderSigilSvg = (type: 'solar' | 'porta' | 'circulacao') => {
    if (type === 'solar') {
      // Sigilo Solar da Realização (Página 9 do PDF)
      return (
        <svg viewBox="0 0 160 160" className="h-36 w-36 shrink-0">
          <circle cx="80" cy="80" r="68" fill="none" stroke="#B89742" strokeWidth="2.8" />
          <circle cx="80" cy="80" r="24" fill="none" stroke="#5A1919" strokeWidth="2.8" />
          {/* 8 Solar Rays */}
          <line x1="80" y1="24" x2="80" y2="48" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="80" y1="112" x2="80" y2="136" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="24" y1="80" x2="48" y2="80" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="112" y1="80" x2="136" y2="80" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="42" y1="42" x2="58" y2="58" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="118" y1="42" x2="102" y2="58" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="42" y1="118" x2="58" y2="102" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="118" y1="118" x2="102" y2="102" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );
    }
    if (type === 'porta') {
      // Sigilo da Porta Próspera (Página 10 do PDF)
      return (
        <svg viewBox="0 0 160 160" className="h-36 w-36 shrink-0">
          <circle cx="80" cy="80" r="68" fill="none" stroke="#B89742" strokeWidth="2.8" />
          <path
            d="M 46 118 L 46 46 L 114 46 L 114 118"
            fill="none"
            stroke="#5A1919"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="80" y1="66" x2="80" y2="118" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );
    }
    // Sigilo da Circulação (Página 11 do PDF)
    return (
      <svg viewBox="0 0 160 160" className="h-36 w-36 shrink-0">
        <circle cx="80" cy="80" r="68" fill="none" stroke="#B89742" strokeWidth="2.8" />
        <circle cx="80" cy="80" r="38" fill="none" stroke="#5A1919" strokeWidth="2.8" />
        <line x1="80" y1="60" x2="80" y2="100" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="60" y1="80" x2="100" y2="80" stroke="#5A1919" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    );
  };

  const renderPageSheet = (page: EbookPageContent) => (
    <div
      key={page.pageNumber}
      className="mx-auto flex min-h-[680px] w-full max-w-2xl flex-col justify-between border border-[#D4AF37]/30 bg-[#FAF7F2] text-[#181512] shadow-2xl"
    >
      {/* Top Header Strip matching PDF */}
      <div className="bg-[#111822] px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#D4AF37]">
        AUREA ARCANA
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 py-10 sm:px-14 sm:py-12 flex flex-col justify-center">
        {page.isCover ? (
          <div className="my-auto py-16 text-center space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wider text-[#C69A2B]">
              {page.title}
            </h2>
            {page.subtitle && (
              <p className="text-sm sm:text-base text-[#5A534A] max-w-lg mx-auto">
                {page.subtitle}
              </p>
            )}
            <div className="pt-8 space-y-1.5">
              <p className="font-display text-2xl font-bold tracking-[0.18em] text-[#C69A2B]">
                {page.paragraphs?.[0] || 'AUREA ARCANA'}
              </p>
              <p className="text-xs uppercase tracking-widest text-[#7A7369]">
                {page.paragraphs?.[1] || 'Guia de estudo e práticas simbólicas'}
              </p>
            </div>
          </div>
        ) : (
          <div className="my-auto space-y-5">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#5C1A1B] border-b border-[#5C1A1B]/15 pb-2">
              {page.title}
            </h3>

            {page.paragraphs &&
              page.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base leading-relaxed text-[#24201C]">
                  {p}
                </p>
              ))}

            {page.bullets && (
              <ul className="space-y-2.5 pt-1">
                {page.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-[#24201C]"
                  >
                    <span className="mt-1 text-xs text-[#C69A2B]">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {page.afterBulletsParagraphs &&
              page.afterBulletsParagraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base leading-relaxed text-[#24201C] pt-1">
                  {p}
                </p>
              ))}

            {/* Bold Italic Prayers (Orações Herméticas) */}
            {page.italicStanzas && (
              <div className="space-y-4 pl-4 border-l-2 border-[#C69A2B]/50 py-1">
                {page.italicStanzas.map((stanza, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    {stanza.map((line, lIdx) => (
                      <p
                        key={lIdx}
                        className="text-sm sm:text-base font-bold italic leading-relaxed text-[#3D1515]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {page.afterStanzasParagraphs &&
              page.afterStanzasParagraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base leading-relaxed text-[#24201C] pt-1">
                  {p}
                </p>
              ))}

            {/* Sigil Box for Pages 9, 10, 11 */}
            {page.sigilBox && (
              <div className="border border-[#C69A2B]/60 bg-white p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
                {renderSigilSvg(page.sigilBox.type)}
                <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#24201C]">
                  <p>
                    <strong>Função simbólica:</strong> {page.sigilBox.funcao}
                  </p>
                  <p>
                    <strong>Uso:</strong> {page.sigilBox.uso}
                  </p>
                  <p>{page.sigilBox.instrucao}</p>
                </div>
              </div>
            )}

            {page.numberedSteps && (
              <div className="space-y-1.5 pt-1">
                {page.numberedSteps.map((stepText, idx) => {
                  const isSummaryPage = page.pageNumber === 3;
                  const targetPage = page.summaryTargetPages?.[idx] ?? idx + 4;
                  return isSummaryPage ? (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setViewMode('single');
                        setCurrentPage(targetPage);
                      }}
                      className="block w-full text-left py-1 px-2 text-sm text-[#24201C] hover:bg-[#C69A2B]/15 hover:text-[#5C1A1B] transition-colors rounded"
                    >
                      {stepText}
                    </button>
                  ) : (
                    <p
                      key={idx}
                      className="text-sm sm:text-base leading-relaxed text-[#24201C]"
                    >
                      {stepText}
                    </p>
                  );
                })}
              </div>
            )}

            {page.sections && (
              <div className="space-y-4 pt-2">
                {page.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-display text-xl font-bold text-[#C69A2B]">
                      {sec.heading}
                    </h4>
                    {sec.body &&
                      sec.body.map((bText, bIdx) => (
                        <p
                          key={bIdx}
                          className="text-sm sm:text-base leading-relaxed text-[#24201C]"
                        >
                          {bText}
                        </p>
                      ))}
                    {sec.bullets && (
                      <ul className="space-y-2 pl-2">
                        {sec.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-[#24201C]"
                          >
                            <span className="mt-1 text-xs text-[#C69A2B]">◆</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Worksheet Table for Page 30 */}
            {page.worksheetTable && (
              <div className="border border-[#C69A2B]/70 overflow-hidden mt-2">
                {page.worksheetTable.map((rowLabel, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 border-b last:border-b-0 border-[#C69A2B]/30 min-h-[42px]"
                  >
                    <div className="col-span-5 bg-[#F2EBDC] px-3.5 py-2.5 flex items-center text-[11px] font-bold uppercase tracking-wider text-[#24201C] border-r border-[#C69A2B]/30">
                      {rowLabel}
                    </div>
                    <div className="col-span-7 bg-white px-3.5 py-2.5" />
                  </div>
                ))}
              </div>
            )}

            {page.afterSectionsParagraphs &&
              page.afterSectionsParagraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-sm sm:text-base leading-relaxed text-[#24201C] pt-1 ${
                    page.pageNumber === 30 ? 'font-bold text-[#3D1515]' : ''
                  }`}
                >
                  {p}
                </p>
              ))}

            {page.highlightQuote && (
              <div className="mt-4 border-l-4 border-[#5C1A1B] bg-[#5C1A1B]/5 p-4 font-bold text-sm sm:text-base text-[#5C1A1B]">
                {page.highlightQuote}
              </div>
            )}

            {page.hasJournalSpace && (
              <div className="mt-6 h-56 rounded border border-dashed border-[#C69A2B]/40 bg-white/60 p-4 text-xs text-[#8E867B]">
                Espaço reservado para escrita e registro pessoal do ciclo lunar...
              </div>
            )}

            {page.footerNote && (
              <div className="pt-6 text-center text-xs font-semibold text-[#5C554C]">
                {page.footerNote}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Page Number Footer matching PDF */}
      <div className="flex items-center justify-between border-t border-black/10 px-8 py-3 text-xs text-[#6E675F]">
        <span>{ebookFooterTitle}</span>
        <span className="font-mono-tabular font-semibold">
          {page.pageNumber} / {totalPages}
        </span>
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-md overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label={`Leitor do E-book ${ebookTitle}`}
    >
      {/* Top Reader Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/30 bg-[#07080C] px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-[#D4AF37]" />
          <div>
            <h2 className="font-display text-lg font-semibold text-[#F4EFE6]">
              {ebookTitle} — PDF Completo Liberado ({totalPages} Páginas)
            </h2>
            <p className="text-[11px] text-[#A6A29A]">
              Edição oficial Aurea Arcana · Acesso desbloqueado após pagamento
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => {
              setViewMode('single');
              setCurrentPage(3);
            }}
            className="inline-flex items-center gap-1.5 border border-[#D4AF37]/30 bg-[#0B0F19] px-3 py-1.5 text-xs text-[#F4EFE6] hover:border-[#D4AF37]"
          >
            <List className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>Sumário</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'single' ? 'all' : 'single')}
            className="border border-[#D4AF37]/30 bg-[#0B0F19] px-3 py-1.5 text-xs text-[#F4EFE6] hover:border-[#D4AF37]"
          >
            {viewMode === 'single'
              ? `Ver Todas as ${totalPages} Páginas`
              : 'Modo Página por Página'}
          </button>

          <button
            type="button"
            onClick={handlePrintOrSavePdf}
            className="inline-flex items-center gap-1.5 bg-[#D4AF37] px-3.5 py-1.5 text-xs font-semibold text-[#07080C] hover:bg-[#E5C158]"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Salvar PDF / Imprimir</span>
          </button>

          <button
            type="button"
            onClick={() => {
              lockEbook(ebookSlug);
              onClose();
            }}
            className="inline-flex items-center gap-1 border border-[#E57373]/40 bg-[#1A1016] px-2.5 py-1.5 text-[11px] text-[#E57373] hover:border-[#E57373]"
            title="Bloquear novamente para testar como visitante sem pagamento"
          >
            <Lock className="h-3 w-3" />
            <span className="hidden md:inline">Bloquear Acesso</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#A6A29A] hover:text-[#F4EFE6]"
            aria-label="Fechar leitor"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Reader Viewport */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
        {viewMode === 'single'
          ? renderPageSheet(activePageData)
          : pages.map((page) => renderPageSheet(page))}
      </div>

      {/* Bottom Pagination Bar for Single Page Mode */}
      {viewMode === 'single' && (
        <div className="border-t border-[#D4AF37]/30 bg-[#07080C] px-4 py-3 flex items-center justify-between max-w-2xl mx-auto w-full">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="inline-flex items-center gap-1.5 border border-[#D4AF37]/40 px-4 py-2 text-xs font-semibold text-[#F4EFE6] disabled:opacity-30 hover:bg-[#D4AF37] hover:text-[#07080C] transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Página Anterior</span>
          </button>

          <div className="flex items-center gap-1.5 font-mono-tabular text-xs text-[#D4AF37]">
            <span>Página</span>
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="border border-[#D4AF37]/40 bg-[#0B0F19] px-2 py-1 text-xs text-[#F4EFE6] focus:outline-none"
              aria-label="Selecionar página"
            >
              {pages.map((p) => (
                <option key={p.pageNumber} value={p.pageNumber}>
                  {p.pageNumber} — {p.title.slice(0, 28)}
                </option>
              ))}
            </select>
            <span>de {totalPages}</span>
          </div>

          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="inline-flex items-center gap-1.5 border border-[#D4AF37]/40 px-4 py-2 text-xs font-semibold text-[#F4EFE6] disabled:opacity-30 hover:bg-[#D4AF37] hover:text-[#07080C] transition-colors"
          >
            <span>Próxima Página</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};
