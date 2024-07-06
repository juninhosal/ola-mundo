// import Menu from "./componentes/Menu"
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Erro404} from "./Paginas/404/404";
import Menu from "./componentes/Menu";

function App() {
  return (
      <BrowserRouter>
          <Menu/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
