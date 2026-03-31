import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/aths-logo.png";

const Footer = () => (
  <footer className="bg-navy text-white/70">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="ATHS" className="h-16 w-auto mb-4" />
          <p className="text-sm leading-relaxed">
            Intermediação de ativos de alto valor com segurança documental, transparência e atendimento consultivo.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/athsempreendimentos/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="mailto:camboriucatarina04@gmail.com" className="hover:text-gold transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-sm font-semibold text-white tracking-wider uppercase mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/fazenda-jurema" className="hover:text-gold transition-colors">Fazenda Jurema</Link></li>
            <li><Link to="/aeronave-baronb58" className="hover:text-gold transition-colors">Aeronave Baron B58</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-sm font-semibold text-white tracking-wider uppercase mb-4">Dados Institucionais</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="text-white/50">Razão Social:</span> ATHS Empreendimentos e Investimentos LTDA</li>
            <li><span className="text-white/50">CNPJ:</span> 00.000.000/0001-00</li>
            <li><span className="text-white/50">Endereço:</span> Rua Vila Lobos, 200 — Londrina/PR — CEP 86047-130</li>
            <li><span className="text-white/50">Contato:</span> Tatiane</li>
            <li><span className="text-white/50">E-mail:</span> camboriucatarina04@gmail.com</li>
            <li className="flex items-center gap-2"><Phone size={14} /> (47) 9283-8021</li>
          </ul>
        </div>
      </div>

      <div className="gold-line mt-12 mb-6" />
      <p className="text-center text-xs text-white/40">
        © {new Date().getFullYear()} ATHS Empreendimentos & Investimentos. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
