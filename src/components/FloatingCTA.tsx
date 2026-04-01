import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const phrases = [
  "Fale Com Um Consultor Agora",
  "Tire Suas Dúvidas Agora",
  "Atendimento Consultivo",
  "Negociação Segura",
];

const FloatingCTA = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="#formulario"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-3.5 font-sans font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl"
      style={{ background: "linear-gradient(135deg, #128C7E, #075E54, #1DA1F2)" }}
    >
      <MessageCircle size={22} className="shrink-0 animate-pulse" />
      <span
        className={`text-sm whitespace-nowrap transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {phrases[phraseIndex]}
      </span>
    </a>
  );
};

export default FloatingCTA;
