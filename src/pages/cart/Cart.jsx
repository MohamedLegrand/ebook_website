import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, CreditCard, Shield, Truck, RotateCcw, LogIn } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Header from "../../components/header/Header";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate(); // Hook pour la navigation
  
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculer le sous-total en fonction de la devise (pour l'exemple, nous utiliserons €)
  const subtotal = getCartTotal();
  const shippingFee = subtotal > 30000 ? 0 : 500; // Exemple: 500 FCFA si < 30000 FCFA
  const total = subtotal + shippingFee - discount;

  // Fonction pour formater le prix (simplifié pour l'exemple)
  const formatPrice = (price) => {
    // Dans un cas réel, vous utiliserez le contexte de devise
    return `${(price / 100).toFixed(2)}€`; // Conversion centimes -> euros pour l'exemple
  };

  // Gérer l'augmentation de quantité
  const increaseQuantity = (id, type) => {
    const item = cart.find(item => item.id === id && item.type === type);
    if (item) {
      updateQuantity(id, type, (item.quantity || 1) + 1);
    }
  };

  // Gérer la diminution de quantité
  const decreaseQuantity = (id, type) => {
    const item = cart.find(item => item.id === id && item.type === type);
    if (item && (item.quantity || 1) > 1) {
      updateQuantity(id, type, (item.quantity || 1) - 1);
    }
  };

  // Appliquer un code promo
  const applyPromoCode = () => {
    const codes = {
      "LIVRE10": 0.10, // 10%
      "READ20": 0.20,  // 20%
      "EBOOK15": 0.15  // 15%
    };
    
    if (codes[promoCode.toUpperCase()]) {
      const discountPercentage = codes[promoCode.toUpperCase()];
      const discountAmount = subtotal * discountPercentage;
      setDiscount(discountAmount);
      setPromoApplied(true);
    } else {
      alert("Code promo invalide");
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  // Obtenir l'image par défaut selon le type
  const getDefaultImage = (type) => {
    if (type === "audiobook") {
      return "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w-200&h=300&fit=crop";
    }
    return "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop";
  };

  // Obtenir la catégorie selon le type
  const getCategory = (type) => {
    if (type === "audiobook") return "Livre Audio";
    return "Livre numérique";
  };

  // Fonction pour gérer le paiement
  const handleCheckout = () => {
    // Rediriger vers la page de login avec un message
    navigate('/login', { 
      state: { 
        from: 'cart',
        message: 'Vous devez être connecté pour effectuer un paiement.' 
      } 
    });
  };

  // Si le panier est vide
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-900/30"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Explorer les livres
                </Link>
                <Link
                  to="/audio"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-900/30"
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Votre Panier</h1>
            <p className="text-gray-600">
              {cart.length} {cart.length > 1 ? "articles" : "article"} dans votre panier
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Liste des articles */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                {/* En-tête du tableau */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 mb-4 border-b border-gray-200 text-sm font-semibold text-gray-600">
                  <div className="col-span-5">Produit</div>
                  <div className="col-span-2 text-center">Format</div>
                  <div className="col-span-2 text-center">Quantité</div>
                  <div className="col-span-2 text-center">Prix</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Liste des articles */}
                {cart.map((item) => (
                  <div key={`${item.id}-${item.type}`} className="flex flex-col md:grid md:grid-cols-12 gap-4 py-4 sm:py-6 border-b border-gray-100 last:border-0">
                    {/* Produit */}
                    <div className="col-span-5 flex items-start gap-4">
                      <img
                        src={item.cover || getDefaultImage(item.type)}
                        alt={item.title}
                        className="w-20 h-28 object-cover rounded-lg shadow-md"
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
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-2 ${
                          item.type === "audiobook" 
                            ? "bg-purple-100 text-purple-700" 
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {getCategory(item.type)}
                        </span>
                      </div>
                    </div>

                    {/* Format */}
                    <div className="col-span-2 flex items-center justify-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === "audiobook" 
                          ? "bg-purple-100 text-purple-700" 
                          : "bg-green-100 text-green-700"
                      }`}>
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

                    {/* Prix */}
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-bold text-lg text-gray-900">
                          {formatPrice(item.price * (item.quantity || 1))}
                        </p>
                        {(item.quantity || 1) > 1 && (
                          <p className="text-sm text-gray-500">
                            {formatPrice(item.price)} l'unité
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
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

                {/* Actions du panier */}
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
                      if (window.confirm("Voulez-vous vraiment vider votre panier ?")) {
                        clearCart();
                      }
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
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Paiement sécurisé</h4>
                      <p className="text-sm text-gray-600">SSL 256-bit</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Livraison instantanée</h4>
                      <p className="text-sm text-gray-600">Téléchargement immédiat</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <RotateCcw className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Garantie satisfait</h4>
                      <p className="text-sm text-gray-600">30 jours de remboursement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Récapitulatif de commande</h2>

                {/* Détails des prix */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frais de livraison</span>
                    <span className={`font-medium ${shippingFee === 0 ? 'text-green-600' : ''}`}>
                      {shippingFee === 0 ? 'Gratuit' : formatPrice(shippingFee)}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Réduction</span>
                      <span className="font-medium text-green-600">-{formatPrice(discount)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
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
                    <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                      ✓ Code promo appliqué
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Codes disponibles : LIVRE10, READ20, EBOOK15
                  </p>
                </div>

                {/* Bouton de paiement avec redirection vers login */}
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-900/30 mb-4"
                >
                  <LogIn className="w-5 h-5" />
                  Se connecter pour payer
                </button>

                {/* Informations supplémentaires */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium text-amber-600">⚠️ Attention :</span> 
                    <br />
                    Vous devez être connecté pour effectuer un paiement
                  </p>
                  <p className="text-xs text-gray-500">
                    Aucun renseignement bancaire n'est stocké sur nos serveurs
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <Shield className="inline w-3 h-3 mr-1" />
                    Transaction 100% sécurisée
                  </p>
                </div>
              </div>

              {/* Suggestions */}
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