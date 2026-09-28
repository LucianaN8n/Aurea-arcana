import React, { useState } from 'react';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { RitualItem, isRitualExpired } from '../data/rituals';
import { BuneSigil } from './BuneSigil';

interface RitualCardProps {
  ritual: RitualItem;
  onNavigate: (path: string) => void;
}

export const RitualCard: React.FC<RitualCardProps> = ({ ritual, onNavigate }) => {
  const [imgError, setImgError] = useState(false);
  const expired = ritual.isPast || isRitualExpired(ritual.isoDate);

  return (
    <article className="group flex flex-col justify-between border border-[#D4AF37]/18 bg-[#0B0F19] transition-transform duration-200 hover:-translate-y-0.5">
      <div>
        {/* Image Header (65-70% visual anchor) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101624] flex items-center justify-center">
          {!imgError ? (
            <img
              src={ritual.image}
              alt={ritual.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#101624] to-[#07080C] p-6 text-center">
              <span className="font-display text-lg text-[#D4AF37]">{ritual.name}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/35 to-transparent" />

          {ritual.id === 'ritual-10-10' && (
            <div className="relative z-10 mb-4">
              <BuneSigil className="h-28 w-28" showLabel={false} />
            </div>
          )}

          {/* Single subtle status text in bottom left */}
          <div className="absolute bottom-3 left-5 right-5 z-10 flex items-center justify-between text-xs">
            <span className="font-medium tracking-wider text-[#D4AF37]">
              {ritual.category}
            </span>
            <span
              className={`font-mono-tabular text-xs font-medium ${
                expired ? 'text-[#A6A29A]' : 'text-[#E5C158]'
              }`}
            >
              {expired ? 'INSCRIÇÕES ENCERRADAS' : 'INSCRIÇÕES ABERTAS'}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Clean unboxed metadata with typographic separator */}
          <div className="mb-2 text-xs text-[#A6A29A]">
            <span>{ritual.traditionContext}</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-semibold leading-snug text-[#F4EFE6] group-hover:text-[#D4AF37] transition-colors">
            <button
              type="button"
              onClick={() => onNavigate(`/rituais/${ritual.slug}`)}
              className="text-left focus:outline-none"
            >
              {ritual.name}
            </button>
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-[#A6A29A] line-clamp-3">
            {ritual.shortDescription}
          </p>

          <div className="mt-4 border-t border-[#D4AF37]/12 pt-3 text-xs text-[#C8C2B8]">
            <p className="line-clamp-2">
              <strong className="font-medium text-[#D4AF37]">Objetivo simbólico:</strong>{' '}
              {ritual.symbolicObjective}
            </p>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="border-t border-[#D4AF37]/15 bg-[#080B12] px-6 py-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A6A29A]">
          <span className="inline-flex items-center gap-1.5 font-mono-tabular">
            <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
            {ritual.dateDisplay}
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 font-mono-tabular">
            <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
            {ritual.timeDisplay}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#A6A29A]">
              Contribuição
            </span>
            <span className="font-mono-tabular text-lg font-semibold text-[#F4EFE6]">
              R$ {ritual.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate(`/rituais/${ritual.slug}`)}
            className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2.5 text-xs font-semibold tracking-wider text-[#F4EFE6] transition-colors hover:bg-[#D4AF37] hover:text-[#07080C] whitespace-nowrap shrink-0"
          >
            <span>CONHECER</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
