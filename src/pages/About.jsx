import key from "../assets/key.png";

function About() {
  return (
    <div className="py-16 px-4">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto text-center ">
        <h1 className="font-lobster text-6xl font-bold text-[#5a5a5a] ">
          Eventos
        </h1>
        <img src={key} alt="key" className="w-35 h-auto" />{" "}
        <p className="text-xl text-[#9ea3a3]">
          DE PORTAS ABERTAS PARA RECEBER VOCÊ E SEUS CONVIDADOS
        </p>
      </div>
    </div>
  );
}

export default About;
