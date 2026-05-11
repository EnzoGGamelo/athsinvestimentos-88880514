import { useMemo, useState } from "react";
import { MapPin, MessageCircle, Ruler, Search } from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TipoImovel = "Lote" | "Casa" | "Comercial" | "Fazenda" | "Terreno";

interface Imovel {
  id: string;
  tipo: TipoImovel;
  titulo: string;
  localizacao: string;
  preco: number | "Sob Consulta";
  area: string;
  descricao: string;
  linkMapa?: string;
  imagens: string[];
}

const filtrosTipo: Array<TipoImovel | "Todos"> = ["Todos", "Lote", "Casa", "Comercial", "Fazenda"];
const WHATSAPP_NUMBER = "554792838021";

const imagensCasaSaoJose = [
  20,
  22,
  ...Array.from({ length: 19 }, (_, index) => index + 1),
  21,
].map((numero) => `/Casa%20S%C3%A3o%20Jos%C3%A9%20SC/Casa%20de%20S%C3%A3o%20Jos%C3%A9%20(${numero}).jpeg`);

const imagensLoteamentoTresPalmeiras = [1, 9, 5, 2, 3, 4, 6, 7, 8, 10, 11].map(
  (numero) => `/15%20de%20Novembro%20RS/Quinze%20de%20Novembro%20-%2013%20lotes%20(${numero}).jpeg`,
);

const imagensFazendaJurema = [2, 3, 1].map(
  (numero) => `/Fazenda%20Jurema/fazenda%20jurema%20(${numero}).jpeg`,
);

const imagensLoteamentoBage = [
  "/Bag%C3%A9%20Loteamento/Bag%C3%A9%20Loteamento.jpeg",
  "/Bag%C3%A9%20Loteamento/Bag%C3%A9%20Loteamento%20(2).jpeg",
];

const imoveis: Imovel[] = [
  {
    id: "lotes-anhembi",
    tipo: "Lote",
    titulo: "3 Lotes Anhembi",
    localizacao: "Jd. Cruzeiro, Anhembi - SP",
    preco: 80000,
    area: "300m² cada lote",
    descricao:
      "Lotes de 300m² em bairro residencial, com escolas, supermercados e posto a menos de 1km. Oportunidade para construção residencial em região consolidada.",
    linkMapa: "https://goo.gl/maps/mBCAdLK2AfEpLSiGA",
    imagens: [],
  },
  {
    id: "casa-sao-jose",
    tipo: "Casa",
    titulo: "Casa de São José",
    localizacao: "Rua Portimão, LT23 QD21, Forquilhas, São José - SC",
    preco: 500000,
    area: "Terreno de 200m²",
    descricao:
      "Terreno com 200m² possuindo 3 quartos, sendo 1 suíte, sala, cozinha, banheiro social, garagem para 2 carros e edícula nos fundos.",
    linkMapa: "https://goo.gl/maps/U8opH6yb4sALZ9E4A",
    imagens: imagensCasaSaoJose,
  },
  {
    id: "loteamento-tres-palmeiras",
    tipo: "Lote",
    titulo: "Loteamento Bairro Três Palmeiras",
    localizacao: "Quinze de Novembro - RS",
    preco: 1400000,
    area: "2.499,97m² ou 26 lotes",
    descricao:
      "Opção 1: área de 2.499,97m² dividida em 13 lotes, com média de 190m² cada, por R$ 1.400.000,00. Opção 2: dois terrenos totalizando 26 lotes por R$ 2.800.000,00.",
    linkMapa: "https://maps.app.goo.gl/QS5hT8ga43bdZMcK6",
    imagens: imagensLoteamentoTresPalmeiras,
  },
  {
    id: "terreno-anhanguera",
    tipo: "Terreno",
    titulo: "Terreno Rodovia Anhanguera",
    localizacao: "Pirassununga - SP",
    preco: 16835362,
    area: "84.176,81m²",
    descricao:
      "Área total de 84.176,81m² na margem da SP 330, km 206. Aprovado para construção de 3 barracões, totalizando 31.700,00m², com potencial comercial e para condomínios.",
    linkMapa: "https://maps.app.goo.gl/eEgVPXo6wmfKSYWr6",
    imagens: [],
  },
  {
    id: "sala-san-pietro",
    tipo: "Comercial",
    titulo: "Sala San Pietro",
    localizacao: "Pioneiros, Balneário Camboriú - SC",
    preco: 550000,
    area: "37,29m² + vaga de 12,50m²",
    descricao:
      "Sala comercial no 4º andar, com 37,29m² privativos e vaga de garagem de 12,50m². Localização próxima ao Hospital do Coração.",
    imagens: [],
  },
  {
    id: "fazenda-jurema",
    tipo: "Fazenda",
    titulo: "Fazenda Jurema",
    localizacao: "Brasil",
    preco: "Sob Consulta",
    area: "Propriedade rural",
    descricao:
      "Propriedade rural com pista de pouso de terra, casa com varanda e amplo galpão coberto contendo maquinário pesado.",
    imagens: imagensFazendaJurema,
  },
  {
    id: "loteamento-bage",
    tipo: "Lote",
    titulo: "Loteamento Bagé",
    localizacao: "Bagé - RS",
    preco: "Sob Consulta",
    area: "Ampla área aberta",
    descricao:
      'Ampla área aberta com gramado e árvores. Contém uma casa branca e placa "Vende ou Permuta" com projeto de construção.',
    imagens: imagensLoteamentoBage,
  },
];

