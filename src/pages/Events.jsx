import {
  Globe,
  BarChart2,
  Heart,
  Video,
  House,
  FileText,
  CalendarDays,
} from "lucide-react";
import { useMemo } from "react"; // opcional, só para deixar claro que images é estável
import key from "../assets/key.png";
import dog from "../assets/dog.png";
import bolonhesa from "../assets/Bolonhesa.jpg";
import casa from "../assets/casa.png";
import cacto from "../assets/cacto.png";
import PhotoGalleryCard from "../components/PhotoGalleryCard";

export default function Events() {
  const items = [
    { label: "SOCIAIS", Icon: Globe },
    { label: "CORPORATIVOS", Icon: BarChart2 },
    { label: "CASAMENTOS", Icon: Heart },
    { label: "SET", Icon: Video },
  ];

  const images = useMemo(() => [bolonhesa, casa, cacto], []);

  return (
    <div className="py-5 px-4">
      {/* título */}
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto text-center">
        <h1 className="font-lobster text-6xl font-bold text-[#5a5a5a]">
          Eventos
        </h1>
        <img src={key} alt="key" className="w-36 h-auto mt-2" />
        <p className="text-xl text-[#9ea3a3] mt-2">
          DE PORTAS ABERTAS PARA RECEBER VOCÊ E SEUS CONVIDADOS
        </p>
      </div>

      {/* section (igual) */}
      <section className="relative mt-10 w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
        <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-20 bg-[#e4d6b8]" />

        <div
          className="relative mx-auto max-w-[750px] md:max-w-[800px] lg:max-w-[850px] 
          grid grid-cols-2 sm:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-4 justify-items-center"
        >
          {items.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              className="w-30 h-30 rounded-2xl bg-[#b9a489] text-white shadow-md
                         flex flex-col items-center justify-center gap-3
                         transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
              aria-label={label}
            >
              <Icon className="w-14 h-14" />
              <span className="text-sm font-semibold tracking-wide">
                {label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ====== ÁREA PRINCIPAL ====== */}
      <div className="mx-auto mt-15 md:max-w-[980px] md:grid md:grid-cols-[640px_260px] md:gap-8 md:justify-center md:items-start">
        {/* CARD DE FOTOS + MODAL (agora componente separado) */}
        <PhotoGalleryCard images={images} imgAlt="Galeria de eventos" />

        {/* SIDEBAR (igual) */}
        <aside className="hidden md:flex flex-col items-stretch gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-5 h-11 rounded-xl
                     bg-[#E5D7BE] text-[#6d6d6d] font-semibold shadow-md hover:brightness-95 transition"
          >
            <House className="w-5 h-5 opacity-80" /> Plantas
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-5 h-11 rounded-xl
                     bg-[#E5D7BE] text-[#6d6d6d] font-semibold shadow-md hover:brightness-95 transition"
          >
            <FileText className="w-5 h-5 opacity-80" /> PDF
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-5 h-11 rounded-xl
                     bg-[#E5D7BE] text-[#6d6d6d] font-semibold shadow-md hover:brightness-95 transition"
          >
            <CalendarDays className="w-5 h-5 opacity-80" /> Agenda
          </button>

          <div className="h-px bg-black/5 my-2" />

          <button
            type="button"
            className="px-6 py-3 rounded-full bg-[#D8A73D] text-white font-semibold shadow-md hover:brightness-95 transition"
          >
            Reserve
          </button>

          <div className="flex flex-col items-center gap-2 mt-2">
            <img
              src={dog}
              alt="pet friendly"
              className="w-32 h-auto object-contain"
            />
            <h2 className="font-raleway text-gray-600 text-xl">pet friendly</h2>
          </div>
        </aside>
      </div>

      {/* BOTÕES + RESERVE + PET (somente mobile/sm) */}
      <div className="md:hidden">
        <div className="flex justify-center m-5 gap-4 mt-4">
          <button
            type="button"
            className="flex items-center gap-2 px-5 h-11 rounded-xl
                   bg-[#E5D7BE] text-[#6d6d6d] font-semibold shadow-md
                   hover:brightness-95 transition"
          >
            <House className="w-5 h-5 opacity-80" />
            Plantas
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-5 h-11 rounded-xl
                   bg-[#E5D7BE] text-[#6d6d6d] font-semibold shadow-md
                   hover:brightness-95 transition"
          >
            <FileText className="w-5 h-5 opacity-80" />
            PDF
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-5 h-11 rounded-xl
                   bg-[#E5D7BE] text-[#6d6d6d] font-semibold shadow-md
                   hover:brightness-95 transition"
          >
            <CalendarDays className="w-5 h-5 opacity-80" />
            Agenda
          </button>
        </div>

        <div className="flex justify-center items-center max-w-5xl mx-auto mt-2 px-4">
          <button
            type="button"
            className="px-8 py-3 rounded-full bg-[#D8A73D] text-white font-semibold
                   shadow-md hover:brightness-95 transition"
          >
            Reserve
          </button>
          <div className="flex flex-col items-center gap-3">
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
      </div>
    </div>
  );
}
