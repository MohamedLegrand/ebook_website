import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, CreditCard, Shield, Truck, RotateCcw } from "lucide-react";

function Cart() {
  // État initial avec des exemples de livres
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "L'Étranger",
      author: "Albert Camus",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop",
      quantity: 1,
      format: "eBook",
      category: "Littérature"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&h=300&fit=crop",
      quantity: 2,
      format: "eBook",
      category: "Science-fiction"
    },
    {
      id: 3,
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w-200&h=300&fit=crop",
      quantity: 1,
      format: "Audio",
      category: "Jeunesse"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculer le sous-total
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculer le total
  const total = subtotal - discount;
  const shippingFee = total > 30 ? 0 : 2.99;

  // Gérer l'augmentation de quantité
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Gérer la diminution de quantité
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  // Supprimer un article
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Appliquer un code promo
  const applyPromoCode = () => {
    const codes = {
      "LIVRE10": 10,
      "READ20": 20,
      "EBOOK15": 15
    };
    
    if (codes[promoCode.toUpperCase()]) {
      const discountAmount = (subtotal * codes[promoCode.toUpperCase()]) / 100;
      setDiscount(discountAmount);
      setPromoApplied(true);
    } else {
      alert("Code promo invalide");
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  // Vider le panier
  const clearCart = () => {
    if (window.confirm("Voulez-vous vraiment vider votre panier ?")) {
      setCartItems([]);
    }
  };

  // Sauvegarder le panier dans localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Charger le panier depuis localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Si le panier est vide
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Votre panier est vide</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Explorez notre catalogue de livres et commencez à remplir votre bibliothèque numérique !
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-900/30"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Votre Panier</h1>
          <p className="text-gray-600">
            {cartItems.length} {cartItems.length > 1 ? "articles" : "article"} dans votre panier
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
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col md:grid md:grid-cols-12 gap-4 py-4 sm:py-6 border-b border-gray-100 last:border-0">
                  {/* Produit */}
                  <div className="col-span-5 flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-28 object-cover rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.author}</p>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mt-2">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Format */}
                  <div className="col-span-2 flex items-center justify-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.format === "Audio" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>
                      {item.format}
                    </span>
                  </div>

                  {/* Quantité */}
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
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
                        {(item.price * item.quantity).toFixed(2)}€
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-sm text-gray-500">
                          {item.price.toFixed(2)}€ l'unité
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex items-center justify-end">
                    <button
                      onClick={() => removeItem(item.id)}
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
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Continuer vos achats
                </Link>
                <button
                  onClick={clearCart}
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
                  <span className="font-medium">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frais de livraison</span>
                  <span className={`font-medium ${shippingFee === 0 ? 'text-green-600' : ''}`}>
                    {shippingFee === 0 ? 'Gratuit' : `${shippingFee.toFixed(2)}€`}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Réduction</span>
                    <span className="font-medium text-green-600">-{discount.toFixed(2)}€</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{(total + shippingFee).toFixed(2)}€</span>
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

              {/* Bouton de paiement */}
              <button
                onClick={() => alert(`Paiement de ${(total + shippingFee).toFixed(2)}€ effectué !`)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-900/30 mb-4"
              >
                <CreditCard className="w-5 h-5" />
                Procéder au paiement
              </button>

              {/* Informations supplémentaires */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  ✓ Aucun renseignement bancaire n'est stocké sur nos serveurs
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  <Shield className="inline w-3 h-3 mr-1" />
                  Transaction 100% sécurisée
                </p>
              </div>
            </div>

            {/* Suggestions */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Offre spéciale</h3>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <span className="text-lg">🎁</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Abonnement Premium</p>
                  <p className="text-sm text-gray-600">Accès illimité à tous les eBooks</p>
                  <p className="text-sm font-bold text-blue-600 mt-1">14,99€/mois</p>
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