import React, { useState } from 'react';
import { ProductItem } from '../data/products';

interface BookCover3DProps {
  product: ProductItem;
  size?: 'sm' | 'lg';
}

export const BookCover3D: React.FC<BookCover3DProps> = ({ product, size = 'sm' }) => {
  const [imgError, setImgError] = useState(false);

  const spineColors: Record<ProductItem['coverAccentColor'], string> = {
    gold: 'from-[#1B160C] via-[#0B0F19] to-[#07080C]',
    crimson: 'from-[#3D0E18] via-[#120A10] to-[#07080C]',
    emerald: 'from-[#0D211A] via-[#0A1314] to-[#07080C]',
    midnight: 'from-[#0E182B] via-[#0A0F1D] to-[#07080C]',
  };

  const isLarge = size === 'lg';

  return (
    <div
      className={`relative mx-auto select-none transition-transform duration-200 group-hover:-translate-y-1 ${
        isLarge ? 'w-64 sm:w-72 aspect-[3/4]' : 'w-44 sm:w-48 aspect-[3/4]'
      }`}
    >
      {/* Subtle golden aura behind the grimoire */}
      <div
        className="pointer-events-none absolute -inset-2 bg-gradient-to-b from-[#D4AF37]/15 via-transparent to-transparent opacity-70 blur-xl"
        aria-hidden="true"
      />

      {/* 3D Book Spine & Page Edges */}
      <div className="relative h-full w-full overflow-hidden border border-[#D4AF37]/40 bg-[#0A0D16] shadow-[8px_12px_28px_rgba(0,0,0,0.85)]">
        {/* Background photography with scrim */}
        {!imgError && (
          <img
            src={product.coverImage}
            alt={`Capa da obra digital ${product.name}`}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity"
          />
        )}

        {/* Rich gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${spineColors[product.coverAccentColor]} opacity-90`}
        />

        {/* Book Spine Crease on Left */}
        <div
          className="absolute inset-y-0 left-0 w-3.5 border-r border-[#D4AF37]/30 bg-gradient-to-r from-black/80 via-[#D4AF37]/10 to-black/40"
          aria-hidden="true"
        />

        {/* Gold foil inner frame */}
        <div className="relative ml-3.5 flex h-full flex-col justify-between p-4 sm:p-5">
          <div className="flex h-full flex-col justify-between border border-[#D4AF37]/30 p-3 sm:p-4">
            {/* Top Header */}
            <div className="text-center">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                AUREA ARCANA · EDIÇÃO DIGITAL
              </p>
              <div className="mx-auto my-1.5 h-px w-12 bg-[#D4AF37]/40" />
            </div>

            {/* Center Sacred Geometry Seal SVG */}
            <div className="my-auto flex flex-col items-center justify-center py-2">
              <svg
                viewBox="0 0 100 100"
                className={`${isLarge ? 'h-20 w-20' : 'h-14 w-14'} text-[#D4AF37] opacity-85`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="44" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="36" />
                <polygon points="50,14 81,68 19,68" />
                <polygon points="50,86 81,32 19,32" />
                <circle cx="50" cy="50" r="10" />
                <circle cx="50" cy="50" r="2.5" fill="currentColor" />
              </svg>

              <h4
                className={`mt-3 text-center font-display font-semibold tracking-wide text-[#F4EFE6] ${
                  isLarge ? 'text-lg sm:text-xl leading-snug' : 'text-sm leading-tight'
                }`}
              >
                {product.name}
              </h4>
            </div>

            {/* Bottom Footer */}
            <div className="text-center">
              <div className="mx-auto mb-1.5 h-px w-16 bg-[#D4AF37]/30" />
              <p className="font-mono-tabular text-[10px] tracking-widest text-[#A6A29A]">
                {product.pagesCount} PÁGINAS · PDF
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle right page edges effect */}
      <div
        className="pointer-events-none absolute inset-y-1 -right-1.5 w-1.5 border-y border-r border-[#D4AF37]/25 bg-gradient-to-r from-[#C8B99E]/30 to-[#8E7F65]/20"
        aria-hidden="true"
      />
    </div>
  );
};
