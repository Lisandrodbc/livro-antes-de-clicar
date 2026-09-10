/**
 * Configuração Global da Página de Vendas — Antes de Clicar
 * Domínio: livroantesdeclicar.com.br
 * 
 * Centralização da URL de Checkout da Hotmart para fácil atualização
 * e compatibilidade total com o programa de afiliados.
 */

const HOTMART_CONFIG = {
  // URL direta de checkout do produto na Hotmart
  checkoutUrl: "https://pay.hotmart.com/E107471425N",
  
  // URL da página do produto/afiliados na Hotmart
  productUrl: "https://go.hotmart.com/E107471425N?dp=1",

  // Dados Editoriais
  bookTitle: "Antes de Clicar",
  subtitle: "Como reconhecer riscos e tomar decisões mais seguras na internet",
  author: "Lisandro Dias Brasil do Carmo",
  domain: "livroantesdeclicar.com.br",

  // Configuração da Oferta
  format: "Livro Digital (PDF) + Versão Impressa",
  
  // Parâmetros de Analytics (opcional para rastreamento de conversão)
  trackClicks: true
};

// Tornar disponível globalmente no navegador
if (typeof window !== 'undefined') {
  window.HOTMART_CONFIG = HOTMART_CONFIG;
}
