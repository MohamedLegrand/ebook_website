import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart, Trash2, Plus, Minus, ArrowLeft,
  Shield, Truck, RotateCcw, LogIn, Tag, ChevronRight,
  BookOpen, Headphones, Package, CheckCircle, X
} from "lucide-react";
import { useCart } from "../../context/CartContext";

/* ──────────────────────────────────────────
   Currency config
────────────────────────────────────────── */
const CURRENCIES = {
  FCFA: { label: "FCFA", flag: "🇨🇲", rate: 1       },
  USD:  { label: "USD",  flag: "🇺🇸", rate: 0.00165 },
  EUR:  { label: "EUR",  flag: "🇪🇺", rate: 0.00152 },
};

function fmt(fcfa, key) {
  const { rate } = CURRENCIES[key];
  const v = fcfa * rate;
  if (key === "USD") return `$${v.toFixed(2)}`;
  if (key === "EUR") return `€${v.toFixed(2)}`;
  return `${Math.round(v).toLocaleString("fr-FR")} FCFA`;
}

/* ──────────────────────────────────────────
   Currency pill tabs
────────────────────────────────────────── */
function CurrencyTabs({ value, onChange }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      background: "#f1f5f9", borderRadius: "100px",
      padding: "3px", gap: "2px", border: "1px solid #e2e8f0",
    }}>
      {Object.entries(CURRENCIES).map(([key, c]) => {
        const active = key === value;
        return (
          <button key={key} onClick={() => onChange(key)} style={{
            display: "inline-flex", alignItems: "center", gap: "5px",
            padding: "6px 14px", borderRadius: "100px",
            border: "none", cursor: "pointer", fontSize: "12.5px",
            fontWeight: active ? 700 : 500,
            color: active ? "#fff" : "#64748b",
            background: active ? "#2563eb" : "transparent",
            boxShadow: active ? "0 2px 8px rgba(37,99,235,0.28)" : "none",
            transition: "all 0.2s", whiteSpace: "nowrap",
          }}>
            <span style={{ fontSize: "13px" }}>{c.flag}</span>
            {c.label}
          </button>
        );
      })}
    </div>
  );
}

