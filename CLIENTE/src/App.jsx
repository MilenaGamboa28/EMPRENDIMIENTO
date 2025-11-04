import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Importar tus componentes principales
import Navbar from "./components/Navbar";       // o Navigation, según tu versión
import BottomBar from "./components/BottomBar"; // ✅ este es el footer

// ✅ Importar las páginas
import Home from "./pages/Home";
import MisionVision from "./pages/MisionVision";
import Objetivos from "./pages/Objetivos";
import Innovacion from "./pages/Innovacion";
import Importancia from "./pages/Importancia";
import Contacto from "./pages/Contacto";
import Materiales from "./pages/Materiales"; // si ya la creaste
import Equipos from "./pages/Equipos";
// ✅ Importar estilos globales
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App" style={{ paddingBottom: "50px" }}>
        {/* ✅ Menú principal */}
        <Navbar />

        {/* ✅ Rutas de navegación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/misionvision" element={<MisionVision />} />
          <Route path="/objetivos" element={<Objetivos />} />
          <Route path="/innovacion" element={<Innovacion />} />
          <Route path="/importancia" element={<Importancia />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/materiales" element={<Materiales />} />
          <Route path="/equipos" element={<Equipos />} />
        </Routes>

        {/* ✅ Footer fijo abajo */}
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
