// Footer.jsx - Complete Mobile First Footer with Exact Color Squares
import React from "react";

function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 z-50 shadow-lg">
      {/* Faixa com Quadrados Coloridos Separados */}
      <div className="flex h-3 gap-0">
        <div className="flex-1 bg-[#78664c]"></div>
        <div className="flex-1 bg-[#8c8275]"></div>
        <div className="flex-1 bg-[#bba27e]"></div>
        <div className="flex-1 bg-[#c9b698]"></div>
        <div className="flex-1 bg-[#bd9756]"></div>
        <div className="flex-1 bg-[#bf875c]"></div>
        <div className="flex-1 bg-[#6f6b62]"></div>
        <div className="flex-1 bg-[#b47d61]"></div>
        <div className="flex-1 bg-[#62876b]"></div>
      </div>
      <div className="bg-[#c9b896] px-4 py-4">
        <div className="flex justify-between items-center max-w-md mx-auto md:max-w-lg lg:max-w-xl">
          <div className="flex items-center justify-center">
            {" "}
            {/* Menu Hamburger */}
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 md:w-14 md:h-14 lg:w-16 lg:h-16">
              <div className="flex flex-col gap-1">
                <span className="w-10 h-1 bg-white rounded-full md:w-6 lg:w-7"></span>
                <span className="w-10 h-1 bg-white rounded-full md:w-6 lg:w-7"></span>
                <span className="w-10 h-1 bg-white rounded-full md:w-6 lg:w-7"></span>
                <span className="w-10 h-1 bg-white rounded-full md:w-6 lg:w-7"></span>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center gap-4">
            {" "}
            {/* Location */}
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 md:w-14 md:h-14 lg:w-16 lg:h-16">
              <svg
                className="w-5 h-5 text-[#c9b896] md:w-6 md:h-6 lg:w-7 lg:h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </button>
            {/* Instagram */}
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 md:w-14 md:h-14 lg:w-16 lg:h-16">
              <svg
                className="w-5 h-5 text-[#c9b896] md:w-6 md:h-6 lg:w-7 lg:h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>
            {/* Profile */}
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 md:w-14 md:h-14 lg:w-16 lg:h-16">
              <svg
                className="w-5 h-5 text-[#c9b896] md:w-6 md:h-6 lg:w-7 lg:h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
