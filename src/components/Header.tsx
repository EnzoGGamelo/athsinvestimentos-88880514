import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";

import logo from "@/assets/aths-logo.png";
import { WA_GERAL } from "@/lib/whatsapp";

const navItems = [
  { label: "ATHS", path: "/" },
  { label: "Imóveis", path: "/imoveis" },
  { label: "Fazenda Jurema", path: "/fazenda-jurema" },
  { label: "Baron B58", path: "/aeronave-baronb58" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ATHS Empreendimentos & Investimentos" className="h-12 w-auto sm:h-14" />
          </Link>

          <nav className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/10 p-1 md:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    active ? "bg-white text-slate-950" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={WA_GERAL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md bg-[#d8b66a] px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#e2c57e] lg:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Consultor
          </a>

          <button
            type="button"
            className="rounded-md border border-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <>
          <div className="fixed inset-0 z-[55] bg-slate-950/70 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
          <nav className="fixed inset-x-3 top-20 z-[58] rounded-lg border border-white/10 bg-slate-950 p-3 shadow-2xl md:hidden">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-4 py-3 text-base font-semibold ${
                    active ? "bg-white text-slate-950" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={WA_GERAL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#d8b66a] px-4 py-3 text-sm font-bold text-slate-950"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com consultor
            </a>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
