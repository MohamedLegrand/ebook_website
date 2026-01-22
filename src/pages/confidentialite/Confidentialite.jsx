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
  ChevronRight, // AJOUT IMPORT MANQUANT
  CheckCircle, 
  AlertTriangle,
  FileText // AJOUT IMPORT MANQUANT
} from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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
    { id: "droits", title: "5. Vos droits RGPD", icon: <CheckCircle className="w-5 h-5" /> },
    { id: "securite", title: "6. Sécurité", icon: <Lock className="w-5 h-5" /> },
    { id: "conservation", title: "7. Conservation", icon: <Calendar className="w-5 h-5" /> },
    { id: "cookies", title: "8. Cookies", icon: <Download className="w-5 h-5" /> }
  ];

  const vosDroits = [
    {
      droit: "Droit d'accès",
      description: "Accéder à vos données personnelles",
      delai: "1 mois maximum"
    },
    {
      droit: "Droit de rectification",
      description: "Corriger vos données inexactes",
      delai: "Sans délai"
    },
    {
      droit: "Droit à l'effacement",
      description: "Supprimer vos données",
      delai: "1 mois maximum"
    },
    {
      droit: "Droit à la portabilité",
      description: "Récupérer vos données",
      delai: "1 mois maximum"
    },
    {
      droit: "Droit d'opposition",
      description: "S'opposer au traitement",
      delai: "Sans délai"
    },
    {
      droit: "Droit à la limitation",
      description: "Limiter le traitement",
      delai: "Sans délai"
    }
  ];

  const cookiesCategories = [
    {
      type: "Cookies essentiels",
      description: "Nécessaires au fonctionnement du site",
      exemple: "Authentification, panier d'achat",
      obligatoire: true
    },
    {
      type: "Cookies de performance",
      description: "Analyser l'utilisation du site",
      exemple: "Google Analytics",
      obligatoire: false
    },
    {
      type: "Cookies de fonctionnalité",
      description: "Personnaliser votre expérience",
      exemple: "Langue, préférences",
      obligatoire: false
    },
    {
      type: "Cookies publicitaires",
      description: "Publicités ciblées",
      exemple: "Réseaux sociaux",
      obligatoire: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Shield className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Politique de Confidentialité
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto">
                Dernière mise à jour : 15 janvier 2024 • Conforme RGPD
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" />
                  Entrée en vigueur : 15/01/2024
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  RGPD conforme
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <Lock className="w-4 h-4" />
                  Données chiffrées
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
                <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Transparence et protection</h3>
                  <p className="text-gray-700">
                    Nous accordons une importance capitale à la protection de vos données personnelles. 
                    Cette politique explique comment nous collectons, utilisons et protégeons vos informations. 
                    Pour toute question, contactez notre Délégué à la Protection des Données (DPO) à 
                    <a href="mailto:dpo@ebookpro.fr" className="text-blue-600 font-semibold ml-1">dpo@ebookpro.fr</a>.
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
                        <span className="font-medium">{item.title}</span>
                      </a>
                    ))}
                  </nav>

                  {/* Contact DPO */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Contact DPO</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">dpo@ebookpro.fr</p>
                          <p className="text-xs text-gray-500">Réponse sous 48h</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-gray-700">eBookPro SAS</p>
                          <p className="text-xs text-gray-500">123 Avenue du Livre, 75001 Paris</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/conditions"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md"
                  >
                    <FileText className="w-5 h-5" />
                    Conditions d'utilisation
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
                      La présente Politique de Confidentialité s'applique à l'ensemble des services proposés par 
                      eBookPro SAS. Elle décrit comment nous collectons, utilisons, partageons et protégeons les 
                      informations personnelles que vous nous communiquez, conformément au Règlement Général sur 
                      la Protection des Données (RGPD) et à la loi française « Informatique et Libertés ».
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
                            eBookPro SAS, société par actions simplifiée au capital de 500 000 €, immatriculée au 
                            RCS de Paris sous le numéro 123 456 789, dont le siège social est situé au 
                            123 Avenue du Livre, 75001 Paris, est responsable du traitement de vos données 
                            personnelles.
                          </p>
                          
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-2">Notre engagement</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                <span>Transparence totale sur l'utilisation de vos données</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                <span>Minimisation de la collecte des données</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                <span>Sécurité maximale des informations</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                <span>Respect de vos droits RGPD</span>
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
                            Nous collectons différentes catégories de données personnelles pour fournir et améliorer 
                            nos services.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Données d'identification</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Nom et prénom</li>
                                <li>• Adresse email</li>
                                <li>• Numéro de téléphone</li>
                                <li>• Adresse postale (facturation)</li>
                              </ul>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                              <h4 className="font-bold text-purple-800 mb-2">Données transactionnelles</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Historique d'achats</li>
                                <li>• Données de paiement</li>
                                <li>• Préférences de lecture</li>
                                <li>• Liste de souhaits</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-2">Données techniques</h4>
                            <p className="text-sm text-gray-600">
                              Adresse IP, type de navigateur, appareil utilisé, système d'exploitation, 
                              données de connexion (logs), et informations sur votre interaction avec notre site.
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
                            Vos données personnelles sont traitées pour les finalités suivantes :
                          </p>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                              <div className="bg-blue-100 p-2 rounded">
                                <span className="font-bold text-blue-700">1</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-blue-800">Exécution du contrat</h4>
                                <p className="text-sm text-blue-700">
                                  Gérer votre compte, traiter vos commandes, fournir les services achetés
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                              <div className="bg-green-100 p-2 rounded">
                                <span className="font-bold text-green-700">2</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-green-800">Intérêt légitime</h4>
                                <p className="text-sm text-green-700">
                                  Améliorer nos services, prévenir la fraude, sécurité du site
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                              <div className="bg-purple-100 p-2 rounded">
                                <span className="font-bold text-purple-700">3</span>
                              </div>
                              <div>
                                <h4 className="font-bold text-purple-800">Consentement</h4>
                                <p className="text-sm text-purple-700">
                                  Envoi de newsletters, cookies non essentiels, publicité ciblée
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
                            Vos données peuvent être partagées avec des tiers uniquement dans les cas suivants :
                          </p>
                          
                          <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-gray-800 mb-2">Prestataires de services</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <span className="font-semibold">• Processeurs de paiement :</span>
                                  <span>Stripe, PayPal (données de transaction)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="font-semibold">• Hébergeur :</span>
                                  <span>Amazon AWS, OVH (données stockées en Europe)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="font-semibold">• Service d'email :</span>
                                  <span>SendGrid (communications)</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                              <h5 className="font-bold text-red-800 mb-2">⚠️ Exceptions strictes</h5>
                              <p className="text-red-700 text-sm">
                                Nous ne vendons jamais vos données personnelles à des tiers. 
                                Le partage n'intervient qu'en cas d'obligation légale ou avec votre consentement explicite.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Transferts internationaux</h4>
                              <p className="text-sm text-blue-700">
                                Les données sont stockées exclusivement dans l'Union Européenne. 
                                En cas de transfert hors UE, nous garantissons un niveau de protection adéquat 
                                via des clauses contractuelles types de la Commission européenne.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 5 - Vos droits RGPD */}
                    <div id="droits" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("droits")}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-100 p-2 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-emerald-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">5. Vos droits RGPD</h3>
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
                            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
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
                              Pour exercer vos droits, contactez notre Délégué à la Protection des Données :
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                              <a
                                href="mailto:dpo@ebookpro.fr"
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
                            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                            protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                              <h4 className="font-bold text-indigo-800 mb-2">Mesures techniques</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <Lock className="w-4 h-4 text-indigo-500" />
                                  Chiffrement SSL/TLS 256-bit
                                </li>
                                <li className="flex items-center gap-2">
                                  <Lock className="w-4 h-4 text-indigo-500" />
                                  Pare-feu de nouvelle génération
                                </li>
                                <li className="flex items-center gap-2">
                                  <Lock className="w-4 h-4 text-indigo-500" />
                                  Surveillance 24/7 des systèmes
                                </li>
                                <li className="flex items-center gap-2">
                                  <Lock className="w-4 h-4 text-indigo-500" />
                                  Sauvegardes quotidiennes
                                </li>
                              </ul>
                            </div>
                            
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Mesures organisationnelles</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  Accès restreint aux données
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  Formation RGPD obligatoire
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  Audit de sécurité annuel
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  Politique de mots de passe stricts
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-800 mb-2">Notification de violation</h4>
                            <p className="text-gray-700 text-sm">
                              En cas de violation de données personnelles, nous nous engageons à notifier 
                              la CNIL dans les 72 heures et les personnes concernées dans les plus brefs délais, 
                              conformément aux obligations légales.
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
                            Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités 
                            pour lesquelles elles ont été collectées, conformément aux obligations légales.
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
                                  <td className="border border-gray-200 p-3">Données de compte actif</td>
                                  <td className="border border-gray-200 p-3">3 ans après dernière activité</td>
                                  <td className="border border-gray-200 p-3">Intérêt légitime</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                  <td className="border border-gray-200 p-3">Données de facturation</td>
                                  <td className="border border-gray-200 p-3">10 ans</td>
                                  <td className="border border-gray-200 p-3">Obligation légale</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                  <td className="border border-gray-200 p-3">Données de navigation</td>
                                  <td className="border border-gray-200 p-3">13 mois</td>
                                  <td className="border border-gray-200 p-3">Consentement</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                  <td className="border border-gray-200 p-3">Liste de souhaits</td>
                                  <td className="border border-gray-200 p-3">3 ans après dernière activité</td>
                                  <td className="border border-gray-200 p-3">Intérêt légitime</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                            <h5 className="font-bold text-amber-800 mb-2">Suppression des données</h5>
                            <p className="text-amber-700">
                              À l'expiration des délais de conservation, vos données sont supprimées de manière 
                              sécurisée ou anonymisées à des fins statistiques.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 8 - Cookies */}
                    <div id="cookies" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("cookies")}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-orange-100 p-2 rounded-lg">
                            <Download className="w-6 h-6 text-orange-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">8. Cookies et traceurs</h3>
                        </div>
                        {openSections.cookies ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.cookies || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            Notre site utilise des cookies pour améliorer votre expérience de navigation.
                          </p>
                          
                          <div className="space-y-4">
                            {cookiesCategories.map((cookie, index) => (
                              <div key={index} className={`p-4 rounded-lg border ${cookie.obligatoire ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-bold text-gray-800">{cookie.type}</h4>
                                  {cookie.obligatoire ? (
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Obligatoire</span>
                                  ) : (
                                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Optionnel</span>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mb-1">{cookie.description}</p>
                                <p className="text-xs text-gray-500">Exemple : {cookie.exemple}</p>
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-2">Gestion des cookies</h4>
                            <p className="text-blue-700 mb-3">
                              Vous pouvez gérer vos préférences de cookies à tout moment :
                            </p>
                            <div className="space-y-2">
                              <button className="w-full text-left p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-blue-700">Modifier mes préférences de cookies</span>
                                  <ChevronRight className="w-5 h-5 text-blue-500" />
                                </div>
                              </button>
                              <button className="w-full text-left p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-gray-700">Refuser tous les cookies non essentiels</span>
                                  <Trash2 className="w-5 h-5 text-gray-500" />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="p-6 md:p-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Mises à jour de la politique</h3>
                    <p className="text-gray-700 mb-6">
                      Cette politique de confidentialité peut être mise à jour périodiquement. 
                      Nous vous informerons de tout changement important par email ou via une notification 
                      sur notre plateforme. La version actuelle est toujours accessible sur cette page.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800">Délégué à la Protection des Données</p>
                        <p className="text-sm text-gray-600">Marie Dupont • dpo@ebookpro.fr</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">Autorité de contrôle</p>
                        <p className="text-sm text-gray-600">
                          CNIL - 3 Place de Fontenoy, 75007 Paris<br />
                          <a href="https://www.cnil.fr" className="text-blue-600 hover:underline">www.cnil.fr</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accept Button */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <Shield className="w-8 h-8 text-green-600" />
                    <div className="text-left">
                      <p className="font-bold text-gray-800">
                        En poursuivant votre navigation, vous acceptez notre politique de confidentialité.
                      </p>
                      <p className="text-sm text-gray-600">
                        Pour toute question, contactez notre DPO à dpo@ebookpro.fr
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

export default Confidentialite;