// MenuCarousel.jsx - Carousel Component
import React, { useState } from "react";

function MenuCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      main: {
        title: "Cardápio",
        image: "/cardapio-bg.jpg", // Substitua pela sua imagem
        bgColor: "from-green-600 to-green-800",
      },
      secondary: [
        {
          title: "Reservas",
          image: "/reservas-bg.jpg",
          bgColor: "from-amber-600 to-amber-800",
        },
        {
          title: "Eventos",
          image: "/eventos-bg.jpg",
          bgColor: "from-red-600 to-red-800",
        },
      ],
    },
    {
      main: {
        title: "Galeria",
        image: "/galeria-bg.jpg",
        bgColor: "from-purple-600 to-purple-800",
      },
      secondary: [
        {
          title: "Localização",
          image: "/localizacao-bg.jpg",
          bgColor: "from-blue-600 to-blue-800",
        },
        {
          title: "Sobre",
          image: "/sobre-bg.jpg",
          bgColor: "from-orange-600 to-orange-800",
        },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
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
              <div className="grid grid-cols-2 gap-2 p-2 bg-white h-70 md:h-96">
                {/* Card Principal - Esquerda - Altura total */}
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div
                    className={`h-full bg-gradient-to-br ${slide.main.bgColor} p-6 flex flex-col justify-end text-white relative`}
                  >
                    {/* Background overlay para melhor legibilidade */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Conteúdo */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2 drop-shadow-lg md:text-3xl">
                        {slide.main.title}
                      </h3>
                      <p className="text-sm opacity-90 drop-shadow md:text-base">
                        Confira nossos pratos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cards Secundários - Direita - Dividem a altura */}
                <div className="flex flex-col gap-2 h-full">
                  {slide.secondary.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1"
                    >
                      <div
                        className={`h-full bg-gradient-to-br ${card.bgColor} p-4 flex flex-col justify-end text-white relative`}
                      >
                        {/* Background overlay */}
                        <div className="absolute inset-0 bg-black/30"></div>

                        {/* Conteúdo */}
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold mb-1 drop-shadow-lg md:text-xl">
                            {card.title}
                          </h3>
                          <p className="text-xs opacity-90 drop-shadow md:text-sm">
                            {card.title === "Reservas"
                              ? "Faça sua reserva"
                              : card.title === "Eventos"
                              ? "Próximos eventos"
                              : card.title === "Localização"
                              ? "Como chegar"
                              : card.title === "Galeria"
                              ? "Nossas fotos"
                              : "Nossa história"}
                          </p>
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

      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/1 w-10 h-10 bg-[#e6ad44] hover:bg-[#d49a2e] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 z-10"
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

      {/* Botão Previous - Só aparece se não for a primeira página */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/1 w-10 h-10 bg-[#e6ad44] hover:bg-[#d49a2e] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-105 z-10"
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
