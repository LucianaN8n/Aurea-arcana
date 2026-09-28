import express from 'express';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  /**
   * GET /api/pix/config
   * Informa se o token do Mercado Pago (MERCADOPAGO_ACCESS_TOKEN) está configurado no servidor.
   */
  app.get('/api/pix/config', (_req, res) => {
    const token = process.env.MERCADOPAGO_ACCESS_TOKEN?.trim();
    const configured = Boolean(token && token !== 'MY_MERCADOPAGO_ACCESS_TOKEN' && token.length > 10);
    res.json({
      configured,
      gateway: 'Mercado Pago PIX API',
    });
  });

  /**
   * POST /api/pix/create
   * Cria uma cobrança PIX oficial via API do Mercado Pago (POST https://api.mercadopago.com/v1/payments)
   */
  app.post('/api/pix/create', async (req, res) => {
    try {
      const token = process.env.MERCADOPAGO_ACCESS_TOKEN?.trim();
      if (!token || token === 'MY_MERCADOPAGO_ACCESS_TOKEN' || token.length <= 10) {
        return res.status(400).json({
          configured: false,
          error:
            'MERCADOPAGO_ACCESS_TOKEN ainda não configurado no servidor. Adicione seu Access Token de Produção do Mercado Pago nas variáveis de ambiente (Secrets) para gerar o PIX dinâmico e validar automaticamente.',
        });
      }

      const { amount, description, payerEmail, payerName } = req.body;
      const numericAmount = Number(Number(amount).toFixed(2));

      if (!numericAmount || numericAmount <= 0 || !payerEmail) {
        return res.status(400).json({
          error: 'Valor ou e-mail do comprador inválido para geração do PIX.',
        });
      }

      const nameParts = String(payerName || 'Cliente Aurea').trim().split(/\s+/);
      const firstName = nameParts[0] || 'Cliente';
      const lastName = nameParts.slice(1).join(' ') || 'Aurea';

      const mpResponse = await fetch('https://api.mercadopago.com/v1/payments', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-Idempotency-Key': crypto.randomUUID(),
        },
        body: JSON.stringify({
          transaction_amount: numericAmount,
          description: String(description || 'Aurea Arcana'),
          payment_method_id: 'pix',
          payer: {
            email: String(payerEmail).trim(),
            first_name: firstName,
            last_name: lastName,
          },
        }),
      });

      const mpData = await mpResponse.json();

      if (!mpResponse.ok) {
        const detail =
          mpData?.message ||
          mpData?.cause?.[0]?.description ||
          'Erro ao criar cobrança PIX no Mercado Pago.';
        return res.status(mpResponse.status).json({
          configured: true,
          error: `Mercado Pago API: ${detail}`,
        });
      }

      const txData = mpData?.point_of_interaction?.transaction_data;

      return res.json({
        configured: true,
        paymentId: String(mpData.id),
        status: String(mpData.status || 'pending'),
        approved: mpData.status === 'approved',
        qrCode: txData?.qr_code || '',
        qrCodeBase64: txData?.qr_code_base64 || '',
        ticketUrl: txData?.ticket_url || '',
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erro interno ao conectar ao Mercado Pago.';
      return res.status(500).json({
        error: message,
      });
    }
  });

  /**
   * GET /api/pix/status/:paymentId
   * Consulta em tempo real na API do Mercado Pago se o PIX já foi pago (status === 'approved').
   * O botão / acesso só é liberado quando approved === true.
   */
  app.get('/api/pix/status/:paymentId', async (req, res) => {
    try {
      const token = process.env.MERCADOPAGO_ACCESS_TOKEN?.trim();
      if (!token || token === 'MY_MERCADOPAGO_ACCESS_TOKEN' || token.length <= 10) {
        return res.status(400).json({
          configured: false,
          approved: false,
          status: 'unconfigured',
          error:
            'Validação automática bloqueada: conecte seu MERCADOPAGO_ACCESS_TOKEN nas configurações (Secrets) do AI Studio para que o banco confirme o pagamento PIX via API antes de liberar o acesso.',
        });
      }

      const paymentId = String(req.params.paymentId || '').replace(/[^0-9]/g, '');
      if (!paymentId) {
        return res.status(400).json({
          configured: true,
          approved: false,
          status: 'invalid_id',
          error: 'ID de pagamento PIX inválido.',
        });
      }

      const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const mpData = await mpResponse.json();

      if (!mpResponse.ok) {
        return res.status(mpResponse.status).json({
          configured: true,
          approved: false,
          status: 'error',
          error: mpData?.message || 'Não foi possível consultar este pagamento no Mercado Pago.',
        });
      }

      const status = String(mpData.status || 'pending');
      const approved = status === 'approved';

      return res.json({
        configured: true,
        paymentId: String(mpData.id),
        status,
        statusDetail: String(mpData.status_detail || ''),
        approved,
        paidAmount: Number(mpData.transaction_amount || 0),
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erro ao consultar status do PIX.';
      return res.status(500).json({
        approved: false,
        status: 'error',
        error: message,
      });
    }
  });

  // Vite middleware para desenvolvimento ou arquivos estáticos em produção
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
