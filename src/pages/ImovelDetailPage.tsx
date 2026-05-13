import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Ruler, DollarSign, MessageCircle, Map } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ImageLightbox from "@/components/ImageLightbox";
import { imoveis, formatarPreco } from "@/data/imoveis";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ImovelDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const refOverview = useScrollReveal();
  const refGallery = useScrollReveal();
  const refDesc = useScrollReveal();
  const refCta = useScrollReveal();

  const imovel = imoveis.find((i) => i.id === slug || i.urlPath.endsWith(`/${slug}`));

  if (!imovel || imovel.urlPath === "/fazenda-jurema") {
    return <Navigate to="/imoveis" replace />;
  }

  const waMsg = [
    "Olá! Vim do site da ATHS e tenho interesse neste imóvel:",
    "",
    `*${imovel.titulo}*`,
    `Tipo: ${imovel.tipo} | ${imovel.localizacao}`,
    `Área: ${imovel.area}`,
    `Valor: ${formatarPreco(imovel.preco)}`,
  ].join("\n");

  const whatsappUrl = buildWhatsAppUrl(waMsg);

  const lightboxImages = imovel.imagens.map((src, i) => ({
    src,
    alt: `${imovel.titulo} — foto ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden bg-slate-950 text-white">
        {imovel.imagens[0] && (
          <img
            src={imovel.imagens[0]}
            alt={imovel.titulo}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,13,12,0.93)_0%,rgba(4,13,12,0.72)_50%,rgba(4,13,12,0.30)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <Link
            to="/imoveis"
            className="motion-reveal-up inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao portfólio
          </Link>

          <p className="motion-reveal-up text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a] mb-4">
            {imovel.tipo} · {imovel.localizacao}
          </p>
          <h1 className="motion-reveal-up motion-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {imovel.titulo}
          </h1>
          <div className="motion-reveal-up motion-delay-2 flex flex-wrap gap-3 mb-10">
            <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">
              {imovel.area}
            </span>
            <span className="bg-white/10 border border-white/15 px-3 py-1.5 rounded-md text-sm text-white/80">
              {formatarPreco(imovel.preco)}
            </span>
          </div>
          <div className="motion-reveal-up motion-delay-3 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-gtm={`whatsapp-imovel-${imovel.id}-hero`}
              className="spotlight-sweep inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#d8b66a] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#e2c57e]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar sobre este imóvel
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Overview cards */}
      <section className="relative z-20">
        <div ref={refOverview} className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10 sm:grid-cols-3">
            {[
              { icon: MapPin, label: "Localização", value: imovel.localizacao },
              { icon: Ruler, label: "Área", value: imovel.area },
              { icon: DollarSign, label: "Valor", value: formatarPreco(imovel.preco) },
            ].map((item, index) => (
              <div
                key={item.label}
                className="reveal-item flex items-center gap-3 rounded-md bg-[#f6f3ec] p-4"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <item.icon className="h-5 w-5 shrink-0 text-emerald-800" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">{item.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-800">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {imovel.imagens.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div ref={refGallery} className="container mx-auto px-4 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Fotos</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-950 mb-10">Imagens do imóvel</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {imovel.imagens.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${imovel.titulo} — foto ${i + 1}`}
                  className="reveal-item rounded-lg w-full aspect-[4/3] object-cover cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                  onClick={() => setLightboxIndex(i)}
                  loading="lazy"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Description */}
      <section className="py-20 lg:py-28">
        <div ref={refDesc} className="container mx-auto px-4 lg:px-8">
          <div className="reveal-item grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-800">Descrição</p>
              <h2 className="mt-3 text-4xl font-bold text-slate-950">Sobre este imóvel</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>{imovel.descricao}</p>
              {imovel.linkMapa && (
                <a
                  href={imovel.linkMapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-700 transition"
                >
                  <Map className="h-4 w-4" />
                  Ver localização no Google Maps
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section className="bg-slate-950 py-20 lg:py-28">
        <div ref={refCta} className="container mx-auto px-4 lg:px-8 max-w-2xl text-center reveal-item">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d8b66a] mb-4">Contato direto</p>
          <h2 className="text-4xl font-bold text-white mb-4">Interesse neste imóvel?</h2>
          <p className="text-white/60 mb-10 text-base leading-7 max-w-md mx-auto">
            Fale com a equipe ATHS pelo WhatsApp. Atendimento consultivo, sem formulário, sem espera.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-gtm={`whatsapp-imovel-${imovel.id}-cta`}
            className="spotlight-sweep inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#d8b66a] px-8 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#e2c57e]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com consultor agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default ImovelDetailPage;
