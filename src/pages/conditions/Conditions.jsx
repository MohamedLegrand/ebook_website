import React, { useState } from "react";
import { CheckCircle, AlertTriangle, FileText, Shield, User, Heart, Globe, Lock, Calendar, Mail, ChevronDown, ChevronUp, Cross, Book } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Conditions() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const tableOfContents = [
    { id: "general", title: "1. Présentation", icon: <FileText className="w-5 h-5" /> },
    { id: "mission", title: "2. Mission et objectifs", icon: <Cross className="w-5 h-5" /> },
    { id: "services", title: "3. Services proposés", icon: <Heart className="w-5 h-5" /> },
    { id: "ethical", title: "4. Charte éthique", icon: <Shield className="w-5 h-5" /> },
    { id: "accompaniment", title: "5. Accompagnement", icon: <User className="w-5 h-5" /> },
    { id: "boutique", title: "6. Boutique du Centre", icon: <Book className="w-5 h-5" /> },
    { id: "privacy", title: "7. Confidentialité", icon: <Lock className="w-5 h-5" /> },
    { id: "legal", title: "8. Mentions légales", icon: <Globe className="w-5 h-5" /> }
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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <FileText className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Charte et Conditions d'Utilisation
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-2">
                Centre MARIE REINE DE LA MISÉRICORDE D'ABILI
              </p>
              <p className="text-base text-blue-200">
                Association Mariale d'Abili (ASMAB)
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" />
                  Fondé en 1979
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  Conforme Loi 2024
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                  <Cross className="w-4 h-4" />
                  Médecine révélée
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Important Notice */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
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
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Sommaire
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all group"
                      >
                        <div className="text-gray-400 group-hover:text-blue-500">
                          {item.icon}
                        </div>
                        <span className="font-medium text-sm">{item.title}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Principes clés</h4>
                    <div className="space-y-3">
                      {importantPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
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
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md"
                  >
                    <Heart className="w-5 h-5" />
                    Nous contacter
                  </a>
                </div>
              </div>

              {/* Main Content - Right Column */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <FileText className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">1. Présentation du Centre</h3>
                        </div>
                        {openSections.general ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                                <span className="font-bold text-blue-600">Nom :</span>
                                <span>Association Mariale d'Abili (ASMAB)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">Récépissé :</span>
                                <span>N°030/RDA/J12/SAAJP du 14 Décembre 2010</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">Localisation :</span>
                                <span>Village Abili, Préfecture du Ngoumou, 27 km de Yaoundé</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">Contact :</span>
                                <span>(+237) 693 21 54 31 / (+237) 677 31 44 12</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">BP :</span>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <Cross className="w-6 h-6 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">2. Mission et objectifs</h3>
                        </div>
                        {openSections.mission ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.mission || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">2.1 Mission divine</h4>
                          <p>
                            Suite à l'apparition de la Sainte Vierge Marie le 12 mai 1979, notre mission est de :
                          </p>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Apporter la guérison, la conversion et la délivrance aux âmes enchaînées</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Révéler la Médecine Traditionnelle des Handicapés Spirituels</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Ramener de l'obscurité à la lumière et du pouvoir de Satan à Dieu</span>
                            </li>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <Heart className="w-6 h-6 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">3. Services proposés</h3>
                        </div>
                        {openSections.services ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                                <li className="flex items-start gap-2">
                                  <span className="font-bold text-blue-600">1.</span>
                                  <span><strong>Diagnostic spirituel et psychosomatique</strong> - Discernement de l'origine du mal</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="font-bold text-blue-600">2.</span>
                                  <span><strong>Naturopathie et remèdes traditionnels améliorés</strong> - Pharmacopée africaine purifiée</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="font-bold text-blue-600">3.</span>
                                  <span><strong>Rituels de purification (rite SO'O inculturé)</strong> - Chemin de purification intérieure</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="font-bold text-blue-600">4.</span>
                                  <span><strong>Délivrance et désenvoûtement</strong> - Libération par l'autorité du Christ</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="font-bold text-blue-600">5.</span>
                                  <span><strong>Rééducation morale et réinsertion sociale</strong> - Accompagnement durable</span>
                                </li>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-amber-100 p-2 rounded-lg">
                            <Shield className="w-6 h-6 text-amber-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">4. Charte éthique</h3>
                        </div>
                        {openSections.ethical ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                              <p className="text-sm text-blue-700">
                                Chaque patient est accueilli comme un enfant de Dieu, avec respect et bienveillance
                              </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                              <h5 className="font-bold text-green-800 mb-1">✓ Confidentialité</h5>
                              <p className="text-sm text-green-700">
                                Tout ce qui est partagé reste strictement confidentiel
                              </p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                              <h5 className="font-bold text-purple-800 mb-1">✓ Absence de jugement</h5>
                              <p className="text-sm text-purple-700">
                                Nous voyons une personne qui souffre, pas un problème à condamner
                              </p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                              <h5 className="font-bold text-orange-800 mb-1">✓ Transparence</h5>
                              <p className="text-sm text-orange-700">
                                Aucune promesse magique ou miraculeuse, seulement la vérité
                              </p>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-red-100 p-2 rounded-lg">
                            <User className="w-6 h-6 text-red-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">5. Conditions d'accompagnement</h3>
                        </div>
                        {openSections.accompaniment ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.accompaniment || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">5.1 Modalités d'accès</h4>
                          <p>
                            L'accompagnement au Centre nécessite :
                          </p>
                          <ul className="space-y-2 ml-4">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Une demande d'orientation via le formulaire de contact</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Un rendez-vous préalable avec l'équipe du Centre</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>L'acceptation de la charte éthique et du parcours proposé</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>L'engagement dans un processus progressif de guérison</span>
                            </li>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-orange-100 p-2 rounded-lg">
                            <Book className="w-6 h-6 text-orange-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">6. Boutique du Centre</h3>
                        </div>
                        {openSections.boutique ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 p-2 rounded-lg">
                            <Lock className="w-6 h-6 text-indigo-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">7. Confidentialité et protection des données</h3>
                        </div>
                        {openSections.privacy ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-indigo-500" />
                                Droit d'accès à vos données
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-indigo-500" />
                                Droit de rectification
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-indigo-500" />
                                Droit à l'effacement
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-indigo-500" />
                                Droit à la confidentialité
                              </li>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-cyan-100 p-2 rounded-lg">
                            <Globe className="w-6 h-6 text-cyan-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">8. Mentions légales et conformité</h3>
                        </div>
                        {openSections.legal ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                            <Mail className="w-5 h-5 text-blue-600" />
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
                      les présentes conditions et vous engagez dans un parcours de guérison spirituelle fondé sur 
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
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                    <Heart className="w-8 h-8 text-blue-600" />
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

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Conditions;