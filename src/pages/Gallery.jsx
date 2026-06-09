import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronRight } from "lucide-react";

// Manda Natureza
import natureza1 from "../assets/galeria/flores/flor1.jpg";
import natureza2 from "../assets/galeria/flores/flor2.jpg";
import natureza3 from "../assets/galeria/flores/flor3.jpg";
import natureza4 from "../assets/galeria/flores/flor4.jpg";
import natureza5 from "../assets/galeria/flores/flor5.jpg";
import natureza6 from "../assets/galeria/flores/flor6.jpg";
import natureza7 from "../assets/galeria/flores/flor7.jpg";

// Manda Dia a Dia
import dia1 from "../assets/galeria/dia/dia1.jpg";
import dia2 from "../assets/galeria/dia/dia2.jpg";
import dia3 from "../assets/galeria/dia/dia3.jpg";
import dia4 from "../assets/galeria/dia/dia4.jpg";
import dia5 from "../assets/galeria/dia/dia5.jpg";
import dia6 from "../assets/galeria/dia/dia6.jpg";
import dia7 from "../assets/galeria/dia/dia7.jpg";

// Manda Casa
import casa1 from "../assets/galeria/casa/casa1.jpg";
import casa2 from "../assets/galeria/casa/casa2.jpg";
import casa3 from "../assets/galeria/casa/casa3.jpg";
import casa4 from "../assets/galeria/casa/casa4.jpg";
import casa5 from "../assets/galeria/casa/casa5.jpg";
import casa6 from "../assets/galeria/casa/casa6.jpg";
import casa7 from "../assets/galeria/casa/casa7.jpg";

// Manda Pet
import pet1 from "../assets/galeria/pet/pet1.jpg";
import pet2 from "../assets/galeria/pet/pet2.jpg";
import pet3 from "../assets/galeria/pet/pet3.jpg";
import pet4 from "../assets/galeria/pet/pet4.jpg";
import pet5 from "../assets/galeria/pet/pet5.jpg";
import pet6 from "../assets/galeria/pet/pet6.jpg";
import pet7 from "../assets/galeria/pet/pet7.jpg";

// Manda Memórias
import memorias1 from "../assets/galeria/memorias/memorias1.jpg";
import memorias2 from "../assets/galeria/memorias/memorias2.jpg";
import memorias3 from "../assets/galeria/memorias/memorias3.jpg";
import memorias4 from "../assets/galeria/memorias/memorias4.jpg";
import memorias5 from "../assets/galeria/memorias/memorias5.jpg";
import memorias6 from "../assets/galeria/memorias/memorias6.jpg";
import memorias7 from "../assets/galeria/memorias/memorias7.jpg";

