import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { galleryCategories, galleryImages } from "../datas/galleryImages";

function GalleryImage({ image, index, onSelect }) {
  const [loaded, setLoaded] = useState(false);

  const hasDimensions = image.width && image.height;

  return (
    <div
      className="relative mb-4 break-inside-avoid overflow-hidden rounded-lg cursor-pointer group bg-black/5"
      onClick={() => onSelect(image)}
      style={
        hasDimensions
          ? {
              aspectRatio: `${image.width} / ${image.height}`,
            }
          : undefined
      }
    >
      {!loaded && (
        <div className="absolute inset-0 bg-[#efe7da] animate-pulse" />
      )}

      <img
        src={image.url}
        alt={image.alt}
        loading={index < 8 ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={index < 4 ? "high" : "auto"}
        width={image.width}
        height={image.height}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-all duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-medium text-sm">{image.alt}</p>
        </div>
      </div>

      {/* ÍCONE EXPANDIR */}
      <div className="absolute top-4 right-4 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fffcf8]/90">
        <svg
          className="w-5 h-5 text-[#b08b4a]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      </div>
    </div>
  );
}

function GalleryModal({ image, onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen bg-black/95 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        className="fixed top-6 right-6 text-white hover:opacity-70 transition-opacity z-[10000]"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X size={32} strokeWidth={2} />
      </button>

      <div
        className="inline-flex max-w-[95vw] max-h-[90vh] flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.url}
          alt={image.alt}
          decoding="async"
          className="block w-auto h-auto max-w-[95vw] max-h-[82vh] rounded-lg"
        />

        <div className="text-center mt-6">
          <p className="text-white text-xl font-medium">{image.alt}</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;

    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    if (selectedImage) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#fffcf8]">
      {/* HEADER */}
      <div className="border-b border-black/10 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.25em] text-[#b08b4a]">GALERIA</p>
          <div className="mt-3 h-[2px] w-12 bg-[#b08b4a]" />

          <h1 className="font-lobster mt-8 text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#b08b4a]">
            Manda Café
          </h1>

          {/* CATEGORIAS */}
          <div className="mt-10 relative">
            <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {galleryCategories.map((category) => {
                const active = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all border
                      ${
                        active
                          ? "bg-[#b08b4a] text-white border-[#b08b4a]"
                          : "bg-transparent text-[#b08b4a] border-[#b08b4a]/40 hover:bg-[#b08b4a] hover:text-white"
                      }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* GALERIA RESPONSIVA SEM ESPAÇOS BRANCOS */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              index={index}
              onSelect={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* MODAL VIA PORTAL */}
      {selectedImage && (
        <GalleryModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default Gallery;
