import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/accueil/Accueil";
import Categories from "./pages/categories/Categories";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Audio from "./pages/audio/Audio";
import FAQ from "./pages/faq/FAQ";
import Contact from "./pages/contact/Contact";
import Aide from "./pages/aide/Aide"; 
import Conditions from "./pages/conditions/Conditions";
import Confidentialite from "./pages/confidentialite/Confidentialite";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/audio" element={<Audio />} /> 
        <Route path="/faq" element={<FAQ />} /> 
        <Route path="/contact" element={<Contact />} />  
        <Route path="/aide" element={<Aide />} /> 
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;