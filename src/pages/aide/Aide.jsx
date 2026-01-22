import React, { useState } from "react";
import { Search, BookOpen, Headphones, Download, CreditCard, Smartphone, Shield, MessageSquare, Phone, Mail, FileText, Video, Users, ChevronRight, ExternalLink, CheckCircle } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Aide() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const helpCategories = [
    {
      id: "getting-started",
      title: "Premiers pas",
      description: "Guide de démarrage et prise en main",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      articles: [
        { title: "Comment créer un compte", duration: "2 min", popular: true },
        { title: "Configurer votre profil", duration: "3 min" },
        { title: "Naviguer dans la bibliothèque", duration: "5 min", popular: true },
        { title: "Installer l'application mobile", duration: "4 min" },
        { title: "Premier achat : guide complet", duration: "7 min" }
      ]
    },
    {
      id: "technical",
      title: "Support technique",
      description: "Problèmes techniques et compatibilité",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      articles: [
        { title: "Problèmes de téléchargement", duration: "5 min", popular: true },
        { title: "Compatibilité des formats", duration: "4 min" },
        { title: "Erreurs de lecture", duration: "3 min" },
        { title: "Application ne se lance pas", duration: "6 min", popular: true },
        { title: "Problèmes de synchronisation", duration: "4 min" }
      ]
    },
    {
      id: "audio-books",
      title: "Livres audio",
      description: "Tout sur les livres audio",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      articles: [
        { title: "Écouter sur mobile", duration: "3 min", popular: true },
        { title: "Qualité audio et formats", duration: "4 min" },
        { title: "Téléchargement pour écoute hors ligne", duration: "5 min" },
        { title: "Gérer les signets audio", duration: "2 min" },
        { title: "Problèmes de lecture audio", duration: "4 min", popular: true }
      ]
    },
    {
      id: "billing",
      title: "Facturation & Paiement",
      description: "Gestion des achats et abonnements",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      articles: [
        { title: "Méthodes de paiement acceptées", duration: "3 min", popular: true },
        { title: "Gérer l'abonnement premium", duration: "4 min" },
        { title: "Demander une facture", duration: "2 min" },
        { title: "Politique de remboursement", duration: "5 min", popular: true },
        { title: "Problèmes de paiement", duration: "4 min" }
      ]
    },
    {
      id: "security",
      title: "Sécurité & Confidentialité",
      description: "Protection de vos données",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-rose-500",
      articles: [
        { title: "Sécurité du compte", duration: "4 min", popular: true },
        { title: "Protection des données RGPD", duration: "6 min" },
        { title: "Récupérer un compte compromis", duration: "5 min" },
        { title: "Paramètres de confidentialité", duration: "3 min", popular: true },
        { title: "Signaler un problème de sécurité", duration: "2 min" }
      ]
    },
    {
      id: "downloads",
      title: "Téléchargements",
      description: "Gestion des fichiers et formats",
      icon: <Download className="w-8 h-8" />,
      color: "from-indigo-500 to-violet-500",
      articles: [
        { title: "Formats compatibles", duration: "4 min", popular: true },
        { title: "Transférer sur liseuse", duration: "6 min" },
        { title: "Limites de téléchargement", duration: "2 min" },
        { title: "Organiser sa bibliothèque", duration: "5 min", popular: true },
        { title: "Sauvegarde des achats", duration: "3 min" }
      ]
    }
  ];

  const quickGuides = [
    {
      title: "Guide de démarrage rapide",
      description: "Installez et commencez en 5 minutes",
      icon: <FileText className="w-6 h-6" />,
      link: "/guides/demarrage-rapide"
    },
    {
      title: "Tutoriels vidéo",
      description: "Apprenez avec nos vidéos explicatives",
      icon: <Video className="w-6 h-6" />,
      link: "/guides/videos"
    },
    {
      title: "Forum communautaire",
      description: "Échangez avec d'autres lecteurs",
      icon: <Users className="w-6 h-6" />,
      link: "/community"
    },
    {
      title: "FAQ complète",
      description: "Questions fréquemment posées",
      icon: <MessageSquare className="w-6 h-6" />,
      link: "/faq"
    }
  ];

  const trendingArticles = [
    "Comment transférer mes livres sur Kindle ?",
    "Problème de lecture hors ligne - Solutions",
    "Gérer les abonnements et paiements",
    "Optimiser la qualité audio des livres audio",
    "Sécurité : protéger son compte"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirection vers la recherche
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Centre d'aide eBookPro
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Trouvez des réponses, des guides et des solutions à toutes vos questions
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher une aide, un guide ou une solution..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-lg"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Rechercher
                  </button>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-sm text-blue-200">Suggestions :</span>
                  {["téléchargement", "audio", "paiement", "kindle", "application"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick Access */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <CheckCircle className="w-7 h-7 text-cyan-600" />
                Accès rapide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickGuides.map((guide, index) => (
                  <a
                    key={index}
                    href={guide.link}
                    className="group bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                        {guide.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-gray-600">{guide.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Categories Grid */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Parcourir par catégorie
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {helpCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                      selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className={`p-6 bg-gradient-to-r ${category.color} text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        {category.icon}
                        <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                          {category.articles.length} articles
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-blue-100">{category.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-3">
                        {category.articles.slice(0, 3).map((article, index) => (
                          <div key={index} className="flex items-center justify-between group">
                            <a
                              href={`/help/${category.id}/${index}`}
                              className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                            >
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                              {article.title}
                              {article.popular && (
                                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                  Populaire
                                </span>
                              )}
                            </a>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {article.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {category.articles.length > 3 && (
                        <a
                          href={`/help/${category.id}`}
                          className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          Voir tous les articles
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Articles */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Articles tendances
                </h2>
                <div className="space-y-4">
                  {trendingArticles.map((article, index) => (
                    <a
                      key={index}
                      href={`/help/article/${index}`}
                      className="block group"
                    >
                      <div className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all border border-gray-200 hover:border-blue-300">
                        <div className="flex items-center gap-4">
                          <div className="text-lg font-bold text-blue-600">
                            {(index + 1).toString().padStart(2, '0')}
                          </div>
                          <span className="text-gray-800 group-hover:text-blue-600 font-medium">
                            {article}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <MessageSquare className="w-7 h-7 text-cyan-600" />
                  Contact direct
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600 mb-2">support@ebookpro.fr</p>
                      <p className="text-sm text-gray-500">Réponse sous 2 heures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Téléphone</h3>
                      <p className="text-gray-600 mb-2">01 23 45 67 89</p>
                      <p className="text-sm text-gray-500">Lun-Ven : 9h-19h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Chat en direct</h3>
                      <p className="text-gray-600 mb-2">Disponible 24/7</p>
                      <p className="text-sm text-gray-500">Via l'application mobile</p>
                    </div>
                  </div>
                </div>
                
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageSquare className="w-5 h-5" />
                  Formulaire de contact complet
                </a>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Besoin d'aide urgente ?</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold">1</span>
                    </div>
                    <span>Vérifiez notre FAQ complète</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold">2</span>
                    </div>
                    <span>Recherchez dans notre base de connaissances</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="font-bold">3</span>
                    </div>
                    <span>Contactez notre support spécialisé</span>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl">
                  <h3 className="font-bold mb-2">Statut des services</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Application web</span>
                      <span className="flex items-center gap-1 text-green-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Opérationnel
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Application mobile</span>
                      <span className="flex items-center gap-1 text-green-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Opérationnel
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Téléchargements</span>
                      <span className="flex items-center gap-1 text-green-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Opérationnel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Restez informé
                </h2>
                <p className="text-gray-600 mb-6">
                  Recevez les derniers guides, astuces et nouveautés directement dans votre boîte mail
                </p>
                
                <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    S'inscrire
                  </button>
                </form>
                
                <p className="text-sm text-gray-500 mt-3">
                  Un email de confirmation vous sera envoyé. Vous pourrez vous désinscrire à tout moment.
                </p>
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
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Aide;