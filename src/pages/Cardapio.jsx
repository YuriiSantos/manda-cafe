import { useMemo, useState, useRef, useEffect } from "react";
import { MENU_ITEMS } from "../datas/menuItems";

import eventos1 from "../assets/eventos/eventos1.jpg";
import eventos5_2 from "../assets/eventos/eventos5.2.jpg";
import eventos5 from "../assets/eventos/eventos5.jpg";
import eventos9 from "../assets/eventos/eventos9.jpg";
import eventos11 from "../assets/eventos/eventos11.JPG";

import filmar1 from "../assets/eventos/filmar/1imagem-filmar.jpg";
import filmar2 from "../assets/eventos/filmar/2imagem-filmar.jpg";
import filmar3 from "../assets/eventos/filmar/3imagem-filmar.jpg";
import filmar4 from "../assets/eventos/filmar/4imagem-filmar.jpg";
import filmar5 from "../assets/eventos/filmar/5imagem-filmar.jpg";
import filmar7 from "../assets/eventos/filmar/7imagem-filmar.jpg";

import poucos1 from "../assets/eventos/poucos/1imagem-poucos.jpg";
import poucos2 from "../assets/eventos/poucos/2imagem-poucos.jpg";
import poucos3 from "../assets/eventos/poucos/3imagem-poucos.jpg";
import poucos4 from "../assets/eventos/poucos/4imagem-poucos.jpg";
import poucos5 from "../assets/eventos/poucos/5imagem-poucos.jpg";
import poucos6 from "../assets/eventos/poucos/6imagem-poucos.jpg";
import poucos7 from "../assets/eventos/poucos/7imagem-poucos.jpg";

const CARDAPIO_OFICIAL_URL = "https://www.canva.com/pt_br/";
const IFOOD_URL = "https://www.ifood.com.br/";

const carouselImages = [
  { src: eventos1, title: "Manda Café" },
  { src: eventos5_2, title: "Experiência" },
  { src: eventos5, title: "Sabores" },
  { src: eventos9, title: "Momentos" },
  { src: eventos11, title: "Cardápio" },
  { src: filmar1, title: "Especial" },
  { src: filmar2, title: "Bistrô" },
  { src: filmar3, title: "Delícias" },
  { src: filmar4, title: "Cozinha" },
  { src: filmar5, title: "Ambiente" },
  { src: filmar7, title: "Descobertas" },
  { src: poucos1, title: "Seleção" },
  { src: poucos2, title: "Pratos" },
  { src: poucos3, title: "Detalhes" },
  { src: poucos4, title: "Texturas" },
  { src: poucos5, title: "Afeto" },
  { src: poucos6, title: "Receitas" },
  { src: poucos7, title: "Brasilidades" },
];

export default function Cardapio() {
  const [category, setCategory] = useState("Tudo");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDocMouseDown = (e) => {
      const btn = btnRef.current;
      const menu = menuRef.current;
      if (!btn || !menu) return;
      if (btn.contains(e.target) || menu.contains(e.target)) return;
      setOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
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

  const categories = useMemo(
    () => ["Tudo", ...Array.from(new Set(MENU_ITEMS.map((i) => i.category)))],
    [],
  );

  const grouped = useMemo(() => {
    const filtered =
      category === "Tudo"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((i) => i.category === category);

    return filtered.reduce((acc, item) => {
      (acc[item.category] ||= []).push(item);
      return acc;
    }, {});
  }, [category]);

  const selectCategory = (c) => {
    setCategory(c);
    setOpen(false);
    requestAnimationFrame(() => btnRef.current?.focus());
  };

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
            href={IFOOD_URL}
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
            title="Abrir loja no iFood"
          >
            <span aria-hidden className="text-[12px] leading-none">
              ↗
            </span>
            Loja no iFood
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

        <div className="mt-10 flex justify-center">
          <div className="relative w-[240px]">
            <button
              ref={btnRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="
                w-full
                rounded-full
                border border-[#c7b08f]
                bg-[#faf8f4]
                px-4 py-2
                text-sm text-neutral-800
                shadow-sm
                transition
                hover:border-[#b08b4a]
                hover:shadow
                focus:outline-none
                focus:ring-4 focus:ring-[#b08b4a]/15
                focus:border-[#b08b4a]
                relative
              "
            >
              <span className="block text-center w-full truncate pr-6">
                {category}
              </span>

              <span
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-[#b08b4a] transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                ▾
              </span>
            </button>

            {open && (
              <div
                ref={menuRef}
                role="listbox"
                aria-label="Categorias do cardápio"
                className="
                  absolute z-50 mt-3 w-full
                  rounded-2xl
                  border border-[#e6d8bf]
                  bg-white/90
                  backdrop-blur-md
                  shadow-xl
                  overflow-hidden
                "
              >
                <ul className="py-2">
                  {categories.map((c) => {
                    const active = c === category;
                    return (
                      <li key={c}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={active}
                          onClick={() => selectCategory(c)}
                          className={`
                            w-full text-left px-4 py-2.5 text-sm
                            transition
                            flex items-center justify-between
                            ${
                              active
                                ? "bg-[#b08b4a]/10 text-[#7a5d2b] font-medium"
                                : "text-neutral-800 hover:bg-[#b08b4a]/8"
                            }
                          `}
                        >
                          <span className="truncate">{c}</span>
                          {active && (
                            <span className="text-[#b08b4a]" aria-hidden>
                              ✓
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

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

        <div className="mt-16">
          <div className="space-y-14">
            {Object.entries(grouped).map(([section, items]) => (
              <section key={section}>
                <h2 className="mb-6 text-center text-xs tracking-[0.35em] text-[#b08b4a]">
                  {section.toUpperCase()}
                </h2>

                <div className="max-w-3xl mx-auto rounded-[28px] border border-[#eadfcd] bg-white/60 backdrop-blur-sm p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                  <ul className="space-y-6">
                    {items.map((item) => (
                      <li key={item.id} className="group">
                        <div className="flex justify-between items-start gap-6">
                          <div>
                            <h3 className="font-medium text-neutral-800">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-sm text-neutral-600">
                              {item.desc}
                            </p>
                          </div>

                          <span className="font-medium tabular-nums text-neutral-800 whitespace-nowrap">
                            {Number(item.price).toFixed(0)}
                          </span>
                        </div>
                        <div className="mt-5 h-px bg-neutral-200/70" />
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
