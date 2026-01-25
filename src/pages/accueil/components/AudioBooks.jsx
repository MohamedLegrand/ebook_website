import React, { useState } from "react";
import { Star, PlayCircle, Headphones, Download, Volume2, CheckCircle, ShoppingCart, Check } from "lucide-react";

function AudioBooks() {
  const [cart, setCart] = useState({});
  const [addedBooks, setAddedBooks] = useState({});

  const handleCartToggle = (bookId) => {
    setCart(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
    
    setAddedBooks(prev => ({
      ...prev,
      [bookId]: true
    }));
    
    setTimeout(() => {
      setAddedBooks(prev => ({
        ...prev,
        [bookId]: false
      }));
    }, 2000);
  };

  const audioBooks = [
    { 
      id: 1, 
      title: "Atomic Habits", 
      author: "James Clear", 
      narrator: "Jean Dupont",
      priceFCFA: 15000, 
      duration: "5h 42m",
      rating: 4.8,
      listeners: 12500,
      cover: "/src/assets/images/audio/developpement-personnel/atomic-habits.jpg",
      category: "Développement Personnel"
    },
    { 
      id: 2, 
      title: "The Lean Startup", 
      author: "Eric Ries", 
      narrator: "Paul Richard",
      priceFCFA: 16500, 
      duration: "6h 20m",
      rating: 4.7,
      listeners: 14300,
      cover: "/src/assets/images/audio/business/lean-startup.jpg",
      category: "Business"
    },
    { 
      id: 3, 
      title: "Sapiens", 
      author: "Yuval Noah Harari", 
      narrator: "Samuel Labarthe",
      priceFCFA: 18500, 
      duration: "15h 25m",
      rating: 4.9,
      listeners: 28700,
      cover: "/src/assets/images/audio/histoire-culture/sapiens.jpg",
      category: "Histoire"
    },
    { 
      id: 4, 
      title: "1984", 
      author: "George Orwell", 
      narrator: "Pierre-Henri Cami",
      priceFCFA: 12500, 
      duration: "11h 30m",
      rating: 4.9,
      listeners: 23400,
      cover: "/src/assets/images/audio/romans-fiction/1984.jpg",
      category: "Fiction"
    },
    { 
      id: 5, 
      title: "How Not to Die", 
      author: "Michael Greger", 
      narrator: "Dr. Laurent Simon",
      priceFCFA: 17500, 
      duration: "8h 15m",
      rating: 4.9,
      listeners: 12500,
      cover: "/src/assets/images/audio/sante-bien-etre/how-not-to-die.jpg",
      category: "Santé"
    },
    { 
      id: 6, 
      title: "The Power of Now", 
      author: "Eckhart Tolle", 
      narrator: "Marie Laurent",
      priceFCFA: 14500, 
      duration: "6h 15m",
      rating: 4.7,
      listeners: 9800,
      cover: "/src/assets/images/audio/developpement-personnel/power-of-now.jpg",
      category: "Développement Personnel"
    },
    { 
      id: 7, 
      title: "Zero to One", 
      author: "Peter Thiel", 
      narrator: "Catherine Blanc",
      priceFCFA: 15500, 
      duration: "5h 45m",
      rating: 4.6,
      listeners: 11800,
      cover: "/src/assets/images/audio/business/zero-to-one.jpg",
      category: "Business"
    },
    { 
      id: 8, 
      title: "This Is Your Brain on Music", 
      author: "Daniel Levitin", 
      narrator: "Daniel Levitin",
      priceFCFA: 16500, 
      duration: "9h 20m",
      rating: 4.7,
      listeners: 12500,
      cover: "/src/assets/images/audio/musique-arts/brain-on-music.jpg",
      category: "Musique"
    },
    { 
      id: 9, 
      title: "Deep Work", 
      author: "Cal Newport", 
      narrator: "Sophie Bernard",
      priceFCFA: 14000, 
      duration: "5h 20m",
      rating: 4.5,
      listeners: 8700,
      cover: "/src/assets/images/audio/developpement-personnel/deep-work.jpg",
      category: "Développement Personnel"
    },
    { 
      id: 10, 
      title: "Salt, Fat, Acid, Heat", 
      author: "Samin Nosrat", 
      narrator: "Samin Nosrat",
      priceFCFA: 15500, 
      duration: "7h 20m",
      rating: 4.8,
      listeners: 12500,
      cover: "/src/assets/images/audio/cuisine-lifestyle/salt-fat-acid-heat.jpg",
      category: "Cuisine"
    },
    { 
      id: 11, 
      title: "The 7 Habits", 
      author: "Stephen Covey", 
      narrator: "Thomas Leroy",
      priceFCFA: 16000, 
      duration: "7h 10m",
      rating: 4.9,
      listeners: 15600,
      cover: "/src/assets/images/audio/developpement-personnel/7-habits.jpg",
      category: "Développement Personnel"
    },
    { 
      id: 12, 
      title: "Rich Dad Poor Dad", 
      author: "Robert Kiyosaki", 
      narrator: "Michel Durand",
      priceFCFA: 14500, 
      duration: "5h 10m",
      rating: 4.8,
      listeners: 16700,
      cover: "/src/assets/images/audio/business/rich-dad-poor-dad.jpg",
      category: "Business"
    },
    { 
      id: 13, 
      title: "Why We Sleep", 
      author: "Matthew Walker", 
      narrator: "Dr. Sarah Cohen",
      priceFCFA: 16000, 
      duration: "7h 30m",
      rating: 4.8,
      listeners: 10800,
      cover: "/src/assets/images/audio/sante-bien-etre/why-we-sleep.jpg",
      category: "Santé"
    },
    { 
      id: 14, 
      title: "Pride and Prejudice", 
      author: "Jane Austen", 
      narrator: "Camille de Bois",
      priceFCFA: 13000, 
      duration: "15h 20m",
      rating: 4.9,
      listeners: 19800,
      cover: "/src/assets/images/audio/romans-fiction/pride-prejudice.jpg",
      category: "Fiction"
    },
    { 
      id: 15, 
      title: "A Brief History of Time", 
      author: "Stephen Hawking", 
      narrator: "François Berléand",
      priceFCFA: 16500, 
      duration: "7h 50m",
      rating: 4.7,
      listeners: 14200,
      cover: "/src/assets/images/audio/histoire-culture/brief-history-time.jpg",
      category: "Histoire"
    }
  ];

  const features = [
    {
      icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Narrateurs professionnels",
      description: "Voix d'acteurs et narrateurs certifiés"
    },
    {
      icon: <Download className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Écoute hors ligne",
      description: "Téléchargez et écoutez sans connexion"
    },
    {
      icon: <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Audio haute qualité",
      description: "Son spatial 3D et audio immersif"
    },
    {
      icon: <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Vitesse variable",
      description: "Ajustez la vitesse de 0.5x à 3x"
    }
  ];

  const cartCount = Object.values(cart).filter(Boolean).length;

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Cart Indicator */}
      {cartCount > 0 && (
        <div className="fixed top-2 right-2 sm:top-4 sm:right-4 bg-blue-600 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg z-50 flex items-center gap-2 animate-bounce text-xs sm:text-base">
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-semibold">{cartCount} article(s)</span>
        </div>
      )}

      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        {/* Header with stats */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4 sm:mb-6 border border-blue-100">
            <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base">SECTION AUDIO PRÉMIUM</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              L'expérience audio ultime
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
            Découvrez pourquoi <span className="font-bold text-blue-600">85% de nos utilisateurs</span> 
            adoptent nos livres audio premium pour une expérience de lecture transformée.
          </p>
          
          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">10K+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Livres audio</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Narrateurs pro</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">24h</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Écoute continue</div>
            </div>
          </div>
        </div>

        {/* Featured Audio Books Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
              Nos <span className="text-blue-600">livres audio populaires</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600">Les titres les plus écoutés par notre communauté</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {audioBooks.map((book) => (
              <div 
                key={book.id} 
                className={`bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-md hover:shadow-xl transition-all duration-300 border group ${
                  cart[book.id] ? 'border-green-400 bg-green-50' : 'border-gray-100'
                }`}
              >
                {/* Animation de confirmation */}
                {addedBooks[book.id] && (
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 animate-fadeIn">
                    <div className="bg-green-500 text-white p-1 sm:p-1.5 rounded-full shadow-lg">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                )}

                <div className="relative mb-2 sm:mb-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden aspect-square">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-3xl sm:text-4xl bg-gradient-to-br from-blue-50 to-purple-50">
                    🎧
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-600 text-white text-[8px] sm:text-[10px] font-semibold rounded">
                      {book.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
                    {book.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-1">{book.author}</p>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <span className="text-gray-500">{book.duration}</span>
                    <div className="flex items-center">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400 mr-0.5 sm:mr-1" />
                      <span className="text-gray-700">{book.rating}</span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-blue-600 pt-1">
                    {book.priceFCFA.toLocaleString()} FCFA
                  </div>
                  
                  {/* Bouton Ajouter au panier */}
                  <button
                    onClick={() => handleCartToggle(book.id)}
                    className={`w-full mt-2 px-2 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded transition-all duration-300 flex items-center justify-center gap-1 font-medium ${
                      cart[book.id]
                        ? 'bg-green-100 text-green-700 border border-green-300 hover:bg-green-200'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {cart[book.id] ? (
                      <>
                        <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Ajouté</span>
                        <span className="sm:hidden">✓</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Ajouter</span>
                        <span className="sm:hidden">+</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Voir tous les livres audio
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-900">
            Fonctionnalités <span className="text-blue-600">audio premium</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-3 sm:mb-4">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App showcase */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Application mobile <span className="text-blue-400">optimisée</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Emportez votre bibliothèque audio partout avec vous. Téléchargez notre application 
                disponible sur iOS et Android pour une expérience d'écoute sans interruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center text-sm sm:text-base">
                  <div className="mr-2 sm:mr-3">📱</div>
                  App Store
                </button>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center text-sm sm:text-base">
                  <div className="mr-2 sm:mr-3">🤖</div>
                  Google Play
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-2 sm:mr-3" />
                  <div>
                    <div className="font-bold text-sm sm:text-base">Écoute en cours</div>
                    <div className="text-xs sm:text-sm text-gray-300">3h45 écoulées aujourd'hui</div>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {['Littérature classique', 'Développement personnel', 'Science-fiction'].map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                          📚
                        </div>
                        <div>
                          <div className="font-medium text-xs sm:text-sm">{category}</div>
                          <div className="text-[10px] sm:text-xs text-gray-400">En cours d'écoute</div>
                        </div>
                      </div>
                      <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

export default AudioBooks;