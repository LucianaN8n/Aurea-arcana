import React, { useState } from 'react';
import { Search } from 'lucide-react';
import {
  PRODUCTS_DATA,
  PRODUCT_CATEGORIES,
  ProductCategory,
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SeoHead } from '../components/SeoHead';
import { SITE_CONFIG } from '../data/siteConfig';

interface BibliotecaPageProps {
  onNavigate: (path: string) => void;
}

export const BibliotecaPage: React.FC<BibliotecaPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'TODOS' | ProductCategory>('TODOS');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory =
      selectedCategory === 'TODOS' ||
      product.category === selectedCategory ||
      product.secondaryCategories.includes(selectedCategory);

    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.traditionLineage.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grimoire-grid py-16 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Biblioteca Digital — Grimórios, Exu, Ervas, Daemons e Magia Planetária"
        description="Explore nossa loja de grimórios digitais e tratados esotéricos: Magias de Prosperidade com Exu, Grimório da Prosperidade, Ervas, Abertura de Caminhos e Daemons."
        canonicalPath="/biblioteca"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
              Acervo Editorial Aurea Arcana
            </p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-semibold text-[#F4EFE6]">
              BIBLIOTECA DIGITAL
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A6A29A]">
              Obras digitais em PDF de alta definição, diagramadas com rigor histórico, tabelas práticas e separação clara entre as diferentes matrizes espirituais e ocultistas.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#A6A29A]" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar tratado, tema ou erva..."
              className="w-full border border-[#D4AF37]/30 bg-[#0B0F19] pl-10 pr-4 py-2.5 text-xs text-[#F4EFE6] placeholder-[#6E6A63] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#D4AF37]/20 pb-6">
          <button
            type="button"
            onClick={() => setSelectedCategory('TODOS')}
            className={`px-3.5 py-2 text-xs font-medium tracking-wider transition-colors whitespace-nowrap ${
              selectedCategory === 'TODOS'
                ? 'bg-[#D4AF37] text-[#07080C] font-semibold'
                : 'border border-[#D4AF37]/25 bg-[#0B0F19] text-[#C8C2B8] hover:border-[#D4AF37]'
            }`}
          >
            TODOS ({PRODUCTS_DATA.length})
          </button>

          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-2 text-xs font-medium tracking-wider transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-[#D4AF37] text-[#07080C] font-semibold'
                  : 'border border-[#D4AF37]/25 bg-[#0B0F19] text-[#C8C2B8] hover:border-[#D4AF37]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-10">
          {filteredProducts.length === 0 ? (
            <div className="border border-[#D4AF37]/20 bg-[#0B0F19] p-12 text-center">
              <p className="font-display text-2xl text-[#F4EFE6]">
                Nenhuma obra encontrada para o filtro selecionado.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('TODOS');
                  setSearchQuery('');
                }}
                className="mt-4 border border-[#D4AF37] px-5 py-2 text-xs font-semibold text-[#D4AF37]"
              >
                LIMPAR FILTROS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
              ))}
            </div>
          )}
        </div>

        {/* Tradition Separation Note */}
        <div className="mt-16 border border-[#D4AF37]/20 bg-[#0B0F19] p-6 text-xs leading-relaxed text-[#A6A29A]">
          <strong className="block text-[#F4EFE6] mb-1">
            Organização Curatorial sem Sincretismos Indevidos
          </strong>
          {SITE_CONFIG.traditionSeparationNotice}
        </div>
      </div>
    </div>
  );
};
