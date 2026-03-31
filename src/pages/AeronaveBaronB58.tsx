import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Plane, Gauge, Paintbrush, Clock, Cog, Navigation, ShieldCheck,
  Armchair, Activity, Wrench, CalendarCheck
} from "lucide-react";
import { redirectToWhatsApp } from "@/lib/whatsapp";

import baronSide from "@/assets/baron-side.jpg";
import baronFront from "@/assets/baron-front.jpg";
import baronAngle from "@/assets/baron-angle.jpg";

const techSpecs = [
  { label: "Modelo", value: "Baron B58" },
  { label: "Fabricante", value: "Beechcraft" },
  { label: "Ano", value: "1984" },
  { label: "Valor", value: "R$ 3.500.000,00" },
  { label: "Pintura", value: "Nova em 2025" },
  { label: "Horas de célula", value: "2.700 h" },
];

const faqItems = [
  { q: "Qual é o modelo, ano e valor da aeronave?", a: "Trata-se de uma Beechcraft Baron B58, ano 1984, com valor de R$ 3.500.000,00. A aeronave recebeu pintura nova em 2025 e conta com motorização Continental IO550 300 hp." },
  { q: "Quantas horas de voo de célula a aeronave possui?", a: "A aeronave possui 2.700 horas de voo de célula registradas." },
  { q: "Como estão motores e hélices em relação ao overhaul?", a: "O motor esquerdo possui 40 h desde o overhaul e o motor direito 1.116 h. Ambas as hélices tri-pá possuem 0 h desde o overhaul." },
  { q: "Quais aviônicos e equipamentos acompanham a aeronave?", a: "A aeronave conta com equipamentos de navegação, segurança, conforto de cabine e monitoramento. A lista detalhada é apresentada sob demanda durante o atendimento consultivo." },
  { q: "É possível solicitar atendimento e agendar visita ou inspeção?", a: "Sim. Inspeção e visita técnica podem ser agendadas com antecedência junto à equipe comercial da ATHS. Todo o processo é conduzido com discrição e profissionalismo." },
];

const AeronaveBaronB58 = () => {
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "",
    finalidade: "", faixa: "", experiencia: "", prazo: "", contato: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirectToWhatsApp("Aeronave Beechcraft Baron B58", "Aeronave Baron B58");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-navy navy-texture relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={baronSide} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-36 relative z-10">
          <div className="max-w-3xl">
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
              <a href="#formulario" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold font-sans hover:bg-primary/90 transition-colors">
                Quero falar sobre esta aeronave
              </a>
              <a href="#formulario" className="border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold font-sans hover:border-gold hover:text-gold transition-colors">
                Solicitar ficha técnica completa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section className="bg-off-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[baronSide, baronFront, baronAngle].map((img, i) => (
              <img key={i} src={img} alt={`Baron B58 - Imagem ${i + 1}`} className="rounded-xl w-full h-56 object-cover" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Resumo técnico */}
      <section id="resumo" className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Resumo técnico</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techSpecs.map((s) => (
              <div key={s.label} className="bg-muted rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground font-sans mb-1">{s.label}</p>
                <p className="font-semibold font-sans text-foreground text-lg">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motorização e hélices */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Motorização e hélices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-sans font-semibold text-foreground text-lg mb-6 flex items-center gap-2">
                <Cog size={20} className="text-primary" /> Lado esquerdo
              </h3>
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground font-sans">Motor</p>
                  <p className="font-sans font-semibold text-foreground">Continental IO550 300 hp</p>
                  <p className="text-sm text-primary font-sans">40 h desde overhaul</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground font-sans">Hélice</p>
                  <p className="font-sans font-semibold text-foreground">Tri-pá</p>
                  <p className="text-sm text-primary font-sans">0 h desde overhaul</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-sans font-semibold text-foreground text-lg mb-6 flex items-center gap-2">
                <Cog size={20} className="text-primary" /> Lado direito
              </h3>
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground font-sans">Motor</p>
                  <p className="font-sans font-semibold text-foreground">Continental IO550 300 hp</p>
                  <p className="text-sm text-primary font-sans">1.116 h desde overhaul</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground font-sans">Hélice</p>
                  <p className="font-sans font-semibold text-foreground">Tri-pá</p>
                  <p className="text-sm text-primary font-sans">0 h desde overhaul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviônicos */}
      <section className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Aviônicos e equipamentos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Navigation, title: "Navegação", items: ["GPS integrado", "VOR/ILS", "ADF", "Listar demais sistemas de navegação instalados"] },
              { icon: ShieldCheck, title: "Segurança", items: ["Transponder Modo S", "ELT", "Listar demais equipamentos de segurança"] },
              { icon: Armchair, title: "Conforto de cabine", items: ["Até 6 ocupantes", "Ar-condicionado", "Listar demais itens de conforto"] },
              { icon: Activity, title: "Monitoramento", items: ["Engine monitor", "Fuel flow", "Listar demais instrumentos de monitoramento"] },
              { icon: Wrench, title: "Acessórios", items: ["Listar acessórios adicionais da aeronave"] },
            ].map((group) => (
              <div key={group.title} className="bg-muted rounded-xl p-6">
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

      {/* Condição e valor percebido */}
      <section className="bg-navy navy-texture py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <Paintbrush size={48} className="text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl text-white mb-6">Condição e valor percebido</h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <div className="space-y-4 text-white/70 font-sans leading-relaxed">
            <p>Pintura nova realizada em 2025, com excelente apresentação externa. Cabine confortável e adequada a uso executivo, com capacidade para até 6 ocupantes.</p>
            <p>A Baron B58 é reconhecida pelo equilíbrio entre performance, segurança e versatilidade de operação, sendo uma escolha consagrada entre operadores e investidores do segmento de aviação executiva.</p>
          </div>
        </div>
      </section>

      {/* Segurança documental */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <CalendarCheck size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">Segurança documental e visitação</h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-4">
            Detalhes de documentação, histórico de manutenção e registros podem ser apresentados sob atendimento consultivo. A ATHS realiza conferência de informações e apresenta toda a documentação durante o processo de negociação.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Inspeção e visita técnica podem ser agendadas com antecedência junto à equipe comercial.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-12 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-6">
                <AccordionTrigger className="text-left font-sans font-medium text-foreground hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className="bg-off-white py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">Fale com um consultor especializado</h2>
          <p className="text-muted-foreground text-center mb-12 font-sans">Preencha o formulário para iniciar a conversa sobre a Baron B58.</p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome completo" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="E-mail" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="tel" placeholder="Telefone / WhatsApp" required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="w-full border border-border bg-card rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
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
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-sans font-semibold hover:bg-primary/90 transition-colors">
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
