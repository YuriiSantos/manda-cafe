// MenuCarousel.jsx
import React, { useState } from "react";
import Bolonhesa from "../../assets/Bolonhesa.jpg";

function MenuCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      main: { title: "Cardápio", image: Bolonhesa },
      secondary: [
        { title: "Reservas", image: Bolonhesa },
        { title: "Eventos", image: Bolonhesa },
      ],
    },
    {
      main: { title: "Galeria", image: Bolonhesa },
      secondary: [
        { title: "Localização", image: Bolonhesa },
        { title: "Sobre", image: Bolonhesa },
      ],
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <div className="relative w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 gap-2 p-2 h-72 md:h-96">
                {/* CARD PRINCIPAL - TEXTO CENTRALIZADO */}
                <div className="relative overflow-hidden rounded-xl duration-300 h-full">
                  <div
                    className="h-full relative bg-center bg-cover"
                    style={{ backgroundImage: `url(${slide.main.image})` }}
                  >
                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/30" />
                    {/* conteúdo centralizado */}
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                      <h3 className="font-lobster text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg translate-y-15">
                        {slide.main.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* CARDS SECUNDÁRIOS - TAMBÉM CENTRALIZADOS */}
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
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                          <h3 className="font-lobster text-white text-3xl md:text-4xl font-bold drop-shadow-lg translate-y-6">
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

      {/* Botões */}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#e6ad44] hover:bg-[#d49a2e] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 z-10"
          aria-label="Próximo"
        >
          <svg
            className="w-5 h-5"
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

      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#e6ad44] hover:bg-[#d49a2e] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 z-10"
          aria-label="Anterior"
        >
          <svg
            className="w-5 h-5"
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
