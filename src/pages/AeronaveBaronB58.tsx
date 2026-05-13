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
  Activity,
  ArrowRight,
  Armchair,
  CalendarCheck,
  CheckCircle2,
  Cog,
  Eye,
  Fuel,
  Gauge,
  MessageCircle,
  Navigation,
  Paintbrush,
  Plane,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import {
  WA_BARON_INTERESSE,
  WA_BARON_FICHA,
  WA_BARON_COCKPIT,
  WA_BARON_CABINE,
  WA_BARON_INSPECAO,
} from "@/lib/whatsapp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FloatingCTA from "@/components/FloatingCTA";

import baronSide from "@/assets/baron-side.jpg";
import baronFront from "@/assets/baron-front.jpg";
import baronAngle from "@/assets/baron-angle.jpg";
import baronCockpit from "@/assets/baron-cockpit.jpg";
import baronCabin from "@/assets/baron-cabin.jpg";
import baronCabinRear from "@/assets/baron-cabin-rear.jpg";
import baronPanel from "@/assets/baron-panel.jpg";
import baronInstruments from "@/assets/baron-instruments.jpg";

const techSpecs = [
  { label: "Modelo", value: "Baron B58" },
  { label: "Fabricante", value: "Beechcraft" },
  { label: "Ano", value: "1984" },
  { label: "Valor", value: "R$ 3.500.000,00" },
  { label: "Pintura", value: "Nova em 2025" },
  { label: "Horas de célula", value: "2.700 h" },
];

const faqItems = [
  { q: "Qual é o modelo, ano e valor da aeronave?", a: "Beechcraft Baron B58, ano 1984, valor R$ 3.500.000,00. Pintura nova em 2025, motorização Continental IO550 300 hp." },
  { q: "Quantas horas de voo de célula a aeronave possui?", a: "A aeronave possui 2.700 horas de voo de célula registradas." },
  { q: "Como estão motores e hélices em relação ao overhaul?", a: "Motor esquerdo: 40 h desde overhaul. Motor direito: 1.116 h. Hélices tri-pá: 0 h desde overhaul." },
  { q: "Quais aviônicos e equipamentos acompanham a aeronave?", a: "Equipamentos de navegação, segurança, conforto e monitoramento. Lista detalhada disponível sob atendimento consultivo." },
  { q: "É possível agendar visita ou inspeção?", a: "Sim. Inspeção e visita técnica podem ser agendadas com antecedência junto à equipe comercial da ATHS." },
];

const allImages = [
  { src: baronSide, alt: "Baron B58 — Vista lateral" },
  { src: baronFront, alt: "Baron B58 — Vista frontal" },
  { src: baronAngle, alt: "Baron B58 — Vista angular" },
  { src: baronCockpit, alt: "Baron B58 — Cockpit" },
  { src: baronCabin, alt: "Baron B58 — Cabine de passageiros" },
  { src: baronCabinRear, alt: "Baron B58 — Interior traseiro" },
  { src: baronPanel, alt: "Baron B58 — Painel completo" },
  { src: baronInstruments, alt: "Baron B58 — Instrumentos do motor" },
];

