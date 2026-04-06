import React, { useState, useEffect, useRef } from "react";

// Hook personnalisé pour les animations au scroll
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

function Confidentialite() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const tableOfContents = [
    { id: "introduction", title: "1. Introduction" },
    { id: "collecte", title: "2. Données collectées" },
    { id: "utilisation", title: "3. Utilisation des données" },
    { id: "partage", title: "4. Partage des données" },
    { id: "droits", title: "5. Vos droits" },
    { id: "securite", title: "6. Sécurité" },
    { id: "conservation", title: "7. Conservation" },
    { id: "engagement", title: "8. Notre engagement" }
  ];

  const vosDroits = [
    {
      droit: "Droit d'accès",
      description: "Accéder à vos données personnelles et spirituelles",
      delai: "1 mois maximum"
    },
    {
      droit: "Droit de rectification",
      description: "Corriger vos données inexactes",
      delai: "Sans délai"
    },
    {
      droit: "Droit à l'effacement",
      description: "Supprimer vos données personnelles",
      delai: "1 mois maximum"
    },
    {
      droit: "Droit d'opposition",
      description: "S'opposer au traitement",
      delai: "Sans délai"
    },
    {
      droit: "Droit à la limitation",
      description: "Limiter le traitement de vos données",
      delai: "Sans délai"
    },
    {
      droit: "Droit au retrait du consentement",
      description: "Retirer votre consentement à tout moment",
      delai: "Sans délai"
    }
  ];

  const principesConfidentialite = [
    {
      principe: "Secret professionnel absolu",
      description: "Tous les thérapeutes et collaborateurs sont liés par le secret professionnel"
    },
    {
      principe: "Absence de jugement",
      description: "Nous accueillons chaque parole sans préjugé ni condamnation"
    },
    {
      principe: "Consentement éclairé",
      description: "Vous êtes informé et donnez votre consentement pour chaque traitement"
    },
    {
      principe: "Minimisation des données",
      description: "Nous collectons uniquement les données nécessaires à votre accompagnement"
    }
  ];

  // Références pour animations scroll
  const [heroRef, heroInView] = useInView(0.1);
  const [tocRef, tocInView] = useInView(0.2);
  const [contentRef, contentInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
        .animate-fadeIn { animation: fadeIn 0.9s ease forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease forwards; }
        .animate-slideLeft { animation: slideInLeft 0.7s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .toc-item {
          transition: all 0.25s ease;
        }
        .toc-item:hover {
          transform: translateX(4px);
          background-color: #eff6ff;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -12px rgba(0,0,0,0.1);
        }
      `}</style>

      <main className="flex-1">
        {/* Hero Section avec image de fond */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/temoignages/confi.jpg"
              alt="Charte de confidentialité MTHS"
              className="w-full h-full object-cover opacity-25"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-transparent"></div>
          </div>
          
          <div ref={heroRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <div className={`transition-all duration-700 ${heroInView ? 'animate-fadeUp' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium">Centre MTHS • Association Mariale d'Abili</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Charte de Confidentialité
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-2">
                Centre MARIE REINE DE LA MISÉRICORDE D'ABILI
              </p>
              <p className="text-base text-blue-200 mt-1">
                Dernière mise à jour : 15 janvier 2024 • Conforme à la Loi Camerounaise
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="text-sm bg-white/20 px-4 py-2 rounded-full">Fondé en 1979</div>
                <div className="text-sm bg-white/20 px-4 py-2 rounded-full">Récépissé N°030/RDA/J12/SAAJP</div>
                <div className="text-sm bg-white/20 px-4 py-2 rounded-full">Confidentialité absolue</div>
              </div>
            </div>
          </div>

          {/* Vague décorative */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".1"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".3"></path>
            </svg>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Important Notice */}
            <div className={`mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg transition-all duration-700 ${heroInView ? 'animate-fadeIn' : 'opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Notre engagement pastoral</h3>
                  <p className="text-gray-700">
                    « Au Centre MARIE REINE DE LA MISÉRICORDE D'ABILI, nous voyons une personne qui souffre, 
                    pas un problème à condamner. Tout ce que vous partagez est protégé par un secret 
                    professionnel absolu et traité avec dignité, respect et absence totale de jugement. »
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Table of Contents - Left Sidebar */}
              <div ref={tocRef} className="lg:col-span-1">
                <div className={`sticky top-24 bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-700 ${tocInView ? 'animate-slideLeft' : 'opacity-0'}`}>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Sommaire
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="toc-item flex items-center gap-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <span className="text-blue-500 font-medium">{item.title.charAt(0)}</span>
                        <span className="font-medium text-sm">{item.title}</span>
                      </a>
                    ))}
                  </nav>

                  {/* Contact Responsable */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Contact responsable</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">📧</span>
                        <div>
                          <p className="font-medium text-sm text-gray-700">contact@mths-abili.org</p>
                          <p className="text-xs text-gray-500">Réponse sous 48h</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">📍</span>
                        <div>
                          <p className="font-medium text-sm text-gray-700">Centre MTHS Abili</p>
                          <p className="text-xs text-gray-500">27 km de Yaoundé, Cameroun</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">🏛️</span>
                        <div>
                          <p className="font-medium text-sm text-gray-700">Association Mariale d'Abili</p>
                          <p className="text-xs text-gray-500">Récépissé N°030/RDA/J12/SAAJP</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/conditions"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md text-center"
                  >
                    Charte et Conditions
                  </a>
                </div>
              </div>

              {/* Main Content - Right Column */}
              <div ref={contentRef} className="lg:col-span-3">
                <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-700 ${contentInView ? 'animate-fadeUp' : 'opacity-0'}`}>
                  
                  {/* Introduction */}
                  <div className="p-6 md:p-8 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed">
                      La présente Charte de Confidentialité s'applique à tous les services proposés par le 
                      Centre MARIE REINE DE LA MISÉRICORDE D'ABILI, géré par l'Association Mariale d'Abili (ASMAB). 
                      Elle décrit comment nous collectons, utilisons et protégeons les informations personnelles 
                      et spirituelles que vous nous confiez, conformément à la loi camerounaise et à notre 
                      charte éthique.
                    </p>
                  </div>

                  {/* Sections */}
                  <div className="divide-y divide-gray-100">
                    {/* Section 1 */}
                    <div id="introduction" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("introduction")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-blue-600">1</div>
                          <h3 className="text-xl font-bold text-gray-800">Introduction</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.introduction ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.introduction || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Le Centre MARIE REINE DE LA MISÉRICORDE D'ABILI, association déclarée sous le 
                            récépissé N°030/RDA/J12/SAAJP du 14 Décembre 2010, est responsable du traitement 
                            de vos données personnelles et spirituelles.
                          </p>
                          
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-2">Notre engagement</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">• Confidentialité absolue de votre parcours spirituel</li>
                              <li className="flex items-start gap-2">• Respect de la dignité humaine et de votre liberté</li>
                              <li className="flex items-start gap-2">• Sécurité maximale de vos informations sensibles</li>
                              <li className="flex items-start gap-2">• Absence totale de jugement et de discrimination</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 2 */}
                    <div id="collecte" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("collecte")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-purple-600">2</div>
                          <h3 className="text-xl font-bold text-gray-800">Données collectées</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.collecte ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.collecte || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Dans le cadre de votre accompagnement spirituel, nous pouvons collecter différentes 
                            catégories de données personnelles.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Données d'identification</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Nom et prénom</li>
                                <li>• Date et lieu de naissance</li>
                                <li>• Adresse et téléphone</li>
                                <li>• Situation familiale et professionnelle</li>
                              </ul>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                              <h4 className="font-bold text-purple-800 mb-2">Données spirituelles</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Historique des souffrances spirituelles</li>
                                <li>• Diagnostic spirituel</li>
                                <li>• Parcours de guérison</li>
                                <li>• Témoignages (avec consentement)</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-2">Données de santé</h4>
                            <p className="text-sm text-gray-600">
                              Informations médicales pertinentes pour le discernement spirituel, 
                              toujours dans le respect de la complémentarité avec la médecine moderne.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 3 */}
                    <div id="utilisation" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("utilisation")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-green-600">3</div>
                          <h3 className="text-xl font-bold text-gray-800">Utilisation des données</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.utilisation ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.utilisation || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Vos données personnelles sont traitées exclusivement pour les finalités suivantes :
                          </p>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                              <div className="bg-blue-100 p-2 rounded w-8 h-8 flex items-center justify-center font-bold text-blue-700">1</div>
                              <div>
                                <h4 className="font-bold text-blue-800">Accompagnement spirituel</h4>
                                <p className="text-sm text-blue-700">
                                  Établir un diagnostic spirituel, proposer un parcours de guérison adapté, 
                                  suivre votre progression
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                              <div className="bg-green-100 p-2 rounded w-8 h-8 flex items-center justify-center font-bold text-green-700">2</div>
                              <div>
                                <h4 className="font-bold text-green-800">Sécurité et prévention</h4>
                                <p className="text-sm text-green-700">
                                  Prévenir les risques, assurer la sécurité des personnes, respecter les 
                                  obligations légales
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                              <div className="bg-purple-100 p-2 rounded w-8 h-8 flex items-center justify-center font-bold text-purple-700">3</div>
                              <div>
                                <h4 className="font-bold text-purple-800">Amélioration des services</h4>
                                <p className="text-sm text-purple-700">
                                  Améliorer nos protocoles thérapeutiques (données anonymisées), 
                                  formation des thérapeutes
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 4 */}
                    <div id="partage" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("partage")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-amber-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-amber-600">4</div>
                          <h3 className="text-xl font-bold text-gray-800">Partage des données</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.partage ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.partage || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Vos données sont protégées par le secret professionnel et ne sont partagées qu'avec 
                            votre consentement explicite, sauf exceptions légales.
                          </p>
                          
                          <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-gray-800 mb-2">Partage avec consentement</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2"><span className="font-semibold">• Équipe thérapeutique :</span> Thérapeutes et accompagnants du Centre (secret professionnel)</li>
                                <li className="flex items-center gap-2"><span className="font-semibold">• Référents spirituels :</span> Prêtres accompagnateurs (avec votre accord)</li>
                                <li className="flex items-center gap-2"><span className="font-semibold">• Médecins partenaires :</span> Dans le cadre de la complémentarité médecine moderne/MTHS</li>
                              </ul>
                            </div>
                            
                            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                              <h5 className="font-bold text-red-800 mb-2">⚠️ Secret professionnel absolu</h5>
                              <p className="text-red-700 text-sm">
                                Nous ne partageons jamais vos données avec des tiers commerciaux. 
                                Aucune information n'est vendue ou échangée. Le secret professionnel lie 
                                tous nos collaborateurs jusqu'à leur mort.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Exceptions légales</h4>
                              <p className="text-sm text-blue-700">
                                En cas d'obligation légale (danger immédiat pour vous ou autrui, réquisition 
                                judiciaire), nous pourrions être amenés à communiquer certaines informations 
                                aux autorités compétentes.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 5 - Vos droits */}
                    <div id="droits" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("droits")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-emerald-600">5</div>
                          <h3 className="text-xl font-bold text-gray-800">Vos droits</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.droits ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.droits || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Conformément à la loi camerounaise et à notre charte éthique, vous disposez des 
                            droits suivants concernant vos données personnelles :
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {vosDroits.map((droit, index) => (
                              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 card-hover">
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                  <span className="text-emerald-500 text-lg">✓</span>
                                  {droit.droit}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">{droit.description}</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-500">Délai de réponse :</span>
                                  <span className="text-xs font-semibold text-blue-600">{droit.delai}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-2">Comment exercer vos droits ?</h4>
                            <p className="text-blue-700 mb-3">
                              Pour exercer vos droits, contactez notre responsable de la protection des données :
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <a
                                href="mailto:contact@mths-abili.org"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                              >
                                📧 Envoyer un email
                              </a>
                              <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
                              >
                                Formulaire de contact
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 6 */}
                    <div id="securite" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("securite")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-indigo-600">6</div>
                          <h3 className="text-xl font-bold text-gray-800">Sécurité des données</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.securite ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.securite || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Nous mettons en œuvre des mesures rigoureuses pour protéger vos données contre 
                            tout accès non autorisé, perte ou altération.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                              <h4 className="font-bold text-indigo-800 mb-2">Mesures physiques</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">🔒 Archives sécurisées sous clé</li>
                                <li className="flex items-center gap-2">🔒 Accès contrôlé aux locaux</li>
                                <li className="flex items-center gap-2">🔒 Destruction sécurisée des documents</li>
                                <li className="flex items-center gap-2">🔒 Pas de discussion hors cadre professionnel</li>
                              </ul>
                            </div>
                            
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Mesures organisationnelles</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">✓ Formation au secret professionnel</li>
                                <li className="flex items-center gap-2">✓ Accès restreint aux dossiers</li>
                                <li className="flex items-center gap-2">✓ Procédures de sécurité strictes</li>
                                <li className="flex items-center gap-2">✓ Engagement écrit de confidentialité</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-800 mb-2">Protection des données numériques</h4>
                            <p className="text-gray-700 text-sm">
                              Les données numériques sont stockées sur des serveurs sécurisés, avec chiffrement 
                              des données sensibles. Les sauvegardes sont effectuées régulièrement et stockées 
                              de manière sécurisée.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 7 */}
                    <div id="conservation" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("conservation")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-cyan-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-cyan-600">7</div>
                          <h3 className="text-xl font-bold text-gray-800">Conservation des données</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.conservation ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.conservation || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Vos données sont conservées pendant la durée nécessaire à votre accompagnement 
                            spirituel, conformément à nos obligations légales et éthiques.
                          </p>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="border border-gray-200 p-3 text-left font-bold text-gray-700">Type de données</th>
                                  <th className="border border-gray-200 p-3 text-left font-bold text-gray-700">Durée de conservation</th>
                                  <th className="border border-gray-200 p-3 text-left font-bold text-gray-700">Base légale</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="hover:bg-gray-50">
                                  <td className="border border-gray-200 p-3">Dossier d'accompagnement actif</td>
                                  <td className="border border-gray-200 p-3">Durée du parcours + 5 ans</td>
                                  <td className="border border-gray-200 p-3">Accompagnement spirituel</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                  <td className="border border-gray-200 p-3">Données de facturation</td>
                                  <td className="border border-gray-200 p-3">10 ans</td>
                                  <td className="border border-gray-200 p-3">Obligation légale</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                  <td className="border border-gray-200 p-3">Témoignages écrits</td>
                                  <td className="border border-gray-200 p-3">Jusqu'au retrait du consentement</td>
                                  <td className="border border-gray-200 p-3">Consentement explicite</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                  <td className="border border-gray-200 p-3">Données anonymisées</td>
                                  <td className="border border-gray-200 p-3">Indéfiniment (recherche)</td>
                                  <td className="border border-gray-200 p-3">Intérêt scientifique</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                            <h5 className="font-bold text-amber-800 mb-2">Suppression des données</h5>
                            <p className="text-amber-700">
                              À l'expiration des délais de conservation, vos données sont supprimées de manière 
                              sécurisée ou anonymisées à des fins de recherche scientifique (sans identification 
                              possible).
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 8 - Notre engagement */}
                    <div id="engagement" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("engagement")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-pink-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-pink-600">8</div>
                          <h3 className="text-xl font-bold text-gray-800">Notre engagement éthique</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.engagement ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.engagement || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Au-delà des obligations légales, notre engagement repose sur des principes éthiques 
                            fondamentaux :
                          </p>
                          
                          <div className="space-y-4">
                            {principesConfidentialite.map((principe, index) => (
                              <div key={index} className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                                <div className="flex items-start gap-3 mb-2">
                                  <span className="text-2xl">🛡️</span>
                                  <div>
                                    <h4 className="font-bold text-blue-800">{principe.principe}</h4>
                                    <p className="text-sm text-blue-700 mt-1">{principe.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-2">Engagement écrit des thérapeutes</h4>
                            <p className="text-blue-700 mb-3">
                              Chaque thérapeute et collaborateur signe un engagement de confidentialité qui stipule :
                            </p>
                            <ul className="space-y-2 text-sm text-blue-700">
                              <li className="flex items-start gap-2">✓ Secret professionnel absolu jusqu'à la mort</li>
                              <li className="flex items-start gap-2">✓ Absence de jugement et respect inconditionnel</li>
                              <li className="flex items-start gap-2">✓ Protection maximale des données confiées</li>
                              <li className="flex items-start gap-2">✓ Non-utilisation des données à des fins personnelles</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="p-6 md:p-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Mises à jour et contact</h3>
                    <p className="text-gray-700 mb-6">
                      Cette charte de confidentialité peut être mise à jour pour refléter l'évolution de nos 
                      pratiques ou des obligations légales. La version actuelle est toujours accessible sur 
                      cette page. Pour toute question concernant la protection de vos données :
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800">Centre MARIE REINE DE LA MISÉRICORDE D'ABILI</p>
                        <p className="text-sm text-gray-600">
                          Association Mariale d'Abili (ASMAB)<br />
                          Récépissé N°030/RDA/J12/SAAJP du 14 Décembre 2010
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">Contact responsable</p>
                        <p className="text-sm text-gray-600">
                          📧 contact@mths-abili.org<br />
                          📞 (+237) 693 21 54 31<br />
                          📍 Abili, 27 km de Yaoundé, Cameroun
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accept Statement */}
                <div ref={ctaRef} className={`mt-8 text-center transition-all duration-1000 ${ctaInView ? 'animate-scaleIn' : 'opacity-0'}`}>
                  <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <span className="text-3xl">🛡️</span>
                    <div className="text-left">
                      <p className="font-bold text-gray-800">
                        « Votre confiance est sacrée. Votre parole reste ici. »
                      </p>
                      <p className="text-sm text-gray-600">
                        En poursuivant votre navigation ou en sollicitant un accompagnement, 
                        vous acceptez notre charte de confidentialité et notre engagement éthique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Confidentialite;