import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "Cheguei à ATHS buscando um imóvel residencial de alto padrão e saí com uma mansão que superou todas as minhas expectativas. O processo foi discreto, seguro e a documentação estava impecável desde o primeiro contato. Recomendo para quem quer seriedade em grandes negócios.",
    name: "Ricardo Almeida Fontes",
    role: "Empresário | Setor de Construção Civil",
    city: "São Paulo, SP",
    initials: "RA",
  },
  {
    text: "Adquiri um lote em área nobre por meio da ATHS e fiquei impressionado com o nível de organização e transparência da negociação. Documentação verificada, atendimento reservado e suporte até o final do processo. É um padrão diferente de qualquer intermediadora que já trabalhei.",
    name: "Marcelo Teixeira Drummond",
    role: "Diretor Comercial | Grupo Imobiliário",
    city: "Goiânia, GO",
    initials: "MT",
  },
  {
    text: "Cheguei até a Aths por indicação de um sócio e, honestamente, não sabia bem o que esperar. A propriedade que fechamos em Mato Grosso era exatamente o que eu procurava há quase dois anos. Documentação organizada, atendimento sem aquela pressão de vendedor — foi uma negociação adulta do começo ao fim.",
    name: "Augusto Henrique Moraes",
    role: "Produtor Rural e Investidor | Soja e Pecuária",
    city: "Cuiabá, MT",
    initials: "AH",
  },
  {
    text: "Comprei dois caminhões semirreboque pela ATHS para reforçar minha frota. O processo foi ágil, os veículos estavam regularizados e o atendimento consultivo me deu toda a segurança que preciso para transações desse porte. Com certeza voltarei para novas aquisições.",
    name: "Fábio Donizeti Carvalho",
    role: "Empresário de Transportes | Frota Própria",
    city: "Cascavel, PR",
    initials: "FD",
  },
  {
    text: "Estava buscando ampliar meu portfólio de terras e a ATHS apresentou um terreno com documentação em ordem e potencial de valorização real. O que me fidelizou foi a postura consultiva deles: sem pressão, com informação e com transparência do início ao fim.",
    name: "Patrícia Zanon Silveira",
    role: "Investidora Patrimonial | Real Estate e Agronegócio",
    city: "Porto Alegre, RS",
    initials: "PZ",
  },
  {
    text: "Já fiz três negócios com a ATHS: um terreno, uma propriedade rural e, recentemente, a aquisição de uma aeronave executiva. Em todos, a experiência foi de alto nível — atendimento qualificado, sigilo nas tratativas e total segurança documental.",
    name: "Eduardo Casagrande Vitti",
    role: "Sócio-Diretor | Holding de Investimentos",
    city: "Londrina, PR",
    initials: "EC",
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
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-white mb-4 text-center">O que dizem nossos clientes</h2>
        <div className="gold-line w-16 mx-auto mb-12" />

        <div className="relative">
          <button onClick={prev} className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 transition-colors">
            <ChevronLeft size={36} />
          </button>
          <button onClick={next} className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-10 transition-colors">
            <ChevronRight size={36} />
          </button>

          <div className="bg-card rounded-2xl shadow-xl p-6 md:p-10 min-h-[260px] flex flex-col transition-all duration-500">
            {/* Header: Avatar + Name + Stars */}
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                {t.initials}
              </div>
              <div className="flex-1">
                <p className="font-semibold font-sans text-foreground text-base">{t.name}</p>
                <p className="text-muted-foreground text-sm font-sans">{t.role} — {t.city}</p>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
              {/* Google "G" icon */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-1" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>

            {/* Review text */}
            <p className="text-foreground/80 font-sans text-sm md:text-base leading-relaxed flex-1">
              {t.text}
            </p>

            {/* Time ago */}
            <p className="text-muted-foreground text-xs font-sans mt-4">Há alguns meses</p>
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
