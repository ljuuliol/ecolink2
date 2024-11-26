import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Descartar from "./pages/Descartar";
import SobreNos from "./pages/SobreNos";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import NotFound from "./pages/404";

import BgVideo from "./assets/earth-bg.mp4";

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Exibir vídeo de fundo apenas na rota "/" */}
      {location.pathname === "/" ? (
        <div className="h-[80px] relative">
          <video
            autoPlay
            loop
            muted
            className="fixed right-0 top-0 h-[800px] w-full object-cover z-[-1]"
          >
            <source src={BgVideo} type="video/mp4" />
          </video>
        </div>
      ) : (
        // Espaço vazio de 80px em páginas que não sejam "/"
        <div className="h-[80px]" />
      )}

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/descartar" element={<Descartar />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />

        {/* Página 404 para rotas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
