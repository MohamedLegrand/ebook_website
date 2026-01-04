import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow bg-gray-100">
        {/* Hero section */}
        <section className="max-w-7xl mx-auto py-20 px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Découvrez les meilleurs eBooks
          </h2>

          <p className="text-gray-600 mb-6">
            Apprenez, évoluez et développez vos compétences grâce à notre
            collection d’eBooks de qualité.
          </p>

          <button className="bg-red-900 text-white px-6 py-3 rounded hover:bg-red-800">
            Explorer le catalogue
          </button>
        </section>

        {/* Section livres */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            eBooks populaires
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded">
              <h4 className="font-bold">Apprendre React</h4>
              <p className="text-sm text-gray-600">
                Guide complet pour débutants
              </p>
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h4 className="font-bold">Maîtriser le Web</h4>
              <p className="text-sm text-gray-600">
                HTML, CSS, JavaScript
              </p>
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h4 className="font-bold">Backend Moderne</h4>
              <p className="text-sm text-gray-600">
                APIs, bases de données, sécurité
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Accueil;
