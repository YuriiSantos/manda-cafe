import casaevents from "../assets/casaevents.jpg";
import headerBg from "../assets/header-bg.jpg"; //

import { useRef } from "react";

function Events() {
  const thumbs = [
    casaevents,
    casaevents,
    casaevents,
    casaevents,
    casaevents,
    casaevents,
    casaevents,
    casaevents,
    casaevents,
    casaevents,
    casaevents,
    casaevents,
  ];

  const thumbsRef = useRef(null);

  const scrollThumbs = (dir) => {
    const el = thumbsRef.current;
    if (!el) return;

    // rola aproximadamente 2 thumbs por clique (ajuste se quiser)
    const amount = el.clientWidth * 0.6;

    el.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full overflow-x-hidden">
      <section
        className="w-full min-h-screen flex items-center"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="w-full px-6 md:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                EVENTOS
              </p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h1 className="font-lobster mt-8 text-4xl font-light leading-tight text-[#b08b4a] md:text-5xl lg:text-6xl">
                Que tal planejar juntos cada detalhe do seu evento?
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#festas"
                  className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white"
                >
                  Manda Festas
                </a>

                <a
                  href="#poucos"
                  className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white"
                >
                  Manda pra poucos
                </a>

                <a
                  href="#filmar"
                  className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white"
                >
                  Manda Filmar
                </a>
              </div>

              <a
                href="#festas"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#b08b4a] underline underline-offset-4 transition hover:opacity-80"
              >
                ver detalhes
                <span aria-hidden="true" className="text-base">
                  ↓
                </span>
              </a>
            </div>

            <div className="flex justify-end">
              <img
                src={casaevents}
                alt="Sala privativa"
                className="h-[300px] w-full max-w-xl object-cover md:h-[380px] lg:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="festas"
        className="w-full text-white relative"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay (igual ideia do header) */}
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-16 py-8 md:py-10">
          {/* topo: imagem grande + texto */}
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-center min-h-[420px]">
            {/* imagem grande à esquerda */}
            <div className="overflow-hidden bg-white/10">
              <img
                src={casaevents}
                alt="Eventos - imagem principal"
                className="h-[520px] w-full object-cover md:h-[560px] lg:h-[600px]"
              />
            </div>

            {/* conteúdo à direita */}
            <div className="pt-2 md:pt-6">
              <h2 className="font-lobster text-4xl font-medium text-white">
                Manda Festas
              </h2>

              <h3 className="mt-4 text-lg font-light leading-snug text-white">
                Celebre sonhos <br />e crie memórias
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-white/90">
                Já pensou em celebrar momentos importantes em uma casa que é{" "}
                <span className="font-semibold text-white">
                  PATRIMÔNIO da cidade de São Paulo
                </span>
                ?
                <br />
                <br />
                Nossa casa é perfeita para confraternizações diversas como:
                festas de fim de ano, aniversários, eventos culturais, entre
                outros.
                <br />
                <br />
                Queremos que você celebre seus sonhos, reunindo pessoas
                importantes e crie memórias inesquecíveis, para fazer da sua
                vida uma experiência única!
                <br />
                <br />
                Aqui é o lugar ideal para eternizar momentos de afeto, então,
                não perca tempo e venha nos conhecer!
              </p>

              <div className="mt-6 h-px w-14 bg-white/80" />

              <div className="mt-8">
                <p className="mb-3 font-semibold text-white">
                  No Manda você tem:
                </p>

                <ul className="space-y-2 text-sm text-white/90 list-disc list-inside">
                  <li>Espaço exclusivo</li>
                  <li>
                    Área aberta (Quintal) e fechada (Salão lateral e salas
                    internas)
                  </li>
                  <li>Excelente localização</li>
                  <li>Ambiente acolhedor e agradável</li>
                  <li>Serviço de buffet</li>
                  <li>Bar (Cartela de drinks)</li>
                  <li>Equipamento de som profissional (Voz e violão)</li>
                  <li>Espaço adaptável (Comporta até 80 pessoas)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* faixa de miniaturas */}
          <div className="mt-12 border-t border-white/20 pt-6">
            <div className="relative">
              {/* trilho */}
              <div
                ref={thumbsRef}
                className="flex gap-6 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {thumbs.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="shrink-0 overflow-hidden outline-none hover:opacity-95 transition-opacity duration-200"
                    aria-label={`Thumb ${idx + 1}`}
                  >
                    <img
                      src={t}
                      alt={`Miniatura ${idx + 1}`}
                      className="h-[120px] w-[260px] object-cover md:h-[140px] md:w-[320px]"
                    />
                  </button>
                ))}
              </div>

              {/* seta esquerda (por cima da 1ª thumb) */}
              <button
                type="button"
                onClick={() => scrollThumbs("prev")}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center text-white text-5xl leading-none hover:opacity-80 transition-opacity"
                aria-label="Anterior"
              >
                ‹
              </button>

              {/* seta direita (por cima da última thumb) */}
              <button
                type="button"
                onClick={() => scrollThumbs("next")}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center text-white text-5xl leading-none hover:opacity-80 transition-opacity"
                aria-label="Próximo"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="poucos"
        className="w-full"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-14 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                OCASIÕES ESPECIAIS
              </p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                Manda pra Poucos
              </h2>

              <div className="mt-8 space-y-6 text-neutral-700">
                <p className="text-sm md:text-base leading-relaxed">
                  O Manda pra Poucos é a escolha ideal para jantares ou almoços
                  intimistas, pensados para receber de{" "}
                  <strong>15 a 25 pessoas</strong>. Perfeito para aniversários,
                  comemorações, encontros entre amigos, familiares ou jantares
                  empresariais, esse formato nasce para valorizar a proximidade,
                  o cuidado e as conexões verdadeiras.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Criamos um <strong>cardápio personalizado</strong>, com a sua
                  cara e seus desejos — uma comida refinada que acolhe e abraça
                  cada convidado, porque comer bem é ser feliz. O resultado são
                  encontros leves, cheios de afeto, boas risadas e aquele tempo
                  de qualidade que fica na memória.
                </p>
              </div>

              <div className="mt-8 h-px w-14 bg-[#b08b4a]/60" />

              <div className="mt-8">
                <p className="mb-3 font-semibold text-neutral-900">
                  No Manda você tem:
                </p>

                <ul className="space-y-2 text-sm md:text-base text-neutral-700 list-disc list-inside">
                  <li>Espaço exclusivo</li>
                  <li>
                    Área aberta (quintal) e fechada (salão lateral e salas
                    internas)
                  </li>
                  <li>Excelente localização</li>
                  <li>Ambiente acolhedor e agradável</li>
                  <li>
                    Menu completo com entrada, prato principal e sobremesa
                  </li>
                </ul>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="font-semibold text-neutral-900">Almoços</p>
                  <p className="mt-1 text-sm md:text-base text-neutral-700">
                    aos domingos
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-neutral-900">Jantares</p>
                  <p className="mt-1 text-sm md:text-base text-neutral-700">
                    todos os dias da semana
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <div className="w-full max-w-2xl overflow-hidden bg-black/5">
                <img
                  src={casaevents}
                  alt="Eventos - imagem"
                  className="h-[320px] w-full object-cover md:h-[420px] lg:h-[480px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="filmar"
        className="w-full"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="h-px w-full bg-[#b08b4a]/30" />
        </div>
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-14 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT IMAGE (invertido) */}
            <div className="flex justify-start order-2 md:order-1">
              <div className="w-full max-w-2xl overflow-hidden bg-black/5">
                <img
                  src={casaevents}
                  alt="Manda Filmar - imagem"
                  className="h-[320px] w-full object-cover md:h-[420px] lg:h-[480px]"
                />
              </div>
            </div>

            {/* RIGHT CONTENT (invertido) */}
            <div className="order-1 md:order-2">
              <p className="text-sm tracking-[0.25em] text-[#b08b4a]">
                MANDA FILMAR
              </p>
              <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

              <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                Histórias ganham vida aqui
              </h2>

              <div className="mt-8 space-y-6 text-neutral-700">
                <p className="text-sm md:text-base leading-relaxed">
                  Nossa casa tombada, patrimônio arquitetônico e cultural de São
                  Paulo, é cenário para contar histórias, criar imagens e dar
                  vida a projetos.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  O Manda Filmar é a locação do espaço para filmagens, ensaios
                  fotográficos, produções audiovisuais, campanhas, entrevistas e
                  gravações.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Com ambientes versáteis, cheios de identidade, luz natural e
                  um clima acolhedor, o Manda Café Bistrô se adapta a diferentes
                  formatos e necessidades de produção.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Aqui, cada canto carrega história, afeto e estética — o
                  cenário perfeito para transformar ideias em imagem.
                </p>
              </div>

              <div className="mt-8 h-px w-14 bg-[#b08b4a]/60" />

              <div className="mt-8">
                <p className="mb-3 font-semibold text-neutral-900">
                  No Manda você tem:
                </p>

                <ul className="space-y-2 text-sm md:text-base text-neutral-700 list-disc list-inside">
                  <li>Casa tombada e cheia de personalidade</li>
                  <li>Ambientes internos e externos</li>
                  <li>Excelente localização</li>
                  <li>Espaço versátil para diferentes produções</li>
                  <li>Apoio e flexibilidade durante as gravações</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
