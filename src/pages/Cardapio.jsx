import { useState, useRef, useEffect } from "react";

import pratoc1 from "../assets/cardapio/pratoc1.jpeg";
import pratoc2 from "../assets/cardapio/pratoc2.jpeg";
import pratoc4 from "../assets/cardapio/pratoc4.jpeg";
import pratoc5 from "../assets/cardapio/pratoc5.jpeg";
import pratoc6 from "../assets/cardapio/pratoc6.jpeg";
import pratoc7 from "../assets/cardapio/pratoc7.jpeg";
import pratoc8 from "../assets/cardapio/pratoc8.jpeg";
import pratoc9 from "../assets/cardapio/pratoc9.jpeg";
import pratoc10 from "../assets/cardapio/pratoc10.jpeg";
import pratoc11 from "../assets/cardapio/pratoc11.jpeg";
import pratoc12 from "../assets/cardapio/pratoc12.jpeg";
import pratoc13 from "../assets/cardapio/pratoc13.jpeg";
import pratoc15 from "../assets/cardapio/pratoc15.jpeg";
import pratoc16 from "../assets/cardapio/pratoc16.jpeg";
import pratoc17 from "../assets/cardapio/pratoc17.jpeg";
import pratoc18 from "../assets/cardapio/pratoc18.jpeg";
import pratoc19 from "../assets/cardapio/pratoc19.jpeg";
import pratoc20 from "../assets/cardapio/pratoc20.jpeg";
import pratoc21 from "../assets/cardapio/pratoc21.jpeg";

const CARDAPIO_OFICIAL_URL = "https://canva.link/f8q0shgkhy9f7hi";
const delivery = "https://linktr.ee/abednego.rodrigues1";

const carouselImages = [
  { src: pratoc1, title: "Pasta" },
  { src: pratoc2, title: "Stroganoff" },
  { src: pratoc4, title: "Bife" },
  { src: pratoc5, title: "File de frango" },
  { src: pratoc6, title: "Especial" },
  { src: pratoc7, title: "Omelete" },
  { src: pratoc8, title: "Frango" },
  { src: pratoc9, title: "Kibe" },
  { src: pratoc10, title: "Kibe" },
  { src: pratoc11, title: "Kibe" },
  { src: pratoc12, title: "Kibe" },
  { src: pratoc13, title: "Kibe" },
  { src: pratoc15, title: "Stroganoff" },
  { src: pratoc16, title: "Macarrão" },
  { src: pratoc17, title: "Macarrão com bife" },
  { src: pratoc18, title: "Macarrão" },
  { src: pratoc19, title: "Torrada" },
  { src: pratoc20, title: "Pão com ovo" },
  { src: pratoc21, title: "Sanduiche" },
];

export default function Cardapio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDocMouseDown = (e) => {
      const btn = btnRef.current;
      const menu = menuRef.current;
      if (!btn || !menu) return;
      if (btn.contains(e.target) || menu.contains(e.target)) return;
    };

    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % carouselImages.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? carouselImages.length - 1 : prev - 1,
        );
      }
    };

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const getOffset = (index) => {
    const total = carouselImages.length;
    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section className="bg-[#faf8f4] px-4 py-16 min-h-[100vh] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-lobster text-5xl md:text-6xl text-center text-[#b08b4a]">
          Cardápio
        </h1>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href={CARDAPIO_OFICIAL_URL}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-white/40
              backdrop-blur
              px-3.5 py-1.5
              text-[11px] tracking-[0.22em] uppercase
              text-[#7a5d2b]
              shadow-sm
              transition
              hover:bg-white/60
              hover:shadow
              focus:outline-none
              focus:ring-4 focus:ring-[#b08b4a]/15
            "
            title="Abrir cardápio atualizado"
          >
            <span aria-hidden className="text-[12px] leading-none">
              ⤓
            </span>
            Cardápio atualizado
          </a>

          <a
            href={delivery}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-[#ea1d2c]/10
              px-3.5 py-1.5
              text-[11px] tracking-[0.22em] uppercase
              text-black
              shadow-sm
              transition
              hover:bg-[#ea1d2c]/15
              hover:shadow
              focus:outline-none
              focus:ring-4 focus:ring-[#ea1d2c]/20
            "
            title="Abrir link delivery"
          >
            <span aria-hidden className="text-[12px] leading-none">
              ↗
            </span>
            Delivery
          </a>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-sm leading-relaxed text-neutral-700 text-justify hyphens-auto">
          O cardápio do Manda foi criado para acolher e surpreender, com muita
          brasilidade e toques contemporâneos. Para dar vida a uma cozinha
          simples e refinada, os caderninhos de receitas das matriarcas da
          família são consultados a todo momento, nos presenteando, com
          generosidade, pequenos segredos da nossa culinária.
          <br />
          <br />
          Ao visitar o Bistrô, você será surpreendido por nosso combo, um pratos
          rotativo e sazonal, pensados para renovar a experiência a cada visita.
        </p>

        <p className="mt-6 text-center italic text-neutral-600">
          Qual será o seu prato favorito?
        </p>

        <div className="mt-16">
          <div className="relative mx-auto flex items-center justify-center">
            <button
              type="button"
              onClick={goPrev}
              className="z-30 mr-2 md:mr-6 h-11 w-11 rounded-full border border-[#d9c6a3] bg-white/70 backdrop-blur text-[#7a5d2b] shadow-md transition hover:scale-105 hover:bg-white"
              aria-label="Imagem anterior"
            >
              ‹
            </button>

            <div
              className="relative w-full max-w-5xl h-[340px] md:h-[500px]"
              style={{ perspective: "1800px" }}
            >
              {carouselImages.map((slide, index) => {
                const offset = getOffset(index);
                const isActive = offset === 0;

                const translateX = offset * 220;
                const rotateY = offset * -38;
                const translateZ = isActive ? 0 : -220;
                const scale = isActive ? 1 : 0.82;
                const opacity = Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.55;
                const zIndex = 50 - Math.abs(offset);

                return (
                  <button
                    key={`${slide.title}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="absolute left-1/2 top-1/2 w-[250px] h-[310px] md:w-[380px] md:h-[460px] rounded-[28px] overflow-hidden shadow-2xl border border-white/30"
                    style={{
                      transform: `
                        translate3d(-50%, -50%, ${translateZ}px)
                        translateX(${translateX}px)
                        rotateY(${rotateY}deg)
                        scale(${scale})
                      `,
                      opacity,
                      zIndex,
                      transition:
                        "transform 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease",
                    }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                    <div className="absolute left-0 bottom-0 w-full p-5 md:p-6 text-left">
                      <p className="text-[10px] md:text-xs tracking-[0.32em] uppercase text-[#f1ddae] mb-2">
                        Manda Café
                      </p>
                      <h3 className="text-white text-2xl md:text-3xl font-semibold drop-shadow">
                        {slide.title}
                      </h3>
                    </div>

                    {isActive && (
                      <div className="absolute inset-0 rounded-[28px] ring-4 ring-[#b08b4a]/40" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="z-30 ml-2 md:ml-6 h-11 w-11 rounded-full border border-[#d9c6a3] bg-white/70 backdrop-blur text-[#7a5d2b] shadow-md transition hover:scale-105 hover:bg-white"
              aria-label="Próxima imagem"
            >
              ›
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {carouselImages.map((_, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    active ? "w-8 bg-[#b08b4a]" : "w-2.5 bg-[#d8c7a8]"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
