import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Mapas from "../pages/mapas";
import EspecialidadesPage from "../pages/especialidades";
import SaudeDoCidadaoPage from "../pages/saudeDoCidadao";
import ModuloGestorPage from "../pages/moduloGestor";
import PaineisGestorPage from "../pages/paineisGestor";
import ArbovirosesPage from "../pages/arboviroses";
import CovidPage from "../pages/covid";
import VigilanciaEmSaudePage from "../pages/vigilanciaEmSaude";
import PoliticaDeCookiesPage from "../pages/politicaDeCookies";
// import ObservaPE from "../components/ObservaPE/ObservaPE";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/saude-do-cidadao" element={<SaudeDoCidadaoPage />} />
        <Route path="/modulo-gestor" element={<ModuloGestorPage />} />
        <Route path="/modulo-gestor/paineis" element={<PaineisGestorPage />} />
        <Route path="/mapas" element={<Mapas />} />
        {/* <Route path="/observa-pe" element={<ObservaPE />} /> */}
        <Route
          path="/saude-do-cidadao/especialidades-hospitalares"
          element={<EspecialidadesPage />}
        />
        <Route path="/covid-19" element={<CovidPage />} />
        <Route
          path="/vigilancia-em-saude/arboviroses"
          element={<ArbovirosesPage />}
        />
        <Route
          path="/vigilancia-em-saude"
          element={<VigilanciaEmSaudePage />}
        />
        <Route
          path="/politica-de-cookies"
          element={<PoliticaDeCookiesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
