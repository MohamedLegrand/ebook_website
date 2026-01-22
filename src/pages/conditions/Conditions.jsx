import React, { useState } from "react";
import { CheckCircle, AlertTriangle, FileText, Shield, User, CreditCard, Globe, Lock, Calendar, Mail, ChevronDown, ChevronUp } from "lucide-react";
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
    { id: "general", title: "1. Généralités", icon: <FileText className="w-5 h-5" /> },
    { id: "account", title: "2. Compte utilisateur", icon: <User className="w-5 h-5" /> },
    { id: "services", title: "3. Services proposés", icon: <Globe className="w-5 h-5" /> },
    { id: "pricing", title: "4. Prix et paiement", icon: <CreditCard className="w-5 h-5" /> },
    { id: "intellectual", title: "5. Propriété intellectuelle", icon: <Shield className="w-5 h-5" /> },
    { id: "liability", title: "6. Responsabilités", icon: <AlertTriangle className="w-5 h-5" /> },
    { id: "privacy", title: "7. Données personnelles", icon: <Lock className="w-5 h-5" /> },
    { id: "modification", title: "8. Modifications", icon: <Calendar className="w-5 h-5" /> }
  ];

  const importantPoints = [
    {
      title: "Acceptation obligatoire",
      description: "L'utilisation de notre plateforme implique l'acceptation pleine et entière des présentes conditions."
    },
    {
      title: "Droit d'auteur",
      description: "Tous les contenus sont protégés par le droit d'auteur et ne peuvent être reproduits sans autorisation."
    },
    {
      title: "Garantie remboursement",
      description: "Satisfait ou remboursé sous 14 jours pour tous les achats numériques."
    },
    {
      title: "RGPD conforme",
      description: "Nous respectons scrupuleusement le Règlement Général sur la Protection des Données."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <FileText className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Conditions Générales d'Utilisation
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
                Dernière mise à jour : 15 janvier 2024 • Version 3.2
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" />
                  Entrée en vigueur : 15/01/2024
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  RGPD conforme
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Avertissement important</h3>
                  <p className="text-gray-700">
                    En utilisant la plateforme eBookPro, vous acceptez les présentes conditions générales d'utilisation. 
                    Nous vous recommandons de les lire attentivement. Pour toute question, contactez notre service juridique à 
                    <a href="mailto:legal@ebookpro.fr" className="text-blue-600 font-semibold ml-1">legal@ebookpro.fr</a>.
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
                        <span className="font-medium">{item.title}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Points clés</h4>
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
                    href="/privacy"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md"
                  >
                    <Shield className="w-5 h-5" />
                    Politique de confidentialité
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
                      Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'utilisation de la plateforme 
                      eBookPro (ci-après « la Plateforme »), éditée par eBookPro SAS, société par actions simplifiée au capital de 
                      500 000 €, immatriculée au RCS de Paris sous le numéro 123 456 789, dont le siège social est situé au 
                      123 Avenue du Livre, 75001 Paris.
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
                          <h3 className="text-xl font-bold text-gray-800">1. Généralités</h3>
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
                            La Plateforme eBookPro est un service de distribution numérique de livres électroniques et audio 
                            accessible via le site web www.ebookpro.fr et ses applications mobiles.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-2">Définitions</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">Utilisateur :</span>
                                <span>Toute personne physique ou morale utilisant la Plateforme.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">Contenu :</span>
                                <span>L'ensemble des livres, textes, images, vidéos et autres éléments disponibles sur la Plateforme.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600">Compte :</span>
                                <span>Espace personnel de l'Utilisateur permettant l'accès aux Services.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 2 */}
                    <div id="account" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("account")}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <User className="w-6 h-6 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">2. Compte utilisateur</h3>
                        </div>
                        {openSections.account ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.account || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">2.1 Création du compte</h4>
                          <p>
                            Pour accéder aux Services, l'Utilisateur doit créer un compte en fournissant des informations 
                            exactes, complètes et à jour. L'Utilisateur s'engage à maintenir ces informations à jour.
                          </p>
                          
                          <h4 className="font-bold text-gray-800">2.2 Confidentialité</h4>
                          <p>
                            L'Utilisateur est responsable de la confidentialité de ses identifiants et s'engage à 
                            signaler toute utilisation non autorisée de son compte.
                          </p>
                          
                          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                            <h5 className="font-bold text-amber-800 mb-2">⚠️ Important</h5>
                            <p className="text-amber-700 text-sm">
                              Tout compte inactif pendant 24 mois consécutifs pourra être suspendu ou supprimé, 
                              conformément à notre politique de conservation des données.
                            </p>
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
                            <Globe className="w-6 h-6 text-green-600" />
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
                            eBookPro propose les services suivants : vente de livres électroniques, abonnements premium, 
                            livres audio, et services associés.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <h4 className="font-bold text-blue-800 mb-2">Services inclus</h4>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  Accès à la bibliothèque numérique
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  Synchronisation multi-appareils
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  Mises à jour gratuites
                                </li>
                              </ul>
                            </div>
                            
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                              <h4 className="font-bold text-purple-800 mb-2">Services premium</h4>
                              <ul className="space-y-1 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-purple-500" />
                                  Livres audio illimités
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-purple-500" />
                                  Accès anticipé aux nouveautés
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-purple-500" />
                                  Support prioritaire
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 4 */}
                    <div id="pricing" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("pricing")}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-amber-100 p-2 rounded-lg">
                            <CreditCard className="w-6 h-6 text-amber-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">4. Prix et paiement</h3>
                        </div>
                        {openSections.pricing ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.pricing || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">4.1 Prix</h4>
                          <p>
                            Les prix sont indiqués en euros toutes taxes comprises (TVA). eBookPro se réserve le droit 
                            de modifier ses prix à tout moment, sous réserve d'information préalable des Utilisateurs.
                          </p>
                          
                          <h4 className="font-bold text-gray-800">4.2 Paiement</h4>
                          <p>
                            Le paiement est exigible immédiatement à la commande. Les moyens de paiement acceptés sont 
                            précisés lors du processus de commande.
                          </p>
                          
                          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h5 className="font-bold text-green-800 mb-2">✅ Garantie satisfait ou remboursé</h5>
                            <p className="text-green-700">
                              Tout achat peut être remboursé dans un délai de 14 jours à compter de la date d'achat, 
                              sans avoir à justifier de motifs, conformément au droit de rétractation.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 5 */}
                    <div id="intellectual" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("intellectual")}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-red-100 p-2 rounded-lg">
                            <Shield className="w-6 h-6 text-red-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">5. Propriété intellectuelle</h3>
                        </div>
                        {openSections.intellectual ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.intellectual || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            L'ensemble des éléments de la Plateforme (textes, images, logos, logiciels, etc.) sont 
                            protégés par les lois françaises et internationales sur la propriété intellectuelle.
                          </p>
                          
                          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                            <h5 className="font-bold text-red-800 mb-2">🚫 Interdiction formelle</h5>
                            <p className="text-red-700">
                              Toute reproduction, représentation, modification, adaptation ou exploitation, totale ou 
                              partielle, des contenus de la Plateforme, par quelque procédé que ce soit, sans 
                              autorisation préalable écrite de eBookPro, est strictement interdite.
                            </p>
                          </div>
                          
                          <h4 className="font-bold text-gray-800">Licence d'utilisation</h4>
                          <p>
                            L'achat d'un livre numérique confère à l'Utilisateur une licence personnelle, non exclusive 
                            et non transférable pour l'utilisation du contenu à des fins strictement personnelles.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Section 6 */}
                    <div id="liability" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("liability")}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-orange-100 p-2 rounded-lg">
                            <AlertTriangle className="w-6 h-6 text-orange-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">6. Responsabilités</h3>
                        </div>
                        {openSections.liability ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.liability || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <h4 className="font-bold text-gray-800">6.1 Responsabilité d'eBookPro</h4>
                          <p>
                            eBookPro s'engage à fournir les Services avec diligence et selon les règles de l'art. 
                            Cependant, eBookPro ne pourra être tenu responsable des dommages indirects.
                          </p>
                          
                          <h4 className="font-bold text-gray-800">6.2 Responsabilité de l'Utilisateur</h4>
                          <p>
                            L'Utilisateur est responsable de l'utilisation qu'il fait des Services et s'engage à ne pas 
                            porter atteinte au bon fonctionnement de la Plateforme.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <h5 className="font-bold text-gray-700 mb-2">Force majeure</h5>
                              <p className="text-sm text-gray-600">
                                eBookPro ne pourra être tenu pour responsable en cas de force majeure ou de faits indépendants de sa volonté.
                              </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <h5 className="font-bold text-gray-700 mb-2">Limitation</h5>
                              <p className="text-sm text-gray-600">
                                La responsabilité d'eBookPro est limitée au montant payé par l'Utilisateur pour le Service concerné.
                              </p>
                            </div>
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
                          <h3 className="text-xl font-bold text-gray-800">7. Données personnelles</h3>
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
                            Les données personnelles des Utilisateurs sont traitées conformément à notre Politique de 
                            Confidentialité, accessible à tout moment sur la Plateforme et conforme au Règlement Général 
                            sur la Protection des Données (RGPD).
                          </p>
                          
                          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                            <h5 className="font-bold text-indigo-800 mb-2">Vos droits</h5>
                            <p className="text-indigo-700 mb-3">
                              Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez des droits suivants :
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-indigo-500" />
                                Droit d'accès
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
                                Droit à la portabilité
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 8 */}
                    <div id="modification" className="p-6 md:p-8">
                      <button
                        onClick={() => toggleSection("modification")}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-cyan-100 p-2 rounded-lg">
                            <Calendar className="w-6 h-6 text-cyan-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">8. Modifications</h3>
                        </div>
                        {openSections.modification ? (
                          <ChevronUp className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </button>
                      
                      {(openSections.modification || window.innerWidth > 768) && (
                        <div className="mt-6 space-y-4 text-gray-700 animate-fadeIn">
                          <p>
                            eBookPro se réserve le droit de modifier à tout moment les présentes CGU. Les modifications 
                            entreront en vigueur dès leur publication sur la Plateforme.
                          </p>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-800 mb-2">Notification des modifications</h4>
                            <p className="text-gray-700">
                              Les Utilisateurs seront informés des modifications importantes par email ou par une 
                              notification sur la Plateforme au moins 30 jours avant leur entrée en vigueur.
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-blue-800">Questions juridiques ?</p>
                              <p className="text-sm text-blue-700">
                                Contactez notre service juridique à 
                                <a href="mailto:legal@ebookpro.fr" className="font-semibold ml-1">legal@ebookpro.fr</a>
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
                      Les présentes Conditions Générales d'Utilisation constituent l'intégralité de l'accord entre 
                      l'Utilisateur et eBookPro. En cas de contradiction entre les différentes versions linguistiques, 
                      la version française prévaudra.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-1">Juridiction</div>
                        <div className="text-sm text-gray-600">Tribunaux de Paris</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-1">Loi applicable</div>
                        <div className="text-sm text-gray-600">Droit français</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-1">Langue</div>
                        <div className="text-sm text-gray-600">Français</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accept Button */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div className="text-left">
                      <p className="font-bold text-gray-800">
                        En poursuivant votre navigation, vous acceptez les présentes conditions.
                      </p>
                      <p className="text-sm text-gray-600">
                        Dernière acceptation enregistrée le 15 janvier 2024
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