import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Star, Users, Award, Search, Download, Clock, Heart, Bookmark, ArrowRight } from "lucide-react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  const categories = [
    {
      title: "Romans & Fiction",
      description: "Plongez dans des histoires captivantes qui vous transporteront dans des univers imaginaires extraordinaires.",
      shortDescription: "Histoires captivantes et univers imaginaires",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
      image: "/src/assets/images/livres/roman.jpg",
      icon: "📚",
      books: 2540,
      rating: 4.8,
      newBooks: 24,
      readers: "2.5M+",
      pagesAvg: 350,
      popularAuthors: ["Victor Hugo", "J.K. Rowling", "Stephen King"],
      formats: ["Papier", "EPUB", "PDF", "Audiobook"],
      bestseller: "Les Misérables",
      author: "Victor Hugo",
      year: "1832",
      pages: "1463"
    },
    {
      title: "Science & Technologie",
      description: "Explorez les découvertes scientifiques révolutionnaires et les innovations technologiques qui transforment notre monde moderne.",
      shortDescription: "Découvertes scientifiques et innovations",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-600",
      image: "/src/assets/images/livres/science.jpg",
      icon: "🔬",
      books: 1620,
      rating: 4.6,
      newBooks: 18,
      readers: "1.8M+",
      pagesAvg: 280,
      popularAuthors: ["Carl Sagan", "Stephen Hawking", "Yuval Noah Harari"],
      formats: ["Papier", "EPUB", "PDF"],
      bestseller: "Une brève histoire du temps",
      author: "Stephen Hawking",
      year: "1988",
      pages: "256"
    },
    {
      title: "Développement Personnel",
      description: "Transformez votre vie avec des outils pratiques et des conseils inspirants pour atteindre vos objectifs personnels et professionnels.",
      shortDescription: "Outils pratiques pour transformation personnelle",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-r from-emerald-500 to-teal-600",
      image: "/src/assets/images/livres/developpement.jpg",
      icon: "🚀",
      books: 1980,
      rating: 4.9,
      newBooks: 32,
      readers: "3.2M+",
      pagesAvg: 240,
      popularAuthors: ["Dale Carnegie", "James Clear", "Brené Brown"],
      formats: ["Papier", "EPUB", "Audiobook"],
      bestseller: "Comment se faire des amis",
      author: "Dale Carnegie",
      year: "1936",
      pages: "320"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [categories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16 md:pt-20 lg:pt-24"
      onMouseEnter={() => !isMobile && setShowArrows(true)}
      onMouseLeave={() => !isMobile && setShowArrows(false)}
    >
      {/* Header - Optimisé pour mobile */}
      <div className="absolute top-4 md:top-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            {/* Logo */}
            <div className="text-center md:text-left w-full md:w-auto">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                eBook<span className="text-blue-600">Pro</span>
              </h1>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base">Bibliothèque numérique premium</p>
            </div>
            
            {/* Search Bar - Adaptative */}
            <div className="relative w-full md:w-auto max-w-md">
              <input
                type="search"
                placeholder="Rechercher un livre, auteur..."
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white/90 backdrop-blur-sm"
              />
              <Search size={isMobile ? 18 : 20} className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Flèches - Desktop/Tablette (survole) */}
      <div className={`hidden lg:block absolute top-1/2 left-4 right-4 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${showArrows ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-between">
          <button
            onClick={prevSlide}
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Précédent"
          >
            <ChevronLeft size={28} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Suivant"
          >
            <ChevronRight size={28} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Navigation Flèches - Mobile (toujours visibles) */}
      <div className="lg:hidden absolute top-1/2 left-4 right-4 transform -translate-y-1/2 z-10">
        <div className="flex justify-between">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-gray-300 active:bg-white active:scale-95 transition-all"
            aria-label="Précédent"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border border-gray-300 active:bg-white active:scale-95 transition-all"
            aria-label="Suivant"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Navigation Flèches - Tablet */}
      <div className="hidden md:block lg:hidden absolute top-1/2 left-6 right-6 transform -translate-y-1/2 z-10">
        <div className="flex justify-between">
          <button
            onClick={prevSlide}
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Précédent"
          >
            <ChevronLeft size={28} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Suivant"
          >
            <ChevronRight size={28} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-24 lg:pt-32">
        {/* Slide Content */}
        <div className="relative">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 visible"
                  : "opacity-0 invisible absolute top-0 left-0"
              }`}
            >
              {/* Mobile Layout - Stack vertical */}
              <div className="block lg:hidden space-y-8">
                {/* Mobile Header */}
                <div className="flex items-center gap-3">
                  <span className={`text-3xl ${category.bgColor} text-white p-3 rounded-xl`}>
                    {category.icon}
                  </span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{category.shortDescription}</p>
                  </div>
                </div>

                {/* Mobile Book Display */}
                <div className="relative mx-auto max-w-sm">
                  <div className="relative w-64 h-80 mx-auto">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${category.image})` }}
                      >
                        <div className={`absolute inset-0 ${category.color} opacity-20`} />
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          <div>
                            <div className="text-xs uppercase font-bold text-white opacity-90 mb-2">BESTSELLER</div>
                            <div className="text-xl font-bold text-white leading-tight">
                              {category.bestseller}
                            </div>
                          </div>
                          <div className="text-white">
                            <div className="text-sm opacity-90">{category.author}</div>
                            <div className="text-xs opacity-80 mt-1">{category.year} • {category.pages} pages</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{category.books.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Livres</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{category.rating}/5</div>
                    <div className="text-xs text-gray-600">Note</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{category.newBooks}</div>
                    <div className="text-xs text-gray-600">Nouveautés</div>
                  </div>
                </div>

                {/* Mobile Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button className={`px-6 py-3 rounded-xl font-bold text-white ${category.bgColor} flex items-center justify-center gap-2`}>
                    <BookOpen size={18} />
                    Explorer cette collection
                  </button>
                  <button className="px-6 py-3 rounded-xl font-bold border border-gray-300 text-gray-700">
                    Voir tous les best-sellers
                  </button>
                </div>
              </div>

              {/* Desktop/Tablet Layout */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <span className={`text-4xl ${category.bgColor} text-white p-4 rounded-xl`}>
                      {category.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                          {category.title}
                        </h2>
                        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${category.bgColor} text-white`}>
                          #{index + 1}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg">{category.books.toLocaleString()} livres • {category.readers} lecteurs</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {category.description}
                    </p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="text-3xl font-bold text-gray-900">{category.books.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Livres</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="text-3xl font-bold text-gray-900">{category.rating}/5</div>
                        <div className="text-sm text-gray-600">Note</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="text-3xl font-bold text-gray-900">{category.newBooks}</div>
                        <div className="text-sm text-gray-600">Nouveautés</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Popular Authors */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Auteurs populaires</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.popularAuthors.map((author, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg px-4 py-2 text-sm transition-colors"
                        >
                          {author}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Formats */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Formats disponibles</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.formats.map((format, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            i === 0
                              ? `${category.bgColor} text-white`
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className={`px-8 py-4 rounded-xl font-bold text-white ${category.bgColor} hover:shadow-xl transition-shadow flex items-center gap-3`}>
                      <BookOpen size={22} />
                      Explorer la collection
                      <ArrowRight size={20} />
                    </button>
                    <button className="px-8 py-4 rounded-xl font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                      Voir détails
                    </button>
                  </div>
                </div>
                
                {/* Right Column - Book Display */}
                <div className="relative">
                  <div className="relative max-w-xl mx-auto">
                    {/* Main Book Container */}
                    <div className="relative">
                      {/* Book Stack Effect */}
                      <div className="absolute -bottom-6 -right-6 w-72 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl transform rotate-6 opacity-80 hidden xl:block" />
                      
                      <div className="absolute -bottom-3 -right-3 w-72 h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl transform rotate-3 opacity-90 hidden lg:block" />
                      
                      {/* Main Book */}
                      <div className="relative w-72 h-96 mx-auto lg:w-80 lg:h-[28rem]">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${category.image})` }}
                          >
                            <div className={`absolute inset-0 ${category.color} opacity-20`} />
                            
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                              <div>
                                <div className="text-xs uppercase font-bold text-white opacity-90 mb-2">BESTSELLER</div>
                                <div className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
                                  {category.bestseller}
                                </div>
                                <div className="text-lg text-white opacity-90">{category.author}</div>
                              </div>
                              
                              <div className="text-white">
                                <div className="flex items-center gap-4 mb-2">
                                  <div className="flex items-center gap-1">
                                    <Star size={16} className="fill-current text-yellow-300" />
                                    <span className="font-bold">{category.rating}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users size={16} />
                                    <span className="text-sm">{category.readers}</span>
                                  </div>
                                </div>
                                <div className="text-sm opacity-90">Publié en {category.year} • {category.pages} pages</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -left-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full shadow-lg font-bold text-xs flex items-center gap-2">
                        <Award size={14} />
                        95% recommandé
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -right-4">
                      <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                          <Download size={16} className="text-blue-600" />
                          <div>
                            <div className="font-bold text-gray-900">5K+</div>
                            <div className="text-xs text-gray-500">Téléchargements</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Book Info Card - Only on desktop */}
                  <div className="hidden xl:block mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 max-w-sm mx-auto">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Caractéristiques</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Format</span>
                        <span className="font-medium">Papier & Numérique</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Langue</span>
                        <span className="font-medium">Français</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Disponibilité</span>
                        <span className="font-medium text-green-600">Immédiate</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg font-bold hover:shadow-md transition-shadow text-sm">
                      Télécharger un extrait
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation - Desktop */}
        <div className="hidden lg:flex items-center justify-between gap-6 mt-12">
          {/* Indicators */}
          <div className="flex gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? `w-8 h-2 ${category.bgColor}`
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Catégorie <span className="font-bold">{currentSlide + 1}</span> sur {categories.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-md"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-md"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bottom */}
      <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 bg-white/95 backdrop-blur-xl rounded-full p-2 shadow-2xl border border-gray-200">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-1 px-3">
            <span className="font-bold text-gray-900">{currentSlide + 1}</span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-600">{categories.length}</span>
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Bottom CTA - Responsive */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-white/90 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Nouveau sur eBookPro ?</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  3 crédits de lecture <span className="font-bold text-blue-600">gratuits</span>
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg md:rounded-xl font-bold hover:shadow-lg transition-shadow text-sm md:text-base">
                  S'inscrire
                </button>
                <button className="px-5 md:px-6 py-2.5 md:py-3 border border-gray-300 text-gray-700 rounded-lg md:rounded-xl font-bold hover:bg-gray-50 transition-colors text-sm md:text-base">
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-100/20 to-emerald-100/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

export default Hero;