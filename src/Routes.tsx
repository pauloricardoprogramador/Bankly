import { BrowserRouter, Routes, Route } from "react-router-dom";

import Start from "./pages/inicio";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
