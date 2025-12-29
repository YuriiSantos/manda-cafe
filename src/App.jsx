import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import House from "./pages/House";
import Events from "./pages/Events";
import Cardapio from "./pages/Cardapio";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Frozen from "./pages/Frozen";

import IntroHero from "./components/ui/IntroHero";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("manda_intro_seen");
    setShowIntro(!seen);
  }, []);

  const handleEnter = () => {
    localStorage.setItem("manda_intro_seen", "1");
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroHero onEnter={handleEnter} />;
  }

  return (
    <Router basename="/manda-cafe">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/house" element={<House />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frozen" element={<Frozen />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
