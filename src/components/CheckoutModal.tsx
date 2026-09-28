import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Lock,
  BookOpen,
  Copy,
  Check,
  ArrowLeft,
  QrCode,
  AlertCircle,
  Loader2,
  Mail,
  RefreshCw,
} from 'lucide-react';
import { ProductItem } from '../data/products';
import { unlockEbookWithVerifiedPayment } from '../data/ebookMagiasExu';
import { trackEvent } from '../utils/analytics';
import { SITE_CONFIG } from '../data/siteConfig';

export interface CheckoutItemConfig {
  id: string;
  slug?: string;
  type: 'ritual' | 'product' | 'subscription';
  title: string;
  subtitle: string;
  originalPrice?: number;
  price: number;
  hasEmbeddedEbook?: boolean;
  checkoutUrl: string;
  orderBumpProduct?: ProductItem;
}

interface CheckoutModalProps {
  item: CheckoutItemConfig | null;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onOpenEbook?: (ebookSlug: string) => void;
}

type CheckoutStep = 'details' | 'payment' | 'completed';

/**
 * Gera o payload oficial PIX "Copia e Cola" (Padrão EMV® BRCode do Banco Central)
 * para a Chave PIX Aleatória configurada quando o Mercado Pago ainda não está com token ativo.
 */