const formatarPreco = (preco: Imovel["preco"]) => {
  if (preco === "Sob Consulta") {
    return preco;
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(preco);
};

const criarWhatsAppUrl = (imovel: Imovel) => {
  const message = [
    "Olá, vim do site da ATHS e tenho interesse neste imóvel:",
    "",
    `Imóvel: ${imovel.titulo}`,
    `Tipo: ${imovel.tipo}`,
    `Localização: ${imovel.localizacao}`,
    `Área: ${imovel.area}`,
    `Preço: ${formatarPreco(imovel.preco)}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const PropertyImage = ({ imovel }: { imovel: Imovel }) => {
  const imagemCapa = imovel.imagens[0];

  if (!imagemCapa) {
    return (
      <div className="flex h-full w-full flex-col justify-end bg-[linear-gradient(135deg,#0f1f24_0%,#135b4b_58%,#d8b66a_140%)] p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8b66a]">{imovel.tipo}</p>
        <p className="mt-2 font-serif text-2xl font-bold leading-tight">{imovel.titulo}</p>
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

const normalizarTexto = (texto: string) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

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
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <img
            src="/15%20de%20Novembro%20RS/Quinze%20de%20Novembro%20-%2013%20lotes%20(1).jpeg"
            alt="Loteamento ATHS"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,20,0.94)_0%,rgba(7,16,20,0.74)_58%,rgba(7,16,20,0.28)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a]">
                Portfólio selecionado
              </p>
              <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Encontre o imóvel ideal na ATHS
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
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

        <section id="imoveis" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-900">Imóveis ATHS</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-slate-950">Listagem de oportunidades</h2>
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
                <CardContent className="flex min-h-[260px] flex-col p-5">
                  <h3 className="text-xl font-bold leading-snug text-slate-950">{imovel.titulo}</h3>
                  <div className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-900" />
                    <span>{imovel.localizacao}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                    <Ruler className="h-4 w-4 text-emerald-900" />
                    <span>{imovel.area}</span>
                  </div>
                  <p className="mt-5 text-lg font-bold text-slate-950">{formatarPreco(imovel.preco)}</p>
                  <Button asChild className="mt-auto w-full bg-emerald-900 hover:bg-emerald-800">
                    <a href={criarWhatsAppUrl(imovel)} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      Falar no WhatsApp
                    </a>
                  </Button>
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

      <Footer />
    </div>
  );
};

export default PropertiesPage;
