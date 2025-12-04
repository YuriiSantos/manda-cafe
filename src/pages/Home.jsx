// Home.jsx
import React from "react";
import MenuCarousel from "../components/ui/MenuCarousel";
import VisitUsSection from "../components/ui/VisitUsSection";
import bolonhesa from "../assets/Bolonhesa.jpg"; // mesma foto para todos os cards

function Home() {
  return (
    <div className="">
      {/* HERO FULL-WIDTH */}
      <section
        className="
          relative
          left-1/2 right-1/2
          -ml-[50vw] -mr-[50vw]
          w-screen
        "
      >
        <MenuCarousel />
      </section>

      <section className="bg-[#fffcf8] text-[#3c3021]">
        <div className="max-w-5xl mx-auto">
          {/* LINHA 1 */}
          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            {/* Texto */}
            <div
              className="bg-[#fffcf8] p-8 sm:p-9 lg:p-10 
                            flex flex-col justify-between 
                            text-center md:text-left h-full"
            >
              <div className="space-y-3">
                <h3 className="text-sm tracking-[0.18em] uppercase text-[#b08b4a]">
                  O Restaurante
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#b08b4a]/80">
                  Manda Café
                </p>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#56452f]">
                  Um espaço acolhedor em Perdizes, onde a gastronomia brasileira
                  ganha toques autorais, respeitando a sazonalidade dos
                  ingredientes e valorizando produtores locais.
                </p>
              </div>
              <button className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[#b08b4a] hover:text-[#3c3021] transition">
                Saiba mais
              </button>
            </div>

            {/* Imagem */}
            <div className="bg-[#fffcf8] overflow-hidden h-full">
              <img
                src={bolonhesa}
                alt="Restaurante"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* LINHA 2 */}
          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            {/* Texto */}
            <div
              className="bg-[#fffcf8] p-8 sm:p-9 lg:p-10 
                            flex flex-col justify-between 
                            text-center md:text-left 
                            order-1 md:order-2 h-full"
            >
              <div className="space-y-3">
                <h3 className="text-sm tracking-[0.18em] uppercase text-[#b08b4a]">
                  Nosso time
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#b08b4a]/80">
                  Cozinha & salão
                </p>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#56452f]">
                  A equipe do Manda Café é apaixonada por receber bem. Da
                  cozinha ao salão, todos trabalham para criar uma experiência
                  calorosa, leve e memorável em cada visita.
                </p>
              </div>
              <button className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[#b08b4a] hover:text-[#3c3021] transition">
                Ver equipe
              </button>
            </div>

            {/* Imagem */}
            <div className="bg-[#fffcf8] overflow-hidden order-2 md:order-1 h-full">
              <img
                src={bolonhesa}
                alt="Chef"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* LINHA 3 */}
          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            {/* Texto */}
            <div
              className="bg-[#fffcf8] p-8 sm:p-9 lg:p-10 
                            flex flex-col justify-between 
                            text-center md:text-left h-full"
            >
              <div className="space-y-3">
                <h3 className="text-sm tracking-[0.18em] uppercase text-[#b08b4a]">
                  Eventos
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#b08b4a]/80">
                  Ocasiões especiais
                </p>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#56452f]">
                  Do jantar intimista às celebrações com amigos, o Manda Café
                  oferece menus personalizados, bebidas selecionadas e um clima
                  perfeito para brindar momentos únicos.
                </p>
              </div>
              <button className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[#b08b4a] hover:text-[#3c3021] transition">
                Ver opções
              </button>
            </div>

            {/* Imagem */}
            <div className="bg-[#fffcf8] overflow-hidden h-full">
              <img
                src={bolonhesa}
                alt="Eventos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
