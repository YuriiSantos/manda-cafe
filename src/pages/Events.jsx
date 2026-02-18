// src/pages/Events.jsx (ou onde estiver seu componente)
import casaevents from "../assets/casaevents.jpg";
import noMandaVoceTem from "../assets/eventos-home.jpg";
import gravar from "../assets/grava.jpg";

import ocasioes from "../assets/ocasioes.jpeg";

import eventos1 from "../assets/eventos/eventos1.jpg";
import eventos5_2 from "../assets/eventos/eventos5.2.jpg";
import eventos5 from "../assets/eventos/eventos5.jpg";
import eventos9 from "../assets/eventos/eventos9.jpg";
import eventos11 from "../assets/eventos/eventos11.JPG";
import eventos12 from "../assets/eventos/eventos12.jpg";
import eventos13 from "../assets/eventos/eventos13.jpg";
import eventos14 from "../assets/eventos/eventos14.jpg";
import eventos15 from "../assets/eventos/eventos15.jpg";
import eventos16 from "../assets/eventos/eventos16.jpg";
import eventos17 from "../assets/eventos/eventos17.jpg";
import eventos17_1 from "../assets/eventos/eventos17-1.jpg";
import eventos18 from "../assets/eventos/eventos18.jpg";
import eventos19 from "../assets/eventos/eventos19.jpg";
import eventos20 from "../assets/eventos/eventos20.jpg";
import eventos21 from "../assets/eventos/eventos21.jpg";
import eventos22 from "../assets/eventos/eventos22.jpg";
import eventos23 from "../assets/eventos/eventos23.jpg";
import eventos24 from "../assets/eventos/gravacao.jpg";

import video1 from "../assets/eventos/video1.mp4";
import video2 from "../assets/eventos/video2.mp4";
import video3 from "../assets/eventos/video3.mp4";
import video3_1 from "../assets/eventos/video3-1.mp4";
import video3_2 from "../assets/eventos/video3-2.mp4";
import video4 from "../assets/eventos/video4.mp4";
import video4_1 from "../assets/eventos/video4-1.mp4";
import video5_1 from "../assets/eventos/video5-1.mp4";
import video6_1 from "../assets/eventos/video6-1.mp4";
import video9_1 from "../assets/eventos/video9-1.mp4";

import video from "../assets/video.mp4";
import headerBg from "../assets/header-bg.jpg";

import { useEffect, useRef, useState } from "react";

