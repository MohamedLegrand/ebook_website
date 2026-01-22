import React from "react";
import { Users, Target, Award, Globe, BookOpen, Heart, ChevronRight, BookText, Star, Trophy, Leaf } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function About() {
  const teamMembers = [
    {
      name: "Marie Dubois",
      role: "CEO & Fondatrice",
      description: "Ancienne éditrice, passionnée de littérature numérique",
      imageColor: "from-blue-500 to-cyan-500"
    },
    {
      name: "Thomas Leroy",
      role: "Directeur Technique",
      description: "15 ans d'expérience dans les plateformes numériques",
      imageColor: "from-purple-500 to-pink-500"
    },
    {
      name: "Sophie Martin",
      role: "Responsable Éditoriale",
      description: "Ex-libraire, curatrice de notre collection",
      imageColor: "from-green-500 to-emerald-500"
    },
    {
      name: "David Petit",
      role: "Responsable Audio",
      description: "Ingénieur du son et producteur de livres audio",
      imageColor: "from-amber-500 to-orange-500"
    }
  ];

  const valeurs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Accès au savoir",
      description: "Rendre la connaissance accessible à tous"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion littéraire",
      description: "Partager notre amour des livres"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation continue",
      description: "Toujours améliorer l'expérience de lecture"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Communauté",
      description: "Créer des liens entre les lecteurs"
    }
  ];

  const chiffres = [
    { nombre: "50K+", label: "Livres disponibles", icon: <BookText className="w-6 h-6" /> },
    { nombre: "250K+", label: "Lecteurs satisfaits", icon: <Users className="w-6 h-6" /> },
    { nombre: "15+", label: "Pays desservis", icon: <Globe className="w-6 h-6" /> },
    { nombre: "24/7", label: "Support disponible", icon: <Star className="w-6 h-6" /> }
  ];

  const milestones = [
    { year: "2018", title: "Fondation", description: "Création d'eBookPro avec 500 titres" },
    { year: "2019", title: "Première App", description: "Lancement de notre application mobile" },
    { year: "2020", title: "Livres Audio", description: "Introduction des livres audio" },
    { year: "2022", title: "International", description: "Expansion à 15 pays" },
    { year: "2024", title: "Innovation", description: "Lancement de la lecture immersive" }
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
                  <BookOpen className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                À Propos d'eBookPro
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                Découvrez notre histoire, notre mission et l'équipe passionnée qui révolutionne votre expérience de lecture
              </p>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
                  <div className="w-6 h-0.5 bg-blue-600"></div>
                  Notre Histoire
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  De la passion à la <span className="text-blue-600">révolution numérique</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Fondée en 2018 par Marie Dubois, une ancienne éditrice passionnée de technologie, 
                    eBookPro est née d'une vision simple mais ambitieuse : démocratiser l'accès aux livres 
                    numériques tout en préservant la magie de la lecture.
                  </p>
                  <p>
                    Partant d'un petit bureau à Paris avec seulement 500 titres, nous avons grandi pour 
                    devenir l'une des principales plateformes de livres numériques en Europe, avec une 
                    collection de plus de 50 000 titres et une communauté de 250 000 lecteurs passionnés.
                  </p>
                  <p>
                    Notre engagement constant pour l'innovation nous a permis de développer des 
                    fonctionnalités uniques comme la lecture immersive, le mode audio intelligent 
                    et la synchronisation multi-appareils.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-64 rounded-2xl shadow-xl flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-white opacity-30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg text-white">
                      <Target className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Notre Mission</h3>
                      <p className="text-gray-600 text-sm">Rendre la lecture accessible, pratique et inspirante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Notre <span className="text-blue-600">Parcours</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Les étapes clés de notre évolution
              </p>
            </div>
            
            <div className="relative">
              {/* Ligne de timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mb-4 md:mb-0`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                        <div className="text-blue-600 font-bold text-2xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Point sur la timeline */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mt-4 md:mt-0`}>
                      <div className="text-center md:text-left opacity-70">
                        <div className="text-gray-400 text-sm">
                          Étape {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
                <div className="w-6 h-0.5 bg-blue-600"></div>
                Nos Valeurs
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ce qui nous <span className="text-blue-600">anime</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Les principes qui guident chacune de nos actions et décisions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((valeur, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                    {valeur.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{valeur.title}</h3>
                  <p className="text-gray-600 text-center">{valeur.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
                <div className="w-6 h-0.5 bg-blue-600"></div>
                Notre Équipe
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Rencontrez notre <span className="text-blue-600">équipe</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Les passionnés qui donnent vie à votre expérience de lecture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.imageColor} mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chiffres Clés */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
                <div className="w-6 h-0.5 bg-blue-600"></div>
                En Chiffres
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre impact en quelques <span className="text-blue-600">chiffres</span></h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {chiffres.map((chiffre, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                    {chiffre.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{chiffre.nombre}</div>
                  <div className="text-gray-600">{chiffre.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Engagement Écologique */}
        <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold mb-4">
                  <Leaf className="w-5 h-5" />
                  Engagement Écologique
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Lire vert, <span className="text-green-600">penser durable</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  Chez eBookPro, nous croyons que la technologie peut et doit servir l'environnement. 
                  En choisissant nos livres numériques, vous participez activement à la réduction de 
                  l'empreinte carbone liée à l'industrie du livre traditionnel.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-green-600">-85%</div>
                    <div className="text-sm text-gray-600">Émissions CO₂ vs livre papier</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-green-600">0 arbre</div>
                    <div className="text-sm text-gray-600">Pour nos livres numériques</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-green-700">
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">Infrastructure 100% énergies renouvelables</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-64 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white p-8">
                  <Leaf className="w-16 h-16 mb-4 opacity-30" />
                  <h3 className="text-2xl font-bold mb-2">Lire responsable</h3>
                  <p className="text-green-100 text-center">
                    Chaque livre numérique sauve en moyenne 5kg de CO₂
                  </p>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-xs">
                  <Award className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Certifié Vert</h3>
                  <p className="text-gray-600 text-sm">Éco-certification européenne</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Prêt à commencer votre voyage littéraire ?
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Rejoignez notre communauté de lecteurs passionnés et découvrez un monde de possibilités
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/register"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Créer un compte gratuit
                </a>
                <a
                  href="/catalogue"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Découvrir le catalogue
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;