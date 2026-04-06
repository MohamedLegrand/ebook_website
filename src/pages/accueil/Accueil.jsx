import React from "react";

import Hero from "./components/Hero";
import Categories from "./components/Categories";
import AudioBooks from "./components/AudioBooks";

function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Categories />
        <AudioBooks />
      </main>
    </div>
  );
}

export default Accueil;