import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Rituais', path: '/rituais' },
    { label: 'Biblioteca', path: '/biblioteca' },
    { label: 'Conhecimento', path: '/conhecimento' },
    { label: 'Sobre', path: '/sobre' },
  ];

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#D4AF37]/20 bg-[#07080C]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('/');
          }}
          className="font-display text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#F4EFE6] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
        >
          {SITE_CONFIG.brandName}
        </a>

        {/* Zone 2: 5 clean text navigation links */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#C8C2B8]"
          aria-label="Navegação Principal"
        >
          {navItems.map((item) => {
            const isActive =
              currentPath === item.path ||
              (item.path !== '/' && currentPath.startsWith(item.path));
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.path);
                }}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b ${
                  isActive
                    ? 'border-[#D4AF37] text-[#D4AF37]'
                    : 'border-transparent hover:border-[#D4AF37]/50 hover:text-[#F4EFE6]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNav('/rituais/portal-da-prosperidade-10-10')}
            className="hidden sm:inline-flex items-center border border-[#D4AF37] bg-[#D4AF37] px-4 py-2 text-xs font-semibold tracking-wider text-[#07080C] transition-colors hover:bg-[#E5C158] whitespace-nowrap shrink-0"
          >
            PORTAL 10/10
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center p-2 text-[#F4EFE6] hover:text-[#D4AF37]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D4AF37]/20 bg-[#0B0F19] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => handleNav(item.path)}
              className="block w-full text-left py-2.5 text-base font-medium text-[#F4EFE6] hover:text-[#D4AF37] border-b border-[#D4AF37]/10"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleNav('/rituais/portal-da-prosperidade-10-10')}
              className="w-full bg-[#D4AF37] py-3 text-center text-xs font-semibold tracking-wider text-[#07080C]"
            >
              PORTAL 10/10 — PRÓXIMO RITUAL
            </button>
            <button
              type="button"
              onClick={() => handleNav('/contato')}
              className="w-full border border-[#D4AF37]/40 py-2.5 text-center text-xs font-medium text-[#C8C2B8]"
            >
              Falar com a Chancelaria
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
