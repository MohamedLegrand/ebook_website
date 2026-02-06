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

  const slides = [
    {
      id: 1,
      titre: "Chrétien africain face à la sorcellerie",
      description: "Manuel complet de la Médecine Traditionnelle des Handicapés Spirituels. Fondements doctrinaux et pratiques.",
      image: "/images/livre1/livre1_1.png",
      bgColor: "from-blue-600 to-indigo-700",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-700",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      cta: "Découvrir",
      auteur: "Centre MTHS",
      type: "Livre doctrinal",
      prixFCFA: 15000,
      pages: 320,
      stock: 50
    },
    {
      id: 2,
      titre: "Comment reconnaître à vue d'œil un sorcier",
      description: "Étude approfondie du rite SO'O dans sa version christianisée. Guide pratique pour le discernement spirituel.",
      image: "/images/livre2/livre2_1.png",
      bgColor: "from-purple-600 to-violet-700",
      gradient: "bg-gradient-to-r from-purple-600 to-violet-700",
      icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      cta: "Écouter",
      auteur: "Centre MTHS",
      type: "Manuel clinique",
      prixFCFA: 10000,
      pages: 240,
      stock: 35
    },
    {
      id: 3,
      titre: "Comment se soigner des persécutions spirituelles",
      description: "Guide des remèdes traditionnels améliorés et leur intégration dans une approche chrétienne.",
      image: "/images/livre3/livre3_1.png",
      bgColor: "from-amber-600 to-orange-600",
      gradient: "bg-gradient-to-r from-amber-600 to-orange-600",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      cta: "Protection",
      auteur: "Centre MTHS",
      type: "Guide thérapeutique",
      prixFCFA: 12500,
      pages: 280,
      stock: 40
    },
    {
      id: 4,
      titre: "À la rencontre de JPSSA",
      description: "Méthodologie du diagnostic des handicaps spirituels selon le révélateur de la MTHS.",
      image: "/images/livre4/livre4_1.png",
      bgColor: "from-emerald-600 to-teal-700",
      gradient: "bg-gradient-to-r from-emerald-600 to-teal-700",
      icon: <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      cta: "Biographie",
      auteur: "Centre MTHS",
      type: "E-book biographique",
      prixFCFA: 9500,
      pages: 180,
      stock: 60
    },
    {
      id: 5,
      titre: "Le musulman face à la sorcellerie",
      description: "Premier ouvrage adaptant les principes MTHS au contexte islamique africain.",
      image: "/images/livre5/livre5_1.png",
      bgColor: "from-rose-600 to-pink-700",
      gradient: "bg-gradient-to-r from-rose-600 to-pink-700",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      cta: "Interreligieux",
      auteur: "Centre MTHS",
      type: "Livre interreligieux",
      prixFCFA: 11000,
      pages: 210,
      stock: 45
    },
    {
      id: 6,
      titre: "Les dix commandements de satan",
      description: "Étude théologique audacieuse décrivant les principes spirituels inversés.",
      image: "/images/livre6/livre6_1.png",
      bgColor: "from-red-600 to-rose-700",
      gradient: "bg-gradient-to-r from-red-600 to-rose-700",
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      cta: "Théologie",
      auteur: "Centre MTHS",
      type: "Ouvrage théologique",
      prixFCFA: 13500,
      pages: 290,
      stock: 30
    },
    {
      id: 7,
      titre: "La transmission de la sorcellerie",
      description: "Analyse des mécanismes héréditaires et psychologiques de transmission des patterns spirituels négatifs.",
      image: "/images/livre7/livre7_1.png",
      bgColor: "from-indigo-600 to-purple-700",
      gradient: "bg-gradient-to-r from-indigo-600 to-purple-700",
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      cta: "Transgénérationnel",
      auteur: "Centre MTHS",
      type: "Analyse familiale",
      prixFCFA: 16000,
      pages: 350,
      stock: 25
    },
    {
      id: 8,
      titre: "Protocole thérapeutique MTHS",
      description: "Interface entre psychologie moderne et spiritualité africaine. Méthodologies standardisées.",
      image: "/images/livre9/livre9_1.png",
      bgColor: "from-cyan-600 to-blue-700",
      gradient: "bg-gradient-to-r from-cyan-600 to-blue-700",
      icon: <Download className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      cta: "Télécharger",
      auteur: "Centre MTHS",
      type: "E-book technique",
      prixFCFA: 14000,
      pages: 260,
      stock: 35
    }
  ];

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
          Swipe pour naviguer
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