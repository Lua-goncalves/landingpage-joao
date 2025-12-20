/**
 * ============================================
 * META PIXEL TRACKING UTILITIES
 * ============================================
 * 
 * Configuração completa do Meta Pixel para tráfego pago.
 * 
 * CONFIGURAÇÃO:
 * O script do Pixel está no index.html
 * Substitua 'YOUR_PIXEL_ID' pelo seu ID real do Meta Pixel
 * 
 * EVENTOS CONFIGURADOS:
 * - PageView: dispara automaticamente ao carregar a página
 * - Lead: dispara no clique do botão de WhatsApp
 * - InitiateCheckout: dispara no clique do botão de checkout
 * - AddToCart: dispara quando adiciona ao carrinho
 * - Purchase: pode ser usado em páginas de confirmação
 * - ViewContent: visualização de conteúdo específico
 * - CompleteRegistration: registro completo
 * - Contact: contato iniciado
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// ============================================
// CONFIGURAÇÃO DO DESTINO DO CTA
// ============================================
/**
 * Altere esta variável para mudar o destino do botão principal:
 * - 'whatsapp': redireciona para WhatsApp
 * - 'checkout': redireciona para checkout externo (Kiwify)
 */
export type CTADestinationType = 'whatsapp' | 'checkout';
export const CTA_DESTINATION = 'whatsapp' as CTADestinationType;

// URLs de destino
export const WHATSAPP_URL = "https://wa.me/5511974793075";
export const CHECKOUT_URL = 'https://pay.kiwify.com.br/SEU_PRODUTO';

// ============================================
// TIPOS DE EVENTOS DO META PIXEL
// ============================================
export type MetaPixelEvent = 
  | 'PageView'
  | 'Lead'
  | 'InitiateCheckout'
  | 'AddToCart'
  | 'Purchase'
  | 'ViewContent'
  | 'CompleteRegistration'
  | 'Contact'
  | 'Search'
  | 'AddPaymentInfo'
  | 'AddToWishlist';

interface EventData {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  num_items?: number;
  [key: string]: unknown;
}

// ============================================
// FUNÇÃO AUXILIAR - Disparo de Evento
// ============================================
const firePixelEvent = (eventName: MetaPixelEvent, data?: EventData): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (data) {
      window.fbq('track', eventName, data);
    } else {
      window.fbq('track', eventName);
    }
    console.log(`[Meta Pixel] ${eventName}`, data || '');
  }
};

// ============================================
// PAGEVIEW - Dispara ao carregar a página
// ============================================
/**
 * Track PageView event
 * Já é disparado automaticamente pelo script no index.html
 * Use esta função apenas se precisar disparar manualmente em SPAs
 */
export const trackPageView = (pageName?: string): void => {
  firePixelEvent('PageView');
  if (pageName) {
    console.log(`[Meta Pixel] PageView for: ${pageName}`);
  }
};

// ============================================
// LEAD - Contato via WhatsApp
// ============================================
/**
 * Track Lead event - para cliques no WhatsApp
 * @param buttonLocation - Identificador do botão (ex: 'hero_section', 'cta_section')
 */
export const trackLead = (buttonLocation?: string): void => {
  firePixelEvent('Lead', {
    content_name: 'WhatsApp Contact',
    content_category: buttonLocation || 'landing_page',
  });
};

// ============================================
// INITIATE CHECKOUT - Início do processo de compra
// ============================================
/**
 * Track InitiateCheckout event - para cliques em checkout
 * @param productName - Nome do produto
 * @param value - Valor do produto
 */
export const trackInitiateCheckout = (productName?: string, value?: number): void => {
  firePixelEvent('InitiateCheckout', {
    content_name: productName || 'Treino de Musa',
    content_category: 'fitness_program',
    content_type: 'product',
    value: value || 0,
    currency: 'BRL',
    num_items: 1,
  });
};

// ============================================
// ADD TO CART - Adicionar ao carrinho
// ============================================
/**
 * Track AddToCart event
 * @param productName - Nome do produto
 * @param value - Valor do produto
 */
export const trackAddToCart = (productName?: string, value?: number): void => {
  firePixelEvent('AddToCart', {
    content_name: productName || 'Treino de Musa',
    content_type: 'product',
    value: value || 0,
    currency: 'BRL',
  });
};

// ============================================
// PURCHASE - Compra realizada
// ============================================
/**
 * Track Purchase event
 * Use em páginas de confirmação de compra
 * @param productName - Nome do produto
 * @param value - Valor da compra
 * @param orderId - ID do pedido (opcional)
 */
export const trackPurchase = (productName?: string, value?: number, orderId?: string): void => {
  firePixelEvent('Purchase', {
    content_name: productName || 'Treino de Musa',
    content_type: 'product',
    value: value || 0,
    currency: 'BRL',
    content_ids: orderId ? [orderId] : undefined,
  });
};

// ============================================
// VIEW CONTENT - Visualização de conteúdo
// ============================================
/**
 * Track ViewContent event
 * @param contentName - Nome do conteúdo visualizado
 * @param contentCategory - Categoria do conteúdo
 */
export const trackViewContent = (contentName?: string, contentCategory?: string): void => {
  firePixelEvent('ViewContent', {
    content_name: contentName || 'Landing Page',
    content_category: contentCategory || 'fitness_program',
    content_type: 'product',
  });
};

// ============================================
// COMPLETE REGISTRATION - Registro completo
// ============================================
/**
 * Track CompleteRegistration event
 * @param method - Método de registro (ex: 'form', 'email')
 */
export const trackCompleteRegistration = (method?: string): void => {
  firePixelEvent('CompleteRegistration', {
    content_name: method || 'registration',
  });
};

// ============================================
// CONTACT - Contato iniciado
// ============================================
/**
 * Track Contact event
 * @param method - Método de contato (ex: 'whatsapp', 'email', 'phone')
 */
export const trackContact = (method?: string): void => {
  firePixelEvent('Contact', {
    content_name: method || 'contact',
  });
};

// ============================================
// FUNÇÃO PRINCIPAL DO CTA - WhatsApp ou Checkout
// ============================================
/**
 * Handler principal para o botão CTA
 * Dispara o evento apropriado baseado na configuração CTA_DESTINATION
 * e redireciona para o destino correto
 * 
 * @param buttonLocation - Identificador do botão para analytics
 */
export const handleCTAClick = (buttonLocation?: string): void => {
  if (CTA_DESTINATION === 'checkout') {
    // Dispara evento de checkout
    trackInitiateCheckout();
    
    // Pequeno delay para garantir que o evento seja enviado antes do redirect
    setTimeout(() => {
      window.open(CHECKOUT_URL, '_blank');
    }, 100);
  } else {
    // Dispara eventos de contato/lead
    trackLead(buttonLocation);
    trackContact('whatsapp');
    
    // Pequeno delay para garantir que o evento seja enviado antes do redirect
    setTimeout(() => {
      window.open(WHATSAPP_URL, '_blank');
    }, 100);
  }
};

// ============================================
// LEGACY - Mantém compatibilidade
// ============================================
export const trackWhatsAppClick = (buttonLocation?: string): void => {
  trackLead(buttonLocation);
  trackContact('whatsapp');
};
