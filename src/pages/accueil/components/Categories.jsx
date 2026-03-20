import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import {
  Search,
  BookOpen,
  ShoppingCart,
  Check,
  User,
  Eye,
  ArrowRight,
  Package,
  FileText,
  Clock,
  X,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Currency config
───────────────────────────────────────────── */
const CURRENCIES = {
  FCFA: { label: 'FCFA', symbol: 'FCFA', rate: 1,        flag: '🇨🇲', decimals: 0 },
  USD:  { label: 'USD',  symbol: '$',    rate: 0.00165,  flag: '🇺🇸', decimals: 2 },
  EUR:  { label: 'EUR',  symbol: '€',    rate: 0.00152,  flag: '🇪🇺', decimals: 2 },
};

function formatPrice(priceFCFA, currencyKey) {
  const c = CURRENCIES[currencyKey];
  const val = priceFCFA * c.rate;
  if (currencyKey === 'FCFA') return `${val.toLocaleString('fr-FR')} FCFA`;
  if (currencyKey === 'USD')  return `$${val.toFixed(2)}`;
  if (currencyKey === 'EUR')  return `€${val.toFixed(2)}`;
  return `${val.toLocaleString('fr-FR')} ${c.label}`;
}

/* ─────────────────────────────────────────────
   Currency Switcher — pill tabs
───────────────────────────────────────────── */
function CurrencySwitcher({ currency, onChange }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: '#f1f5f9',
      borderRadius: '100px',
      padding: '4px',
      gap: '2px',
      border: '1px solid #e2e8f0',
    }}>
      {Object.entries(CURRENCIES).map(([key, c]) => {
        const active = key === currency;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: active ? 700 : 500,
              color: active ? '#fff' : '#64748b',
              background: active ? '#2563eb' : 'transparent',
              boxShadow: active ? '0 2px 8px rgba(37,99,235,0.25)' : 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontSize: '14px' }}>{c.flag}</span>
            {c.label}
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Book Card
───────────────────────────────────────────── */
function BookCard({ livre, currency, onAddToCart, onViewDetails, inCart, justAdded }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: inCart ? '#f0fdf4' : '#ffffff',
        border: `1.5px solid ${inCart ? '#86efac' : hovered ? '#93c5fd' : '#e2e8f0'}`,
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        boxShadow: hovered
          ? '0 8px 32px rgba(37,99,235,0.12)'
          : '0 2px 8px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        position: 'relative',
        height: '100%',
      }}
    >
      {/* Added confirmation badge */}
      {justAdded && (
        <div style={{
          position: 'absolute', top: 10, right: 10, zIndex: 10,
          background: '#22c55e', color: '#fff',
          width: 28, height: 28, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(34,197,94,0.4)',
          animation: 'popIn 0.3s ease',
        }}>
          <Check size={14} />
        </div>
      )}

      {/* Cover image */}
      <div style={{
        position: 'relative',
        height: '200px',
        background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <img
          src={livre.image}
          alt={livre.titre}
          onError={(e) => { e.target.src = '/images/default-book.jpg'; }}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,23,42,0.35) 0%, transparent 50%)',
        }} />
        {/* Type badge */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(8px)',
          padding: '3px 10px',
          borderRadius: '100px',
          fontSize: '11px', fontWeight: 700,
          color: '#1d4ed8', letterSpacing: '0.04em',
        }}>
          {livre.type}
        </div>
        {/* Stock badge */}
        <div style={{
          position: 'absolute', bottom: 10, right: 10,
          background: livre.stock > 30
            ? 'rgba(240,253,244,0.92)'
            : 'rgba(254,249,195,0.92)',
          backdropFilter: 'blur(8px)',
          padding: '3px 9px',
          borderRadius: '100px',
          fontSize: '11px', fontWeight: 600,
          color: livre.stock > 30 ? '#15803d' : '#92400e',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <Package size={10} />
          {livre.stock} restant{livre.stock > 1 ? 's' : ''}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '16px 18px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {/* Title */}
        <h3 style={{
          margin: 0,
          fontSize: '14.5px', fontWeight: 700,
          color: '#0f172a', lineHeight: 1.35,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          minHeight: '40px',
        }}>
          {livre.titre}
        </h3>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 22, height: 22, borderRadius: '50%',
            background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <User size={12} color="#2563eb" />
          </div>
          <span style={{ fontSize: '12.5px', color: '#64748b', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {livre.auteur}
          </span>
        </div>

        {/* Desc */}
        <p style={{
          margin: 0, fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.6,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {livre.desc}
        </p>

        {/* Meta chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {livre.format?.map(f => (
            <span key={f} style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: '#eff6ff', color: '#1d4ed8',
              fontSize: '11px', fontWeight: 600,
              padding: '3px 9px', borderRadius: '100px',
              border: '1px solid #bfdbfe',
            }}>
              <FileText size={10} />
              {f}
            </span>
          ))}
          {livre.pages && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: '#f8fafc', color: '#64748b',
              fontSize: '11px', fontWeight: 600,
              padding: '3px 9px', borderRadius: '100px',
              border: '1px solid #e2e8f0',
            }}>
              <Clock size={10} />
              {livre.pages} p.
            </span>
          )}
        </div>

        {/* Price */}
        <div style={{ marginTop: 'auto', paddingTop: 4 }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: '#2563eb', lineHeight: 1 }}>
            {formatPrice(livre.prixFCFA, currency)}
          </div>
          {currency !== 'FCFA' && (
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: 3 }}>
              ≈ {livre.prixFCFA.toLocaleString('fr-FR')} FCFA
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ padding: '14px 18px 18px', display: 'flex', gap: 8 }}>
        <button
          onClick={() => onViewDetails(livre)}
          style={{
            flex: 1,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1.5px solid #bfdbfe',
            background: '#fff',
            color: '#1d4ed8',
            fontSize: '13px', fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.15s, border-color 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#eff6ff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; }}
        >
          <Eye size={14} />
          Détails
          <ArrowRight size={13} />
        </button>

        <button
          onClick={() => onAddToCart(livre)}
          style={{
            flex: 1,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            padding: '10px 14px',
            borderRadius: '10px',
            border: 'none',
            background: inCart ? '#dcfce7' : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            color: inCart ? '#15803d' : '#fff',
            fontSize: '13px', fontWeight: 600,
            cursor: 'pointer',
            transition: 'opacity 0.15s, transform 0.15s',
            boxShadow: inCart ? 'none' : '0 3px 10px rgba(37,99,235,0.3)',
          }}
          onMouseEnter={e => { if (!inCart) e.currentTarget.style.opacity = '0.88'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          {inCart ? <Check size={14} /> : <ShoppingCart size={14} />}
          {inCart ? 'Ajouté' : 'Panier'}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
const WhyChooseUs = () => {
  const navigate = useNavigate();
  const { addToCart, cart: globalCart } = useCart();

  const [currency, setCurrency] = useState('FCFA');
  const [addedProducts, setAddedProducts] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const livres = [
    { id: 1,  titre: "Chretien africain face a la sorcellerie", auteur: "Centre MTHS", desc: "Manuel complet de la Médecine Traditionnelle des Handicapés Spirituels.", prixFCFA: 6500, image: "/images/livre1/livre1_1.png",   format: ["Papier", "PDF"],       pages: 320, stock: 50, type: "Livre",  isbn: "978-2-954-12345-6", datePublication: "2023", langue: "Français" },
    { id: 2,  titre: "Comment reconnaitre a vue d'oeil un sorcier", auteur: "Centre MTHS", desc: "Étude approfondie du rite SO'O dans sa version christianisée.", prixFCFA: 6500, image: "/images/livre2/livre2_1.png",   format: ["Papier", "PDF", "EPUB"], pages: 240, stock: 35, type: "Livre",  isbn: "978-2-954-12346-3", datePublication: "2023", langue: "Français" },
    { id: 3,  titre: "Comment se soigner des persecutions spirituelles", auteur: "Centre MTHS", desc: "Guide des remèdes traditionnels améliorés et leur intégration.", prixFCFA: 6500, image: "/images/livre3/livre3_1.png",   format: ["Papier"],               pages: 280, stock: 40, type: "Livre",  isbn: "978-2-954-12347-0", datePublication: "2023", langue: "Français" },
    { id: 4,  titre: "A la rencontre de JPSSA", auteur: "Centre MTHS", desc: "Méthodologie du diagnostic des handicaps spirituels.", prixFCFA: 6500, image: "/images/livre4/livre4_1.png",   format: ["PDF", "EPUB"],          pages: 180, stock: 60, type: "E-book", datePublication: "2023", langue: "Français" },
    { id: 5,  titre: "Le musulman face a la sorcellerie", auteur: "Centre MTHS", desc: "Guide pratique des rites de purification selon la tradition Béti.", prixFCFA: 6500, image: "/images/livre5/livre5_1.png",   format: ["Papier", "PDF"],        pages: 210, stock: 45, type: "Livre",  isbn: "978-2-954-12348-7", datePublication: "2023", langue: "Français" },
    { id: 6,  titre: "Les dix commandements de satan", auteur: "Centre MTHS", desc: "Fondements théologiques de l'intégration culturelle africaine.", prixFCFA: 6500, image: "/images/livre6/livre6_1.png",   format: ["Papier"],               pages: 290, stock: 30, type: "Livre",  isbn: "978-2-954-12349-4", datePublication: "2023", langue: "Français" },
    { id: 7,  titre: "La transmission de la sorcellerie au sein d'une famille", auteur: "Centre MTHS", desc: "Approche intégrative de la guérison selon la révélation de 1979.", prixFCFA: 6500, image: "/images/livre7/livre7_1.png",   format: ["Papier", "PDF"],        pages: 350, stock: 25, type: "Livre",  isbn: "978-2-954-12350-0", datePublication: "2023", langue: "Français" },
    { id: 8,  titre: "La vie spirituelle du sorcier — Univers astral", auteur: "Centre MTHS", desc: "Analyse et solutions pour briser les chaînes familiales.", prixFCFA: 6500, image: "/images/livre8/livre8_1.png",   format: ["Papier"],               pages: 230, stock: 40, type: "Livre",  isbn: "978-2-954-12351-7", datePublication: "2023", langue: "Français" },
    { id: 9,  titre: "Protocole therapeutique MTHS", auteur: "Centre MTHS", desc: "Interface entre psychologie moderne et spiritualité africaine.", prixFCFA: 6500, image: "/images/livre9/livre9_1.png",   format: ["PDF", "EPUB"],          pages: 260, stock: 35, type: "E-book", datePublication: "2023", langue: "Français" },
    { id: 10, titre: "La guerre des spiritualités en Afrique", auteur: "Centre MTHS", desc: "Rites de passage christianisés pour les étapes de la vie.", prixFCFA: 6500, image: "/images/livre10/livre10_1.png", format: ["Papier"],               pages: 200, stock: 50, type: "Livre",  isbn: "978-2-954-12352-4", datePublication: "2023", langue: "Français" },
    { id: 12, titre: "Religion Chinoise face à la Sorcellerie", auteur: "Centre MTHS", desc: "Protocoles d'exorcisme selon la tradition chrétienne africaine.", prixFCFA: 6500, image: "/images/livre12/livre12_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 13, titre: "La vie apres la Mort", auteur: "Centre MTHS", desc: "Enquête sur les conceptions africaines de l'au-delà.", prixFCFA: 6500, image: "/images/livre13/livre13_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 14, titre: "Ange ou Demon", auteur: "Centre MTHS", desc: "Discernement des esprits dans la tradition chrétienne africaine.", prixFCFA: 6500, image: "/images/livre14/livre14_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 15, titre: "Chretien africain et la maladie", auteur: "Centre MTHS", desc: "Guide holistique de guérison selon foi chrétienne et thérapies africaines.", prixFCFA: 6500, image: "/images/livre15/livre15_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 16, titre: "Comment vivre ensemble avec les sorciers", auteur: "Centre MTHS", desc: "Stratégies de coexistence, protection et réconciliation communautaire.", prixFCFA: 6500, image: "/images/livre16/livre16_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 17, titre: "Le Satanisme et la dérive du monde", auteur: "Centre MTHS", desc: "Analyse du satanisme contemporain et de ses infiltrations dans la société.", prixFCFA: 6500, image: "/images/livre17/livre17_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 18, titre: "Tradition africaine et christianisme", auteur: "Centre MTHS", desc: "Dialogue entre traditions ancestrales africaines et foi chrétienne.", prixFCFA: 6500, image: "/images/livre18/livre18_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 19, titre: "Le bouddhisme face à la sorcellerie", auteur: "Centre MTHS", desc: "Étude comparative entre philosophie bouddhiste et phénomènes occultes.", prixFCFA: 6500, image: "/images/livre19/livre19_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 20, titre: "Sectes et sociétés secrètes africaines", auteur: "Centre MTHS", desc: "Enquête sur les organisations occultes qui structurent le pouvoir en Afrique.", prixFCFA: 6500, image: "/images/livre20/livre20_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 21, titre: "Comment comprendre et interpreter le Rêve", auteur: "Centre MTHS", desc: "Guide pour comprendre le langage des rêves selon tradition africaine et chrétienne.", prixFCFA: 6500, image: "/images/livre21/livre21_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 22, titre: "Comment obtenir ta Délivrance et ta Victoire", auteur: "Centre MTHS", desc: "Guide complet pour la victoire contre le Diable, les Démons et les Sorciers.", prixFCFA: 6500, image: "/images/livre22/livre22_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 23, titre: "Le Remède Traditionnel Amélioré", auteur: "Centre MTHS", desc: "Guide complet pour obtenir la délivrance et la victoire contre le Diable, les Démons et les Sorciers.", prixFCFA: 6500, image: "/images/livre23/livre23_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 24, titre: "CULTURE DE LA PAIX ET LUTTE CONTRE LA DÉVIANCE SPIRITUELLE ", auteur: "Centre MTHS", desc: "Guide complet pour obtenir la délivrance et la victoire contre le Diable, les Démons et les Sorciers.", prixFCFA: 6500, image: "/images/livre24/livre24_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 25, titre: "Hindouisme et Déviance Spirituelle ", auteur: "Centre MTHS", desc: "Guide complet pour obtenir la délivrance et la victoire contre le Diable, les Démons et les Sorciers.", prixFCFA: 6500, image: "/images/livre25/livre25_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
    { id: 26, titre: "la puissance spirituelle du sexe", auteur: "Centre MTHS", desc: "Guide complet pour obtenir la délivrance et la victoire contre le Diable, les Démons et les Sorciers.", prixFCFA: 6500, image: "/images/livre26/livre26_1.png", format: ["Papier", "PDF"],        pages: 310, stock: 20, type: "Livre",  isbn: "978-2-954-12353-1", datePublication: "2023", langue: "Français" },
  ];

  const filtered = livres.filter(l =>
    l.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.auteur.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id, type: 'mths-product',
      title: product.titre, author: product.auteur || 'Centre MTHS',
      price: product.prixFCFA, cover: product.image,
      category: 'Livres MTHS', format: product.format?.[0] || 'Physique',
      pages: product.pages, stock: product.stock,
    });
    setAddedProducts(p => ({ ...p, [product.id]: true }));
    setTimeout(() => setAddedProducts(p => ({ ...p, [product.id]: false })), 2000);
  };

  const isInCart = (id) => globalCart.some(i => i.id === id && i.type === 'mths-product');

  const handleViewDetails = (product) => {
    const productImages = [1,2,3].map(n => `/images/livre${product.id}/livre${product.id}_${n}.png`);
    navigate(`/produit/${product.id}`, {
      state: {
        product: { ...product, images: productImages },
        currency,
      },
    });
  };

  return (
    <>
      <style>{`
        @keyframes popIn {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1);   opacity: 1; }
        }
        .wcu-section {
          background: linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #f0f7ff 100%);
          padding: 64px 0 80px;
        }
        .wcu-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }
        /* Header */
        .wcu-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
          text-align: center;
        }
        .wcu-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #eff6ff;
          border: 1.5px solid #bfdbfe;
          color: #1d4ed8;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
        }
        .wcu-title {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin: 0;
          line-height: 1.15;
        }
        .wcu-title span { color: #2563eb; }
        .wcu-subtitle {
          font-size: 15px;
          color: #64748b;
          max-width: 520px;
          line-height: 1.7;
          margin: 0;
        }
        /* Toolbar */
        .wcu-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .wcu-search-wrap {
          position: relative;
          flex: 1;
          max-width: 400px;
          min-width: 200px;
        }
        .wcu-search-icon {
          position: absolute;
          left: 14px; top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
          display: flex;
        }
        .wcu-search-input {
          width: 100%;
          padding: 11px 36px 11px 42px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          font-size: 14px;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .wcu-search-input:focus {
          border-color: #93c5fd;
          box-shadow: 0 0 0 3px rgba(147,197,253,0.25);
        }
        .wcu-search-clear {
          position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
          background: #e2e8f0; border: none; border-radius: 50%;
          width: 22px; height: 22px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #64748b;
        }
        .wcu-count {
          font-size: 13px; font-weight: 600; color: #94a3b8; white-space: nowrap;
        }
        .wcu-count b { color: #0f172a; }
        /* Grid */
        .wcu-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        /* Empty state */
        .wcu-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 0;
        }
        /* Responsive */
        @media (max-width: 1100px) { .wcu-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 820px)  { .wcu-grid { grid-template-columns: repeat(2, 1fr); } .wcu-container { padding: 0 20px; } }
        @media (max-width: 500px)  {
          .wcu-grid { grid-template-columns: 1fr; gap: 16px; }
          .wcu-toolbar { flex-direction: column; align-items: stretch; }
          .wcu-search-wrap { max-width: 100%; }
          .wcu-container { padding: 0 16px; }
          .wcu-section { padding: 40px 0 60px; }
        }     
      `}</style>

      <section className="wcu-section">
        <div className="wcu-container">

          {/* ── Header ── */}
          <div className="wcu-header">
            <div className="wcu-eyebrow">
              <BookOpen size={12} />
              Bibliothèque MTHS
            </div>
            <h2 className="wcu-title">
              Collection <span>MTHS</span>
            </h2>
            <p className="wcu-subtitle">
              Découvrez notre collection complète d'ouvrages sur la Médecine Traditionnelle des Handicapés Spirituels.
            </p>
          </div>

          {/* ── Toolbar ── */}
          <div className="wcu-toolbar">
            {/* Search */}
            <div className="wcu-search-wrap">
              <span className="wcu-search-icon"><Search size={16} /></span>
              <input
                className="wcu-search-input"
                type="text"
                placeholder="Rechercher un livre, auteur…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="wcu-search-clear" onClick={() => setSearchTerm('')}>
                  <X size={12} />
                </button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              {/* Currency switcher */}
              <CurrencySwitcher currency={currency} onChange={setCurrency} />
              {/* Count */}
              <span className="wcu-count">
                <b>{filtered.length}</b> livre{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* ── Grid ── */}
          <div className="wcu-grid">
            {filtered.length > 0 ? (
              filtered.map(livre => (
                <BookCard
                  key={livre.id}
                  livre={livre}
                  currency={currency}
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                  inCart={isInCart(livre.id)}
                  justAdded={!!addedProducts[livre.id]}
                />
              ))
            ) : (
              <div className="wcu-empty">
                <BookOpen size={56} color="#bfdbfe" style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
                  Aucun résultat
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px' }}>
                  Aucun livre ne correspond à « {searchTerm} ». Essayez d'autres termes.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;