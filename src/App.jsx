import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext"; //used to wrap the components that need access to the cart state, ensuring that the cart state and related functions are accessible to any component within the context provider.
// By placing the CartProvider at a high level in your component tree, you make the cart state available to any component that needs it, regardless of where it is in the component hierarchy.
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Menu from "./pages/MenuPage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    // By wrapping the Routes component with CartProvider, you ensure that all pages and components (e.g., HomePage, About, Contact, Menu, Cart, Footer) have access to the cart state and actions. This allows any component within the application to interact with the cart, whether it's adding items, increasing/decreasing item quantities, or removing items.
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
