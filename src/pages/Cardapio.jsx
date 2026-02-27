// src/components/Cardapio.jsx
import { useMemo, useState, useRef, useEffect } from "react";
import { MENU_ITEMS } from "../datas/menuItems";
import { MOSAIC_LEFT, MOSAIC_RIGHT } from "../datas/cardapioMosaic";

// ✅ Troque pelos seus links reais:
const CARDAPIO_OFICIAL_URL = "https://www.canva.com/pt_br/";
const IFOOD_URL = "https://www.ifood.com.br/";

function PhotoMosaic({ images = [], side = "left" }) {
  if (!images?.length) return null;

  return (
    <aside
      className="
        hidden xl:block
        w-[320px] 2xl:w-[380px]
        shrink-0
      "
      aria-label={`Mosaico de fotos ${side}`}
    >
      <div className="sticky top-24">
        {/* ✅ Masonry via columns */}
        <div className="columns-2 gap-0">
          {images.map((src, idx) => (
            <div key={`${side}-${idx}`} className="break-inside-avoid">
              <img
                src={src}
                alt=""
                className="block w-full h-auto object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function Cardapio() {
  const [category, setCategory] = useState("Tudo");

  // ----- Dropdown custom (visual profissional) -----
  const [open, setOpen] = useState(false);
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
    };

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // opções do filtro
  const categories = useMemo(
    () => ["Tudo", ...Array.from(new Set(MENU_ITEMS.map((i) => i.category)))],
    [],
  );

  // Filtra e agrupa por seção
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

  return (
    <section className="bg-[#faf8f4] py-16 min-h-[100vh]">
      {/* ✅ FULL WIDTH layout (mosaico encosta na borda) */}
      <div className="w-full">
        <div className="flex items-start justify-between gap-8">
          {/* esquerda: encosta na tela */}
          <PhotoMosaic images={MOSAIC_LEFT} side="left" />

          {/* centro: mantém seu conteúdo centralizado */}
          <div className="flex-1 px-4">
            <div className="max-w-4xl mx-auto">
              {/* Título */}
              <h1 className="font-lobster text-5xl md:text-6xl text-center text-[#b08b4a]">
                Cardápio
              </h1>

              {/* ✅ Botões do topo */}
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
                    bg-[#ea1d2c]/30
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

              {/* Texto institucional */}
              <p className="mt-8 max-w-2xl mx-auto text-sm leading-relaxed text-neutral-700 text-justify hyphens-auto">
                O cardápio do Manda foi criado para acolher e surpreender, com
                muita brasilidade e toques contemporâneos. Para dar vida a uma
                cozinha simples e refinada, os caderninhos de receitas das
                matriarcas da família são consultados a todo momento, nos
                presenteando, com generosidade, pequenos segredos da nossa
                culinária.
                <br />
                <br />
                Ao visitar o Bistrô, você será surpreendido por nosso combo, um
                pratos rotativo e sazonal, pensados para renovar a experiência a
                cada visita.
              </p>

              <p className="mt-6 text-center italic text-neutral-600">
                Qual será o seu prato favorito?
              </p>

              {/* ✅ Filtro menor + texto centralizado */}
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

              {/* Lista */}
              <div className="mt-14">
                <div className="space-y-14">
                  {Object.entries(grouped).map(([section, items]) => (
                    <section key={section}>
                      <h2 className="mb-6 text-xs tracking-[0.35em] text-[#b08b4a]">
                        {section.toUpperCase()}
                      </h2>

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

                              <span className="font-medium tabular-nums text-neutral-800">
                                {Number(item.price).toFixed(0)}
                              </span>
                            </div>

                            <div className="mt-5 h-px bg-neutral-200/70" />
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* direita: encosta na tela */}
          <PhotoMosaic images={MOSAIC_RIGHT} side="right" />
        </div>
      </div>
    </section>
  );
}
