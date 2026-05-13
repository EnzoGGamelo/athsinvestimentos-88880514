const WHATSAPP_NUMBER = "554792838021";

const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_GERAL = wa(
  "Olá! Acessei o site da ATHS e gostaria de falar com um consultor.",
);

export const WA_FAZENDA_JUREMA = wa(
  "Olá! Tenho interesse na *Fazenda Jurema* em Sapezal – MT (3.050 ha | R$ 39.000.000). Gostaria de mais informações.",
);

export const WA_FAZENDA_VISITA = wa(
  "Olá! Gostaria de agendar uma visita técnica à *Fazenda Jurema* em Sapezal – MT. Como posso proceder?",
);

export const WA_BARON_INTERESSE = wa(
  "Olá! Tenho interesse na *Aeronave Beechcraft Baron B58* (1984 | R$ 3.500.000 | Pintura nova 2025). Gostaria de mais informações.",
);

export const WA_BARON_FICHA = wa(
  "Olá! Gostaria de solicitar a ficha técnica completa da *Aeronave Baron B58*.",
);

export const WA_BARON_COCKPIT = wa(
  "Olá! Gostaria de solicitar mais detalhes sobre o cockpit e aviônicos da *Baron B58*.",
);

export const WA_BARON_CABINE = wa(
  "Olá! Gostaria de agendar uma visita à cabine da *Baron B58*.",
);

export const WA_BARON_INSPECAO = wa(
  "Olá! Gostaria de agendar uma inspeção da *Aeronave Beechcraft Baron B58*.",
);

export const WA_HOME_FAZENDA = wa(
  "Olá! Tenho interesse na *Fazenda Jurema* (Sapezal – MT). Gostaria de mais informações.",
);

export const WA_HOME_BARON = wa(
  "Olá! Tenho interesse na *Aeronave Baron B58*. Gostaria de mais informações.",
);

export const WA_HOME_IMOVEIS = wa(
  "Olá! Tenho interesse nos imóveis da ATHS. Gostaria de ver o portfólio.",
);

export function openWhatsAppSite() {
  window.open(WA_GERAL, "_blank");
}

export function openWhatsAppInstagram() {
  window.open(
    wa("Vim do Instagram, quero tirar dúvidas!"),
    "_blank",
  );
}

export function buildWhatsAppUrl(message: string): string {
  return wa(message);
}
