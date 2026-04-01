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
  Plane, Gauge, Paintbrush, Cog, Navigation, ShieldCheck,
  Armchair, Activity, Wrench, Eye, Fuel, Shield
} from "lucide-react";
import { redirectToWhatsApp } from "@/lib/whatsapp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "",
    finalidade: "", faixa: "", experiencia: "", prazo: "", contato: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirectToWhatsApp("Aeronave Beechcraft Baron B58", "Aeronave Baron B58", form);
  };

  const refSpecs = useScrollReveal();
  const refCockpit = useScrollReveal();
  const refCabin = useScrollReveal();
  const refInstruments = useScrollReveal();
  const refMotors = useScrollReveal();
  const refAvionics = useScrollReveal();
  const refCondition = useScrollReveal();
  const refFaq = useScrollReveal();
  const refForm = useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-navy navy-texture relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={baronSide} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-36 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="gold-line w-20 mb-8" />
            <h1 className="text-3xl md:text-5xl text-white leading-tight mb-6">
              Beechcraft Baron B58 | Aeronave executiva com configuração premium
            </h1>
            <div className="flex flex-wrap gap-4 text-white/70 text-sm font-sans mb-8">
              <span className="bg-white/10 px-3 py-1 rounded">Ano 1984</span>
              <span className="bg-white/10 px-3 py-1 rounded">R$ 3.500.000,00</span>
              <span className="bg-white/10 px-3 py-1 rounded">Pintura nova 2025</span>
              <span className="bg-white/10 px-3 py-1 rounded">Continental IO550 300 hp</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#formulario" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold font-sans hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Quero falar sobre esta aeronave
              </a>
              <a href="#formulario" className="border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold font-sans hover:border-gold hover:text-gold transition-all duration-300">
                Solicitar ficha técnica completa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de fotos externas */}
      <section className="bg-off-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-foreground mb-8 text-center">Galeria de imagens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {allImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="rounded-xl w-full h-48 object-cover cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
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
      <section id="resumo" className="bg-card py-20 lg:py-28">
        <div ref={refSpecs} className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Resumo técnico</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techSpecs.map((s, i) => (
              <div key={s.label} className="reveal-item bg-muted rounded-xl p-6 text-center hover:shadow-md transition-all duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="text-sm text-muted-foreground font-sans mb-1">{s.label}</p>
                <p className="font-semibold font-sans text-foreground text-lg">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cockpit — imagem + texto */}
      <section className="bg-off-white py-20 lg:py-28">
        <div ref={refCockpit} className="container mx-auto px-4 lg:px-8 max-w-6xl reveal-item">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src={baronCockpit}
              alt="Cockpit da Baron B58"
              className="rounded-xl w-full h-80 md:h-[420px] object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
              onClick={() => setLightboxIndex(3)}
            />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Gauge size={28} className="text-primary" />
                <h2 className="text-2xl md:text-3xl text-foreground">Cockpit completo e funcional</h2>
              </div>
              <div className="gold-line w-16 mb-6" />
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>O cockpit da Baron B58 é equipado com instrumentação analógica Beechcraft original, complementada por aviônicos modernos integrados — GPS, transponder Modo S e painel de navegação digital.</p>
                <p>Comandos duplos permitem operação por dois pilotos, ampliando segurança e flexibilidade operacional. A ergonomia do painel facilita a leitura rápida de todos os indicadores de voo.</p>
                <p>Os manetes de potência e mistura dos dois motores Continental IO550 ficam na posição central, permitindo controle preciso de cada motor independentemente.</p>
              </div>
              <a href="#formulario" className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold font-sans hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm">
                Solicitar detalhes do cockpit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cabine de passageiros — texto + imagem (invertido) */}
      <section className="bg-card py-20 lg:py-28">
        <div ref={refCabin} className="container mx-auto px-4 lg:px-8 max-w-6xl reveal-item">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Armchair size={28} className="text-primary" />
                <h2 className="text-2xl md:text-3xl text-foreground">Cabine executiva para até 6 ocupantes</h2>
              </div>
              <div className="gold-line w-16 mb-6" />
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>Interior em couro premium com assentos reclináveis tipo club, dispostos face a face para conforto máximo em viagens executivas. Cada poltrona possui cinto de segurança de 3 pontos.</p>
                <p>A cabine conta com ar-condicionado, iluminação interna, bagageiro acessível em voo e isolamento acústico que proporciona uma experiência silenciosa e confortável.</p>
                <p>Ideal para viagens de negócios, traslados familiares ou deslocamentos que exigem privacidade e agilidade operacional.</p>
              </div>
              <a href="#formulario" className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold font-sans hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm">
                Agendar visita à cabine
              </a>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-3">
              <img
                src={baronCabin}
                alt="Cabine de passageiros Baron B58"
                className="rounded-xl w-full h-52 md:h-64 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => setLightboxIndex(4)}
              />
              <img
                src={baronCabinRear}
                alt="Interior traseiro Baron B58"
                className="rounded-xl w-full h-52 md:h-64 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => setLightboxIndex(5)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instrumentação — imagem + texto */}
      <section className="bg-off-white py-20 lg:py-28">
        <div ref={refInstruments} className="container mx-auto px-4 lg:px-8 max-w-6xl reveal-item">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={baronPanel}
                alt="Painel completo Baron B58"
                className="rounded-xl w-full h-52 md:h-64 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => setLightboxIndex(6)}
              />
              <img
                src={baronInstruments}
                alt="Instrumentos do motor Baron B58"
                className="rounded-xl w-full h-52 md:h-64 object-cover cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => setLightboxIndex(7)}
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Activity size={28} className="text-primary" />
                <h2 className="text-2xl md:text-3xl text-foreground">Instrumentação e monitoramento</h2>
              </div>
              <div className="gold-line w-16 mb-6" />
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>Painel com instrumentos Beechcraft originais para monitoramento completo de ambos os motores: pressão de admissão (MAP), RPM, fluxo de combustível (fuel flow), temperatura de cabeça de cilindro (CHT) e temperatura de gases de escape (EGT).</p>
                <p>O monitoramento duplo — lado esquerdo e direito — garante que o piloto acompanhe em tempo real a performance individual de cada motor Continental IO550, facilitando a detecção precoce de qualquer anomalia.</p>
                <p>Indicadores de pressão e temperatura de óleo completam o painel, proporcionando visibilidade total da saúde mecânica da aeronave.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motorização e hélices */}
      <section className="bg-card py-20 lg:py-28">
        <div ref={refMotors} className="container mx-auto px-4 lg:px-8 max-w-4xl reveal-item">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Motorização e hélices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { side: "Lado esquerdo", motor: "40 h desde overhaul", helice: "0 h desde overhaul" },
              { side: "Lado direito", motor: "1.116 h desde overhaul", helice: "0 h desde overhaul" },
            ].map((s) => (
              <div key={s.side} className="bg-muted rounded-xl border border-border p-8">
                <h3 className="font-sans font-semibold text-foreground text-lg mb-6 flex items-center gap-2">
                  <Cog size={20} className="text-primary" /> {s.side}
                </h3>
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4">
                    <p className="text-sm text-muted-foreground font-sans">Motor</p>
                    <p className="font-sans font-semibold text-foreground">Continental IO550 300 hp</p>
                    <p className="text-sm text-primary font-sans">{s.motor}</p>
                  </div>
                  <div className="bg-card rounded-lg p-4">
                    <p className="text-sm text-muted-foreground font-sans">Hélice</p>
                    <p className="font-sans font-semibold text-foreground">Tri-pá</p>
                    <p className="text-sm text-primary font-sans">{s.helice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aviônicos */}
      <section className="bg-off-white py-20 lg:py-28">
        <div ref={refAvionics} className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Aviônicos e equipamentos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Navigation, title: "Navegação", items: ["GPS integrado", "VOR/ILS", "ADF"] },
              { icon: ShieldCheck, title: "Segurança", items: ["Transponder Modo S", "ELT"] },
              { icon: Armchair, title: "Conforto de cabine", items: ["Até 6 ocupantes", "Ar-condicionado"] },
              { icon: Activity, title: "Monitoramento", items: ["Engine monitor", "Fuel flow"] },
              { icon: Wrench, title: "Acessórios", items: ["Lista completa sob consulta"] },
            ].map((group, gi) => (
              <div key={group.title} className="reveal-item bg-card rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-border" style={{ transitionDelay: `${gi * 100}ms` }}>
                <group.icon size={24} className="text-primary mb-3" />
                <h3 className="font-sans font-semibold text-foreground mb-3">{group.title}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground font-sans flex items-start gap-2">
                      <span className="text-gold mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condição + Segurança documental */}
      <section className="bg-navy navy-texture py-20 lg:py-28">
        <div ref={refCondition} className="container mx-auto px-4 lg:px-8 max-w-3xl text-center reveal-item">
          <Paintbrush size={48} className="text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl text-white mb-6">Condição, documentação e visitação</h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <div className="space-y-4 text-white/70 font-sans leading-relaxed">
            <p>Pintura nova em 2025 com excelente apresentação. Cabine confortável para até 6 ocupantes, ideal para uso executivo.</p>
            <p>Documentação, histórico de manutenção e registros são apresentados sob atendimento consultivo. Inspeção e visita técnica podem ser agendadas com antecedência.</p>
          </div>
          <a href="#formulario" className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold font-sans hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            Agendar inspeção
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

      {/* Formulário */}
      <section id="formulario" className="bg-off-white py-20 lg:py-28 border-t border-border">
        <div ref={refForm} className="container mx-auto px-4 lg:px-8 max-w-2xl reveal-item">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">Fale com um consultor especializado</h2>
          <p className="text-muted-foreground text-center mb-12 font-sans">Preencha o formulário para iniciar a conversa sobre a Baron B58.</p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome completo" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" />
            <input type="email" placeholder="E-mail" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" />
            <input type="tel" placeholder="Telefone / WhatsApp" required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" />
            <select value={form.finalidade} onChange={(e) => setForm({ ...form, finalidade: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Você busca a aeronave para...</option>
              <option>Uso próprio</option>
              <option>Operação</option>
              <option>Investimento</option>
              <option>Revenda</option>
            </select>
            <select value={form.faixa} onChange={(e) => setForm({ ...form, faixa: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Faixa de investimento prevista</option>
              <option>Até R$ 2.000.000</option>
              <option>R$ 2.000.000 a R$ 5.000.000</option>
              <option>R$ 5.000.000 a R$ 10.000.000</option>
              <option>Acima de R$ 10.000.000</option>
            </select>
            <select value={form.experiencia} onChange={(e) => setForm({ ...form, experiencia: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Experiência com compra ou operação de aeronaves?</option>
              <option>Sim, já adquiri aeronaves</option>
              <option>Sim, opero aeronaves</option>
              <option>Não, primeira aquisição</option>
            </select>
            <select value={form.prazo} onChange={(e) => setForm({ ...form, prazo: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Em quanto tempo pretende avançar?</option>
              <option>Imediatamente</option>
              <option>Em até 30 dias</option>
              <option>Em até 90 dias</option>
              <option>Sem prazo definido</option>
            </select>
            <select value={form.contato} onChange={(e) => setForm({ ...form, contato: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Prefere receber contato por...</option>
              <option>Consultor comercial</option>
              <option>Ligação técnica</option>
              <option>WhatsApp executivo</option>
            </select>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-sans font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              Enviar e falar com consultor especializado
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AeronaveBaronB58;
