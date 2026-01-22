import React from "react";
import { CheckCircle, BookOpen, Headphones, Globe, FileText, Users, Award, Zap } from "lucide-react";

function WhyChooseUs() {
  const reasons = [
    {
      title: "Romans & Fictions",
      description: "Des milliers d'œuvres allant des classiques aux dernières nouveautés en SF, fantasy et thrillers.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      stat: "10,000+ titres"
    },
    {
      title: "Poésie & Littérature",
      description: "Une collection prestigieuse d'œuvres poétiques et littéraires qui ont marqué l'histoire.",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      stat: "Éditions annotées"
    },
    {
      title: "Essais & Business",
      description: "Les meilleurs ouvrages de développement personnel, leadership et stratégie d'entreprise.",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      stat: "Experts reconnus"
    },
    {
      title: "Éducation & Savoir",
      description: "Ressources pédagogiques complètes pour étudiants, enseignants et autodidactes.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      stat: "Certifié pédagogique"
    },
    {
      title: "Livres audio premium",
      description: "Narrations professionnelles avec voix d'acteurs pour une immersion totale.",
      icon: <Headphones className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      stat: "Voix d'acteurs"
    },
    {
      title: "Formats universels",
      description: "Compatible avec tous vos appareils : ePub, PDF, Kindle et audio sans restrictions.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      stat: "100% compatible"
    },
    {
      title: "Auteurs exclusifs",
      description: "Accès à des auteurs best-sellers et découverte de talents émergents en avant-première.",
      icon: <Users className="w-6 h-6" />,
      color: "from-red-500 to-rose-500",
      stat: "Contenu exclusif"
    },
    {
      title: "Bibliothèque multilingue",
      description: "Des œuvres disponibles en français, anglais, espagnol et 10 autres langues.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-500 to-green-500",
      stat: "12 langues"
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4 mr-2" />
            L'AVENIR DE LA LECTURE EST ICI
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Pourquoi choisir notre plateforme ?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rejoignez <span className="font-bold text-blue-600">500,000+ lecteurs</span> qui ont déjà révolutionné 
            leur expérience de lecture avec notre bibliothèque numérique intelligente.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-gray-800">500K+</div>
            <div className="text-gray-600">Lecteurs actifs</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-gray-800">100K+</div>
            <div className="text-gray-600">Livres disponibles</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-green-500">
            <div className="text-3xl font-bold text-gray-800">24/7</div>
            <div className="text-gray-600">Support disponible</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-orange-500">
            <div className="text-3xl font-bold text-gray-800">30 jours</div>
            <div className="text-gray-600">Essai gratuit</div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Gradient corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full`}></div>
              
              <div className="p-8 relative">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="text-sm font-semibold text-blue-600">
                  {item.stat}
                </div>
                
                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à commencer votre voyage littéraire ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez-nous aujourd'hui et obtenez 30 jours d'accès gratuit à toute notre bibliothèque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Commencer l'essai gratuit
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300">
                Voir la démo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Aucune carte de crédit requise • Annulation à tout moment
            </p>
          </div>
        </div>
      </div>

      {/* Custom styles for blob animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default WhyChooseUs;