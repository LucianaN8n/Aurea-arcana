import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProductItem } from '../data/products';
import { BookCover3D } from './BookCover3D';

interface ProductCardProps {
  product: ProductItem;
  onNavigate: (path: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onNavigate }) => {
  return (
    <article className="group flex flex-col justify-between border border-[#D4AF37]/18 bg-[#0B0F19] transition-transform duration-200 hover:-translate-y-0.5">
      <div>
        {/* 3D Book Showcase Top Area */}
        <div
          onClick={() => onNavigate(`/biblioteca/${product.slug}`)}
          className="cursor-pointer border-b border-[#D4AF37]/12 bg-gradient-to-b from-[#101624] to-[#0B0F19] py-7 px-4"
        >
          <BookCover3D product={product} size="sm" />
        </div>

        {/* Product Details */}
        <div className="p-6">
          {/* Clean unboxed metadata */}
          <div className="mb-2 flex items-center gap-2 text-xs text-[#D4AF37]">
            <span>{product.category}</span>
            <span aria-hidden="true" className="text-[#A6A29A]">·</span>
            <span className="font-mono-tabular text-[#A6A29A]">{product.pagesCount} págs.</span>
          </div>

          <h3 className="font-display text-xl font-semibold leading-snug text-[#F4EFE6] group-hover:text-[#D4AF37] transition-colors">
            <button
              type="button"
              onClick={() => onNavigate(`/biblioteca/${product.slug}`)}
              className="text-left focus:outline-none"
            >
              {product.name}
            </button>
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-[#A6A29A] line-clamp-3">
            {product.shortDescription}
          </p>

          <p className="mt-3 text-xs text-[#8E8980]">
            Contexto: {product.traditionLineage}
          </p>

          {product.hasEmbeddedEbook && (
            <p className="mt-2 text-[11px] font-medium text-[#D4AF37]">
              · PDF de {product.pagesCount} páginas incluso (liberado após pagamento)
            </p>
          )}
        </div>
      </div>

      {/* Price & CTA Footer */}
      <div className="flex items-center justify-between gap-4 border-t border-[#D4AF37]/15 bg-[#080B12] px-6 py-4">
        <div>
          {product.originalPrice ? (
            <span className="block font-mono-tabular text-[11px] text-[#A6A29A] line-through">
              De R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          ) : (
            <span className="block text-[11px] uppercase tracking-wider text-[#A6A29A]">
              Acesso Digital
            </span>
          )}
          <span className="font-mono-tabular text-lg font-semibold text-[#D4AF37]">
            {product.originalPrice ? 'por ' : ''}R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onNavigate(`/biblioteca/${product.slug}`)}
          className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2.5 text-xs font-semibold tracking-wider text-[#F4EFE6] transition-colors hover:bg-[#D4AF37] hover:text-[#07080C] whitespace-nowrap shrink-0"
        >
          <span>CONHECER</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
};
