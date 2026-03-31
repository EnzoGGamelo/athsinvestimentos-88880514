import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Cheguei à ATHS buscando um imóvel residencial de alto padrão e saí com uma mansão que superou todas as minhas expectativas. O processo foi discreto, seguro e a documentação estava impecável desde o primeiro contato. Recomendo para quem quer seriedade em grandes negócios.",
    name: "Ricardo Almeida Fontes",
    role: "Empresário | Setor de Construção Civil",
    city: "São Paulo, SP",
  },
  {
    text: "Adquiri um lote em área nobre por meio da ATHS e fiquei impressionado com o nível de organização e transparência da negociação. Documentação verificada, atendimento reservado e suporte até o final do processo. É um padrão diferente de qualquer intermediadora que já trabalhei.",
    name: "Marcelo Teixeira Drummond",
    role: "Diretor Comercial | Grupo Imobiliário",
    city: "Goiânia, GO",
  },
  {
    text: "Fechei a compra de uma fazenda produtiva em Mato Grosso com a ATHS e o diferencial foi claro: eles já chegaram com o ativo selecionado, documentado e pronto para visita técnica. Para quem investe no agro, esse nível de segurança faz toda a diferença na tomada de decisão.",
    name: "Augusto Henrique Moraes",
    role: "Produtor Rural e Investidor | Soja e Pecuária",
    city: "Cuiabá, MT",
  },
  {
    text: "Comprei dois caminhões semirreboque pela ATHS para reforçar minha frota. O processo foi ágil, os veículos estavam regularizados e o atendimento consultivo me deu toda a segurança que preciso para transações desse porte. Com certeza voltarei para novas aquisições.",
    name: "Fábio Donizeti Carvalho",
    role: "Empresário de Transportes | Frota Própria",
    city: "Cascavel, PR",
  },
  {
    text: "Estava buscando ampliar meu portfólio de terras e a ATHS apresentou um terreno com documentação em ordem e potencial de valorização real. O que me fidelizou foi a postura consultiva deles: sem pressão, com informação e com transparência do início ao fim.",
    name: "Patrícia Zanon Silveira",
    role: "Investidora Patrimonial | Real Estate e Agronegócio",
    city: "Porto Alegre, RS",
  },
  {
    text: "Já fiz três negócios com a ATHS: um terreno, uma propriedade rural e, recentemente, a aquisição de uma aeronave executiva. Em todos, a experiência foi de alto nível — atendimento qualificado, sigilo nas tratativas e total segurança documental.",
    name: "Eduardo Casagrande Vitti",
    role: "Sócio-Diretor | Holding de Investimentos",
    city: "Londrina, PR",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => { setIsAutoPlaying(false); setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)); };
  const next = () => { setIsAutoPlaying(false); setCurrent((c) => (c + 1) % testimonials.length); };

  const t = testimonials[current];

  return (
    <section className="bg-navy navy-texture py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-white mb-4 text-center">O que dizem nossos clientes</h2>
        <div className="gold-line w-16 mx-auto mb-12" />

        <div className="relative">
          <button onClick={prev} className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 transition-colors">
            <ChevronLeft size={36} />
          </button>
          <button onClick={next} className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 transition-colors">
            <ChevronRight size={36} />
          </button>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 text-center min-h-[280px] flex flex-col items-center justify-center transition-all duration-500">
            <Quote size={32} className="text-gold/40 mb-6" />
            <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed mb-8 italic max-w-2xl">
              "{t.text}"
            </p>
            <div>
              <p className="text-white font-semibold font-sans">{t.name}</p>
              <p className="text-white/50 text-sm font-sans">{t.role}</p>
              <p className="text-gold/60 text-xs font-sans mt-1">{t.city}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-gold w-6" : "bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
