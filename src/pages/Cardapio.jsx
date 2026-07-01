import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  CARDAPIO_OFICIAL_URL,
  DELIVERY_URL,
  cardapioImagens,
} from "../datas/cardapioImagens";

function CardapioSlide({ slide, index, offset, isActive, onSelect, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  if (Math.abs(offset) > 2) return null;

  const translateX = offset * 220;
  const rotateY = offset * -38;
  const translateZ = isActive ? 0 : -220;
  const scale = isActive ? 1 : 0.82;
  const opacity = isActive ? 1 : 0.55;
  const zIndex = 50 - Math.abs(offset);

  function handleClick() {
    if (isActive) {
      onOpen(index);
      return;
    }

    onSelect(index);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        group
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
      aria-label={
        isActive
          ? `Ampliar imagem: ${slide.title}`
          : `Ver imagem: ${slide.title}`
      }
    >
      {!loaded && (
        <div className="absolute inset-0 bg-[#efe7da] animate-pulse" />
      )}

      <img
        src={slide.url}
        alt={slide.alt}
        loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
        fetchPriority={isActive ? "high" : "low"}
        decoding="async"
        width={slide.width}
        height={slide.height}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-500 ${
          isActive ? "group-hover:scale-105" : ""
        } ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
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
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-4 ring-[#b08b4a]/40" />
      )}
    </button>
  );
}

function CardapioModal({
  image,
  totalImages,
  currentPosition,
  onClose,
  onPrevious,
  onNext,
}) {
  const [touchStart, setTouchStart] = useState(null);

  function handleTouchStart(event) {
    setTouchStart(event.touches[0].clientX);
  }

  function handleTouchEnd(event) {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      onNext();
    }

    if (distance < -50) {
      onPrevious();
    }

    setTouchStart(null);
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        className="fixed right-5 top-5 z-[10000] text-white transition-opacity hover:opacity-70"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X size={34} strokeWidth={2} />
      </button>

      <div
        className="relative w-[92vw] max-w-[820px]"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative flex h-[58vh] min-h-[360px] max-h-[580px] w-full items-center justify-center overflow-hidden rounded-xl bg-black/05">
          <img
            src={image.url}
            alt={image.alt}
            decoding="async"
            className="block max-h-full max-w-full rounded-xl object-contain"
          />

          <button
            type="button"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/65"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/65"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex h-20 items-center justify-center text-center">
          <div>
            <p className="text-lg font-medium text-white md:text-xl">
              {image.title}
            </p>

            <p className="mt-1 text-sm text-white/60">
              {currentPosition} de {totalImages}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CardapioCarousel({ title, eyebrow, description, images, onOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function selectImage(index) {
    setActiveIndex(index);
  }

  function goPrev() {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }

  useEffect(() => {
    const indexesToPreload = [
      activeIndex,
      activeIndex === 0 ? images.length - 1 : activeIndex - 1,
      (activeIndex + 1) % images.length,
    ];

    indexesToPreload.forEach((imageIndex) => {
      const image = new Image();
      image.src = images[imageIndex].url;
    });
  }, [activeIndex, images]);

  const getOffset = (index) => {
    const total = images.length;
    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <div className="mt-16">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-[#b08b4a]">
          {eyebrow}
        </p>

        <h2 className="mt-3 font-lobster text-4xl text-[#b08b4a] md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
            {description}
          </p>
        )}
      </div>

      <div className="mt-10">
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
            {images.map((slide, index) => {
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
                  onOpen={(selectedIndex) => onOpen(images, selectedIndex)}
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
          {images.map((_, index) => {
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
  );
}

export default function Cardapio() {
  const [modalImages, setModalImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const pratosComida = cardapioImagens.slice(0, 16);
  const pratosDoces = cardapioImagens.slice(16);

  const selectedImage =
    selectedIndex !== null ? modalImages[selectedIndex] : null;

  function openModal(images, index) {
    setModalImages(images);
    setSelectedIndex(index);
  }

  function closeModal() {
    setSelectedIndex(null);
    setModalImages([]);
  }

  function showPreviousImage() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === 0 ? modalImages.length - 1 : currentIndex - 1;
    });
  }

  function showNextImage() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === modalImages.length - 1 ? 0 : currentIndex + 1;
    });
  }

  useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage || selectedIndex === null || modalImages.length === 0) {
      return;
    }

    const indexesToPreload = [
      selectedIndex,
      selectedIndex === 0 ? modalImages.length - 1 : selectedIndex - 1,
      (selectedIndex + 1) % modalImages.length,
    ];

    indexesToPreload.forEach((imageIndex) => {
      const image = new Image();
      image.src = modalImages[imageIndex].url;
    });
  }, [selectedImage, selectedIndex, modalImages]);

  useEffect(() => {
    if (!selectedImage) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, modalImages.length]);

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
              bg-[#dff3e6]
              px-3.5 py-1.5
              text-[11px] uppercase tracking-[0.22em]
              text-[#2f5d46]
              shadow-sm
              transition
              hover:bg-[#cfead9]
              hover:shadow
              focus:outline-none
              focus:ring-4 focus:ring-[#9fd8b5]/30
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

        <CardapioCarousel
          title="Pratos de Comida"
          eyebrow="Menu à la carte"
          description="Massas, saladas, carnes, pratos vegetarianos e opções especiais para todos os momentos."
          images={pratosComida}
          onOpen={openModal}
        />

        <CardapioCarousel
          title="Doces"
          eyebrow="Sobremesas"
          description="Doces clássicos, tortas e sabores afetivos para finalizar a experiência com carinho."
          images={pratosDoces}
          onOpen={openModal}
        />
      </div>

      {selectedImage && (
        <CardapioModal
          image={selectedImage}
          totalImages={modalImages.length}
          currentPosition={selectedIndex + 1}
          onClose={closeModal}
          onPrevious={showPreviousImage}
          onNext={showNextImage}
        />
      )}
    </section>
  );
}
