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
  formData?: Record<string, string>
) {
  let message = `Preenchi o formulário do site, quero tirar dúvidas!\n\n`;
  message += `📋 *Produto de interesse:* ${productInterest}\n`;
  message += `📄 *Página:* ${pageName}\n`;

  if (formData) {
    const labels: Record<string, string> = {
      nome: "👤 Nome",
      telefone: "📱 Telefone",
      ativo: "🏷️ Ativo",
      finalidade: "🎯 Finalidade",
      faixa: "💰 Faixa de investimento",
      prazo: "📅 Prazo",
      contato: "📞 Prefere contato por",
      experiencia: "🔍 Experiência",
      tipo: "🏢 Tipo de compra",
      atendimento: "📞 Prefere contato por",
    };
    for (const [key, value] of Object.entries(formData)) {
      if (value && key !== "email") {
        const label = labels[key] || key;
        message += `${label}: ${value}\n`;
      }
    }
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}
