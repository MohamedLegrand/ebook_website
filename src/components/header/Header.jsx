import React, { useState, useEffect } from "react";
import { User, Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-blue-900/20 border-b border-blue-200"
          : "bg-gradient-to-r from-blue-50 to-sky-50 shadow-md shadow-blue-800/10"
      }`}
    >
      {/* Top Announcement Bar - Infinite scrolling */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex">
          {/* Premier set */}
          <div className="flex items-center gap-4 px-4 flex-shrink-0">
            <span className="flex items-center gap-1">
              <span className="text-base">📚</span>
              <span>Plus de 10 000 livres</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-base">⚡</span>
              <span>Téléchargement instantané</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-base">📱</span>
              <span>Lecture multi-appareils</span>
            </span>
          </div>
          
          {/* Deuxième set (répété pour l'animation fluide) */}
          <div className="flex items-center gap-4 px-4 flex-shrink-0">
            <span className="flex items-center gap-1">
              <span className="text-base">📚</span>
              <span>Plus de 10 000 livres</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-base">⚡</span>
              <span>Téléchargement instantané</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-base">📱</span>
              <span>Lecture multi-appareils</span>
            </span>
          </div>
          
          {/* Troisième set (pour un défilement très fluide) */}
          <div className="flex items-center gap-4 px-4 flex-shrink-0">
            <span className="flex items-center gap-1">
              <span className="text-base">📚</span>
              <span>Plus de 10 000 livres</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-base">⚡</span>
              <span>Téléchargement instantané</span>
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="text-base">📱</span>
              <span>Lecture multi-appareils</span>
            </span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo + Menu mobile */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 hover:bg-blue-100 rounded-lg transition-all active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-blue-800" />
              ) : (
                <Menu size={24} className="text-blue-800" />
              )}
            </button>

            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-blue-100 p-2.5 rounded-xl shadow-md group-hover:shadow-blue-300/70 group-hover:scale-105 transition-all duration-300 border-2 border-blue-200">
                <img
                  src="/src/assets/images/logo.jpeg"
                  alt="Logo eBookPro"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-blue-900 leading-tight">
                  eBook<span className="text-cyan-600">Pro</span>
                </h1>
                <p className="text-xs text-blue-600 hidden sm:block leading-tight mt-0.5">
                  Votre bibliothèque numérique
                </p>
              </div>
            </a>
          </div>

          {/* Navigation desktop */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { label: "Accueil", href: "/" },
              { label: "Catégories", href: "/categories" },
              { label: "Livres Audio", href: "/livres-audio" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center px-3 lg:px-4 py-2.5 rounded-xl transition-all duration-200 text-blue-800 hover:bg-blue-100 hover:-translate-y-0.5 text-sm lg:text-base font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            <a
              href="/login"
              className="hidden sm:flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 border-2 border-blue-300 hover:bg-blue-50 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 text-blue-800 text-sm lg:text-base"
            >
              <User size={18} />
              <span className="hidden lg:inline">Connexion</span>
            </a>

            <a
              href="/register"
              className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-900/30 text-white text-sm lg:text-base whitespace-nowrap"
            >
              S'inscrire
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-900/20 p-6 animate-fadeInUp border border-blue-200">
            <div className="space-y-1">
              {[
                { label: "Accueil", icon: "🏠", href: "/" },
                { label: "Catégories", icon: "📚", href: "/categories" },
                { label: "Livres Audio", icon: "🎧", href: "/livres-audio" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3.5 text-base rounded-xl hover:bg-blue-50 transition-all hover:translate-x-2 opacity-0 animate-fadeInSlide text-blue-900 font-medium"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Auth Mobile */}
            <div className="mt-6 pt-6 border-t border-blue-200 space-y-3 opacity-0 animate-fadeIn">
              <a
                href="/register"
                className="block text-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-blue-900/30"
              >
                Créer un compte gratuit
              </a>

              <a
                href="/login"
                className="w-full border-2 border-blue-300 hover:bg-blue-50 text-blue-800 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <User size={20} />
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
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </header>
  );
}

export default Header;