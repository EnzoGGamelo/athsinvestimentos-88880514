const WHATSAPP_NUMBER = "5543928388021";

export function redirectToWhatsApp(productInterest: string, pageName: string) {
  const message = encodeURIComponent(
    `Olá! Vi um anúncio e gostaria de negociar o "${productInterest}" que vi no site! (Página: ${pageName})`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
}
