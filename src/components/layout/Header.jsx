import logoMandaCafe from "../../assets/logo.png";

// Header.jsx - Two Section Layout
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Seção Maior - Logo */}
      <div className="bg-[#e3dacd] h-32 flex items-center justify-center md:h-36 lg:h-40">
        <div className="w-20 h-20 flex items-center justify-center md:w-24 md:h-24 lg:w-28 lg:h-28">
          <img
            src={logoMandaCafe}
            alt="Maria Café"
            className="w-20 h-20 object-contain md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
        </div>
      </div>

      {/* Seção Menor - Ícones */}
      <div className="bg-[#fffdf9] h-16 flex items-center justify-between px-6 md:h-18 lg:h-20 lg:px-8">
        {/* Ícone Home - Esquerda */}
        <button className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200 md:w-14 md:h-14">
          <svg
            className="w-6 h-6 text-white md:w-7 md:h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>

        {/* Ícones Direita */}
        <div className="flex items-center gap-4 md:gap-5">
          {/* Favoritos */}
          <button className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200 md:w-14 md:h-14">
            <svg
              className="w-6 h-6 text-white md:w-7 md:h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          {/* Profile */}
          <button className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200 md:w-14 md:h-14">
            <svg
              className="w-6 h-6 text-white md:w-7 md:h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>

          {/* Cart */}
          <button className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200 md:w-14 md:h-14">
            <svg
              className="w-6 h-6 text-white md:w-7 md:h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

// Ctrl + /      ||          Ctrl + Shift + /

//  Header.jsx - Mobile First with Hamburger Menu
// import React, { useState } from 'react';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-[#e3dacd] sticky top-0 z-50 shadow-lg">
//       {/* Main Header Bar */}
//       <div className="flex items-center justify-between px-4 py-3 lg:max-w-6xl lg:mx-auto">

//         {/* Logo */}
//         <div className="flex items-center">
//           <div className="w-10 h-10 bg-white border-2 border-amber-900 rounded-lg flex items-center justify-center shadow-sm md:w-12 md:h-12">
//             <img
//               src="/logo.png"
//               alt="Maria Café"
//               className="w-7 h-7 object-contain md:w-8 md:h-8"
//             />
//           </div>
//           <h1 className="ml-2 text-base font-bold text-amber-900 md:text-lg">
//             Maria Café
//           </h1>
//         </div>

//         {/* Desktop Icons - Hidden on mobile */}
//         <nav className="hidden md:flex items-center gap-3">
//           <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
//             <svg className="w-4 h-4 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
//             </svg>
//           </button>
//           <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
//             <svg className="w-4 h-4 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//             </svg>
//           </button>
//           <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
//             <svg className="w-4 h-4 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//             </svg>
//           </button>
//           <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
//             <svg className="w-4 h-4 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
//             </svg>
//           </button>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm"
//         >
//           <div className="flex flex-col gap-1">
//             <span className="w-4 h-0.5 bg-amber-900 rounded-full"></span>
//             <span className="w-4 h-0.5 bg-amber-900 rounded-full"></span>
//             <span className="w-4 h-0.5 bg-amber-900 rounded-full"></span>
//           </div>
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t border-stone-200 px-4 py-3">
//           <nav className="flex justify-around">
//             <button className="flex flex-col items-center gap-1 p-2">
//               <svg className="w-5 h-5 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
//               </svg>
//               <span className="text-xs text-stone-600">Home</span>
//             </button>
//             <button className="flex flex-col items-center gap-1 p-2">
//               <svg className="w-5 h-5 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//               </svg>
//               <span className="text-xs text-stone-600">Favoritos</span>
//             </button>
//             <button className="flex flex-col items-center gap-1 p-2">
//               <svg className="w-5 h-5 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//               </svg>
//               <span className="text-xs text-stone-600">Perfil</span>
//             </button>
//             <button className="flex flex-col items-center gap-1 p-2">
//               <svg className="w-5 h-5 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
//               </svg>
//               <span className="text-xs text-stone-600">Carrinho</span>
//             </button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
