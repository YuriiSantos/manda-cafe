// VisitUsSection.jsx - Compact Size
import React from "react";

function VisitUsSection() {
  return (
    <section className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 max-w-md w-full md:max-w-lg lg:max-w-xl">
        {/* Card de Informações */}
        <div className="  p-4 md:p-5 text-center">
          {/* Título */}
          <h2 className="text-sm md:text-base font-light text-gray-700 tracking-widest mb-4 uppercase">
            Nos Visite
          </h2>

          {/* Ícone de Localização */}
          <div className="flex justify-center mb-2">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>

          {/* Endereço */}
          <p className="text-xs md:text-sm font-light text-gray-700 mb-4 leading-relaxed">
            R. Dona Germaine Burchard, 458
          </p>

          {/* Ícone de Telefone */}
          <div className="flex justify-center mb-2">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>

          {/* Telefone */}
          <p className="text-xs md:text-sm font-light text-gray-700 mb-4">
            +55 11 98876-5337
          </p>

          {/* Ícone de Relógio */}
          <div className="flex justify-center mb-2">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
              <polyline points="12,6 12,12 16,14" strokeWidth={1.5} />
            </svg>
          </div>

          {/* Horário */}
          <p className="text-xs md:text-sm font-light text-gray-700 mb-1">
            11.00AM - 3.30PM
          </p>

          {/* Dias da Semana */}
          <p className="text-xs font-light text-gray-600 tracking-widest uppercase">
            Segunda - Sábado
          </p>
        </div>

        {/* Imagem ao Lado */}
        <div className="bg-gray-100 border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 relative min-h-[200px] md:min-h-[250px]">
            {/* Placeholder para imagem */}
            <img
              src="/restaurante-fachada.jpg"
              alt="Fachada do Maria Café"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />

            {/* Fallback - ícone se não tiver imagem */}
            <div
              className="w-full h-full flex flex-col items-center justify-center text-gray-400"
              style={{ display: "none" }}
            >
              <svg
                className="w-12 h-12 mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className="text-xs font-light">Imagem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitUsSection;
