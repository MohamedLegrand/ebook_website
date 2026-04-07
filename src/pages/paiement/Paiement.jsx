import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Lock, ArrowLeft, CheckCircle, Shield, User, Mail, AlertCircle
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

/* ──────────────────────────────────────────
   Devise
────────────────────────────────────────── */
const CURRENCIES = {
  FCFA: { label: "FCFA", rate: 1, symbol: "" },
  USD:  { label: "USD",  rate: 0.00165, symbol: "$" },
  EUR:  { label: "EUR",  rate: 0.00152, symbol: "€" },
};

function fmt(fcfa, key = "FCFA") {
  const { rate, symbol } = CURRENCIES[key];
  const v = fcfa * rate;
  if (key === "USD") return `$${v.toFixed(2)}`;
  if (key === "EUR") return `€${v.toFixed(2)}`;
  return `${Math.round(v).toLocaleString("fr-FR")} FCFA`;
}

/* ──────────────────────────────────────────
   Sélecteur de moyen de paiement avec images
────────────────────────────────────────── */
function PaymentMethodSelector({ selected, onChange }) {
  const methods = [
    { id: "momo", name: "MTN Mobile Money", img: "/images/mtn.jpg", color: "#ffcc00" },
    { id: "orange", name: "Orange Money", img: "/images/orange.jpg", color: "#ff7900" },
    { id: "card", name: "Carte Bancaire", img: "/images/carte.jpg", color: "#2563eb" },
  ];

  return (
    <div className="payment-methods">
      {methods.map((method) => (
        <button
          key={method.id}
          onClick={() => onChange(method.id)}
          className={`payment-method ${selected === method.id ? "active" : ""}`}
          style={{ borderColor: selected === method.id ? method.color : "#e2e8f0" }}
          type="button"
        >
          <div className="method-img">
            <img src={method.img} alt={method.name} loading="lazy" />
          </div>
          <div className="method-name">{method.name}</div>
          <div className={`method-radio ${selected === method.id ? "active" : ""}`}>
            {selected === method.id && <CheckCircle size={14} color={method.color} />}
          </div>
        </button>
      ))}
    </div>
  );
}

