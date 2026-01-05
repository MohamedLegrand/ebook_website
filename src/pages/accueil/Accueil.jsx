import React from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Hero from "./components/Hero";
import Categories from "./components/Categories";
import AudioBooks from "./components/AudioBooks";

function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Categories />
        <AudioBooks />
      </main>

      <Footer />
    </div>
  );
}

export default Accueil;
