import React, { useState, useEffect } from "react";
import { User, Menu, X, ShoppingCart } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Exemple: 3 articles dans le panier

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour gérer la redirection
  const handleAudioClick = () => {
    window.location.href = "/audio";
  };

  // Fonction pour gérer le clic sur le panier
  const handleCartClick = () => {
    window.location.href = "/cart";
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-blue-900/20 border-b border-blue-200"
          : "bg-gradient-to-r from-blue-50 to-sky-50 shadow-md shadow-blue-800/10"
      }`}
    >
      {/* Top Announcement Bar - Infinite scrolling */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs sm:text-sm py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex">
          {/* Premier set */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 flex-shrink-0">
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">📚</span>
              <span className="whitespace-nowrap">Plus de 10 000 livres</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">⚡</span>
              <span className="whitespace-nowrap">Téléchargement instantané</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">📱</span>
              <span className="whitespace-nowrap">Lecture multi-appareils</span>
            </span>
          </div>
          
          {/* Deuxième set */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 flex-shrink-0">
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">📚</span>
              <span className="whitespace-nowrap">Plus de 10 000 livres</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">⚡</span>
              <span className="whitespace-nowrap">Téléchargement instantané</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">📱</span>
              <span className="whitespace-nowrap">Lecture multi-appareils</span>
            </span>
          </div>
          
          {/* Troisième set */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 flex-shrink-0">
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">📚</span>
              <span className="whitespace-nowrap">Plus de 10 000 livres</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">⚡</span>
              <span className="whitespace-nowrap">Téléchargement instantané</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-sm sm:text-base">📱</span>
              <span className="whitespace-nowrap">Lecture multi-appareils</span>
            </span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Logo + Menu mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="lg:hidden p-1.5 sm:p-2 hover:bg-blue-100 rounded-lg transition-all active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X size={20} className="sm:w-6 sm:h-6 text-blue-800" />
              ) : (
                <Menu size={20} className="sm:w-6 sm:h-6 text-blue-800" />
              )}
            </button>

            <a href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="bg-blue-100 p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl shadow-md group-hover:shadow-blue-300/70 group-hover:scale-105 transition-all duration-300 border-2 border-blue-200">
                <img
                  src="/src/assets/images/logo.jpeg"
                  alt="Logo eBookPro"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-blue-900 leading-tight">
                  eBook<span className="text-cyan-600">Pro</span>
                </h1>
                <p className="text-xs text-blue-600 hidden sm:block leading-tight mt-0.5">
                  Votre bibliothèque numérique
                </p>
              </div>
            </a>
          </div>

          {/* Navigation desktop */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {[
              { label: "Accueil", href: "/" },
              { label: "Catégories", href: "/categories" },
              { label: "Livres Audio", href: "/audio" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center px-3 xl:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 text-blue-800 hover:bg-blue-100 hover:-translate-y-0.5 text-sm xl:text-base font-medium whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            {/* Bouton Panier */}
            <button
              onClick={handleCartClick}
              className="relative p-2 sm:p-2.5 hover:bg-blue-50 rounded-lg transition-all hover:scale-105 active:scale-95 text-blue-800 border border-transparent hover:border-blue-200"
              aria-label="Panier"
              title="Panier"
            >
              <ShoppingCart size={20} className="sm:w-6 sm:h-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Bouton Livres Audio (mobile only) */}
            <button
              onClick={handleAudioClick}
              className="flex lg:hidden items-center justify-center p-2 sm:p-2.5 border-2 border-blue-300 hover:bg-blue-50 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 text-blue-800"
              aria-label="Livres Audio"
              title="Livres Audio"
            >
              <span className="text-lg sm:text-xl">🎧</span>
            </button>

            {/* Bouton Connexion */}
            <a
              href="/login"
              className="hidden sm:flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 border-2 border-blue-300 hover:bg-blue-50 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 text-blue-800 text-sm lg:text-base whitespace-nowrap"
            >
              <User size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden md:inline">Connexion</span>
            </a>

            {/* Bouton Inscription */}
            <a
              href="/register"
              className="flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-900/30 text-white text-sm lg:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">S'inscrire</span>
              <span className="sm:hidden">Inscription</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-blue-900/20 p-4 sm:p-6 animate-fadeInUp border border-blue-200">
            <div className="space-y-1">
              {[
                { label: "Accueil", icon: "🏠", href: "/" },
                { label: "Catégories", icon: "📚", href: "/categories" },
                { label: "Livres Audio", icon: "🎧", href: "/audio" },
                { 
                  label: "Panier", 
                  icon: "🛒", 
                  href: "/cart",
                  badge: cartItems > 0 ? `(${cartItems})` : ""
                },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-xl hover:bg-blue-50 transition-all hover:translate-x-2 opacity-0 animate-fadeInSlide text-blue-900 font-medium"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg sm:text-xl">{item.icon}</span>
                    {item.label}
                  </div>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Auth Mobile */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-200 space-y-2 sm:space-y-3 opacity-0 animate-fadeIn">
              <a
                href="/register"
                className="block text-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-blue-900/30"
                onClick={() => setIsMenuOpen(false)}
              >
                Créer un compte gratuit
              </a>

              <a
                href="/login"
                className="w-full border-2 border-blue-300 hover:bg-blue-50 text-blue-800 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} className="sm:w-5 sm:h-5" />
                Se connecter
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Styles pour l'animation marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInSlide {
          animation: fadeInSlide 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out 0.3s forwards;
        }
      `}</style>
    </header>
  );
}

export default Header;