/**
 * Configuração Global da Página de Vendas — Antes de Clicar
 * Domínio: livroantesdeclicar.com.br
 * 
 * Centralização da URL de Checkout da Hotmart para fácil atualização
 * e compatibilidade total com o programa de afiliados.
 */

const HOTMART_CONFIG = {
  // URL da página do produto na Hotmart
  productUrl: "https://hotmart.com/pt-br/marketplace/produtos/antes-de-clicar-como-reconhecer-riscos-e-tomar-decisoes-mais-seguras-na-internet/E107471425N",
  
  // URL direta de checkout do produto na Hotmart
  checkoutUrl: "https://pay.hotmart.com/E107471425N",

  // Dados Editoriais
  bookTitle: "Antes de Clicar",
  subtitle: "Como reconhecer riscos e tomar decisões mais seguras na internet",
  author: "Lisandro Dias Brasil do Carmo",
  domain: "livroantesdeclicar.com.br",

  // Configuração da Oferta
  format: "Livro Digital (PDF)",
  
  // Parâmetros de Analytics (opcional para rastreamento de conversão)
  trackClicks: true
};

// Tornar disponível globalmente no navegador
if (typeof window !== 'undefined') {
  window.HOTMART_CONFIG = HOTMART_CONFIG;
}
