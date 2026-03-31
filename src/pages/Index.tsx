import { Link } from "react-router-dom";
import {
  Shield, FileCheck, Users, CalendarCheck, Handshake,
  Truck, Trees, Plane, Home, Castle,
  CheckCircle, Search, ClipboardCheck, Eye, ShieldCheck,
  Linkedin, Instagram
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import baronImg from "@/assets/baron-side.jpg";
import fazendaImg from "@/assets/fazenda-campo.jpg";

const badges = [
  { icon: FileCheck, text: "Ativos documentados" },
  { icon: Shield, text: "Negociação com transparência" },
  { icon: Users, text: "Atendimento consultivo" },
  { icon: CalendarCheck, text: "Visitação sob agendamento" },
];

const categories = [
  { icon: Truck, title: "Caminhões", desc: "Veículos pesados selecionados, com documentação verificada e histórico rastreável." },
  { icon: Trees, title: "Fazendas", desc: "Propriedades rurais estratégicas, com potencial produtivo e regularização documental." },
  { icon: Plane, title: "Aeronaves", desc: "Aeronaves executivas e operacionais com configuração técnica conferida." },
  { icon: Home, title: "Casas", desc: "Imóveis residenciais de alto padrão em localizações privilegiadas." },
  { icon: Castle, title: "Mansões", desc: "Propriedades exclusivas para investidores e compradores exigentes." },
];

const steps = [
  { icon: Search, title: "Seleção de ativos", desc: "Identificamos e qualificamos oportunidades com potencial real de negócio." },
  { icon: ClipboardCheck, title: "Verificação documental", desc: "Cada ativo passa por conferência de documentação e regularidade." },
  { icon: Eye, title: "Atendimento reservado", desc: "Processo discreto e personalizado para cada investidor." },
  { icon: CalendarCheck, title: "Agendamento de visita", desc: "Visitas presenciais ou técnicas mediante agendamento prévio." },
  { icon: ShieldCheck, title: "Negociação segura", desc: "Suporte completo durante toda a jornada de compra." },
];

const faqItems = [
  { q: "A ATHS trabalha apenas com ativos documentados?", a: "Sim. Todos os ativos intermediados pela ATHS passam por conferência de documentação e regularidade. Nosso compromisso é garantir segurança e transparência em cada negociação, trabalhando exclusivamente com bens devidamente documentados." },
  { q: "É possível agendar visita presencial aos bens anunciados?", a: "Sim. As visitas presenciais são realizadas mediante agendamento prévio com nossa equipe comercial. Esse processo garante organização, discrição e uma experiência adequada para o investidor." },
  { q: "Como funciona o processo de atendimento e negociação?", a: "O processo começa com um contato consultivo para entender seu perfil e interesse. Em seguida, apresentamos os ativos compatíveis, fornecemos documentação sob demanda e acompanhamos toda a negociação com suporte dedicado." },
  { q: "A ATHS atua com imóveis, fazendas, aeronaves e veículos?", a: "Sim. A ATHS atua com diversas categorias de ativos de alto valor, incluindo fazendas, aeronaves, imóveis residenciais, mansões e caminhões. Cada categoria conta com curadoria e verificação específicas." },
  { q: "Os anúncios passam por conferência de informações antes da divulgação?", a: "Sim. Antes de qualquer divulgação, realizamos conferência das informações fornecidas, garantindo que os dados apresentados sejam fidedignos e estejam alinhados com a documentação disponível." },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-navy to-navy" />
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="gold-line w-20 mb-8" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Grandes patrimônios. Negócios seguros. Oportunidades selecionadas.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 font-sans">
              A ATHS intermedeia ativos de alto valor — documentados, regularizados e qualificados — para compradores e investidores exigentes em todo o Brasil.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#formulario" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold font-sans hover:bg-primary/90 transition-colors">
                Falar com consultor
              </a>
              <a href="#destaques" className="border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold font-sans hover:border-gold hover:text-gold transition-colors">
                Ver oportunidades em destaque
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground font-sans">CNPJ: 00.000.000/0001-00</p>
              <p className="text-sm text-muted-foreground font-sans">ATHS Empreendimentos e Investimentos LTDA</p>
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((b) => (
              <div key={b.text} className="flex items-center gap-3 bg-muted rounded-lg p-4">
                <b.icon size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium font-sans text-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8 text-center">Quem somos</h2>
          <div className="gold-line w-16 mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed font-sans text-center">
            Com mais de 20 anos conectando grandes negócios de alto padrão no Brasil, a ATHS é especializada na intermediação de ativos de alto valor. Nossa atuação abrange fazendas, aeronaves, imóveis de luxo e veículos pesados, sempre com foco absoluto em segurança documental, transparência e atendimento consultivo. Trabalhamos para investidores qualificados e compradores exigentes que valorizam discrição, confiança e patrimônio sólido.
          </p>
        </div>
      </section>

      {/* Atuação */}
      <section className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">Atuação da ATHS</h2>
          <p className="text-muted-foreground text-center mb-12 font-sans max-w-2xl mx-auto">Curadoria patrimonial em categorias selecionadas de ativos de alto valor.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((c) => (
              <div key={c.title} className="group bg-muted hover:bg-navy rounded-xl p-6 text-center transition-all duration-300 cursor-pointer">
                <c.icon size={36} className="mx-auto mb-4 text-primary group-hover:text-gold transition-colors" />
                <h3 className="font-sans font-semibold text-foreground group-hover:text-white mb-2 transition-colors">{c.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/60 font-sans transition-colors">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">Como a ATHS trabalha</h2>
          <p className="text-muted-foreground text-center mb-16 font-sans">Um processo estruturado para garantir segurança em cada etapa.</p>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold font-sans">
                  {i + 1}
                </div>
                <s.icon size={24} className="mx-auto mb-3 text-primary" />
                <h3 className="font-sans font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oportunidades em destaque */}
      <section id="destaques" className="bg-navy py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-white mb-4 text-center">Oportunidades em destaque</h2>
          <div className="gold-line w-16 mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Fazenda */}
            <div className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10 hover:border-gold/30 transition-colors">
              <img src={fazendaImg} alt="Fazenda Jurema – Sapezal, MT" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl text-white mb-2 font-sans font-semibold">Fazenda Jurema — Sapezal, MT</h3>
                <p className="text-white/60 text-sm font-sans mb-4">Ativo rural estratégico com área total de 3.050 ha, potencial agrícola expressivo e documentação em dia. Valor: R$ 39.000.000,00.</p>
                <Link to="/fazenda-jurema" className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-sans font-semibold text-sm hover:bg-primary/90 transition-colors">
                  Ver detalhes da Fazenda Jurema
                </Link>
              </div>
            </div>
            {/* Aeronave */}
            <div className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10 hover:border-gold/30 transition-colors">
              <img src={baronImg} alt="Beechcraft Baron B58" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl text-white mb-2 font-sans font-semibold">Aeronave Beechcraft Baron B58</h3>
                <p className="text-white/60 text-sm font-sans mb-4">Aeronave executiva, ano 1984, pintura nova em 2025, motorização Continental IO550 300 hp. Valor: R$ 3.500.000,00.</p>
                <Link to="/aeronave-baronb58" className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-sans font-semibold text-sm hover:bg-primary/90 transition-colors">
                  Ver detalhes da aeronave
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">Perguntas Frequentes</h2>
          <div className="gold-line w-16 mx-auto mb-12" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6">
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
      <section id="formulario" className="bg-card py-20 lg:py-28 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-center">Fale com um consultor</h2>
          <p className="text-muted-foreground text-center mb-12 font-sans">Preencha o formulário abaixo para iniciar seu atendimento consultivo.</p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nome completo" className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="E-mail" className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="tel" placeholder="Telefone / WhatsApp" className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary" />

            <select className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Qual ativo é do seu interesse?</option>
              <option>Caminhões</option>
              <option>Fazendas</option>
              <option>Aeronaves</option>
              <option>Casas</option>
              <option>Mansões</option>
              <option>Outros</option>
            </select>

            <select className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Faixa de investimento disponível</option>
              <option>Até R$ 500.000</option>
              <option>R$ 500.000 a R$ 2.000.000</option>
              <option>R$ 2.000.000 a R$ 10.000.000</option>
              <option>R$ 10.000.000 a R$ 50.000.000</option>
              <option>Acima de R$ 50.000.000</option>
            </select>

            <select className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">A compra será para uso, patrimônio ou investimento?</option>
              <option>Uso próprio</option>
              <option>Patrimônio</option>
              <option>Investimento</option>
              <option>Outro</option>
            </select>

            <select className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Em quanto tempo pretende avançar na negociação?</option>
              <option>Imediatamente</option>
              <option>Em até 30 dias</option>
              <option>Em até 90 dias</option>
              <option>Sem prazo definido</option>
            </select>

            <select className="w-full border border-border bg-background rounded-md px-4 py-3 font-sans text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Prefere atendimento por WhatsApp, ligação ou e-mail?</option>
              <option>WhatsApp</option>
              <option>Ligação</option>
              <option>E-mail</option>
            </select>

            <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-sans font-semibold hover:bg-primary/90 transition-colors">
              Enviar e falar com consultor
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
