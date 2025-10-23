// MenuCarousel.jsx - Totalmente Responsivo com Unsplash (Tamanhos Reduzidos)
import React, { useState } from "react";

function MenuCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      main: {
        title: "Cardápio",
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop", // pasta italiana
      },
      secondary: [
        {
          title: "Reservas",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", // restaurante
        },
        {
          title: "Eventos",
          image:
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop", // celebração
        },
      ],
    },
    {
      main: {
        title: "Galeria",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", // pratos gourmet
      },
      secondary: [
        {
          title: "Localização",
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop", // restaurante exterior
        },
        {
          title: "Sobre",
          image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop", // chef cozinhando
        },
      ],
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16 max-w-6xl">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 gap-2 p-2 h-[300px] sm:h-[350px] md:h-[380px] lg:h-[400px] xl:h-[420px]">
                {/* CARD PRINCIPAL */}
                <div className="relative overflow-hidden rounded-xl duration-300 h-full">
                  <div
                    className="h-full relative bg-center bg-cover"
                    style={{ backgroundImage: `url(${slide.main.image})` }}
                  >
                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/30" />
                    {/* conteúdo centralizado */}
                    <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                      <h3 className="font-lobster text-white text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
                        {slide.main.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* CARDS SECUNDÁRIOS */}
                <div className="flex flex-col gap-2 h-full">
                  {slide.secondary.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="relative overflow-hidden rounded-xl transition-shadow duration-300 flex-1"
                    >
                      <div
                        className="h-full relative bg-center bg-cover"
                        style={{ backgroundImage: `url(${card.image})` }}
                      >
                        {/* overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/45 to-black/35" />
                        {/* conteúdo centralizado */}
                        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                          <h3 className="font-lobster text-white text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Próximo */}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#e6ad44] hover:bg-[#d49a2e] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 z-10"
          aria-label="Próximo"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
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
      )}

      {/* Botão Anterior */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#e6ad44] hover:bg-[#d49a2e] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 z-10"
          aria-label="Anterior"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
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
      )}
    </div>
  );
}

export default MenuCarousel;
