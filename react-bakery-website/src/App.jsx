import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import './index.css';

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
