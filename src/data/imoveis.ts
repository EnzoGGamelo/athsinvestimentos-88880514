export type TipoImovel = "Lote" | "Casa" | "Comercial" | "Fazenda" | "Terreno";

export interface Imovel {
  id: string;
  urlPath: string;
  tipo: TipoImovel;
  titulo: string;
  localizacao: string;
  preco: number | "Sob Consulta";
  area: string;
  descricao: string;
  linkMapa?: string;
  imagens: string[];
}

export const filtrosTipo: Array<TipoImovel | "Todos"> = ["Todos", "Lote", "Casa", "Comercial", "Fazenda", "Terreno"];

const imagensCasaSaoJose = [20, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21].map(
  (numero) => `/casa-sao-jose/foto-${numero}.jpeg`,
);

const imagensLoteamentoTresPalmeiras = [1, 9, 5, 2, 3, 4, 6, 7, 8, 10, 11].map(
  (numero) => `/tres-palmeiras/foto-${numero}.jpeg`,
);

const imagensFazendaJurema = [2, 3, 1].map(
  (numero) => `/fazenda-jurema/foto-${numero}.jpeg`,
);

const imagensLoteamentoBage = [
  "/bage-loteamento/foto-1.jpeg",
  "/bage-loteamento/foto-2.jpeg",
];

const imagensSalaSanPietro = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (numero) => `/sala-san-pietro/foto-${numero}.jpeg`,
);

export const imoveis: Imovel[] = [
  {
    id: "lotes-anhembi",
    urlPath: "/terreno/lotes-anhembi",
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
    urlPath: "/imovel/casa-sao-jose",
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
    urlPath: "/terreno/tres-palmeiras",
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
    urlPath: "/terreno/anhanguera",
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
    urlPath: "/imovel/sala-san-pietro",
    tipo: "Comercial",
    titulo: "Sala San Pietro",
    localizacao: "Pioneiros, Balneário Camboriú - SC",
    preco: 550000,
    area: "37,29m² + vaga de 12,50m²",
    descricao:
      "Sala comercial no 4º andar, com 37,29m² privativos e vaga de garagem de 12,50m². Localização próxima ao Hospital do Coração.",
    imagens: imagensSalaSanPietro,
  },
  {
    id: "fazenda-jurema",
    urlPath: "/fazenda-jurema",
    tipo: "Fazenda",
    titulo: "Fazenda Jurema",
    localizacao: "Sapezal - MT",
    preco: 39000000,
    area: "3.050 ha",
    descricao:
      "Propriedade rural com pista de pouso de terra, casa com varanda e amplo galpão coberto contendo maquinário pesado. Área aberta para lavoura de 500 ha.",
    imagens: imagensFazendaJurema,
  },
  {
    id: "loteamento-bage",
    urlPath: "/terreno/bage",
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

export const formatarPreco = (preco: Imovel["preco"]): string => {
  if (preco === "Sob Consulta") return preco;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(preco);
};
