import React, { useEffect, useState } from "react";

const casaImg = "/manda-cafe/casa.png";

function IntroHero({ onEnter }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = casaImg;
  }, []);

  const handleEnter = () => {
    setIsLeaving(true);
    setTimeout(() => onEnter?.(), 700);
  };

  const containerBase =
    "fixed inset-0 w-full h-full z-[9999] overflow-hidden transform transition-all duration-700 ease-out";

  const containerState = isLeaving
    ? "opacity-0 -translate-y-10"
    : "opacity-100 translate-y-0";

  return (
    <section className={`${containerBase} ${containerState} font-raleway`}>
      {/* ANIMAÇÃO DE ZOOM SUAVE */}
      <style>{`
        @keyframes zoomSlow {
          from { transform: scale(1); }
          to   { transform: scale(1.09); }
        }
      `}</style>

      {/* Fundo com aproximação */}
      <div className="absolute inset-0">
        <img
          src={casaImg}
          alt="Fachada do Manda Café"
          className="absolute inset-0 w-full h-full object-cover object-[50%_78%]"
          style={{ animation: "zoomSlow 18s ease-in-out forwards" }}
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="translate-y-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            BEM-VINDO AO
            <br />
            MANDA CAFÉ
          </h1>

          <button
            type="button"
            onClick={handleEnter}
            className="
              mt-8 inline-flex items-center justify-center
              rounded-full bg-[#e6d2a3]
              px-10 py-3
              text-sm sm:text-base
              font-semibold text-[#3a2a1a]
              shadow-lg
              hover:bg-[#d8c18e]
              transition
            "
          >
            ADENTRE!
          </button>
        </div>
      </div>
    </section>
  );
}

export default IntroHero;
