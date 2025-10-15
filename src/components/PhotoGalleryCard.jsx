import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PhotoGalleryCard({
  images = [],
  imgAlt = "",
  className = "",
  sizeClass,
}) {
  const [iCard, setICard] = useState(0);
  const prevCard = () =>
    setICard((v) => (v - 1 + images.length) % images.length);
  const nextCard = () => setICard((v) => (v + 1) % images.length);

  const [open, setOpen] = useState(false);
  const [iModal, setIModal] = useState(0);
  const prevModal = () =>
    setIModal((v) => (v - 1 + images.length) % images.length);
  const nextModal = () => setIModal((v) => (v + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prevModal();
      if (e.key === "ArrowRight") nextModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!images || images.length === 0) {
    return (
      <div
        className={`w-full rounded-3xl bg-black/5 grid place-items-center ${
          sizeClass ?? ""
        } ${className}`}
      >
        <p className="text-gray-500">Nenhuma imagem disponível</p>
      </div>
    );
  }

  // se não passar sizeClass, cai num tamanho padrão moderado
  const effectiveSize = sizeClass ?? "h-[360px] md:h-[320px]";

  return (
    <>
      {/* CARD / CARROSSEL */}
      <div
        className={`relative w-full rounded-3xl overflow-hidden shadow-lg ${effectiveSize} ${className}`}
      >
        <img
          src={images[iCard]}
          alt={imgAlt}
          className="w-full h-full object-cover object-center cursor-zoom-in"
          onClick={() => {
            setIModal(iCard);
            setOpen(true);
          }}
        />

        <button
          onClick={prevCard}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                     bg-[#e4d6b8] text-white flex items-center justify-center"
          aria-label="Anterior"
          type="button"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextCard}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                     bg-[#e4d6b8] text-white flex items-center justify-center"
          aria-label="Próxima"
          type="button"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "860px",
              height: "540px",
              maxWidth: "95vw",
              maxHeight: "85vh",
            }}
          >
            <img
              src={images[iModal]}
              alt={imgAlt}
              className="w-full h-full object-cover object-center"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/70 hover:bg-black/80 text-white"
              aria-label="Fechar"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={prevModal}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/80 text-white flex items-center justify-center"
              aria-label="Anterior"
              type="button"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextModal}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/80 text-white flex items-center justify-center"
              aria-label="Próxima"
              type="button"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
