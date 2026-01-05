import React from "react";

function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Votre bibliothèque numérique
        </h1>
        <p className="text-blue-200 mb-6">
          Téléchargez et écoutez vos eBooks préférés partout, à tout moment.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100">
          Découvrir maintenant
        </button>
      </div>
    </section>
  );
}

export default Hero;
