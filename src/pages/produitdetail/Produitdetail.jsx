import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../context/CartContext";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  BookOpen,
  User,
  FileText,
  Clock,
  Package,
  Globe,
  Calendar,
  Tag,
  Shield,
  Truck,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Eye,
  Bookmark
} from "lucide-react";

function Produitdetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, cart: globalCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [currency, setCurrency] = useState("FCFA");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const exchangeRates = {
    "FCFA": 1,
    "USD": 0.00165,
    "EUR": 0.00152
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

  // Fonction pour gérer les erreurs d'images
  const handleImageError = (e, imagePath, fallbackImage = "/images/default-book.jpg") => {
    console.warn(`Image non trouvée: ${imagePath}`);
    e.target.src = fallbackImage;
    e.target.onerror = null; // Éviter les boucles infinies
  };

  // Données de test complètes avec résumés uniques
  const allProducts = [
    {
      id: 1,
      titre: "Chretien africain face a la sorcellerie",
      auteur: "Centre MTHS",
      desc: "Manuel complet de la Médecine Traditionnelle des Handicapés Spirituels.",
      prixFCFA: 15000,
      images: [
        "/images/livre1/livre1_1.png",
        "/images/livre1/livre1_2.png",
        "/images/livre1/livre1_3.png"
      ],
      format: ["Papier", "PDF"],
      pages: 320,
      stock: 50,
      type: "Livre",
      isbn: "978-2-954-12345-6",
      datePublication: "2023",
      langue: "Français",
      resume: `Ce manuel fondamental explore l'approche chrétienne africaine face aux phénomènes de sorcellerie. Basé sur 20 ans de recherches ethnologiques, il présente des méthodes concrètes pour identifier et contrer les influences spirituelles négatives tout en préservant les valeurs chrétiennes. Inclut des études de cas documentés dans différentes communautés d'Afrique centrale.`
    },
    {
      id: 2,
      titre: "Comment reconnaitre a vur d'oeil un sorcier",
      auteur: "Centre MTHS",
      desc: "Étude approfondie du rite SO'O dans sa version christianisée.",
      prixFCFA: 10000,
      images: [
        "/images/livre2/livre2_1.png",
        "/images/livre2/livre2_2.png",
        "/images/livre2/livre2_3.png"
      ],
      format: ["Papier", "PDF", "EPUB"],
      pages: 240,
      stock: 35,
      type: "Livre",
      isbn: "978-2-954-12346-3",
      datePublication: "2023",
      langue: "Français",
      resume: `Ouvrage spécialisé dédié aux signes distinctifs et aux comportements révélateurs des personnes impliquées dans la sorcellerie. Méthodologie d'observation développée par les anciens, combinant analyse comportementale, symbolique traditionnelle et discernement spirituel. Contient un guide illustré des marques corporelles traditionnellement associées.`
    },
    {
      id: 3,
      titre: "Comment se soigner des persecutions spirituelles",
      auteur: "Centre MTHS",
      desc: "Guide des remèdes traditionnels améliorés et leur intégration.",
      prixFCFA: 12500,
      images: [
        "/images/livre3/livre3_1.png",
        "/images/livre3/livre3_2.png",
        "/images/livre3/livre3_3.png"
      ],
      format: ["Papier"],
      pages: 280,
      stock: 40,
      type: "Livre",
      isbn: "978-2-954-12347-0",
      datePublication: "2023",
      langue: "Français",
      resume: `Guide thérapeutique complet offrant 47 protocoles de soins contre les persécutions spirituelles. Chaque méthode intègre des plantes médicinales, des prières spécifiques et des rites symboliques. Basé sur des recueils ancestraux réinterprétés selon une éthique chrétienne, avec des dosages précis et des contre-indications.`
    },
    {
      id: 4,
      titre: "A la rencontre de JPSSA",
      auteur: "Centre MTHS",
      desc: "Méthodologie du diagnostic des handicaps spirituels.",
      prixFCFA: 9500,
      images: [
        "/images/livre4/livre4_1.png",
        "/images/livre4/livre4_2.png",
        "/images/livre4/livre4_3.png"
      ],
      format: ["PDF", "EPUB"],
      pages: 180,
      stock: 60,
      type: "E-book",
      datePublication: "2023",
      langue: "Français",
      resume: `Biographie spirituelle et analyse doctrinale de JPSSA, le révélateur de la Médecine MTHS. Explore sa vision, ses expériences mystiques et l'élaboration progressive de sa méthodologie diagnostique. Inclut des témoignages inédits de ses premiers disciples et des documents d'archives.`
    },
    {
      id: 5,
      titre: "Le musulman face a la sorcellerie",
      auteur: "Centre MTHS",
      desc: "Guide pratique des rites de purification selon la tradition Béti.",
      prixFCFA: 11000,
      images: [
        "/images/livre5/livre5_1.png",
        "/images/livre5/livre5_2.png",
        "/images/livre5/livre5_3.png"
      ],
      format: ["Papier", "PDF"],
      pages: 210,
      stock: 45,
      type: "Livre",
      isbn: "978-2-954-12348-7",
      datePublication: "2023",
      langue: "Français",
      resume: `Premier ouvrage adaptant les principes MTHS au contexte islamique africain. Examine les points de convergence entre les traditions spirituelles africaines et la doctrine musulmane, proposant des formules de protection validées par des érudits coraniques. Approche interreligieuse unique.`
    },
    {
      id: 6,
      titre: "Les dix commendements de satan",
      auteur: "Centre MTHS",
      desc: "Fondements théologiques de l'intégration culturelle africaine.",
      prixFCFA: 13500,
      images: [
        "/images/livre6/livre6_1.png",
        "/images/livre6/livre6_2.png",
        "/images/livre6/livre6_3.png"
      ],
      format: ["Papier"],
      pages: 290,
      stock: 30,
      type: "Livre",
      isbn: "978-2-954-12349-4",
      datePublication: "2023",
      langue: "Français",
      resume: `Étude théologique audacieuse décrivant les principes spirituels inversés qui gouvernent les dynamiques occultes. Chaque "commandement" est analysé à travers des récits bibliques, des traditions orales et des cas cliniques contemporains. Ouvrage controversé mais fondamental.`
    },
    {
      id: 7,
      titre: "La transmission de le sorcellerie au sein d'une famille",
      auteur: "Centre MTHS",
      desc: "Approche intégrative de la guérison selon la révélation de 1979.",
      prixFCFA: 16000,
      images: [
        "/images/livre7/livre7_1.png",
        "/images/livre7/livre7_2.png",
        "/images/livre7/livre7_3.png"
      ],
      format: ["Papier", "PDF"],
      pages: 350,
      stock: 25,
      type: "Livre",
      isbn: "978-2-954-12350-0",
      datePublication: "2023",
      langue: "Français",
      resume: `Analyse approfondie des mécanismes héréditaires et psychologiques de transmission des patterns spirituels négatifs. Propose des arbres généalogiques spirituels et des méthodologies pour briser les chaînes transgénérationnelles. Basé sur 150 études familiales sur trois générations.`
    },
    {
      id: 8,
      titre: "La vie spirituel du sorcier-univer astral de la sorcelerie",
      auteur: "Centre MTHS",
      desc: "Analyse et solutions pour briser les chaînes familiales.",
      prixFCFA: 12000,
      images: [
        "/images/livre8/livre8_1.png",
        "/images/livre8/livre8_2.png",
        "/images/livre8/livre8_3.png"
      ],
      format: ["Papier"],
      pages: 230,
      stock: 40,
      type: "Livre",
      isbn: "978-2-954-12351-7",
      datePublication: "2023",
      langue: "Français",
      resume: `Exploration cartographique des dimensions spirituelles parallèles selon les traditions africaines. Décrit les différents plans d'existence, leurs habitants et les lois qui les régissent. Guide pratique pour naviguer ces réalités dans une optique de protection et de guérison.`
    },
    {
      id: 9,
      titre: "Protocole therapeutique MTHS",
      auteur: "Centre MTHS",
      desc: "Interface entre psychologie moderne et spiritualité africaine.",
      prixFCFA: 14000,
      images: [
        "/images/livre9/livre9_1.png",
        "/images/livre9/livre9_2.png",
        "/images/livre9/livre9_3.png"
      ],
      format: ["PDF", "EPUB"],
      pages: 260,
      stock: 35,
      type: "E-book",
      datePublication: "2023",
      langue: "Français",
      resume: `Manuel technique présentant 12 protocoles thérapeutiques standardisés de la MTHS. Chaque protocole combine interventions spirituelles, phytothérapie et accompagnement psychologique. Inclut des grilles d'évaluation, des fiches de suivi et des critères de réussite mesurables.`
    },
    {
      id: 10,
      titre: "La guerre des spiritualités en Afrique",
      auteur: "Centre MTHS",
      desc: "Rites de passage christianisés pour les étapes de la vie.",
      prixFCFA: 11500,
      images: [
        "/images/livre10/livre10_1.png",
        "/images/livre10/livre10_2.png",
        "/images/livre10/livre10_3.png"
      ],
      format: ["Papier"],
      pages: 200,
      stock: 50,
      type: "Livre",
      isbn: "978-2-954-12352-4",
      datePublication: "2023",
      langue: "Français",
      resume: `Analyse géopolitique des conflits spirituels contemporains en Afrique. Examine comment les traditions ancestrales, les religions importées et les nouvelles spiritualités s'affrontent et se recomposent. Propose des cadres de dialogue et d'intégration pour une paix spirituelle durable.`
    },
    {
      id: 11,
      titre: "Chretien africain face a la maladi",
      auteur: "Centre MTHS",
      desc: "Protocoles d'exorcisme selon la tradition chrétienne africaine.",
      prixFCFA: 17000,
      images: [
        "/images/livre11/livre11_1.png",
        "/images/livre11/livre11_2.png",
        "/images/livre11/livre11_3.png"
      ],
      format: ["Papier", "PDF"],
      pages: 310,
      stock: 20,
      type: "Livre",
      isbn: "978-2-954-12353-1",
      datePublication: "2023",
      langue: "Français",
      resume: `Approche holistique des maladies dans le contexte africain, intégrant causes physiques, psychologiques et spirituelles. Présente une typologie des "maladies spirituelles" avec symptômes distinctifs et traitements appropriés. Inclut des rituels de guérison complets avec prières spécifiques.`
    }
  ];

  const loadProductFromId = useCallback(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      const foundProduct = allProducts.find(p => p.id === parseInt(id));
      
      if (foundProduct) {
        setProduct(foundProduct);
        setCategory({ 
          id: 0,
          name: "Livres Doctrinaux & Manuels Clinique",
          description: "Ouvrages de référence sur la Médecine Traditionnelle des Handicapés Spirituels",
          couleur: "from-blue-500 to-blue-600"
        });
      }
      
      setIsLoading(false);
    }, 300);
  }, [id]);

  useEffect(() => {
    if (location.state) {
      const timer = setTimeout(() => {
        setProduct(location.state.product);
        setCategory(location.state.category);
        setCurrency(location.state.currency || "FCFA");
        setIsLoading(false);
      }, 0);
      
      return () => clearTimeout(timer);
    } else {
      loadProductFromId();
    }
  }, [id, location.state, loadProductFromId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        type: 'mths-product',
        title: product.titre,
        author: product.auteur || "Centre MTHS",
        price: product.prixFCFA,
        cover: product.images?.[0] || product.image,
        category: category?.name,
        format: product.format?.[0] || "Physique",
        pages: product.pages,
        stock: product.stock,
        quantity: quantity
      });
      
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 3000);
    }
  };

  const isInCart = () => {
    return globalCart.some(item => item.id === product?.id && item.type === 'mths-product');
  };

  const nextImage = () => {
    if (product?.images) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (product?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Gestion des images
  const getImages = () => {
    // Si le produit a déjà un tableau d'images, on l'utilise
    if (product && product.images && product.images.length > 0) {
      return product.images;
    }
    // Si on a une seule image, on génère les deux autres basées sur l'ID
    else if (product && product.image) {
      const livreNum = product.id || 1;
      return [
        `/images/livre${livreNum}/livre${livreNum}_1.png`,
        `/images/livre${livreNum}/livre${livreNum}_2.png`,
        `/images/livre${livreNum}/livre${livreNum}_3.png`
      ];
    }
    // Images par défaut
    else {
      const livreNum = product?.id || 1;
      return [
        `/images/livre${livreNum}/livre${livreNum}_1.png`,
        `/images/livre${livreNum}/livre${livreNum}_2.png`,
        `/images/livre${livreNum}/livre${livreNum}_3.png`
      ];
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-6"></div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Chargement du produit...</h2>
          <p className="text-gray-600">Veuillez patienter</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
          <BookOpen className="w-24 h-24 text-blue-200 mb-6" />
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Produit non trouvé</h2>
          <p className="text-gray-600 mb-8">Le produit que vous cherchez n'existe pas ou a été déplacé.</p>
          <button
            onClick={() => navigate("/boutique")}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à la boutique
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = getImages();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Bouton retour */}
        <button
          onClick={() => navigate("/boutique")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Retour à la boutique</span>
        </button>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Galerie d'images */}
          <div className="space-y-6">
            {/* Image principale */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt={`${product.titre} - Vue ${currentImageIndex + 1}`}
                className="w-full h-96 object-contain bg-gradient-to-br from-blue-100 to-blue-50 p-4"
                onError={(e) => handleImageError(e, images[currentImageIndex])}
              />
              
              {/* Boutons de navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-blue-600" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-blue-600" />
                  </button>
                </>
              )}

              {/* Indicateur d'images */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-blue-600 w-4' 
                          : 'bg-white/70 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Miniatures */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Vue ${index + 1}`}
                      className="w-full h-20 object-cover"
                      onError={(e) => handleImageError(e, img)}
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors" />
                  </button>
                ))}
              </div>
            )}

            {/* Légende des images */}
            {images.length > 1 && (
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Cliquez sur les miniatures pour voir les détails</span>
                </div>
                <div className="text-xs">
                  {currentImageIndex === 0 ? "Première de couverture" : 
                   currentImageIndex === 1 ? "Deuxième de couverture" : 
                   "Intérieur du livre"}
                </div>
              </div>
            )}
          </div>

          {/* Détails du produit */}
          <div className="space-y-6">
            {/* En-tête */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {category?.name || "Livre"}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full ${
                      isBookmarked 
                        ? 'bg-red-50 text-red-500' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isBookmarked ? 'fill-red-500' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                {product.titre}
              </h1>

              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">{product.auteur}</span>
                </div>
                <div className="h-4 w-px bg-gray-300" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>{product.datePublication || "2023"}</span>
                </div>
              </div>
            </div>

            {/* Prix et stock */}
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-blue-700">
                    {formatPrice(product.prixFCFA, currency)}
                  </div>
                  {currency !== "FCFA" && (
                    <div className="text-sm text-gray-500 mt-1">
                      ≈ {product.prixFCFA.toLocaleString('fr-FR')} FCFA
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                  <Package className="w-5 h-5" />
                  <div>
                    <div className="font-medium">{product.stock} disponible(s)</div>
                    {product.stock < 10 && (
                      <div className="text-xs text-orange-600">Stock limité</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sélecteur de quantité */}
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-2">Quantité</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <div className="px-6 py-3 text-lg font-medium min-w-[60px] text-center">
                      {quantity}
                    </div>
                    <button
                      onClick={increaseQuantity}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Maximum : {product.stock} unités
                  </div>
                </div>
              </div>

              {/* Bouton Ajouter au panier */}
              <button
                onClick={handleAddToCart}
                disabled={isInCart()}
                className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isInCart() || isAddedToCart
                    ? 'bg-green-100 text-green-700 border-2 border-green-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {isInCart() || isAddedToCart ? (
                  <>
                    <Check className="w-6 h-6" />
                    <span>Ajouté au panier</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6" />
                    <span>Ajouter au panier</span>
                  </>
                )}
              </button>

              {isAddedToCart && !isInCart() && (
                <div className="mt-3 text-center text-sm text-green-600 animate-pulse">
                  ✓ Produit ajouté au panier avec succès
                </div>
              )}
            </div>

            {/* Caractéristiques */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-700">Format</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {product.format?.map((f, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-700">Pages</span>
                </div>
                <div className="text-2xl font-bold text-blue-700">{product.pages}</div>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-700">Langue</span>
                </div>
                <div className="text-lg font-medium text-blue-700">{product.langue || "Français"}</div>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-700">ISBN</span>
                </div>
                <div className="text-sm font-mono text-gray-700">{product.isbn || "Non disponible"}</div>
              </div>
            </div>

            {/* Livraison et garantie */}
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-blue-900">Livraison rapide</div>
                  <div className="text-sm text-blue-600">3-5 jours au Cameroun</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-blue-900">Garantie</div>
                  <div className="text-sm text-blue-600">Produit certifié</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Résumé détaillé */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <Bookmark className="w-6 h-6" />
              Résumé du livre
            </h2>
          </div>
          
          <div className="p-6 lg:p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6 whitespace-pre-line">
                {product.resume || product.desc}
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
                <h3 className="font-bold text-blue-900 mb-2">Points clés abordés :</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Fondements doctrinaux de la MTHS selon la révélation de 1979</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Méthodologie de diagnostic des handicaps spirituels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Protocoles thérapeutiques intégrant tradition et christianisme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Études de cas concrets avec analyses détaillées</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <h3 className="font-bold text-blue-900 mb-3">À qui s'adresse ce livre ?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 font-bold text-lg mb-2">Pratiquants</div>
                    <p className="text-sm text-gray-600">Thérapeutes traditionnels et accompagnateurs spirituels</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 font-bold text-lg mb-2">Chercheurs</div>
                    <p className="text-sm text-gray-600">Étudiants et académiciens en médecine traditionnelle</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600 font-bold text-lg mb-2">Grand public</div>
                    <p className="text-sm text-gray-600">Personnes intéressées par la spiritualité africaine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommandations */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Autres livres de la collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allProducts
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <button
                  key={relatedProduct.id}
                  onClick={() => navigate(`/produit/${relatedProduct.id}`, {
                    state: {
                      product: relatedProduct,
                      category: category,
                      currency: currency
                    }
                  })}
                  className="bg-white border border-blue-200 rounded-xl p-3 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-3 overflow-hidden">
                    <img
                      src={relatedProduct.images?.[0] || "/images/default-book.jpg"}
                      alt={relatedProduct.titre}
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(e, relatedProduct.images?.[0])}
                    />
                  </div>
                  <div className="text-sm font-medium text-blue-900 line-clamp-2 text-left group-hover:text-blue-700">
                    {relatedProduct.titre}
                  </div>
                  <div className="text-xs text-blue-600 text-left mt-1">{relatedProduct.auteur}</div>
                </button>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Produitdetail;