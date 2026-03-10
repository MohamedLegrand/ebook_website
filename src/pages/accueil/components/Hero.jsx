import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  BookOpen, 
  Headphones, 
  Download, 
  User, 
  Award, 
  Shield, 
  Star, 
  Heart, 
  Sparkles,
  ShoppingCart,
  Eye
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ─────────────────────────────────────────────
  // Données complètes de tous les produits MTHS
  // ─────────────────────────────────────────────
  const allProducts = [
    {
      id: 1,
      titre: "Chrétien africain face à la sorcellerie",
      auteur: "NGA Marie Constantin & SIDA ABENA Jean Paul Sylvain",
      desc: "Manuel de référence sur la confrontation chrétienne aux phénomènes de sorcellerie en Afrique.",
      prixFCFA: 6500,
      image: "/images/livre1/livre1_1.png",
      type: "Livre doctrinal",
      pages: 320,
      stock: 50
    },
    {
      id: 2,
      titre: "Comment reconnaître à vue d'œil un sorcier",
      auteur: "SIDA ABENA Jean Paul Sylvain",
      desc: "Guide d'observation et de discernement des personnes impliquées dans les pratiques occultes.",
      prixFCFA: 6500,
      image: "/images/livre2/livre2_1.png",
      type: "Manuel clinique",
      pages: 240,
      stock: 35
    },
    {
      id: 3,
      titre: "Comment se soigner des persécutions spirituelles",
      auteur: "SIDA ABENA Jean Paul Sylvain",
      desc: "Guide thérapeutique intégrant remèdes naturels, prières et rites de délivrance.",
      prixFCFA: 6500,
      image: "/images/livre3/livre3_1.png",
      type: "Guide thérapeutique",
      pages: 280,
      stock: 40
    },
    {
      id: 4,
      titre: "À la rencontre de JPSSA",
      auteur: "Centre MTHS",
      desc: "Biographie spirituelle et doctrinale du fondateur de la Médecine Traditionnelle des Handicapés Spirituels.",
      prixFCFA: 6500,
      image: "/images/livre4/livre4_1.png",
      type: "E-book biographique",
      pages: 180,
      stock: 60
    },
    {
      id: 5,
      titre: "Le musulman face à la sorcellerie",
      auteur: "Centre MTHS",
      desc: "Première approche interreligieuse adaptant les principes MTHS au contexte islamique africain.",
      prixFCFA: 6500,
      image: "/images/livre5/livre5_1.png",
      type: "Livre interreligieux",
      pages: 210,
      stock: 45
    },
    {
      id: 6,
      titre: "Les dix commandements de Satan",
      auteur: "SIDA ABENA Jean Paul Sylvain",
      desc: "Étude théologique des principes spirituels inversés qui gouvernent les dynamiques occultes en Afrique.",
      prixFCFA: 6500,
      image: "/images/livre6/livre6_1.png",
      type: "Ouvrage théologique",
      pages: 290,
      stock: 30
    },
    {
      id: 7,
      titre: "La transmission de la sorcellerie au sein d'une famille",
      auteur: "NGA Marie Constantin & SIDA ABENA Jean Paul Sylvain",
      desc: "Analyse des mécanismes héréditaires et transgénérationnels de transmission des liens occultes dans les lignées africaines.",
      prixFCFA: 6500,
      image: "/images/livre7/livre7_1.png",
      type: "Analyse familiale",
      pages: 350,
      stock: 25
    },
    {
      id: 8,
      titre: "La vie spirituelle du sorcier — Univers astral de la sorcellerie",
      auteur: "SIDA ABENA Jean Paul Sylvain",
      desc: "Exploration cartographique des dimensions spirituelles parallèles selon les traditions africaines et la révélation MTHS.",
      prixFCFA: 6500,
      image: "/images/livre8/livre8_1.png",
      type: "Étude ésotérique",
      pages: 230,
      stock: 40
    },
    {
      id: 9,
      titre: "Protocole thérapeutique MTHS",
      auteur: "Centre MTHS — Équipe clinique",
      desc: "Manuel technique standardisé des douze protocoles thérapeutiques de la Médecine Traditionnelle des Handicapés Spirituels.",
      prixFCFA: 6500,
      image: "/images/livre9/livre9_1.png",
      type: "E-book technique",
      pages: 260,
      stock: 35
    },
    {
      id: 10,
      titre: "La guerre des spiritualités en Afrique",
      auteur: "NGA Marie Constantin",
      desc: "Analyse géopolitique et théologique des conflits spirituels contemporains sur le continent africain.",
      prixFCFA: 6500,
      image: "/images/livre10/livre10_1.png",
      type: "Essai",
      pages: 200,
      stock: 50
    },
    {
      id: 12,
      titre: "Religion chinoise face à la sorcellerie",
      auteur: "Centre MTHS",
      desc: "Étude comparée des traditions spirituelles chinoises et africaines face aux phénomènes occultes — un dialogue interculturel inédit.",
      prixFCFA: 6500,
      image: "/images/livre12/livre12_1.png",
      type: "Étude comparée",
      pages: 310,
      stock: 20
    },
    {
      id: 13,
      titre: "La vie après la mort",
      auteur: "Centre MTHS",
      desc: "Enquête théologique et anthropologique sur les conceptions africaines de l'au-delà et leur dialogue avec la foi chrétienne.",
      prixFCFA: 6500,
      image: "/images/livre13/livre13_1.png",
      type: "Théologie",
      pages: 310,
      stock: 20
    },
    {
      id: 14,
      titre: "Ange ou Démon",
      auteur: "Centre MTHS",
      desc: "Manuel pratique du discernement des esprits dans la tradition chrétienne africaine.",
      prixFCFA: 6500,
      image: "/images/livre14/livre14_1.png",
      type: "Manuel spirituel",
      pages: 310,
      stock: 20
    },
    {
      id: 15,
      titre: "Chrétien africain et la maladie",
      auteur: "Centre MTHS",
      desc: "Guide holistique de compréhension et de guérison des maladies selon une approche intégrant foi chrétienne, médecine moderne et thérapies africaines.",
      prixFCFA: 6500,
      image: "/images/livre15/livre15_1.png",
      type: "Guide santé",
      pages: 310,
      stock: 20
    },
    {
      id: 16,
      titre: "Comment vivre ensemble avec les sorciers",
      auteur: "Centre MTHS",
      desc: "Stratégies pratiques de coexistence, de protection et de réconciliation dans des communautés marquées par la sorcellerie.",
      prixFCFA: 6500,
      image: "/images/livre16/livre16_1.png",
      type: "Médiation",
      pages: 310,
      stock: 20
    },
    {
      id: 17,
      titre: "Le Satanisme et la dérive du monde",
      auteur: "Centre MTHS",
      desc: "Analyse théologique et sociale du satanisme contemporain et de ses infiltrations dans la société africaine et mondiale.",
      prixFCFA: 6500,
      image: "/images/livre17/livre17_1.png",
      type: "Sociologie",
      pages: 310,
      stock: 20
    },
    {
      id: 18,
      titre: "Tradition africaine et christianisme",
      auteur: "Centre MTHS",
      desc: "Dialogue approfondi entre les traditions ancestrales africaines et la foi chrétienne — vers une synthèse authentique et libératrice.",
      prixFCFA: 6500,
      image: "/images/livre18/livre18_1.png",
      type: "Inculturation",
      pages: 310,
      stock: 20
    },
    {
      id: 19,
      titre: "Le bouddhisme face à la sorcellerie et au Satanisme",
      auteur: "Centre MTHS",
      desc: "Étude comparative entre la philosophie bouddhiste et les phénomènes de sorcellerie et de satanisme.",
      prixFCFA: 6500,
      image: "/images/livre19/livre19_1.png",
      type: "Religions comparées",
      pages: 310,
      stock: 20
    },
    {
      id: 20,
      titre: "Sectes et sociétés secrètes africaines",
      auteur: "Centre MTHS",
      desc: "Enquête documentée sur les organisations occultes et secrètes qui structurent les rapports de pouvoir en Afrique.",
      prixFCFA: 6500,
      image: "/images/livre20/livre20_1.png",
      type: "Enquête",
      pages: 310,
      stock: 20
    },
    {
      id: 21,
      titre: "Comment comprendre et interpréter le Rêve",
      auteur: "Centre MTHS",
      desc: "Guide complet pour comprendre le langage des rêves selon la tradition africaine, la psychologie et la spiritualité chrétienne.",
      prixFCFA: 6500,
      image: "/images/livre21/livre21_1.png",
      type: "Onirologie",
      pages: 310,
      stock: 20
    },
    {
      id: 22,
      titre: "Comment obtenir ta Délivrance et ta Victoire contre le Diable, les Démons et les Sorciers ",
      auteur: "Centre MTHS",
      desc: "Guide complet pour comprendre le langage des rêves selon la tradition africaine, la psychologie et la spiritualité chrétienne.",
      prixFCFA: 6500,
      image: "/images/livre22/livre22_1.png",
      type: "Onirologie",
      pages: 310,
      stock: 20
    }
  ];

  // Palette de couleurs et icônes pour varier l'affichage
  const colorPalette = [
    { bgColor: "from-blue-600 to-indigo-700", gradient: "bg-gradient-to-r from-blue-600 to-indigo-700", icon: <BookOpen /> },
    { bgColor: "from-purple-600 to-violet-700", gradient: "bg-gradient-to-r from-purple-600 to-violet-700", icon: <Headphones /> },
    { bgColor: "from-amber-600 to-orange-600", gradient: "bg-gradient-to-r from-amber-600 to-orange-600", icon: <Shield /> },
    { bgColor: "from-emerald-600 to-teal-700", gradient: "bg-gradient-to-r from-emerald-600 to-teal-700", icon: <User /> },
    { bgColor: "from-rose-600 to-pink-700", gradient: "bg-gradient-to-r from-rose-600 to-pink-700", icon: <Star /> },
    { bgColor: "from-red-600 to-rose-700", gradient: "bg-gradient-to-r from-red-600 to-rose-700", icon: <Award /> },
    { bgColor: "from-indigo-600 to-purple-700", gradient: "bg-gradient-to-r from-indigo-600 to-purple-700", icon: <Sparkles /> },
    { bgColor: "from-cyan-600 to-blue-700", gradient: "bg-gradient-to-r from-cyan-600 to-blue-700", icon: <Download /> }
  ];

  // Construction du tableau des slides en associant chaque produit à une couleur/icône
  const slides = allProducts.map((product, index) => {
    const colorStyle = colorPalette[index % colorPalette.length];
    return {
      id: product.id,
      titre: product.titre,
      description: product.desc,
      image: product.image,
      bgColor: colorStyle.bgColor,
      gradient: colorStyle.gradient,
      icon: colorStyle.icon,
      cta: "Découvrir",
      auteur: product.auteur,
      type: product.type,
      prixFCFA: product.prixFCFA,
      pages: product.pages,
      stock: product.stock
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleImageError = (e) => {
    console.warn(`Image non trouvée: ${e.target.src}`);
    e.target.src = "/images/default-book.jpg";
    e.target.onerror = null;
  };

  const goToProduct = (product) => {
    navigate(`/produit/${product.id}`, {
      state: {
        product: {
          ...product,
          prixFCFA: product.prixFCFA,
          image: product.image
        },
        category: {
          id: 0,
          name: "Livres Doctrinaux & Manuels Clinique",
          couleur: "from-blue-500 to-blue-600"
        },
        currency: "FCFA"
      }
    });
  };

  const formatPrice = (price) => {
    return `${price.toLocaleString('fr-FR')} FCFA`;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-cyan-100/20 to-emerald-100/20 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute top-3/4 right-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-amber-100/15 to-orange-100/15 rounded-full blur-2xl" />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 min-h-screen flex items-center">
        <div className="w-full py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            
            {/* Text Content - Left Side */}
            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-500 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute top-0 left-0"
                  }`}
                >
                  {/* Type Badge */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${slide.bgColor}`} />
                    <span className="text-xs sm:text-sm font-medium text-blue-900">{slide.type}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight md:leading-snug">
                    {slide.titre}
                  </h1>

                  {/* Author and Price */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-blue-700">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span className="text-sm sm:text-base font-medium">{slide.auteur}</span>
                    </div>
                    <div className="hidden sm:block h-4 w-px bg-gray-300" />
                    <div className="text-base sm:text-lg md:text-xl font-bold text-emerald-700 bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
                      {formatPrice(slide.prixFCFA)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <button 
                      onClick={() => goToProduct(slide)}
                      className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white bg-gradient-to-r ${slide.bgColor} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base shadow-lg`}
                    >
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Voir les détails</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    
                    <button className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Ajouter au panier</span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Évaluation</div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">4.9/5</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Pages</div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">{slide.pages}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-600">Stock</div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">{slide.stock}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Content - Right Side */}
            <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-500 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 absolute top-0 left-0"
                  }`}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Main Image Container with Book-like styling */}
                    <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                      {/* Book Container with realistic 3D effect */}
                      <div className="relative w-full aspect-[3/4] max-h-[500px] sm:max-h-[550px] md:max-h-[600px] lg:max-h-[650px] xl:max-h-[700px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl sm:shadow-3xl md:shadow-4xl transform transition-transform duration-300 hover:scale-[1.01]">
                        {/* Book Spine Effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 md:w-8 bg-gradient-to-r from-gray-800 to-gray-900 opacity-20 z-10" />
                        
                        {/* Book Cover Image - Visible Entirely */}
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <img
                            src={slide.image}
                            alt={slide.titre}
                            className="w-full h-full object-contain p-2 sm:p-4 md:p-6 lg:p-8"
                            onError={handleImageError}
                          />
                        </div>
                        
                        {/* Book Shadow Effect */}
                        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.1)]" />
                        
                        {/* Book Pages Edge Effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-gradient-to-l from-gray-300/50 to-gray-400/20" />
                      </div>

                      {/* Page Curl Effect */}
                      <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-white/90 to-gray-100/90 backdrop-blur-sm rounded-tr-lg rounded-bl-lg shadow-lg flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-80" />
                      </div>

                      {/* Book Title on Spine (mobile only) */}
                      <div className="sm:hidden absolute -left-2 top-1/4 transform -translate-y-1/2 -rotate-90 origin-left">
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-[10px] px-2 py-1 rounded-r whitespace-nowrap">
                          MTHS
                        </div>
                      </div>
                    </div>

                    {/* Floating Info Badges */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8">
                      {/* Format Badges */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r ${slide.bgColor} flex items-center justify-center shadow-md`}>
                            {React.cloneElement(slide.icon, {
                              className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                            })}
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm md:text-base font-bold text-gray-900">Formats</div>
                            <div className="text-[10px] sm:text-xs text-gray-500">PDF • Papier</div>
                          </div>
                        </div>
                      </div>

                      {/* Pages Badge */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center`}>
                            <BookOpen className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-white" />
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-gray-500">Pages</div>
                            <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{slide.pages}</div>
                          </div>
                        </div>
                      </div>

                      {/* Stock Badge */}
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center`}>
                            <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-white/20 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                            </div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm text-gray-500">Stock</div>
                            <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{slide.stock}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions for Mobile */}
                    <div className="sm:hidden w-full max-w-sm mt-4">
                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => goToProduct(slide)}
                          className={`px-4 py-3 rounded-xl font-bold text-white bg-gradient-to-r ${slide.bgColor} flex items-center justify-center gap-2 text-sm`}
                        >
                          <Eye className="w-4 h-4" />
                          Détails
                        </button>
                        <button className="px-4 py-3 rounded-xl font-bold border-2 border-blue-500 text-blue-600 flex items-center justify-center gap-2 text-sm">
                          <ShoppingCart className="w-4 h-4" />
                          Panier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop */}
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute left-2 xl:left-4 top-1/2 transform -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/95 backdrop-blur-sm border border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl z-10"
        aria-label="Précédent"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-2 xl:right-4 top-1/2 transform -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/95 backdrop-blur-sm border border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl z-10"
        aria-label="Suivant"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
      </button>

      {/* Mobile Navigation Arrows - Improved */}
      <div className="lg:hidden absolute bottom-20 sm:bottom-24 left-0 right-0 flex justify-center gap-4 z-10">
        <button
          onClick={prevSlide}
          className="p-2.5 sm:p-3 rounded-full bg-white/95 backdrop-blur-sm border border-gray-300 hover:bg-white transition-all duration-300 shadow-lg"
          aria-label="Précédent"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2.5 sm:p-3 rounded-full bg-white/95 backdrop-blur-sm border border-gray-300 hover:bg-white transition-all duration-300 shadow-lg"
          aria-label="Suivant"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>
      </div>

      {/* Slide Indicators - Responsive */}
      <div className="absolute bottom-12 sm:bottom-14 md:bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? `w-3 sm:w-4 md:w-6 bg-gradient-to-r ${slides[currentSlide].bgColor} shadow-sm sm:shadow-md` 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller au livre ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - Responsive */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 md:left-8 text-xs sm:text-sm font-medium text-gray-500 z-10">
        <span className="text-gray-900 font-bold text-sm sm:text-base">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span className="text-gray-600">{slides.length}</span>
      </div>

      {/* Mobile Navigation Hint */}
      <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200">
          Glissez pour naviguer
        </div>
      </div>

      {/* Touch Swipe Support for Mobile */}
      <div 
        className="lg:hidden absolute inset-0 z-0"
        onTouchStart={(e) => {
          const touchStartX = e.touches[0].clientX;
          const touchEnd = (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) {
                nextSlide();
              } else {
                prevSlide();
              }
            }
          };
          e.target.addEventListener('touchend', touchEnd, { once: true });
        }}
      />
    </section>
  );
}

export default Hero;