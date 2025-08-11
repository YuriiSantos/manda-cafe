// Home.jsx - Cards de Conteúdo Mobile First
import React from "react";
import MenuCarousel from "../components/ui/MenuCarousel";
import VisitUsSection from "../components/ui/VisitUsSection";

function Home() {
  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-10">
      {/* Main Cards Grid */}
      <section className="flex gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8">
        <MenuCarousel />
      </section>

      {/* Restaurant Info Section */}
      <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
        <VisitUsSection />
      </section>
    </div>
  );
}

export default Home;
