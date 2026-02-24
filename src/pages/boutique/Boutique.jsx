import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  Search,
  BookOpen,
  Headphones,
  Leaf,
  Award,
  Shield,
  ShoppingCart,
  Menu,
  X,
  DollarSign,
  Euro,
  Coins,
  ChevronDown,
  Check,
  User,
  Eye,
  TrendingUp,
  Package,
  FileText,
  Clock,
  ArrowRight
} from "lucide-react";

function Boutique() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currency, setCurrency] = useState("FCFA");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [addedProducts, setAddedProducts] = useState({});
  const navigate = useNavigate();

  const { addToCart, cart: globalCart } = useCart();

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
      category: categories[selectedCategory]?.name,
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
    // Crée un tableau d'images pour ce produit avec les 3 vues
    const productImages = [
      `/images/livre${product.id}/livre${product.id}_1.png`,
      `/images/livre${product.id}/livre${product.id}_2.png`,
      `/images/livre${product.id}/livre${product.id}_3.png`
    ];
    
    // Crée une copie propre du produit avec TOUTES les images
    const cleanProduct = {
      id: product.id,
      titre: product.titre,
      auteur: product.auteur,
      desc: product.desc,
      prixFCFA: product.prixFCFA,
      image: product.image,
      images: productImages, // Ajout du tableau complet d'images
      format: product.format,
      pages: product.pages,
      stock: product.stock,
      type: product.type,
      isbn: product.isbn,
      datePublication: product.datePublication,
      langue: product.langue
    };
    
    // Crée une copie propre de la catégorie
    const currentCat = categories[selectedCategory];
    const cleanCategory = {
      id: currentCat.id,
      name: currentCat.name,
      count: currentCat.count,
      description: currentCat.description,
      couleur: currentCat.couleur
    };
    
    // Navigation vers la page de détails
    navigate(`/produit/${product.id}`, {
      state: { 
        product: cleanProduct,
        category: cleanCategory,
        currency: currency
      }
    });
  };

  const categories = [
    {
      id: 0,
      name: "Livres Doctrinaux & Manuels Clinique",
      icon: <BookOpen className="w-5 h-5" />,
      count: 16, // Mise à jour de 11 à 16
      description: "Ouvrages de référence sur la Médecine Traditionnelle des Handicapés Spirituels",
      couleur: "from-blue-500 to-blue-600",
      produits: [
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
        // Nouveaux livres 12 à 16
        {
          id: 12,
          titre: "Religion Chinoise face à la Sorcellerie",
          auteur: "Centre MTHS",
          desc: "Analyse comparée des traditions spirituelles chinoises et africaines face aux phénomènes occultes.",
          prixFCFA: 6500,
          image: "/images/livre12/livre12_1.png",
          format: ["Papier", "PDF"],
          pages: 310,
          stock: 20,
          type: "Livre",
          isbn: "978-2-954-12354-8",
          datePublication: "2023",
          langue: "Français"
        },
        {
          id: 13,
          titre: "La vie apres la Mort",
          auteur: "Centre MTHS",
          desc: "Enquête sur les conceptions africaines de l'au-delà et leur intégration dans la foi chrétienne.",
          prixFCFA: 6500,
          image: "/images/livre13/livre13_1.png",
          format: ["Papier", "PDF"],
          pages: 310,
          stock: 20,
          type: "Livre",
          isbn: "978-2-954-12355-5",
          datePublication: "2023",
          langue: "Français"
        },
        {
          id: 14,
          titre: "Ange ou Demon",
          auteur: "Centre MTHS",
          desc: "Discernement des esprits dans la tradition chrétienne africaine.",
          prixFCFA: 6500,
          image: "/images/livre14/livre14_1.png",
          format: ["Papier", "PDF"],
          pages: 310,
          stock: 20,
          type: "Livre",
          isbn: "978-2-954-12356-2",
          datePublication: "2023",
          langue: "Français"
        },
        {
          id: 15,
          titre: "Chretien africain et la maladie",
          auteur: "Centre MTHS",
          desc: "Comprendre et guérir selon une approche holistique chrétienne-africaine.",
          prixFCFA: 6500,
          image: "/images/livre15/livre15_1.png",
          format: ["Papier", "PDF"],
          pages: 310,
          stock: 20,
          type: "Livre",
          isbn: "978-2-954-12357-9",
          datePublication: "2023",
          langue: "Français"
        },
        {
          id: 16,
          titre: "Comment vivre ensemble avec les sorciers",
          auteur: "Centre MTHS",
          desc: "Stratégies de coexistence et de neutralisation dans la communauté.",
          prixFCFA: 6500,
          image: "/images/livre16/livre16_1.png",
          format: ["Papier", "PDF"],
          pages: 310,
          stock: 20,
          type: "Livre",
          isbn: "978-2-954-12358-6",
          datePublication: "2023",
          langue: "Français"
        }
      ]
    },
    {
      id: 1,
      name: "Supports Audio & Podcasts",
      icon: <Headphones className="w-5 h-5" />,
      count: 8,
      description: "Enregistrements audio de prières, enseignements et méditations",
      couleur: "from-purple-500 to-purple-600",
      produits: []
    },
    {
      id: 2,
      name: "Produits Naturels Certifiés",
      icon: <Leaf className="w-5 h-5" />,
      count: 12,
      description: "Plantes médicinales, huiles essentielles et remèdes traditionnels",
      couleur: "from-green-500 to-green-600",
      produits: []
    },
    {
      id: 3,
      name: "Kit de Délivrance & Purification",
      icon: <Award className="w-5 h-5" />,
      count: 6,
      description: "Kits complets pour les rituels de purification et délivrance",
      couleur: "from-cyan-500 to-cyan-600",
      produits: []
    }
  ];

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar - Categories List */}
        <aside
          className={`
            fixed lg:sticky lg:top-8 left-0 h-screen lg:h-auto w-full lg:w-80 bg-white lg:border-r border-blue-100 overflow-y-auto z-40
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <div className="p-6 border-b border-blue-200 sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Catégories MTHS</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher une catégorie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-200 focus:border-blue-400 focus:outline-none text-sm bg-blue-50"
              />
            </div>
          </div>

          {/* Sélecteur de devise */}
          <div className="p-6 border-b border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Devise</label>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="w-full flex items-center justify-between p-3 bg-blue-50 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">
                    {currencyIcons[currency]}
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-blue-900">{currencyNames[currency]}</div>
                  </div>
                </div>
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
                        <div className="text-left">
                          <div className="font-medium">{name}</div>
                        </div>
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

          {/* Liste des catégories */}
          <nav className="p-6">
            {filteredCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full text-left p-4 rounded-xl mb-3 transition-all duration-200
                  ${selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.couleur} text-white shadow-md`
                    : 'hover:bg-blue-50 text-gray-700 border border-blue-100'
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`
                      p-2 rounded-lg
                      ${selectedCategory === category.id ? 'bg-white/20' : 'bg-blue-100'}
                    `}
                  >
                    <div className={selectedCategory === category.id ? 'text-white' : 'text-blue-600'}>
                      {category.icon}
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                    <p className={`text-xs ${selectedCategory === category.id ? 'text-blue-100' : 'text-blue-600'}`}>
                      {category.count} produit{category.count > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content - Products Display */}
        <main className="flex-1 lg:pl-8">
          {currentCategory && (
            <>
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${currentCategory.couleur} text-white`}>
                      {currentCategory.icon}
                    </div>
                    <div>
                      <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">
                        {currentCategory.name}
                      </h1>
                      <p className="text-gray-600 mt-1 text-sm lg:text-base">{currentCategory.description}</p>
                    </div>
                  </div>
                  
                  {/* Badge de devise active */}
                  <div className="flex items-center space-x-3 bg-white border border-blue-200 rounded-xl p-3 shadow-sm">
                    <div className="text-blue-600">
                      {currencyIcons[currency]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-900">Devise : {currencyNames[currency]}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {currentCategory.count} produit{currentCategory.count > 1 ? 's' : ''} disponible{currentCategory.count > 1 ? 's' : ''}
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Livraison Cameroun : 3-5 jours</span>
                  </span>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.produits.map((produit) => (
                  <div
                    key={produit.id}
                    className={`
                      relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border flex flex-col h-full
                      ${isInCart(produit.id) 
                        ? 'border-green-400 bg-green-50/30' 
                        : 'border-blue-100 hover:border-blue-300'
                      }
                      group hover:scale-[1.02]
                    `}
                  >
                    {/* Animation de confirmation */}
                    {addedProducts[produit.id] && (
                      <div className="absolute top-3 right-3 z-10 animate-bounce">
                        <div className="bg-green-500 text-white p-1.5 rounded-full shadow-lg">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-t-xl overflow-hidden">
                      <img
                        src={produit.image}
                        alt={produit.titre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "/images/default-book.jpg";
                        }}
                      />
                      
                      {/* Type badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
                          {produit.type}
                        </span>
                      </div>
                      
                      {/* Stock badge */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-medium px-2 py-1.5 rounded-full">
                        <div className="flex items-center gap-1">
                          <Package className="w-3 h-3" />
                          <span>{produit.stock} restant{produit.stock > 1 ? 's' : ''}</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 p-5">
                      <h3 className="font-bold text-blue-900 text-lg mb-3 line-clamp-2 h-14">
                        {produit.titre}
                      </h3>
                      
                      {/* Auteur */}
                      <div className="flex items-center gap-2 text-blue-600 mb-4">
                        <User className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm truncate">{produit.auteur}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
                        {produit.desc}
                      </p>
                      
                      {/* Format et pages */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-lg">
                          <FileText className="w-3 h-3" />
                          {produit.format?.join(", ")}
                        </div>
                        {produit.pages && (
                          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg">
                            <Clock className="w-3 h-3" />
                            {produit.pages} pages
                          </div>
                        )}
                      </div>

                      {/* Prix */}
                      <div className="mt-2">
                        <div className="text-xl font-bold text-blue-700">
                          {formatPrice(produit.prixFCFA, currency)}
                        </div>
                        {currency !== "FCFA" && (
                          <div className="text-xs text-gray-500 mt-1">
                            ≈ {produit.prixFCFA.toLocaleString('fr-FR')} FCFA
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="p-5 pt-0">
                      <div className="flex flex-col sm:flex-row gap-3">
                        {/* Bouton Voir détail */}
                        <button
                          onClick={() => handleViewDetails(produit)}
                          className="flex items-center justify-center gap-2 text-sm px-4 py-3 rounded-lg font-medium border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors flex-1 group/btn"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Voir détail</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        
                        {/* Bouton Ajouter au panier */}
                        <button
                          onClick={() => handleAddToCart(produit)}
                          className={`
                            flex items-center justify-center gap-2 text-sm px-4 py-3 rounded-lg font-medium transition-all duration-300 flex-1
                            ${isInCart(produit.id)
                              ? 'bg-green-100 text-green-700 border-2 border-green-300 hover:bg-green-200'
                              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:scale-105'
                            }
                          `}
                        >
                          {isInCart(produit.id) ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Ajouté</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              <span>Panier</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message si pas de produits */}
              {currentCategory.produits.length === 0 && (
                <div className="text-center py-20">
                  <BookOpen className="w-24 h-24 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Aucun produit disponible</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Cette catégorie est en préparation. Les produits seront disponibles prochainement.
                  </p>
                </div>
              )}

              {/* Engagement éthique */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Notre Engagement Éthique</h3>
                      <p className="text-gray-600 text-sm max-w-2xl">
                        Aucune promesse magique • Complémentarité avec les soins médicaux • 
                        Conformité à la législation camerounaise • Produits 100% naturels et certifiés
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Satisfaction client : 98%
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Boutique;