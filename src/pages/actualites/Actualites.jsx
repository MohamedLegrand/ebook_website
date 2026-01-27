import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { CalendarDays, BookOpen, Sparkles, MapPin, Clock, ArrowRight } from "lucide-react";

function Actualites() {
  const actualites = [
    {
      id: 1,
      date: "15 Janvier 2026",
      titre: "Veillée de Prière et Purification au Centre",
      desc: "Participez à une veillée spirituelle dédiée à la délivrance et à la purification, inspirée des rituels inculturés comme le rite SO'O christianisé.",
      type: "Veillée",
      lieu: "Centre MARIE REINE DE LA MISÉRICORDE D'ABILI",
      duree: "20h00 - 05h00",
      image: "/images/veillee-spirituelle.jpg",
    },
    {
      id: 2,
      date: "5 Février 2026",
      titre: "Publication de la Revue 'Le Monde Parallèle'",
      desc: "Découvrez la nouvelle édition de notre revue doctrinale, avec des articles approfondis sur les mécanismes de la sorcellerie et les solutions holistiques.",
      type: "Publication",
      lieu: "En ligne et au Centre",
      duree: "Disponible",
      image: "/images/revue-monde-parallele.jpg",
    },
    {
      id: 3,
      date: "20 Mars 2026",
      titre: "Conférence sur les Thérapies Holistiques et l'Inculturation",
      desc: "Exploration de l'intégration de la foi et de la culture dans la guérison des handicaps spirituels.",
      type: "Conférence",
      lieu: "Centre MARIE REINE DE LA MISÉRICORDE D'ABILI",
      duree: "14h00 - 18h00",
      image: "/images/conference-therapies.jpg",
    },
    {
      id: 4,
      date: "10 Avril 2026",
      titre: "Formation en Rituels de Purification et Délivrance",
      desc: "Programme de formation certifié sur les 5 piliers de la MTHS : diagnostic spirituel, naturopathie, rituels SO'O, délivrance et rééducation morale.",
      type: "Formation",
      lieu: "En présentiel au Centre et en ligne",
      duree: "3 jours",
      image: "/images/formation-rituels.jpg",
    },
    {
      id: 5,
      date: "15 Mai 2026",
      titre: "Message Spirituel Mensuel et Méditation Guidée",
      desc: "Enseignements inspirés de l'apparition de la Vierge Marie à Jean Paul Sylvain SIDA ABENA (1979).",
      type: "Message Spirituel",
      lieu: "En ligne via le site MTHS",
      duree: "Disponible",
      image: "/images/message-spirituel.jpg",
    },
    {
      id: 6,
      date: "25 Juin 2026",
      titre: "Journée de Sensibilisation à la Déviance Spirituelle",
      desc: "Prévention des troubles comme les possessions, malédictions et addictions d'origine invisible.",
      type: "Activité",
      lieu: "Centre MARIE REINE DE LA MISÉRICORDE D'ABILI",
      duree: "09h00 - 17h00",
      image: "/images/journee-sensibilisation.jpg",
    },
  ];

  const categories = [
    "Tous",
    "Veillées",
    "Formations",
    "Publications",
    "Conférences",
    "Activités"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* En-tête avec description */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Actualités & Événements
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les dernières activités, formations et publications du Centre MTHS. 
            Notre mission : une guérison holistique intégrant spiritualité chrétienne, 
            pharmacopée africaine et psychologie communautaire.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((categorie, index) => (
              <button
                key={index}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                    : "bg-white text-gray-700 border border-blue-200 hover:border-blue-400"
                }`}
              >
                {categorie}
              </button>
            ))}
          </div>
        </div>

        {/* Section calendrier horizontal */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <CalendarDays className="w-6 h-6 mr-3 text-blue-600" />
              Calendrier des Événements
            </h2>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
              Voir tout le calendrier
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {actualites.slice(0, 3).map((actu) => (
              <div 
                key={actu.id}
                className="bg-white rounded-xl border border-blue-100 p-5 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-center min-w-[70px] bg-blue-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-700">{actu.date.split(" ")[0]}</div>
                    <div className="text-sm font-semibold text-blue-600">{actu.date.split(" ")[1]}</div>
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-2">
                      {actu.type}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{actu.titre}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                      <span className="line-clamp-1">{actu.lieu}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1 text-blue-500" />
                      {actu.duree}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section grille des actualités */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Toutes les Actualités</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actualites.map((actu) => (
              <article 
                key={actu.id}
                className="bg-white rounded-2xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image avec overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>
                  <img
                    src={actu.image}
                    alt={actu.titre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 rounded-full text-xs font-semibold">
                      {actu.type}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-600 mb-3">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    {actu.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {actu.titre}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {actu.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                      <span className="line-clamp-1">{actu.lieu}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Clock className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                      {actu.duree}
                    </div>
                  </div>

                  <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300 group/btn">
                    <span>Voir les détails</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-16 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
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

      <Footer />
    </div>
  );
}

export default Actualites;