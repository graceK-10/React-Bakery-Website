import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

const App = () => {
  return (
   <BrowserRouter>
   <Navbar />
    <Switch>    
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<HomePage />} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
