import logoMandaCafe from "../../assets/logo.png";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#c9b896]">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-1 sm:py-5 md:py-4 flex items-center justify-between">
        {/* Aqui fica o botão + lógica do menu, vindo do Sidebar */}
        <div className="pl-5 flex items-center justify-center">
          <Sidebar />
        </div>

        {/* Logo -> Home (inalterado) */}
        <a href="/" aria-label="Ir para a página inicial" className="block">
          <img
            src={logoMandaCafe}
            alt="Manda Café"
            className="h-30 w-30 sm:h-30 sm:w-30 md:h-30 md:w-30 lg:h-30 lg:w-30 object-contain"
          />
        </a>
      </div>
    </header>
  );
}
