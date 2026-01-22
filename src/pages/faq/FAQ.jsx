import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Headphones, Download, CreditCard, Smartphone, Globe, Shield, Mail, Clock, Users } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "Compte & Inscription",
      icon: <Users className="w-5 h-5" />,
      items: [
        {
          question: "Comment créer un compte sur eBookPro ?",
          answer: "Cliquez sur le bouton 'S'inscrire' en haut à droite de la page. Remplissez le formulaire avec votre email, un mot de passe sécurisé, puis confirmez votre inscription via le lien que vous recevrez par email. La création de compte est entièrement gratuite."
        },
        {
          question: "Puis-je utiliser un compte gratuit ?",
          answer: "Oui, le compte gratuit vous permet d'accéder à : la bibliothèque de démonstration, les extraits gratuits, les newsletters exclusives et la création de liste de souhaits. Pour télécharger des livres complets, vous devrez passer à un compte premium."
        },
        {
          question: "Comment réinitialiser mon mot de passe ?",
          answer: "Rendez-vous sur la page de connexion, cliquez sur 'Mot de passe oublié ?', entrez votre adresse email et suivez les instructions envoyées dans votre boîte mail. Le lien de réinitialisation est valable 24 heures."
        }
      ]
    },
    {
      title: "Achat & Paiement",
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, et les virements bancaires SEPA pour les entreprises."
        },
        {
          question: "Est-ce que les prix incluent la TVA ?",
          answer: "Oui, tous nos prix sont affichés TTC (TVA incluse). Pour les clients professionnels et les entreprises de l'Union Européenne, une facture avec TVA détaillée est disponible dans votre espace client."
        },
        {
          question: "Comment obtenir une facture ?",
          answer: "Toutes vos factures sont disponibles en format PDF dans votre espace client, section 'Mes achats'. Vous pouvez les télécharger et les imprimer à tout moment."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Absolument pas. Le prix affiché est le prix final. Aucun frais supplémentaire n'est appliqué. Vous bénéficiez également de mises à jour gratuites pour vos livres électroniques."
        }
      ]
    },
    {
      title: "Téléchargement & Formats",
      icon: <Download className="w-5 h-5" />,
      items: [
        {
          question: "Quels formats de livres proposez-vous ?",
          answer: "Nos livres sont disponibles en EPUB 3 (compatible avec la plupart des liseuses), PDF (pour une lecture sur ordinateur), et MOBI (compatible avec les anciennes liseuses Kindle). Les livres audio sont disponibles en MP3 (128kbps) et M4B (avec chapitrage)."
        },
        {
          question: "Combien de fois puis-je télécharger un livre acheté ?",
          answer: "Vous pouvez télécharger vos livres autant de fois que vous le souhaitez depuis votre bibliothèque personnelle. Vos achats sont liés à votre compte, pas à un appareil spécifique."
        },
        {
          question: "Y a-t-il une limite de temps pour télécharger mes achats ?",
          answer: "Non, vos achats restent disponibles indéfiniment dans votre bibliothèque. Vous pouvez les télécharger quand vous voulez, même des années après l'achat."
        }
      ]
    },
    {
      title: "Compatibilité & Appareils",
      icon: <Smartphone className="w-5 h-5" />,
      items: [
        {
          question: "Sur quels appareils puis-je lire mes eBooks ?",
          answer: "Vos eBooks sont compatibles avec : liseuses (Kindle, Kobo, etc.), smartphones (iOS & Android), tablettes, ordinateurs (Windows, macOS, Linux), et navigateurs web via notre lecteur en ligne."
        },
        {
          question: "Comment transférer mes livres sur ma liseuse Kindle ?",
          answer: "Pour Kindle : téléchargez le fichier EPUB, utilisez notre outil de conversion gratuit, ou envoyez-le directement à votre Kindle via l'email Kindle personnel. Un guide détaillé est disponible dans notre centre d'aide."
        },
        {
          question: "Puis-je lire mes livres hors connexion ?",
          answer: "Oui, une fois téléchargés, vos livres sont accessibles hors ligne. Notre application mobile permet également le téléchargement pour une lecture sans connexion internet."
        }
      ]
    },
    {
      title: "Livres Audio",
      icon: <Headphones className="w-5 h-5" />,
      items: [
        {
          question: "Quelle est la qualité des livres audio ?",
          answer: "Nos livres audio sont produits en qualité studio (128kbps et 256kbps), avec des voix professionnelles, une musique d'ambiance adaptée et un mastering audio optimal pour une expérience immersive."
        },
        {
          question: "Puis-je écouter mes livres audio sur Spotify ou Apple Music ?",
          answer: "Non, nos livres audio sont protégés par DRM et doivent être écoutés via notre application ou un lecteur compatible. Cependant, nous travaillons sur une intégration avec les principales plateformes."
        },
        {
          question: "Y a-t-il des sous-titres pour les livres audio ?",
          answer: "Oui, la plupart de nos livres audio récents incluent des sous-titres synchronisés (format VTT) accessibles via notre application mobile et notre lecteur web."
        }
      ]
    },
    {
      title: "Sécurité & Confidentialité",
      icon: <Shield className="w-5 h-5" />,
      items: [
        {
          question: "Mes données personnelles sont-elles sécurisées ?",
          answer: "Oui, nous utilisons le chiffrement SSL 256-bit pour toutes les transactions. Vos données sont stockées sur des serveurs sécurisés en Europe, conformément au RGPD. Nous ne vendons jamais vos données à des tiers."
        },
        {
          question: "Comment sont protégés les livres contre le piratage ?",
          answer: "Nous utilisons un système de DRM léger (Digital Rights Management) qui permet une utilisation normale sur vos appareils tout en protégeant les droits d'auteur. Le DRM ne limite pas le nombre d'appareils, seulement le partage non autorisé."
        },
        {
          question: "Puis-je partager mes livres avec ma famille ?",
          answer: "Chaque achat est pour un usage personnel. Cependant, nous proposons un forfait Famille qui permet de partager jusqu'à 5 comptes sur la même bibliothèque. Contactez notre service client pour plus d'informations."
        }
      ]
    },
    {
      title: "Support & Assistance",
      icon: <Mail className="w-5 h-5" />,
      items: [
        {
          question: "Comment contacter le support technique ?",
          answer: "Notre équipe est disponible par email à support@ebookpro.fr, via le chat en ligne (9h-19h du lundi au vendredi), ou par téléphone au 01 23 45 67 89. Le délai moyen de réponse est de 2 heures ouvrables."
        },
        {
          question: "Proposez-vous un remboursement ?",
          answer: "Oui, nous offrons une garantie satisfait ou remboursé de 14 jours pour tous les achats. Si un livre ne correspond pas à vos attentes, contactez notre service client pour un remboursement intégral."
        },
        {
          question: "Y a-t-il une communauté d'entraide ?",
          answer: "Oui, notre forum communautaire réunit plus de 50 000 lecteurs. Vous pouvez y poser vos questions, partager vos avis sur les livres, et échanger avec d'autres passionnés de lecture."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section Professionnelle */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white overflow-hidden">
          {/* Fond décoratif */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-cyan-300 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Texte et recherche */}
              <div className="lg:w-1/2">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">Centre d'aide officiel</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    Questions
                    <span className="block text-cyan-200">Fréquentes</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl lg:max-w-none">
                    Trouvez rapidement des réponses à vos questions sur eBookPro
                  </p>
                  
                  {/* Search Bar améliorée */}
                  <div className="max-w-xl mx-auto lg:mx-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Recherchez une question, un sujet..."
                          className="w-full px-6 py-5 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-2xl text-lg"
                        />
                        <button className="absolute right-3 top-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg">
                          Rechercher
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                      <span className="text-sm text-blue-200 font-medium">Suggestions :</span>
                      <span className="text-sm text-blue-100 bg-white/10 px-3 py-1 rounded-full">formats compatibles</span>
                      <span className="text-sm text-blue-100 bg-white/10 px-3 py-1 rounded-full">remboursement</span>
                      <span className="text-sm text-blue-100 bg-white/10 px-3 py-1 rounded-full">livre audio</span>
                      <span className="text-sm text-blue-100 bg-white/10 px-3 py-1 rounded-full">mot de passe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Professionnelle */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative mx-auto max-w-md lg:max-w-full">
                  {/* Conteneur image avec effets */}
                  <div className="relative group">
                    {/* Effet d'ombre et bordure */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>
                    
                    {/* Image principale */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 transform lg:-rotate-1 group-hover:rotate-0 transition-transform duration-500">
                      <img
                        src="/src/assets/images/faq.jpg"
                        alt="Support client eBookPro - Centre d'aide professionnel"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                        }}
                      />
                      
                      {/* Overlay dégradé */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                      
                      {/* Badge flottant */}
                      <div className="absolute top-6 right-6 bg-white text-blue-600 px-4 py-3 rounded-xl shadow-2xl transform rotate-3 animate-pulse-slow">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="font-bold text-sm">24/7 Support</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Élément décoratif supplémentaire */}
                    <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-xl shadow-2xl hidden lg:block">
                      <div className="text-center">
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-xs font-medium">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Indicateur de statut */}
                  <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-100">Support en ligne</span>
                    </div>
                    <div className="h-4 w-px bg-white/30"></div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-blue-100">Réponse sous 2h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vague décorative en bas */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".1"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".3"></path>
            </svg>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick Stats améliorés */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support disponible</div>
                <div className="mt-2 text-sm text-gray-500">Assistance permanente</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Satisfaction clients</div>
                <div className="mt-2 text-sm text-gray-500">Taux de satisfaction</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">2h</div>
                <div className="text-gray-600 font-medium">Réponse moyenne</div>
                <div className="mt-2 text-sm text-gray-500">Délai de réponse</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">14j</div>
                <div className="text-gray-600 font-medium">Garantie remboursement</div>
                <div className="mt-2 text-sm text-gray-500">Satisfait ou remboursé</div>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
                  {/* Category Header amélioré */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl text-white shadow-md">
                        {category.icon}
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                          {category.title}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                          {category.items.length} questions fréquentes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Items */}
                  <div className="divide-y divide-gray-100">
                    {category.items.map((item, itemIndex) => {
                      const isOpen = openIndex === `${categoryIndex}-${itemIndex}`;
                      return (
                        <div key={itemIndex} className="hover:bg-gray-50/70 transition-colors duration-200">
                          <button
                            onClick={() => toggleFAQ(`${categoryIndex}-${itemIndex}`)}
                            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:bg-blue-50/30 transition-colors duration-200"
                          >
                            <div className="flex items-start gap-4">
                              <div className="hidden sm:block mt-2">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-800 pr-8">
                                {item.question}
                              </h3>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-cyan-600" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-cyan-500" />
                              )}
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5 animate-fadeIn">
                              <div className="pl-0 sm:pl-6 border-l-2 border-cyan-300 ml-1 sm:ml-0">
                                <p className="text-gray-700 leading-relaxed">
                                  {item.answer}
                                </p>
                                {/* Additional resources if needed */}
                                {itemIndex === 0 && categoryIndex === 5 && (
                                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                                    <p className="text-sm text-blue-700">
                                      <strong>💡 Conseil :</strong> Consultez notre guide RGPD pour plus d'informations sur la protection de vos données.
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Need Help Section */}
            <div className="mt-20 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl overflow-hidden relative">
              {/* Effets de fond */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-300 blur-3xl"></div>
              </div>
              
              <div className="relative max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Support personnalisé</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Besoin d'aide supplémentaire ?
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Notre équipe de support est là pour vous aider personnellement
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 transform duration-300"
                  >
                    📧 Contactez-nous
                  </a>
                  <a
                    href="tel:+33123456789"
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    📞 01 23 45 67 89
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-blue-200">Lun-Ven : 9h-19h</span>
                  </div>
                  <div className="h-4 w-px bg-white/30"></div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-blue-200">Sam : 10h-18h</span>
                  </div>
                  <div className="h-4 w-px bg-white/30"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-blue-200">Réponse sous 2h</span>
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
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default FAQ;