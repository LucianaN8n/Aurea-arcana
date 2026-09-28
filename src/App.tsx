import React, { useEffect, useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CheckoutModal, CheckoutItemConfig } from './components/CheckoutModal';
import { EbookReaderModal } from './components/EbookReaderModal';
import { HomePage } from './pages/HomePage';
import { RituaisPage } from './pages/RituaisPage';
import { RitualDetailPage } from './pages/RitualDetailPage';
import { BibliotecaPage } from './pages/BibliotecaPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ConhecimentoPage } from './pages/ConhecimentoPage';
import { ArtigoDetailPage } from './pages/ArtigoDetailPage';
import {
  SobrePage,
  ContatoPage,
  FaqPage,
  PoliticaPrivacidadePage,
  TermosUsoPage,
  AvisoLegalPage,
} from './pages/InstitutionalPages';
import { AdminConfigPage } from './pages/AdminConfigPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [checkoutItem, setCheckoutItem] = useState<CheckoutItemConfig | null>(null);
  const [activeEbookSlug, setActiveEbookSlug] = useState<string | null>(null);

  const navigate = useCallback((path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', cleanPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentPath(cleanPath);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }
    if (currentPath === '/rituais') {
      return <RituaisPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/rituais/')) {
      const slug = currentPath.replace('/rituais/', '').replace(/\/$/, '');
      return (
        <RitualDetailPage
          slug={slug}
          onNavigate={navigate}
          onOpenCheckout={setCheckoutItem}
        />
      );
    }
    if (currentPath === '/biblioteca') {
      return <BibliotecaPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/biblioteca/')) {
      const slug = currentPath.replace('/biblioteca/', '').replace(/\/$/, '');
      return (
        <ProductDetailPage
          slug={slug}
          onNavigate={navigate}
          onOpenCheckout={setCheckoutItem}
          onOpenEbook={(ebookSlug) => setActiveEbookSlug(ebookSlug)}
        />
      );
    }
    if (currentPath === '/conhecimento') {
      return <ConhecimentoPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/conhecimento/')) {
      const slug = currentPath.replace('/conhecimento/', '').replace(/\/$/, '');
      return <ArtigoDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (currentPath === '/sobre') {
      return <SobrePage onNavigate={navigate} />;
    }
    if (currentPath === '/contato') {
      return <ContatoPage />;
    }
    if (currentPath === '/faq') {
      return <FaqPage />;
    }
    if (currentPath === '/politica-de-privacidade') {
      return <PoliticaPrivacidadePage />;
    }
    if (currentPath === '/termos-de-uso') {
      return <TermosUsoPage />;
    }
    if (currentPath === '/aviso-legal') {
      return <AvisoLegalPage />;
    }
    if (currentPath === '/admin-config') {
      return <AdminConfigPage onNavigate={navigate} />;
    }

    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07080C] text-[#F4EFE6]">
      <Header currentPath={currentPath} onNavigate={navigate} />

      <main className="flex-1">{renderPage()}</main>

      <Footer onNavigate={navigate} />

      <WhatsAppFloatingButton />

      <CheckoutModal
        item={checkoutItem}
        onClose={() => setCheckoutItem(null)}
        onNavigate={navigate}
        onOpenEbook={(ebookSlug) => setActiveEbookSlug(ebookSlug)}
      />

      <EbookReaderModal
        ebookSlug={activeEbookSlug}
        onClose={() => setActiveEbookSlug(null)}
      />
    </div>
  );
}

