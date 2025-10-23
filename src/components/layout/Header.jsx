import { Link, useLocation } from "react-router-dom";
import logoMandaCafe from "../../assets/logo.png";
import Sidebar from "./Sidebar";

export default function Header() {
  const { pathname } = useLocation();

  // Item de navegação para desktop
  const NavLink = ({ to, children }) => {
    const isActive = pathname === to;
    return (
      <Link
        to={to}
        className={`
          font-raleway text-sm lg:text-base font-medium tracking-wide
          transition-all duration-300 relative
          ${isActive ? "text-white" : "text-white/80 hover:text-white"}
        `}
      >
        {children}
        {isActive && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />
        )}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-[#c9b896] shadow-md">
      <div className="mx-auto w-full max-w-screen-xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 flex items-center justify-between">
        {/* Menu hamburguer - APENAS MOBILE */}
        <div className="lg:hidden">
          <Sidebar />
        </div>

        {/* Navegação Desktop - APENAS TELAS GRANDES */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bistro">Bistrô</NavLink>
          <NavLink to="/cardapio">Cardápio</NavLink>
          <NavLink to="/special">Ocasiões Especiais</NavLink>
        </nav>

        {/* Logo - maior e à direita no mobile, centralizado no desktop */}
        <Link
          to="/"
          aria-label="Ir para a página inicial"
          className="ml-auto lg:mx-auto"
        >
          <img
            src={logoMandaCafe}
            alt="Manda Café"
            className="h-25 w-25 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain"
          />
        </Link>

        {/* Navegação Desktop (lado direito) - APENAS TELAS GRANDES */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavLink to="/events">Eventos</NavLink>
          <NavLink to="/gallery">Galeria</NavLink>
          <NavLink to="/about">Quem Somos</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </nav>
      </div>
    </header>
  );
}
