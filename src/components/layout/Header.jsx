import { Link, useLocation } from "react-router-dom";
import logoMandaCafe from "../../assets/logo.png";
import headerBg from "../../assets/header-bg.jpg";
import Sidebar from "./Sidebar";

export default function Header() {
  const { pathname } = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = pathname === to;

    return (
      <Link
        to={to}
        className={`
          font-raleway text-[13px] lg:text-[18px] font-medium
          tracking-[0.11em]
          transition-all duration-300 relative
          whitespace-nowrap
          ${isActive ? "text-white" : "text-white/90 hover:text-white"}
          group
        `}
      >
        {children}

        <span
          className={`
            absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full
            transition-opacity duration-300
            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        />
      </Link>
    );
  };

  return (
    <header
      className="sticky top-0 z-70 shadow-md"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/2" />
      <div className="relative mx-auto w-full max-w-screen-xl flex items-center px-3">
        <div className="lg:hidden">
          <Sidebar />
        </div>
        <nav className="hidden lg:flex flex-1 items-center justify-end gap-7 xl:gap-12 text-center">
          <NavLink to="/events">Eventos</NavLink>
          <NavLink to="/cardapio">Cardápio</NavLink>
          <NavLink to="/congelados">Congelados</NavLink>
        </nav>
        <Link
          to="/"
          aria-label="Ir para a página inicial"
          className="px-3 ml-auto lg:mx-auto lg:ml-0"
        >
          <img
            src={logoMandaCafe}
            alt="Manda Café"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-35 md:w-35 lg:h-30 lg:w-30 object-contain"
          />
        </Link>
        <nav className="hidden lg:flex flex-1 items-center justify-start gap-7 xl:gap-10">
          <NavLink to="/casa">A casa</NavLink>
          <NavLink to="/gallery">Galeria</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>

      <div className="relative flex h-3" style={{ filter: "saturate(0.90)" }}>
        <div className="flex-1 bg-[#7c5c38]" />
        <div className="flex-1 bg-[#8a7b68]" />
        <div className="flex-1 bg-[#b68c5e]" />
        <div className="flex-1 bg-[#d1b47c]" />
        <div className="flex-1 bg-[#d19d3a]" />
        <div className="flex-1 bg-[#d06b33]" />
        <div className="flex-1 bg-[#62634d]" />
        <div className="flex-1 bg-[#b95f39]" />
        <div className="flex-1 bg-[#4e7d5e]" />
      </div>
    </header>
  );
}
