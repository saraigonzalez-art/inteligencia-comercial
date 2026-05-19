import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index.jsx";
import Estructura from "../pages/Estructura";
import Tableros from "./Tableros";
import AprendamosPowerBI from "./AprendamosPowerBI";
import Vicepresidencia from "./Vicepresidencia";
import Grupos from "./Grupos";
import Bonificaciones from "./Bonificaciones";
import NotFound from "./NotFound";
import RegistroIndividual from "./RegistroIndividual";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/estructura" element={<Estructura />} />
        <Route path="/tableros" element={<Tableros />} />
        <Route path="/vp/positivos" element={<Vicepresidencia />} />
        <Route path="/vp/cotizaciones" element={<Vicepresidencia />} />
        <Route path="/vp/resultados" element={<Vicepresidencia />} />
        <Route path="/gh/bonificaciones" element={<Bonificaciones />} />
        <Route path="/gh/detalle" element={<Grupos />} />
        <Route path="/gh/gps-powerbi" element={<Grupos />} />
        <Route path="/aa/tablero" element={<Tableros />} />
        <Route path="/aa/estrategia" element={<Tableros />} />
        <Route path="/aprendamos-powerbi" element={<AprendamosPowerBI />} />
        <Route path="/registro-individual" element={<RegistroIndividual />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
