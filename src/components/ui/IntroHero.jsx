// src/components/ui/IntroHero.jsx
import React, { useState } from "react";

const casaImg = "/manda-cafe/casa.png";

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
      <div className="absolute inset-0">
        <img
          src={casaImg}
          alt="Fachada do Manda Café"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/50" />
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
            Somos uma charmosa casa tombada, patrimônio arquitetônico e cultural
            de São Paulo, e lar do nosso MANDAcaru, que cultiva suas raízes há
            mais de 60 anos. Aqui, você encontra um espaço acolhedor para
            almoçar com a família e os amigos, trazer o mozão, fazer suas festas
            e brindar suas conquistas, com uma comida caseira, afetiva e
            refinada. No Manda Café Bistrô, você Celebra Sonhos e Cria Memórias!
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
