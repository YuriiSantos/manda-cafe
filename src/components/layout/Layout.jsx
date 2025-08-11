// Layout.jsx - Complete Mobile First Layout
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf9] max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 px-4 mt-2 mb-5 md:px-8 lg:px-12 lg:max-w-6xl lg:mx-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