// Manda Festas
import festa1 from "../assets/galeria/festa/festa1.jpg";
import festa2 from "../assets/galeria/festa/festa2.jpg";
import festa3 from "../assets/galeria/festa/festa3.jpg";
import festa4 from "../assets/galeria/festa/festa4.jpg";
import festa5 from "../assets/galeria/festa/festa5.jpg";
import festa6 from "../assets/galeria/festa/festa6.jpg";
import festa7 from "../assets/galeria/festa/festa7.jpg";
import festa8 from "../assets/galeria/festa/festa8.jpg";
import festa9 from "../assets/galeria/festa/festa9.jpg";
import festa10 from "../assets/galeria/festa/festa10.jpg";
import festa11 from "../assets/galeria/festa/festa11.jpg";
import festa12 from "../assets/galeria/festa/festa12.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "manda-festas", label: "Manda Festas" },
    { id: "casa-manda", label: "A Casa Manda" },
    { id: "manda-natureza", label: "Manda Natureza" },
    { id: "manda-pet", label: "Manda Pet" },
    { id: "dia-a-dia", label: "Dia a Dia do Manda" },
    { id: "memorias-manda", label: "Memórias do Manda" },
  ];

  const images = [
    {
      id: 1,
      url: festa1,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 2,
      url: casa1,
      alt: "A Casa Manda",
      category: "casa-manda",
    },
    {
      id: 3,
      url: natureza1,
      alt: "Manda Natureza",
      category: "manda-natureza",
    },
    {
      id: 4,
      url: pet1,
      alt: "Manda Pet",
      category: "manda-pet",
    },
    {
      id: 5,
      url: dia1,
      alt: "Dia a Dia do Manda",
      category: "dia-a-dia",
    },
    {
      id: 6,
      url: memorias1,
      alt: "Memórias do Manda",
      category: "memorias-manda",
    },
    {
      id: 7,
      url: festa2,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 8,
      url: natureza2,
      alt: "Manda Natureza",
      category: "manda-natureza",
    },
    {
      id: 9,
      url: casa2,
      alt: "A Casa Manda",
      category: "casa-manda",
    },
    {
      id: 10,
      url: pet2,
      alt: "Manda Pet",
      category: "manda-pet",
    },
    {
      id: 11,
      url: festa3,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 12,
      url: dia2,
      alt: "Dia a Dia do Manda",
      category: "dia-a-dia",
    },
    {
      id: 13,
      url: memorias2,
      alt: "Memórias do Manda",
      category: "memorias-manda",
    },
    {
      id: 14,
      url: natureza3,
      alt: "Manda Natureza",
      category: "manda-natureza",
    },
    {
      id: 15,
      url: festa4,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 16,
      url: casa3,
      alt: "A Casa Manda",
      category: "casa-manda",
    },
    {
      id: 17,
      url: pet3,
      alt: "Manda Pet",
      category: "manda-pet",
    },
    {
      id: 18,
      url: dia3,
      alt: "Dia a Dia do Manda",
      category: "dia-a-dia",
    },
    {
      id: 19,
      url: festa5,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 20,
      url: memorias3,
      alt: "Memórias do Manda",
      category: "memorias-manda",
    },
    {
      id: 21,
      url: natureza4,
      alt: "Manda Natureza",
      category: "manda-natureza",
    },
    {
      id: 22,
      url: casa4,
      alt: "A Casa Manda",
      category: "casa-manda",
    },
    {
      id: 23,
      url: festa6,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 24,
      url: pet4,
      alt: "Manda Pet",
      category: "manda-pet",
    },
    {
      id: 25,
      url: dia4,
      alt: "Dia a Dia do Manda",
      category: "dia-a-dia",
    },
    {
      id: 26,
      url: memorias4,
      alt: "Memórias do Manda",
      category: "memorias-manda",
    },
    {
      id: 27,
      url: festa7,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 28,
      url: natureza5,
      alt: "Manda Natureza",
      category: "manda-natureza",
    },
    {
      id: 29,
      url: casa5,
      alt: "A Casa Manda",
      category: "casa-manda",
    },
    {
      id: 30,
      url: pet5,
      alt: "Manda Pet",
      category: "manda-pet",
    },
    {
      id: 31,
      url: festa8,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 32,
      url: dia5,
      alt: "Dia a Dia do Manda",
      category: "dia-a-dia",
    },
    {
      id: 33,
      url: memorias5,
      alt: "Memórias do Manda",
      category: "memorias-manda",
    },
    {
      id: 34,
      url: natureza6,
      alt: "Manda Natureza",
      category: "manda-natureza",
    },
    {
      id: 35,
      url: festa9,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 36,
      url: casa6,
      alt: "A Casa Manda",
      category: "casa-manda",
    },
    {
      id: 37,
      url: pet6,
      alt: "Manda Pet",
      category: "manda-pet",
    },
    {
      id: 38,
      url: dia6,
      alt: "Dia a Dia do Manda",
      category: "dia-a-dia",
    },
    {
      id: 39,
      url: festa10,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 40,
      url: memorias6,
      alt: "Memórias do Manda",
      category: "memorias-manda",
    },
    {
      id: 41,
      url: natureza7,
      alt: "Manda Natureza",
      category: "manda-natureza",
    },
    {
      id: 42,
      url: casa7,
      alt: "A Casa Manda",
      category: "casa-manda",
    },
    {
      id: 43,
      url: pet7,
      alt: "Manda Pet",
      category: "manda-pet",
    },
    {
      id: 44,
      url: dia7,
      alt: "Dia a Dia do Manda",
      category: "dia-a-dia",
    },
    {
      id: 45,
      url: festa11,
      alt: "Manda Festas",
      category: "manda-festas",
    },
    {
      id: 46,
      url: memorias7,
      alt: "Memórias do Manda",
      category: "memorias-manda",
    },
    {
      id: 47,
      url: festa12,
      alt: "Manda Festas",
      category: "manda-festas",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  const modal =
    selectedImage &&
    createPortal(
      <div
        className="fixed inset-0 w-screen h-screen bg-black/95 z-[9999] flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        <button
          type="button"
          className="fixed top-6 right-6 text-white hover:opacity-70 transition-opacity z-[10000]"
          onClick={() => setSelectedImage(null)}
          aria-label="Fechar"
        >
          <X size={32} strokeWidth={2} />
        </button>

        <div className="w-full h-full flex items-center justify-center pointer-events-none">
          <div
            className="flex flex-col items-center justify-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-[95vw] max-h-[82vh] object-contain rounded-lg"
            />

            <div className="text-center mt-6">
              <p className="text-white text-xl font-medium">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      </div>,
      document.body,
    );

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
              {categories.map((category) => {
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

              <button
                type="button"
                className="px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all border border-[#b08b4a]/40 text-[#b08b4a] hover:bg-[#b08b4a] hover:text-white flex items-center"
                aria-label="Mais categorias"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* GALERIA RESPONSIVA SEM ESPAÇOS BRANCOS */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative mb-4 break-inside-avoid overflow-hidden rounded-lg cursor-pointer group bg-black/5"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
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
          ))}
        </div>
      </div>

      {/* MODAL VIA PORTAL */}
      {modal}
    </div>
  );
}

export default Gallery;
