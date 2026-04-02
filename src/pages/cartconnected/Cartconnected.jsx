import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart, Trash2, Plus, Minus, ArrowLeft,
  Shield, Truck, RotateCcw, Tag, ChevronRight, CheckCircle,
  BookOpen, Headphones, Package, X, CreditCard, Smartphone,
  Lock, User, Mail, MapPin, Phone, Calendar, ArrowRight,
  Zap, BadgeCheck, RefreshCw, Info
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import HeaderConnected from "../../components/headerconnected/HeaderConnected";

/* ──────────────────────────────────────────
   Currency config
────────────────────────────────────────── */
const CURRENCIES = {
  FCFA: { label: "FCFA", flag: "🇨🇲", rate: 1, symbol: "" },
  USD:  { label: "USD",  flag: "🇺🇸", rate: 0.00165, symbol: "$" },
  EUR:  { label: "EUR",  flag: "🇪🇺", rate: 0.00152, symbol: "€" },
};

function fmt(fcfa, key) {
  const { rate, symbol } = CURRENCIES[key];
  const v = fcfa * rate;
  if (key === "USD") return `$${v.toFixed(2)}`;
  if (key === "EUR") return `€${v.toFixed(2)}`;
  return `${Math.round(v).toLocaleString("fr-FR")} FCFA`;
}

/* ──────────────────────────────────────────
   Currency pill tabs
────────────────────────────────────────── */
function CurrencyTabs({ value, onChange, compact = false }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      background: "#f1f5f9", borderRadius: "100px",
      padding: compact ? "2px" : "3px", gap: "2px",
      border: "1px solid #e2e8f0",
    }}>
      {Object.entries(CURRENCIES).map(([key, c]) => {
        const active = key === value;
        return (
          <button key={key} onClick={() => onChange(key)} style={{
            display: "inline-flex", alignItems: "center", gap: compact ? "3px" : "5px",
            padding: compact ? "4px 10px" : "6px 14px", borderRadius: "100px",
            border: "none", cursor: "pointer", fontSize: compact ? "11px" : "12.5px",
            fontWeight: active ? 700 : 500,
            color: active ? "#fff" : "#64748b",
            background: active ? "#2563eb" : "transparent",
            boxShadow: active ? "0 2px 8px rgba(37,99,235,0.28)" : "none",
            transition: "all 0.2s", whiteSpace: "nowrap",
          }}>
            <span style={{ fontSize: compact ? "11px" : "13px" }}>{c.flag}</span>
            {c.label}
          </button>
        );
      })}
    </div>
  );
}

