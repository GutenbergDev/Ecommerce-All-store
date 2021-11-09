import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Contato from './Components/Contato';
import Marcas from './Components/Marcas';
import CriarConta from './Components/CriarConta';

const App = () => {
  return (
    <section className="App">
      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="marcas" element={<Marcas />} />
            <Route path="contato" element={<Contato />} />
            <Route path="criarConta" element={<CriarConta />} />
          </Routes>
        </div>  

        <Footer />
      </BrowserRouter>
    </section>
  )
}

export default App;

