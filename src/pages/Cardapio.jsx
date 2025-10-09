// src/components/Cardapio.jsx
import { useMemo, useState, useRef, useEffect } from "react";
import { MENU_ITEMS } from "../datas/menuItems";

export default function Cardapio() {
  const [category, setCategory] = useState("Tudo");
  const [completeMode, setCompleteMode] = useState(true); // “Completo”

  // opções do select
  const categories = useMemo(
    () => ["Tudo", ...Array.from(new Set(MENU_ITEMS.map((i) => i.category)))],
    []
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

  // ---- Barra de rolagem (trilho + marcador) ----
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [y, setY] = useState(0); // posição do marcador (px)
  const [trackH, setTrackH] = useState(0); // altura do trilho

  const onScroll = () => {
    const el = scrollRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const progress =
      el.scrollHeight === el.clientHeight
        ? 0
        : el.scrollTop / (el.scrollHeight - el.clientHeight);

    const knobH = 16; // altura do quadradinho
    const usable = track.clientHeight - knobH;
    setY(usable * progress);
  };

  useEffect(() => {
    const sync = () => {
      if (!scrollRef.current || !trackRef.current) return;
      setTrackH(scrollRef.current.clientHeight);
      onScroll();
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ------------------------------------------------

  return (
    <section className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <h1 className="font-lobster text-5xl md:text-6xl text-center text-[#e4d7b9] mb-6">
          Cardápio
        </h1>

        {/* Filtros */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <select
              aria-label="Filtrar categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="appearance-none pr-10 pl-4 py-2 rounded-full border border-[#c7b08f] focus:outline-none focus:ring-2 focus:ring-[#a08866]"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              ▾
            </span>
          </div>

          <button
            type="button"
            onClick={() => setCompleteMode((v) => !v)}
            className="px-4 py-2 rounded-full bg-[#b9a489] text-white hover:brightness-105 transition"
            aria-pressed={completeMode}
            title="Alternar modo de exibição"
          >
            {completeMode ? "Completo →" : "Compacto"}
          </button>

          <button
            type="button"
            className="p-2 rounded-full border border-[#c7b08f] hover:bg-[#f6efe2]"
            title="Baixar PDF"
          >
            ⤓
          </button>
        </div>

        {/* Lista + trilho lateral */}
        <div className="grid grid-cols-[1fr_auto] gap-6">
          {/* LISTA com rolagem própria */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="overflow-y-auto pr-6 max-h-[70vh] scroll-smooth no-scrollbar-local "
          >
            <div className="space-y-10">
              {Object.entries(grouped).map(([section, items]) => (
                <section key={section}>
                  <h2 className="text-[#b9a489] tracking-widest font-semibold mb-3">
                    {section.toUpperCase()}
                  </h2>

                  <ul className="divide-y divide-neutral-200">
                    {items.map((item) => (
                      <li key={item.id} className="py-4">
                        <div className="flex items-start gap-3">
                          {/* bolinha/ícone */}
                          <span className="mt-1 inline-block w-5 h-5 rounded-full border border-neutral-300" />
                          <div className="flex-1">
                            <div className="flex items-baseline justify-between gap-4">
                              <h3 className="font-semibold">{item.name}</h3>
                              <span className="tabular-nums font-semibold">
                                {Number(item.price).toFixed(0)}.
                              </span>
                            </div>

                            {/* Descrição some no modo compacto */}
                            {completeMode && (
                              <p className="text-sm text-neutral-600 mt-1">
                                {item.desc}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Forçar a saida do scrollbar da div */}
                  <style>{`.no-scrollbar-local {-ms-overflow-style: none;    /* IE/Edge antigo */ scrollbar-width: none;       /* Firefox */} .no-scrollbar-local::-webkit-scrollbar {width: 0 !important;         /* Chrome/Safari/Opera */ height: 0 !important; background: transparent;}`}</style>
                </section>
              ))}
            </div>
          </div>

          {/* TRILHO da rolagem */}
          <div className="relative">
            <div
              ref={trackRef}
              style={{ height: trackH ? `${trackH}px` : undefined }}
              className="sticky top-24 w-2 flex justify-center"
            >
              {/* linha */}
              <div className="w-[3px] h-full bg-[#e4d7b9] rounded" />
              {/* marcador */}
              <div
                style={{ transform: `translateY(${Math.max(0, y)}px)` }}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#b9a489] rounded-[4px] shadow-md"
                aria-hidden
              />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex justify-evenly">
          <a
            href="#"
            className="px-6 py-3 rounded-2xl bg-[#22775d] text-white hover:brightness-110"
          >
            Retire na loja
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-2xl bg-[#ee4c58] text-white hover:brightness-110"
          >
            Peça no iFood
          </a>
        </div>
      </div>
    </section>
  );
}