function CartItem({ item, currency, onIncrease, onDecrease, onRemove }) {
  const [removing, setRemoving] = useState(false);
  const qty = item.quantity || 1;
  const isAudio = item.type === "audiobook";

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemove(item.id, item.type), 280);
  };

  // Fonctions hover sécurisées pour éviter l'erreur de parsing
  const handleMouseEnter = (e) => { e.currentTarget.style.background = "#f1f5f9"; };
  const handleMouseLeave = (e) => { e.currentTarget.style.background = "transparent"; };

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "auto 1fr auto auto",
      gap: "20px",
      alignItems: "center",
      padding: "20px 0",
      borderBottom: "1px solid #f1f5f9",
      opacity: removing ? 0 : 1,
      transform: removing ? "translateX(12px)" : "none",
      transition: "opacity 0.28s, transform 0.28s",
    }}>
      {/* Cover */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <img
          src={item.cover || "/images/default-book.jpg"}
          alt={item.title}
          onError={e => { e.target.src = "/images/default-book.jpg"; }}
          style={{
            width: 68, height: 90, objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          }}
        />
        <div style={{
          position: "absolute", bottom: -6, right: -6,
          width: 22, height: 22, borderRadius: "50%",
          background: isAudio ? "#7c3aed" : "#2563eb",
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "2px solid #fff",
        }}>
          {isAudio ? <Headphones size={10} color="#fff" /> : <BookOpen size={10} color="#fff" />}
        </div>
      </div>

      {/* Info */}
      <div style={{ minWidth: 0 }}>
        <h4 style={{
          margin: "0 0 4px", fontSize: "14px", fontWeight: 700,
          color: "#0f172a", lineHeight: 1.35,
          overflow: "hidden", textOverflow: "ellipsis",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
        }}>
          {item.title}
        </h4>
        <p style={{ margin: "0 0 6px", fontSize: "12.5px", color: "#64748b" }}>
          {item.author}
        </p>
        {item.format && (
          <span style={{
            display: "inline-block",
            padding: "2px 9px", borderRadius: "100px",
            fontSize: "10.5px", fontWeight: 700,
            background: isAudio ? "#f5f3ff" : "#eff6ff",
            color: isAudio ? "#6d28d9" : "#1d4ed8",
            border: `1px solid ${isAudio ? "#ddd6fe" : "#bfdbfe"}`,
            letterSpacing: "0.04em", textTransform: "uppercase",
          }}>
            {item.format}
          </span>
        )}
      </div>

      {/* Qty stepper - CORRIGÉ */}
      <div style={{
        display: "flex", alignItems: "center", gap: 0,
        border: "1.5px solid #e2e8f0", borderRadius: "10px",
        overflow: "hidden", background: "#fff",
      }}>
        <button
          onClick={() => onDecrease(item.id, item.type)}
          style={{
            width: 32, height: 36, border: "none",
            background: "transparent", cursor: "pointer",
            color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.15s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Minus size={13} />
        </button>
        <span style={{
          minWidth: 32, textAlign: "center",
          fontSize: "13.5px", fontWeight: 700, color: "#0f172a",
          padding: "0 4px",
        }}>
          {qty}
        </span>
        <button
          onClick={() => onIncrease(item.id, item.type)}
          style={{
            width: 32, height: 36, border: "none",
            background: "transparent", cursor: "pointer",
            color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.15s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Plus size={13} />
        </button>
      </div>

      {/* Price + remove - CORRIGÉ */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "16px", fontWeight: 800, color: "#2563eb" }}>
            {fmt(item.price * qty, currency)}
          </div>
          {qty > 1 && (
            <div style={{ fontSize: "11px", color: "#94a3b8" }}>
              {fmt(item.price, currency)} / u
            </div>
          )}
        </div>
        <button
          onClick={handleRemove}
          style={{
            width: 28, height: 28, borderRadius: "8px",
            border: "1.5px solid #fee2e2", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#ef4444",
            transition: "background 0.15s, border-color 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#fef2f2"; e.currentTarget.style.borderColor = "#fca5a5"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#fee2e2"; }}
          aria-label="Retirer"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Payment Method Selector
────────────────────────────────────────── */
function PaymentMethodSelector({ selected, onChange }) {
  const methods = [
    {
      id: "momo",
      name: "MTN Mobile Money",
      icon: <Smartphone size={18} color="#ffcc00" />,
      color: "#ffcc00",
      desc: "Paiement instantané via votre compte MTN",
      fee: "0 FCFA",
    },
    {
      id: "orange",
      name: "Orange Money",
      icon: <Smartphone size={18} color="#ff7900" />,
      color: "#ff7900",
      desc: "Paiement sécurisé via Orange Money",
      fee: "0 FCFA",
    },
    {
      id: "card",
      name: "Carte Bancaire",
      icon: <CreditCard size={18} color="#2563eb" />,
      color: "#2563eb",
      desc: "Visa • Mastercard • Union Express",
      fee: "+2.5% frais",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {methods.map((method) => {
        const isActive = selected === method.id;
        return (
          <button
            key={method.id}
            onClick={() => onChange(method.id)}
            style={{
              display: "flex", alignItems: "flex-start", gap: "14px",
              padding: "14px 16px", borderRadius: "12px",
              border: `2px solid ${isActive ? method.color : "#e2e8f0"}`,
              background: isActive ? `${method.color}10` : "#fff",
              cursor: "pointer", textAlign: "left",
              transition: "all 0.2s",
              width: "100%",
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: "10px",
              background: `${method.color}20`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {method.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>
                  {method.name}
                </span>
                {isActive && (
                  <span style={{
                    fontSize: "10px", fontWeight: 700,
                    background: method.color, color: "#fff",
                    padding: "2px 8px", borderRadius: "100px",
                  }}>
                    Sélectionné
                  </span>
                )}
              </div>
              <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>{method.desc}</p>
              <p style={{ margin: "4px 0 0", fontSize: "11px", color: method.fee === "0 FCFA" ? "#15803d" : "#dc2626", fontWeight: 600 }}>
                {method.fee === "0 FCFA" ? "✓ Sans frais" : method.fee}
              </p>
            </div>
            <div style={{
              width: 20, height: 20, borderRadius: "50%",
              border: `2px solid ${isActive ? method.color : "#cbd5e1"}`,
              background: isActive ? method.color : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {isActive && <CheckCircle size={12} color="#fff" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ──────────────────────────────────────────
   Main CartConnected Component
────────────────────────────────────────── */
function CartConnected() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { client } = useAuth();
  const navigate = useNavigate();

  const [currency, setCurrency] = useState("FCFA");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("momo");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 30000 ? 0 : 1500;
  const paymentFee = paymentMethod === "card" ? subtotal * 0.025 : 0;
  const total = subtotal + shipping - discount + paymentFee;

  const inc = (id, type) => {
    const item = cart.find(i => i.id === id && i.type === type);
    if (item) updateQuantity(id, type, (item.quantity || 1) + 1);
  };
  const dec = (id, type) => {
    const item = cart.find(i => i.id === id && i.type === type);
    if (item && (item.quantity || 1) > 1) updateQuantity(id, type, (item.quantity || 1) - 1);
  };

  const applyPromo = () => {
    const codes = { LIVRE10: 0.10, READ20: 0.20, EBOOK15: 0.15, MTHS25: 0.25 };
    const key = promoCode.toUpperCase().trim();
    if (codes[key]) {
      setDiscount(subtotal * codes[key]);
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setPromoApplied(false);
      setDiscount(0);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulation d'appel API de paiement
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Ici, intégrer l'API de paiement réelle (CinetPay, Stripe, etc.)
    const paymentData = {
      orderId: `MTHS-${Date.now()}`,
      amount: total,
      currency: currency,
      method: paymentMethod,
      client: client?.id,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price
      }))
    };
    
    // Redirection vers page de confirmation
    clearCart();
    navigate("/commande-confirmee", { 
      state: { 
        orderId: paymentData.orderId,
        amount: total,
        items: cart.length
      } 
    });
    
    setIsProcessing(false);
  };

  /* ── EMPTY STATE ── */
  if (cart.length === 0) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8faff 0%,#fff 60%,#f0f7ff 100%)" }}>
        <HeaderConnected />
        <div style={{ paddingTop: 100, paddingBottom: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", maxWidth: 440, padding: "0 20px" }}>
            <div style={{
              width: 80, height: 80, borderRadius: "20px",
              background: "#eff6ff", border: "1.5px solid #bfdbfe",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <ShoppingCart size={34} color="#2563eb" />
            </div>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>
              Votre panier est vide
            </h1>
            <p style={{ color: "#64748b", fontSize: "14.5px", lineHeight: 1.7, marginBottom: 32 }}>
              Explorez notre catalogue et commencez à remplir votre bibliothèque.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/categories" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 24px", borderRadius: "12px",
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                color: "#fff", fontWeight: 700, fontSize: "14px",
                textDecoration: "none", boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
              }}>
                <BookOpen size={16} /> Explorer les livres
              </Link>
              <Link to="/audio" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 24px", borderRadius: "12px",
                background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                color: "#fff", fontWeight: 700, fontSize: "14px",
                textDecoration: "none", boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
              }}>
                <Headphones size={16} /> Livres audio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .cart-connected-page {
          min-height: 100vh;
          background: linear-gradient(160deg, #f8faff 0%, #ffffff 55%, #f0f7ff 100%);
        }
        .cart-connected-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px 80px;
        }
        /* Header row */
        .cart-hdr {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; margin-bottom: 24px; flex-wrap: wrap;
          padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;
        }
        .cart-hdr-left h1 {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 800; color: #0f172a;
          margin: 0 0 4px; letter-spacing: -0.025em;
        }
        .cart-hdr-left p { margin:0; font-size:13.5px; color:#64748b; }
        
        /* Progress steps */
        .progress-steps {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 20px; background: #fff;
          border-radius: 12px; border: 1px solid #e2e8f0;
          margin-bottom: 24px;
        }
        .step {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 600; color: #64748b;
        }
        .step.active { color: #2563eb; }
        .step.completed { color: #15803d; }
        .step-dot {
          width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          background: #e2e8f0; color: #64748b;
        }
        .step-dot.active { background: #2563eb; color: #fff; }
        .step-dot.completed { background: #15803d; color: #fff; }
        .step-sep { width: 20px; height: 2px; background: #e2e8f0; }
        
        /* Layout */
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 24px;
          align-items: start;
        }
        /* Left panel */
        .cart-panel {
          background: #fff;
          border: 1.5px solid #e8edf3;
          border-radius: 18px;
          overflow: hidden;
        }
        .cart-panel-hdr {
          padding: 18px 24px;
          border-bottom: 1px solid #f1f5f9;
          display: flex; align-items: center; justify-content: space-between;
        }
        .cart-panel-hdr-title {
          font-size: 14px; font-weight: 700; color: #0f172a;
          display: flex; align-items: center; gap: 8px;
        }
        .cart-items-wrap { padding: 0 24px; }

        .cart-footer {
          padding: 16px 24px;
          border-top: 1px solid #f1f5f9;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 8px;
        }

        /* Guarantees */
        .guarantees {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 12px;
          margin-top: 16px;
        }
        .guarantee-card {
          background: #fff;
          border: 1.5px solid #e8edf3;
          border-radius: 12px;
          padding: 14px;
          display: flex; align-items: flex-start; gap: 12px;
        }
        .guarantee-icon {
          width: 36px; height: 36px; border-radius: 9px;
          background: #eff6ff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .guarantee-card h4 { margin:0 0 2px; font-size:13px; font-weight:700; color:#0f172a; }
        .guarantee-card p  { margin:0; font-size:11.5px; color:#64748b; }

        /* Summary panel */
        .summary-panel {
          background: #fff;
          border: 1.5px solid #e8edf3;
          border-radius: 18px;
          overflow: hidden;
          position: sticky;
          top: 24px;
        }
        .summary-hdr {
          padding: 18px 22px 14px;
          border-bottom: 1px solid #f1f5f9;
        }
        .summary-hdr h2 { margin:0 0 12px; font-size:15px; font-weight:800; color:#0f172a; }
        .summary-body { padding: 18px 22px; }
        
        /* Client info card */
        .client-card {
          background: #f8faff;
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 16px;
        }
        .client-card-header {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 10px;
        }
        .client-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 700; font-size: 13px;
        }
        .client-name { font-size: 13px; font-weight: 700; color: #0f172a; }
        .client-email { font-size: 11px; color: #64748b; }
        .client-edit {
          font-size: 11px; color: #2563eb; font-weight: 600;
          text-decoration: none; margin-left: auto;
        }
        
        .summary-row {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: 12px;
        }
        .summary-row-label { font-size:13.5px; color:#64748b; }
        .summary-row-val   { font-size:13.5px; font-weight:700; color:#0f172a; text-align:right; }
        .summary-row-val.free { color:#15803d; }
        .summary-row-val.disc { color:#dc2626; }
        .summary-row-val.fee { color:#d97706; }
        .summary-sep { height:1px; background:#f1f5f9; margin:14px 0; }
        .summary-total {
          display: flex; align-items: flex-start; justify-content: space-between;
          padding: 16px; border-radius: 12px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          border: 1.5px solid #93c5fd;
          margin-bottom: 18px;
        }
        .summary-total-label { font-size:15px; font-weight:800; color:#0f172a; }
        .summary-total-val   { font-size:22px; font-weight:800; color:#2563eb; text-align:right; line-height:1; }
        .summary-total-equiv { font-size:11px; color:#64748b; margin-top:3px; }

        /* Payment section */
        .payment-section { margin-bottom: 16px; }
        .payment-section-title {
          font-size: 13px; font-weight: 700; color: #0f172a;
          margin-bottom: 12px; display: flex; align-items: center; gap: 6px;
        }
        
        /* Promo */
        .promo-wrap { margin-bottom: 16px; }
        .promo-input-row { display:flex; gap:8px; }
        .promo-input {
          flex:1; padding:10px 14px; border-radius:10px;
          border:1.5px solid #e2e8f0; font-size:13.5px;
          outline:none; transition:border-color 0.2s, box-shadow 0.2s;
          color:#0f172a;
        }
        .promo-input:focus { border-color:#93c5fd; box-shadow:0 0 0 3px rgba(147,197,253,0.2); }
        .promo-btn {
          padding:10px 16px; border-radius:10px; border:none;
          background:#0f172a; color:#fff; font-size:13px; font-weight:700;
          cursor:pointer; transition:background 0.2s; white-space:nowrap;
        }
        .promo-btn:hover { background:#1e293b; }

        /* Checkout btn */
        .checkout-btn {
          width:100%; padding:16px; border-radius:12px;
          border:none; cursor:pointer;
          background:linear-gradient(135deg,#2563eb,#1d4ed8);
          color:#fff; font-size:15px; font-weight:700;
          display:flex; align-items:center; justify-content:center; gap:9px;
          box-shadow:0 4px 16px rgba(37,99,235,0.35);
          transition:opacity 0.2s, transform 0.2s; margin-bottom:12px;
        }
        .checkout-btn:hover:not(:disabled) { opacity:0.95; transform:translateY(-1px); }
        .checkout-btn:disabled { opacity:0.6; cursor:not-allowed; transform:none; }
        .security-note {
          display:flex; align-items:center; justify-content:center; gap:5px;
          font-size:11.5px; color:#64748b;
        }
        
        /* Order note */
        .order-note {
          background: #fffbeb;
          border: 1px solid #fcd34d;
          border-radius: 10px;
          padding: 12px 14px;
          margin-bottom: 16px;
          display: flex; gap: 10px; align-items: flex-start;
        }
        .order-note-icon {
          width: 24px; height: 24px; border-radius: 6px;
          background: #fef3c7; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .order-note-text { font-size: 12px; color: #92400e; line-height: 1.5; }

        /* Responsive */
        @media (max-width: 960px) {
          .cart-connected-wrap { padding: 24px 16px 60px; }
          .cart-layout { grid-template-columns: 1fr; }
          .summary-panel { position: static; }
          .guarantees { grid-template-columns: repeat(3,1fr); }
        }
        @media (max-width: 640px) {
          .guarantees { grid-template-columns: 1fr; }
          .cart-items-wrap { padding: 0 16px; }
          .cart-panel-hdr { padding: 14px 16px; }
          .cart-footer { padding: 12px 16px; }
          .summary-body { padding: 16px; }
        }
      `}</style>

      <div className="cart-connected-page">
        <HeaderConnected />
        <div className="cart-connected-wrap">

          {/* ── Page header ── */}
          <div className="cart-hdr">
            <div className="cart-hdr-left">
              <h1>Finaliser votre commande</h1>
              <p>{cart.length} article{cart.length > 1 ? "s" : ""} • Paiement sécurisé</p>
            </div>
            <CurrencyTabs value={currency} onChange={setCurrency} compact />
          </div>

          {/* ── Progress steps ── */}
          <div className="progress-steps">
            <div className="step completed">
              <div className="step-dot completed">✓</div>
              <span>Panier</span>
            </div>
            <div className="step-sep" />
            <div className="step active">
              <div className="step-dot active">2</div>
              <span>Paiement</span>
            </div>
            <div className="step-sep" />
            <div className="step">
              <div className="step-dot">3</div>
              <span>Confirmation</span>
            </div>
          </div>

          <div className="cart-layout">

            {/* ── LEFT : Items ── */}
            <div>
              <div className="cart-panel">
                {/* Panel header */}
                <div className="cart-panel-hdr">
                  <div className="cart-panel-hdr-title">
                    <ShoppingCart size={16} color="#2563eb" />
                    Vos articles
                    <span style={{
                      background: "#eff6ff", color: "#2563eb",
                      fontSize: "11px", fontWeight: 800,
                      padding: "1px 8px", borderRadius: "100px",
                      border: "1px solid #bfdbfe",
                    }}>
                      {cart.length}
                    </span>
                  </div>
                  <button
                    onClick={() => { if (window.confirm("Vider le panier ?")) clearCart(); }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      padding: "5px 12px", borderRadius: "8px",
                      border: "1.5px solid #fee2e2", background: "#fff",
                      color: "#ef4444", fontSize: "12px", fontWeight: 600,
                      cursor: "pointer", transition: "background 0.15s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#fef2f2"}
                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                  >
                    <Trash2 size={12} /> Tout retirer
                  </button>
                </div>

                {/* Items */}
                <div className="cart-items-wrap">
                  {cart.map(item => (
                    <CartItem
                      key={`${item.id}-${item.type}`}
                      item={item}
                      currency={currency}
                      onIncrease={inc}
                      onDecrease={dec}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>

                {/* Footer */}
                <div className="cart-footer">
                  <Link to="/categories" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: "13.5px", fontWeight: 600, color: "#2563eb",
                    textDecoration: "none",
                  }}>
                    <ArrowLeft size={15} /> Continuer vos achats
                  </Link>
                  <span style={{ fontSize: "12.5px", color: "#94a3b8" }}>
                    Sous-total :{" "}
                    <strong style={{ color: "#0f172a" }}>{fmt(subtotal, currency)}</strong>
                  </span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="guarantees">
                {[
                  { icon: <Shield size={16} color="#2563eb" />, title: "Paiement crypté", sub: "SSL 256-bit • PCI DSS" },
                  { icon: <Truck size={16} color="#059669" />, title: "Accès immédiat", sub: "Téléchargement instantané" },
                  { icon: <RotateCcw size={16} color="#d97706" />, title: "Garantie 14j", sub: "Satisfait ou remboursé" },
                ].map(({ icon, title, sub }) => (
                  <div className="guarantee-card" key={title}>
                    <div className="guarantee-icon">{icon}</div>
                    <div>
                      <h4>{title}</h4>
                      <p>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT : Payment Summary ── */}
            <div>
              <div className="summary-panel">
                <div className="summary-hdr">
                  <h2>Récapitulatif & Paiement</h2>
                  <CurrencyTabs value={currency} onChange={setCurrency} compact />
                </div>

                <div className="summary-body">
                  {/* Client info */}
                  <div className="client-card">
                    <div className="client-card-header">
                      <div className="client-avatar">
                        {client?.full_name?.charAt(0) || "U"}
                      </div>
                      <div>
                        <div className="client-name">{client?.full_name || "Utilisateur"}</div>
                        <div className="client-email">{client?.email || "email@exemple.com"}</div>
                      </div>
                      <Link to="/profil" className="client-edit">Modifier</Link>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>
                        <Phone size={10} style={{ verticalAlign: "middle", marginRight: 3 }} />
                        {client?.phone || "+237 XXX XXX XXX"}
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>
                        <MapPin size={10} style={{ verticalAlign: "middle", marginRight: 3 }} />
                        {client?.city || "Ville"}
                      </div>
                    </div>
                  </div>

                  {/* Order note */}
                  <div className="order-note">
                    <div className="order-note-icon">
                      <Info size={14} color="#92400e" />
                    </div>
                    <div className="order-note-text">
                      <strong>Livraison numérique :</strong> Vos livres seront disponibles immédiatement après paiement dans votre espace membre.
                    </div>
                  </div>

                  {/* Price breakdown */}
                  <div className="summary-row">
                    <span className="summary-row-label">
                      Sous-total ({cart.length} article{cart.length > 1 ? "s" : ""})
                    </span>
                    <div className="summary-row-val">
                      {fmt(subtotal, currency)}
                    </div>
                  </div>

                  <div className="summary-row">
                    <span className="summary-row-label">Livraison numérique</span>
                    <span className="summary-row-val free">Gratuite</span>
                  </div>

                  {discount > 0 && (
                    <div className="summary-row">
                      <span className="summary-row-label">Réduction promo</span>
                      <span className="summary-row-val disc">
                        −{fmt(discount, currency)}
                      </span>
                    </div>
                  )}

                  {paymentFee > 0 && (
                    <div className="summary-row">
                      <span className="summary-row-label">Frais de transaction</span>
                      <span className="summary-row-val fee">
                        +{fmt(paymentFee, currency)}
                      </span>
                    </div>
                  )}

                  <div className="summary-sep" />

                  {/* Total */}
                  <div className="summary-total">
                    <span className="summary-total-label">Total à payer</span>
                    <div>
                      <div className="summary-total-val">{fmt(total, currency)}</div>
                      {currency !== "FCFA" && (
                        <div className="summary-total-equiv">
                          ≈ {Math.round(total).toLocaleString("fr-FR")} FCFA
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Payment method */}
                  <div className="payment-section">
                    <div className="payment-section-title">
                      <CreditCard size={14} color="#2563eb" />
                      Moyen de paiement
                    </div>
                    <PaymentMethodSelector 
                      selected={paymentMethod} 
                      onChange={setPaymentMethod} 
                    />
                  </div>

                  {/* Promo code */}
                  <div className="promo-wrap">
                    <div style={{ fontSize: "12.5px", fontWeight: 600, color: "#0f172a", marginBottom: 8, display: "flex", alignItems: "center", gap: 5 }}>
                      <Tag size={13} color="#2563eb" /> Code promo
                    </div>
                    <div className="promo-input-row">
                      <input
                        className="promo-input"
                        value={promoCode}
                        onChange={e => { setPromoCode(e.target.value); setPromoError(false); }}
                        placeholder="ex : LIVRE10"
                        onKeyDown={e => e.key === "Enter" && applyPromo()}
                      />
                      <button className="promo-btn" onClick={applyPromo}>
                        Appliquer
                      </button>
                    </div>
                    {promoApplied && (
                      <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 7, fontSize: "12px", color: "#15803d" }}>
                        <CheckCircle size={13} /> −{fmt(discount, currency)} appliqué
                      </div>
                    )}
                    {promoError && (
                      <div style={{ marginTop: 7, fontSize: "12px", color: "#dc2626" }}>
                        Code invalide. Essayez : LIVRE10, READ20, MTHS25
                      </div>
                    )}
                  </div>

                  <div className="summary-sep" />

                  {/* Pay button */}
                  <button 
                    className="checkout-btn" 
                    onClick={() => setShowConfirm(true)}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div style={{
                          width: 17, height: 17, borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "#fff",
                          animation: "spin 0.8s linear infinite"
                        }} />
                        Traitement en cours...
                      </>
                    ) : (
                      <>
                        <Lock size={17} />
                        Payer {fmt(total, currency)} maintenant
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div className="security-note">
                    <Shield size={12} />
                    Transaction sécurisée • Vos données sont protégées
                  </div>
                </div>
              </div>

              {/* Help box */}
              <div style={{
                marginTop: 16,
                background: "#fff",
                border: "1.5px solid #e8edf3",
                borderRadius: 14,
                padding: "16px 20px",
              }}>
                <h3 style={{ margin: "0 0 10px", fontSize: "13.5px", fontWeight: 700, color: "#0f172a", display: "flex", alignItems: "center", gap: 8 }}>
                  <BadgeCheck size={14} color="#2563eb" />
                  Besoin d'aide ?
                </h3>
                <p style={{ margin: "0 0 12px", fontSize: "12.5px", color: "#64748b", lineHeight: 1.6 }}>
                  Notre équipe est disponible pour vous accompagner dans votre commande.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <a href="tel:+237600000000" style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: "12px", fontWeight: 600, color: "#2563eb",
                    textDecoration: "none",
                  }}>
                    <Phone size={12} /> Nous appeler
                  </a>
                  <a href="mailto:support@mths.cm" style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: "12px", fontWeight: 600, color: "#2563eb",
                    textDecoration: "none",
                  }}>
                    <Mail size={12} /> Nous écrire
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Payment Confirmation Modal ── */}
      {showConfirm && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 20,
        }} onClick={() => setShowConfirm(false)}>
          <div style={{
            background: "#fff", borderRadius: 20, padding: 24,
            maxWidth: 420, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            animation: "fadeInUp 0.3s ease-out",
          }} onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
              }}>
                <Lock size={24} color="#fff" />
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 800, color: "#0f172a" }}>
                Confirmer le paiement
              </h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#64748b" }}>
                Vous êtes sur le point de payer <strong>{fmt(total, currency)}</strong> via{" "}
                <strong>
                  {paymentMethod === "momo" ? "MTN Mobile Money" : 
                   paymentMethod === "orange" ? "Orange Money" : "Carte Bancaire"}
                </strong>
              </p>
            </div>

            <div style={{
              background: "#f8faff", borderRadius: 12, padding: 14,
              marginBottom: 20, border: "1px solid #bfdbfe",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: "12px", color: "#64748b" }}>Articles</span>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#0f172a" }}>{cart.length}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: "12px", color: "#64748b" }}>Sous-total</span>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#0f172a" }}>{fmt(subtotal, currency)}</span>
              </div>
              {discount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>Réduction</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#15803d" }}>−{fmt(discount, currency)}</span>
                </div>
              )}
              {paymentFee > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>Frais</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#d97706" }}>+{fmt(paymentFee, currency)}</span>
                </div>
              )}
              <div style={{ height: 1, background: "#e2e8f0", margin: "10px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>Total</span>
                <span style={{ fontSize: "18px", fontWeight: 800, color: "#2563eb" }}>{fmt(total, currency)}</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setShowConfirm(false)}
                style={{
                  flex: 1, padding: "14px", borderRadius: 12,
                  border: "1.5px solid #e2e8f0", background: "#fff",
                  color: "#64748b", fontSize: "14px", fontWeight: 600,
                  cursor: "pointer", transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#f8faff"}
                onMouseLeave={e => e.currentTarget.style.background = "#fff"}
              >
                Annuler
              </button>
              <button
                onClick={handlePayment}
                style={{
                  flex: 2, padding: "14px", borderRadius: 12,
                  border: "none", background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  color: "#fff", fontSize: "14px", fontWeight: 700,
                  cursor: "pointer", display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8,
                  boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
                }}
              >
                <CheckCircle size={16} />
                Confirmer et payer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation keyframes */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default CartConnected;