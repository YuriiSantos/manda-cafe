import React from "react";
import bolonhesa from "../assets/Bolonhesa.jpg";

function Home() {
  return (
    <div>
      <section
        className="
          relative
          w-screen
          overflow-hidden
          aspect-[21/9]
          left-1/2 right-1/2
          -ml-[50vw] -mr-[50vw]
        "
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bolonhesa})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-[#fffcf8]" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 w-full" />
        </div>
      </section>

      <section className="bg-[#fffcf8] text-[#3c3021]">
        <div className="max-w-5xl mx-auto mt-10 space-y-20 pb-24">
          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            <div className="bg-[#fffcf8] p-8 sm:p-9 lg:p-10 flex flex-col justify-between text-center md:text-left h-full">
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

            <div className="bg-[#fffcf8] overflow-hidden h-full">
              <img
                src={bolonhesa}
                alt="Restaurante"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            <div className="bg-[#fffcf8] p-8 sm:p-9 lg:p-10 flex flex-col justify-between text-center md:text-left order-1 md:order-2 h-full">
              <div className="space-y-3">
                <h3 className="text-sm tracking-[0.18em] uppercase text-[#b08b4a]">
                  Nosso time
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#b08b4a]/80">
                  Cozinha &amp; salão
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

            <div className="bg-[#fffcf8] overflow-hidden order-2 md:order-1 h-full">
              <img
                src={bolonhesa}
                alt="Chef"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            <div className="bg-[#fffcf8] p-8 sm:p-9 lg:p-10 flex flex-col justify-between text-center md:text-left h-full">
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
