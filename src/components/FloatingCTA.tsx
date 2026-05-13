import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const phrases = ["Fale com consultor", "Atendimento direto", "Tire suas dúvidas"];

const FloatingCTA = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setVisible(true);
      }, 250);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/554792838021?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20ATHS%20e%20gostaria%20de%20falar%20com%20um%20consultor."
      target="_blank"
      rel="noreferrer"
      data-gtm="whatsapp-floating-cta"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-md border border-white/20 bg-emerald-900 p-3 text-sm font-bold text-white shadow-2xl shadow-slate-950/25 transition hover:-translate-y-0.5 hover:bg-emerald-800 sm:bottom-5 sm:right-5 sm:px-4"
      aria-label="Falar com consultor"
    >
      <MessageCircle size={20} className="shrink-0" />
      <span className={`hidden whitespace-nowrap transition duration-200 sm:inline ${visible ? "opacity-100" : "opacity-0"}`}>
        {phrases[phraseIndex]}
      </span>
    </a>
  );
};

export default FloatingCTA;
