import { ArrowUpRight, Building2, Globe, Instagram, MessageCircle, Phone, Plane, Trees } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "@/assets/aths-logo.png";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const whatsappInstagramUrl = buildWhatsAppUrl("Vim do Instagram, quero tirar dúvidas!");

const links = [
  {
    icon: Globe,
    label: "Nosso Site",
    description: "Institucional e ativos em destaque",
    to: "/",
  },
  {
    icon: Trees,
    label: "Fazenda Jurema",
    description: "Propriedade rural em Sapezal - MT",
    to: "/fazenda-jurema",
  },
  {
    icon: Plane,
    label: "Avião Baron B58",
    description: "Aeronave executiva com ficha técnica",
    to: "/aeronave-baronb58",
  },
  {
    icon: Building2,
    label: "Imóveis",
    description: "Catálogo completo de oportunidades",
    to: "/imoveis",
    featured: true,
  },
];

const LinksPage = () => (
  <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-4 py-6 text-white sm:px-6 sm:py-10">
    <img
      src="/tres-palmeiras/foto-1.jpeg"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
    />
    <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(5,15,18,0.72)_0%,rgba(7,17,23,0.94)_50%,rgba(5,10,18,0.98)_100%)]" />
    <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(216,182,106,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(216,182,106,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

    <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-lg flex-col justify-center sm:min-h-[calc(100vh-5rem)]">
      <header className="text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur sm:h-28 sm:w-28">
          <img src={logo} alt="ATHS Empreendimentos & Investimentos" className="h-16 w-auto sm:h-20" />
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-gold">ATHS</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Empreendimentos & Investimentos
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/60 sm:text-base">
          Imóveis, ativos selecionados e atendimento direto para investidores.
        </p>
      </header>

      <a
        href={whatsappInstagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="whatsapp-links-atendimento"
        className="group mt-6 flex min-h-12 items-center gap-3 rounded-lg border border-gold/25 bg-gold/10 px-4 py-3 text-left text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/20"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gold text-slate-950">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block">Atendimento pelo WhatsApp</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-white/50">
            <Phone className="h-3.5 w-3.5 text-gold" />
            (47) 9283-8021
          </span>
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      <nav className="mt-6 space-y-3" aria-label="Links ATHS">
        <div className="flex items-center gap-3 px-1">
          <span className="h-px flex-1 bg-white/10" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Navegação</p>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.label}
              to={link.to}
              className={`group grid min-h-[78px] grid-cols-[44px_1fr_auto] items-center gap-3 rounded-lg border px-4 py-3 text-left shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 ${
                link.featured
                  ? "border-gold/50 bg-[linear-gradient(135deg,rgba(216,182,106,0.2),rgba(255,255,255,0.07))] hover:border-gold"
                  : "border-white/10 bg-white/[0.065] hover:border-white/25 hover:bg-white/[0.1]"
              }`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-md border transition ${
                  link.featured
                    ? "border-gold/50 bg-gold text-slate-950"
                    : "border-white/10 bg-slate-950/40 text-gold group-hover:border-gold/30"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-bold leading-tight text-white">{link.label}</span>
                <span className="mt-1 block text-xs leading-5 text-white/50 sm:text-sm">{link.description}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
            </Link>
          );
        })}
      </nav>

      <footer className="mt-7 border-t border-white/10 pt-5 text-center">
        <a
          href="https://www.instagram.com/athsempreendimentos/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3 text-sm font-semibold text-white/50 transition hover:text-gold"
          aria-label="Instagram da ATHS Empreendimentos"
        >
          <Instagram className="h-4 w-4 transition group-hover:scale-110" />
          @athsempreendimentos
        </a>

        <p className="mt-3 text-[11px] text-white/25 sm:text-xs">
          © {new Date().getFullYear()} ATHS Empreendimentos & Investimentos
        </p>
      </footer>
    </div>
  </main>
);

export default LinksPage;
