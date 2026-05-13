import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/aths-logo.png";

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="container mx-auto px-4 py-14 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_1.2fr]">
        <div>
          <img src={logo} alt="ATHS" className="h-16 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Intermediação de ativos de alto valor com curadoria, documentação e atendimento consultivo.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/athsempreendimentos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/70 transition hover:border-[#d8b66a]/50 hover:text-[#d8b66a]"
              aria-label="Instagram ATHS"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:camboriucatarina04@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/70 transition hover:border-[#d8b66a]/50 hover:text-[#d8b66a]"
              aria-label="E-mail ATHS"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8b66a]">Navegação</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li>
              <Link to="/" className="transition hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/imoveis" className="transition hover:text-white">Imóveis</Link>
            </li>
            <li>
              <Link to="/fazenda-jurema" className="transition hover:text-white">Fazenda Jurema</Link>
            </li>
            <li>
              <Link to="/aeronave-baronb58" className="transition hover:text-white">Aeronave Baron B58</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8b66a]">Contato</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b66a]" />
              <span>Rua Vila Lobos, 200, Londrina/PR, CEP 86047-130</span>
            </li>
            <li>
              <a href="mailto:camboriucatarina04@gmail.com" className="flex gap-3 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b66a]" />
                <span>camboriucatarina04@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/554792838021?text=Vim%20do%20site%2C%20quero%20tirar%20d%C3%BAvidas!"
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="whatsapp-footer"
                className="flex gap-3 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b66a]" />
                <span>(47) 9283-8021</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} ATHS Empreendimentos & Investimentos. Todos os direitos reservados.</p>
        <p>Atendimento consultivo para compradores e investidores.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
