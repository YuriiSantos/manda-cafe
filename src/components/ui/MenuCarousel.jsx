// MenuCarousel.jsx - Hero full-width estilo D.O.M.
import React, { useState } from "react";

function MenuCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      eyebrow: "BEM-VINDO AO",
      title: "Manda Café",
      subtitle: "Gastronomia brasileira",
      description:
        "Sabores afetivos, ingredientes frescos e um ambiente acolhedor para celebrar bons momentos na Casa Manda Café.",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1600&h=900&fit=crop&auto=format&q=80",
      cta: "Ver cardápio",
    },
    {
      eyebrow: "OCASIÕES ESPECIAIS",
      title: "Reservas & Eventos",
      subtitle: "Celebrações inesquecíveis",
      description:
        "Aniversários, encontros e comemorações com menu exclusivo, serviço atencioso e o clima perfeito para receber quem você ama.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop&auto=format&q=80",
      cta: "Fazer reserva",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-screen bg-black text-white">
      {/* linha inteira do hero */}
      <div className="flex flex-col md:flex-row w-full min-h-[320px] md:h-[60vh] lg:h-[70vh]">
        {/* IMAGEM ESQUERDA */}
        <div className="relative w-full md:w-1/2 h-[260px] md:h-full">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* TEXTO DIREITO – COR IGUAL AO HEADER */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-10 lg:px-16 py-8 md:py-0 bg-[#c9b896]">
          <div className="max-w-xl space-y-4 sm:space-y-5 text-[#3c3021]">
            {slide.eyebrow && (
              <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#856b3c]">
                {slide.eyebrow}
              </p>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#2a2117]">
              {slide.title}
            </h2>

            {slide.subtitle && (
              <div className="space-y-1">
                <div className="w-10 h-[2px] bg-[#856b3c]" />
                <p className="text-xs sm:text-sm text-[#4f3d26] font-medium">
                  {slide.subtitle}
                </p>
              </div>
            )}

            {slide.description && (
              <p className="text-xs sm:text-sm md:text-base text-[#3c3021] leading-relaxed">
                {slide.description}
              </p>
            )}

            {slide.cta && (
              <button
                type="button"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-[#4f3d26] px-6 py-2.5 text-xs sm:text-sm font-medium text-[#4f3d26] hover:bg-[#4f3d26] hover:text-[#fdf7ea] transition-colors duration-200"
              >
                {slide.cta}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SETAS LATERAIS */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 border border-white/60 rounded-full items-center justify-center bg-black/40 hover:bg-black/70 transition-colors"
        aria-label="Slide anterior"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 border border-white/60 rounded-full items-center justify-center bg-black/40 hover:bg-black/70 transition-colors"
        aria-label="Próximo slide"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* BULLETS */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full border border-white/60 transition-colors ${
              idx === currentSlide ? "bg-white" : "bg-transparent"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuCarousel;
