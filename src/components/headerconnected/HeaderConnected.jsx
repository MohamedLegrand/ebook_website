import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User, Menu, X, Globe, ChevronDown, Search,
  ShoppingCart, BookOpen, Bell, LogOut, Settings,
  Package, Heart, Home, AlertCircle, ChevronRight, Trash2, ArrowRight
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

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

function HeaderConnected() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const notificationsRef = useRef(null);
  const accountRef = useRef(null);
  const cartRef = useRef(null);
  const searchRef = useRef(null);

  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();

  // Récupération du vrai client connecté depuis AuthContext
  // client contient : id, full_name, email, created_at, updated_at
  const { client, logout } = useAuth();
  const navigate = useNavigate();

  // Calcul des initiales du client pour l'avatar
  // Ex: "Jean Dupont" → "JD"
  const initiales = client?.full_name
    ? client.full_name
        .split(" ")
        .map((mot) => mot.charAt(0).toUpperCase())
        .slice(0, 2)
        .join("")
    : "?";

  // Notifications simulées (à remplacer par de vraies données API plus tard)
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Votre commande a été expédiée", read: false, time: "Il y a 2 heures" },
    { id: 2, message: "Nouveau livre disponible", read: true, time: "Il y a 1 jour" },
    { id: 3, message: "Promotion sur les soins", read: false, time: "Il y a 3 heures" }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  useOnClickOutside(notificationsRef, useCallback(() => setIsNotificationsOpen(false), []));
  useOnClickOutside(accountRef, useCallback(() => setIsAccountOpen(false), []));
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

  // Fonction de déconnexion
  // Vide le contexte + localStorage puis redirige vers l'accueil
  const handleLogout = () => {
    logout();
    setIsAccountOpen(false);
    setIsMenuOpen(false);
    navigate("/");
  };

  const t = useMemo(() => ({
    fr: {
      searchPlaceholder: "Rechercher un livre, un soin...",
      books: "Livres",
      notifications: "Notifications",
      account: {
        profile: "Mon profil",
        orders: "Mes commandes",
        settings: "Paramètres",
        logout: "Déconnexion"
      },
      cart: {
        title: "Panier",
        empty: "Votre panier est vide",
        total: "Total",
        view: "Voir le panier",
        checkout: "Payer",
        clear: "Vider",
        continue: "Continuer mes achats"
      },
      ticker: ["NOTRE MISSION", "GUÉRIR L'ÂME", "RESTAURER LE CORPS", "LIBÉRER L'ESPRIT", "CENTRE MARIE REINE DE LA MISÉRICORDE"]
    },
    en: {
      searchPlaceholder: "Search for books, treatments...",
      books: "Books",
      notifications: "Notifications",
      account: {
        profile: "My profile",
        orders: "My orders",
        settings: "Settings",
        logout: "Logout"
      },
      cart: {
        title: "Cart",
        empty: "Your cart is empty",
        total: "Total",
        view: "View cart",
        checkout: "Checkout",
        clear: "Clear",
        continue: "Continue shopping"
      },
      ticker: ["OUR MISSION", "HEAL THE SOUL", "RESTORE THE BODY", "FREE THE SPIRIT", "MARY QUEEN OF MERCY CENTER"]
    }
  }), []);

  const lang = t[language];

  const cartTotal = getCartTotal();
  const cartCount = cart.reduce((s, i) => s + (i.quantity || 1), 0);
  const fmt = (p) => p.toLocaleString("fr-FR") + " FCFA";
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <>
      <style>{`
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
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .dropdown-animate {
          animation: dropdown 0.2s ease-out;
        }
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
      `}</style>

      <header className="sticky top-0 z-50 bg-white shadow-md shadow-blue-100/50 overflow-visible">

        {/* ===== TOP BAR ===== */}
        <div className="h-9 bg-blue-50 border-b border-blue-100 flex items-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-3 flex items-center justify-between">
            <Link
              to="/urgence"
              className="flex items-center gap-1.5 text-blue-800 hover:text-blue-600 transition-colors shrink-0"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-xs font-semibold whitespace-nowrap">
                <span className="hidden sm:inline">Urgence : </span>
                <span className="font-bold">+237 693 21 54 31</span>
              </span>
            </Link>

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

            <div className="flex items-center gap-2 shrink-0">
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

        {/* ===== HEADER PRINCIPAL ===== */}
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
              <span className="text-[11px] font-medium text-blue-500 truncate max-w-[160px] sm:max-w-[220px] lg:max-w-[320px]">
                {language === "fr" ? "Espace membre" : "Member area"}
              </span>
            </div>
          </Link>

          {/* Lien Livres (visible desktop) */}
          <Link
            to="/livreconnected"
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            {lang.books}
          </Link>

          {/* Barre de recherche (desktop) */}
          <div className="hidden lg:block flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang.searchPlaceholder}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-full border border-blue-200 bg-blue-50/50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Actions icônes */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">

            {/* Recherche mobile */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all"
                aria-label={lang.notifications}
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
                )}
              </button>

              {isNotificationsOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl shadow-blue-200/60 border border-blue-100 z-50 overflow-hidden dropdown-animate">
                  <div className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold text-sm flex items-center justify-between">
                    <span>{lang.notifications}</span>
                    {unreadCount > 0 && (
                      <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                        {unreadCount} non lu(s)
                      </span>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto custom-scrollbar">
                    {notifications.length === 0 ? (
                      <div className="text-center py-8 text-gray-400 text-sm">
                        Aucune notification
                      </div>
                    ) : (
                      notifications.map((notif) => (
                        <div
                          key={notif.id}
                          onClick={() => markAsRead(notif.id)}
                          className={`px-4 py-3 border-b border-blue-50 last:border-0 hover:bg-blue-50 cursor-pointer transition-colors ${
                            !notif.read ? "bg-blue-50/50" : ""
                          }`}
                        >
                          <p className="text-sm text-blue-900">{notif.message}</p>
                          <p className="text-[10px] text-blue-400 mt-1">{notif.time}</p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="border-t border-blue-100 p-3 text-center">
                    <Link
                      to="/notifications"
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Voir toutes les notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Panier avec dropdown */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all"
                aria-label={lang.cart.title}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button>

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
                          {cart.map((item) => (
                            <div 
                              key={`${item.id}-${item.type}`} 
                              className="flex items-center gap-2 p-2 rounded-xl hover:bg-blue-50 transition-colors"
                            >
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
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFromCart(item.id, item.type);
                                }}
                                className="text-red-300 hover:text-red-500 transition-colors p-1 shrink-0"
                                aria-label="Retirer du panier"
                                type="button"
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
                              to="/cartconnected"
                              onClick={() => setIsCartOpen(false)}
                              className="flex-1 py-2.5 text-center text-sm font-semibold text-blue-700 border-2 border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
                            >
                              {lang.cart.view}
                            </Link>
                            <Link
                              to="/cartconnected"
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

            {/* Compte */}
            <div className="relative" ref={accountRef}>
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="flex items-center gap-1.5 pl-2 pr-1 py-1 rounded-xl hover:bg-blue-50 transition-all"
              >
                {/* Avatar avec initiales du vrai client */}
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-blue-200 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{initiales}</span>
                </div>
                {/* Vrai nom du client */}
                <span className="hidden lg:inline text-sm font-medium text-blue-700 max-w-[100px] truncate">
                  {client?.full_name || "Utilisateur"}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-blue-400" />
              </button>

              {isAccountOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl shadow-blue-200/60 border border-blue-100 z-50 overflow-hidden dropdown-animate">
                  <div className="p-2">
                    {/* Vrai nom et email du client */}
                    <div className="px-3 py-2 border-b border-blue-100 mb-1">
                      <p className="text-sm font-bold text-blue-900 truncate">
                        {client?.full_name || "Utilisateur"}
                      </p>
                      <p className="text-[10px] text-blue-400 truncate">
                        {client?.email || "email@example.com"}
                      </p>
                    </div>
                    <Link
                      to="/profil"
                      onClick={() => setIsAccountOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4" />
                      {lang.account.profile}
                    </Link>
                    <Link
                      to="/commandes"
                      onClick={() => setIsAccountOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Package className="w-4 h-4" />
                      {lang.account.orders}
                    </Link>
                    <Link
                      to="/parametres"
                      onClick={() => setIsAccountOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      {lang.account.settings}
                    </Link>
                    <div className="border-t border-blue-100 my-1" />
                    {/* Bouton déconnexion branché sur handleLogout */}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg w-full text-left transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      {lang.account.logout}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Menu hamburger (mobile) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>

        {/* Barre de recherche mobile (coulissante) */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
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
                placeholder={lang.searchPlaceholder}
                className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-blue-200 bg-white text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay mobile pour le menu latéral */}
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
              {/* Vrai nom du client dans le drawer */}
              <p className="text-blue-300 text-[10px] leading-tight mt-0.5 truncate">
                {client?.full_name || "Membre"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
          {/* Langue */}
          <div className="mb-4">
            <p className="text-[10px] font-bold text-blue-400 uppercase mb-2 flex items-center gap-1.5">
              <Globe className="w-3 h-3" /> Langue
            </p>
            <div className="flex gap-2">
              {["fr", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                    language === l
                      ? "bg-blue-700 text-white shadow-lg"
                      : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                  }`}
                >
                  {l === "fr" ? "🇫🇷 Français" : "🇬🇧 English"}
                </button>
              ))}
            </div>
          </div>

          {/* Recherche mobile dans le drawer */}
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                placeholder={lang.searchPlaceholder}
                className="w-full pl-9 pr-4 py-2.5 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Liens principaux */}
          <div className="space-y-1">
            <Link
              to="/livres"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-blue-800 hover:bg-blue-50 transition-all"
            >
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="flex-1 text-sm font-semibold">{lang.books}</span>
            </Link>
            <Link
              to="/notifications"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-blue-800 hover:bg-blue-50 transition-all"
            >
              <Bell className="w-5 h-5 text-blue-600" />
              <span className="flex-1 text-sm font-semibold">{lang.notifications}</span>
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </Link>
            <Link
              to="/cartconnected"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-blue-800 hover:bg-blue-50 transition-all"
            >
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <span className="flex-1 text-sm font-semibold">Panier</span>
              {cartCount > 0 && (
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="border-t border-blue-100 my-4" />

          {/* Compte */}
          <div className="space-y-1">
            <Link
              to="/profil"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-blue-800 hover:bg-blue-50 transition-all"
            >
              <User className="w-5 h-5 text-blue-600" />
              <span className="flex-1 text-sm font-semibold">{lang.account.profile}</span>
            </Link>
            <Link
              to="/commandes"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-blue-800 hover:bg-blue-50 transition-all"
            >
              <Package className="w-5 h-5 text-blue-600" />
              <span className="flex-1 text-sm font-semibold">{lang.account.orders}</span>
            </Link>
            <Link
              to="/parametres"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-blue-800 hover:bg-blue-50 transition-all"
            >
              <Settings className="w-5 h-5 text-blue-600" />
              <span className="flex-1 text-sm font-semibold">{lang.account.settings}</span>
            </Link>
            {/* Bouton déconnexion mobile branché sur handleLogout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-red-600 hover:bg-red-50 w-full text-left transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="flex-1 text-sm font-semibold">{lang.account.logout}</span>
            </button>
          </div>

          {/* Urgence */}
          <div className="mt-6 p-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black text-red-700 uppercase">Urgence Spirituelle</p>
                <a href="tel:+237693215431" className="text-sm font-black text-red-600">
                  +237 693 21 54 31
                </a>
                <p className="text-[10px] text-red-400 mt-0.5">24h/24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderConnected;