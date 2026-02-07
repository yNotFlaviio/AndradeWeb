import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componentes
import { Header } from "./components/MyHeader";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

// Estilos
import "./styles/theme.css";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <ToastContainer autoClose={3000} theme="dark" />
      <Header />
      <main> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}