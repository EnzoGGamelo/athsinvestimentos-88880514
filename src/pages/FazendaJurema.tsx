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
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Container,
  Droplets,
  Home as HomeIcon,
  Building,
  MapPin,
  MessageCircle,
  Mountain,
  Ruler,
  ShieldCheck,
  Sprout,
  Warehouse,
  Zap,
} from "lucide-react";
import { WA_FAZENDA_JUREMA, WA_FAZENDA_VISITA } from "@/lib/whatsapp";
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
import mapaReal from "@/assets/MAPAREAL.png";
import fazendaTerra from "@/assets/fazenda-terra.jpg";
import fazendaAerea from "@/assets/fazenda-aerea.jpg";

const overviewItems = [
  { icon: MapPin, label: "Localização", value: "Sapezal, MT" },
  { icon: MapPin, label: "Valor", value: "R$ 39.000.000,00" },
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

  const refOverview = useScrollReveal();
  const refMapa = useScrollReveal();
  const refGallery = useScrollReveal();
  const refBenf = useScrollReveal();
  const refDoc = useScrollReveal();
  const refFaq = useScrollReveal();
  const refContato = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[680px] overflow-hidden bg-slate-950 text-white">
        <img
          src={fazendaEstrada}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,13,12,0.93)_0%,rgba(4,13,12,0.72)_50%,rgba(4,13,12,0.30)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="motion-reveal-up text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a] mb-4">
              Ativo rural estratégico · Sapezal, MT
            </p>
            <h1 className="motion-reveal-up motion-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Fazenda Jurema
            </h1>
            <div className="motion-reveal-up motion-delay-2 flex flex-wrap gap-3 mb-10">
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">3.050 ha</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">R$ 39.000.000,00</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">Documentação em dia</span>
            </div>
            <div className="motion-reveal-up motion-delay-3 flex flex-wrap gap-4">
              <a
                href={WA_FAZENDA_JUREMA}
                target="_blank"
                rel="noreferrer"
                data-gtm="whatsapp-fazenda-hero-interesse"
                className="spotlight-sweep inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#d8b66a] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#e2c57e]"
              >
                Quero falar sobre esta fazenda
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WA_FAZENDA_VISITA}
                target="_blank"
                rel="noreferrer"
                data-gtm="whatsapp-fazenda-hero-visita"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                Solicitar visita técnica
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visão geral */}
      <section id="visao-geral" className="py-20 lg:py-28">
        <div ref={refOverview} className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Dados do ativo</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Visão geral da propriedade</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {overviewItems.map((item, i) => (
              <div
                key={item.label + item.value}
                className="reveal-item bg-white rounded-lg border border-slate-200 p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <item.icon className="h-6 w-6 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">{item.label}</p>
                  <p className="mt-1 font-semibold text-slate-950">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delimitação e área */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={refMapa} className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="mb-10 text-center reveal-item">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Mapa</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Delimitação e área da propriedade</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch mb-10 reveal-item">
            <div className="flex flex-col items-center lg:w-1/2 w-full">
              <img
                src={mapaReal}
                alt="Mapa aéreo com delimitação da Fazenda Jurema – 3.050 ha"
                className="rounded-lg w-full h-[560px] object-cover cursor-pointer border border-slate-200 hover:border-emerald-800/40 transition-all duration-300 hover:shadow-2xl"
                onClick={() => setLightboxIndex(galleryImages.length)}
              />
              <p className="text-center text-slate-500 text-sm mt-3 max-w-sm">
                Clique na imagem para ampliar o contorno com 3.050 hectares em Sapezal – MT.
              </p>
            </div>

            <div className="flex flex-col lg:w-1/2 w-full">
              <div className="bg-[#f6f3ec] rounded-lg border border-slate-200 p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-950 mb-8">Potencial produtivo</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: Mountain, title: "Teor de argila: 15 a 20", desc: "Solo com boa capacidade para cultivo agrícola." },
                    { icon: Mountain, title: "Altitude: 300 m", desc: "Condição favorável para diversas culturas." },
                    { icon: MapPin, title: "Acesso o ano todo", desc: "Logística facilitada em qualquer estação." },
                    { icon: Droplets, title: "Rio Sapezal na divisa", desc: "Recurso hídrico natural no limite da propriedade." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-emerald-800/20 transition-colors">
                      <item.icon className="h-6 w-6 text-emerald-800 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-950 text-sm">{item.title}</p>
                        <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-item rounded-lg overflow-hidden border border-slate-200 shadow-sm">
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
              className="flex items-center justify-center gap-2 py-3 bg-white text-emerald-800 text-sm font-semibold hover:text-emerald-700 transition"
            >
              Abrir no Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="fotos" className="py-20 lg:py-28">
        <div ref={refGallery} className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Fotos</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Imagens da propriedade</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="reveal-item rounded-lg w-full h-56 object-cover cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
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
          images={[...galleryImages, { src: mapaReal, alt: "Mapa aéreo da Fazenda Jurema" }]}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Benfeitorias */}
      <section id="benfeitorias" className="bg-white py-20 lg:py-28">
        <div ref={refBenf} className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Estrutura</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Benfeitorias</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {benfeitorias.map((b, i) => (
              <div
                key={b.text}
                className="reveal-item flex items-start gap-4 bg-[#f6f3ec] rounded-lg border border-slate-200 p-5 hover:shadow-sm transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <b.icon className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                <p className="text-slate-800 text-sm leading-6">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança documental — dark */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div ref={refDoc} className="container mx-auto px-4 lg:px-8 max-w-3xl text-center reveal-item">
          <ShieldCheck className="h-12 w-12 text-[#d8b66a] mx-auto mb-6" />
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a] mb-4">Documentação</p>
          <h2 className="text-4xl font-bold text-white mb-6">Segurança documental e visitação</h2>
          <div className="grid gap-3 sm:grid-cols-2 mb-8 text-left">
            {["Documentação em dia", "Registros completos", "Visitas agendadas", "Atendimento discreto"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                <CheckCircle2 className="h-4 w-4 text-[#d8b66a] shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-white/60 leading-7 mb-10 max-w-xl mx-auto text-sm">
            A documentação da Fazenda Jurema está em dia. A apresentação de documentos é realizada sob demanda, mediante
            atendimento consultivo. Visitas presenciais são agendadas com discrição.
          </p>
          <a
            href={WA_FAZENDA_VISITA}
            target="_blank"
            rel="noreferrer"
            data-gtm="whatsapp-fazenda-doc-visita"
            className="spotlight-sweep inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#d8b66a] px-8 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#e2c57e]"
          >
            <CalendarCheck className="h-4 w-4" />
            Agendar visita técnica
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-20 lg:py-28">
        <div ref={refFaq} className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="reveal-item">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Perguntas frequentes sobre a fazenda.</h2>
          </div>
          <Accordion type="single" collapsible className="reveal-item space-y-3">
            {faqItems.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg border border-slate-200 px-5 bg-[#f6f3ec]"
              >
                <AccordionTrigger className="text-left text-base font-bold text-slate-900 hover:text-emerald-800">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-slate-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contato direto */}
      <section id="contato" className="py-20 lg:py-28">
        <div ref={refContato} className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="reveal-item overflow-hidden rounded-lg bg-slate-950 text-white">
            <img src={fazendaCasa} alt="Casa da Fazenda Jurema" className="h-64 w-full object-cover opacity-80" />
            <div className="p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a]">Contato direto</p>
              <h2 className="mt-3 text-3xl font-bold">Conte o que procura. A equipe filtra o resto.</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Atendimento consultivo direto pelo WhatsApp. Sem formulários, sem espera.
              </p>
            </div>
          </div>

          <div className="reveal-item flex flex-col justify-center gap-4 rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">Atendimento direto</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Fale com um especialista</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Inicie a conversa pelo WhatsApp. A equipe ATHS apresenta os dados completos e organiza sua visita.
              </p>
            </div>
            <a
              href={WA_FAZENDA_JUREMA}
              target="_blank"
              rel="noreferrer"
              data-gtm="whatsapp-fazenda-cta-interesse"
              className="flex items-center justify-center gap-2 w-full rounded-md bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              <MessageCircle className="h-4 w-4" />
              Quero falar sobre esta fazenda
            </a>
            <a
              href={WA_FAZENDA_VISITA}
              target="_blank"
              rel="noreferrer"
              data-gtm="whatsapp-fazenda-cta-visita"
              className="flex items-center justify-center gap-2 w-full rounded-md border border-slate-200 bg-[#f6f3ec] px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-800/40 hover:bg-emerald-50 hover:text-emerald-900"
            >
              <CalendarCheck className="h-4 w-4" />
              Solicitar visita técnica
            </a>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default FazendaJurema;
