import React, { useState } from 'react';
import { Star, Shield, Truck, Clock, BookOpen, Users, ShoppingCart, Check } from 'lucide-react';

const whyChooseUsBooks = [
  {
    id: 101,
    title: "Clean Code",
    author: "Robert C. Martin",
    priceFCFA: 20000,
    cover: "/src/assets/images/informatique/clean-code.jpg",
    category: "Informatique",
    rating: 4.9
  },
  {
    id: 201,
    title: "The Lean Startup",
    author: "Eric Ries",
    priceFCFA: 20000,
    cover: "/src/assets/images/business/lean-startup.jpg",
    category: "Business",
    rating: 4.7
  },
  {
    id: 301,
    title: "Atomic Habits",
    author: "James Clear",
    priceFCFA: 20000,
    cover: "/src/assets/images/developpement-personnel/atomic-habits.jpg",
    category: "Développement Personnel",
    rating: 4.8
  },
  {
    id: 401,
    title: "1984",
    author: "George Orwell",
    priceFCFA: 12000,
    cover: "/src/assets/images/romans-fiction/984.jpg",
    category: "Fiction",
    rating: 4.9
  },
  {
    id: 601,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    priceFCFA: 18000,
    cover: "/src/assets/images/sciences-nature/sapiens.jpg",
    category: "Sciences",
    rating: 4.8
  },
  {
    id: 202,
    title: "Zero to One",
    author: "Peter Thiel",
    priceFCFA: 20000,
    cover: "/src/assets/images/business/zero-to-one.jpg",
    category: "Business",
    rating: 4.6
  },
  {
    id: 302,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    priceFCFA: 20000,
    cover: "/src/assets/images/developpement-personnel/power-of-now.jpg",
    category: "Développement Personnel",
    rating: 4.7
  },
  {
    id: 102,
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    priceFCFA: 23000,
    cover: "/src/assets/images/informatique/pragmatic-programmer.jpg",
    category: "Informatique",
    rating: 4.8
  },
  {
    id: 701,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    priceFCFA: 19500,
    cover: "/src/assets/images/histoire-geographie/guns-germs-steel.jpg",
    category: "Histoire",
    rating: 4.7
  },
  {
    id: 501,
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    priceFCFA: 14000,
    cover: "/src/assets/images/arts-creativite/steal-like-artist.jpg",
    category: "Arts",
    rating: 4.5
  },
  {
    id: 801,
    title: "Salt, Fat, Acid, Heat",
    author: "Samin Nosrat",
    priceFCFA: 22000,
    cover: "/src/assets/images/cuisine-gastronomie/salt-fat-acid-heat.jpg",
    category: "Cuisine",
    rating: 4.8
  },
  {
    id: 901,
    title: "How Not to Die",
    author: "Michael Greger",
    priceFCFA: 18000,
    cover: "/src/assets/images/sante-bien-etre/how-not-to-die.jpg",
    category: "Santé",
    rating: 4.6
  },
  {
    id: 1001,
    title: "Starting Strength",
    author: "Mark Rippetoe",
    priceFCFA: 23000,
    cover: "/src/assets/images/sport-fitness/starting-strength.jpg",
    category: "Sport",
    rating: 4.7
  },
  {
    id: 1101,
    title: "This Is Your Brain on Music",
    author: "Daniel Levitin",
    priceFCFA: 16500,
    cover: "/src/assets/images/musique-audio/brain-on-music.jpg",
    category: "Musique",
    rating: 4.5
  },
  {
    id: 1201,
    title: "Understanding Exposure",
    author: "Bryan Peterson",
    priceFCFA: 19500,
    cover: "/src/assets/images/photographie/understanding-exposure.jpg",
    category: "Photographie",
    rating: 4.7
  }
];

const WhyChooseUs = () => {
  const [cart, setCart] = useState([]);
  const [addedBooks, setAddedBooks] = useState({});

  const addToCart = (book) => {
    setCart([...cart, book]);
    setAddedBooks({ ...addedBooks, [book.id]: true });
    
    setTimeout(() => {
      setAddedBooks({ ...addedBooks, [book.id]: false });
    }, 2000);
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Garantie de Qualité",
      description: "Tous nos livres sont des éditions originales avec une garantie de qualité à 100%."
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Livraison Rapide",
      description: "Livraison gratuite en 24-48h à Dakar et 3-5 jours dans les autres régions."
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Support 24/7",
      description: "Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos questions."
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "+100,000 Livres",
      description: "La plus grande collection de livres francophones en Afrique de l'Ouest."
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Club de Lecture",
      description: "Rejoignez notre communauté de lecteurs avec des événements mensuels."
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Meilleurs Prix",
      description: "Nous garantissons les meilleurs prix avec une politique de remboursement sous 30 jours."
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Cart Indicator */}
        {cart.length > 0 && (
          <div className="fixed top-2 right-2 sm:top-4 sm:right-4 bg-sky-500 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg z-50 flex items-center gap-2 animate-bounce text-xs sm:text-base">
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold">{cart.length} article(s)</span>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Pourquoi Choisir <span className="text-sky-500">LireAfrique</span> ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Découvrez notre sélection exclusive de best-sellers et bénéficiez d'une expérience d'achat unique
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-sky-100"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 text-sky-500 rounded-lg mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Books Section */}
        <div className="mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Nos <span className="text-sky-500">Best-Sellers</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Les livres les plus populaires de notre collection
              </p>
            </div>
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300 text-sm sm:text-base">
              Voir Tous
            </button>
          </div>

          {/* Books Grid - Optimisé pour mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {whyChooseUsBooks.map((book) => (
              <div 
                key={book.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-sky-100 flex flex-col"
              >
                {/* Book Cover */}
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-gradient-to-br from-sky-100 to-sky-50 flex-shrink-0">
                  <img 
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center"><svg class="w-12 h-12 sm:w-16 sm:h-16 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div>`;
                    }}
                  />
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-sky-500 text-white text-[10px] sm:text-xs font-semibold rounded">
                      {book.category}
                    </span>
                  </div>
                </div>

                {/* Book Details */}
                <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
                  <h4 className="font-bold text-gray-900 mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                    {book.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-1 sm:mb-2 line-clamp-1">
                    {book.author}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ${
                            i < Math.floor(book.rating) 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-600 ml-1">
                      {book.rating}
                    </span>
                  </div>

                  {/* Price and Action */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2 mt-auto">
                    <div>
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 block">
                        {book.priceFCFA.toLocaleString()}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-500">FCFA</span>
                    </div>
                    <button 
                      onClick={() => addToCart(book)}
                      className={`w-full sm:w-auto px-2 py-1 sm:px-3 sm:py-1.5 text-white text-[10px] sm:text-xs rounded transition-all duration-300 flex items-center justify-center gap-1 ${
                        addedBooks[book.id] 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-sky-500 hover:bg-sky-600'
                      }`}
                    >
                      {addedBooks[book.id] ? (
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
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">50,000+</div>
              <div className="text-xs sm:text-sm md:text-base text-sky-100">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">100,000+</div>
              <div className="text-xs sm:text-sm md:text-base text-sky-100">Livres Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">24h</div>
              <div className="text-xs sm:text-sm md:text-base text-sky-100">Livraison Express</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-sky-100">Taux de Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;