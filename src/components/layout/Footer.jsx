// Footer.jsx
import React from "react";
import footerBg from "../../assets/header-bg.jpg";

function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 z-50 shadow-lg">
      {/* Faixa com quadrados coloridos */}
      <div className="flex h-3 gap-0">
        <div className="flex-1 bg-[#78664c]" />
        <div className="flex-1 bg-[#8c8275]" />
        <div className="flex-1 bg-[#bba27e]" />
        <div className="flex-1 bg-[#c9b698]" />
        <div className="flex-1 bg-[#bd9756]" />
        <div className="flex-1 bg-[#bf875c]" />
        <div className="flex-1 bg-[#6f6b62]" />
        <div className="flex-1 bg-[#b47d61]" />
        <div className="flex-1 bg-[#62876b]" />
      </div>

      <div
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/2" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <ul className="space-y-2">
                <li>
                  <a className="hover:underline" href="/manda-cafe/house">
                    Sobre nós
                  </a>
                </li>

                <li>
                  <a className="hover:underline" href="/manda-cafe/events">
                    Nosso serviço
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="/manda-cafe/gallery">
                    Nossa galeria
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs tracking-widest text-white/90 mb-3 uppercase">
                Contato
              </h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>

                  <a
                    className="hover:underline break-all"
                    href="mailto:mandacafe.foradacasinha@gmail.com"
                  >
                    mandacafe.foradacasinha@gmail.com
                  </a>
                </li>

                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.31 1.76.57 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.09a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.6.57A2 2 0 0 1 22 16.92z" />
                  </svg>

                  <span>+55 11 988765337</span>
                </li>

                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>

                  <span>São Paulo - SP</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs tracking-widest text-white/90 mb-3 uppercase">
                Redes sociais
              </h4>

              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.instagram.com/mandacafe_"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <path d="M17.5 6.5h.01" />
                    </svg>

                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/30 pt-4">
            <p className="text-xs text-white/90">
              2025 © Manda Café. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