/* ──────────────────────────────────────────
   Cart Item Row
────────────────────────────────────────── */
function CartItem({ item, currency, onIncrease, onDecrease, onRemove }) {
  const [removing, setRemoving] = useState(false);
  const qty = item.quantity || 1;
  const isAudio = item.type === "audiobook";

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemove(item.id, item.type), 280);
  };

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
          {isAudio
            ? <Headphones size={10} color="#fff" />
            : <BookOpen size={10} color="#fff" />
          }
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
        {item.narrator && (
          <p style={{ margin: "0 0 6px", fontSize: "11.5px", color: "#94a3b8" }}>
            Narrateur · {item.narrator}
          </p>
        )}
        {item.duration && (
          <p style={{ margin: "0 0 6px", fontSize: "11.5px", color: "#94a3b8" }}>
            Durée · {item.duration}
          </p>
        )}
        <span style={{
          display: "inline-block",
          padding: "2px 9px", borderRadius: "100px",
          fontSize: "10.5px", fontWeight: 700,
          background: isAudio ? "#f5f3ff" : "#eff6ff",
          color: isAudio ? "#6d28d9" : "#1d4ed8",
          border: `1px solid ${isAudio ? "#ddd6fe" : "#bfdbfe"}`,
          letterSpacing: "0.04em", textTransform: "uppercase",
        }}>
          {isAudio ? "Audio" : "Livre"}
        </span>
      </div>

      {/* Qty stepper */}
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
          onMouseEnter={e => e.currentTarget.style.background = "#f1f5f9"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
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
          onMouseEnter={e => e.currentTarget.style.background = "#f1f5f9"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <Plus size={13} />
        </button>
      </div>

      {/* Price + remove */}
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
          {currency !== "FCFA" && (
            <div style={{ fontSize: "10.5px", color: "#cbd5e1" }}>
              ≈ {Math.round(item.price * qty).toLocaleString("fr-FR")} FCFA
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
          onMouseEnter={e => { e.currentTarget.style.background = "#fef2f2"; e.currentTarget.style.borderColor = "#fca5a5"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#fee2e2"; }}
          aria-label="Retirer"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Main Cart
────────────────────────────────────────── */
function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const [currency, setCurrency] = useState("FCFA");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 30000 ? 0 : 500;
  const total = subtotal + shipping - discount;

  const inc = (id, type) => {
    const item = cart.find(i => i.id === id && i.type === type);
    if (item) updateQuantity(id, type, (item.quantity || 1) + 1);
  };
  const dec = (id, type) => {
    const item = cart.find(i => i.id === id && i.type === type);
    if (item && (item.quantity || 1) > 1) updateQuantity(id, type, (item.quantity || 1) - 1);
  };

  const applyPromo = () => {
    const codes = { LIVRE10: 0.10, READ20: 0.20, EBOOK15: 0.15 };
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

  /* ── EMPTY STATE ── */
  if (cart.length === 0) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#f8faff 0%,#fff 60%,#f0f7ff 100%)" }}>
        <div style={{ paddingTop: 100, paddingBottom: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", maxWidth: 440 }}>
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
        .cart-page {
          min-height: 100vh;
          background: linear-gradient(160deg, #f8faff 0%, #ffffff 55%, #f0f7ff 100%);
        }
        .cart-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 32px 80px;
        }
        .cart-hdr {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; margin-bottom: 32px; flex-wrap: wrap;
        }
        .cart-hdr-left h1 {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 800; color: #0f172a;
          margin: 0 0 4px; letter-spacing: -0.025em;
        }
        .cart-hdr-left p { margin:0; font-size:13.5px; color:#64748b; }
        
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 24px;
          align-items: start;
        }
        
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
        .summary-row {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: 12px;
        }
        .summary-row-label { font-size:13.5px; color:#64748b; }
        .summary-row-val   { font-size:13.5px; font-weight:700; color:#0f172a; text-align:right; }
        .summary-row-val.free { color:#15803d; }
        .summary-row-val.disc { color:#dc2626; }
        .summary-sep { height:1px; background:#f1f5f9; margin:14px 0; }
        .summary-total {
          display: flex; align-items: flex-start; justify-content: space-between;
          padding: 16px; border-radius: 12px;
          background: #eff6ff; border: 1.5px solid #bfdbfe;
          margin-bottom: 18px;
        }
        .summary-total-label { font-size:15px; font-weight:800; color:#0f172a; }
        .summary-total-val   { font-size:22px; font-weight:800; color:#2563eb; text-align:right; line-height:1; }
        .summary-total-equiv { font-size:11px; color:#94a3b8; margin-top:3px; }

        .currency-mini {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 8px;
          margin-top: 10px;
        }
        .currency-mini-card {
          border-radius: 10px; padding: 10px 6px;
          text-align: center; cursor: pointer;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          transition: all 0.2s;
        }
        .currency-mini-card.active {
          background: #eff6ff; border-color: #93c5fd;
        }

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

        .checkout-btn {
          width:100%; padding:15px; border-radius:12px;
          border:none; cursor:pointer;
          background:linear-gradient(135deg,#2563eb,#1d4ed8);
          color:#fff; font-size:15px; font-weight:700;
          display:flex; align-items:center; justify-content:center; gap:9px;
          box-shadow:0 4px 16px rgba(37,99,235,0.35);
          transition:opacity 0.2s, transform 0.2s; margin-bottom:12px;
        }
        .checkout-btn:hover { opacity:0.9; transform:translateY(-1px); }
        .security-note {
          display:flex; align-items:center; justify-content:center; gap:5px;
          font-size:11.5px; color:#94a3b8;
        }

        .register-box {
          margin-top: 16px;
          background: #fff;
          border: 1.5px solid #e8edf3;
          border-radius: 14px;
          padding: 16px 20px;
        }
        .register-box h3 { margin:0 0 10px; font-size:13.5px; font-weight:700; color:#0f172a; }
        .register-inner {
          display:flex; align-items:center; gap:12px;
          padding:12px; background:#f8faff;
          border-radius:10px; border:1px solid #e2e8f0;
        }
        .register-icon {
          width:36px; height:36px; border-radius:9px;
          background:#eff6ff; display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }
        .register-inner p { margin:0; font-size:12.5px; color:#64748b; }
        .register-link {
          display:inline-flex; align-items:center; gap:3px;
          font-size:12.5px; font-weight:700; color:#2563eb;
          text-decoration:none; margin-top:5px;
        }

        @media (max-width: 960px) {
          .cart-layout { grid-template-columns: 1fr; }
          .summary-panel { position: static; }
          .guarantees { grid-template-columns: repeat(3,1fr); }
        }
        @media (max-width: 640px) {
          .cart-wrap { padding: 90px 16px 60px; }
          .guarantees { grid-template-columns: 1fr; }
          .cart-items-wrap { padding: 0 16px; }
          .cart-panel-hdr { padding: 14px 16px; }
          .cart-footer { padding: 12px 16px; }
        }
      `}</style>

      <div className="cart-page">
        <div className="cart-wrap">

          {/* Page header */}
          <div className="cart-hdr">
            <div className="cart-hdr-left">
              <h1>Mon Panier</h1>
              <p>{cart.length} article{cart.length > 1 ? "s" : ""} sélectionné{cart.length > 1 ? "s" : ""}</p>
            </div>
            <CurrencyTabs value={currency} onChange={setCurrency} />
          </div>

          <div className="cart-layout">

            {/* LEFT : Items */}
            <div>
              <div className="cart-panel">
                <div className="cart-panel-hdr">
                  <div className="cart-panel-hdr-title">
                    <ShoppingCart size={16} color="#2563eb" />
                    Articles
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
                    <Trash2 size={12} /> Vider
                  </button>
                </div>

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
                  { icon: <Shield size={16} color="#2563eb" />, title: "Paiement sécurisé", sub: "Chiffrement SSL 256-bit" },
                  { icon: <Truck size={16} color="#059669" />, title: "Livraison instantanée", sub: "Téléchargement immédiat" },
                  { icon: <RotateCcw size={16} color="#d97706" />, title: "Satisfait ou remboursé", sub: "Garantie 30 jours" },
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

            {/* RIGHT : Summary */}
            <div>
              <div className="summary-panel">
                <div className="summary-hdr">
                  <h2>Récapitulatif</h2>
                  <CurrencyTabs value={currency} onChange={setCurrency} />
                </div>

                <div className="summary-body">
                  <div className="summary-row">
                    <span className="summary-row-label">
                      Sous-total ({cart.length} article{cart.length > 1 ? "s" : ""})
                    </span>
                    <div className="summary-row-val">
                      {fmt(subtotal, currency)}
                      {currency !== "FCFA" && (
                        <div style={{ fontSize: "10.5px", color: "#cbd5e1", fontWeight: 400 }}>
                          ≈ {subtotal.toLocaleString("fr-FR")} FCFA
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="summary-row">
                    <span className="summary-row-label">Livraison</span>
                    <span className={`summary-row-val ${shipping === 0 ? "free" : ""}`}>
                      {shipping === 0 ? "Offerte" : fmt(shipping, currency)}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="summary-row">
                      <span className="summary-row-label">Réduction promo</span>
                      <span className="summary-row-val disc">
                        −{fmt(discount, currency)}
                      </span>
                    </div>
                  )}

                  <div className="summary-sep" />

                  <div className="summary-total">
                    <span className="summary-total-label">Total</span>
                    <div>
                      <div className="summary-total-val">{fmt(total, currency)}</div>
                      {currency !== "FCFA" && (
                        <div className="summary-total-equiv">
                          ≈ {Math.round(total).toLocaleString("fr-FR")} FCFA
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="currency-mini">
                    {Object.entries(CURRENCIES).map(([key, c]) => (
                      <div
                        key={key}
                        className={`currency-mini-card${currency === key ? " active" : ""}`}
                        onClick={() => setCurrency(key)}
                      >
                        <div style={{ fontSize: "16px", marginBottom: 3 }}>{c.flag}</div>
                        <div style={{ fontSize: "10px", fontWeight: 700, color: "#64748b", letterSpacing: "0.05em" }}>
                          {c.label}
                        </div>
                        <div style={{ fontSize: "11px", fontWeight: 800, color: currency === key ? "#2563eb" : "#0f172a", marginTop: 2 }}>
                          {fmt(total, key)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="summary-sep" />

                  {/* Promo Code */}
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
                      <div style={{ marginTop: 7, fontSize: "12px", color: "#15803d" }}>
                        Code appliqué — réduction de {fmt(discount, currency)}
                      </div>
                    )}
                    {promoError && (
                      <div style={{ marginTop: 7, fontSize: "12px", color: "#dc2626" }}>
                        Code invalide. Essayez : LIVRE10, READ20, EBOOK15
                      </div>
                    )}
                  </div>

                  {/* Checkout Button */}
                  <button 
                    className="checkout-btn" 
                    onClick={() => navigate("/login", { state: { from: "cart" } })}
                  >
                    <LogIn size={17} />
                    Se connecter pour payer
                    <ChevronRight size={16} />
                  </button>

                  <div className="security-note">
                    <Shield size={12} />
                    Transaction 100 % sécurisée
                  </div>
                </div>
              </div>

              {/* Register suggestion */}
              <div className="register-box">
                <h3>Pas encore de compte ?</h3>
                <div className="register-inner">
                  <div className="register-icon">
                    <LogIn size={16} color="#2563eb" />
                  </div>
                  <div>
                    <p>Créez votre compte gratuitement et profitez de tous les avantages MTHS.</p>
                    <Link to="/register" className="register-link">
                      S'inscrire <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;