function Paiement() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, clearCart, getCartTotal } = useCart();
  const { client } = useAuth();

  const { paymentMethod: initialMethod, paymentNumber: initialNumber } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState(initialMethod || "momo");
  const [paymentNumber, setPaymentNumber] = useState(initialNumber || client?.phone || "");
  const [paymentNumberError, setPaymentNumberError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const subtotal = getCartTotal();
  const paymentFee = paymentMethod === "card" ? Math.round(subtotal * 0.025) : 0;
  const total = subtotal + paymentFee;

  const validatePaymentNumber = () => {
    const trimmed = paymentNumber.trim();
    if (!trimmed) {
      setPaymentNumberError("Veuillez saisir votre numéro de paiement");
      return false;
    }
    if (paymentMethod === "momo" || paymentMethod === "orange") {
      if (!/^[0-9]{9}$/.test(trimmed)) {
        setPaymentNumberError("Numéro invalide (9 chiffres requis)");
        return false;
      }
    } else if (paymentMethod === "card") {
      const digits = trimmed.replace(/\s/g, "");
      if (!/^[0-9]{16}$/.test(digits)) {
        setPaymentNumberError("Numéro de carte invalide (16 chiffres)");
        return false;
      }
    }
    setPaymentNumberError("");
    return true;
  };

  const handlePayment = async () => {
    setErrorMsg("");
    
    if (!validatePaymentNumber()) return;
    
    setIsProcessing(true);
    
    try {
      // 🔹 Simulation de traitement (remplacer par votre appel API réel)
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // 🔹 Ici : appel à votre backend pour valider le paiement
      // const response = await fetch('/api/process-payment', { ... })
      
      // ✅ Paiement validé → vider le panier et rediriger
      clearCart();
      
      navigate("/paiementreussi", {
        state: {
          orderId: `MTHS-${Date.now()}`,
          amount: total,
          items: cart.length,
          paymentMethod: paymentMethod,
          paymentNumber: paymentMethod === "card" 
            ? `****${paymentNumber.replace(/\s/g, "").slice(-4)}` 
            : paymentNumber,
          timestamp: new Date().toISOString(),
        },
      });
      
    } catch (error) {
      console.error("Erreur de paiement:", error);
      setErrorMsg("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      // ⚠️ setIsProcessing ne s'exécutera pas si la navigation réussit
      // (le composant est démonté), mais on le garde pour la gestion d'erreur
      setIsProcessing(false);
    }
  };

  // Panier vide → retour accueil
  if (cart.length === 0) {
    return (
      <div className="empty-paiement">
        <div className="empty-content">
          <div className="empty-icon">🛒</div>
          <h2>Votre panier est vide</h2>
          <p>Ajoutez des produits avant de procéder au paiement.</p>
          <button onClick={() => navigate("/categories")} className="btn-primary" type="button">
            Explorer les livres
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="paiement-page">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn" type="button" aria-label="Retour">
          <ArrowLeft size={16} /> Retour
        </button>

        <div className="paiement-card">
          <h2>Récapitulatif de la commande</h2>

          {/* Infos client */}
          <div className="client-section">
            <div className="client-row">
              <User size={18} aria-hidden="true" />
              <span>{client?.full_name || "Utilisateur"}</span>
            </div>
            <div className="client-row">
              <Mail size={18} aria-hidden="true" />
              <span>{client?.email || "email@exemple.com"}</span>
            </div>
          </div>

          {/* Mode de paiement avec images */}
          <div className="payment-section">
            <label id="payment-method-label">Moyen de paiement</label>
            <PaymentMethodSelector selected={paymentMethod} onChange={setPaymentMethod} />
          </div>

          {/* Numéro de paiement */}
          <div className="payment-number-section">
            <label htmlFor="payment-number">
              {paymentMethod === "momo" && "Numéro MTN Mobile Money"}
              {paymentMethod === "orange" && "Numéro Orange Money"}
              {paymentMethod === "card" && "Numéro de carte bancaire"}
            </label>
            <input
              id="payment-number"
              type="text"
              inputMode="numeric"
              pattern="[0-9\s]*"
              placeholder={
                paymentMethod === "card"
                  ? "1234 5678 9012 3456"
                  : "6XXXXXXXX (9 chiffres)"
              }
              value={paymentNumber}
              onChange={(e) => {
                setPaymentNumber(e.target.value);
                if (paymentNumberError) setPaymentNumberError("");
                if (errorMsg) setErrorMsg("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isProcessing) handlePayment();
              }}
              className={paymentNumberError ? "error" : ""}
              aria-invalid={!!paymentNumberError}
              aria-describedby={paymentNumberError ? "payment-error" : undefined}
            />
            {paymentNumberError && (
              <div className="error-msg" id="payment-error" role="alert">
                <AlertCircle size={12} aria-hidden="true" /> {paymentNumberError}
              </div>
            )}
            <p className="helper-text">
              {paymentMethod === "card"
                ? "Nous acceptons Visa, Mastercard et Union Express."
                : "Vous recevrez une demande de paiement sur ce numéro."}
            </p>
          </div>

          {/* Message d'erreur général */}
          {errorMsg && (
            <div className="error-banner" role="alert">
              <AlertCircle size={14} /> {errorMsg}
            </div>
          )}

          {/* Montant total */}
          <div className="total-section">
            <div className="total-row">
              <span>Sous-total</span>
              <span>{fmt(subtotal)}</span>
            </div>
            {paymentFee > 0 && (
              <div className="total-row">
                <span>Frais de transaction (2.5%)</span>
                <span>{fmt(paymentFee)}</span>
              </div>
            )}
            <div className="total-divider" />
            <div className="total-row grand-total">
              <span>Total à payer</span>
              <span>{fmt(total)}</span>
            </div>
          </div>

          {/* Bouton payer */}
          <button
            className="pay-btn"
            onClick={handlePayment}
            disabled={isProcessing}
            type="button"
            aria-busy={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="spinner" aria-hidden="true" /> Traitement en cours...
              </>
            ) : (
              <>
                <Lock size={18} aria-hidden="true" />
                Payer {fmt(total)} maintenant
              </>
            )}
          </button>

          <div className="security-note">
            <Shield size={14} aria-hidden="true" /> Transaction sécurisée – Vos données sont protégées
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
        }
        .paiement-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 2rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          max-width: 550px;
          width: 100%;
          margin: 0 auto;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: #2563eb;
          font-weight: 600;
          margin-bottom: 1.5rem;
          cursor: pointer;
          font-size: 0.9rem;
          transition: opacity 0.2s;
          padding: 8px 12px;
          border-radius: 12px;
        }
        .back-btn:hover {
          opacity: 0.8;
          background: #eff6ff;
        }
        .paiement-card {
          background: white;
          border-radius: 28px;
          padding: 2rem;
          box-shadow: 0 20px 35px -10px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .paiement-card h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-align: center;
          color: #0f172a;
        }
        .client-section {
          background: #f8fafc;
          border-radius: 20px;
          padding: 1rem 1.2rem;
          margin-bottom: 1.5rem;
          border: 1px solid #eef2f6;
        }
        .client-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          font-size: 0.9rem;
          color: #1e293b;
          border-bottom: 1px solid #e2e8f0;
        }
        .client-row:last-child {
          border-bottom: none;
        }
        .payment-section {
          margin-bottom: 1.5rem;
        }
        .payment-number-section {
          margin-bottom: 1.5rem;
        }
        .payment-number-section label,
        .payment-section label {
          display: block;
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 0.85rem;
          color: #334155;
        }
        .payment-methods {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .payment-method {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 10px 16px;
          border: 2px solid;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          width: 100%;
          transition: all 0.2s ease;
        }
        .payment-method:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }
        .method-img {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          overflow: hidden;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .method-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .method-name {
          flex: 1;
          font-weight: 600;
          font-size: 0.9rem;
          color: #0f172a;
          text-align: left;
        }
        .method-radio {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .method-radio.active {
          border-color: currentColor;
          background: currentColor;
        }
        input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          font-size: 0.9rem;
          outline: none;
          transition: 0.2s;
          background: white;
        }
        input:focus {
          border-color: #93c5fd;
          box-shadow: 0 0 0 3px rgba(147,197,253,0.2);
        }
        input.error {
          border-color: #ef4444;
          background: #fef2f2;
        }
        .error-msg {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 0.7rem;
          color: #ef4444;
          font-weight: 500;
        }
        .error-banner {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 10px 14px;
          border-radius: 12px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .helper-text {
          font-size: 0.7rem;
          color: #64748b;
          margin-top: 8px;
          line-height: 1.4;
        }
        .total-section {
          background: #f8fafc;
          border-radius: 20px;
          padding: 1rem 1.2rem;
          margin-bottom: 1.5rem;
        }
        .total-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 0.9rem;
          color: #334155;
        }
        .total-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 12px 0;
        }
        .grand-total {
          font-weight: 800;
          font-size: 1.1rem;
          color: #0f172a;
          margin-bottom: 0;
        }
        .pay-btn {
          width: 100%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border: none;
          padding: 14px;
          border-radius: 40px;
          color: white;
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 0 8px 20px rgba(37,99,235,0.3);
        }
        .pay-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(37,99,235,0.4);
        }
        .pay-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        .security-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 1rem;
          font-size: 0.7rem;
          color: #64748b;
        }
        .empty-paiement {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
        }
        .empty-content {
          text-align: center;
          max-width: 400px;
          padding: 2rem;
        }
        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        .btn-primary {
          display: inline-block;
          background: #2563eb;
          color: white;
          padding: 10px 24px;
          border-radius: 40px;
          text-decoration: none;
          margin-top: 1rem;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .btn-primary:hover {
          opacity: 0.9;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 480px) {
          .paiement-card {
            padding: 1.5rem;
            border-radius: 24px;
          }
          .method-img {
            width: 40px;
            height: 40px;
          }
          .pay-btn {
            padding: 12px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Paiement;