import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/siteConfig';
import { trackEvent } from '../utils/analytics';

export const WhatsAppFloatingButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackEvent('click_whatsapp', {
      source: 'floating_whatsapp_button',
    });
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      aria-label="Falar pelo WhatsApp sobre os próximos rituais"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 inline-flex items-center gap-2.5 border border-[#D4AF37]/60 bg-[#0B0F19]/95 px-4 py-3 text-xs font-semibold tracking-wider text-[#F4EFE6] shadow-[0_8px_24px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#101624]"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1F6E43] text-white">
        <MessageCircle className="h-3.5 w-3.5" />
      </span>
      <span className="hidden sm:inline whitespace-nowrap">ATENDIMENTO WHATSAPP</span>
    </a>
  );
};
