import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Bistro from "./pages/Bistro";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Events from "./pages/Events";
import Occasions from "./pages/Occasions";
import Frozen from "./pages/Frozen";
import Orders from "./pages/Orders";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bistro" element={<Bistro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/events" element={<Events />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/frozen" element={<Frozen />} />
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
