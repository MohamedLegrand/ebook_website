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
          ? 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-2xl' 
          : 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-xl'
      }`}
    >
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
          <span className="font-medium">
            <span className="hidden sm:inline">Plus de 10 000 eBooks & Livres Audio • Téléchargement instantané • </span>
            Lecture sur tous vos appareils
          </span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Section - Optimisé pour visibilité */}
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
            
            <a href="/" className="flex items-center gap-3 group">
              {/* Logo avec meilleur contraste */}
              <div className="bg-white p-2.5 rounded-xl shadow-lg group-hover:shadow-blue-300/50 group-hover:scale-105 transition-all duration-300 border-2 border-blue-100">
                <img 
                  src="/src/assets/images/logo.jpeg" 
                  alt="Logo eBookPro" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg"
                />
              </div>
              
              {/* Nom de l'entreprise - Texte ajusté */}
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
                  eBook<span className="text-cyan-300">Pro</span>
                </h1>
                <p className="text-xs text-blue-200 hidden sm:block leading-tight mt-0.5">
                  Votre bibliothèque numérique
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Pages visiteur */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { label: "Accueil", href: "/" },
              { label: "Catégories", href: "/categories" },
              { label: "Livres Audio", href: "/livres-audio" },
              { label: "À propos", href: "/a-propos" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href={item.href || "#"}
                  className="flex items-center gap-1.5 px-3 lg:px-4 py-2.5 rounded-xl transition-all duration-200 text-white hover:bg-white/10 hover:-translate-y-0.5 text-sm lg:text-base"
                >
                  <span className="font-medium whitespace-nowrap">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions - Boutons connexion */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button 
              className="hidden sm:flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 border-2 border-white/30 hover:bg-white/10 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 text-white text-sm lg:text-base"
            >
              <User size={18} />
              <span className="hidden lg:inline">Connexion</span>
            </button>
            <button 
              className="flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-cyan-500/50 text-white text-sm lg:text-base whitespace-nowrap"
            >
              <span>S'inscrire</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gradient-to-b from-blue-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 animate-fadeInUp">
            <div className="space-y-1">
              {[
                { label: "Accueil", icon: "🏠", href: "/" },
                { label: "Catégories", icon: "📚", href: "/categories" },
                { label: "Livres Audio", icon: "🎧", href: "/livres-audio" },
                { label: "À propos", icon: "ℹ️", href: "/a-propos" },
                { label: "FAQ", icon: "❓", href: "/faq" },
                { label: "Contact", icon: "📞", href: "/contact" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3.5 text-base rounded-xl hover:bg-white/10 transition-all hover:translate-x-2 opacity-0 animate-fadeInSlide text-white font-medium"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            
            {/* Auth Buttons Mobile */}
            <div className="mt-6 pt-6 border-t border-white/20 space-y-3 opacity-0 animate-fadeIn" style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}>
              <button 
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white py-3.5 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Créer un compte gratuit
              </button>
              <button className="w-full border-2 border-white/30 hover:bg-white/10 text-white py-3.5 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2">
                <User size={20} />
                <span>Se connecter</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Animations CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        
        .animate-fadeInSlide {
          animation: fadeInSlide 0.3s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </header>
  );
}

export default Header;