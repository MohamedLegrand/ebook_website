import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    {
      title: "Romans & Fiction",
      description: "Plongez dans des histoires captivantes et des univers imaginaires qui vous transporteront ailleurs.",
      color: "from-blue-500 to-purple-600",
      image: "/src/assets/images/livres/roman.jpg",
      books: 540,
      rating: 4.8
    },
    {
      title: "Science & Technologie",
      description: "Explorez les découvertes scientifiques et les innovations qui façonnent notre monde moderne.",
      color: "from-cyan-500 to-blue-600",
      image: "/src/assets/images/livres/science.jpg",
      books: 620,
      rating: 4.6
    },
    {
      title: "Développement Personnel",
      description: "Transformez votre vie avec des outils pratiques et des conseils inspirants pour atteindre vos objectifs.",
      color: "from-emerald-500 to-teal-600",
      image: "/src/assets/images/livres/developpement.jpg",
      books: 480,
      rating: 4.9
    },
    {
      title: "Histoire & Biographies",
      description: "Découvrez les récits fascinants du passé et les vies extraordinaires qui ont marqué l'histoire.",
      color: "from-amber-500 to-orange-600",
      image: "/src/assets/images/livres/histoire.jpg",
      books: 520,
      rating: 4.7
    },
    {
      title: "Art & Culture",
      description: "Enrichissez votre esprit avec des œuvres qui célèbrent la créativité et l'expression artistique.",
      color: "from-pink-500 to-rose-600",
      image: "/src/assets/images/livres/art.jpg",
      books: 450,
      rating: 4.5
    },
    {
      title: "Business & Économie",
      description: "Maîtrisez les stratégies gagnantes et les principes essentiels du monde des affaires.",
      color: "from-indigo-500 to-violet-600",
      image: "/src/assets/images/livres/businnes.jpg",
      books: 580,
      rating: 4.8
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [categories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Colonne texte (à gauche) */}
              <div className="relative order-2 lg:order-1 text-center lg:text-left">
                <div className="mb-6">
                  <span className="inline-block text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full">
                    Catégorie {index + 1} / {categories.length}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                  {category.title}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {category.description}
                </p>
                
                {/* Informations supplémentaires */}
                <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{category.books}</div>
                      <div className="text-sm text-gray-600">Livres</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-100 to-yellow-200 flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{category.rating}</div>
                      <div className="text-sm text-gray-600">Note moyenne</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                      <span className="text-2xl">🆕</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">24</div>
                      <div className="text-sm text-gray-600">Nouveautés</div>
                    </div>
                  </div>
                </div>
                
                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                  <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <span className="relative z-10">Explorer la catégorie</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300">
                    Voir tous les livres
                  </button>
                </div>
                
                {/* Auteurs populaires */}
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Auteurs populaires</h3>
                  <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                    {["Victor Hugo", "J.K. Rowling", "Stephen King", "Agatha Christie"].map((author, i) => (
                      <span key={i} className="bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                        {author}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Colonne image (à droite) */}
              <div className="relative order-1 lg:order-2 flex justify-center">
                {/* Image principale du livre */}
                <div className="relative w-full max-w-md">
                  {/* Livre principal avec effet 3D */}
                  <div className="relative w-64 h-80 mx-auto transform perspective-1000 group hover:scale-105 transition-all duration-500">
                    {/* Couverture du livre */}
                    <div 
                      className="absolute inset-0 rounded-xl shadow-2xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${category.image})`
                      }}
                    >
                      {/* Overlay coloré */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-xl`} />
                      
                      {/* Titre sur la couverture */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-3 rounded-lg">
                        <div className="text-sm font-semibold uppercase">Bestseller</div>
                        <div className="text-lg font-bold truncate">{category.title.split('&')[0].trim()}</div>
                      </div>
                    </div>
                    
                    {/* Effet de bordure du livre */}
                    <div className="absolute -right-2 top-4 bottom-4 w-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-r-lg shadow-lg" />
                    
                    {/* Pages du livre */}
                    <div className="absolute -right-1 top-6 bottom-6 w-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-r-sm" />
                  </div>
                  
                  {/* Livres empilés autour */}
                  <div className="absolute -bottom-8 -left-8 w-48 h-64 transform -rotate-12 opacity-90">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg" />
                      <div className="absolute -right-2 top-4 bottom-4 w-3 bg-gradient-to-r from-blue-300 to-blue-400 rounded-r-lg" />
                    </div>
                  </div>
                  
                  <div className="absolute -top-8 -right-8 w-40 h-56 transform rotate-12 opacity-90">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg" />
                      <div className="absolute -right-2 top-4 bottom-4 w-3 bg-gradient-to-r from-purple-300 to-purple-400 rounded-r-lg" />
                    </div>
                  </div>
                  
                  {/* Badge de recommandation */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full shadow-xl font-bold text-sm whitespace-nowrap">
                    ⭐ Recommandé
                  </div>
                  
                  {/* Info-bulle sur le livre */}
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl max-w-xs border border-gray-200">
                    <div className="text-center">
                      <div className="font-bold text-gray-900 mb-1">Format disponible</div>
                      <div className="text-sm text-gray-600 mb-2">PDF, EPUB, Papier</div>
                      <div className="flex justify-center gap-4">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">📖 Papier</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">📱 EPUB</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">💻 PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Flèche de navigation gauche */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 group bg-white hover:bg-gray-50 text-gray-700 p-4 rounded-2xl shadow-2xl transition-all duration-300 z-10 border border-gray-200"
      >
        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
        <span className="absolute left-full ml-3 bg-gray-900 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
          Précédent
        </span>
      </button>
      
      {/* Flèche de navigation droite */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 group bg-white hover:bg-gray-50 text-gray-700 p-4 rounded-2xl shadow-2xl transition-all duration-300 z-10 border border-gray-200"
      >
        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
          Suivant
        </span>
      </button>

      {/* Indicateurs de points en bas */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? `bg-gradient-to-r ${categories[index].color} w-10 h-3`
                : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* En-tête en haut */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            📖 Bibliothèque Premium
          </h2>
          <p className="text-gray-600 mt-2 text-lg">Découvrez nos collections de livres exclusifs</p>
        </div>
      </div>

      {/* Décoration de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/50 to-emerald-100/50 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

export default Hero;