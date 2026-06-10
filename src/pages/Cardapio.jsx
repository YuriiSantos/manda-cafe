import { useEffect, useRef, useState } from "react";
import {
  CARDAPIO_OFICIAL_URL,
  DELIVERY_URL,
  cardapioImagens,
} from "../datas/cardapioImagens";

function CardapioSlide({ slide, index, offset, isActive, onSelect }) {
  const [loaded, setLoaded] = useState(false);

  const translateX = offset * 220;
  const rotateY = offset * -38;
  const translateZ = isActive ? 0 : -220;
  const scale = isActive ? 1 : 0.82;
  const opacity = Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.55;
  const zIndex = 50 - Math.abs(offset);

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className="
        absolute left-1/2 top-1/2
        h-[310px] w-[250px]
        overflow-hidden
        rounded-[28px]
        border border-white/30
        bg-black/5
        shadow-2xl
        md:h-[460px] md:w-[380px]
      "
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
      aria-label={`Ver imagem: ${slide.title}`}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-[#efe7da] animate-pulse" />
      )}

      <img
        src={slide.url}
        alt={slide.alt}
        loading={index < 8 ? "eager" : "lazy"}
        decoding="async"
        width={slide.width}
        height={slide.height}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-500 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-5 text-left md:p-6">
        <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-[#f1ddae] md:text-xs">
          Manda Café
        </p>

        <h3 className="text-2xl font-semibold text-white drop-shadow md:text-3xl">
          {slide.title}
        </h3>
      </div>

      {isActive && (
        <div className="absolute inset-0 rounded-[28px] ring-4 ring-[#b08b4a]/40" />
      )}
    </button>
  );
}

export default function Cardapio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimeoutRef = useRef(null);

  function pauseAutoPlay() {
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  }

  function selectImage(index) {
    pauseAutoPlay();
    setActiveIndex(index);
  }

  function goPrev() {
    pauseAutoPlay();

    setActiveIndex((prev) =>
      prev === 0 ? cardapioImagens.length - 1 : prev - 1,
    );
  }

  function goNext() {
    pauseAutoPlay();

    setActiveIndex((prev) => (prev + 1) % cardapioImagens.length);
  }

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardapioImagens.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goNext();
      }

      if (e.key === "ArrowLeft") {
        goPrev();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  const getOffset = (index) => {
    const total = cardapioImagens.length;
    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section className="min-h-[100vh] overflow-hidden bg-[#faf8f4] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center font-lobster text-5xl text-[#b08b4a] md:text-6xl">
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
              px-3.5 py-1.5
              text-[11px] uppercase tracking-[0.22em]
              text-[#7a5d2b]
              shadow-sm
              backdrop-blur
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
            href={DELIVERY_URL}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-[#ea1d2c]/10
              px-3.5 py-1.5
              text-[11px] uppercase tracking-[0.22em]
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

        <p className="mx-auto mt-8 max-w-2xl text-justify text-sm leading-relaxed text-neutral-700 hyphens-auto">
          O cardápio do Manda foi criado para acolher e surpreender, com muita
          brasilidade e toques contemporâneos. Para dar vida a uma cozinha
          simples e refinada, recorremos aos caderninhos de receitas das
          matriarcas da família, que nos presenteiam, com generosidade, com
          pequenos segredos da nossa culinária.
          <br />
          <br />
          Venha conhecer nosso menu à la carte, com pratos individuais que
          agradam diferentes paladares, incluindo deliciosas opções vegetarianas
          e veganas.
        </p>

        <p className="mt-6 text-center italic text-neutral-600">
          Qual será o seu prato favorito?
        </p>

        <div className="mt-16">
          <div className="relative mx-auto flex items-center justify-center">
            <button
              type="button"
              onClick={goPrev}
              className="
                z-30 mr-2 h-11 w-11
                rounded-full
                border border-[#d9c6a3]
                bg-white/70
                text-[#7a5d2b]
                shadow-md
                backdrop-blur
                transition
                hover:scale-105
                hover:bg-white
                md:mr-6
              "
              aria-label="Imagem anterior"
            >
              ‹
            </button>

            <div
              className="relative h-[340px] w-full max-w-5xl md:h-[500px]"
              style={{ perspective: "1800px" }}
            >
              {cardapioImagens.map((slide, index) => {
                const offset = getOffset(index);
                const isActive = offset === 0;

                return (
                  <CardapioSlide
                    key={slide.id}
                    slide={slide}
                    index={index}
                    offset={offset}
                    isActive={isActive}
                    onSelect={selectImage}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="
                z-30 ml-2 h-11 w-11
                rounded-full
                border border-[#d9c6a3]
                bg-white/70
                text-[#7a5d2b]
                shadow-md
                backdrop-blur
                transition
                hover:scale-105
                hover:bg-white
                md:ml-6
              "
              aria-label="Próxima imagem"
            >
              ›
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {cardapioImagens.map((_, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectImage(index)}
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
