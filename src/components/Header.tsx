import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aths-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Fazenda Jurema", path: "/fazenda-jurema" },
  { label: "Baron B58", path: "/aeronave-baronb58" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold-light/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ATHS Empreendimentos & Investimentos" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-white/80 hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#formulario"
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Falar com consultor
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-navy border-t border-gold-light/10 px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block text-sm py-2 ${
                location.pathname === item.path ? "text-gold" : "text-white/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#formulario"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-md text-center"
          >
            Falar com consultor
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
