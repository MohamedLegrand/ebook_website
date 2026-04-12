import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Home, BookOpen, Package, Printer, Mail } from "lucide-react";

function Paiementreussi() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};

  // Générer une valeur de secours stable (une seule fois)
  const [fallbackOrderId] = useState(() => `MTHS-${Date.now()}`);
  
  // Utiliser l'ID passé dans l'état, sinon le fallback stable
  const orderId = state.orderId || fallbackOrderId;
  const amount = state.amount || 0;
  const items = state.items || 0;
  const paymentMethod = state.paymentMethod || "momo";
  const paymentNumber = state.paymentNumber || "";

  const getPaymentMethodName = () => {
    switch (paymentMethod) {
      case "momo": return "MTN Mobile Money";
      case "orange": return "Orange Money";
      case "card": return "Carte Bancaire";
      default: return "Paiement en ligne";
    }
  };

  const formatAmount = (val) => {
    return new Intl.NumberFormat("fr-FR").format(Math.round(val)) + " FCFA";
  };

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="icon-circle">
          <CheckCircle size={56} strokeWidth={1.5} />
        </div>

        <h1>Paiement réussi ! </h1>
        <p className="subtitle">
          Votre transaction a été effectuée avec succès.
          Un email de confirmation vous a été envoyé.
        </p>

        <div className="order-details">
          <div className="detail-header">
            <Package size={18} />
            <span>Détails de la commande</span>
          </div>
          <div className="detail-row">
            <span>N° commande</span>
            <strong>{orderId}</strong>
          </div>
          <div className="detail-row">
            <span>Montant total</span>
            <strong className="amount">{formatAmount(amount)}</strong>
          </div>
          <div className="detail-row">
            <span>Articles</span>
            <strong>{items}</strong>
          </div>
          <div className="detail-row">
            <span>Moyen de paiement</span>
            <strong>{getPaymentMethodName()}</strong>
          </div>
          {paymentNumber && (
            <div className="detail-row">
              <span>Numéro utilisé</span>
              <strong>{paymentNumber}</strong>
            </div>
          )}
        </div>

        <div className="actions">
          <button className="btn-outline" onClick={() => navigate("/livreconnected")}>
            <Home size={18} /> Accueil
          </button>
          <button className="btn-primary" onClick={() => navigate("/telechargements")}>
            <BookOpen size={18} /> Mes téléchargements
          </button>
        </div>

        <div className="help-links">
          <button onClick={() => window.print()} className="text-link">
            <Printer size={14} /> Imprimer le récapitulatif
          </button>
          <span className="separator">•</span>
          <button onClick={() => navigate("/contact")} className="text-link">
            <Mail size={14} /> Contacter le support
          </button>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: system-ui, 'Inter', -apple-system, sans-serif;
        }
        .success-page {
          min-height: 100vh;
          background: linear-gradient(145deg, #f0f9ff 0%, #e6f0fa 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .success-card {
          max-width: 520px;
          width: 100%;
          background: white;
          border-radius: 2rem;
          padding: 2rem 2rem 2rem 2rem;
          box-shadow: 0 25px 45px -12px rgba(0,0,0,0.2);
          text-align: center;
          border: 1px solid rgba(255,255,255,0.3);
          transition: transform 0.2s ease;
        }
        .icon-circle {
          width: 96px;
          height: 96px;
          background: #22c55e15;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #22c55e;
        }
        h1 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }
        .subtitle {
          font-size: 0.9rem;
          color: #475569;
          margin-bottom: 1.8rem;
          line-height: 1.4;
        }
        .order-details {
          background: #f8fafc;
          border-radius: 1.2rem;
          padding: 1rem 1.2rem;
          margin-bottom: 1.8rem;
          text-align: left;
          border: 1px solid #e2e8f0;
        }
        .detail-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          color: #0f172a;
          font-size: 0.9rem;
          padding-bottom: 10px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 12px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 0.85rem;
          color: #334155;
        }
        .detail-row strong {
          color: #0f172a;
          font-weight: 700;
        }
        .detail-row .amount {
          color: #2563eb;
          font-size: 1rem;
        }
        .actions {
          display: flex;
          gap: 12px;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn-primary, .btn-outline {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 60px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }
        .btn-primary {
          background: linear-gradient(105deg, #2563eb, #1d4ed8);
          color: white;
          box-shadow: 0 4px 10px rgba(37,99,235,0.25);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,99,235,0.3);
        }
        .btn-outline {
          background: white;
          border: 1.5px solid #cbd5e1;
          color: #1e293b;
        }
        .btn-outline:hover {
          background: #f8fafc;
          border-color: #94a3b8;
        }
        .help-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 0.75rem;
          margin-top: 0.5rem;
        }
        .text-link {
          background: none;
          border: none;
          color: #475569;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.7rem;
          transition: color 0.2s;
        }
        .text-link:hover {
          color: #2563eb;
        }
        .separator {
          color: #cbd5e1;
          font-size: 0.7rem;
        }
        @media (max-width: 480px) {
          .success-card {
            padding: 1.5rem;
          }
          .actions {
            flex-direction: column;
          }
          h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Paiementreussi;