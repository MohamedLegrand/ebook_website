import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, BookOpen, Headphones, Download } from "lucide-react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Des milliers d'eBooks à télécharger",
      description: "Accédez à une bibliothèque numérique complète. Téléchargez vos livres instantanément en format EPUB, PDF ou MOBI.",
      image: "/src/assets/images/livres/roman.jpg",
      bgColor: "from-blue-500 to-purple-600",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      cta: "Explorer les eBooks"
    },
    {
      title: "Livres audio de qualité studio",
      description: "Écoutez vos livres préférés partout. Formats compatibles avec toutes les applications audio.",
      image: "/src/assets/images/livres/science.jpg",
      bgColor: "from-cyan-500 to-blue-600",
      icon: <Headphones className="w-8 h-8 text-white" />,
      cta: "Découvrir l'audio"
    },
    {
      title: "Téléchargement instantané",
      description: "Vos livres disponibles immédiatement après paiement. Lecture hors ligne sur tous vos appareils.",
      image: "/src/assets/images/livres/Développement.jpg",
      bgColor: "from-emerald-500 to-teal-600",
      icon: <Download className="w-8 h-8 text-white" />,
      cta: "Commencer maintenant"
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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-100/20 to-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        {/* Content */}
        <div className="w-full py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Text Content - Left */}
            <div className="w-full lg:w-1/2">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute top-0 left-0"
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-r ${slide.bgColor} flex items-center justify-center mb-4 sm:mb-6`}>
                    {React.cloneElement(slide.icon, {
                      className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white"
                    })}
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug sm:leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <button className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-white bg-gradient-to-r ${slide.bgColor} hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 text-sm sm:text-base`}>
                    {slide.cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Image Content - Right */}
            <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 absolute top-0 left-0"
                  }`}
                >
                  <div className="relative">
                    {/* Main Image */}
                    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Overlay Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-20`} />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4">
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg sm:shadow-xl border border-gray-200">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${slide.bgColor} flex items-center justify-center`}>
                            {React.cloneElement(slide.icon, {
                              className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                            })}
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Précédent"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Suivant"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-700" />
      </button>

      {/* Mobile Navigation Arrows */}
      <div className="sm:hidden absolute bottom-24 left-0 right-0 flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 hover:bg-white transition-all duration-300 shadow-lg"
          aria-label="Précédent"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 hover:bg-white transition-all duration-300 shadow-lg"
          aria-label="Suivant"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-4 sm:w-6 bg-gradient-to-r from-blue-500 to-purple-600' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;