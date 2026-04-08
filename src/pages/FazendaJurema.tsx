import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin, DollarSign, Ruler, Sprout, Mountain, Droplets, Zap,
  Home as HomeIcon, Building, Container, Warehouse, ShieldCheck, CalendarCheck
} from "lucide-react";
import { redirectToWhatsApp } from "@/lib/whatsapp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FloatingCTA from "@/components/FloatingCTA";

import fazendaCampo from "@/assets/fazenda-campo.jpg";
import fazendaCasa from "@/assets/fazenda-casa.jpg";
import fazendaBarracao from "@/assets/fazenda-barracao.jpg";
import fazendaEstrada from "@/assets/fazenda-estrada.jpg";
import fazendaContainer from "@/assets/fazenda-container.jpg";
import fazendaGaragem from "@/assets/fazenda-garagem.jpg";
import fazendaBarracaoNew from "@/assets/fazenda-barracao-new.jpg";
import fazendaCasa1 from "@/assets/fazenda-casa-1.jpg";
import fazendaCasa2 from "@/assets/fazenda-casa-2.jpg";
import fazendaMapa from "@/assets/fazenda-mapa.jpg";
import fazendaTerra from "@/assets/fazenda-terra.jpg";
import fazendaAerea from "@/assets/fazenda-aerea.jpg";

const overviewItems = [
  { icon: MapPin, label: "Localização", value: "Sapezal, MT" },
  { icon: DollarSign, label: "Valor", value: "R$ 39.000.000,00" },
  { icon: Ruler, label: "Área total", value: "3.050 ha" },
  { icon: Sprout, label: "Área aberta para lavoura", value: "500 ha" },
  { icon: Sprout, label: "Área em preparo", value: "300 ha" },
  { icon: Sprout, label: "Potencial de abertura", value: "600 ha" },
];

const benfeitorias = [
  { icon: HomeIcon, text: "Casa pré-moldada com dois quartos, cozinha e varanda" },
  { icon: Building, text: "Alojamento pré-moldado com quatro quartos, dois banheiros e varanda" },
  { icon: HomeIcon, text: "Casa de alvenaria com dois quartos, banheiro, sala, cozinha e varanda" },
  { icon: Warehouse, text: "Barracão de 900 m²" },
  { icon: Container, text: "Containers de apoio" },
  { icon: Droplets, text: "Poço de água" },
  { icon: Zap, text: "Energia elétrica monofásica" },
];

const faqItems = [
  { q: "A documentação da Fazenda Jurema está regularizada?", a: "Sim. A documentação da propriedade encontra-se em dia. Detalhes específicos são apresentados sob demanda, mediante atendimento consultivo." },
  { q: "Qual é a área total e a área com potencial agrícola?", a: "A Fazenda Jurema possui área total de 3.050 ha, sendo 500 ha de área aberta pronta para lavoura, 300 ha em preparo e potencial adicional de abertura de 600 ha." },
  { q: "A fazenda possui acesso durante todo o ano?", a: "Sim. A propriedade conta com acesso o ano todo, facilitando a logística de operação e visitação." },
  { q: "Há benfeitorias e estrutura de apoio na propriedade?", a: "Sim. A fazenda possui casas, alojamento, barracão de 900 m², containers de apoio, poço de água e energia elétrica." },
  { q: "É possível realizar visita presencial ou técnica?", a: "Sim. As visitas são realizadas mediante agendamento prévio com a equipe comercial da ATHS." },
];

const galleryImages = [
  { src: fazendaBarracaoNew, alt: "Barracão da Fazenda Jurema" },
  { src: fazendaTerra, alt: "Terreno da Fazenda Jurema" },
  { src: fazendaAerea, alt: "Vista aérea da Fazenda Jurema" },
  { src: fazendaCasa1, alt: "Casa principal da Fazenda Jurema" },
  { src: fazendaCasa2, alt: "Segunda casa da Fazenda Jurema" },
  { src: fazendaCampo, alt: "Campo da Fazenda Jurema" },
  { src: fazendaBarracao, alt: "Estrutura da Fazenda Jurema" },
  { src: fazendaEstrada, alt: "Acesso à Fazenda Jurema" },
  { src: fazendaContainer, alt: "Containers de apoio" },
  { src: fazendaGaragem, alt: "Garagem da Fazenda Jurema" },
];

