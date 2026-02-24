import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import {
  Search,
  BookOpen,
  ShoppingCart,
  Check,
  User,
  Eye,
  ArrowRight,
  Package,
  FileText,
  Clock,
  DollarSign,
  Euro,
  Coins,
  ChevronDown
} from 'lucide-react';

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const { addToCart, cart: globalCart } = useCart();
  
  const [currency, setCurrency] = useState("FCFA");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [addedProducts, setAddedProducts] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

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
      case "FCFA":
        return `${convertedPrice.toLocaleString('fr-FR')} FCFA`;
      case "USD":
        return `$${convertedPrice.toFixed(2)}`;
      case "EUR":
        return `€${convertedPrice.toFixed(2)}`;
      default:
        return `${convertedPrice.toLocaleString('fr-FR')} FCFA`;
    }
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      type: 'mths-product',
      title: product.titre,
      author: product.auteur || "Centre MTHS",
      price: product.prixFCFA,
      cover: product.image,
      category: "Livres MTHS",
      format: product.format?.[0] || "Physique",
      pages: product.pages,
      stock: product.stock
    });
    
    setAddedProducts(prev => ({
      ...prev,
      [product.id]: true
    }));
    
    setTimeout(() => {
      setAddedProducts(prev => ({
        ...prev,
        [product.id]: false
      }));
    }, 2000);
  };

  const isInCart = (productId) => {
    return globalCart.some(item => item.id === productId && item.type === 'mths-product');
  };

  const handleViewDetails = (product) => {
    const productImages = [
      `/images/livre${product.id}/livre${product.id}_1.png`,
      `/images/livre${product.id}/livre${product.id}_2.png`,
      `/images/livre${product.id}/livre${product.id}_3.png`
    ];
    
    const cleanProduct = {
      id: product.id,
      titre: product.titre,
      auteur: product.auteur,
      desc: product.desc,
      prixFCFA: product.prixFCFA,
      image: product.image,
      images: productImages,
      format: product.format,
      pages: product.pages,
      stock: product.stock,
      type: product.type,
      isbn: product.isbn,
      datePublication: product.datePublication,
      langue: product.langue
    };
    
    navigate(`/produit/${product.id}`, {
      state: { 
        product: cleanProduct,
        currency: currency
      }
    });
  };

  const livres = [
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
      type: "Livre",
      isbn: "978-2-954-12345-6",
      datePublication: "2023",
      langue: "Français"
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
      type: "Livre",
      isbn: "978-2-954-12346-3",
      datePublication: "2023",
      langue: "Français"
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
      type: "Livre",
      isbn: "978-2-954-12347-0",
      datePublication: "2023",
      langue: "Français"
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
      type: "E-book",
      datePublication: "2023",
      langue: "Français"
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
      type: "Livre",
      isbn: "978-2-954-12348-7",
      datePublication: "2023",
      langue: "Français"
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
      type: "Livre",
      isbn: "978-2-954-12349-4",
      datePublication: "2023",
      langue: "Français"
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
      type: "Livre",
      isbn: "978-2-954-12350-0",
      datePublication: "2023",
      langue: "Français"
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
      type: "Livre",
      isbn: "978-2-954-12351-7",
      datePublication: "2023",
      langue: "Français"
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
      type: "E-book",
      datePublication: "2023",
      langue: "Français"
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
      type: "Livre",
      isbn: "978-2-954-12352-4",
      datePublication: "2023",
      langue: "Français"
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
      type: "Livre",
      isbn: "978-2-954-12353-1",
      datePublication: "2023",
      langue: "Français"
    },
    {
      id: 12,
      titre: "Religion Chinoise face à la Sorcellerie",
      auteur: "Centre MTHS",
      desc: "Protocoles d'exorcisme selon la tradition chrétienne africaine.",
      prixFCFA: 6500,
      image: "/images/livre12/livre12_1.png",
      format: ["Papier", "PDF"],
      pages: 310,
      stock: 20,
      type: "Livre",
      isbn: "978-2-954-12353-1",
      datePublication: "2023",
      langue: "Français"
    },
    {
      id: 13,
      titre: "La vie apres la Mort",
      auteur: "Centre MTHS",
      desc: "Protocoles d'exorcisme selon la tradition chrétienne africaine.",
      prixFCFA: 6500,
      image: "/images/livre13/livre13_1.png",
      format: ["Papier", "PDF"],
      pages: 310,
      stock: 20,
      type: "Livre",
      isbn: "978-2-954-12353-1",
      datePublication: "2023",
      langue: "Français"
    },
    {
      id: 14,
      titre: "Ange ou Demon",
      auteur: "Centre MTHS",
      desc: "Protocoles d'exorcisme selon la tradition chrétienne africaine.",
      prixFCFA: 6500,
      image: "/images/livre14/livre14_1.png", 
      format: ["Papier", "PDF"],
      pages: 310,
      stock: 20,
      type: "Livre",
      isbn: "978-2-954-12353-1",
      datePublication: "2023",
      langue: "Français"
    },
    {
      id: 15,
      titre: "Chretien africian et la maladie", 
      auteur: "Centre MTHS",
      desc: "Protocoles d'exorcisme selon la tradition chrétienne africaine.",
      prixFCFA: 6500,
      image: "/images/livre15/livre15_1.png",
      format: ["Papier", "PDF"],
      pages: 310,
      stock: 20,
      type: "Livre",
      isbn: "978-2-954-12353-1",
      datePublication: "2023",
      langue: "Français"
    },
    {
      id: 16,
      titre: "Comment vivre ensemble avec les sorciers",
      auteur: "Centre MTHS",
      desc: "j'ai faim jusquaaaa ce n'est meme plus bon",
      prixFCFA: 6500,
      image: "/images/livre16/livre16_1.png",
      format: ["Papier", "PDF"],
      pages: 310,
      stock: 20,
      type: "Livre",
      isbn: "978-2-954-12353-1",
      datePublication: "2023",
      langue: "Français"
    }
    
  ];

  const filteredLivres = livres.filter(livre =>
    livre.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    livre.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    livre.auteur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 sm:mb-3 md:mb-4">
            Collection <span className="text-blue-600">MTHS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Découvrez notre collection complète d'ouvrages sur la Médecine Traditionnelle des Handicapés Spirituels
          </p>

          {/* Search Bar and Currency Selector */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher un livre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-200 focus:border-blue-400 focus:outline-none text-sm bg-blue-50"
              />
            </div>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-blue-50 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="text-blue-600">
                  {currencyIcons[currency]}
                </div>
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
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsCurrencyOpen(false)}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredLivres.map((livre) => (
            <div
              key={livre.id}
              className={`
                relative bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border flex flex-col h-full
                ${isInCart(livre.id) 
                  ? 'border-green-400 bg-green-50/30' 
                  : 'border-blue-100 hover:border-blue-300'
                }
                group hover:scale-[1.02]
              `}
            >
              {/* Animation de confirmation */}
              {addedProducts[livre.id] && (
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 animate-bounce">
                  <div className="bg-green-500 text-white p-1 sm:p-1.5 rounded-full shadow-lg">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              )}

              {/* Book Image */}
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-t-lg sm:rounded-t-xl overflow-hidden">
                <img
                  src={livre.image}
                  alt={livre.titre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/default-book.jpg";
                  }}
                />
                
                {/* Type badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                    {livre.type}
                  </span>
                </div>
                
                {/* Stock badge */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-medium px-2 py-1 sm:px-2 sm:py-1.5 rounded-full">
                  <div className="flex items-center gap-1">
                    <Package className="w-3 h-3" />
                    <span>{livre.stock} restant{livre.stock > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="flex-1 p-3 sm:p-4 md:p-5">
                <h3 className="font-bold text-blue-900 text-sm sm:text-base md:text-lg mb-2 sm:mb-3 line-clamp-2 h-10 sm:h-14">
                  {livre.titre}
                </h3>
                
                {/* Author */}
                <div className="flex items-center gap-2 text-blue-600 mb-2 sm:mb-4">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm truncate">{livre.auteur}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 h-8 sm:h-10">
                  {livre.desc}
                </p>
                
                {/* Format et pages */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
                    <FileText className="w-3 h-3" />
                    {livre.format?.join(", ")}
                  </div>
                  {livre.pages && (
                    <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
                      <Clock className="w-3 h-3" />
                      {livre.pages} pages
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mt-2">
                  <div className="text-base sm:text-lg md:text-xl font-bold text-blue-700">
                    {formatPrice(livre.prixFCFA, currency)}
                  </div>
                  {currency !== "FCFA" && (
                    <div className="text-xs text-gray-500 mt-1">
                      ≈ {livre.prixFCFA.toLocaleString('fr-FR')} FCFA
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-3 sm:p-4 md:p-5 pt-0">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {/* View Details Button */}
                  <button
                    onClick={() => handleViewDetails(livre)}
                    className="flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors flex-1 group/btn"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Voir détail</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(livre)}
                    className={`
                      flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex-1
                      ${isInCart(livre.id)
                        ? 'bg-green-100 text-green-700 border-2 border-green-300 hover:bg-green-200'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:scale-105'
                      }
                    `}
                  >
                    {isInCart(livre.id) ? (
                      <>
                        <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Ajouté</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Panier</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si pas de livres */}
        {filteredLivres.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-blue-200 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2">Aucun livre trouvé</h3>
            <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
              Aucun livre ne correspond à votre recherche. Essayez d'autres termes.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 0.5s ease-in-out 2;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
