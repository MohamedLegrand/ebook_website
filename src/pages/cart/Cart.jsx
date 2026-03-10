import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart, Trash2, Plus, Minus, ArrowLeft, CreditCard,
  Shield, Truck, RotateCcw, LogIn, Banknote, DollarSign, Euro
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/header/Header";

// ─────────────────────────────────────────────
// Configuration des devises
// ─────────────────────────────────────────────
const CURRENCIES = [
  {
    code: "FCFA",
    label: "FCFA",
    flag: "🇨🇲",
    description: "Franc CFA",
    rate: 1,
    activeClass: "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md",
    badgeBg: "bg-green-50",
    badgeBorder: "border-green-300",
    badgeText: "text-green-700",
  },
  {
    code: "USD",
    label: "USD $",
    flag: "🇺🇸",
    description: "Dollar américain",
    rate: 0.00165,
    activeClass: "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md",
    badgeBg: "bg-blue-50",
    badgeBorder: "border-blue-300",
    badgeText: "text-blue-700",
  },
  {
    code: "EUR",
    label: "EUR €",
    flag: "🇪🇺",
    description: "Euro",
    rate: 0.00152,
    activeClass: "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white shadow-md",
    badgeBg: "bg-indigo-50",
    badgeBorder: "border-indigo-300",
    badgeText: "text-indigo-700",
  },
];

const formatPrice = (priceFCFA, currencyCode) => {
  const cur = CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];
  const converted = priceFCFA * cur.rate;
  switch (currencyCode) {
    case "USD": return `$${converted.toFixed(2)}`;
    case "EUR": return `€${converted.toFixed(2)}`;
    default:    return `${Math.round(converted).toLocaleString("fr-FR")} FCFA`;
  }
};

