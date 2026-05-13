import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileCheck2,
  Landmark,
  MessageCircle,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Trees,
  Truck,
} from "lucide-react";

import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  WA_GERAL,
  WA_HOME_BARON,
  WA_HOME_FAZENDA,
  WA_HOME_IMOVEIS,
} from "@/lib/whatsapp";

import baronImg from "@/assets/baron-side.jpg";
import fazendaCasaImg from "@/assets/fazenda-casa.jpg";
import fazendaImg from "@/assets/fazenda-campo.jpg";

const heroAssets = [
  {
    label: "Fazenda Jurema",
    meta: "Rural com estrutura",
    image: "/Fazenda%20Jurema/fazenda%20jurema%20(2).jpeg",
  },
  {
    label: "Loteamento Três Palmeiras",
    meta: "Terrenos no RS",
    image: "/15%20de%20Novembro%20RS/Quinze%20de%20Novembro%20-%2013%20lotes%20(1).jpeg",
  },
  {
    label: "Casa São José",
    meta: "Residencial em SC",
    image: "/Casa%20S%C3%A3o%20Jos%C3%A9%20SC/Casa%20de%20S%C3%A3o%20Jos%C3%A9%20(20).jpeg",
  },
];

const badges = [
  { icon: FileCheck2, text: "Ativos documentados" },
  { icon: ShieldCheck, text: "Negociação transparente" },
  { icon: BadgeCheck, text: "Curadoria patrimonial" },
  { icon: CalendarCheck, text: "Visitas sob agenda" },
];

const categories = [
  { icon: Trees, title: "Fazendas", desc: "Áreas rurais com potencial produtivo, acesso e documentação avaliados." },
  { icon: Landmark, title: "Imóveis", desc: "Casas, terrenos, salas e loteamentos com leitura clara de oportunidade." },
  { icon: Plane, title: "Aeronaves", desc: "Ativos executivos e operacionais com histórico técnico organizado." },
  { icon: Truck, title: "Veículos pesados", desc: "Equipamentos e caminhões selecionados para compra segura." },
];

const steps = [
  { icon: Search, title: "Seleção", desc: "Entendemos o perfil e filtramos ativos coerentes com o objetivo." },
  { icon: ClipboardCheck, title: "Verificação", desc: "Conferimos documentos, contexto de uso e informações comerciais." },
  { icon: Eye, title: "Apresentação", desc: "Organizamos dados, fotos, visita e próximos passos sem ruído." },
  { icon: ShieldCheck, title: "Negociação", desc: "Acompanhamos a conversa até uma decisão segura e objetiva." },
];

const featured = [
  {
    title: "Fazenda Jurema",
    label: "Propriedade rural",
    desc: "Área produtiva com estrutura, pista de pouso e galpão coberto.",
    href: "/fazenda-jurema",
    image: fazendaImg,
  },
  {
    title: "Beechcraft Baron B58",
    label: "Aeronave executiva",
    desc: "Baron B58 com apresentação técnica e histórico para análise.",
    href: "/aeronave-baronb58",
    image: baronImg,
  },
  {
    title: "Portfólio de imóveis",
    label: "Casas, lotes e áreas",
    desc: "Listagem dinâmica de imóveis ATHS com filtros e galeria.",
    href: "/imoveis",
    image: "/15%20de%20Novembro%20RS/Quinze%20de%20Novembro%20-%2013%20lotes%20(1).jpeg",
  },
];

const faqItems = [
  {
    q: "A ATHS trabalha apenas com ativos documentados?",
    a: "Sim. Cada ativo passa por conferência de documentação e regularidade antes de avançar em uma negociação.",
  },
  {
    q: "É possível agendar visita presencial?",
    a: "Sim. As visitas são organizadas mediante agendamento para manter discrição, segurança e aproveitamento da agenda.",
  },
  {
    q: "Como funciona o atendimento?",
    a: "O atendimento começa pela leitura do perfil do comprador. Depois a equipe apresenta ativos compatíveis e acompanha os próximos passos.",
  },
  {
    q: "A ATHS atua com imóveis, fazendas, aeronaves e veículos?",
    a: "Sim. A operação cobre ativos de alto valor com curadoria, documentação e negociação assistida.",
  },
];

