import { Routes, Route } from "react-router-dom";
import Portfolio from "../views/Portfolio";
import Home from "../views/Home";
import About from "../views/About";
import Services from "../views/ServicesPage";
import Contact from "../views/Contact";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routers;
