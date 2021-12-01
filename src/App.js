import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import Contato from './Components/Contato';
import Marcas from './Components/Marcas';
import CriarConta from './Components/Login/CriarConta';
import Home from './Components/Home/Home';
import ProdutoSlide from './Components/Home/SlideMain/ProdutoSlide';
import ProdutosNew from './Components/Home/SlideMain/ProdutosNew';
import Camisetas from './Components/Home/Main/Camisetas';
import NikeSbProdutos from './Components/Home/Main/NikeSbProdutos';

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
            <Route path="produtos/:nameId" element={<ProdutoSlide />} />
            <Route path="produto/:nameId" element={<ProdutosNew />} />
            <Route path="camisetas/:userId" element={<Camisetas />} />
            <Route path="sbprodutos/:nameId" element={<NikeSbProdutos />} />
          </Routes>
        </div>  

        <Footer />
      </BrowserRouter>
    </section>
  )
}

export default App;

