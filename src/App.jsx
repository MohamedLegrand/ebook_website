import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/accueil/Accueil";
import Categories from "./pages/categories/Categories";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Audio from "./pages/audio/Audio";
import { LogIn } from "lucide-react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/audio" element={<Audio />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
