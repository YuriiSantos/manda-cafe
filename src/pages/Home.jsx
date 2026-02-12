import React from "react";
import bolonhesa from "../assets/Bolonhesa.jpg";
import casa from "../assets/casa.jpg";
import bistro from "../assets/bistro.jpg";
import evento1 from "../assets/evento1.jpg";

function Home() {
  return (
    <div className="font-raleway">
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
            backgroundPosition: "center 90%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-[#fffcf8]" />
      </section>

      <section className="bg-[#fffcf8] text-[#3c3021]">
        <div className="max-w-5xl mx-auto space-y-0 pb-24">
          {/* BLOCO 1 */}
          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            {/* centraliza o CONTEÚDO dentro do bloco */}
            <div className="p-8 sm:p-9 lg:p-10 flex flex-col justify-center items-center text-center h-full">
              {/* controla largura do texto e mantém tudo centralizado */}
              <div className="space-y-4 w-full max-w-md sm:max-w-lg">
                <h3 className="font-lobster text-[30px] sm:text-[36px] text-[#b08b4a]">
                  O MANDA CAFÉ - (A CASA)
                </h3>

                <p className="text-[11px] uppercase tracking-[0.2em] text-[#b08b4a]/80">
                  ✻ ✻ Manda Café
                </p>

                <div className="flex justify-center">
                  <span className="w-10 h-px bg-[#b08b4a]" />
                </div>

                {/* JUSTIFICADO (word) */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#56452f] text-justify">
                  Somos uma charmosa casa tombada, patrimônio arquitetônico e
                  cultural de São Paulo, e lar do nosso MANDAcaru, que cultiva
                  suas raízes há mais de 60 anos. Aqui, você encontra um espaço
                  acolhedor para almoçar com a família e os amigos, trazer o
                  mozão, fazer suas festas e brindar suas conquistas, com uma
                  comida caseira, afetiva e refinada. No Manda Café Bistrô, você
                  Celebra Sonhos e Cria Memórias!
                </p>
              </div>

              <button className="mt-10 text-[11px] uppercase tracking-[0.2em] text-[#b08b4a] hover:text-[#3c3021] transition underline underline-offset-8">
                Saiba mais
              </button>
            </div>

            <div className="overflow-hidden h-full">
              <img
                src={casa}
                alt="Restaurante"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* BLOCO 2 */}
          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            {/* centraliza o CONTEÚDO dentro do bloco */}
            <div className="p-8 sm:p-9 lg:p-10 flex flex-col justify-center items-center text-center order-1 md:order-2 h-full">
              <div className="space-y-4 w-full max-w-md sm:max-w-lg">
                <h3 className="font-lobster text-[30px] sm:text-[36px] text-[#b08b4a]">
                  Bistrô
                </h3>

                <p className="text-[11px] uppercase tracking-[0.2em] text-[#b08b4a]/80">
                  ✻ ✻ Cardápio
                </p>

                <div className="flex justify-center">
                  <span className="w-10 h-px bg-[#b08b4a]" />
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#56452f] text-justify">
                  O Manda Café nasceu como uma cafeteria, com um ou dois pratos
                  à la carte. Com o tempo, a procura dos nossos vizinhos por uma
                  comida simples, caseira, mas refinada nos inspirou a expandir.
                  Aos poucos, ampliamos o cardápio, aprimoramos receitas e o
                  Manda Café ganhou alma de bistrô: um espaço onde o sabor
                  abraça, e cada detalhe é pensado para você relaxar e se sentir
                  bem.
                </p>
              </div>

              <button className="mt-10 text-[11px] uppercase tracking-[0.2em] text-[#b08b4a] hover:text-[#3c3021] transition underline underline-offset-8">
                Ver cardápio
              </button>
            </div>

            <div className="overflow-hidden order-2 md:order-1 h-full">
              <img
                src={bistro}
                alt="Chef"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* BLOCO 3 */}
          <div className="grid md:grid-cols-2 items-stretch md:min-h-[380px]">
            {/* centraliza o CONTEÚDO dentro do bloco */}
            <div className="p-8 sm:p-9 lg:p-10 flex flex-col justify-center items-center text-center h-full">
              <div className="space-y-4 w-full max-w-md sm:max-w-lg">
                <h3 className="font-lobster text-[30px] sm:text-[36px] text-[#b08b4a]">
                  Eventos
                </h3>

                <p className="text-[11px] uppercase tracking-[0.2em] text-[#b08b4a]/80">
                  ✻ Celebre sonhos <br />✻ & crie memórias
                </p>

                <div className="flex justify-center">
                  <span className="w-10 h-px bg-[#b08b4a]" />
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#56452f] text-justify">
                  Já pensou em celebrar momentos importantes em uma casa que é
                  PATRIMÔNIO arquitetônico e cultural da cidade de São Paulo?
                  <br /> <br /> Quais eventos posso fazer? <br />
                  Aniversários adulto e infantil, noivado, miniwedding, chá de
                  bebê, chá revelação, batizado, eventos corporativos, happy
                  hour, lançamentos, eventos culturais, jantares especiais,
                  filmagens de conteúdo e outros.
                </p>
              </div>
              <a href=""></a>
              <button className="mt-10 text-[11px] uppercase tracking-[0.2em] text-[#b08b4a] hover:text-[#3c3021] transition underline underline-offset-8">
                Ver opções
              </button>
            </div>

            <div className="overflow-hidden h-full">
              <img
                src={evento1}
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
