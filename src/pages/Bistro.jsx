import cactusImg from "../assets/cacto.png";
import banoffe from "../assets/banoffe.png";

function Bistro() {
  return (
    <div className="py-7 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-lobster text-4xl font-bold text-[#e4d7b9]">
          {" "}
          Bistrô
        </h1>
        <div className="flex flex-col items-center justify-center md:flex-row py-5">
          <img src={cactusImg} alt="Cacto" className="w-64 h-auto mt-4" />{" "}
          <h1 className="font-raleway text-[#aca083] text-1xl py-5">
            Símbolo de resistência e autenticidade, o cacto representa nossa
            cozinha: simples, original e cheia de vida. Aqui, cada prato nasce
            do encontro entre tradição e criatividade
          </h1>
        </div>
        <div className="flex flex-col  items-center justify-center md:flex-row">
          <img
            src={banoffe}
            alt="Banoffee"
            className="w-64 h-auto mt-4 md:order-2 md:ml-6"
          />
          <h1 className="font-raleway text-[#aca083]  text-1xl p-10 md:order-1 md:text-center">
            VAI UM DOCE? <br /> Venha experimentar uma das Banoffees mais
            queridas de SP.
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Bistro;