function Events() {
  const MEDIA = [
    { type: "video", src: video1 },
    { type: "video", src: video2 },
    { type: "video", src: video3 },
    { type: "video", src: video3_1 },
    { type: "video", src: video3_2 },
    { type: "image", src: eventos1 },
    { type: "video", src: video4 },
    { type: "video", src: video4_1 },
    { type: "image", src: eventos5_2 },
    { type: "image", src: eventos5 },
    { type: "video", src: video5_1 },
    { type: "video", src: video6_1 },
    { type: "image", src: eventos9 },
    { type: "video", src: video9_1 },
    { type: "image", src: eventos11 },
  ];

  const thumbsRef = useRef(null);

  // ✅ ADICIONADO (somente para o carrossel): estados profissionais das setas + índice visível
  const [thumbIndex, setThumbIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // ✅ lightbox (original)
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (idx) => {
    setActiveIndex(idx);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevImg = () =>
    setActiveIndex((i) => (i - 1 + MEDIA.length) % MEDIA.length);

  const nextImg = () => setActiveIndex((i) => (i + 1) % MEDIA.length);

  // ✅ NOVO: scroll sempre alinhado (sem chute de gap/tamanho)
  const scrollToThumb = (idx) => {
    const el = thumbsRef.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-thumb]");
    const target = items[idx];
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  // ✅ NOVO: setas navegam por 1 item e ficam sempre alinhadas ao snap
  const scrollThumbs = (dir) => {
    const next =
      dir === "next"
        ? Math.min(thumbIndex + 1, MEDIA.length - 1)
        : Math.max(thumbIndex - 1, 0);

    setThumbIndex(next);
    scrollToThumb(next);
  };

  // ✅ NOVO: habilita/desabilita setas com base no scroll REAL
  useEffect(() => {
    const el = thumbsRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const left = el.scrollLeft;

      const EPS = 8;

      setCanPrev(left > EPS);
      setCanNext(left < max - EPS);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  // ✅ NOVO: mantém thumbIndex correto mesmo quando usuário arrasta com touch/trackpad
  useEffect(() => {
    const el = thumbsRef.current;
    if (!el) return;

    const items = [...el.querySelectorAll("[data-thumb]")];
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            idx: Number(e.target.getAttribute("data-thumb")),
            left: e.boundingClientRect.left,
          }))
          .sort((a, b) => a.left - b.left);

        if (visible[0]) setThumbIndex(visible[0].idx);
      },
      { root: el, threshold: 0.6 },
    );

    items.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [MEDIA.length]);

  // ✅ teclado no popup: ESC fecha, setas navegam (original)
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
  }, [isOpen]);

  const active = MEDIA[activeIndex];

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

          {/* ✅ CARROSSEL (agora foto + vídeo) */}
          <div className="mt-10 border-t border-black/10 pt-5">
            <div className="relative">
              {/* ✅ NOVO: fades laterais (só visual, não mexe no layout) */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#fffcf8] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#fffcf8] to-transparent z-10" />

              <div
                ref={thumbsRef}
                className="
                  flex items-stretch gap-2.5
                  overflow-x-auto scroll-smooth
                  snap-x snap-mandatory
                  py-2
                  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                  overscroll-x-contain
                  px-1
                "
              >
                {MEDIA.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    data-thumb={idx}
                    onClick={() => openLightbox(idx)}
                    aria-label={
                      item.type === "video"
                        ? `Abrir vídeo ${idx + 1}`
                        : `Abrir imagem ${idx + 1}`
                    }
                    className="
                      snap-start shrink-0
                      w-[145px] md:w-[165px] lg:w-[185px]
                      overflow-hidden rounded-2xl
                      bg-white
                      ring-1 ring-black/10
                      shadow-[0_10px_22px_rgba(0,0,0,0.08)]
                      relative
                      transition
                      hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)]
                      active:translate-y-0 active:scale-[0.99]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b08b4a]/50
                    "
                  >
                    <div className="aspect-[3/4] w-full relative">
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={`Foto ${idx + 1}`}
                          className="h-full w-full object-cover select-none"
                          draggable={false}
                          loading="lazy"
                        />
                      ) : (
                        <>
                          {/* Thumb do vídeo: usa poster se tiver, senão mostra o próprio vídeo pausado */}
                          {item.poster ? (
                            <img
                              src={item.poster}
                              alt={`Vídeo ${idx + 1}`}
                              className="h-full w-full object-cover select-none"
                              draggable={false}
                              loading="lazy"
                            />
                          ) : (
                            <video
                              className="h-full w-full object-cover"
                              src={item.src}
                              muted
                              playsInline
                              preload="metadata"
                            />
                          )}

                          {/* ícone play */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-black/45 backdrop-blur ring-1 ring-white/20 flex items-center justify-center transition group-hover:scale-105">
                              <svg
                                viewBox="0 0 24 24"
                                className="h-6 w-6 text-white translate-x-[1px]"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </>
                      )}

                      {/* ✅ NOVO: overlay de hover pra dar feedback de clique */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition bg-black/10" />

                      {/* degrade discreto (original) */}
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

              {/* setas (✅ agora com hover/active/disabled profissional) */}
              <button
                type="button"
                onClick={() => scrollThumbs("prev")}
                aria-label="Anterior"
                disabled={!canPrev}
                className="
                  absolute left-2 top-1/2 -translate-y-1/2 z-20
                  h-11 w-11 rounded-full
                  bg-white/90 backdrop-blur
                  ring-1 ring-black/10
                  shadow-lg
                  flex items-center justify-center
                  transition
                  hover:bg-white hover:shadow-xl hover:scale-[1.03]
                  active:scale-[0.98]
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
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
                disabled={!canNext}
                className="
                  absolute right-2 top-1/2 -translate-y-1/2 z-20
                  h-11 w-11 rounded-full
                  bg-white/90 backdrop-blur
                  ring-1 ring-black/10
                  shadow-lg
                  flex items-center justify-center
                  transition
                  hover:bg-white hover:shadow-xl hover:scale-[1.03]
                  active:scale-[0.98]
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
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

          {/* ✅ POPUP / LIGHTBOX (foto OU vídeo) */}
          {isOpen && (
            <div
              className="fixed inset-0 z-[9999]"
              aria-modal="true"
              role="dialog"
            >
              <div
                className="absolute inset-0 bg-black/90"
                onClick={closeLightbox}
              />

              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                <div className="relative w-full max-w-5xl">
                  {/* fechar */}
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

                  {/* setas */}
                  <button
                    type="button"
                    onClick={prevImg}
                    aria-label="Anterior"
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
                    aria-label="Próximo"
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

                  {/* conteúdo */}
                  <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] bg-black/70">
                    {active.type === "image" ? (
                      <img
                        src={active.src}
                        alt={`Imagem ${activeIndex + 1}`}
                        className="w-full max-h-[82vh] object-contain"
                        draggable={false}
                      />
                    ) : (
                      <video
                        className="w-full max-h-[82vh] object-contain"
                        src={active.src}
                        poster={active.poster}
                        controls
                        autoPlay
                        playsInline
                      />
                    )}
                  </div>

                  <div className="mt-3 flex items-center justify-center text-white/70 text-sm">
                    {activeIndex + 1} / {MEDIA.length} — aperte ESC para sair
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
        </div>
      </section>
    </div>
  );
}

export default Events;
