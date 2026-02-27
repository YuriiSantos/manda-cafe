// src/pages/Events.jsx (ou onde estiver seu componente)
import casaevents from "../assets/casaevents.jpg";
import noMandaVoceTem from "../assets/eventos-home.jpg";
import gravar from "../assets/grava.jpg";

import ocasioes from "../assets/ocasioes.jpeg";

import video from "../assets/video.mp4";
import headerBg from "../assets/header-bg.jpg";

import MediaCarousel from "../components/ui/MediaCarousel";
import { MEDIA_FESTAS, MEDIA_POUCOS, MEDIA_FILMAR } from "../datas/eventsMedia";

function Events() {
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
        id="festass"
        className="w-full text-white relative"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-16 py-8 md:py-10">
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-center min-h-[420px]">
            <div className="pt-2 md:pt-6">
              <h2 className="font-lobster text-5xl font-medium text-white">
                No Manda você tem:
              </h2>
              <div className="mt-8">
                <ul className="space-y-2 text-md text-white/90 list-disc list-inside">
                  <li>Espaço exclusivo</li>
                  <li>Área aberta e fechada</li>
                  <li>Excelente localização</li>
                  <li>Ambiente acolhedor e agradável</li>
                  <li>Serviço de buffet</li>
                  <li>Bar </li>
                  <li>Equipamento de som profissional para voz e violão</li>
                  <li>Espaço adaptável para até 80 pessoas</li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden bg-white/10">
              <img
                src={noMandaVoceTem}
                alt="Eventos - imagem principal"
                className="h-[520px] w-full object-cover md:h-[560px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MANDA FESTAS SECTION */}
      <section
        id="festas"
        className="w-full text-white relative"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="relative mx-auto max-w-7xl px-6 md:px-16 py-8 md:py-10">
          <div className="grid gap-5 items-center min-h-[420px] md:grid-cols-[0.85fr_1.15fr]">
            <div className="flex justify-center">
              <div className="w-full max-w-[320px] md:max-w-[360px] lg:max-w-[300px] overflow-hidden rounded-2xl bg-white/10 ring-1 ring-black/10">
                <div className="aspect-[9/16] w-full bg-black">
                  <video
                    className="h-full w-full object-contain"
                    src={video}
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-6">
              <h2 className="font-lobster text-4xl font-medium tracking-[0.25em] text-[#b08b4a]">
                Manda Festas
              </h2>

              <h3 className="mt-8 text-lg tracking-[0.25em] text-[#b08b4a]">
                Celebre sonhos e crie memórias
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-neutral-700 text-justify">
                Já pensou em celebrar momentos importantes em uma casa que é{" "}
                <span className="font-semibold text-neutral-700">
                  PATRIMÔNIO da cidade de São Paulo
                </span>
                ?
                <br />
                <br />
                Nossa casa é o cenário perfeito para receber de{" "}
                <span className="font-semibold text-neutral-700">
                  30 a 80 convidados{" "}
                </span>
                em confraternizações diversas, como: aniversários, noivados,
                bodas, mini-wedding, encontros corporativos, festas de fim de
                ano e outros.
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

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                  Personalizados
                </span>
                <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                  Festa Infantil
                </span>
                <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                  Festa Adulto
                </span>
                <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                  Manda Brasa
                </span>
              </div>
            </div>
          </div>

          {/* ✅ substitui o bloco gigante do carrossel por isso */}
          <MediaCarousel media={MEDIA_FESTAS} />
        </div>
      </section>

      <section
        id="poucos"
        className="w-full"
        style={{ backgroundColor: "#fffcf8" }}
      >
        <div className="mx-auto max-w-7xl px-6 pt-5 md:px-16">
          <div className="h-px w-full bg-[#b08b4a]/30" />
        </div>
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

              <div className="mt-8 space-y-6 text-neutral-700 text-justify">
                <p className="text-sm leading-relaxed">
                  O Manda pra Poucos é a escolha ideal para jantares ou almoços
                  intimistas, pensados para receber de{" "}
                  <strong>15 a 25 pessoas</strong>. Perfeito para aniversários,
                  comemorações, encontros entre amigos, familiares ou jantares
                  empresariais, esse formato nasce para valorizar a proximidade,
                  o cuidado e as conexões verdadeiras.
                </p>

                <p className="text-sm leading-relaxed">
                  Criamos um <strong>cardápio personalizado</strong>, com a sua
                  cara e seus desejos — uma comida refinada que acolhe e abraça
                  cada convidado, porque comer bem é ser feliz. O resultado são
                  encontros leves, cheios de afeto, boas risadas e aquele tempo
                  de qualidade que fica na memória.
                </p>
                <p className="text-sm leading-relaxed">
                  Manda pra Poucos este convite especial !
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                    Personalizados
                  </span>

                  <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                    Festa Infantil
                  </span>

                  <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                    Festa Adulto
                  </span>

                  <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                    Manda Brasa
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-2xl overflow-hidden bg-black/5">
                <img
                  src={ocasioes}
                  alt="Eventos - imagem"
                  className="h-[320px] w-full object-cover md:h-[420px] lg:h-[480px]"
                />
              </div>
            </div>
          </div>

          {/* ✅ carrossel Poucos (vai aparecer quando tiver mídia no arquivo data) */}
          <MediaCarousel media={MEDIA_POUCOS} />
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
            <div className="flex justify-start order-2 md:order-1">
              <div className="w-full max-w-2xl overflow-hidden bg-black/5">
                <img
                  src={gravar}
                  alt="Manda Filmar - imagem"
                  className="h-[320px] w-full object-cover md:h-[420px] lg:h-[480px]"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="font-lobster mt-8 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#b08b4a]">
                Manda Filmar
              </h2>
              <h3 className="mt-4 text-lg tracking-[0.25em] text-[#b08b4a]">
                Histórias ganham vida aqui
              </h3>

              <div className="mt-8 space-y-6 text-neutral-700 text-justify">
                <p className="text-sm leading-relaxed">
                  Nossa casa tombada, patrimônio arquitetônico e cultural de São
                  Paulo, é cenário para contar histórias, criar imagens e dar
                  vida a projetos.
                </p>

                <p className="text-sm leading-relaxed">
                  O{" "}
                  <span className="font-semibold text-neutral-700">
                    Manda Filmar{" "}
                  </span>
                  tem como objetivo receber pequenas e médias equipes do
                  audiovisual, com o intuito de realizarem{" "}
                  <span className="font-semibold text-neutral-700">
                    filmagens, ensaios fotográficos, campanhas, entrevistas,
                    documentários e produções de conteúdo.
                  </span>
                </p>

                <p className="text-sm leading-relaxed">
                  Com ambientes versáteis, cheios de identidade, luz natural e
                  um clima acolhedor, o Manda Café Bistrô se adapta a diferentes
                  formatos e necessidades de produção.
                </p>

                <p className="text-sm leading-relaxed">
                  Aqui, cada canto carrega história, afeto e estética — o
                  cenário perfeito para transformar ideias em imagem.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ carrossel Filmar (vai aparecer quando tiver mídia no arquivo data) */}
          <MediaCarousel media={MEDIA_FILMAR} />
        </div>
      </section>
    </div>
  );
}

export default Events;
