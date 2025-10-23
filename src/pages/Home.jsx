// Home.jsx - Layout Responsivo com Tamanhos Controlados
import React from "react";
import MenuCarousel from "../components/ui/MenuCarousel";
import VisitUsSection from "../components/ui/VisitUsSection";

function Home() {
  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16">
      {/* Menu Carousel Section */}
      <section className="w-full">
        <MenuCarousel />
      </section>

      {/* Visit Us Section */}
      <section className="w-full">
        <VisitUsSection />
      </section>
    </div>
  );
}

export default Home;
