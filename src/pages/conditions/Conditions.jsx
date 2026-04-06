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

function Conditions() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const tableOfContents = [
    { id: "general", title: "1. Présentation" },
    { id: "mission", title: "2. Mission et objectifs" },
    { id: "services", title: "3. Services proposés" },
    { id: "ethical", title: "4. Charte éthique" },
    { id: "accompaniment", title: "5. Accompagnement" },
    { id: "boutique", title: "6. Boutique du Centre" },
    { id: "privacy", title: "7. Confidentialité" },
    { id: "legal", title: "8. Mentions légales" }
  ];

  const importantPoints = [
    {
      title: "Confidentialité totale",
      description: "Respect absolu de la vie privée et protection des données personnelles"
    },
    {
      title: "Absence de jugement",
      description: "Accueil bienveillant sans condamnation ni discrimination"
    },
    {
      title: "Complémentarité médicale",
      description: "La MTHS complète la médecine moderne, ne la remplace pas"
    },
    {
      title: "Conformité légale",
      description: "Respect de la Loi N° 2068/PJL/AN de 2024 sur la médecine traditionnelle"
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
        .card-hover {
          transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1), box-shadow 0.4s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 40px -12px rgba(0,0,0,0.15);
        }
        .toc-item {
          transition: all 0.25s ease;
        }
        .toc-item:hover {
          transform: translateX(4px);
          background-color: #eff6ff;
        }
      `}</style>

      <main className="flex-1">
        {/* Hero Section avec image de fond */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="absolute inset-0">
            <img
              src="/images/temoignages/conditions.jpg"
              alt="Conditions d'utilisation MTHS"
              className="w-full h-full object-cover opacity-25"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-transparent"></div>
          </div>
          
          <div ref={heroRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <div className={`transition-all duration-700 ${heroInView ? 'animate-fadeUp' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-medium">Association Mariale d'Abili (ASMAB)</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Charte et Conditions d'Utilisation
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-2">
                Centre MARIE REINE DE LA MISÉRICORDE D'ABILI
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="text-sm bg-white/10 px-4 py-2 rounded-full">Fondé en 1979</div>
                <div className="text-sm bg-white/10 px-4 py-2 rounded-full">Conforme Loi 2024</div>
                <div className="text-sm bg-white/10 px-4 py-2 rounded-full">Médecine révélée</div>
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
            <div className={`mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md transition-all duration-700 ${heroInView ? 'animate-fadeIn' : 'opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-blue-600 rounded-full mt-1"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Notre engagement pastoral</h3>
                  <p className="text-gray-700 mb-3">
                    « Au Centre, nous voyons une personne qui souffre, pas un problème à condamner. » 
                    En utilisant nos services, vous acceptez notre approche holistique fondée sur la dignité humaine, 
                    la confidentialité et l'absence totale de jugement.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Pour toute question, contactez-nous : 
                    <a href="tel:+237693215431" className="text-blue-600 font-semibold ml-1">(+237) 693 21 54 31</a>
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

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Principes clés</h4>
                    <div className="space-y-3">
                      {importantPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-green-500 text-lg mt-1">✓</span>
                          <div>
                            <p className="font-medium text-sm text-gray-700">{point.title}</p>
                            <p className="text-xs text-gray-500">{point.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md text-center"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>

              {/* Main Content - Right Column */}
              <div ref={contentRef} className="lg:col-span-3">
                <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-700 ${contentInView ? 'animate-fadeUp' : 'opacity-0'}`}>
                  
                  {/* Introduction */}
                  <div className="p-6 md:p-8 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Le présent document établit les principes, la charte éthique et les conditions d'utilisation des services 
                      du Centre MARIE REINE DE LA MISÉRICORDE D'ABILI, géré par l'Association Mariale d'Abili (ASMAB), 
                      association déclarée sous le récépissé N°030/RDA/J12/SAAJP du 14 Décembre 2010, 
                      Préfecture du Ngoumou, Cameroun.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      La Médecine Traditionnelle des Handicapés Spirituels (MTHS) est une médecine holistique révélée 
                      le 12 mai 1979 par l'apparition de la Sainte Vierge Marie à Jean Paul Sylvain SIDA ABENA à Abili, 
                      village situé à 27 km de Yaoundé, Cameroun.
                    </p>
                  </div>

                  {/* Sections */}
                  <div className="divide-y divide-gray-100">
                    {/* Section 1 */}
                    <div id="general" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("general")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-blue-600">1</div>
                          <h3 className="text-xl font-bold text-gray-800">Présentation du Centre</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.general ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.general || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Le Centre MARIE REINE DE LA MISÉRICORDE D'ABILI est un lieu de prière, de soins, 
                            de rééducation morale et de renaissance intérieure, où la foi chrétienne rencontre 
                            la médecine traditionnelle africaine pour restaurer l'homme dans son intégrité.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-2">Identité juridique</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600 w-32 flex-shrink-0">Nom :</span>
                                <span>Association Mariale d'Abili (ASMAB)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600 w-32 flex-shrink-0">Récépissé :</span>
                                <span>N°030/RDA/J12/SAAJP du 14 Décembre 2010</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600 w-32 flex-shrink-0">Localisation :</span>
                                <span>Village Abili, Préfecture du Ngoumou, 27 km de Yaoundé</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600 w-32 flex-shrink-0">Contact :</span>
                                <span>(+237) 693 21 54 31 / (+237) 677 31 44 12</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600 w-32 flex-shrink-0">BP :</span>
                                <span>12561 Yaoundé, Cameroun</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 2 */}
                    <div id="mission" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("mission")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-purple-600">2</div>
                          <h3 className="text-xl font-bold text-gray-800">Mission et objectifs</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.mission ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.mission || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">2.1 Mission divine</h4>
                          <p>
                            Suite à l'apparition de la Sainte Vierge Marie le 12 mai 1979, notre mission est de :
                          </p>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start gap-2">• Apporter la guérison, la conversion et la délivrance aux âmes enchaînées</li>
                            <li className="flex items-start gap-2">• Révéler la Médecine Traditionnelle des Handicapés Spirituels</li>
                            <li className="flex items-start gap-2">• Ramener de l'obscurité à la lumière et du pouvoir de Satan à Dieu</li>
                          </ul>
                          
                          <h4 className="font-bold text-gray-800 mt-6">2.2 Objectifs de l'ASMAB</h4>
                          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                            <ul className="space-y-2 text-sm">
                              <li>• La lutte contre la dégradation avancée des mœurs et des comportements de déviance</li>
                              <li>• La valorisation des identités culturelles des peuples d'Afrique noire</li>
                              <li>• L'approfondissement de la recherche scientifique sur la tradition ancestrale Béti</li>
                              <li>• La promotion de la Santé pour tous, la Culture de la Paix et du vivre-ensemble</li>
                              <li>• Le Développement Inclusif et le dialogue des cultures et des Religions</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 3 */}
                    <div id="services" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("services")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-green-600">3</div>
                          <h3 className="text-xl font-bold text-gray-800">Services proposés</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.services ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.services || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Le Centre propose une approche thérapeutique holistique basée sur 5 piliers fondamentaux :
                          </p>
                          
                          <div className="grid grid-cols-1 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Les 5 Piliers Thérapeutiques</h4>
                              <ol className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><span className="font-bold text-blue-600">1.</span> <strong>Diagnostic spirituel et psychosomatique</strong> - Discernement de l'origine du mal</li>
                                <li className="flex items-start gap-2"><span className="font-bold text-blue-600">2.</span> <strong>Naturopathie et remèdes traditionnels améliorés</strong> - Pharmacopée africaine purifiée</li>
                                <li className="flex items-start gap-2"><span className="font-bold text-blue-600">3.</span> <strong>Rituels de purification (rite SO'O inculturé)</strong> - Chemin de purification intérieure</li>
                                <li className="flex items-start gap-2"><span className="font-bold text-blue-600">4.</span> <strong>Délivrance et désenvoûtement</strong> - Libération par l'autorité du Christ</li>
                                <li className="flex items-start gap-2"><span className="font-bold text-blue-600">5.</span> <strong>Rééducation morale et réinsertion sociale</strong> - Accompagnement durable</li>
                              </ol>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                              <h4 className="font-bold text-purple-800 mb-2">Parcours d'accompagnement en 6 étapes</h4>
                              <ol className="space-y-1 text-sm">
                                <li>1. <strong>Accueil</strong> - Réception avec dignité</li>
                                <li>2. <strong>Écoute</strong> - Temps de parole libérée</li>
                                <li>3. <strong>Discernement</strong> - Identification de l'origine du mal</li>
                                <li>4. <strong>Orientation</strong> - Proposition thérapeutique adaptée</li>
                                <li>5. <strong>Thérapie progressive</strong> - Soins holistiques</li>
                                <li>6. <strong>Suivi post-guérison</strong> - Accompagnement durable</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 4 */}
                    <div id="ethical" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("ethical")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-amber-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-amber-600">4</div>
                          <h3 className="text-xl font-bold text-gray-800">Charte éthique</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.ethical ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.ethical || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">4.1 Principes fondamentaux</h4>
                          <p>
                            Chaque thérapeute et collaborateur du Centre s'engage à respecter les principes suivants :
                          </p>
                          
                          <div className="space-y-3">
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                              <h5 className="font-bold text-blue-800 mb-1">✓ Dignité humaine</h5>
                              <p className="text-sm text-blue-700">Chaque patient est accueilli comme un enfant de Dieu, avec respect et bienveillance</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                              <h5 className="font-bold text-green-800 mb-1">✓ Confidentialité</h5>
                              <p className="text-sm text-green-700">Tout ce qui est partagé reste strictement confidentiel</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                              <h5 className="font-bold text-purple-800 mb-1">✓ Absence de jugement</h5>
                              <p className="text-sm text-purple-700">Nous voyons une personne qui souffre, pas un problème à condamner</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                              <h5 className="font-bold text-orange-800 mb-1">✓ Transparence</h5>
                              <p className="text-sm text-orange-700">Aucune promesse magique ou miraculeuse, seulement la vérité</p>
                            </div>
                          </div>
                          
                          <h4 className="font-bold text-gray-800 mt-6">4.2 Complémentarité avec l'hôpital</h4>
                          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                            <h5 className="font-bold text-red-800 mb-2">⚠️ Important</h5>
                            <p className="text-red-700">
                              La MTHS vient en complément de la médecine moderne et ne remplace en aucun cas 
                              les soins hospitaliers ou les traitements biomédicaux lorsque ceux-ci sont nécessaires. 
                              Nous croyons que Dieu agit aussi par la science médicale.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 5 */}
                    <div id="accompaniment" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("accompaniment")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-red-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-red-600">5</div>
                          <h3 className="text-xl font-bold text-gray-800">Conditions d'accompagnement</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.accompaniment ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.accompaniment || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">5.1 Modalités d'accès</h4>
                          <p>
                            L'accompagnement au Centre nécessite :
                          </p>
                          <ul className="space-y-2 ml-4">
                            <li>• Une demande d'orientation via le formulaire de contact</li>
                            <li>• Un rendez-vous préalable avec l'équipe du Centre</li>
                            <li>• L'acceptation de la charte éthique et du parcours proposé</li>
                            <li>• L'engagement dans un processus progressif de guérison</li>
                          </ul>
                          
                          <h4 className="font-bold text-gray-800">5.2 Pathologies prises en charge</h4>
                          <p>
                            Le Centre accompagne les personnes souffrant de handicaps spirituels : possessions, 
                            envoûtements, malédictions, blocages mystiques, esclavage spirituel (Kong), 
                            épilepsie mystique, stérilité spirituelle, troubles mentaux d'origine invisible, etc.
                          </p>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-800 mb-2">Durée du parcours</h4>
                            <p className="text-gray-700 text-sm">
                              La durée varie selon la nature et la profondeur de l'atteinte spirituelle. 
                              Certaines personnes connaissent une libération rapide, d'autres nécessitent 
                              un accompagnement progressif sur plusieurs semaines ou mois.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 6 */}
                    <div id="boutique" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("boutique")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-orange-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-orange-600">6</div>
                          <h3 className="text-xl font-bold text-gray-800">Boutique du Centre</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.boutique ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.boutique || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">6.1 Produits disponibles</h4>
                          <p>
                            La boutique propose des produits éthiques et responsables :
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Supports pédagogiques</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Livres doctrinaux</li>
                                <li>• Manuels cliniques</li>
                                <li>• Revue Le Monde Parallèle</li>
                                <li>• Supports audio</li>
                              </ul>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                              <h4 className="font-bold text-green-800 mb-2">Produits naturels</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Produits naturels certifiés</li>
                                <li>• Remèdes Traditionnels Améliorés (RTA)</li>
                                <li>• Infusions et baumes</li>
                                <li>• Huiles thérapeutiques</li>
                              </ul>
                            </div>
                          </div>
                          
                          <h4 className="font-bold text-gray-800">6.2 Encadrement éthique</h4>
                          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                            <h5 className="font-bold text-amber-800 mb-2">⚠️ Engagement qualité</h5>
                            <ul className="text-amber-700 text-sm space-y-2">
                              <li>• Chaque produit est accompagné d'informations claires et responsables</li>
                              <li>• Aucune promesse magique ou instantanée</li>
                              <li>• Conformité à la Loi N° 2068/PJL/AN de 2024</li>
                              <li>• Contrôles qualité stricts sur tous les RTA</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 7 */}
                    <div id="privacy" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("privacy")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-indigo-600">7</div>
                          <h3 className="text-xl font-bold text-gray-800">Confidentialité et protection des données</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.privacy ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.privacy || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Toutes les informations personnelles et médicales sont protégées conformément aux normes 
                            en vigueur et à la charte éthique du Centre. Nous garantissons la confidentialité totale 
                            de votre parcours.
                          </p>
                          
                          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                            <h5 className="font-bold text-indigo-800 mb-2">Vos droits</h5>
                            <p className="text-indigo-700 mb-3 text-sm">
                              Vous disposez des droits suivants concernant vos données personnelles :
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                              <li>✓ Droit d'accès à vos données</li>
                              <li>✓ Droit de rectification</li>
                              <li>✓ Droit à l'effacement</li>
                              <li>✓ Droit à la confidentialité</li>
                            </ul>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h5 className="font-bold text-blue-800 mb-2">Sécurité des données</h5>
                            <p className="text-blue-700 text-sm">
                              Tous les dossiers spirituels et médicaux sont conservés de manière sécurisée. 
                              Aucune information ne sera partagée avec des tiers sans votre consentement explicite, 
                              sauf obligation légale.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 8 */}
                    <div id="legal" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("legal")}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-cyan-100 p-2 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-cyan-600">8</div>
                          <h3 className="text-xl font-bold text-gray-800">Mentions légales et conformité</h3>
                        </div>
                        <span className="text-cyan-600 font-bold text-xl group-hover:scale-110 transition-transform">
                          {openSections.legal ? "−" : "+"}
                        </span>
                      </button>
                      
                      {(openSections.legal || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">8.1 Statut juridique</h4>
                          <p>
                            Le Centre MARIE REINE DE LA MISÉRICORDE D'ABILI est géré par l'Association Mariale d'Abili (ASMAB), 
                            enregistrée et reconnue conformément aux réglementations camerounaises.
                          </p>
                          
                          <h4 className="font-bold text-gray-800">8.2 Conformité légale</h4>
                          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h5 className="font-bold text-green-800 mb-2">✅ Loi sur la médecine traditionnelle</h5>
                            <p className="text-green-700">
                              Nos pratiques respectent la <strong>Loi N° 2068/PJL/AN de décembre 2024</strong> qui encadre 
                              l'exercice et l'organisation de la médecine traditionnelle au Cameroun. Notre statut juridique 
                              est conforme à toutes les exigences légales.
                            </p>
                          </div>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-800 mb-2">Modifications</h4>
                            <p className="text-gray-700 text-sm">
                              Le Centre se réserve le droit de modifier la présente charte pour améliorer ses services 
                              ou se conformer aux évolutions légales. Les utilisateurs seront informés de toute modification 
                              significative.
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div>
                              <p className="font-medium text-blue-800">Questions ou préoccupations ?</p>
                              <p className="text-sm text-blue-700">
                                Contactez-nous : 
                                <a href="tel:+237693215431" className="font-semibold ml-1">(+237) 693 21 54 31</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="p-6 md:p-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Conclusion</h3>
                    <p className="text-gray-700 mb-6">
                      En utilisant les services du Centre MARIE REINE DE LA MISÉRICORDE D'ABILI, vous acceptez 
                      les présentes conditions et vous vous engagez dans un parcours de guérison spirituelle fondé sur 
                      la foi, la dignité humaine et l'accompagnement bienveillant.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-1">Juridiction</div>
                        <div className="text-sm text-gray-600">Tribunaux du Cameroun</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-1">Loi applicable</div>
                        <div className="text-sm text-gray-600">Loi N° 2068/PJL/AN 2024</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-1">Fondation</div>
                        <div className="text-sm text-gray-600">12 mai 1979</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accept Statement */}
                <div ref={ctaRef} className={`mt-8 text-center transition-all duration-1000 ${ctaInView ? 'animate-scaleIn' : 'opacity-0'}`}>
                  <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                    <div className="text-left">
                      <p className="font-bold text-gray-800">
                        « Vous n'êtes pas seul face à ce que vous vivez. »
                      </p>
                      <p className="text-sm text-gray-600">
                        En poursuivant votre navigation, vous acceptez notre approche holistique et notre charte éthique.
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

export default Conditions;