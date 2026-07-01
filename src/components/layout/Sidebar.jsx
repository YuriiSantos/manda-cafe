import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";

import SidebarBg from "../../assets/header-bg.jpg";
import FotoCasaManda from "../../assets/fotocasamandaart.png";
import LogoManda from "../../assets/logo.png";

import {
  Home,
  ChefHat,
  NotebookText,
  CalendarCheck,
  CalendarDays,
  Mail,
  X,
  Snowflake,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  const { pathname } = useLocation();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  const is = (p) => pathname === p;

  const Item = ({ to, icon: Icon, label, active }) => (
    <Link
      to={to}
      onClick={closeMenu}
      className={[
        "group relative flex items-center gap-3 rounded-2xl px-4 py-3",
        "font-raleway text-[15px] font-semibold tracking-wide",
        "transition-all duration-300",
        "text-white",
        active
          ? "bg-white/20 border border-white/45 shadow-sm"
          : "hover:bg-white/10",
      ].join(" ")}
    >
      <Icon className="w-5 h-5 text-white shrink-0" strokeWidth={1.8} />

      <span className="flex-1 leading-tight whitespace-nowrap">{label}</span>

      <span
        className={[
          "absolute left-4 right-4 -bottom-0.5 h-0.5 bg-white rounded-full",
          "transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        ].join(" ")}
      />
    </Link>
  );

  const Drawer = (
    <>
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[9998] bg-black/40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu lateral"
        className={`fixed inset-y-0 left-0 z-[10000] w-[300px] max-w-[84vw] shadow-2xl overflow-hidden transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundImage: `url(${SidebarBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 z-[1] bg-[#8f7b5f]/10" />

        <img
          src={FotoCasaManda}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none absolute z-[2]
            left-1/2 bottom-0
            w-[145%] max-w-none
            -translate-x-1/2
            opacity-75
          "
        />

        <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/5 via-transparent to-black/10" />

        <div className="relative z-[10] h-full flex flex-col text-white">
          <div className="relative flex items-center justify-between px-5 pt-5 pb-6">
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="Ir para a página inicial"
              className="flex items-center gap-4"
            >
              <img
                src={LogoManda}
                alt="Manda Café"
                className="h-[150px] w-[100px] object-contain drop-shadow-lg"
              />
            </Link>

            <button
              onClick={closeMenu}
              className=" rounded-full p-2 hover:bg-white/15 transition-colors"
              aria-label="Fechar menu"
              type="button"
            >
              <X className="w-7 h-7" strokeWidth={1.8} />
            </button>
          </div>

          <nav className="relative z-[20] px-4 space-y-2">
            <Item to="/" icon={Home} label="Início" active={is("/")} />

            <Item
              to="/events"
              icon={CalendarDays}
              label="Eventos"
              active={is("/events")}
            />

            <Item
              to="/cardapio"
              icon={NotebookText}
              label="Cardápio"
              active={is("/cardapio")}
            />

            <Item
              to="/frozen"
              icon={Snowflake}
              label="Congelados"
              active={is("/frozen")}
            />

            <Item
              to="/gallery"
              icon={ChefHat}
              label="Galeria"
              active={is("/gallery")}
            />

            <div className="my-5 h-px bg-white/30" />

            <Item
              to="/house"
              icon={CalendarCheck}
              label="A casa"
              active={is("/house")}
            />

            <Item
              to="/contact"
              icon={Mail}
              label="Contato"
              active={is("/contact")}
            />

            <div className="pt-14"></div>
          </nav>
        </div>
      </aside>
    </>
  );

  return (
    <>
      <button
        onClick={openMenu}
        className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
        aria-label="Abrir menu"
        type="button"
      >
        <div className="flex flex-col gap-1">
          <span className="w-7 md:w-8 h-1 bg-white rounded-full" />
          <span className="w-7 md:w-8 h-1 bg-white rounded-full" />
          <span className="w-7 md:w-8 h-1 bg-white rounded-full" />
          <span className="w-7 md:w-8 h-1 bg-white rounded-full" />
        </div>
      </button>

      {createPortal(Drawer, document.body)}
    </>
  );
}
