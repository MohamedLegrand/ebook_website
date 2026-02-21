import React, { useState, useEffect, useRef } from "react";
import { 
  User, Menu, X, Phone, Globe, ChevronDown, Search, 
  ShoppingCart, Package, Trash2, CreditCard, ArrowRight,
  Home, Info, Heart, BookOpen, MessageCircle, ShoppingBag,
  Newspaper, Mail
} from "lucide-react";
import { useCart } from "../../context/CartContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const menuRef = useRef(null);
  const cartRef = useRef(null);

  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();

  // Fermer le menu en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Traductions
  const t = {
    fr: {
      tagline: "Médecine Traditionnelle des Handicapés Spirituels",
      menu: {
        home: "Accueil",
        about: "Qu'est-ce que la MTHS ?",
        handicap: "Handicap Spirituel",
        approach: "Approche Thérapeutique",
        pathologies: "Pathologies",
        journey: "Parcours",
        ritual: "Rite SO'O",
        testimonies: "Témoignages",
        shop: "Boutique",
        news: "Actualités",
        contact: "Contact",
        cart: "Panier",
        checkout: "Paiement",
        continueShopping: "Continuer les achats"
      },
      cta: {
        login: "Connexion",
        register: "S'inscrire",
        emergency: "Urgence Spirituelle",
        search: "Rechercher"
      },
      announcement: {
        msg1: "NOTRE MISSION :",
        msg2: "GUERRIR L'AME",
        msg3: "RESTAURER LE CORPS",
        msg4: "LIBERER L'ESPRIT"
      },
      cartItems: {
        empty: "Votre panier est vide",
        total: "Total",
        remove: "Supprimer",
        viewCart: "Voir le panier",
        checkout: "Procéder au paiement",
        items: "article(s)",
        item: "article"
      }
    },
    en: {
      tagline: "Traditional Medicine for the Spiritually Handicapped",
      menu: {
        home: "Home",
        about: "What is TMSH?",
        handicap: "Spiritual Handicap",
        approach: "Therapeutic Approach",
        pathologies: "Pathologies",
        journey: "Journey",
        ritual: "SO'O Ritual",
        testimonies: "Testimonies",
        shop: "Shop",
        news: "News",
        contact: "Contact",
        cart: "Cart",
        checkout: "Checkout",
        continueShopping: "Continue Shopping"
      },
      cta: {
        login: "Login",
        register: "Register",
        emergency: "Spiritual Emergency",
        search: "Search"
      },
      announcement: {
        msg1: "Healing the Invisible, Restoring Humanity",
        msg2: "Mary Queen of Mercy Center",
        msg3: "Body, Soul and Spirit: One Healing",
        msg4: "Traditional Holistic Medicine"
      },
      cartItems: {
        empty: "Your cart is empty",
        total: "Total",
        remove: "Remove",
        viewCart: "View Cart",
        checkout: "Proceed to Checkout",
        items: "item(s)",
        item: "item"
      }
    }
  };

  const currentLang = t[language];

  // Icônes pour le menu mobile
  const menuIcons = {
    home: <Home className="w-5 h-5" />,
    about: <Info className="w-5 h-5" />,
    handicap: <Heart className="w-5 h-5" />,
    approach: <BookOpen className="w-5 h-5" />,
    pathologies: <Heart className="w-5 h-5" />,
    journey: <ArrowRight className="w-5 h-5" />,
    ritual: <Heart className="w-5 h-5" />,
    testimonies: <MessageCircle className="w-5 h-5" />,
    shop: <ShoppingBag className="w-5 h-5" />,
    news: <Newspaper className="w-5 h-5" />,
    contact: <Mail className="w-5 h-5" />
  };

  // Seulement 3 éléments dans le menu principal
  const mainMenuItems = [
    { label: currentLang.menu.home, href: "/", icon: "home" },
    { label: currentLang.menu.about, href: "/mths", icon: "about" },
    { label: currentLang.menu.handicap, href: "/handicap", icon: "handicap" }
  ];

  // Tous les autres éléments vont dans "Plus"
  const secondaryMenuItems = [
    { label: currentLang.menu.approach, href: "/approche", icon: "approach" },
    { label: currentLang.menu.pathologies, href: "/pathologies", icon: "pathologies" },
    { label: currentLang.menu.journey, href: "/parcours", icon: "journey" },
    { label: currentLang.menu.ritual, href: "/rites", icon: "ritual" },
    { label: currentLang.menu.testimonies, href: "/temoignages", icon: "testimonies" },
    { label: currentLang.menu.shop, href: "/boutique", icon: "shop" },
    { label: currentLang.menu.news, href: "/actualites", icon: "news" },
    { label: currentLang.menu.contact, href: "/contact", icon: "contact" },
  ];

  // Formatage du prix
  const formatPrice = (price) => {
    return price.toLocaleString('fr-FR') + ' FCFA';
  };

  // Calculer le total du panier
  const cartTotal = getCartTotal();

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-blue-900/95 to-blue-800/95 backdrop-blur-md shadow-xl border-b border-blue-700"
          : "bg-gradient-to-b from-blue-50/98 to-white/98 backdrop-blur-sm"
      }`}
      ref={menuRef}
    >
      {/* Bandeau Urgence */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-blue-800 to-blue-900 border-b border-blue-700" 
          : "bg-gradient-to-r from-blue-600 to-blue-700"
      } text-white`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="py-1.5 sm:py-2 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-4">
              <a 
                href="/urgence" 
                className="flex items-center gap-1.5 sm:gap-2 hover:text-blue-100 transition-colors font-medium whitespace-nowrap"
              >
                <Phone size={12} className="sm:w-3 sm:h-3" />
                <span className="hidden xs:inline sm:inline">{currentLang.cta.emergency} :</span>
                <span className="font-bold text-xs sm:text-sm">+237 693 21 54 31</span>
              </a>
              <div className="hidden md:flex items-center gap-4">
                <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
                <span className={`transition-colors ${scrolled ? "text-blue-200" : "text-blue-100"}`}>
                  Centre d'Abili, Yaoundé
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:text-blue-100 transition-colors"
                aria-label="Rechercher"
              >
                <Search size={14} className="sm:w-4 sm:h-4" />
              </button>
              {/* Sélecteur de langue dans le bandeau supérieur (desktop) */}
              <div className="hidden sm:flex items-center gap-1 sm:gap-2">
                <Globe size={12} className="sm:w-3 sm:h-3" />
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium transition-all ${
                    language === 'fr' 
                      ? 'bg-white/20 text-white' 
                      : scrolled ? 'text-blue-300 hover:text-white' : 'text-blue-100 hover:text-white'
                  }`}
                >
                  FR
                </button>
                <span className={scrolled ? "text-blue-300" : "text-blue-200"}>|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium transition-all ${
                    language === 'en' 
                      ? 'bg-white/20 text-white' 
                      : scrolled ? 'text-blue-300 hover:text-white' : 'text-blue-100 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      {isSearchOpen && (
        <div className={`py-3 sm:py-4 animate-fadeIn ${scrolled ? "bg-blue-800 border-b border-blue-700" : "bg-white border-b border-blue-100"}`}>
          <div className="max-w-3xl mx-auto px-3 sm:px-4">
            <div className="relative">
              <input
                type="text"
                placeholder={`${currentLang.cta.search}...`}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 rounded-lg focus:outline-none focus:ring-2 transition-colors text-sm sm:text-base ${
                  scrolled 
                    ? "bg-blue-700/50 border border-blue-600 text-white placeholder-blue-300 focus:ring-blue-400 focus:border-transparent" 
                    : "bg-blue-50 border border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-blue-500 focus:border-transparent"
                }`}
                autoFocus
              />
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2" size={18} 
                color={scrolled ? "#93c5fd" : "#60a5fa"}
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2"
              >
                <X size={18} color={scrolled ? "#93c5fd" : "#60a5fa"} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bandeau Annonces */}
      <div className={`bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 transition-all duration-300 ${
        scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="py-1.5 sm:py-2 overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-6 px-3 sm:px-4 flex-shrink-0">
                  <span className="flex items-center gap-1.5 text-blue-800 text-xs sm:text-sm font-medium">
                    <span className="text-blue-500">•</span>
                    {currentLang.announcement.msg1}
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-800 text-xs sm:text-sm font-medium">
                    <span className="text-blue-500">•</span>
                    {currentLang.announcement.msg2}
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-800 text-xs sm:text-sm font-medium">
                    <span className="text-blue-500">•</span>
                    {currentLang.announcement.msg3}
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-800 text-xs sm:text-sm font-medium">
                    <span className="text-blue-500">•</span>
                    {currentLang.announcement.msg4}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1 sm:flex-none">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0">
              {/* Carte/Encadré du logo */}
              <div className={`absolute inset-0 rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-xl transition-all duration-300 transform group-hover:scale-[1.02] ${
                scrolled 
                  ? "bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 shadow-blue-900/30 group-hover:shadow-blue-800/40"
                  : "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 shadow-blue-500/30 group-hover:shadow-blue-600/40"
              }`}>
                {/* Cadre blanc interne */}
                <div className="w-full h-full bg-white rounded-md sm:rounded-lg overflow-hidden flex items-center justify-center p-1 sm:p-1.5 border border-white">
                  {/* Conteneur de l'image */}
                  <div className="relative w-full h-full rounded-sm sm:rounded-md overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <img 
                      src="/images/logo.png" 
                      alt="Logo MTHS" 
                      className="w-full h-full object-contain p-0.5"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232963cc'/%3E%3Cstop offset='100%25' stop-color='%231e429f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grad)'/%3E%3Ctext x='50' y='55' font-family='Arial, sans-serif' font-size='28' font-weight='bold' fill='white' text-anchor='middle' letter-spacing='1px'%3EMTHS%3C/text%3E%3Ctext x='50' y='75' font-family='Arial, sans-serif' font-size='14' fill='%23bfdbfe' text-anchor='middle'%3E/TMSH%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Texte à côté du logo */}
            <div className="flex flex-col min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight truncate">
                <span className={`transition-colors ${
                  scrolled 
                    ? "text-white" 
                    : "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent"
                }`}>
                  MTHS
                </span>
                <span className={`ml-0.5 text-base sm:text-lg md:text-xl transition-colors ${
                  scrolled ? "text-blue-300" : "text-blue-500"
                }`}>
                  / TMSH
                </span>
              </h1>
              <p className={`text-xs sm:text-sm leading-tight mt-0.5 font-medium max-w-[140px] xs:max-w-[160px] sm:max-w-[240px] md:max-w-[300px] truncate transition-colors ${
                scrolled ? "text-blue-200" : "text-blue-600"
              }`}>
                {currentLang.tagline}
              </p>
            </div>
          </a>

          {/* Menu Desktop - 3 éléments seulement */}
          <div className="hidden lg:flex items-center gap-1 ml-4">
            {mainMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap border ${
                  scrolled
                    ? "text-white hover:text-blue-200 hover:bg-blue-700/50 border-transparent hover:border-blue-600"
                    : "text-blue-800 hover:text-blue-600 hover:bg-blue-50 border-transparent hover:border-blue-200"
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Menu déroulant "Plus" */}
            <div className="relative group">
              <button className={`flex items-center px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border ${
                scrolled
                  ? "text-white hover:text-blue-200 hover:bg-blue-700/50 border-transparent hover:border-blue-600"
                  : "text-blue-800 hover:text-blue-600 hover:bg-blue-50 border-transparent hover:border-blue-200"
              }`}>
                Plus <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-2xl rounded-xl border border-blue-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="p-2">
                  {secondaryMenuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-sm text-blue-800 hover:bg-blue-50 rounded-lg transition-colors mb-1 last:mb-0"
                    >
                      <span className="flex-1">{item.label}</span>
                      <ChevronDown size={14} className="transform -rotate-90 text-blue-400" />
                    </a>
                  ))}
                </div>
                
                {/* Section Urgence */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-t border-blue-200 p-3">
                  <a 
                    href="/urgence" 
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-sm"
                  >
                    <Phone size={14} />
                    <span>Urgence : +237 693 21 54 31</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3" ref={cartRef}>
            {/* Panier d'achat */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors border relative ${
                  scrolled
                    ? "text-white hover:text-blue-200 border-transparent hover:border-blue-600 hover:bg-blue-700/50"
                    : "text-blue-700 hover:text-blue-800 border-transparent hover:border-blue-200 hover:bg-blue-50"
                }`}
                aria-label="Panier"
              >
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center animate-pulse text-[10px] sm:text-xs">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Panier déroulant */}
              {isCartOpen && (
                <div className="fixed sm:absolute right-0 mt-2 w-[calc(100vw-2rem)] max-w-sm sm:w-80 md:w-96 bg-white shadow-2xl rounded-xl border border-blue-100 z-50 animate-fadeIn top-16 sm:top-auto">
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="font-bold text-base sm:text-lg text-blue-900 flex items-center gap-2">
                        <ShoppingCart size={18} className="sm:w-5 sm:h-5 text-blue-600" />
                        {currentLang.menu.cart} ({cart.length})
                      </h3>
                      {cart.length > 0 && (
                        <button
                          onClick={clearCart}
                          className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                          <Trash2 size={12} className="sm:w-3 sm:h-3" />
                          <span className="hidden sm:inline">Vider</span>
                        </button>
                      )}
                    </div>

                    {cart.length === 0 ? (
                      <div className="text-center py-6 sm:py-8">
                        <Package size={40} className="sm:w-12 sm:h-12 text-blue-200 mx-auto mb-3 sm:mb-4" />
                        <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">{currentLang.cartItems.empty}</p>
                        <a
                          href="/boutique"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                          onClick={() => setIsCartOpen(false)}
                        >
                          {currentLang.cartItems.continueShopping}
                          <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                        </a>
                      </div>
                    ) : (
                      <>
                        <div className="max-h-48 sm:max-h-64 overflow-y-auto mb-3 sm:mb-4">
                          {cart.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-blue-50 rounded-lg mb-2 last:mb-0">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img 
                                  src={item.cover} 
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/100x100?text=Produit";
                                  }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-xs sm:text-sm text-blue-900 truncate">{item.title}</h4>
                                <p className="text-xs text-gray-500 truncate">{item.author}</p>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-blue-700 font-bold text-xs sm:text-sm">
                                    {formatPrice(item.price)}
                                  </span>
                                  <span className="text-xs text-blue-600 bg-blue-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                                    {item.format || "Physique"}
                                  </span>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-400 hover:text-red-600 p-1 flex-shrink-0"
                                aria-label="Supprimer"
                              >
                                <Trash2 size={14} className="sm:w-4 sm:h-4" />
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-blue-100 pt-3 sm:pt-4">
                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <span className="font-bold text-blue-900 text-sm sm:text-base">{currentLang.cartItems.total}</span>
                            <span className="text-lg sm:text-xl font-bold text-blue-700">{formatPrice(cartTotal)}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <a
                              href="/cart"
                              className="py-2 sm:py-3 text-center border-2 border-blue-200 text-blue-700 hover:text-blue-800 hover:bg-blue-50 rounded-lg font-medium transition-colors text-sm sm:text-base"
                              onClick={() => setIsCartOpen(false)}
                            >
                              {currentLang.cartItems.viewCart}
                            </a>
                           
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sélecteur de langue mobile */}
            <div className={`flex lg:hidden items-center rounded-lg p-0.5 border transition-colors ${
              scrolled
                ? "bg-blue-800/50 border-blue-700"
                : "bg-blue-100 border-blue-200"
            }`}>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-medium transition-all ${
                  language === 'fr' 
                    ? scrolled 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-600 text-white'
                    : scrolled 
                      ? 'text-blue-300 hover:text-white hover:bg-blue-700/50' 
                      : 'text-blue-700 hover:bg-blue-200'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-medium transition-all ${
                  language === 'en' 
                    ? scrolled 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-600 text-white'
                    : scrolled 
                      ? 'text-blue-300 hover:text-white hover:bg-blue-700/50' 
                      : 'text-blue-700 hover:bg-blue-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Bouton Connexion */}
            <a
              href="/login"
              className={`hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors border ${
                scrolled
                  ? "text-white hover:text-blue-200 border-transparent hover:border-blue-600 hover:bg-blue-700/50"
                  : "text-blue-700 hover:text-blue-800 border-transparent hover:border-blue-200 hover:bg-blue-50"
              }`}
            >
              <User size={16} className="sm:w-4 sm:h-4" />
              <span className="text-sm">{currentLang.cta.login}</span>
            </a>

            {/* Bouton Inscription */}
            <a
              href="/register"
              className={`hidden sm:inline-flex px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap transform hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-gradient-to-r from-white to-blue-100 text-blue-900 hover:from-blue-100 hover:to-white shadow-blue-900/30"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue-500/30"
              }`}
            >
              {currentLang.cta.register}
            </a>

            {/* Menu Mobile Toggle */}
            <button
              className={`lg:hidden p-1.5 sm:p-2 rounded-lg transition-colors border ${
                scrolled
                  ? "text-white hover:text-blue-200 border-transparent hover:border-blue-600 hover:bg-blue-700/50"
                  : "text-blue-700 border-transparent hover:border-blue-200 hover:bg-blue-50"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`lg:hidden fixed inset-x-0 top-0 h-full bg-white transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full overflow-y-auto pb-20">
            {/* Header du menu mobile */}
            <div className="sticky top-0 bg-white border-b border-blue-100 p-3 sm:p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Logo dans le menu mobile */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-1 sm:p-1.5 shadow-md">
                    <div className="w-full h-full bg-white rounded-md overflow-hidden">
                      <img 
                        src="/images/logo.jpeg" 
                        alt="Logo" 
                        className="w-full h-full object-contain p-0.5"
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-bold text-blue-800 truncate">MTHS/TMSH</div>
                    <div className="text-xs text-blue-600 mt-0.5 truncate">{currentLang.tagline}</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <X size={20} className="sm:w-6 sm:h-6 text-blue-600" />
                </button>
              </div>
            </div>

            {/* Navigation mobile */}
            <div className="p-3 sm:p-4">
              {/* Panier dans le menu mobile */}
              <div className="mb-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                      <ShoppingCart size={18} className="sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-800 text-sm sm:text-base">{currentLang.menu.cart}</p>
                      <p className="text-xs sm:text-sm text-blue-700">
                        {cart.length} {cart.length === 1 ? currentLang.cartItems.item : currentLang.cartItems.items}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-700 text-base sm:text-lg">{formatPrice(cartTotal)}</p>
                    {cart.length > 0 && (
                      <button
                        onClick={clearCart}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 mt-1"
                      >
                        <Trash2 size={10} className="sm:w-3 sm:h-3" />
                        Vider
                      </button>
                    )}
                  </div>
                </div>
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500 text-xs sm:text-sm">{currentLang.cartItems.empty}</p>
                ) : (
                  <div className="space-y-2">
                    {cart.slice(0, 3).map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={item.cover} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-blue-900 truncate">{item.title}</p>
                          <p className="text-xs text-blue-600">{formatPrice(item.price)}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-600 p-1 flex-shrink-0"
                        >
                          <Trash2 size={12} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    ))}
                    <div className="flex gap-2 pt-2">
                      <a
                        href="/panier"
                        className="flex-1 py-2 text-center border border-blue-300 text-blue-700 hover:bg-blue-50 rounded-lg text-xs sm:text-sm font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {currentLang.cartItems.viewCart}
                      </a>
                      <a
                        href="/checkout"
                        className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <CreditCard size={14} className="sm:w-4 sm:h-4" />
                        {currentLang.cartItems.checkout}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Sélecteur de langue mobile */}
              <div className="mb-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <Globe size={18} className="sm:w-5 sm:h-5 text-blue-600" />
                  <span className="font-semibold text-blue-800 text-sm sm:text-base">Langue / Language</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`flex-1 py-2 sm:py-3 rounded-lg text-center font-medium transition-all text-sm sm:text-base ${
                      language === 'fr' 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md' 
                        : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 py-2 sm:py-3 rounded-lg text-center font-medium transition-all text-sm sm:text-base ${
                      language === 'en' 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md' 
                        : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Menu items */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider px-2 py-1">
                  Navigation Principale
                </div>
                {mainMenuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-3 sm:px-4 py-3 text-blue-800 hover:bg-blue-50 rounded-xl transition-colors font-medium border border-transparent hover:border-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600">
                        {menuIcons[item.icon]}
                      </div>
                      <span className="text-sm sm:text-base">{item.label}</span>
                    </div>
                    <ChevronDown size={16} className="transform -rotate-90 text-blue-400" />
                  </a>
                ))}
                
                <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider px-2 py-1 mt-3">
                  Autres Sections
                </div>
                {secondaryMenuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-3 sm:px-4 py-3 text-blue-700 hover:bg-blue-50 rounded-xl transition-colors font-medium border border-transparent hover:border-blue-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600">
                        {menuIcons[item.icon]}
                      </div>
                      <span className="text-sm sm:text-base">{item.label}</span>
                    </div>
                    <ChevronDown size={14} className="transform -rotate-90 text-blue-400" />
                  </a>
                ))}
              </div>

              {/* Actions mobile */}
              <div className="mt-6 space-y-2">
                <a
                  href="/login"
                  className="flex items-center justify-center gap-2 w-full py-3 border-2 border-blue-200 text-blue-700 hover:text-blue-800 hover:bg-blue-50 rounded-xl font-semibold transition-colors text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} className="sm:w-5 sm:h-5" />
                  {currentLang.cta.login}
                </a>
                
                <a
                  href="/register"
                  className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentLang.cta.register}
                </a>
              </div>

              {/* Contact info mobile */}
              <div className="mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                    <Phone size={18} className="sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-800 text-sm sm:text-base">{currentLang.cta.emergency}</p>
                    <p className="text-xs sm:text-sm text-blue-700 font-semibold">+237 693 21 54 31</p>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-blue-700 space-y-1.5">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Centre d'Abili, Yaoundé
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Lundi - Samedi: 8h - 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay pour menu mobile */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Styles Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 45s;
          }
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-8px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}

export default Header;