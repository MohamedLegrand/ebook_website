import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

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
import Mths from "./pages/mths/Mths";
import Handicap from "./pages/handicap/Handicap";
import Approche from "./pages/approche/Approche";
import Pathologies from "./pages/pathologies/Pathologies";
import Parcours from "./pages/parcours/Parcours";
import Rites from "./pages/rites/Rites";
import Temoignages from "./pages/temoignages/Temoignages";
import Boutique from "./pages/boutique/Boutique";
import Actualites from "./pages/actualites/Actualites";
import Produitdetail from "./pages/produitdetail/Produitdetail";
import Piliers from "./pages/piliers/Piliers";

import ScrollToTop from "./components/scrolltotop/ScrollToTop";

import HeaderConnected from "./components/headerconnected/HeaderConnected";
import LivreConnected from "./pages/livreconnected/LivreConnected";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* AuthProvider enveloppe tout pour que useAuth()
          soit accessible dans toute l'application */}
      <AuthProvider>
        <CartProvider>
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
            <Route path="/mths" element={<Mths />} />
            <Route path="/handicap" element={<Handicap />} />
            <Route path="/approche" element={<Approche />} />
            <Route path="/pathologies" element={<Pathologies />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/rites" element={<Rites />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/produit/:id" element={<Produitdetail />} />
            <Route path="/piliers" element={<Piliers />} />
            <Route path="/headerconnected" element={<HeaderConnected />} />
            <Route path="/livreconnected" element={<LivreConnected />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;