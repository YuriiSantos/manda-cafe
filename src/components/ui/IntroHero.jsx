// src/components/ui/IntroHero.jsx
import React, { useState } from "react";

const casaImg = "/manda-cafe/casa.jpg";

function IntroHero({ onEnter }) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleEnter = () => {
    setIsLeaving(true);

    setTimeout(() => {
      onEnter();
    }, 700);
  };

  const containerBase =
    "fixed inset-0 w-full h-full z-[9999] transform transition-all duration-700 ease-out";

  const containerState = isLeaving
    ? "opacity-0 -translate-y-10"
    : "opacity-100 translate-y-0";

  return (
    <section className={`${containerBase} ${containerState}`}>
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={casaImg}
          alt="Fachada do Manda Café"
          className="
            w-full
            h-full
            object-cover
            object-[50%_25%]
          "
        />

        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-3xl text-center text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide leading-tight">
            BEM VINDO AO
            <br />
            MANDA CAFÉ
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Experimente o melhor da gastronomia no Manda Café Restaurant, onde
            sabores excepcionais, ambiente elegante e um serviço impecável se
            unem para criar momentos inesquecíveis.
          </p>

          <p className="font-medium text-sm sm:text-base">
            Visite nosso restaurante
          </p>

          <button
            onClick={handleEnter}
            className="mt-4 inline-flex items-center justify-center rounded-none bg-[#e4cf9b] px-8 py-3 text-sm sm:text-base font-medium text-black shadow-md hover:bg-[#d3bd87] transition"
          >
            Venha conhecer!
          </button>
        </div>
      </div>
    </section>
  );
}

export default IntroHero;
