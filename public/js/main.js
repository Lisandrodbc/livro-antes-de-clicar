/**
 * Script Principal da Página de Vendas — Antes de Clicar
 * Gerencia a dinâmica da página, vinculação de checkout Hotmart e interatividade.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Vinculação Dinâmica de URLs da Hotmart nos CTAs
  initHotmartCheckoutLinks();

  // 2. Interatividade do FAQ (Accordion Acessível)
  initFaqAccordion();

  // 3. Header com Transição de Transparência/Sombra ao Rolar
  initHeaderScrollEffect();

  // 4. Rastreamento Suave de Cliques nos CTAs (Analytics)
  initCtaTracking();
});

/**
 * Aplica a URL da página do produto Hotmart em todos os botões CTA da página.
 */
function initHotmartCheckoutLinks() {
  const targetUrl = window.HOTMART_CONFIG ? window.HOTMART_CONFIG.productUrl : "https://hotmart.com/pt-br/marketplace/produtos/antes-de-clicar-como-reconhecer-riscos-e-tomar-decisoes-mais-seguras-na-internet/E107471425N";
  const ctaButtons = document.querySelectorAll('[data-hotmart-cta]');

  ctaButtons.forEach(button => {
    button.setAttribute('href', targetUrl);
    button.setAttribute('target', '_blank');
    button.setAttribute('rel', 'noopener noreferrer');
  });
}

/**
 * Inicializa o accordion acessível da seção FAQ.
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answerPanel = item.querySelector('.faq-answer');

    if (!questionButton || !answerPanel) return;

    questionButton.addEventListener('click', () => {
      const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';

      // Fechar outros itens abertos para manter a página limpa
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherPanel = otherItem.querySelector('.faq-answer');
          if (otherBtn && otherPanel) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherItem.classList.remove('active');
          }
        }
      });

      // Alternar o estado do item clicado
      questionButton.setAttribute('aria-expanded', !isExpanded);
      item.classList.toggle('active', !isExpanded);
    });
  });
}

/**
 * Adiciona classe ao header fixo conforme a rolagem da página.
 */
function initHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Registra eventos de clique nos botões de checkout (preparado para Google Analytics / Meta Pixel).
 */
function initCtaTracking() {
  const ctaButtons = document.querySelectorAll('[data-hotmart-cta]');

  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const ctaLocation = button.getAttribute('data-cta-location') || 'desconhecido';
      
      // Registrar no console para diagnóstico
      console.log(`[Hotmart CTA Clicked] Local: ${ctaLocation} -> Redirecting to Hotmart Checkout`);

      // Se houver Google Tag Manager / gtag disponível
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'begin_checkout', {
          event_category: 'Ecommerce',
          event_label: ctaLocation,
          value: 1
        });
      }
    });
  });
}
