import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Leyendas from './pages/Leyendas';
import NovedadesPage from './pages/NovedadesPage';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='leyendas' element={<Leyendas />} />
          <Route path='NovedadesPage' element={<NovedadesPage />} />
          <Route path='contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
