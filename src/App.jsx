import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home/Index";
import Descartar from "./pages/Descartar";
import Sobre from "./pages/Sobre";
import { Menu } from "./pages/Menu";

function App() {

  return (
    <BrowserRouter>
    <Menu />
          <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/Cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/Descartar" element={<Descartar />} />
              <Route path="/Sobre" element={<Sobre/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
