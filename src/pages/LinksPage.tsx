import { Phone, Globe, Trees, Plane, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/aths-logo.png";

const links = [
  { icon: Globe, label: "Nosso Site", to: "/", internal: true },
  { icon: Trees, label: "Fazenda Jurema", to: "/fazenda-jurema", internal: true },
  { icon: Plane, label: "Avião Baron B58", to: "/aeronave-baronb58", internal: true },
];

const LinksPage = () => (
  <div className="min-h-screen bg-navy navy-texture flex items-center justify-center px-4 py-12">
    <div className="w-full max-w-md text-center space-y-6">
      <img src={logo} alt="ATHS Empreendimentos & Investimentos" className="h-20 w-auto mx-auto mb-2" />
      <h1 className="text-white text-xl font-sans font-semibold tracking-wide">ATHS Empreendimentos & Investimentos</h1>
      
      <a
        href="https://wa.me/5547928380021"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 text-white/70 hover:text-gold transition-colors font-sans text-sm"
      >
        <Phone size={16} />
        (47) 9283-8021 — Atendimento
      </a>

      <div className="space-y-3 pt-4">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="flex items-center justify-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 text-white font-sans font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <link.icon size={20} className="text-gold" />
            {link.label}
          </Link>
        ))}
      </div>

      <div className="pt-4">
        <a
          href="https://www.instagram.com/athsempreendimentos/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/40 hover:text-gold transition-colors text-sm font-sans"
        >
          <Instagram size={18} />
          @athsempreendimentos
        </a>
      </div>

      <p className="text-white/20 text-xs font-sans pt-4">
        © {new Date().getFullYear()} ATHS Empreendimentos & Investimentos
      </p>
    </div>
  </div>
);

export default LinksPage;
