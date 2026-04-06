import React, { useState, useEffect, useRef } from "react";

// Hook personnalisé pour détecter l'entrée dans le viewport
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

function Parcours() {
  const [activeStep, setActiveStep] = useState(0);

  const etapes = [
    {
      id: 1,
      titre: "Accueil & Accueil Bienveillant",
      description: "Réception chaleureuse et bienveillante de la personne dans un esprit d'écoute et de respect total de sa dignité.",
      details: {
        duree: "30-45 minutes",
        lieu: "Centre MTHS ou en ligne",
        objectif: "Créer un climat de confiance et de sécurité",
        actions: [
          "Accueil personnalisé par un accompagnateur",
          "Présentation du centre et de l'approche MTHS",
          "Explication du processus confidentiel",
          "Séance de questions-réponses"
        ],
        resultat: "La personne se sent accueillie et en confiance pour partager"
      },
      couleur: "from-blue-400 to-blue-500"
    },
    {
      id: 2,
      titre: "Écoute Active & Diagnostic",
      description: "Entretien approfondi et confidentiel pour recueillir le vécu, les souffrances invisibles et les symptômes spirituels, psychiques et sociaux.",
      details: {
        duree: "1-2 heures",
        lieu: "Cabinet privé ou en ligne",
        objectif: "Comprendre en profondeur la situation",
        actions: [
          "Écoute active sans jugement",
          "Recueil de l'histoire personnelle et familiale",
          "Identification des symptômes spirituels",
          "Évaluation des besoins spécifiques"
        ],
        resultat: "Une compréhension claire de la situation et des besoins"
      },
      couleur: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      titre: "Discernement & Analyse",
      description: "Analyse spirituelle et psychosomatique pour identifier la racine des troubles (envoûtements, possessions, blocages mystiques, etc.).",
      details: {
        duree: "24-48 heures d'analyse",
        lieu: "Centre de discernement MTHS",
        objectif: "Identifier les causes profondes",
        actions: [
          "Analyse spirituelle approfondie",
          "Évaluation psychosomatique",
          "Consultation d'équipe pluridisciplinaire",
          "Recherche de liens générationnels"
        ],
        resultat: "Diagnostic précis des causes spirituelles"
      },
      couleur: "from-blue-600 to-blue-700"
    },
    {
      id: 4,
      titre: "Orientation Personnalisée",
      description: "Proposition d'un parcours personnalisé adapté à la situation, en complémentarité avec les soins médicaux si nécessaire.",
      details: {
        duree: "1 heure",
        lieu: "Centre MTHS",
        objectif: "Définir un plan d'accompagnement sur mesure",
        actions: [
          "Présentation des options thérapeutiques",
          "Explication des rites et protocoles adaptés",
          "Coordination avec les soins médicaux existants",
          "Établissement d'un calendrier personnalisé"
        ],
        resultat: "Un plan clair et adapté pour la guérison"
      },
      couleur: "from-blue-700 to-blue-800"
    },
    {
      id: 5,
      titre: "Thérapie Progressive",
      description: "Application des 5 piliers de la MTHS : diagnostic, naturopathie/RTA, rituels SO'O inculturés, délivrance, rééducation morale.",
      details: {
        duree: "Variable selon le cas (1-6 mois)",
        lieu: "Centre MTHS et à distance",
        objectif: "Mise en œuvre du traitement holistique",
        actions: [
          "Sessions de purification et de délivrance",
          "Utilisation de Remèdes Traditionnels Améliorés",
          "Rites SO'O christianisés",
          "Accompagnement psychospirituel continu"
        ],
        resultat: "Transformation et guérison progressive"
      },
      couleur: "from-blue-800 to-blue-900"
    },
    {
      id: 6,
      titre: "Suivi & Réinsertion",
      description: "Accompagnement durable pour consolider la guérison, favoriser la resocialisation et prévenir les rechutes, avec dignité et absence de jugement.",
      details: {
        duree: "3-12 mois de suivi",
        lieu: "À distance et rencontres périodiques",
        objectif: "Assurer une guérison durable",
        actions: [
          "Sessions de suivi régulières",
          "Accompagnement à la réinsertion sociale",
          "Support communautaire et groupe de parole",
          "Prévention des rechutes"
        ],
        resultat: "Guérison durable et réintégration réussie"
      },
      couleur: "from-blue-900 to-blue-950"
    }
  ];

  const statistiques = [
    { valeur: "95%", label: "de satisfaction client" },
    { valeur: "2,500+", label: "parcours accomplis" },
    { valeur: "98%", label: "de guérison durable" },
    { valeur: "24/7", label: "support disponible" }
  ];

  const temoignages = [
    {
      nom: "Marie K.",
      texte: "Le parcours MTHS m'a redonné la paix après 10 ans de souffrance. Chaque étape était claire et accompagnée avec beaucoup d'amour.",
      duree: "4 mois de parcours"
    },
    {
      nom: "Paul D.",
      texte: "L'approche progressive m'a permis de guérir à mon rythme. Le suivi post-guérison a été déterminant pour ma réinsertion.",
      duree: "6 mois de traitement"
    },
    {
      nom: "Anne-Marie T.",
      texte: "Je recommande ce parcours à tous ceux qui cherchent une guérison authentique. L'équipe est professionnelle et bienveillante.",
      duree: "3 mois d'accompagnement"
    }
  ];

  // Références pour les animations au scroll
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);
  const [etapesRef, etapesInView] = useInView(0.2);
  const [temoignagesRef, temoignagesInView] = useInView(0.2);
  const [ressourcesRef, ressourcesInView] = useInView(0.2);
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
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease forwards; }
        .animate-slideLeft { animation: slideInLeft 0.7s ease forwards; }
        .animate-slideRight { animation: slideInRight 0.7s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .hover-grow { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-grow:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 30px -12px rgba(0,0,0,0.15); }
        .stat-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .stat-card:hover { transform: translateY(-8px); box-shadow: 0 25px 35px -12px rgba(59,130,246,0.25); }
        .step-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
        }
      `}</style>

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section avec image de fond améliorée */}
        <div 
          ref={heroRef}
          className="relative overflow-hidden rounded-2xl mb-12 shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src="/images/rites/passage.jpg"
              alt="Parcours MTHS"
              className="w-full h-full object-cover opacity-40"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-800/40"></div>
          </div>
          <div className={`relative text-center py-20 px-4 transition-all duration-700 ${heroInView ? 'animate-fadeUp' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Parcours d'Accompagnement MTHS
            </h1>
            <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Un chemin structuré en 6 étapes pour une guérison intégrale du corps, de l'âme et de l'esprit.
              Chaque parcours est personnalisé, confidentiel et respectueux de votre dignité.
            </p>
            
            <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {/* Icône supprimée */}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Notre Engagement</h3>
                  <p className="text-gray-700">
                    Nous accompagnons avec dignité, sans jugement, en complémentarité avec les soins hospitaliers.
                    Votre confidentialité est garantie à chaque étape du parcours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques avec animations */}
        <div ref={statsRef} className="mb-16">
          <h2 className={`text-3xl font-bold text-gray-900 mb-10 text-center transition-all duration-700 ${statsInView ? 'animate-fadeUp' : 'opacity-0'}`}>
            Notre Parcours en Chiffres
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

        {/* Étapes du parcours */}
        <div ref={etapesRef} className="mb-20">
          <h2 className={`text-3xl font-bold text-gray-900 mb-10 text-center transition-all duration-700 ${etapesInView ? 'animate-fadeUp' : 'opacity-0'}`}>
            Les 6 Étapes de Votre Parcours
          </h2>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 rounded-full"></div>
              <div className="space-y-12">
                {etapes.map((etape, index) => (
                  <div 
                    key={etape.id}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700 ${etapesInView ? (index % 2 === 0 ? 'animate-slideLeft' : 'animate-slideRight') : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div 
                        className={`bg-white rounded-2xl border border-blue-100 p-6 shadow-lg hover-grow cursor-pointer transition-all duration-300 ${
                          activeStep === index ? 'ring-2 ring-blue-500 shadow-xl' : ''
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <div className="mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{etape.titre}</h3>
                          <p className="text-sm text-blue-600 font-semibold mt-1">Étape {etape.id}/6</p>
                        </div>
                        <p className="text-gray-700">{etape.description}</p>
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-500 border-t pt-3 border-blue-50">
                          <span className="flex items-center gap-1">⏱️ {etape.details.duree}</span>
                          <span className="flex items-center gap-1">📍 {etape.details.lieu.split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className={`w-10 h-10 rounded-full border-4 border-white bg-gradient-to-r ${etape.couleur} shadow-md transition-all duration-300 ${
                        activeStep === index ? 'scale-150 shadow-lg step-pulse' : ''
                      }`}></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-6">
            {etapes.map((etape, index) => (
              <div 
                key={etape.id}
                className={`bg-white rounded-2xl border border-blue-100 p-6 shadow-md transition-all duration-700 ${etapesInView ? 'animate-fadeUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{etape.titre}</h3>
                    <p className="text-sm text-blue-600">Étape {etape.id}/6</p>
                  </div>
                  <div className="text-blue-500 text-xl font-bold">
                    {activeStep === index ? "▲" : "▼"}
                  </div>
                </div>
                <p className="text-gray-700 mt-4">{etape.description}</p>
                
                {activeStep === index && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200 animate-fadeIn">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-sm text-gray-700"><strong>Durée :</strong> {etape.details.duree}</div>
                      <div className="text-sm text-gray-700"><strong>Lieu :</strong> {etape.details.lieu}</div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 text-sm mb-2">🎯 Objectif</h4>
                      <p className="text-gray-700 text-sm">{etape.details.objectif}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 text-sm mb-2">📋 Actions concrètes</h4>
                      <ul className="space-y-2">
                        {etape.details.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-2">✨ Résultat attendu</h4>
                      <p className="text-gray-700 text-sm">{etape.details.resultat}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Témoignages */}
        <div ref={temoignagesRef} className="mb-20">
          <h2 className={`text-3xl font-bold text-gray-900 mb-10 text-center transition-all duration-700 ${temoignagesInView ? 'animate-fadeUp' : 'opacity-0'}`}>
            Témoignages de Parcours Accomplis
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border border-blue-100 p-6 shadow-lg hover-grow transition-all duration-700 ${temoignagesInView ? 'animate-scaleIn' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {temoignage.nom.split(' ')[0].charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{temoignage.nom}</h4>
                    <p className="text-sm text-blue-600 flex items-center gap-1">⏱️ {temoignage.duree}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{temoignage.texte}"</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ressources */}
        <div ref={ressourcesRef} className="mb-20">
          <h2 className={`text-3xl font-bold text-gray-900 mb-10 text-center transition-all duration-700 ${ressourcesInView ? 'animate-fadeUp' : 'opacity-0'}`}>
            Prêt à Commencer Votre Parcours ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Consultation Initiale", desc: "Rencontre d'évaluation gratuite pour définir votre parcours", action: "Prendre RDV", link: "/contact" },
              { title: "Documentation Complète", desc: "Téléchargez notre guide détaillé du parcours MTHS", action: "Télécharger", link: "/docs/parcours-mths.pdf" },
              { title: "Questions Fréquentes", desc: "Consultez nos réponses aux questions les plus courantes", action: "Consulter", link: "/faq" }
            ].map((ressource, idx) => (
              <div 
                key={idx} 
                className={`bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 shadow-md hover-grow transition-all duration-700 ${ressourcesInView ? 'animate-slideRight' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="font-bold text-gray-900 text-xl mb-2">{ressource.title}</h3>
                <p className="text-gray-700 text-sm mb-5 leading-relaxed">{ressource.desc}</p>
                <a 
                  href={ressource.link}
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold border-b-2 border-blue-300 pb-1 transition-all hover:gap-3"
                >
                  {ressource.action} <span className="text-lg">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div ref={ctaRef} className="text-center">
          <div className={`bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white shadow-2xl transition-all duration-1000 ${ctaInView ? 'animate-scaleIn' : 'opacity-0'}`}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                Commencez Votre Chemin de Guérison Aujourd'hui
              </h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Rejoignez les milliers de personnes qui ont retrouvé la paix et l'équilibre 
                grâce à notre accompagnement holistique.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  📅 Prendre Rendez-vous Gratuit
                </a>
                <a
                  href="/urgence"
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold rounded-xl transition-all hover:-translate-y-1"
                >
                  📞 Urgence : +237 693 21 54 31
                </a>
              </div>
              <p className="mt-8 text-sm text-blue-200">
                Première consultation gratuite • Confidentialité garantie • Approche respectueuse
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Parcours;