export type AnalyticsEventName =
  | 'view_item'
  | 'view_ritual'
  | 'generate_lead'
  | 'click_whatsapp'
  | 'begin_checkout'
  | 'purchase';

export interface AnalyticsEventPayload {
  item_id?: string;
  item_name?: string;
  item_category?: string;
  price?: number;
  currency?: string;
  funnel_stage?: string;
  source?: string;
  [key: string]: unknown;
}

export interface LoggedAnalyticsEvent {
  id: string;
  timestamp: string;
  event: AnalyticsEventName;
  payload: AnalyticsEventPayload;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const eventHistory: LoggedAnalyticsEvent[] = [];
const listeners: Array<() => void> = [];

export function trackEvent(
  event: AnalyticsEventName,
  payload: AnalyticsEventPayload = {}
): void {
  const enrichedPayload: AnalyticsEventPayload = {
    currency: 'BRL',
    ...payload,
  };

  // 1. Google Tag Manager (dataLayer)
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...enrichedPayload,
      timestamp: new Date().toISOString(),
    });

    // 2. Google Analytics 4 / Google Ads (gtag)
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, enrichedPayload);
    }

    // 3. Meta Pixel (fbq)
    if (typeof window.fbq === 'function') {
      const metaEventMap: Record<AnalyticsEventName, string> = {
        view_item: 'ViewContent',
        view_ritual: 'ViewContent',
        generate_lead: 'Lead',
        click_whatsapp: 'Contact',
        begin_checkout: 'InitiateCheckout',
        purchase: 'Purchase',
      };
      window.fbq('track', metaEventMap[event] || event, enrichedPayload);
    }
  }

  // Record in local session history for admin inspection
  eventHistory.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    timestamp: new Date().toLocaleTimeString('pt-BR'),
    event,
    payload: enrichedPayload,
  });

  if (eventHistory.length > 50) {
    eventHistory.pop();
  }

  listeners.forEach((fn) => fn());
}

export function getAnalyticsHistory(): LoggedAnalyticsEvent[] {
  return [...eventHistory];
}

export function subscribeAnalytics(listener: () => void): () => void {
  listeners.push(listener);
  return () => {
    const idx = listeners.indexOf(listener);
    if (idx > -1) listeners.splice(idx, 1);
  };
}
