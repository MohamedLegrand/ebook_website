import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  User, Menu, X, Phone, Globe, ChevronDown, Search,
  ShoppingCart, Package, Trash2, CreditCard, ArrowRight,
  Home, Info, Heart, BookOpen, MessageCircle, ShoppingBag,
  Newspaper, Mail, Sparkles, AlertCircle, ChevronRight
} from "lucide-react";
import { useCart } from "../../context/CartContext";

// Hook personnalisé pour détecter les clics en dehors
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartRef = useRef(null);
  const searchRef = useRef(null);

  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();

  useOnClickOutside(cartRef, useCallback(() => setIsCartOpen(false), []));

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const t = useMemo(() => ({
    fr: {
      tagline: "Médecine Traditionnelle des Handicapés Spirituels",
      taglineShort: "MTHS",
      nav: [
        { label: "Accueil", href: "/", icon: "home" },
        { label: "La MTHS", href: "/mths", icon: "about" },
        { label: "Handicap Spirituel", href: "/handicap", icon: "handicap" },
        { label: "Approche Thérapeutique", href: "/approche", icon: "approach" },
        { label: "Pathologies", href: "/pathologies", icon: "pathologies" },
        { label: "Parcours", href: "/parcours", icon: "journey" },
        { label: "Rite SO'O", href: "/rites", icon: "ritual" },
        { label: "Témoignages", href: "/temoignages", icon: "testimonies" },
        { label: "Boutique", href: "/boutique", icon: "shop" },
        { label: "Actualités", href: "/actualites", icon: "news" },
        { label: "Contact", href: "/contact", icon: "contact" },
      ],
      cta: { login: "Connexion", register: "S'inscrire", emergency: "Urgence", search: "Rechercher..." },
      cart: {
        title: "Panier", empty: "Votre panier est vide", total: "Total",
        view: "Voir le panier", checkout: "Payer", clear: "Vider",
        continue: "Continuer mes achats", item: "article", items: "articles"
      },
      ticker: ["NOTRE MISSION", "GUÉRIR L'ÂME", "RESTAURER LE CORPS", "LIBÉRER L'ESPRIT", "Centre Marie Reine de la Miséricorde"]
    },
    en: {
      tagline: "Traditional Medicine for the Spiritually Handicapped",
      taglineShort: "TMSH",
      nav: [
        { label: "Home", href: "/", icon: "home" },
        { label: "About TMSH", href: "/mths", icon: "about" },
        { label: "Spiritual Handicap", href: "/handicap", icon: "handicap" },
        { label: "Therapeutic Approach", href: "/approche", icon: "approach" },
        { label: "Pathologies", href: "/pathologies", icon: "pathologies" },
        { label: "Journey", href: "/parcours", icon: "journey" },
        { label: "SO'O Ritual", href: "/rites", icon: "ritual" },
        { label: "Testimonies", href: "/temoignages", icon: "testimonies" },
        { label: "Shop", href: "/boutique", icon: "shop" },
        { label: "News", href: "/actualites", icon: "news" },
        { label: "Contact", href: "/contact", icon: "contact" },
      ],
      cta: { login: "Login", register: "Sign Up", emergency: "Emergency", search: "Search..." },
      cart: {
        title: "Cart", empty: "Your cart is empty", total: "Total",
        view: "View Cart", checkout: "Checkout", clear: "Clear",
        continue: "Continue Shopping", item: "item", items: "items"
      },
      ticker: ["OUR MISSION", "HEAL THE SOUL", "RESTORE THE BODY", "FREE THE SPIRIT", "Mary Queen of Mercy Center"]
    }
  }), []);

  const lang = t[language];

  const icons = {
    home: <Home className="w-4 h-4" />,
    about: <Info className="w-4 h-4" />,
    handicap: <Heart className="w-4 h-4" />,
    approach: <BookOpen className="w-4 h-4" />,
    pathologies: <Sparkles className="w-4 h-4" />,
    journey: <ArrowRight className="w-4 h-4" />,
    ritual: <Heart className="w-4 h-4" />,
    testimonies: <MessageCircle className="w-4 h-4" />,
    shop: <ShoppingBag className="w-4 h-4" />,
    news: <Newspaper className="w-4 h-4" />,
    contact: <Mail className="w-4 h-4" />,
  };

  const mainNav = lang.nav.slice(0, 2);
  const moreNav = lang.nav.slice(2);
  const cartTotal = getCartTotal();
  const cartCount = cart.reduce((s, i) => s + (i.quantity || 1), 0);
  const fmt = (p) => p.toLocaleString("fr-FR") + " FCFA";
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        /* Animations */
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
          will-change: transform;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }

        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .dropdown-animate {
          animation: dropdown 0.2s ease-out;
        }

        /* Scrollbar fine */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #bfdbfe;
          border-radius: 20px;
        }

        /* Empêcher la tagline de déborder sur très petits écrans */
        @media (max-width: 360px) {
          .logo-tagline {
            max-width: 100px !important;
          }
        }
      `}</style>

      {/* Header principal avec overflow-visible pour les dropdowns */}
      <header className="sticky top-0 z-50 bg-white shadow-md shadow-blue-100/50 overflow-visible">

        {/* ===== TOP BAR ===== */}
        <div className="h-9 bg-blue-50 border-b border-blue-100 flex items-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-3 flex items-center justify-between gap-2">
            {/* Lien urgence */}
            <Link
              to="/urgence"
              className="flex items-center gap-1.5 text-blue-800 hover:text-blue-600 transition-colors shrink-0"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 animate-pulse" />
              <span className="text-xs font-semibold whitespace-nowrap">
                <span className="hidden sm:inline">Urgence : </span>
                <span className="font-bold">+237 693 21 54 31</span>
              </span>
            </Link>

            {/* Ticker visible sur tous les écrans (responsive) */}
            <div className="flex-1 overflow-hidden mx-2 sm:mx-4">
              <div className="animate-ticker flex items-center gap-4 sm:gap-8 whitespace-nowrap text-[10px] sm:text-xs">
                {[...lang.ticker, ...lang.ticker].map((msg, i) => (
                  <span key={i} className="flex items-center gap-2 text-blue-600 font-medium">
                    <span className="w-1 h-1 bg-blue-400 rounded-full" />
                    {msg}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions droite */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 text-blue-600 hover:text-blue-800 transition-colors rounded-md"
                aria-label="Rechercher"
              >
                <Search className="w-4 h-4" />
              </button>

              <div className="flex items-center bg-blue-100 rounded-md overflow-hidden border border-blue-200">
                {["fr", "en"].map((l, idx) => (
                  <React.Fragment key={l}>
                    {idx > 0 && <div className="w-px h-3 bg-blue-300" />}
                    <button
                      onClick={() => setLanguage(l)}
                      className={`px-2 py-0.5 text-xs font-bold transition-all ${
                        language === l ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-200"
                      }`}
                    >
                      {l.toUpperCase()}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== BARRE DE RECHERCHE ===== */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isSearchOpen ? "max-h-16 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          } bg-white border-b border-blue-100`}
        >
          <div className="max-w-2xl mx-auto px-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang.cta.search}
                className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-blue-200 bg-white text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600"
                aria-label="Fermer la recherche"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ===== NAVBAR PRINCIPALE ===== */}
        <nav className="h-[72px] w-full max-w-7xl mx-auto px-3 flex items-center justify-between gap-3">

          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-14 h-14 relative flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Logo MTHS"
                className="absolute inset-0 w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.querySelector(".logo-fallback").style.display = "flex";
                }}
              />
              <div className="logo-fallback absolute inset-0 hidden items-center justify-center bg-blue-100 rounded-full">
                <span className="text-2xl font-black text-blue-700">M</span>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline gap-1">
                <span className="text-[22px] font-black leading-none text-blue-900 whitespace-nowrap">MTHS</span>
                <span className="text-[11px] font-semibold text-blue-600 whitespace-nowrap">/TMSH</span>
              </div>
              <span className="logo-tagline text-[11px] font-medium text-blue-500 truncate max-w-[160px] sm:max-w-[220px] lg:max-w-[320px]">
                {lang.tagline}
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={item.href === "/" ? scrollToTop : undefined}
                className="px-3 py-2 rounded-lg text-sm font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-all whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown "Plus" */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-all">
                Plus
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-2xl shadow-blue-200/50 border border-blue-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 dropdown-animate">
                <div className="p-1.5">
                  {moreNav.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors"
                    >
                      <span className="text-blue-500 shrink-0">{icons[item.icon]}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-blue-100 p-3 bg-blue-50 rounded-b-xl">
                  <a href="tel:+237693215431" className="flex items-center gap-2 text-xs text-blue-600 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                    Urgence : +237 693 21 54 31
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Actions droite */}
          <div className="flex items-center gap-1.5 shrink-0" ref={cartRef}>
            {/* Panier */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative flex items-center justify-center w-10 h-10 rounded-xl text-blue-700 hover:bg-blue-50 transition-all"
                aria-label={lang.cart.title}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button>

              {/* Dropdown panier */}
              {isCartOpen && (
                <div className="absolute top-full right-0 mt-2 w-[min(384px,calc(100vw-24px))] bg-white rounded-2xl shadow-2xl shadow-blue-200/60 border border-blue-100 z-50 overflow-hidden dropdown-animate">
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span className="font-bold text-sm">{lang.cart.title}</span>
                      <span className="bg-white/20 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                        {cartCount}
                      </span>
                    </div>
                    {cart.length > 0 && (
                      <button
                        onClick={clearCart}
                        className="flex items-center gap-1 text-xs text-blue-200 hover:text-white transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                        {lang.cart.clear}
                      </button>
                    )}
                  </div>

                  <div className="p-3">
                    {cart.length === 0 ? (
                      <div className="text-center py-8">
                        <Package className="w-12 h-12 text-blue-100 mx-auto mb-3" />
                        <p className="text-gray-400 text-sm mb-4">{lang.cart.empty}</p>
                        <Link
                          to="/boutique"
                          onClick={() => setIsCartOpen(false)}
                          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          {lang.cart.continue} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    ) : (
                      <>
                        <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                          {cart.map((item, i) => (
                            <div key={`${item.id}-${i}`} className="flex items-center gap-2 p-2 rounded-xl hover:bg-blue-50 transition-colors">
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-blue-100 shrink-0">
                                <img
                                  src={item.cover}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => { e.target.src = "https://via.placeholder.com/48x48?text=📚"; }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-blue-900 truncate">{item.title}</p>
                                <p className="text-[10px] text-gray-400 truncate">{item.author}</p>
                                <div className="flex items-center gap-1 mt-0.5">
                                  <span className="text-xs font-bold text-blue-700">{fmt(item.price)}</span>
                                  {item.quantity > 1 && <span className="text-[10px] text-gray-400">×{item.quantity}</span>}
                                </div>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-300 hover:text-red-500 transition-colors p-1 shrink-0"
                                aria-label="Retirer du panier"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-blue-100">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-bold text-blue-900">{lang.cart.total}</span>
                            <span className="text-base font-black text-blue-700">{fmt(cartTotal)}</span>
                          </div>
                          <div className="flex gap-2">
                            <Link
                              to="/cart"
                              onClick={() => setIsCartOpen(false)}
                              className="flex-1 py-2.5 text-center text-sm font-semibold text-blue-700 border-2 border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
                            >
                              {lang.cart.view}
                            </Link>
                            <Link
                              to="/checkout"
                              onClick={() => setIsCartOpen(false)}
                              className="flex-1 py-2.5 text-center text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30"
                            >
                              {lang.cart.checkout}
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Login (desktop) */}
            <Link
              to="/login"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-all"
            >
              <User className="w-4 h-4" />
              {lang.cta.login}
            </Link>

            {/* Register (tablette+) */}
            <Link
              to="/register"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 transition-all whitespace-nowrap"
            >
              {lang.cta.register}
            </Link>

            {/* Menu hamburger (mobile/tablet) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-blue-700 hover:bg-blue-50 transition-all"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 z-[60] bg-blue-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer mobile */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-[min(85vw,340px)] bg-white flex flex-col transition-transform duration-300 ease-out lg:hidden shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="shrink-0 bg-gradient-to-r from-blue-800 to-blue-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center shrink-0">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-full object-contain p-1"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
            <div>
              <p className="text-white font-black text-base leading-none">MTHS/TMSH</p>
              <p className="text-blue-300 text-[10px] leading-tight mt-0.5 max-w-[170px] truncate">
                {lang.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain custom-scrollbar">
          {/* Langue */}
          <div className="px-4 pt-4 pb-3 border-b border-blue-50">
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Globe className="w-3 h-3" /> Langue / Language
            </p>
            <div className="flex gap-2">
              {["fr", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                    language === l
                      ? "bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                      : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                  }`}
                >
                  {l === "fr" ? "🇫🇷 Français" : "🇬🇧 English"}
                </button>
              ))}
            </div>
          </div>

          {/* Recherche */}
          <div className="px-4 py-3 border-b border-blue-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                placeholder={lang.cta.search}
                className="w-full pl-9 pr-4 py-2.5 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Panier résumé */}
          <div className="px-4 py-3 border-b border-blue-50">
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <ShoppingCart className="w-3 h-3" /> {lang.cart.title} ({cartCount})
            </p>
            {cart.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-2">{lang.cart.empty}</p>
            ) : (
              <>
                <div className="space-y-1.5 max-h-36 overflow-y-auto mb-2.5 custom-scrollbar">
                  {cart.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-blue-50 rounded-xl p-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-blue-100 shrink-0">
                        <img
                          src={item.cover}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=📚"; }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-blue-900 truncate">{item.title}</p>
                        <p className="text-[10px] text-blue-600 font-bold">{fmt(item.price)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 p-0.5 shrink-0"
                        aria-label="Retirer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                  {cart.length > 4 && (
                    <p className="text-xs text-blue-400 text-center">+{cart.length - 4} autre(s) article(s)</p>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2.5 bg-blue-50 rounded-xl px-3 py-2">
                  <span className="text-sm font-bold text-blue-900">{lang.cart.total}</span>
                  <span className="text-sm font-black text-blue-700">{fmt(cartTotal)}</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    to="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 py-2 text-center text-sm font-semibold text-blue-700 border-2 border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    {lang.cart.view}
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex-1 py-2 text-center text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg shadow-blue-500/25"
                  >
                    {lang.cart.checkout}
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="px-4 py-3">
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Navigation</p>
            <div className="space-y-0.5">
              {lang.nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => { setIsMenuOpen(false); if (item.href === "/") scrollToTop(); }}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-blue-800 hover:bg-blue-50 hover:text-blue-900 transition-all group"
                >
                  <span className="w-7 h-7 flex items-center justify-center bg-blue-100 group-hover:bg-blue-200 rounded-lg text-blue-600 shrink-0 transition-colors">
                    {icons[item.icon]}
                  </span>
                  <span className="flex-1 text-sm font-semibold">{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-300 group-hover:text-blue-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Auth */}
          <div className="px-4 pb-3 border-t border-blue-50 pt-3">
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Mon compte</p>
            <div className="flex gap-2">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-xl font-semibold text-sm transition-all"
              >
                <User className="w-4 h-4" />
                {lang.cta.login}
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30"
              >
                {lang.cta.register}
              </Link>
            </div>
          </div>

          {/* Urgence */}
          <div className="mx-4 mb-4 p-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black text-red-700 uppercase tracking-wide">{lang.cta.emergency} Spirituelle</p>
                <a href="tel:+237693215431" className="text-sm font-black text-red-600 hover:text-red-800">
                  +237 693 21 54 31
                </a>
                <p className="text-[10px] text-red-400 mt-0.5">Centre d'Abili, Yaoundé · Lun–Sam 8h–18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;