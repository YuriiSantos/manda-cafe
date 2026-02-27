import { useEffect, useId, useRef, useState } from "react";

export default function MediaCarousel({ media = [] }) {
  const uid = useId();
  const thumbsRef = useRef(null);

  const [thumbIndex, setThumbIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // se não tem mídia, não renderiza (evita espaço vazio)
  if (!media?.length) return null;

  const openLightbox = (idx) => {
    setActiveIndex(idx);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevImg = () =>
    setActiveIndex((i) => (i - 1 + media.length) % media.length);

  const nextImg = () => setActiveIndex((i) => (i + 1) % media.length);

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

  const scrollThumbs = (dir) => {
    const next =
      dir === "next"
        ? Math.min(thumbIndex + 1, media.length - 1)
        : Math.max(thumbIndex - 1, 0);

    setThumbIndex(next);
    scrollToThumb(next);
  };

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
  }, [media.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };

    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const active = media[activeIndex];

  return (
    <>
      <div className="mt-10 border-t border-black/10 pt-5">
        <div className="relative">
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
            aria-label={`Carrossel ${uid}`}
          >
            {media.map((item, idx) => (
              <button
                key={`${uid}-${idx}`}
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

                  <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition bg-black/10" />

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

      {isOpen && (
        <div className="fixed inset-0 z-[9999]" aria-modal="true" role="dialog">
          <div
            className="absolute inset-0 bg-black/90"
            onClick={closeLightbox}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <div className="relative w-full max-w-5xl">
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
                {activeIndex + 1} / {media.length} — aperte ESC para sair
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
