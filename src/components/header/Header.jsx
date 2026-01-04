import React, { useState, useEffect } from "react";
import { Search, User, ShoppingCart, Menu, X, BookOpen, Sparkles, ChevronDown } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
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
          ? 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-2xl py-2' 
          : 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-xl py-3'
      }`}
    >
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="font-medium">Livraison gratuite dès 20€ d'achat • Nouveautés ajoutées quotidiennement</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-white p-2.5 rounded-xl shadow-lg group-hover:shadow-blue-300/50 group-hover:scale-105 transition-all duration-300">
                <BookOpen className="text-blue-700" size={28} />
              </div>
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  eBook<span className="text-blue-300">Pro</span>
                </h1>
                <p className="text-xs text-blue-200 hidden sm:block opacity-0 sm:opacity-100 transition-opacity duration-500">
                  Lecture sans limites
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {[
              { label: "Accueil", icon: "🏠" },
              { label: "Bibliothèque", icon: "📚", active: true },
              { label: "Catégories", icon: "🏷️", dropdown: true },
              { label: "Nouveautés", icon: "✨", badge: "New" },
              { label: "Promotions", icon: "🔥" },
              { label: "Abonnements", icon: "⭐" },
            ].map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 group-hover:bg-white/10 group-hover:-translate-y-0.5"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                  {item.dropdown && <ChevronDown size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-xs px-2 py-1 rounded-full animate-bounce">
                      {item.badge}
                    </span>
                  )}
                </a>
                
                {/* Simple Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                    <div className="p-3 space-y-1">
                      {["Roman", "Business", "Science", "Histoire", "Santé", "Développement personnel", "Technologie", "Arts"].map((cat) => (
                        <a
                          key={cat}
                          href="#"
                          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors group/item"
                        >
                          <span>{cat}</span>
                          <span className="text-blue-500 opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="p-2.5 hover:bg-white/10 rounded-full transition-all hover:scale-110 active:scale-95"
              aria-label="Rechercher"
            >
              <Search size={22} />
            </button>

            {/* Cart */}
            <button className="relative p-2.5 hover:bg-white/10 rounded-full transition-all group" aria-label="Panier">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold shadow-lg animate-pulse">
                3
              </span>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 translate-y-2 group-hover:translate-y-0">
                <p className="text-gray-700 font-medium mb-2">Panier (3)</p>
                <p className="text-sm text-gray-500">Total: 45.99€</p>
                <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors">
                  Voir le panier
                </button>
              </div>
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-full transition-all">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2 rounded-full">
                  <User size={20} />
                </div>
                <span className="hidden lg:inline font-medium">Mon Compte</span>
                <ChevronDown size={16} className="hidden lg:inline" />
              </button>
              
              {/* User Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="p-4 border-b">
                  <p className="font-semibold text-gray-800">Bonjour, Jean</p>
                  <p className="text-sm text-gray-500">Membre Premium</p>
                </div>
                <div className="p-2 space-y-1">
                  {["Ma Bibliothèque", "Mes Favoris", "Historique", "Mes Achats", "Listes de souhaits", "Paramètres"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <span>{item}</span>
                    </a>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]">
                      Se déconnecter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Search Bar with animation */}
        {isSearchVisible && (
          <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-blue-800 to-blue-900 p-6 shadow-2xl animate-fadeInDown">
            <div className="max-w-3xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-300" size={24} />
                <input
                  type="text"
                  placeholder="Rechercher un livre, auteur, ISBN, genre..."
                  className="w-full pl-14 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
                  autoFocus
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                  <button className="px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-sm transition-colors">
                    Tous
                  </button>
                  <button className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors">
                    Auteurs
                  </button>
                </div>
              </div>
              <div className="flex gap-3 mt-4 justify-center text-sm text-blue-200 flex-wrap">
                <span className="font-medium">Suggestions :</span>
                {["Science-fiction", "Développement web", "Roman policier", "Finance"].map((tag) => (
                  <button key={tag} className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu with animation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gradient-to-b from-blue-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 animate-fadeInUp">
            <div className="space-y-1">
              {["Accueil", "Bibliothèque", "Catégories", "Nouveautés", "Promotions", "Abonnements", "Mes Favoris", "Paramètres"].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-3 px-4 py-4 text-lg rounded-xl hover:bg-white/10 transition-all hover:translate-x-2 opacity-0 animate-fadeInSlide"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                >
                  <span className="text-xl">{
                    ["🏠", "📚", "🏷️", "✨", "🔥", "⭐", "❤️", "⚙️"][index]
                  }</span>
                  <span>{item}</span>
                  {index === 2 && (
                    <span className="ml-auto bg-blue-500 text-xs px-2 py-1 rounded-full">
                      8+
                    </span>
                  )}
                </a>
              ))}
            </div>
            
            {/* Auth Buttons */}
            <div className="mt-8 pt-6 border-t border-white/20 space-y-3 opacity-0 animate-fadeIn" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3.5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Connexion
              </button>
              <button className="w-full border-2 border-white/30 hover:bg-white/10 text-white py-3.5 rounded-xl font-semibold text-lg transition-all">
                S'inscrire gratuitement
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Add CSS animations in your global CSS file */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease-out forwards;
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