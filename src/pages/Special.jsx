import { ArrowRight } from "lucide-react";

import pena from "../assets/pena.png";
import dog from "../assets/dog.png";

import bolonhesa from "../assets/Bolonhesa.jpg";
const casa = "/casa.png";
import cacto from "../assets/cacto.png";
import PhotoGalleryCard from "../components/PhotoGalleryCard";

function Special() {
  const images = [bolonhesa, casa, cacto];

  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto text-center p-5">
        <h1 className="font-lobster text-6xl font-bold text-[#5a5a5a]">
          Ocasiões Especiais
        </h1>
        <img src={pena} alt="pena" className="w-36 h-auto mt-2" />
        <p className="text-xl text-[#9ea3a3] mt-2">
          DE PORTAS ABERTAS PARA RECEBER VOCÊ E SEUS CONVIDADOS
        </p>
      </div>

      <section className="py-10 sm:py-14 md:py-20">
        {/* conteúdo centralizado (tire o max-w se quiser esticar tudo) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* CARD (mantido) */}
            <PhotoGalleryCard
              images={images}
              imgAlt="Galeria de eventos"
              sizeClass="h-[240px] md:h-[300px]"
            />

            {/* TEXTO — abaixo no mobile, à direita no md+ */}
            <div className="flex flex-col justify-center items-center gap-4">
              <h3 className="font-raleway m-3 text-[#303d40] text-base md:text-lg">
                Jantares ou almoços personalizados, em ambientes externos ou
                internos, com opções de salas privativas. entrada + principal +
                sobremesa
              </h3>
              <button
                type="button"
                className="flex items-center gap-2 px-5 h-11 rounded-xl
             bg-[#E5D7BE] text-[#6d6d6d] font-semibold shadow-md
             hover:brightness-95 transition group"
              >
                <span>Pacotes</span>
                <ArrowRight className="w-5 h-5 opacity-80 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center pt-10">
            <img
              src={dog}
              alt="pet friendly"
              className="w-40 h-20 object-contain"
            />
            <h1 className="font-raleway text-gray-600 text-2xl">
              pet friendly
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Special;
