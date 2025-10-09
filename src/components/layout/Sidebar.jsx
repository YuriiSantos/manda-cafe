// Sidebar.jsx
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom"; // ← AQUI
import {
  Home,
  ChefHat,
  NotebookText,
  CalendarCheck,
  CalendarDays,
  Images,
  MapPin,
  Users,
  Mail,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);
  const { pathname } = useLocation(); // para marcar ativo

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  // Item usando Link (respeita basename)
  const Item = ({ to, icon: Icon, label, active, badge }) => (
    <Link
      to={to}
      className={[
        "flex items-center gap-3 rounded-xl px-4 py-3 font-medium tracking-wide transition-colors",
        "text-white",
        active ? "bg-white/25 border border-white/30" : "hover:bg-white/10",
      ].join(" ")}
      onClick={closeMenu}
    >
      <Icon className="w-5 h-5 text-white" strokeWidth={1.7} />
      <span className="flex-1 leading-tight">{label}</span>
      {typeof badge === "number" && (
        <span className="ml-auto rounded-full text-xs px-2 py-0.5 bg-white/20 text-white">
          {badge}
        </span>
      )}
    </Link>
  );

  // mapeie para os paths que EXISTEM no App.jsx (inglês)
  const is = (p) => pathname === p;

  const Drawer = (
    <>
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[9998] bg-black/40 transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu lateral"
        className={`fixed inset-y-0 left-0 z-[10000] w-80 max-w-[85vw] bg-[#a59679] shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full flex flex-col text-white">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="text-[25px] font-semibold tracking-wide">
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="rounded-md p-2 hover:bg-white/10"
              aria-label="Fechar menu"
              type="button"
            >
              <X className="w-5 h-5" strokeWidth={1.8} />
            </button>
          </div>

          <nav className="relative p-4 space-y-1">
            <Item to="/" icon={Home} label="Home" active={is("/")} />
            <Item
              to="/bistro"
              icon={ChefHat}
              label="Bistrô"
              active={is("/bistro")}
            />
            <Item
              to="/cardapio"
              icon={NotebookText}
              label="Cardápio"
              active={is("/cardapio")}
            />
            <Item
              to="/reservations"
              icon={CalendarCheck}
              label="Reservas"
              active={is("/reservations")}
            />
            <Item
              to="/events"
              icon={CalendarDays}
              label="Eventos"
              active={is("/events")}
            />
            <Item
              to="/gallery"
              icon={Images}
              label="Galeria"
              active={is("/gallery")}
            />
            <Item
              to="/location"
              icon={MapPin}
              label="Localização"
              active={is("/location")}
            />
          </nav>

          <div className="mx-4 my-2 h-px bg-white/30" />

          <nav className="relative px-4 pb-4 space-y-1">
            <Item
              to="/about"
              icon={Users}
              label="Quem somos"
              active={is("/about")}
            />
            <Item
              to="/contact"
              icon={Mail}
              label="Contato"
              active={is("/contact")}
            />
          </nav>
        </div>
      </aside>
    </>
  );

  return (
    <>
      <button
        onClick={openMenu}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 md:w-14 md:h-14 lg:w-16 lg:h-16"
        aria-label="Abrir menu"
        type="button"
      >
        <div className="flex flex-col gap-1">
          <span className="w-10 h-1 bg-white rounded-full md:w-6 lg:w-7"></span>
          <span className="w-10 h-1 bg-white rounded-full md:w-6 lg:w-7"></span>
          <span className="w-10 h-1 bg-white rounded-full md:w-6 lg:w-7"></span>
          <span className="w-10 h-1 bg-white rounded-full md:w-6 lg:w-7"></span>
        </div>
      </button>

      {createPortal(Drawer, document.body)}
    </>
  );
}
