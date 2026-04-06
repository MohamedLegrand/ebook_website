import React from "react";

function Actualites() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section avec image de fond */}
        <div className="relative overflow-hidden rounded-2xl mb-12 shadow-2xl">
          <div className="absolute inset-0">
            <img
              src="/images/temoignages/actualite.jpg"
              alt="Actualités MTHS"
              className="w-full h-full object-cover opacity-30"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-800/30"></div>
          </div>
          <div className="relative text-center py-20 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Actualités & Événements
            </h1>
            <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Découvrez les dernières activités, formations et publications du Centre MTHS. 
              Notre mission : une guérison holistique intégrant spiritualité chrétienne, 
              pharmacopée africaine et psychologie communautaire.
            </p>
          </div>
        </div>

        {/* Section Newsletter - "Rester informé" */}
        <section className="mt-16 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Restez informés</h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Recevez nos actualités mensuelles et ne manquez aucun événement important.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default Actualites;