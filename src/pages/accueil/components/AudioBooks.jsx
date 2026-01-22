import React from "react";
import { Star, PlayCircle, Headphones, Download, Volume2, CheckCircle } from "lucide-react";

function Audio() {
  const reviews = [
    {
      name: "Jean M.",
      role: "Écrivain & Professeur",
      comment: "La qualité audio est exceptionnelle. Les narrateurs professionnels rendent chaque histoire vivante. J'écoute en faisant du sport !",
      rating: 5,
      avatar: "JM",
      color: "bg-blue-500"
    },
    {
      name: "Amina K.",
      role: "Étudiante en médecine",
      comment: "Idéal pour réviser pendant les trajets. La fonctionnalité de vitesse variable est révolutionnaire pour optimiser mon temps.",
      rating: 5,
      avatar: "AK",
      color: "bg-purple-500"
    },
    {
      name: "Paul D.",
      role: "Entrepreneur",
      comment: "La sélection de livres business en audio est impressionnante. J'ai augmenté ma productivité de 40% grâce à l'écoute pendant mes déplacements.",
      rating: 4,
      avatar: "PD",
      color: "bg-green-500"
    },
    {
      name: "Sophie L.",
      role: "Traductrice",
      comment: "L'application mobile est intuitive et permet un téléchargement facile pour écouter hors ligne. La bibliothèque multilingue est parfaite pour mon travail.",
      rating: 5,
      avatar: "SL",
      color: "bg-pink-500"
    },
    {
      name: "Marc T.",
      role: "Père de famille",
      comment: "Mes enfants adorent les histoires audio avant de dormir. Une excellente alternative aux écrans pour développer leur imagination.",
      rating: 5,
      avatar: "MT",
      color: "bg-orange-500"
    },
    {
      name: "Élodie R.",
      role: "Malvoyante",
      comment: "Cette plateforme a changé mon rapport à la lecture. L'accessibilité audio me permet de dévorer des livres comme jamais auparavant.",
      rating: 5,
      avatar: "ER",
      color: "bg-indigo-500"
    },
  ];

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Narrateurs professionnels",
      description: "Voix d'acteurs et narrateurs certifiés"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Écoute hors ligne",
      description: "Téléchargez et écoutez sans connexion"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Audio haute qualité",
      description: "Son spatial 3D et audio immersif"
    },
    {
      icon: <PlayCircle className="w-6 h-6" />,
      title: "Vitesse variable",
      description: "Ajustez la vitesse de 0.5x à 3x"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6 border border-blue-100">
            <Headphones className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">SECTION AUDIO PRÉMIUM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              L'expérience audio ultime
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Découvrez pourquoi <span className="font-bold text-blue-600">85% de nos utilisateurs</span> 
            adoptent nos livres audio premium pour une expérience de lecture transformée.
          </p>
          
          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Livres audio</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Narrateurs pro</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-orange-600">24h</div>
              <div className="text-gray-600">Écoute continue</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Features section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">
                Fonctionnalités <span className="text-blue-600">audio premium</span>
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Demo audio player */}
              <div className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-bold text-gray-900">Écoutez un extrait</div>
                    <div className="text-sm text-gray-600">Le Petit Prince - Chapitre 1</div>
                  </div>
                  <PlayCircle className="w-10 h-10 text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0:00</span>
                  <span>3:45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Témoignages <span className="text-blue-600">authentiques</span>
                </h3>
                <p className="text-gray-600 mt-2">Nos utilisateurs partagent leur expérience</p>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 font-bold text-gray-900">4.9/5</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Rating stars */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    {/* Review text */}
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{review.comment}"
                    </p>
                    
                    {/* Reviewer info */}
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <p className="text-gray-600 text-sm">{review.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h4 className="text-2xl font-bold mb-2">Prêt à écouter ?</h4>
                  <p className="text-blue-100">
                    Essayez gratuitement pendant 30 jours. Annulez à tout moment.
                  </p>
                </div>
                <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors duration-300 whitespace-nowrap">
                  Démarrer l'essai gratuit
                </button>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-blue-500/30">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Accès complet</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App showcase */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Application mobile <span className="text-blue-400">optimisée</span>
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Emportez votre bibliothèque audio partout avec vous. Téléchargez notre application 
                disponible sur iOS et Android pour une expérience d'écoute sans interruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <div className="mr-3">📱</div>
                  App Store
                </button>
                <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center">
                  <div className="mr-3">🤖</div>
                  Google Play
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-6">
                  <Headphones className="w-8 h-8 text-blue-400 mr-3" />
                  <div>
                    <div className="font-bold">Écoute en cours</div>
                    <div className="text-sm text-gray-300">3h45 écoulées aujourd'hui</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {['Littérature classique', 'Développement personnel', 'Science-fiction'].map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                          📚
                        </div>
                        <div>
                          <div className="font-medium">{category}</div>
                          <div className="text-xs text-gray-400">En cours d'écoute</div>
                        </div>
                      </div>
                      <PlayCircle className="w-6 h-6 text-blue-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audio;