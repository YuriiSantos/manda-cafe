// VisitUsSection.jsx - BG da imagem atrás do texto
import React from "react";
import Casa from "../../assets/casa.png";

function VisitUsSection() {
  return (
    <section className="flex justify-center">
      <div className="grid grid-cols-1 max-w-md w-full md:max-w-lg lg:max-w-xl">
        <div
          className="
            relative rounded-xl overflow-hidden text-center
            min-h-[260px] md:min-h-[320px]
            p-6 md:p-8
            bg-center bg-cover
          "
          style={{ backgroundImage: `url(${Casa})` }}
        >
          <div className="absolute inset-0 bg-[#fffdf9]/80 md:bg-[#fffdf9]/70" />
          <div className="relative z-10">
            <h2 className="font-raleway text-sm md:text-base font-light text-gray-700 tracking-widest mb-4 uppercase">
              NOS VISITE
            </h2>

            <div className="flex justify-center mb-2">
              <svg
                className="w-4 h-4 text-gray-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>

            <a
              href="https://www.google.com/maps/place/R.+Dona+Germaine+Burchard,+458"
              target="_blank"
              rel="noopener noreferrer"
              className="font-raleway text-sm font-light text-gray-700 leading-relaxed underline underline-offset-2 hover:text-blue-600"
            >
              R. Dona Germaine Burchard, 458
            </a>

            <div className="flex justify-center mb-2 mt-4">
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
            <p className="font-raleway text-xs md:text-sm font-light text-gray-700 mb-4">
              +55 11 98876-5337
            </p>

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
            <p className="font-raleway text-xs md:text-sm font-light text-gray-700 mb-1">
              11.00AM - 3.30PM
            </p>
            <p className="font-raleway text-xs font-light text-gray-600 tracking-widest uppercase">
              Segunda - Sábado
            </p>

            <a
              href="/reservas"
              className="mt-5 inline-flex items-center justify-center bg-[#00796b] hover:bg-[#00695c] text-white font-raleway px-6 py-2 rounded-full shadow-md transition-all duration-300"
            >
              Reservas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisitUsSection;
