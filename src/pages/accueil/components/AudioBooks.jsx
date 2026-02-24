import React, { useState } from "react";
import {
  Star,
  PlayCircle,
  Headphones,
  Download,
  Volume2,
  CheckCircle,
  ShoppingCart,
  Check,
  Clock,
  User,
  Mic,
  Music,
  ChevronDown,
  Coins,
  DollarSign,
  Euro,
  Search
} from "lucide-react";
import { useCart } from '../../../context/CartContext';

function AudioBooks() {
  const { addToCart, cart: globalCart } = useCart();
  const [addedBooks, setAddedBooks] = useState({});
  const [currency, setCurrency] = useState("FCFA");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Taux de change
  const exchangeRates = {
    "FCFA": 1,
    "USD": 0.00165,
    "EUR": 0.00152
  };

  const currencyIcons = {
    "FCFA": <Coins className="w-4 h-4" />,
    "USD": <DollarSign className="w-4 h-4" />,
    "EUR": <Euro className="w-4 h-4" />
  };

  const currencyNames = {
    "FCFA": "Franc CFA",
    "USD": "Dollar US",
    "EUR": "Euro"
  };

  const formatPrice = (priceFCFA, currencyType) => {
    const convertedPrice = priceFCFA * exchangeRates[currencyType];
    switch(currencyType) {
      case "FCFA": return `${convertedPrice.toLocaleString('fr-FR')} FCFA`;
      case "USD": return `$${convertedPrice.toFixed(2)}`;
      case "EUR": return `€${convertedPrice.toFixed(2)}`;
      default: return `${convertedPrice.toLocaleString('fr-FR')} FCFA`;
    }
  };

  // Données de base des livres
  const livresSource = [
    {
      id: 1,
      titre: "Chretien africain face a la sorcellerie",
      auteur: "Centre MTHS",
      desc: "Manuel complet de la Médecine Traditionnelle des Handicapés Spirituels.",
      prixFCFA: 6500,
      image: "/images/livre1/livre1_1.png",
      format: ["Papier", "PDF"],
      pages: 320,
      stock: 50,
      type: "Livre"
    },
    {
      id: 2,
      titre: "Comment reconnaitre a vur d'oeil un sorcier",
      auteur: "Centre MTHS",
      desc: "Étude approfondie du rite SO'O dans sa version christianisée.",
      prixFCFA: 6500,
      image: "/images/livre2/livre2_1.png",
      format: ["Papier", "PDF", "EPUB"],
      pages: 240,
      stock: 35,
      type: "Livre"
    },
    {
      id: 3,
      titre: "Comment se soigner des persecutions spirituelles",
      auteur: "Centre MTHS",
      desc: "Guide des remèdes traditionnels améliorés et leur intégration.",
      prixFCFA: 6500,
      image: "/images/livre3/livre3_1.png",
      format: ["Papier"],
      pages: 280,
      stock: 40,
      type: "Livre"
    },
    {
      id: 4,
      titre: "A la rencontre de JPSSA",
      auteur: "Centre MTHS",
      desc: "Méthodologie du diagnostic des handicaps spirituels.",
      prixFCFA: 6500,
      image: "/images/livre4/livre4_1.png",
      format: ["PDF", "EPUB"],
      pages: 180,
      stock: 60,
      type: "E-book"
    },
    {
      id: 5,
      titre: "Le musulman face a la sorcellerie",
      auteur: "Centre MTHS",
      desc: "Guide pratique des rites de purification selon la tradition Béti.",
      prixFCFA: 6500,
      image: "/images/livre5/livre5_1.png",
      format: ["Papier", "PDF"],
      pages: 210,
      stock: 45,
      type: "Livre"
    },
    {
      id: 6,
      titre: "Les dix commendements de satan",
      auteur: "Centre MTHS",
      desc: "Fondements théologiques de l'intégration culturelle africaine.",
      prixFCFA: 6500,
      image: "/images/livre6/livre6_1.png",
      format: ["Papier"],
      pages: 290,
      stock: 30,
      type: "Livre"
    },
    {
      id: 7,
      titre: "La transmission de le sorcellerie au sein d'une famille",
      auteur: "Centre MTHS",
      desc: "Approche intégrative de la guérison selon la révélation de 1979.",
      prixFCFA: 6500,
      image: "/images/livre7/livre7_1.png",
      format: ["Papier", "PDF"],
      pages: 350,
      stock: 25,
      type: "Livre"
    },
    {
      id: 8,
      titre: "La vie spirituel du sorcier-univer astral de la sorcelerie",
      auteur: "Centre MTHS",
      desc: "Analyse et solutions pour briser les chaînes familiales.",
      prixFCFA: 6500,
      image: "/images/livre8/livre8_1.png",
      format: ["Papier"],
      pages: 230,
      stock: 40,
      type: "Livre"
    },
    {
      id: 9,
      titre: "Protocole therapeutique MTHS",
      auteur: "Centre MTHS",
      desc: "Interface entre psychologie moderne et spiritualité africaine.",
      prixFCFA: 6500,
      image: "/images/livre9/livre9_1.png",
      format: ["PDF", "EPUB"],
      pages: 260,
      stock: 35,
      type: "E-book"
    },
    {
      id: 10,
      titre: "La guerre des spiritualités en Afrique",
      auteur: "Centre MTHS",
      desc: "Rites de passage christianisés pour les étapes de la vie.",
      prixFCFA: 6500,
      image: "/images/livre10/livre10_1.png",
      format: ["Papier"],
      pages: 200,
      stock: 50,
      type: "Livre"
    },
    {
      id: 11,
      titre: "Chretien africain face a la maladi",
      auteur: "Centre MTHS",
      desc: "Protocoles d'exorcisme selon la tradition chrétienne africaine.",
      prixFCFA: 6500,
      image: "/images/livre11/livre11_1.png",
      format: ["Papier", "PDF"],
      pages: 310,
      stock: 20,
      type: "Livre"
    }
  ];

  // Transformation en livres audio
  const audioBooks = livresSource.map((livre, index) => {
    const minutesTotales = livre.pages * 2;
    const heures = Math.floor(minutesTotales / 60);
    const minutes = minutesTotales % 60;
    const duree = `${heures}h ${minutes.toString().padStart(2, '0')}m`;

    const narrateurs = ["Pierre Martin", "Sophie Durand", "Marc Leclerc", "Isabelle Moreau", "Thomas Bernard", "Catherine Petit"];
    const narrateur = narrateurs[index % narrateurs.length];

    const note = (4 + Math.random()).toFixed(1);
    const ecoutes = Math.floor(Math.random() * 25000) + 5000;

    return {
      id: `audio-${livre.id}`,
      title: livre.titre,
      author: livre.auteur,
      description: livre.desc,
      priceFCFA: livre.prixFCFA,
      cover: livre.image,
      category: "Livre audio",
      narrator: narrateur,
      duration: duree,
      rating: parseFloat(note),
      listeners: ecoutes,
      pages: livre.pages,
      stock: livre.stock,
      type: livre.type
    };
  });

  // Synthèse vocale
  const speakTitle = (title) => {
    if (!window.speechSynthesis) {
      alert("La synthèse vocale n'est pas supportée par votre navigateur.");
      return;
    }
    window.speechSynthesis.cancel(); // Arrête toute lecture en cours
    const utterance = new SpeechSynthesisUtterance(title);
    utterance.lang = "fr-FR";
    utterance.rate = 0.9; // Un peu plus lent pour une meilleure compréhension
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleAddToCart = (book) => {
    addToCart({
      id: book.id,
      type: 'audiobook',
      title: book.title,
      author: book.author,
      narrator: book.narrator,
      price: book.priceFCFA,
      cover: book.cover,
      category: book.category,
      duration: book.duration,
      rating: book.rating
    });

    setAddedBooks(prev => ({ ...prev, [book.id]: true }));
    setTimeout(() => {
      setAddedBooks(prev => ({ ...prev, [book.id]: false }));
    }, 2000);
  };

  const isInCart = (bookId) => {
    return globalCart.some(item => item.id === bookId && item.type === 'audiobook');
  };

  const filteredBooks = audioBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Éléments d'arrière-plan */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        {/* En-tête */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4 sm:mb-6 border border-blue-100">
            <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base">SECTION AUDIO PREMIUM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Les livres MTHS en version audio
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
            Écoutez les enseignements du Centre MTHS où que vous soyez, avec des narrateurs professionnels et une qualité audio exceptionnelle.
          </p>

          {/* Barre de recherche et sélecteur de devise */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher un livre audio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-200 focus:border-blue-400 focus:outline-none text-sm bg-blue-50"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-blue-50 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="text-blue-600">{currencyIcons[currency]}</div>
                <span className="font-medium text-blue-900">{currencyNames[currency]}</span>
                <ChevronDown className={`w-4 h-4 text-blue-500 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCurrencyOpen && (
                <>
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-blue-200 rounded-lg shadow-lg z-50">
                    {Object.entries(currencyNames).map(([key, name]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrency(key);
                          setIsCurrencyOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 p-3 hover:bg-blue-50 transition-colors ${
                          currency === key ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        <div className={currency === key ? 'text-blue-600' : 'text-blue-500'}>
                          {currencyIcons[key]}
                        </div>
                        <span className="font-medium">{name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="fixed inset-0 z-40" onClick={() => setIsCurrencyOpen(false)} />
                </>
              )}
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">{audioBooks.length}</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Livres audio</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">15+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Narrateurs pro</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">+200h</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">d'écoute</div>
            </div>
          </div>
        </div>

        {/* Grille des livres audio */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
              Nos <span className="text-blue-600">livres audio MTHS</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600">Toute la sagesse du Centre MTHS à écouter</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className={`bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-md hover:shadow-xl transition-all duration-300 border group relative ${
                  isInCart(book.id) ? 'border-green-400 bg-green-50' : 'border-gray-100'
                }`}
              >
                {/* Animation de confirmation */}
                {addedBooks[book.id] && (
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 animate-fadeIn z-10">
                    <div className="bg-green-500 text-white p-1 sm:p-1.5 rounded-full shadow-lg">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                )}

                {/* Couverture avec lecture audio */}
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
                  {/* Overlay de lecture - cliquez pour entendre le titre */}
                  <div
                    onClick={() => speakTitle(book.title)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    title={`Écouter le titre : ${book.title}`}
                  >
                    <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-600 text-white text-[8px] sm:text-[10px] font-semibold rounded">
                      Audio
                    </span>
                  </div>
                </div>

                {/* Informations du livre */}
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
                  <div className="flex items-center text-[9px] sm:text-[10px] text-gray-500 gap-1">
                    <Mic className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="truncate">{book.narrator}</span>
                  </div>
                  <div className="flex items-center text-[9px] sm:text-[10px] text-gray-500 gap-1">
                    <Headphones className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>{book.listeners.toLocaleString()} écoutes</span>
                  </div>

                  {/* Prix */}
                  <div className="text-xs sm:text-sm font-bold text-blue-600 pt-1">
                    {formatPrice(book.priceFCFA, currency)}
                  </div>

                  {/* Bouton Ajouter au panier */}
                  <button
                    onClick={() => handleAddToCart(book)}
                    className={`w-full mt-2 px-2 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded transition-all duration-300 flex items-center justify-center gap-1 font-medium ${
                      isInCart(book.id)
                        ? 'bg-green-100 text-green-700 border border-green-300 hover:bg-green-200'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {isInCart(book.id) ? (
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

          {/* Message si aucun résultat */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-16 sm:py-20">
              <Headphones className="w-16 h-16 sm:w-20 sm:h-20 text-blue-200 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2">Aucun livre audio trouvé</h3>
              <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
                Aucun livre audio ne correspond à votre recherche. Essayez d'autres termes.
              </p>
            </div>
          )}

          {/* Bouton Voir tous */}
          <div className="text-center mt-6 sm:mt-8">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Voir tous les livres audio
            </button>
          </div>
        </div>

        {/* Section des fonctionnalités */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-900">
            Fonctionnalités <span className="text-blue-600">audio premium</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-3 sm:mb-4">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vitrine application */}
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
                  {['Chrétien africain...', 'Comment reconnaître...', 'La guerre des...'].map((title, index) => (
                    <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                          📚
                        </div>
                        <div>
                          <div className="font-medium text-xs sm:text-sm">{title}</div>
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
      <style>{`
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