function buildPixBrCodePayload(pixKey: string, amount: number): string {
  const formatField = (id: string, value: string) => {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
  };

  const gui = formatField('00', 'br.gov.bcb.pix');
  const keyField = formatField('01', pixKey.trim());
  const merchantAccountInfo = formatField('26', `${gui}${keyField}`);

  const amountStr = amount.toFixed(2);
  const payloadWithoutCrc =
    formatField('00', '01') +
    merchantAccountInfo +
    formatField('52', '0000') +
    formatField('53', '986') +
    formatField('54', amountStr) +
    formatField('58', 'BR') +
    formatField('59', 'AUREA ARCANA') +
    formatField('60', 'SAO PAULO') +
    formatField('62', formatField('05', 'AUREA1010')) +
    '6304';

  let crc = 0xffff;
  for (let i = 0; i < payloadWithoutCrc.length; i++) {
    crc ^= payloadWithoutCrc.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }
  const crcHex = crc.toString(16).toUpperCase().padStart(4, '0');
  return `${payloadWithoutCrc}${crcHex}`;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  item,
  onClose,
  onNavigate,
  onOpenEbook,
}) => {
  const [step, setStep] = useState<CheckoutStep>('details');
  const [includeOrderBump, setIncludeOrderBump] = useState(false);
  const [participantName, setParticipantName] = useState('');
  const [participantBirthDate, setParticipantBirthDate] = useState('');
  const [participantEmail, setParticipantEmail] = useState('');
  const [participantIntention, setParticipantIntention] = useState('');

  // Mercado Pago PIX API state
  const [isCreatingCharge, setIsCreatingCharge] = useState(false);
  const [mpConfigured, setMpConfigured] = useState<boolean>(false);
  const [mpPaymentId, setMpPaymentId] = useState<string>('');
  const [mpQrCode, setMpQrCode] = useState<string>('');
  const [mpQrCodeBase64, setMpQrCodeBase64] = useState<string>('');
  const [mpStatus, setMpStatus] = useState<string>('pending');
  const [manualPaymentIdInput, setManualPaymentIdInput] = useState<string>('');

  const [copiedPixKey, setCopiedPixKey] = useState(false);
  const [copiedBrCode, setCopiedBrCode] = useState(false);
  const [isCheckingBank, setIsCheckingBank] = useState(false);
  const [bankStatusMessage, setBankStatusMessage] = useState('');
  const [formError, setFormError] = useState('');

  // Reset modal state whenever item changes
  useEffect(() => {
    if (item) {
      setStep('details');
      setIncludeOrderBump(false);
      setIsCreatingCharge(false);
      setMpPaymentId('');
      setMpQrCode('');
      setMpQrCodeBase64('');
      setMpStatus('pending');
      setManualPaymentIdInput('');
      setCopiedPixKey(false);
      setCopiedBrCode(false);
      setIsCheckingBank(false);
      setBankStatusMessage('');
      setFormError('');
    }
  }, [item]);

  const bumpPrice =
    includeOrderBump && item?.orderBumpProduct ? item.orderBumpProduct.price : 0;
  const totalPrice = (item?.price || 0) + bumpPrice;
  const formattedTotal = totalPrice.toFixed(2).replace('.', ',');

  const unlocksGrimorioEbook = Boolean(
    item &&
      (item.slug === 'grimorio-da-prosperidade' ||
        item.slug === 'biblioteca-secreta-da-prosperidade' ||
        (includeOrderBump &&
          (item.orderBumpProduct?.slug === 'grimorio-da-prosperidade' ||
            item.orderBumpProduct?.slug === 'biblioteca-secreta-da-prosperidade')))
  );

  const unlocksExuEbook = Boolean(
    item &&
      (item.slug === 'magias-de-prosperidade-com-exu' ||
        item.slug === 'biblioteca-secreta-da-prosperidade' ||
        (includeOrderBump &&
          (item.orderBumpProduct?.slug === 'magias-de-prosperidade-com-exu' ||
            item.orderBumpProduct?.slug === 'biblioteca-secreta-da-prosperidade')))
  );

  const completeApprovedOrder = useCallback(
    (verifiedPaymentId: string) => {
      if (!item) return;

      if (unlocksGrimorioEbook) {
        unlockEbookWithVerifiedPayment({
          slug: 'grimorio-da-prosperidade',
          mpPaymentId: verifiedPaymentId,
          mpStatus: 'approved',
          paidAmount: totalPrice,
          buyerEmail: participantEmail.trim(),
          verifiedAt: new Date().toISOString(),
        });
      }
      if (unlocksExuEbook) {
        unlockEbookWithVerifiedPayment({
          slug: 'magias-de-prosperidade-com-exu',
          mpPaymentId: verifiedPaymentId,
          mpStatus: 'approved',
          paidAmount: totalPrice,
          buyerEmail: participantEmail.trim(),
          verifiedAt: new Date().toISOString(),
        });
      }

      trackEvent('purchase', {
        item_id: item.id,
        item_name: item.title,
        item_category: item.type,
        price: totalPrice,
        transaction_id: verifiedPaymentId,
        order_bump_included: includeOrderBump,
      });

      setMpStatus('approved');
      setStep('completed');
    },
    [item, unlocksGrimorioEbook, unlocksExuEbook, totalPrice, participantEmail, includeOrderBump]
  );

  // Automatic polling every 4 seconds while on step === 'payment' and mpPaymentId exists
  useEffect(() => {
    if (step !== 'payment' || !mpPaymentId) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/pix/status/${encodeURIComponent(mpPaymentId)}`);
        const data = await res.json();
        if (res.ok && data.approved === true && data.status === 'approved') {
          clearInterval(interval);
          completeApprovedOrder(String(data.paymentId || mpPaymentId));
        } else if (data.status) {
          setMpStatus(String(data.status));
        }
      } catch {
        // silent background poll
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [step, mpPaymentId, completeApprovedOrder]);

  if (!item) return null;

  const pixKey = SITE_CONFIG.pixKey; // 229d5a5f-8d4c-410e-a785-c924064ae30c
  const activeBrCode = mpQrCode || buildPixBrCodePayload(pixKey, totalPrice);

  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setBankStatusMessage('');

    if (participantName.trim().length < 3) {
      setFormError('Informe seu nome completo para o registro.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(participantEmail.trim())) {
      setFormError('Informe um e-mail válido para liberação e envio dos materiais.');
      return;
    }
    if (item.type === 'ritual' && participantBirthDate.trim().length < 6) {
      setFormError('Informe sua data de nascimento para inscrição no Livro/Pergaminho de Altar.');
      return;
    }

    setIsCreatingCharge(true);

    try {
      const response = await fetch('/api/pix/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalPrice,
          description: `${item.title} - Aurea Arcana`,
          payerEmail: participantEmail.trim(),
          payerName: participantName.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.paymentId) {
        setMpConfigured(true);
        setMpPaymentId(String(data.paymentId));
        setMpQrCode(String(data.qrCode || ''));
        setMpQrCodeBase64(String(data.qrCodeBase64 || ''));
        setMpStatus(String(data.status || 'pending'));
      } else {
        setMpConfigured(Boolean(data.configured));
        setMpPaymentId('');
        setMpQrCode('');
        setMpQrCodeBase64('');
      }
    } catch {
      setMpConfigured(false);
    } finally {
      setIsCreatingCharge(false);
      trackEvent('add_payment_info', {
        item_id: item.id,
        item_name: item.title,
        payment_type: 'pix_mercadopago',
        price: totalPrice,
      });
      setStep('payment');
    }
  };

  const handleCheckPaymentInBank = async () => {
    setFormError('');
    setBankStatusMessage('');

    const idToQuery = (mpPaymentId || manualPaymentIdInput).replace(/[^0-9]/g, '');

    if (!idToQuery) {
      setIsCheckingBank(true);
      try {
        const cfgRes = await fetch('/api/pix/config');
        const cfgData = await cfgRes.json();
        if (!cfgData.configured) {
          setFormError(
            'Acesso Bloqueado: O banco ainda não confirmou o pagamento via API porque o token MERCADOPAGO_ACCESS_TOKEN ainda não foi inserido nas variáveis de ambiente (Secrets) do AI Studio. Assim que conectar o token do Mercado Pago, o banco validará o PIX automaticamente.'
          );
        } else {
          setFormError(
            'Informe o número do pagamento/comprovante Mercado Pago (apenas números) ou gere o QR Code dinâmico para que o banco verifique o pagamento via API.'
          );
        }
      } catch {
        setFormError('Não foi possível conectar à API bancária no momento.');
      } finally {
        setIsCheckingBank(false);
      }
      return;
    }

    setIsCheckingBank(true);
    try {
      const res = await fetch(`/api/pix/status/${encodeURIComponent(idToQuery)}`);
      const data = await res.json();

      if (res.ok && data.approved === true && data.status === 'approved') {
        completeApprovedOrder(String(data.paymentId || idToQuery));
      } else if (!res.ok) {
        setFormError(
          data.error ||
            'O Mercado Pago informou que este ID de pagamento não foi encontrado ou ainda não foi aprovado.'
        );
      } else {
        setMpStatus(String(data.status || 'pending'));
        setBankStatusMessage(
          `Consulta realizada na API do Mercado Pago: o pagamento #${idToQuery} ainda consta como "${
            data.status === 'pending' ? 'PENDENTE (aguardando pagamento no banco)' : data.status
          }". Assim que você concluir o PIX no seu aplicativo bancário, o sistema liberará automaticamente.`
        );
      }
    } catch {
      setFormError('Erro ao consultar a API do Mercado Pago.');
    } finally {
      setIsCheckingBank(false);
    }
  };

  const handleCopyPixKey = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(pixKey);
      setCopiedPixKey(true);
      setTimeout(() => setCopiedPixKey(false), 2500);
    }
  };

  const handleCopyBrCode = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(activeBrCode);
      setCopiedBrCode(true);
      setTimeout(() => setCopiedBrCode(false), 2500);
    }
  };

  const whatsappSummaryMessage = `Olá! Realizei o pagamento PIX de R$ ${formattedTotal} referente a "${item.title}".\nNome: ${participantName}\nE-mail: ${participantEmail}${
    item.type === 'ritual'
      ? `\nData de Nasc.: ${participantBirthDate}\nIntenção/Pedidos: ${participantIntention}`
      : ''
  }${mpPaymentId ? `\nID Mercado Pago: #${mpPaymentId}` : ''}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="relative my-8 w-full max-w-2xl border border-[#D4AF37]/40 bg-[#0B0F19] p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-[#A6A29A] hover:text-[#F4EFE6]"
          aria-label="Fechar janela de inscrição"
        >
          <X className="h-5 w-5" />
        </button>

        {/* STEP INDICATOR BAR */}
        <div className="mb-6 grid grid-cols-3 gap-2 border-b border-[#D4AF37]/20 pb-4 text-[11px] font-semibold uppercase tracking-wider">
          <div
            className={`flex items-center gap-1.5 ${
              step === 'details' ? 'text-[#D4AF37]' : 'text-[#81C784]'
            }`}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px]">
              1
            </span>
            <span>1. Identificação</span>
          </div>
          <div
            className={`flex items-center gap-1.5 ${
              step === 'payment'
                ? 'text-[#D4AF37]'
                : step === 'completed'
                ? 'text-[#81C784]'
                : 'text-[#6E6A63]'
            }`}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px]">
              2
            </span>
            <span>2. PIX (API Banco)</span>
          </div>
          <div
            className={`flex items-center gap-1.5 ${
              step === 'completed' ? 'text-[#D4AF37]' : 'text-[#6E6A63]'
            }`}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px]">
              3
            </span>
            <span>3. Liberação</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* STEP 1: PARTICIPANT / BUYER DETAILS                       */}
        {/* ========================================================= */}
        {step === 'details' && (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37]">
              <Lock className="h-3.5 w-3.5" />
              <span>
                {item.type === 'ritual'
                  ? 'Etapa 1: Dados para o Altar · Verificação Bancária via API'
                  : 'Etapa 1: Identificação · PDF Bloqueado Até Confirmação da API'}
              </span>
            </div>

            <h3
              id="checkout-modal-title"
              className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#F4EFE6]"
            >
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-[#A6A29A]">{item.subtitle}</p>

            <form onSubmit={handleProceedToPayment} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1">
                    Nome Completo (de batismo/registro) *
                  </label>
                  <input
                    type="text"
                    required
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    placeholder="Nome completo"
                    className="w-full border border-[#D4AF37]/25 bg-[#07080C] px-3.5 py-2.5 text-sm text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1">
                    E-mail para Recebimento *
                  </label>
                  <input
                    type="email"
                    required
                    value={participantEmail}
                    onChange={(e) => setParticipantEmail(e.target.value)}
                    placeholder="seuemail@dominio.com.br"
                    className="w-full border border-[#D4AF37]/25 bg-[#07080C] px-3.5 py-2.5 text-sm text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {item.type === 'ritual' && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1">
                      Data de Nascimento (Para o Altar) *
                    </label>
                    <input
                      type="text"
                      required
                      value={participantBirthDate}
                      onChange={(e) => setParticipantBirthDate(e.target.value)}
                      placeholder="DD/MM/AAAA"
                      className="w-full border border-[#D4AF37]/25 bg-[#07080C] px-3.5 py-2.5 text-sm text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C8C2B8] mb-1">
                      Pedidos / Direcionamento Simbólico *
                    </label>
                    <input
                      type="text"
                      required
                      value={participantIntention}
                      onChange={(e) => setParticipantIntention(e.target.value)}
                      placeholder="Ex: Prosperidade financeira e abertura de caminhos"
                      className="w-full border border-[#D4AF37]/25 bg-[#07080C] px-3.5 py-2.5 text-sm text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Strategic Order Bump Visual */}
              {item.orderBumpProduct && (
                <div className="border border-[#D4AF37]/40 bg-[#101624] p-4">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={includeOrderBump}
                      onChange={(e) => setIncludeOrderBump(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-[#D4AF37]"
                    />
                    <div className="text-xs">
                      <span className="font-semibold uppercase tracking-wider text-[#D4AF37]">
                        Adicionar Estudo Complementar ao Pedido (+ R${' '}
                        {item.orderBumpProduct.price.toFixed(2).replace('.', ',')})
                      </span>
                      <p className="mt-1 font-medium text-[#F4EFE6]">
                        {item.orderBumpProduct.name} ({item.orderBumpProduct.pagesCount} páginas em PDF)
                      </p>
                      <p className="mt-0.5 text-[#A6A29A]">
                        {item.orderBumpProduct.shortDescription}
                      </p>
                    </div>
                  </label>
                </div>
              )}

              {/* Order Total Summary */}
              <div className="flex items-center justify-between border-y border-[#D4AF37]/20 py-3">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A6A29A]">
                    Valor Total via PIX (Mercado Pago API)
                  </span>
                  <span className="block text-[11px] text-[#8E8980]">
                    O sistema consulta o banco via API e só libera após o status APROVADO.
                  </span>
                </div>
                <span className="font-mono-tabular text-2xl font-semibold text-[#D4AF37]">
                  R$ {formattedTotal}
                </span>
              </div>

              {formError && (
                <div className="flex items-center gap-2 border border-[#E57373]/40 bg-[#1A1016] p-3 text-xs text-[#E57373]">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isCreatingCharge}
                className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] px-6 py-4 text-xs font-semibold tracking-wider text-[#07080C] transition-colors hover:bg-[#E5C158] disabled:opacity-60"
              >
                {isCreatingCharge ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>GERANDO COBRANÇA PIX NO MERCADO PAGO...</span>
                  </>
                ) : (
                  <>
                    <QrCode className="h-4 w-4" />
                    <span>GERAR COBRANÇA PIX (R$ {formattedTotal}) →</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* ========================================================= */}
        {/* STEP 2: MERCADO PAGO AUTOMATIC PIX API VERIFICATION       */}
        {/* ========================================================= */}
        {step === 'payment' && (
          <div>
            <button
              type="button"
              onClick={() => {
                setFormError('');
                setBankStatusMessage('');
                setStep('details');
              }}
              className="inline-flex items-center gap-1.5 text-xs text-[#A6A29A] hover:text-[#D4AF37] mb-3"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Voltar aos dados</span>
            </button>

            <div className="border border-[#D4AF37]/50 bg-[#101624] p-4 mb-5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  <Lock className="h-4 w-4 shrink-0" />
                  <span>
                    {mpPaymentId
                      ? `Cobrança PIX #${mpPaymentId} · Aguardando Confirmação do Banco`
                      : 'Aguardando Confirmação Automática via API (Mercado Pago)'}
                  </span>
                </div>
                <span className="font-mono-tabular text-xl font-bold text-[#D4AF37]">
                  R$ {formattedTotal}
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-[#C8C2B8]">
                O acesso permanece <strong>bloqueado</strong> enquanto o pagamento está pendente. Assim que o PIX de{' '}
                <strong className="text-[#F4EFE6]">R$ {formattedTotal}</strong> for compensado, o banco confirma via API do Mercado Pago e libera seu acesso automaticamente na tela.
              </p>
            </div>

            <div className="border border-[#D4AF37]/25 bg-[#07080C] p-5 space-y-4">
              {/* If Mercado Pago returned a dynamic QR Code Base64 image, display it */}
              {mpQrCodeBase64 && (
                <div className="flex flex-col items-center justify-center border-b border-[#D4AF37]/15 pb-4">
                  <div className="bg-white p-3 rounded">
                    <img
                      src={`data:image/png;base64,${mpQrCodeBase64}`}
                      alt="QR Code PIX Oficial Mercado Pago"
                      className="h-44 w-44 object-contain"
                    />
                  </div>
                  <span className="mt-2 text-[11px] text-[#81C784] flex items-center gap-1.5 font-medium">
                    <RefreshCw className="h-3 w-3 animate-spin" />
                    Verificando pagamento automaticamente no banco a cada 4 segundos...
                  </span>
                </div>
              )}

              {/* Chave PIX Aleatória */}
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-1.5">
                  Chave PIX Aleatória Oficial
                </span>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#0B0F19] border border-[#D4AF37]/40 p-3.5">
                  <span className="font-mono-tabular text-xs sm:text-sm font-semibold text-[#F4EFE6] select-all break-all">
                    {pixKey}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPixKey}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#D4AF37] px-4 py-2.5 text-xs font-semibold text-[#07080C] hover:bg-[#E5C158] shrink-0"
                  >
                    {copiedPixKey ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>CHAVE PIX COPIADA!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>COPIAR CHAVE PIX</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* PIX Copia e Cola */}
              <div className="border-t border-[#D4AF37]/15 pt-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="block text-[11px] uppercase tracking-wider text-[#C8C2B8]">
                    Código PIX Copia e Cola (Valor R$ {formattedTotal}):
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyBrCode}
                    className="inline-flex items-center justify-center gap-1.5 border border-[#D4AF37]/50 px-3.5 py-2 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/15 shrink-0"
                  >
                    {copiedBrCode ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>PIX COPIA E COLA COPIADO!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>COPIAR PIX COPIA E COLA</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Optional Mercado Pago Payment ID field if paid via external key */}
              {!mpPaymentId && mpConfigured && (
                <div className="border-t border-[#D4AF37]/15 pt-3">
                  <label className="block text-[11px] uppercase tracking-wider text-[#C8C2B8] mb-1">
                    ID da Operação no Mercado Pago (para conferência via API):
                  </label>
                  <input
                    type="text"
                    value={manualPaymentIdInput}
                    onChange={(e) => setManualPaymentIdInput(e.target.value)}
                    placeholder="Ex: 84920193842"
                    className="w-full border border-[#D4AF37]/25 bg-[#0B0F19] px-3.5 py-2 text-xs font-mono-tabular text-[#F4EFE6] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              )}
            </div>

            {bankStatusMessage && (
              <div className="mt-4 flex items-start gap-2 border border-[#D4AF37]/40 bg-[#101624] p-3.5 text-xs text-[#F4EFE6]">
                <RefreshCw className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{bankStatusMessage}</span>
              </div>
            )}

            {formError && (
              <div
                className="mt-4 flex items-start gap-2 border border-[#E57373]/50 bg-[#1A1016] p-3.5 text-xs text-[#E57373]"
                role="alert"
              >
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{formError}</span>
              </div>
            )}

            <div className="mt-5">
              <button
                type="button"
                disabled={isCheckingBank}
                onClick={handleCheckPaymentInBank}
                className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider text-[#07080C] transition-colors hover:bg-[#E5C158] disabled:opacity-60 shadow-lg"
              >
                {isCheckingBank ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>CONSULTANDO API DO MERCADO PAGO NO BANCO...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-4 w-4" />
                    <span>
                      CONFERIR PAGAMENTO PIX NO BANCO VIA API (STATUS:{' '}
                      {mpStatus === 'approved' ? 'APROVADO' : 'AGUARDANDO PAGAMENTO'})
                    </span>
                  </>
                )}
              </button>
              <p className="mt-2 text-center text-[11px] text-[#8E8980]">
                O botão acima consulta diretamente a API do Mercado Pago. Se o PIX ainda não foi pago, o sistema mantém o conteúdo bloqueado.
              </p>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STEP 3: UNLOCKED ONLY AFTER MERCADO PAGO API APPROVAL     */}
        {/* ========================================================= */}
        {step === 'completed' && (
          <div className="py-4 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-[#D4AF37]" />
            <p className="mt-3 text-xs uppercase tracking-widest text-[#D4AF37]">
              Pagamento Aprovado via API · Transação #{mpPaymentId || 'MP-VERIFIED'}
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-[#F4EFE6]">
              {item.type === 'ritual'
                ? 'PIX Confirmado pelo Banco e Inscrição Garantida!'
                : 'PIX Confirmado pelo Banco e PDF Liberado!'}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#A6A29A]">
              O Mercado Pago confirmou o pagamento de <strong className="text-[#D4AF37]">R$ {formattedTotal}</strong> para{' '}
              <strong className="text-[#F4EFE6]">{participantName}</strong> ({participantEmail}).
            </p>

            {/* Immediate E-book Access Unlocked: Grimório da Prosperidade (30 pages) */}
            {unlocksGrimorioEbook && onOpenEbook && (
              <div className="mt-6 border border-[#D4AF37] bg-[#101624] p-6 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  <BookOpen className="h-4 w-4" />
                  <span>PDF Liberado Após Aprovação Bancária · 30 Páginas</span>
                </div>
                <h4 className="mt-1.5 font-display text-2xl font-semibold text-[#F4EFE6]">
                  GRIMÓRIO DA PROSPERIDADE — Orações Herméticas, Sigilos e Ritual dos 7 Dias
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#C8C2B8]">
                  Seu acesso ao Grimório da Prosperidade completo de 30 páginas já está liberado para leitura imediata ou salvamento/impressão em PDF.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenEbook('grimorio-da-prosperidade');
                  }}
                  className="mt-4 inline-flex items-center gap-2 bg-[#D4AF37] px-6 py-3 text-xs font-semibold tracking-wider text-[#07080C] hover:bg-[#E5C158]"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>ABRIR E LER GRIMÓRIO DA PROSPERIDADE (30 PÁGINAS)</span>
                </button>
              </div>
            )}

            {/* Immediate E-book Access Unlocked: Magias com Exu (15 pages) */}
            {unlocksExuEbook && onOpenEbook && (
              <div className="mt-6 border border-[#D4AF37] bg-[#101624] p-6 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  <BookOpen className="h-4 w-4" />
                  <span>PDF Liberado Após Aprovação Bancária · 15 Páginas</span>
                </div>
                <h4 className="mt-1.5 font-display text-2xl font-semibold text-[#F4EFE6]">
                  MAGIAS COM EXU — Fundamentos, Proteção, Prosperidade e Abertura de Caminhos
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#C8C2B8]">
                  Seu acesso ao e-book completo de 15 páginas já está liberado para leitura imediata ou impressão/salvamento em PDF.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenEbook('magias-de-prosperidade-com-exu');
                  }}
                  className="mt-4 inline-flex items-center gap-2 bg-[#D4AF37] px-6 py-3 text-xs font-semibold tracking-wider text-[#07080C] hover:bg-[#E5C158]"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>ABRIR E LER E-BOOK AGORA (15 PÁGINAS)</span>
                </button>
              </div>
            )}

            {item.type === 'ritual' && (
              <div className="mt-5 border border-[#D4AF37]/30 bg-[#07080C] p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Seus Dados de Altar Foram Registrados
                </p>
                <p className="mt-1 text-xs text-[#A6A29A]">
                  Se desejar encaminhar a confirmação também para o e-mail da Chancelaria ({SITE_CONFIG.contactEmail}), clique abaixo:
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(
                      `Inscrição Ritual - ${item.title}`
                    )}&body=${encodeURIComponent(whatsappSummaryMessage)}`}
                    className="inline-flex items-center gap-1.5 bg-[#D4AF37] px-4 py-2 text-xs font-semibold text-[#07080C] hover:bg-[#E5C158]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>ENVIAR PARA {SITE_CONFIG.contactEmail.toUpperCase()}</span>
                  </a>
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                type="button"
                onClick={onClose}
                className="border border-[#D4AF37]/30 px-6 py-2.5 text-xs text-[#C8C2B8] hover:border-[#D4AF37]"
              >
                Concluir e Voltar ao Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
