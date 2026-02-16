import casaevents from "../assets/casaevents.jpg";
import noMandaVoceTem from "../assets/eventos-home.jpg";
import gravar from "../assets/grava.jpg";

import ocasioes from "../assets/ocasioes.jpeg";
import eventos01 from "../assets/eventos01.jpg";
import eventos02 from "../assets/eventos02.jpg";
import eventos03 from "../assets/eventos03.jpg";
import eventos04 from "../assets/eventos04.jpg";
import eventos05 from "../assets/eventos05.jpg";
import eventos06 from "../assets/eventos06.jpg";
import eventos07 from "../assets/eventos07.jpg";
import eventos08 from "../assets/eventos08.jpg";
import eventos09 from "../assets/eventos09.jpg";
import eventos10 from "../assets/eventos10.jpg";
import eventos11 from "../assets/eventos11.jpg";
import eventos12 from "../assets/eventos12.png";
import eventos13 from "../assets/eventos13.jpg";

import video from "../assets/video.mp4";
import headerBg from "../assets/header-bg.jpg";

import { useEffect, useRef, useState } from "react";

function Events() {
  const thumbs = [
    eventos01,
    eventos02,
    eventos03,
    eventos04,
    eventos05,
    eventos06,
    eventos07,
    eventos08,
    eventos09,
    eventos10,
    eventos11,
    eventos12,
    eventos13,
  ];

  const thumbsRef = useRef(null);

  // ✅ lightbox (popup player)
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (idx) => {
    setActiveIndex(idx);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevImg = () =>
    setActiveIndex((i) => (i - 1 + thumbs.length) % thumbs.length);

  const nextImg = () => setActiveIndex((i) => (i + 1) % thumbs.length);

  const scrollThumbs = (dir) => {
    const el = thumbsRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card='thumb']");
    const gap = 10; // combina com gap-2.5
    const step = card ? card.clientWidth + gap : 190;

    el.scrollBy({
      left: dir === "next" ? step * 2 : -step * 2,
      behavior: "smooth",
    });
  };

  // ✅ teclado no popup: ESC fecha, setas navegam
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };

    window.addEventListener("keydown", onKeyDown);

    // trava o scroll do body com popup aberto
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, thumbs.length]);

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
            <div className="pt-2 md:pt-6">
              <h2 className="font-lobster text-5xl font-medium text-white">
                No Manda você tem:
              </h2>
              <div className="mt-8">
                <ul className="space-y-2 text-md text-white/90 list-disc list-inside">
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

            {/* conteúdo à direita */}
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

      {/* MANDA FESTAS SECTION*/}
      <section
        id="festas"
        className="w-full text-white relative"
        style={{
          backgroundColor: "#fffcf8",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 md:px-16 py-8 md:py-10">
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-center min-h-[420px]">
            <div className="overflow-hidden bg-white/10">
              <video
                className="h-[520px] w-full object-cover md:h-[560px] lg:h-[600px]"
                src={video}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>

            <div className="pt-2 md:pt-6">
              <h2 className="font-lobster text-4xl font-medium tracking-[0.25em] text-[#b08b4a]">
                Manda Festas
              </h2>
              <h3 className="mt-4 text-lg font-light leading-snug text-neutral-700">
                Celebre sonhos <br />e crie memórias
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-neutral-700">
                Já pensou em celebrar momentos importantes em uma casa que é{" "}
                <span className="font-semibold text-neutral-700">
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
            </div>
          </div>

          {/* ✅ SOMENTE ESTA PARTE FOI MODIFICADA (carrossel + popup) */}
          <div className="mt-10 border-t border-black/10 pt-5">
            <div className="relative">
              <div
                ref={thumbsRef}
                className="
                  flex items-stretch gap-2.5
                  overflow-x-auto scroll-smooth
                  snap-x snap-mandatory
                  py-2
                  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                "
              >
                {thumbs.map((src, idx) => (
                  <button
                    key={idx}
                    type="button"
                    data-card="thumb"
                    onClick={() => openLightbox(idx)}
                    aria-label={`Abrir imagem ${idx + 1}`}
                    className="
                      snap-start shrink-0
                      w-[145px] md:w-[165px] lg:w-[185px]
                      overflow-hidden rounded-2xl
                      bg-white
                      ring-1 ring-black/10
                      shadow-[0_10px_22px_rgba(0,0,0,0.08)]
                      relative
                      hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]
                      transition
                      focus:outline-none focus:ring-2 focus:ring-[#b08b4a]/40
                    "
                  >
                    <div className="aspect-[3/4] w-full relative">
                      <img
                        src={src}
                        alt={`Foto ${idx + 1}`}
                        className="h-full w-full object-cover select-none"
                        draggable={false}
                        loading="lazy"
                      />

                      {/* degrade discreto nos cantos */}
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-0 top-0 h-16 w-16 bg-gradient-to-br from-black/12 to-transparent" />
                        <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-to-bl from-black/12 to-transparent" />
                        <div className="absolute left-0 bottom-0 h-16 w-16 bg-gradient-to-tr from-black/12 to-transparent" />
                        <div className="absolute right-0 bottom-0 h-16 w-16 bg-gradient-to-tl from-black/12 to-transparent" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* setas do carrossel (svg alinhado) */}
              <button
                type="button"
                onClick={() => scrollThumbs("prev")}
                aria-label="Anterior"
                className="
                  absolute left-2 top-1/2 -translate-y-1/2 z-10
                  h-10 w-10 rounded-full
                  bg-white/90 backdrop-blur
                  ring-1 ring-black/10
                  shadow-lg
                  flex items-center justify-center
                  hover:bg-white transition
                "
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-neutral-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollThumbs("next")}
                aria-label="Próximo"
                className="
                  absolute right-2 top-1/2 -translate-y-1/2 z-10
                  h-10 w-10 rounded-full
                  bg-white/90 backdrop-blur
                  ring-1 ring-black/10
                  shadow-lg
                  flex items-center justify-center
                  hover:bg-white transition
                "
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-neutral-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* ✅ POPUP / LIGHTBOX (player style) */}
          {isOpen && (
            <div
              className="fixed inset-0 z-[9999]"
              aria-modal="true"
              role="dialog"
            >
              {/* fundo preto */}
              <div
                className="absolute inset-0 bg-black/90"
                onClick={closeLightbox}
              />

              {/* conteúdo */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                <div className="relative w-full max-w-5xl">
                  {/* botão fechar */}
                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Fechar"
                    className="
                      absolute -top-3 -right-3 md:top-2 md:right-2 z-20
                      h-10 w-10 rounded-full
                      bg-white/10 hover:bg-white/15
                      ring-1 ring-white/15
                      backdrop-blur
                      flex items-center justify-center
                      transition
                    "
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>

                  {/* setas dentro do popup */}
                  <button
                    type="button"
                    onClick={prevImg}
                    aria-label="Imagem anterior"
                    className="
                      absolute left-2 top-1/2 -translate-y-1/2 z-20
                      h-11 w-11 rounded-full
                      bg-white/10 hover:bg-white/15
                      ring-1 ring-white/15
                      backdrop-blur
                      flex items-center justify-center
                      transition
                    "
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={nextImg}
                    aria-label="Próxima imagem"
                    className="
                      absolute right-2 top-1/2 -translate-y-1/2 z-20
                      h-11 w-11 rounded-full
                      bg-white/10 hover:bg-white/15
                      ring-1 ring-white/15
                      backdrop-blur
                      flex items-center justify-center
                      transition
                    "
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>

                  {/* imagem */}
                  <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                    <img
                      src={thumbs[activeIndex]}
                      alt={`Imagem ${activeIndex + 1}`}
                      className="w-full max-h-[82vh] object-contain bg-black"
                      draggable={false}
                    />
                  </div>

                  {/* legenda/contador */}
                  <div className="mt-3 flex items-center justify-center text-white/70 text-sm">
                    {activeIndex + 1} / {thumbs.length} — aperte ESC para sair
                  </div>
                </div>
              </div>
            </div>
          )}
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
                <p className="text-sm md:text-base leading-relaxed">
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

                  <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                    Manda Sofisticar
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
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

                  <span className="inline-flex items-center rounded-full border border-[#b08b4a]/40 px-4 py-2 text-sm font-semibold text-[#b08b4a] transition hover:bg-[#b08b4a] hover:text-white">
                    Manda Sofisticar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
