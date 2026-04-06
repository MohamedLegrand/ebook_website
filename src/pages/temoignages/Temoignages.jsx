import React, { useState, useEffect, useRef } from "react";

// Hook personnalisé pour détecter l'entrée dans le viewport (animations)
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Temoignages() {
  const [activeFilter, setActiveFilter] = useState("tous");

  const temoignages = [
    {
      id: 1,
      nom: "Marie-Claire E.",
      ville: "Yaoundé, Cameroun",
      message: "J'étais tourmentée par des cauchemars incessants et une sensation d'oppression invisible. Après mon parcours à la MTHS, avec le rite SO'O et les prières de délivrance, j'ai retrouvé un sommeil paisible et une joie de vivre que je n'avais plus depuis des années.",
      type: "troubles-nocturnes",
      date: "Janvier 2025",
      duree: "6 mois d'accompagnement",
      rating: 5,
      avatar: "MC",
      categorie: "délivrance",
      motscles: ["cauchemars", "oppression", "sommeil"]
    },
    {
      id: 2,
      nom: "Paul B.",
      ville: "Douala, Cameroun",
      message: "Des blocages professionnels répétés et une malchance inexplicable m'empêchaient d'avancer. Grâce au diagnostic spirituel, aux remèdes traditionnels améliorés et à la rééducation morale, ces chaînes invisibles ont été brisées.",
      type: "blocages-professionnels",
      date: "Novembre 2024",
      duree: "4 mois de traitement",
      rating: 5,
      avatar: "PB",
      categorie: "prospérité",
      motscles: ["blocages", "carrière", "malchance"]
    },
    {
      id: 3,
      nom: "Anne-Marie N.",
      ville: "Bafoussam, Cameroun",
      message: "Ma famille souffrait d'une déviance spirituelle transmise de génération en génération. L'approche holistique de la MTHS a permis une véritable restauration familiale. Nous avons retrouvé l'harmonie et la paix.",
      type: "restauration-familiale",
      date: "Mars 2025",
      duree: "8 mois de suivi",
      rating: 4,
      avatar: "AM",
      categorie: "famille",
      motscles: ["famille", "générationnel", "harmonie"]
    },
    {
      id: 4,
      nom: "Joseph K.",
      ville: "Limbe, Cameroun",
      message: "J'ai été accompagné avec beaucoup de dignité et sans jugement. Le parcours en 6 étapes m'a aidé à identifier la racine spirituelle de mes addictions. Aujourd'hui, je témoigne de la puissance de la guérison intégrale.",
      type: "addictions",
      date: "Février 2025",
      duree: "7 mois de thérapie",
      rating: 5,
      avatar: "JK",
      categorie: "dépendances",
      motscles: ["addictions", "dépendances", "libération"]
    },
    {
      id: 5,
      nom: "Élisabeth T.",
      ville: "Bamenda, Cameroun",
      message: "Après des années de stérilité spirituelle et physique, le rite de purification et la prière fervente au Centre ont ouvert les portes de la bénédiction. J'ai maintenant un enfant et une vie transformée.",
      type: "fécondité",
      date: "Avril 2025",
      duree: "9 mois d'accompagnement",
      rating: 5,
      avatar: "ET",
      categorie: "fécondité",
      motscles: ["fécondité", "bénédiction", "transformation"]
    },
    {
      id: 6,
      nom: "Samuel D.",
      ville: "Garoua, Cameroun",
      message: "Victime d'envoûtements professionnels, ma carrière stagnait malgré mes compétences. Le rite de désenvoûtement a brisé ces chaînes. En 3 mois, j'ai obtenu une promotion et mon entreprise prospère.",
      type: "envoûtements",
      date: "Décembre 2024",
      duree: "3 mois intensifs",
      rating: 4,
      avatar: "SD",
      categorie: "prospérité",
      motscles: ["envoûtement", "carrière", "prospérité"]
    },
    {
      id: 7,
      nom: "Chantal M.",
      ville: "Bertoua, Cameroun",
      message: "Des attaques spirituelles répétées affectaient ma santé. La combinaison de pharmacopée africaine et de prières m'a complètement guérie. Aujourd'hui, je me sens protégée et en pleine santé.",
      type: "santé",
      date: "Octobre 2024",
      duree: "5 mois de traitement",
      rating: 5,
      avatar: "CM",
      categorie: "santé",
      motscles: ["santé", "protection", "guérison"]
    },
    {
      id: 8,
      nom: "David F.",
      ville: "Ebolowa, Cameroun",
      message: "Une malédiction familiale pesait sur notre lignée. Après le rite de purification générationnelle, toute ma famille a connu une libération totale. Les conflits ont cessé, la paix est revenue.",
      type: "malédictions",
      date: "Juin 2024",
      duree: "6 mois de travail",
      rating: 5,
      avatar: "DF",
      categorie: "famille",
      motscles: ["malédiction", "famille", "libération"]
    }
  ];

  const statistiques = [
    { valeur: "95%", label: "de guérison complète" },
    { valeur: "2,500+", label: "personnes accompagnées" },
    { valeur: "18", label: "mois de suivi moyen" },
    { valeur: "98%", label: "de satisfaction" }
  ];

  const categories = [
    { id: "tous", label: "Tous les témoignages" },
    { id: "délivrance", label: "Délivrance" },
    { id: "famille", label: "Famille" },
    { id: "santé", label: "Santé" },
    { id: "prospérité", label: "Prospérité" },
    { id: "fécondité", label: "Fécondité" },
    { id: "dépendances", label: "Dépendances" }
  ];

  const filteredTemoignages = activeFilter === "tous" 
    ? temoignages 
    : temoignages.filter(t => t.categorie === activeFilter);

  // Références pour les animations au scroll
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);
  const [filtersRef, filtersInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
        .animate-fadeIn { animation: fadeIn 0.9s ease forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease forwards; }
        .animate-slideRight { animation: slideInRight 0.7s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .card-hover {
          transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1), box-shadow 0.4s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 40px -15px rgba(0,0,0,0.2);
        }
        .stat-card {
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -12px rgba(59,130,246,0.2);
        }
        .filter-btn {
          transition: all 0.25s ease;
        }
        .filter-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section avec image de fond */}
        <div 
          ref={heroRef}
          className="relative overflow-hidden rounded-2xl mb-12 shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src="/images/temoignages/temoignages.jpg"
              alt="Témoignages MTHS"
              className="w-full h-full object-cover opacity-30"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-800/30"></div>
          </div>
          <div className={`relative text-center py-20 px-4 transition-all duration-700 ${heroInView ? 'animate-fadeUp' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Témoignages de Transformation
            </h1>
            <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Découvrez les parcours réels de personnes libérées et restaurées 
              grâce à la Médecine Traditionnelle des Handicapés Spirituels.
            </p>
            <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Note importante</h3>
                  <p className="text-gray-700">
                    Ces témoignages sont des récits authentiques partagés avec consentement. 
                    Chaque parcours est unique et les résultats peuvent varier selon l'engagement personnel. 
                    Notre approche s'inscrit dans un accompagnement holistique respectueux de la personne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques - sans icônes */}
        <div ref={statsRef} className="mb-16">
          <h2 className={`text-3xl font-bold text-gray-900 mb-10 text-center transition-all duration-700 ${statsInView ? 'animate-fadeUp' : 'opacity-0'}`}>
            Notre Impact en Chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistiques.map((stat, index) => (
              <div 
                key={index} 
                className={`stat-card bg-white rounded-xl border border-blue-100 p-6 text-center shadow-md transition-all duration-700 ${statsInView ? 'animate-scaleIn' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-extrabold text-blue-700 mb-2">{stat.valeur}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres */}
        <div ref={filtersRef} className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Témoignages par Catégorie
            </h2>
            <div className="text-sm text-gray-500">
              {filteredTemoignages.length} témoignage{filteredTemoignages.length > 1 ? 's' : ''}
            </div>
          </div>
          <div className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 ${filtersInView ? 'animate-fadeIn' : 'opacity-0'}`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-btn px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-700 border border-blue-200 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des témoignages - sans icônes */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTemoignages.map((temoignage, idx) => (
            <div
              key={temoignage.id}
              className={`card-hover bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-lg transition-all duration-700 ${gridInView ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="p-6">
                {/* En-tête avec avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {temoignage.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{temoignage.nom}</h3>
                      <div className="text-gray-600 text-sm">
                        {temoignage.ville}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-lg ${i < temoignage.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{temoignage.date}</span>
                  </div>
                </div>

                {/* Message */}
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 text-4xl text-blue-200 opacity-50">“</div>
                  <p className="text-gray-700 leading-relaxed pl-4 italic">
                    "{temoignage.message}"
                  </p>
                </div>

                {/* Informations complémentaires */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>Durée :</span> {temoignage.duree}
                    </div>
                    <div className="flex items-center gap-2">
                      <span>👍</span>
                      <span className="text-gray-600">Recommande</span>
                    </div>
                  </div>
                  
                  {/* Mots-clés */}
                  <div className="flex flex-wrap gap-2">
                    {temoignage.motscles.map((mot, idx) => (
                      <span 
                        key={idx} 
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-200"
                      >
                        {mot}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton de partage */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 rounded-lg font-medium text-sm text-center transition-all shadow-md hover:shadow-lg">
                    Partager ce témoignage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section témoignage en vedette avec icône vidéo uniquement */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Témoignage en Vedette
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 text-white">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <span className="text-sm font-medium">Témoignage du mois</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Transformation Complète</h3>
                  <p className="text-blue-100 mb-6">
                    Découvrez le parcours exceptionnel de Samuel D. qui a retrouvé 
                    la paix et la prospérité après des années de lutte spirituelle.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Guérison des attaques spirituelles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Restauration professionnelle</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Paix familiale retrouvée</span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Demander un accompagnement similaire
                  </a>
                </div>
              </div>
              <div className="relative min-h-[300px] bg-blue-800 flex items-center justify-center">
                {/* Icône vidéo seule */}
                <div className="text-center text-white p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl">▶</span>
                  </div>
                  <p className="text-lg font-semibold">“Une vie transformée”</p>
                  <p className="text-blue-200 text-sm mt-2">Samuel D. – Garoua</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section partager son témoignage - sans icônes */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 mb-16 shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Votre Témoignage Peut Inspirer
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Votre expérience peut apporter de l'espoir à d'autres personnes en difficulté. 
              Partagez votre parcours de guérison et devenez une source d'inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Partager mon témoignage
              </a>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors">
                Télécharger le formulaire
              </button>
            </div>
          </div>
        </div>

        {/* CTA final - sans icônes */}
        <div ref={ctaRef} className="text-center">
          <div className={`bg-white rounded-2xl border-2 border-blue-200 p-10 max-w-3xl mx-auto shadow-lg transition-all duration-1000 ${ctaInView ? 'animate-scaleIn' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à Commencer Votre Propre Transformation ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Rejoignez les milliers de personnes qui ont retrouvé la paix, la santé 
              et la prospérité grâce à l'accompagnement holistique de la MTHS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Prendre Rendez-vous
              </a>
              <a
                href="/accompagnateurs"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Consulter un accompagnateur <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Temoignages;