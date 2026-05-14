import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Ruler, Search } from "lucide-react";

import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { imoveis, filtrosTipo, formatarPreco, type TipoImovel, type Imovel } from "@/data/imoveis";

const normalizarTexto = (texto: string) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

const PropertyImage = ({ imovel }: { imovel: Imovel }) => {
  const imagemCapa = imovel.imagens[0];

  if (!imagemCapa) {
    return (
      <div className="flex h-full w-full flex-col justify-end bg-[linear-gradient(135deg,#0f1f24_0%,#135b4b_58%,#d8b66a_140%)] p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d8b66a]">{imovel.tipo}</p>
        <p className="mt-2 text-2xl font-bold leading-tight">{imovel.titulo}</p>
      </div>
    );
  }

  return (
    <img
      src={imagemCapa}
      alt={imovel.titulo}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
};

const PropertiesPage = () => {
  const [busca, setBusca] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState<TipoImovel | "Todos">("Todos");

  const imoveisFiltrados = useMemo(() => {
    const termo = normalizarTexto(busca.trim());

    return imoveis.filter((imovel) => {
      const correspondeTipo = tipoSelecionado === "Todos" || imovel.tipo === tipoSelecionado;
      const conteudoPesquisavel = normalizarTexto(
        `${imovel.titulo} ${imovel.localizacao} ${imovel.descricao} ${imovel.tipo}`,
      );

      return correspondeTipo && (!termo || conteudoPesquisavel.includes(termo));
    });
  }, [busca, tipoSelecionado]);

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-slate-950">
      <Header />

      <main id="inicio">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <img
            src="/tres-palmeiras/foto-1.jpeg"
            alt="Loteamento ATHS"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,13,12,0.94)_0%,rgba(4,13,12,0.74)_58%,rgba(4,13,12,0.28)_100%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="motion-reveal-up mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a]">
                Portfólio selecionado
              </p>
              <h1 className="motion-reveal-up motion-delay-1 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Encontre o imóvel ideal na ATHS
              </h1>
              <p className="motion-reveal-up motion-delay-2 mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Explore terrenos, casas, salas comerciais e propriedades rurais com informações organizadas para uma
                avaliação rápida e objetiva.
              </p>
            </div>

            <div className="self-center rounded-lg border border-white/10 bg-white/95 p-4 text-slate-950 shadow-2xl shadow-slate-950/25 backdrop-blur sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Search className="h-4 w-4 text-emerald-900" />
                Busque por imóvel, cidade ou descrição
              </div>
              <div className="grid gap-3 sm:grid-cols-[1fr_180px]">
                <Input
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                  placeholder="Ex: Anhembi, sala, fazenda..."
                  className="h-11"
                />
                <Select
                  value={tipoSelecionado}
                  onValueChange={(value) => setTipoSelecionado(value as TipoImovel | "Todos")}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {filtrosTipo.map((tipo) => (
                      <SelectItem key={tipo} value={tipo}>
                        {tipo === "Todos" ? "Todos os tipos" : tipo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Listing */}
        <section id="imoveis" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-900">Imóveis ATHS</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">Listagem de oportunidades</h2>
            </div>
            <p className="text-sm text-slate-600">
              {imoveisFiltrados.length} {imoveisFiltrados.length === 1 ? "resultado" : "resultados"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {imoveisFiltrados.map((imovel) => (
              <Card
                key={imovel.id}
                className="group overflow-hidden border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-900/25 hover:shadow-xl hover:shadow-slate-950/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-slate-200">
                  <PropertyImage imovel={imovel} />
                  <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1 text-xs font-bold text-emerald-900 shadow-sm">
                    {imovel.tipo}
                  </span>
                </div>
                <CardContent className="flex min-h-[240px] flex-col p-5">
                  <h3 className="text-xl font-bold leading-snug text-slate-950">{imovel.titulo}</h3>
                  <div className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-900" />
                    <span>{imovel.localizacao}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                    <Ruler className="h-4 w-4 text-emerald-900" />
                    <span>{imovel.area}</span>
                  </div>
                  <p className="mt-4 text-lg font-bold text-slate-950">{formatarPreco(imovel.preco)}</p>
                  <Link
                    to={imovel.urlPath}
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-md bg-emerald-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800"
                  >
                    Ver imóvel
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {imoveisFiltrados.length === 0 && (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
              Nenhum imóvel encontrado com os filtros selecionados.
            </div>
          )}
        </section>
      </main>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default PropertiesPage;