const AeronaveBaronB58 = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const refSpecs = useScrollReveal();
  const refCockpit = useScrollReveal();
  const refCabin = useScrollReveal();
  const refInstruments = useScrollReveal();
  const refMotors = useScrollReveal();
  const refAvionics = useScrollReveal();
  const refCondition = useScrollReveal();
  const refFaq = useScrollReveal();
  const refContato = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[680px] overflow-hidden bg-slate-950 text-white">
        <img
          src={baronSide}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,13,12,0.93)_0%,rgba(4,13,12,0.72)_50%,rgba(4,13,12,0.30)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="motion-reveal-up text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a] mb-4">
              Aeronave executiva · Configuração premium
            </p>
            <h1 className="motion-reveal-up motion-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Beechcraft Baron B58
            </h1>
            <div className="motion-reveal-up motion-delay-2 flex flex-wrap gap-3 mb-10">
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">Ano 1984</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">R$ 3.500.000,00</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">Pintura nova 2025</span>
              <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">Continental IO550 300 hp</span>
            </div>
            <div className="motion-reveal-up motion-delay-3 flex flex-wrap gap-4">
              <a
                href={WA_BARON_INTERESSE}
                target="_blank"
                rel="noreferrer"
                data-gtm="whatsapp-baron-hero-interesse"
                className="spotlight-sweep inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#d8b66a] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#e2c57e]"
              >
                Quero falar sobre esta aeronave
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WA_BARON_FICHA}
                target="_blank"
                rel="noreferrer"
                data-gtm="whatsapp-baron-hero-ficha"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                Solicitar ficha técnica
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Fotos</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Galeria de imagens</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {allImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="rounded-lg w-full h-48 object-cover cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                loading="lazy"
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* Resumo técnico */}
      <section id="resumo" className="bg-white py-20 lg:py-28">
        <div ref={refSpecs} className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Especificações</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Resumo técnico</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {techSpecs.map((s, i) => (
              <div
                key={s.label}
                className="reveal-item bg-[#f6f3ec] rounded-lg border border-slate-200 p-6 text-center hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-1">{s.label}</p>
                <p className="font-bold text-slate-950 text-lg">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cockpit */}
      <section className="py-20 lg:py-28">
        <div ref={refCockpit} className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="reveal-item grid md:grid-cols-2 gap-12 items-center">
            <img
              src={baronCockpit}
              alt="Cockpit da Baron B58"
              className="rounded-lg w-full h-80 md:h-[420px] object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-slate-200"
              onClick={() => setLightboxIndex(3)}
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800 mb-2">Cockpit</p>
              <h2 className="text-3xl font-bold text-slate-950 mb-6">Cockpit completo e funcional</h2>
              <div className="space-y-4 text-slate-600 leading-7 text-sm">
                <p>O cockpit da Baron B58 é equipado com instrumentação analógica Beechcraft original, complementada por aviônicos modernos integrados — GPS, transponder Modo S e painel de navegação digital.</p>
                <p>Comandos duplos permitem operação por dois pilotos, ampliando segurança e flexibilidade operacional. A ergonomia do painel facilita a leitura rápida de todos os indicadores de voo.</p>
                <p>Os manetes de potência e mistura dos dois motores Continental IO550 ficam na posição central, permitindo controle preciso de cada motor independentemente.</p>
              </div>
              <a
                href={WA_BARON_COCKPIT}
                target="_blank"
                rel="noreferrer"
                data-gtm="whatsapp-baron-cockpit"
                className="inline-flex items-center gap-2 mt-8 rounded-md bg-emerald-900 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar detalhes do cockpit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cabine */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={refCabin} className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="reveal-item grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800 mb-2">Cabine</p>
              <h2 className="text-3xl font-bold text-slate-950 mb-6">Cabine executiva para até 6 ocupantes</h2>
              <div className="space-y-4 text-slate-600 leading-7 text-sm">
                <p>Interior em couro premium com assentos reclináveis tipo club, dispostos face a face para conforto máximo em viagens executivas. Cada poltrona possui cinto de segurança de 3 pontos.</p>
                <p>A cabine conta com ar-condicionado, iluminação interna, bagageiro acessível em voo e isolamento acústico que proporciona uma experiência silenciosa e confortável.</p>
                <p>Ideal para viagens de negócios, traslados familiares ou deslocamentos que exigem privacidade e agilidade operacional.</p>
              </div>
              <a
                href={WA_BARON_CABINE}
                target="_blank"
                rel="noreferrer"
                data-gtm="whatsapp-baron-cabine"
                className="inline-flex items-center gap-2 mt-8 rounded-md bg-emerald-900 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                <CalendarCheck className="h-4 w-4" />
                Agendar visita à cabine
              </a>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-3">
              <img
                src={baronCabin}
                alt="Cabine de passageiros Baron B58"
                className="rounded-lg w-full h-52 md:h-64 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => setLightboxIndex(4)}
              />
              <img
                src={baronCabinRear}
                alt="Interior traseiro Baron B58"
                className="rounded-lg w-full h-52 md:h-64 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => setLightboxIndex(5)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instrumentação */}
      <section className="py-20 lg:py-28">
        <div ref={refInstruments} className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="reveal-item grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={baronPanel}
                alt="Painel completo Baron B58"
                className="rounded-lg w-full h-52 md:h-64 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => setLightboxIndex(6)}
              />
              <img
                src={baronInstruments}
                alt="Instrumentos do motor Baron B58"
                className="rounded-lg w-full h-52 md:h-64 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => setLightboxIndex(7)}
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800 mb-2">Painel</p>
              <h2 className="text-3xl font-bold text-slate-950 mb-6">Instrumentação e monitoramento</h2>
              <div className="space-y-4 text-slate-600 leading-7 text-sm">
                <p>Painel com instrumentos Beechcraft originais para monitoramento completo de ambos os motores: pressão de admissão (MAP), RPM, fluxo de combustível (fuel flow), temperatura de cabeça de cilindro (CHT) e temperatura de gases de escape (EGT).</p>
                <p>O monitoramento duplo garante que o piloto acompanhe em tempo real a performance individual de cada motor Continental IO550, facilitando a detecção precoce de qualquer anomalia.</p>
                <p>Indicadores de pressão e temperatura de óleo completam o painel, proporcionando visibilidade total da saúde mecânica da aeronave.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motorização */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={refMotors} className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Propulsão</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Motorização e hélices</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { side: "Lado esquerdo", motor: "40 h desde overhaul", helice: "0 h desde overhaul" },
              { side: "Lado direito", motor: "1.116 h desde overhaul", helice: "0 h desde overhaul" },
            ].map((s) => (
              <div key={s.side} className="reveal-item bg-[#f6f3ec] rounded-lg border border-slate-200 p-8">
                <h3 className="font-bold text-slate-950 text-lg mb-6 flex items-center gap-2">
                  <Cog className="h-5 w-5 text-emerald-800" /> {s.side}
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg border border-slate-200 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-1">Motor</p>
                    <p className="font-bold text-slate-950">Continental IO550 300 hp</p>
                    <p className="text-sm text-emerald-800 font-semibold mt-1">{s.motor}</p>
                  </div>
                  <div className="bg-white rounded-lg border border-slate-200 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-1">Hélice</p>
                    <p className="font-bold text-slate-950">Tri-pá</p>
                    <p className="text-sm text-emerald-800 font-semibold mt-1">{s.helice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aviônicos */}
      <section className="py-20 lg:py-28">
        <div ref={refAvionics} className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Equipamentos</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Aviônicos e equipamentos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Navigation, title: "Navegação", items: ["GPS integrado", "VOR/ILS", "ADF"] },
              { icon: ShieldCheck, title: "Segurança", items: ["Transponder Modo S", "ELT"] },
              { icon: Armchair, title: "Conforto de cabine", items: ["Até 6 ocupantes", "Ar-condicionado"] },
              { icon: Activity, title: "Monitoramento", items: ["Engine monitor", "Fuel flow"] },
              { icon: Wrench, title: "Acessórios", items: ["Lista completa sob consulta"] },
            ].map((group, gi) => (
              <div
                key={group.title}
                className="reveal-item bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-all duration-300"
                style={{ transitionDelay: `${gi * 100}ms` }}
              >
                <group.icon className="h-6 w-6 text-emerald-800 mb-3" />
                <h3 className="font-bold text-slate-950 mb-3">{group.title}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-[#d8b66a] mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condição + Documentação — dark */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div ref={refCondition} className="container mx-auto px-4 lg:px-8 max-w-3xl text-center reveal-item">
          <Paintbrush className="h-12 w-12 text-[#d8b66a] mx-auto mb-6" />
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a] mb-4">Condição</p>
          <h2 className="text-4xl font-bold text-white mb-6">Condição, documentação e visitação</h2>
          <div className="grid gap-3 sm:grid-cols-2 mb-8 text-left max-w-md mx-auto">
            {["Pintura nova 2025", "Documentação completa", "Inspeção agendável", "Histórico de manutenção"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                <CheckCircle2 className="h-4 w-4 text-[#d8b66a] shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-white/60 leading-7 mb-10 max-w-xl mx-auto text-sm">
            Pintura nova em 2025 com excelente apresentação. Cabine confortável para até 6 ocupantes, ideal para uso executivo.
            Documentação, histórico de manutenção e registros são apresentados sob atendimento consultivo.
          </p>
          <a
            href={WA_BARON_INSPECAO}
            target="_blank"
            rel="noreferrer"
            data-gtm="whatsapp-baron-inspecao"
            className="spotlight-sweep inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#d8b66a] px-8 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#e2c57e]"
          >
            <CalendarCheck className="h-4 w-4" />
            Agendar inspeção
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-20 lg:py-28">
        <div ref={refFaq} className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="reveal-item">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950">Perguntas frequentes sobre a aeronave.</h2>
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
            <img src={baronAngle} alt="Beechcraft Baron B58" className="h-64 w-full object-cover opacity-80" />
            <div className="p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a]">Contato direto</p>
              <h2 className="mt-3 text-3xl font-bold">Fale com um consultor especializado.</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                A equipe ATHS apresenta a ficha técnica completa e organiza a inspeção da Baron B58.
              </p>
            </div>
          </div>

          <div className="reveal-item flex flex-col justify-center gap-4 rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">Atendimento direto</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Inicie a conversa</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Escolha como prefere começar — solicite a ficha técnica ou inicie a conversa com o consultor.
              </p>
            </div>
            <a
              href={WA_BARON_INTERESSE}
              target="_blank"
              rel="noreferrer"
              data-gtm="whatsapp-baron-cta-interesse"
              className="flex items-center justify-center gap-2 w-full rounded-md bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              <MessageCircle className="h-4 w-4" />
              Quero falar sobre esta aeronave
            </a>
            <a
              href={WA_BARON_FICHA}
              target="_blank"
              rel="noreferrer"
              data-gtm="whatsapp-baron-cta-ficha"
              className="flex items-center justify-center gap-2 w-full rounded-md border border-slate-200 bg-[#f6f3ec] px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-800/40 hover:bg-emerald-50 hover:text-emerald-900"
            >
              <Eye className="h-4 w-4" />
              Solicitar ficha técnica
            </a>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default AeronaveBaronB58;