const ctaOptions = [
  { label: "🌾  Fazenda Jurema — Sapezal, MT", href: WA_HOME_FAZENDA, gtm: "whatsapp-home-opcao-fazenda" },
  { label: "✈️  Aeronave Baron B58", href: WA_HOME_BARON, gtm: "whatsapp-home-opcao-baron" },
  { label: "🏠  Imóveis e loteamentos", href: WA_HOME_IMOVEIS, gtm: "whatsapp-home-opcao-imoveis" },
  { label: "💬  Outro ativo ou dúvida", href: WA_GERAL, gtm: "whatsapp-home-opcao-geral" },
];

const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  const refBadges = useScrollReveal();
  const refQuem = useScrollReveal();
  const refAtuacao = useScrollReveal();
  const refSteps = useScrollReveal();
  const refDestaques = useScrollReveal();
  const refFaq = useScrollReveal();
  const refContato = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-slate-950">
      <Header />

      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-[#071211] text-white">
          <img
            key={heroAssets[heroIndex].image}
            src={heroAssets[heroIndex].image}
            alt={heroAssets[heroIndex].label}
            className="motion-kenburns absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,13,12,0.9)_0%,rgba(4,13,12,0.68)_48%,rgba(4,13,12,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(216,182,106,0.14)_0%,transparent_32%,rgba(14,93,76,0.18)_100%)]" />
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="container relative z-10 mx-auto grid min-h-[760px] items-center gap-12 px-4 py-20 lg:grid-cols-[1fr_420px] lg:px-8">
            <div className="max-w-4xl">
              <div className="motion-reveal-up mb-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Curadoria de ativos de alto valor
              </div>
              <h1 className="motion-reveal-up motion-delay-1 max-w-4xl text-5xl font-bold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                Patrimônio selecionado, negociação sem ruído.
              </h1>
              <p className="motion-reveal-up motion-delay-2 mt-7 max-w-2xl text-lg leading-8 text-white/80">
                A ATHS organiza oportunidades em imóveis, fazendas, aeronaves e veículos pesados com foco em clareza,
                documentação e atendimento consultivo.
              </p>
              <div className="motion-reveal-up motion-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA_GERAL}
                  target="_blank"
                  rel="noreferrer"
                  data-gtm="whatsapp-home-hero"
                  className="spotlight-sweep inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-[#d8b66a] px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#e2c57e]"
                >
                  Falar com consultor
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/imoveis"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  Ver imóveis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="motion-reveal-up motion-delay-4 mt-14 grid max-w-4xl gap-3 sm:grid-cols-3">
                {[
                  ["20+", "anos conectando negociações"],
                  ["4", "categorias de ativos"],
                  ["1:1", "atendimento consultivo"],
                ].map(([value, label]) => (
                  <div key={label} className="motion-card rounded-md border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-3xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-sm text-white/70">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-lg border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur">
                <div className="mb-3 flex items-center justify-between px-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  <span>Ativos em foco</span>
                  <span>Live</span>
                </div>
                <div className="space-y-3">
                  {heroAssets.map((asset, index) => (
                    <button
                      key={asset.label}
                      type="button"
                      onMouseEnter={() => setHeroIndex(index)}
                      onFocus={() => setHeroIndex(index)}
                      onClick={() => setHeroIndex(index)}
                      className={`group grid w-full grid-cols-[112px_1fr] items-center gap-4 rounded-md border p-2 text-left transition-all duration-300 ${
                        heroIndex === index
                          ? "border-[#d8b66a]/70 bg-white/20"
                          : "border-white/10 bg-black/10 hover:border-white/30 hover:bg-white/15"
                      }`}
                    >
                      <span className="block aspect-[4/3] overflow-hidden rounded-sm bg-slate-800">
                        <img
                          src={asset.image}
                          alt={asset.label}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-white">{asset.label}</span>
                        <span className="mt-1 block text-xs text-white/60">{asset.meta}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center overflow-hidden border-y border-white/10 bg-slate-950/55 py-3 backdrop-blur">
            <div className="asset-marquee flex w-max whitespace-nowrap text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              <span className="mx-6">Documentação</span>
              <span className="mx-6 text-[#d8b66a]">Curadoria</span>
              <span className="mx-6">Visitas coordenadas</span>
              <span className="mx-6 text-[#d8b66a]">Negociação assistida</span>
              <span className="mx-6">Imóveis</span>
              <span className="mx-6 text-[#d8b66a]">Fazendas</span>
              <span className="mx-6">Aeronaves</span>
              <span className="mx-6 text-[#d8b66a]">Ativos selecionados</span>
            </div>
          </div>
        </section>

        <section className="relative z-20">
          <div ref={refBadges} className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10 sm:grid-cols-2 lg:grid-cols-4">
              {badges.map((badge, index) => (
                <div
                  key={badge.text}
                  className="reveal-item motion-card flex items-center gap-3 rounded-md bg-[#f6f3ec] p-4"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <badge.icon className="h-5 w-5 shrink-0 text-emerald-800" />
                  <span className="text-sm font-semibold text-slate-800">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quem-somos" className="py-20 lg:py-28">
          <div ref={refQuem} className="container mx-auto grid items-end gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="reveal-item">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">ATHS</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Um filtro rigoroso antes da oportunidade chegar até você.
              </h2>
            </div>
            <div className="reveal-item space-y-6 text-base leading-8 text-slate-600">
              <p>
                A ATHS atua na intermediação de ativos de alto valor com uma operação direta: entender o comprador,
                organizar as informações essenciais e conduzir uma negociação documentada.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Documentação conferida", "Atendimento discreto", "Visitas coordenadas", "Negociação assistida"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-800" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="atuacao" className="border-y border-slate-200 bg-white py-20 lg:py-28">
          <div ref={refAtuacao} className="container mx-auto px-4 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Atuação</p>
                <h2 className="mt-3 text-4xl font-bold text-slate-950">Categorias com leitura objetiva.</h2>
              </div>
              <Link to="/imoveis" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900 hover:text-emerald-700">
                Abrir portfólio de imóveis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className="reveal-item motion-card group rounded-lg border border-slate-200 bg-[#f8f6f0] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-800/30 hover:bg-slate-950 hover:text-white hover:shadow-xl"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <category.icon className="h-8 w-8 text-emerald-800 transition group-hover:text-[#d8b66a]" />
                  <h3 className="mt-8 text-xl font-bold">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 transition group-hover:text-white/70">{category.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div ref={refSteps} className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Processo</p>
              <h2 className="mt-3 text-4xl font-bold text-slate-950">Menos ansiedade, mais clareza por etapa.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="reveal-item motion-card relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">0{index + 1}</span>
                  <step.icon className="mt-8 h-6 w-6 text-emerald-800" />
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="destaques" className="bg-slate-950 py-20 text-white lg:py-28">
          <div ref={refDestaques} className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a]">Destaques</p>
              <h2 className="mt-3 text-4xl font-bold">Ativos para análise imediata.</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {featured.map((item, index) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="reveal-item motion-card group overflow-hidden rounded-lg border border-white/10 bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b66a]/50"
                  style={{ transitionDelay: `${index * 110}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-800">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d8b66a]">{item.label}</p>
                    <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{item.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
                      Ver detalhes
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsCarousel />

        <section id="faq" className="bg-white py-20 lg:py-28">
          <div ref={refFaq} className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div className="reveal-item">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">FAQ</p>
              <h2 className="mt-3 text-4xl font-bold text-slate-950">Perguntas antes do primeiro contato.</h2>
            </div>
            <Accordion type="single" collapsible className="reveal-item space-y-3">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="rounded-lg border border-slate-200 px-5">
                  <AccordionTrigger className="text-left font-sans text-base font-bold text-slate-900 hover:text-emerald-800">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contato" className="py-20 lg:py-28">
          <div ref={refContato} className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="reveal-item overflow-hidden rounded-lg bg-slate-950 text-white">
              <img src={fazendaCasaImg} alt="Casa em propriedade ATHS" className="h-72 w-full object-cover opacity-90" />
              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a]">Contato direto</p>
                <h2 className="mt-3 text-4xl font-bold">Conte o que procura. A equipe filtra o resto.</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Atendimento consultivo direto pelo WhatsApp. Sem formulários, sem espera.
                </p>
              </div>
            </div>

            <div className="reveal-item flex flex-col justify-center gap-6 rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">Atendimento direto</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-950">Qual ativo você procura?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Escolha o ativo de interesse e inicie a conversa com a mensagem já organizada para o consultor.
                </p>
              </div>
              <div className="grid gap-3">
                {ctaOptions.map(({ label, href, gtm }) => (
                  <a
                    key={gtm}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    data-gtm={gtm}
                    className="flex items-center justify-between rounded-md border border-slate-200 bg-[#f6f3ec] px-5 py-4 text-sm font-semibold text-slate-800 transition hover:border-emerald-800/40 hover:bg-emerald-50 hover:text-emerald-900"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                ))}
              </div>
              <a
                href={WA_GERAL}
                target="_blank"
                rel="noreferrer"
                data-gtm="whatsapp-home-cta-principal"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                <MessageCircle className="h-4 w-4" />
                Falar com consultor agora
              </a>
            </div>
          </div>
        </section>
      </main>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
