import { Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Integrantes from './pages/Integrantes';
import Faq from './pages/Faq';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
import SolucaoDados from './pages/SolucaoDados';

export default function App() {
  return (
    <>
      <Cabecalho titulo="Eco-Mobility" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/solucao" element={<SolucaoDados />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}