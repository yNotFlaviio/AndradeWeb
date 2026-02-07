import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componentes
import { Header } from "./components/MyHeader";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Service } from "./components/Service";
import { Contact } from "./components/Contact";

// Estilos
import "./styles/theme.css";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}