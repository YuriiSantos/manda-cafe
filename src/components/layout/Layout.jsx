// Layout.jsx - Layout Responsivo com Largura Máxima Controlada
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf9] w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="w-full max-w-[2000px] mx-auto">{children}</div>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
