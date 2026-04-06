import React, { useState } from "react";
import { 
  Shield, 
  Lock, 
  Eye, 
  Trash2, 
  Download, 
  Mail, 
  Calendar, 
  Building, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight,
  CheckCircle, 
  AlertTriangle,
  FileText,
  Heart,
  Cross,
  Users
} from "lucide-react";

function Confidentialite() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const tableOfContents = [
    { id: "introduction", title: "1. Introduction", icon: <Shield className="w-5 h-5" /> },
    { id: "collecte", title: "2. Données collectées", icon: <Eye className="w-5 h-5" /> },
    { id: "utilisation", title: "3. Utilisation des données", icon: <Building className="w-5 h-5" /> },
    { id: "partage", title: "4. Partage des données", icon: <Mail className="w-5 h-5" /> },
    { id: "droits", title: "5. Vos droits", icon: <CheckCircle className="w-5 h-5" /> },
    { id: "securite", title: "6. Sécurité", icon: <Lock className="w-5 h-5" /> },
    { id: "conservation", title: "7. Conservation", icon: <Calendar className="w-5 h-5" /> },
    { id: "engagement", title: "8. Notre engagement", icon: <Heart className="w-5 h-5" /> }
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
      description: "Tous les thérapeutes et collaborateurs sont liés par le secret professionnel",
      icon: "🤐"
    },
    {
      principe: "Absence de jugement",
      description: "Nous accueillons chaque parole sans préjugé ni condamnation",
      icon: "❤️"
    },
    {
      principe: "Consentement éclairé",
      description: "Vous êtes informé et donnez votre consentement pour chaque traitement",
      icon: "✍️"
    },
    {
      principe: "Minimisation des données",
      description: "Nous collectons uniquement les données nécessaires à votre accompagnement",
      icon: "🎯"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Shield className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Charte de Confidentialité
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto">
                Centre MARIE REINE DE LA MISÉRICORDE D'ABILI • Association Mariale d'Abili (ASMAB)
              </p>
              <p className="text-base text-blue-200 mt-2">
                Dernière mise à jour : 15 janvier 2024 • Conforme à la Loi Camerounaise
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" />
                  Fondé en 1979
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  Récépissé N°030/RDA/J12/SAAJP
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <Lock className="w-4 h-4" />
                  Confidentialité absolue
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Important Notice */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
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
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
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

                  {/* Contact Responsable */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Contact responsable</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">contact@mths-abili.org</p>
                          <p className="text-xs text-gray-500">Réponse sous 48h</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">Centre MTHS Abili</p>
                          <p className="text-xs text-gray-500">27 km de Yaoundé, Cameroun</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">Association Mariale d'Abili</p>
                          <p className="text-xs text-gray-500">Récépissé N°030/RDA/J12/SAAJP</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/conditions"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md"
                  >
                    <FileText className="w-5 h-5" />
                    Charte et Conditions
                  </a>
                </div>
              </div>

              {/* Main Content - Right Column */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Shield className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">1. Introduction</h3>
                        </div>
                        {openSections.introduction ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                              <li className="flex items-start gap-2">
                                <Heart className="w-4 h-4 text-blue-500 mt-0.5" />
                                <span>Confidentialité absolue de votre parcours spirituel</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Cross className="w-4 h-4 text-blue-500 mt-0.5" />
                                <span>Respect de la dignité humaine et de votre liberté</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Shield className="w-4 h-4 text-blue-500 mt-0.5" />
                                <span>Sécurité maximale de vos informations sensibles</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Users className="w-4 h-4 text-blue-500 mt-0.5" />
                                <span>Absence totale de jugement et de discrimination</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 2 */}
                    <div id="collecte" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("collecte")}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <Eye className="w-6 h-6 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">2. Données collectées</h3>
                        </div>
                        {openSections.collecte ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg">
                            <Building className="w-6 h-6 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">3. Utilisation des données</h3>
                        </div>
                        {openSections.utilisation ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.utilisation || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Vos données personnelles sont traitées exclusivement pour les finalités suivantes :
                          </p>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                              <div className="bg-blue-100 p-2 rounded">
                                <span className="font-bold text-blue-700">1</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-blue-800">Accompagnement spirituel</h4>
                                <p className="text-sm text-blue-700">
                                  Établir un diagnostic spirituel, proposer un parcours de guérison adapté, 
                                  suivre votre progression
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                              <div className="bg-green-100 p-2 rounded">
                                <span className="font-bold text-green-700">2</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-green-800">Sécurité et prévention</h4>
                                <p className="text-sm text-green-700">
                                  Prévenir les risques, assurer la sécurité des personnes, respecter les 
                                  obligations légales
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                              <div className="bg-purple-100 p-2 rounded">
                                <span className="font-bold text-purple-700">3</span>
                              </div>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-amber-100 p-2 rounded-lg">
                            <Mail className="w-6 h-6 text-amber-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">4. Partage des données</h3>
                        </div>
                        {openSections.partage ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                                <li className="flex items-center gap-2">
                                  <span className="font-semibold">• Équipe thérapeutique :</span>
                                  <span>Thérapeutes et accompagnants du Centre (secret professionnel)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="font-semibold">• Référents spirituels :</span>
                                  <span>Prêtres accompagnateurs (avec votre accord)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="font-semibold">• Médecins partenaires :</span>
                                  <span>Dans le cadre de la complémentarité médecine moderne/MTHS</span>
                                </li>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-100 p-2 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-emerald-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">5. Vos droits</h3>
                        </div>
                        {openSections.droits ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.droits || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Conformément à la loi camerounaise et à notre charte éthique, vous disposez des 
                            droits suivants concernant vos données personnelles :
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {vosDroits.map((droit, index) => (
                              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                  <CheckCircle className="w-5 h-5 text-emerald-500" />
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
                                <Mail className="w-4 h-4" />
                                Envoyer un email
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-indigo-100 p-2 rounded-lg">
                            <Lock className="w-6 h-6 text-indigo-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">6. Sécurité des données</h3>
                        </div>
                        {openSections.securite ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                                <li className="flex items-center gap-2">
                                  <Lock className="w-4 h-4 text-indigo-500" />
                                  Archives sécurisées sous clé
                                </li>
                                <li className="flex items-center gap-2">
                                  <Lock className="w-4 h-4 text-indigo-500" />
                                  Accès contrôlé aux locaux
                                </li>
                                <li className="flex items-center gap-2">
                                  <Lock className="w-4 h-4 text-indigo-500" />
                                  Destruction sécurisée des documents
                                </li>
                                <li className="flex items-center gap-2">
                                  <Lock className="w-4 h-4 text-indigo-500" />
                                  Pas de discussion hors cadre professionnel
                                </li>
                              </ul>
                            </div>
                            
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Mesures organisationnelles</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  Formation au secret professionnel
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  Accès restreint aux dossiers
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  Procédures de sécurité strictes
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  Engagement écrit de confidentialité
                                </li>
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-cyan-100 p-2 rounded-lg">
                            <Calendar className="w-6 h-6 text-cyan-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">7. Conservation des données</h3>
                        </div>
                        {openSections.conservation ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-pink-100 p-2 rounded-lg">
                            <Heart className="w-6 h-6 text-pink-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">8. Notre engagement éthique</h3>
                        </div>
                        {openSections.engagement ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
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
                                  <span className="text-2xl">{principe.icon}</span>
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
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Secret professionnel absolu jusqu'à la mort</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Absence de jugement et respect inconditionnel</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Protection maximale des données confiées</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Non-utilisation des données à des fins personnelles</span>
                              </li>
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
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <Shield className="w-8 h-8 text-green-600" />
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

export default Confidentialite;