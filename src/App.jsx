import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Bistro from "./pages/Bistro";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Cardapio from "./pages/Cardapio";
import Orders from "./pages/Orders";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

import IntroHero from "./components/ui/IntroHero";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroHero onEnter={() => setShowIntro(false)} />;
  }

  return (
    <Router basename="/manda-cafe">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bistro" element={<Bistro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