// ─────────────────────────────────────────────
// Sélecteur de devise
// ─────────────────────────────────────────────
const CurrencySelector = ({ currency, onChange }) => (
  <div className="flex items-center gap-3 flex-wrap">
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
      Devise :
    </span>
    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
      {CURRENCIES.map((cur) => {
        const isActive = currency === cur.code;
        return (
          <button
            key={cur.code}
            onClick={() => onChange(cur.code)}
            title={cur.description}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              isActive ? cur.activeClass : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            <span className="text-base leading-none">{cur.flag}</span>
            <span>{cur.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Badge prix inline (avec équivalent FCFA)
// ─────────────────────────────────────────────
const PriceDisplay = ({ priceFCFA, currency, large = false, showEquiv = false }) => {
  const cur = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];
  return (
    <div className="text-right">
      <span className={`font-bold ${large ? "text-xl" : "text-base"} ${cur.badgeText}`}>
        {formatPrice(priceFCFA, currency)}
      </span>
      {showEquiv && currency !== "FCFA" && (
        <div className="text-xs text-gray-400 mt-0.5">
          ≈ {Math.round(priceFCFA).toLocaleString("fr-FR")} FCFA
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────
// Composant principal Cart
// ─────────────────────────────────────────────
function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const [currency, setCurrency] = useState("FCFA");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = getCartTotal();
  const shippingFee = subtotal > 30000 ? 0 : 500;
  const total = subtotal + shippingFee - discount;

  const increaseQuantity = (id, type) => {
    const item = cart.find((i) => i.id === id && i.type === type);
    if (item) updateQuantity(id, type, (item.quantity || 1) + 1);
  };

  const decreaseQuantity = (id, type) => {
    const item = cart.find((i) => i.id === id && i.type === type);
    if (item && (item.quantity || 1) > 1) updateQuantity(id, type, (item.quantity || 1) - 1);
  };

  const applyPromoCode = () => {
    const codes = { LIVRE10: 0.10, READ20: 0.20, EBOOK15: 0.15 };
    const key = promoCode.toUpperCase();
    if (codes[key]) {
      setDiscount(subtotal * codes[key]);
      setPromoApplied(true);
    } else {
      alert("Code promo invalide");
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  const getDefaultImage = (type) =>
    type === "audiobook"
      ? "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=200&h=300&fit=crop"
      : "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop";

  const getCategory = (type) => (type === "audiobook" ? "Livre Audio" : "Livre numérique");

  const handleCheckout = () => {
    navigate("/login", {
      state: { from: "cart", message: "Vous devez être connecté pour effectuer un paiement." },
    });
  };

  const activeCur = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];

  // ── PANIER VIDE ──
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-12 h-12 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Votre panier est vide</h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Explorez notre catalogue de livres et commencez à remplir votre bibliothèque numérique !
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  to="/categories"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Explorer les livres
                </Link>
                <Link
                  to="/audio"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Explorer les livres audio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── EN-TÊTE avec sélecteur de devise ── */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Votre Panier</h1>
              <p className="text-gray-600">
                {cart.length} {cart.length > 1 ? "articles" : "article"} dans votre panier
              </p>
            </div>
            {/* SÉLECTEUR DE DEVISE */}
            <CurrencySelector currency={currency} onChange={setCurrency} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── LISTE DES ARTICLES ── */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">

                {/* En-tête tableau */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 mb-4 border-b border-gray-200 text-sm font-semibold text-gray-600">
                  <div className="col-span-5">Produit</div>
                  <div className="col-span-2 text-center">Format</div>
                  <div className="col-span-2 text-center">Quantité</div>
                  <div className="col-span-2 text-center">Prix</div>
                  <div className="col-span-1" />
                </div>

                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.type}`}
                    className="flex flex-col md:grid md:grid-cols-12 gap-4 py-4 sm:py-6 border-b border-gray-100 last:border-0"
                  >
                    {/* Produit */}
                    <div className="col-span-5 flex items-start gap-4">
                      <img
                        src={item.cover || getDefaultImage(item.type)}
                        alt={item.title}
                        className="w-20 h-28 object-cover rounded-lg shadow-md flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.author}</p>
                        {item.narrator && (
                          <p className="text-sm text-gray-500 mt-1">Narrateur : {item.narrator}</p>
                        )}
                        {item.duration && (
                          <p className="text-sm text-gray-500 mt-1">Durée : {item.duration}</p>
                        )}
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-2 ${
                            item.type === "audiobook"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {getCategory(item.type)}
                        </span>
                      </div>
                    </div>

                    {/* Format */}
                    <div className="col-span-2 flex items-center justify-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.type === "audiobook"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {item.type === "audiobook" ? "Audio" : "eBook"}
                      </span>
                    </div>

                    {/* Quantité */}
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => decreaseQuantity(item.id, item.type)}
                          className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id, item.type)}
                          className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Prix — affiché dans la devise choisie */}
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="text-center">
                        <p className={`font-bold text-lg ${activeCur.badgeText}`}>
                          {formatPrice(item.price * (item.quantity || 1), currency)}
                        </p>
                        {(item.quantity || 1) > 1 && (
                          <p className="text-sm text-gray-500">
                            {formatPrice(item.price, currency)} / unité
                          </p>
                        )}
                        {/* Équivalent FCFA si autre devise */}
                        {currency !== "FCFA" && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            ≈ {Math.round(item.price * (item.quantity || 1)).toLocaleString("fr-FR")} FCFA
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Supprimer */}
                    <div className="col-span-1 flex items-center justify-end">
                      <button
                        onClick={() => removeFromCart(item.id, item.type)}
                        className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors"
                        aria-label="Supprimer l'article"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Actions bas de liste */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 mt-6 border-t border-gray-200">
                  <Link
                    to="/categories"
                    className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Continuer vos achats
                  </Link>
                  <button
                    onClick={() => {
                      if (window.confirm("Voulez-vous vraiment vider votre panier ?")) clearCart();
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 font-medium hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                    Vider le panier
                  </button>
                </div>
              </div>

              {/* Garanties */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                  { Icon: Shield, title: "Paiement sécurisé", sub: "SSL 256-bit" },
                  { Icon: Truck, title: "Livraison instantanée", sub: "Téléchargement immédiat" },
                  { Icon: RotateCcw, title: "Garantie satisfait", sub: "30 jours de remboursement" },
                ].map(({ Icon, title, sub }) => (
                  <div key={title} className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{title}</h4>
                        <p className="text-sm text-gray-600">{sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RÉCAPITULATIF ── */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Récapitulatif</h2>

                {/* Sélecteur de devise dans le récap aussi */}
                <div className="mb-5 pb-4 border-b border-gray-100">
                  <CurrencySelector currency={currency} onChange={setCurrency} />
                </div>

                {/* Détails des prix */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Sous-total</span>
                    <div className="text-right">
                      <span className={`font-semibold ${activeCur.badgeText}`}>
                        {formatPrice(subtotal, currency)}
                      </span>
                      {currency !== "FCFA" && (
                        <div className="text-xs text-gray-400">
                          ≈ {subtotal.toLocaleString("fr-FR")} FCFA
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Frais de livraison</span>
                    <div className="text-right">
                      {shippingFee === 0 ? (
                        <span className="font-semibold text-green-600">Gratuit</span>
                      ) : (
                        <>
                          <span className={`font-semibold ${activeCur.badgeText}`}>
                            {formatPrice(shippingFee, currency)}
                          </span>
                          {currency !== "FCFA" && (
                            <div className="text-xs text-gray-400">
                              ≈ {shippingFee.toLocaleString("fr-FR")} FCFA
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between items-start">
                      <span className="text-gray-600">Réduction</span>
                      <div className="text-right">
                        <span className="font-semibold text-green-600">
                          -{formatPrice(discount, currency)}
                        </span>
                        {currency !== "FCFA" && (
                          <div className="text-xs text-gray-400">
                            ≈ -{Math.round(discount).toLocaleString("fr-FR")} FCFA
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  <div className={`border-t border-gray-200 pt-3 mt-3 rounded-xl p-3 ${activeCur.badgeBg} border ${activeCur.badgeBorder}`}>
                    <div className="flex justify-between items-start">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <div className="text-right">
                        <span className={`text-2xl font-bold ${activeCur.badgeText}`}>
                          {formatPrice(total, currency)}
                        </span>
                        {currency !== "FCFA" && (
                          <div className="text-xs text-gray-500 mt-0.5">
                            ≈ {Math.round(total).toLocaleString("fr-FR")} FCFA
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Récapitulatif des 3 devises */}
                    <div className="mt-3 pt-3 border-t border-dashed border-gray-300 grid grid-cols-3 gap-2 text-center">
                      {CURRENCIES.map((cur) => (
                        <button
                          key={cur.code}
                          onClick={() => setCurrency(cur.code)}
                          className={`rounded-lg py-1.5 px-1 transition-all ${
                            currency === cur.code
                              ? `${cur.badgeBg} ${cur.badgeText} font-bold ring-1 ring-current`
                              : "bg-white text-gray-500 hover:bg-gray-50"
                          }`}
                        >
                          <div className="text-base">{cur.flag}</div>
                          <div className="text-xs font-semibold">{cur.code}</div>
                          <div className="text-xs font-bold">{formatPrice(total, cur.code)}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Code promo */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Code promo"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Appliquer
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-green-600 text-sm mt-2">✓ Code promo appliqué</p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Codes disponibles : LIVRE10, READ20, EBOOK15
                  </p>
                </div>

                {/* Bouton paiement */}
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg mb-4"
                >
                  <LogIn className="w-5 h-5" />
                  Se connecter pour payer
                </button>

                <div className="text-center space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-amber-600">⚠️</span>{" "}
                    Connexion requise pour le paiement
                  </p>
                  <p className="text-xs text-gray-500">
                    Aucun renseignement bancaire stocké sur nos serveurs
                  </p>
                  <p className="text-xs text-gray-500">
                    <Shield className="inline w-3 h-3 mr-1" />
                    Transaction 100% sécurisée
                  </p>
                </div>
              </div>

              {/* Créer un compte */}
              <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Pas encore de compte ?</h3>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <LogIn className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Créez un compte gratuit</p>
                    <p className="text-sm text-gray-600">Profitez de nombreux avantages</p>
                    <Link
                      to="/register"
                      className="inline-block mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      S'inscrire maintenant →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;