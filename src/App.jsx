import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Bistro from "./pages/Bistro";
import Menu from "./pages/Menu";
import Special from "./pages/Special";
import Events from "./pages/Events";
import Cardapio from "./pages/Cardapio";
import Orders from "./pages/Orders";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/manda-cafe">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bistro" element={<Bistro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/special" element={<Special />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
