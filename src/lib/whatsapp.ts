const WHATSAPP_NUMBER = "554792838021";

export function openWhatsAppSite() {
  const message = encodeURIComponent("Vim do site, quero tirar dúvidas!");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
}

export function openWhatsAppInstagram() {
  const message = encodeURIComponent("Vim do Instagram, quero tirar dúvidas!");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
}

export function redirectToWhatsApp(
  productInterest: string,
  pageName: string,
  formData?: { nome?: string; email?: string; telefone?: string; finalidade?: string }
) {
  let message = `Preenchi o formulário do site, quero tirar dúvidas!\n\n`;
  message += `📋 *Produto de interesse:* ${productInterest}\n`;
  message += `📄 *Página:* ${pageName}\n`;

  if (formData) {
    if (formData.nome) message += `👤 *Nome:* ${formData.nome}\n`;
    if (formData.email) message += `📧 *E-mail:* ${formData.email}\n`;
    if (formData.telefone) message += `📱 *Telefone:* ${formData.telefone}\n`;
    if (formData.finalidade) message += `🎯 *Finalidade:* ${formData.finalidade}\n`;
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}
