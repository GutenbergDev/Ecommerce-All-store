import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import Contato from './Components/Contato';
import Marcas from './Components/Marcas';
import CriarConta from './Components/Login/CriarConta';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <section className="App">
      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} end/>
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

