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

function Pathologies() {
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "tous", label: "Toutes les pathologies" },
    { id: "spirituelles", label: "Pathologies Spirituelles" },
    { id: "mentales", label: "Troubles Mentaux" },
    { id: "familiales", label: "Problématiques Familiales" },
    { id: "professionnelles", label: "Blocages Professionnels" },
    { id: "addictions", label: "Addictions & Dépendances" }
  ];

  const pathologies = [
    {
      id: 1,
      nom: "Possessions Spirituelles",
      description: "États d'influence ou de domination spirituelle invisible affectant le comportement, la volonté et la santé. La personne peut présenter des changements de personnalité brutaux, des paroles incohérentes et une résistance à la prière.",
      image: "/images/pathologies/possession-spirituelle.jpg",
      categorie: "spirituelles",
      symptomes: ["Changements de personnalité", "Paroles incohérentes", "Résistance aux prières"],
      duree: "Variable selon le cas",
      gravite: "Élevée",
      solution: "Rite de délivrance et purification"
    },
    {
      id: 2,
      nom: "Sorcellerie & Envoûtements",
      description: "Actions occultes visant à nuire, bloquer ou détruire la vie d'une personne. Ces attaques peuvent être directes (envoyées volontairement) ou indirectes (par le biais d'objets ou de lieux).",
      image: "/images/pathologies/sorcellerie-envoutement.jpg",
      categorie: "spirituelles",
      symptomes: ["Malchance persistante", "Sensation d'être observé", "Fatigue chronique"],
      duree: "Variable",
      gravite: "Moyenne à Élevée",
      solution: "Désenvoûtement et protection"
    },
    {
      id: 3,
      nom: "Épilepsie Mystique",
      description: "Crises convulsives ou troubles neurologiques d'origine spirituelle non expliqués médicalement. Ces crises peuvent survenir pendant la prière ou lors d'expositions spirituelles.",
      image: "/images/pathologies/epilepsie-mystique.jpg",
      categorie: "spirituelles",
      symptomes: ["Crises convulsives", "Perte de conscience", "Hallucinations"],
      duree: "Chronique",
      gravite: "Élevée",
      solution: "Purification et prières spécifiques"
    },
    {
      id: 4,
      nom: "Stérilité Spirituelle",
      description: "Blocages empêchant la conception ou la fécondité, souvent liés à des malédictions familiales ou influences occultes. Une cause spirituelle est suspectée quand les examens médicaux sont normaux.",
      image: "/images/pathologies/sterilite-spirituelle.jpg",
      categorie: "familiales",
      symptomes: ["Stérilité inexpliquée", "Fausses couches répétées", "Problèmes gynécologiques"],
      duree: "Long terme",
      gravite: "Moyenne",
      solution: "Bris de malédictions et bénédiction"
    },
    {
      id: 5,
      nom: "Cauchemars Chroniques",
      description: "Rêves oppressants, terrifiants et récurrents perturbant le sommeil et la paix intérieure. Ces cauchemars peuvent être le signe d'attaques spirituelles nocturnes.",
      image: "/images/pathologies/cauchemars-chroniques.jpg",
      categorie: "mentales",
      symptomes: ["Rêves récurrents", "Sueurs nocturnes", "Peur de dormir"],
      duree: "Chronique",
      gravite: "Modérée",
      solution: "Protection nocturne et purification"
    },
    {
      id: 6,
      nom: "Énurésie Nocturne",
      description: "Incontinence nocturne persistante chez l'enfant ou l'adulte, souvent signe d'une oppression spirituelle ou de liens avec des esprits d'eau dans la tradition africaine.",
      image: "/images/pathologies/enuresie-nocturne.jpg",
      categorie: "spirituelles",
      symptomes: ["Incontinence nocturne", "Cauchemars liés à l'eau", "Peur des toilettes"],
      duree: "Variable",
      gravite: "Modérée",
      solution: "Purification et rupture de liens"
    },
    {
      id: 7,
      nom: "Malchance Répétitive",
      description: "Série d'échecs, accidents, pertes financières ou blocages inexpliqués dans tous les domaines de la vie. Une malédiction ou un blocage spirituel peut en être la cause.",
      image: "/images/pathologies/malchance-repetitive.jpg",
      categorie: "professionnelles",
      symptomes: ["Échecs répétés", "Pertes financières", "Accidents fréquents"],
      duree: "Variable",
      gravite: "Modérée",
      solution: "Diagnostic spirituel et déblocage"
    },
    {
      id: 8,
      nom: "Délinquance Juvénile",
      description: "Comportements déviants, rébellion, violence ou fugues chez les jeunes, souvent liés à des influences spirituelles ou à des malédictions générationnelles.",
      image: "/images/pathologies/delinquance-juvenile.jpg",
      categorie: "familiales",
      symptomes: ["Rébellion excessive", "Violence", "Fugues répétées"],
      duree: "Variable",
      gravite: "Moyenne à Élevée",
      solution: "Délivrance et rééducation morale"
    },
    {
      id: 9,
      nom: "Addictions",
      description: "Dépendances (alcool, drogues, sexe, jeux, etc.) d'origine invisible ou renforcées par des liens spirituels. Certaines addictions résistent aux traitements conventionnels.",
      image: "/images/pathologies/addictions.jpg",
      categorie: "addictions",
      symptomes: ["Dépendance persistante", "Rechutes fréquentes", "Comportements compulsifs"],
      duree: "Chronique",
      gravite: "Élevée",
      solution: "Délivrance et accompagnement holistique"
    },
    {
      id: 10,
      nom: "Troubles Mentaux d'Origine Invisible",
      description: "Dépressions, psychoses, hallucinations ou troubles psychiatriques sans cause organique évidente. Une dimension spirituelle peut être explorée quand la médecine échoue.",
      image: "/images/pathologies/troubles-mentaux-invisibles.jpg",
      categorie: "mentales",
      symptomes: ["Dépression résistante", "Hallucinations", "Délire"],
      duree: "Variable",
      gravite: "Élevée",
      solution: "Approche intégrative médicale et spirituelle"
    },
    {
      id: 11,
      nom: "Dysfonctions Sexuelles",
      description: "Impuissance, frigidité, compulsions ou troubles relationnels liés à des blocages mystiques, souvent associés à des pratiques occultes ou des malédictions.",
      image: "/images/pathologies/dysfonctions-sexuelles.jpg",
      categorie: "familiales",
      symptomes: ["Impuissance", "Frigidité", "Compulsions sexuelles"],
      duree: "Variable",
      gravite: "Moyenne",
      solution: "Purification et restauration"
    },
    {
      id: 12,
      nom: "Blocages Professionnels",
      description: "Obstacles répétés dans le travail, les projets, le mariage ou les relations familiales d'origine spirituelle. Les portes semblent se fermer inexplicablement.",
      image: "/images/pathologies/blocages-professionnels.jpg",
      categorie: "professionnelles",
      symptomes: ["Échecs professionnels", "Projets avortés", "Conflits relationnels"],
      duree: "Variable",
      gravite: "Modérée",
      solution: "Diagnostic et déblocage des obstacles"
    },
    {
      id: 13,
      nom: "Malédictions Générationnelles",
      description: "Problèmes récurrents transmis de génération en génération : stérilité, pauvreté, maladies, divorces, décès précoces, etc.",
      image: "/images/pathologies/maledictions-generationnelles.jpg",
      categorie: "familiales",
      symptomes: ["Schémas répétitifs", "Problèmes familiaux récurrents", "Échecs transgénérationnels"],
      duree: "Générationnelle",
      gravite: "Élevée",
      solution: "Bris de chaînes générationnelles"
    },
    {
      id: 14,
      nom: "Fatigue Spirituelle Chronique",
      description: "Épuisement persistant non expliqué médicalement, souvent accompagné de lourdeur, de manque de motivation et de sensibilité accrue aux atmosphères spirituelles.",
      image: "/images/pathologies/fatigue-spirituelle.jpg",
      categorie: "spirituelles",
      symptomes: ["Fatigue constante", "Lourdeur", "Manque d'énergie"],
      duree: "Chronique",
      gravite: "Modérée",
      solution: "Purification et restauration énergétique"
    },
    {
      id: 15,
      nom: "Phobies Spirituelles",
      description: "Peur intense et irrationnelle de certains lieux, objets ou situations, souvent liée à des expériences spirituelles traumatisantes ou à des liens avec le monde invisible.",
      image: "/images/pathologies/phobies-spirituelles.jpg",
      categorie: "mentales",
      symptomes: ["Peur irrationnelle", "Attaques de panique", "Évitement compulsif"],
      duree: "Variable",
      gravite: "Modérée",
      solution: "Libération et guérison des mémoires"
    }
  ];

  const statistiques = [
    { valeur: "95%", label: "de cas améliorés" },
    { valeur: "2,500+", label: "personnes accompagnées" },
    { valeur: "18", label: "mois de suivi moyen" },
    { valeur: "98%", label: "de satisfaction" }
  ];

  const filteredPathologies = pathologies.filter(patho => {
    const matchesSearch = searchTerm === "" || 
      patho.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patho.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "tous" || patho.categorie === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              src="/images/pathologies/pathologies.jpg"
              alt="Pathologies MTHS"
              className="w-full h-full object-cover opacity-30"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-800/30"></div>
          </div>
          <div className={`relative text-center py-20 px-4 transition-all duration-700 ${heroInView ? 'animate-fadeUp' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Pathologies Prises en Charge par la MTHS
            </h1>
            <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              La Médecine Traditionnelle des Handicapés Spirituels accompagne les personnes souffrant de troubles 
              dont l'origine est souvent invisible à l'œil humain, en complémentarité avec la médecine conventionnelle.
            </p>
            <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Approche Complémentaire</h3>
                  <p className="text-gray-700">
                    Ces pathologies sont prises en charge en parallèle des soins médicaux conventionnels. 
                    Nous ne remplaçons pas la médecine moderne mais offrons une approche holistique intégrant 
                    la dimension spirituelle souvent négligée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
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

        {/* Filtres et recherche */}
        <div ref={filtersRef} className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Pathologies par Catégorie
            </h2>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Rechercher une pathologie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white shadow-sm"
              />
            </div>
          </div>
          
          <div className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 ${filtersInView ? 'animate-fadeIn' : 'opacity-0'}`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-btn px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-700 border border-blue-200 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des pathologies */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPathologies.map((patho, idx) => (
            <div
              key={patho.id}
              className={`card-hover bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-lg transition-all duration-700 ${gridInView ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Image de la pathologie */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={patho.image}
                  alt={patho.nom}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = "/images/pathologies/default.jpg"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {patho.gravite}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{patho.nom}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {patho.description}
                </p>

                {/* Symptômes */}
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Symptômes fréquents</h4>
                  <div className="flex flex-wrap gap-2">
                    {patho.symptomes.map((symptome, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-50 text-blue-800 text-xs px-3 py-1.5 rounded-full border border-blue-200"
                      >
                        {symptome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Solution MTHS</h4>
                  <p className="text-gray-700 text-sm">{patho.solution}</p>
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <span>⏱️ {patho.duree}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 rounded-lg font-medium text-sm text-center transition-all shadow-md hover:shadow-lg"
                  >
                    Diagnostic
                  </a>
                  <a
                    href="/parcours"
                    className="px-4 py-2.5 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    Parcours <span className="text-base">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucune pathologie */}
        {filteredPathologies.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md mb-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Aucune pathologie trouvée
            </h3>
            <p className="text-gray-500 mb-6">
              Aucune pathologie ne correspond à votre recherche dans cette catégorie.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("tous");
              }}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 mx-auto"
            >
              Voir toutes les pathologies <span>→</span>
            </button>
          </div>
        )}

        {/* Section processus de guérison */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-10 text-white mb-16 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Notre Processus de Guérison
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Diagnostic", desc: "Évaluation spirituelle approfondie" },
                { step: "2", title: "Purification", desc: "Rituels de nettoyage spirituel" },
                { step: "3", title: "Délivrance", desc: "Libération des oppressions" },
                { step: "4", title: "Réinsertion", desc: "Réintégration et suivi" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section ressources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ressources Complémentaires
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Témoignages de Guérison", desc: "Découvrez les récits de personnes qui ont surmonté ces pathologies", action: "Voir les témoignages", link: "/temoignages" },
              { title: "Notre Approche Thérapeutique", desc: "Comprendre notre méthodologie holistique de prise en charge", action: "En savoir plus", link: "/approche" },
              { title: "Prendre Rendez-vous", desc: "Contactez-nous pour une consultation préalable gratuite", action: "Nous contacter", link: "/contact" }
            ].map((ressource, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-blue-100 p-6 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{ressource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{ressource.desc}</p>
                <a 
                  href={ressource.link}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                >
                  {ressource.action} <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div ref={ctaRef} className="text-center">
          <div className={`bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-10 max-w-3xl mx-auto transition-all duration-1000 ${ctaInView ? 'animate-scaleIn' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'un Diagnostic Spirituel ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe d'accompagnateurs spirituels est disponible pour vous aider à identifier 
              la racine spirituelle de vos difficultés et vous proposer un parcours adapté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Prendre Rendez-vous
              </a>
              <a
                href="/urgence"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all"
              >
                Urgence Spirituelle
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Consultation préalable gratuite • Confidentialité assurée • Approche respectueuse
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pathologies;