const FazendaJurema = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [form, setForm] = useState({
    nome: "", telefone: "",
    finalidade: "", faixa: "", tipo: "", prazo: "", experiencia: "", contato: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirectToWhatsApp("Fazenda Jurema (Sapezal – MT)", "Fazenda Jurema", form);
  };

  const refOverview = useScrollReveal();
  const refPotencial = useScrollReveal();
  const refMapa = useScrollReveal();
  const refGallery = useScrollReveal();
  const refBenf = useScrollReveal();
  const refDoc = useScrollReveal();
  const refFaq = useScrollReveal();
  const refForm = useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-navy navy-texture relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={fazendaEstrada} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-36 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="gold-line w-20 mb-8" />
            <h1 className="text-3xl md:text-5xl text-white leading-tight mb-6">
              Fazenda Jurema | Ativo rural estratégico em Sapezal – MT
            </h1>
            <div className="flex flex-wrap gap-4 text-white/70 text-sm font-sans mb-8">
              <span className="bg-white/10 px-3 py-1 rounded">3.050 ha</span>
              <span className="bg-white/10 px-3 py-1 rounded">R$ 39.000.000,00</span>
              <span className="bg-white/10 px-3 py-1 rounded">Documentação em dia</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#formulario" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold font-sans hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Quero falar sobre esta fazenda
              </a>
              <a href="#formulario" className="border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold font-sans hover:border-gold hover:text-gold transition-all duration-300">
                Solicitar visita técnica
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visão geral */}
      <section id="visao-geral" className="bg-off-white py-20 lg:py-28">
        <div ref={refOverview} className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Visão geral do ativo</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {overviewItems.map((item, i) => (
              <div key={item.label + item.value} className="reveal-item bg-card rounded-xl p-6 border border-border flex items-start gap-4 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
                <item.icon size={24} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground font-sans">{item.label}</p>
                  <p className="font-semibold font-sans text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Mapa aéreo com delimitação */}
      {/* Mapa aéreo com delimitação */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={fazendaMapa}
            alt=""
            className="w-full h-full object-cover -rotate-90 scale-150 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
        </div>

        <div ref={refMapa} className="container mx-auto px-4 lg:px-8 max-w-5xl reveal-item relative z-10">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">Delimitação e área da propriedade</h2>
          <div className="gold-line w-16 mx-auto mb-10" />

          <p className="text-center text-muted-foreground font-sans max-w-2xl mx-auto mb-10">
            Clique na imagem para ampliar e visualizar o contorno da propriedade com 3.050 hectares em Sapezal – MT.
          </p>

          {/* Clickable image centered */}
          <div className="flex justify-center mb-12">
            <img
              src={fazendaMapa}
              alt="Mapa aéreo com delimitação da Fazenda Jurema – 3.050 ha"
              className="rounded-xl max-w-md w-full object-contain cursor-pointer border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl -rotate-90"
              onClick={() => setLightboxIndex(galleryImages.length)}
            />
          </div>

          {/* Potencial produtivo */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border space-y-5 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground font-sans text-center">Potencial produtivo</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Mountain, title: "Teor de argila: 15 a 20", desc: "Solo com boa capacidade para cultivo agrícola." },
                { icon: Mountain, title: "Altitude: 300 m", desc: "Condição favorável para diversas culturas." },
                { icon: MapPin, title: "Acesso o ano todo", desc: "Logística facilitada em qualquer estação." },
                { icon: Droplets, title: "Rio Sapezal na divisa", desc: "Recurso hídrico natural no limite da propriedade." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center gap-2 p-4 bg-muted/60 rounded-lg">
                  <item.icon size={22} className="text-primary" />
                  <p className="font-sans font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden border border-border shadow-md max-w-4xl mx-auto mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15000!2d-58.8!3d-13.5!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzAwLjAiUyA1OMKwNDgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Fazenda Jurema – Sapezal, MT"
            />
            <a
              href="https://maps.app.goo.gl/Ryi8trC7n4ezVNqKA"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 bg-card text-primary text-sm font-sans font-medium hover:underline"
            >
              Abrir no Maps ↗
            </a>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="fotos" className="bg-card py-20 lg:py-28">
        <div ref={refGallery} className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Imagens da propriedade</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="reveal-item rounded-xl w-full h-56 object-cover cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                loading="lazy"
                onClick={() => setLightboxIndex(i)}
                style={{ transitionDelay: `${i * 60}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={[...galleryImages, { src: fazendaMapa, alt: "Mapa aéreo da Fazenda Jurema" }]}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Benfeitorias */}
      <section id="benfeitorias" className="bg-off-white py-20 lg:py-28">
        <div ref={refBenf} className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Benfeitorias</h2>
          <div className="space-y-4">
            {benfeitorias.map((b, i) => (
              <div key={b.text} className="reveal-item flex items-start gap-4 bg-card rounded-lg p-5 hover:shadow-md transition-all duration-300" style={{ transitionDelay: `${i * 60}ms` }}>
                <b.icon size={22} className="text-primary shrink-0 mt-0.5" />
                <p className="font-sans text-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança documental + Visitação combinados */}
      <section className="bg-navy navy-texture py-20 lg:py-28">
        <div ref={refDoc} className="container mx-auto px-4 lg:px-8 max-w-3xl text-center reveal-item">
          <ShieldCheck size={48} className="text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl text-white mb-6">Segurança documental e visitação</h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            A documentação da Fazenda Jurema está em dia. A apresentação de documentos é realizada sob demanda, mediante atendimento consultivo, com transparência e suporte completo.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-8">
            Visitas presenciais e técnicas são realizadas mediante agendamento prévio. A ATHS atua com discrição e reserva de informações sensíveis.
          </p>
          <a href="#formulario" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold font-sans hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            Agendar visita técnica
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-card py-20 lg:py-28">
        <div ref={refFaq} className="container mx-auto px-4 lg:px-8 max-w-3xl reveal-item">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-6">
                <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans text-sm leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Formulário único — específico Fazenda */}
      <section id="formulario" className="bg-off-white py-20 lg:py-28 border-t border-border">
        <div ref={refForm} className="container mx-auto px-4 lg:px-8 max-w-2xl reveal-item">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">Fale com um especialista</h2>
          <p className="text-muted-foreground text-center mb-12 font-sans">Preencha o formulário para iniciar a conversa sobre a Fazenda Jurema.</p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome completo" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" />
            <input type="tel" placeholder="Telefone / WhatsApp" required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" />
            <select required value={form.finalidade} onChange={(e) => setForm({ ...form, finalidade: e.target.value })} className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Você busca a propriedade para...</option>
              <option>Operação agrícola</option>
              <option>Investimento patrimonial</option>
              <option>Expansão de portfólio</option>
              <option>Outro</option>
            </select>
            <select value={form.faixa} onChange={(e) => setForm({ ...form, faixa: e.target.value })} className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Faixa de investimento estimada</option>
              <option>Até R$ 10.000.000</option>
              <option>R$ 10.000.000 a R$ 30.000.000</option>
              <option>R$ 30.000.000 a R$ 50.000.000</option>
              <option>Acima de R$ 50.000.000</option>
            </select>
            <select value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })} className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Pretende comprar como...</option>
              <option>Pessoa física</option>
              <option>Pessoa jurídica</option>
              <option>Grupo investidor</option>
            </select>
            <select value={form.prazo} onChange={(e) => setForm({ ...form, prazo: e.target.value })} className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Em quanto tempo pretende avançar?</option>
              <option>Imediatamente</option>
              <option>Em até 30 dias</option>
              <option>Em até 90 dias</option>
              <option>Sem prazo definido</option>
            </select>
            <select value={form.experiencia} onChange={(e) => setForm({ ...form, experiencia: e.target.value })} className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Já adquiriu propriedade rural acima de R$ 10 milhões?</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
            <select value={form.contato} onChange={(e) => setForm({ ...form, contato: e.target.value })} className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Prefere receber contato por...</option>
              <option>Ligação</option>
              <option>WhatsApp</option>
            </select>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-sans font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              Enviar e falar com especialista em imóveis rurais
            </button>
          </form>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default FazendaJurema;
