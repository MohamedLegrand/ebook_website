import React, { useState } from "react";
import {
  Star,
  PlayCircle,
  Headphones,
  Download,
  Volume2,
  ShoppingCart,
  Check,
  Mic,
  Search,
  X,
} from "lucide-react";
import { useCart } from '../../../context/CartContext';

const CURRENCIES = {
  FCFA: { label: 'FCFA', rate: 1,       flag: '🇨🇲' },
  USD:  { label: 'USD',  rate: 0.00165, flag: '🇺🇸' },
  EUR:  { label: 'EUR',  rate: 0.00152, flag: '🇪🇺' },
};

function formatPrice(priceFCFA, key) {
  const c = CURRENCIES[key];
  const val = priceFCFA * c.rate;
  if (key === 'FCFA') return `${val.toLocaleString('fr-FR')} FCFA`;
  if (key === 'USD')  return `$${val.toFixed(2)}`;
  if (key === 'EUR')  return `€${val.toFixed(2)}`;
}

function CurrencySwitcher({ currency, onChange }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      background: '#f1f5f9', borderRadius: '100px',
      padding: '4px', gap: '2px', border: '1px solid #e2e8f0',
    }}>
      {Object.entries(CURRENCIES).map(([key, c]) => {
        const active = key === currency;
        return (
          <button key={key} onClick={() => onChange(key)} style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            padding: '6px 14px', borderRadius: '100px', border: 'none', cursor: 'pointer',
            fontSize: '12.5px', fontWeight: active ? 700 : 500,
            color: active ? '#fff' : '#64748b',
            background: active ? '#2563eb' : 'transparent',
            boxShadow: active ? '0 2px 8px rgba(37,99,235,0.25)' : 'none',
            transition: 'all 0.2s ease', whiteSpace: 'nowrap',
          }}>
            <span style={{ fontSize: '13px' }}>{c.flag}</span>
            {c.label}
          </button>
        );
      })}
    </div>
  );
}

// ==================== DONNÉES STATIQUES ====================
const livresSource = [
  { id: 1,  titre: "Chretien africain face a la sorcellerie",                       auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre1/livre1_1.png",   pages: 320, stock: 50 },
  { id: 2,  titre: "Comment reconnaitre a vue d'oeil un sorcier",                   auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre2/livre2_1.png",   pages: 240, stock: 35 },
  { id: 3,  titre: "Comment se soigner des persecutions spirituelles",               auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre3/livre3_1.png",   pages: 280, stock: 40 },
  { id: 4,  titre: "A la rencontre de JPSSA",                                        auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre4/livre4_1.png",   pages: 180, stock: 60 },
  { id: 5,  titre: "Le musulman face a la sorcellerie",                              auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre5/livre5_1.png",   pages: 210, stock: 45 },
  { id: 6,  titre: "Les dix commandements de satan",                                 auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre6/livre6_1.png",   pages: 290, stock: 30 },
  { id: 7,  titre: "La transmission de la sorcellerie au sein d'une famille",        auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre7/livre7_1.png",   pages: 350, stock: 25 },
  { id: 8,  titre: "La vie spirituelle du sorcier — Univers astral",                 auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre8/livre8_1.png",   pages: 230, stock: 40 },
  { id: 9,  titre: "Protocole therapeutique MTHS",                                   auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre9/livre9_1.png",   pages: 260, stock: 35 },
  { id: 10, titre: "La guerre des spiritualités en Afrique",                         auteur: "Centre MTHS", prixFCFA: 6500, image: "/images/livre10/livre10_1.png", pages: 200, stock: 50 },
];

const narrateurs = ["Pierre Martin", "Sophie Durand", "Marc Leclerc", "Isabelle Moreau", "Thomas Bernard", "Catherine Petit", "Jean Dupont", "Marie Leroy", "Paul Garnier", "Anne Simon"];

// Génération des livres audio (une seule fois, hors du composant)
const audioBooks = livresSource.map((livre, i) => {
  const min = livre.pages * 2;
  return {
    id: `audio-${livre.id}`,
    title: livre.titre,
    author: livre.auteur,
    priceFCFA: livre.prixFCFA,
    cover: livre.image,
    narrator: narrateurs[i % narrateurs.length],
    duration: `${Math.floor(min / 60)}h${(min % 60).toString().padStart(2, '0')}`,
    rating: (4 + Math.random()).toFixed(1),
    listeners: Math.floor(Math.random() * 25000) + 5000,
  };
});
// ============================================================

function AudioCard({ book, currency, onAdd, inCart, justAdded }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: inCart ? '#f0fdf4' : '#fff',
        border: `1.5px solid ${inCart ? '#86efac' : hovered ? '#93c5fd' : '#e2e8f0'}`,
        borderRadius: '14px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        boxShadow: hovered ? '0 8px 28px rgba(37,99,235,0.11)' : '0 2px 8px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      {/* Added badge */}
      {justAdded && (
        <div style={{
          position: 'absolute', top: 8, right: 8, zIndex: 10,
          background: '#22c55e', color: '#fff',
          width: 26, height: 26, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(34,197,94,0.4)',
          animation: 'popIn 0.3s ease',
        }}>
          <Check size={13} />
        </div>
      )}

      {/* Cover */}
      <div style={{
        position: 'relative', aspectRatio: '1/1',
        background: 'linear-gradient(135deg, #dbeafe, #ede9fe)',
        overflow: 'hidden', flexShrink: 0,
      }}>
        <img
          src={book.cover} alt={book.title}
          onError={e => { e.target.src = '/images/default-book.jpg'; }}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* Play overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.38)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <PlayCircle size={36} color="#fff" />
        </div>
        {/* Audio badge */}
        <div style={{
          position: 'absolute', top: 8, left: 8,
          background: 'rgba(37,99,235,0.9)',
          color: '#fff', fontSize: '9px', fontWeight: 700,
          padding: '2px 7px', borderRadius: '100px',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          backdropFilter: 'blur(4px)',
        }}>
          Audio
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '12px 12px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <h4 style={{
          margin: 0, fontSize: '12.5px', fontWeight: 700, color: '#0f172a', lineHeight: 1.35,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          minHeight: '34px',
        }}>
          {book.title}
        </h4>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '11px', color: '#64748b' }}>
          <Mic size={10} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {book.narrator}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: '11px', color: '#64748b' }}>
            <Headphones size={10} />
            {book.duration}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Star size={10} fill="#facc15" color="#facc15" />
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#0f172a' }}>{book.rating}</span>
          </div>
        </div>

        {/* Price */}
        <div style={{ fontSize: '15px', fontWeight: 800, color: '#2563eb', marginTop: 2 }}>
          {formatPrice(book.priceFCFA, currency)}
        </div>
        {currency !== 'FCFA' && (
          <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: -4 }}>
            ≈ {book.priceFCFA.toLocaleString('fr-FR')} FCFA
          </div>
        )}
      </div>

      {/* Cart button */}
      <div style={{ padding: '10px 12px 12px' }}>
        <button
          onClick={() => onAdd(book)}
          style={{
            width: '100%', padding: '9px',
            borderRadius: '9px', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontSize: '12px', fontWeight: 600,
            background: inCart ? '#dcfce7' : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            color: inCart ? '#15803d' : '#fff',
            boxShadow: inCart ? 'none' : '0 3px 10px rgba(37,99,235,0.28)',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => { if (!inCart) e.currentTarget.style.opacity = '0.85'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          {inCart ? <><Check size={13} /> Ajouté</> : <><ShoppingCart size={13} /> Ajouter</>}
        </button>
      </div>
    </div>
  );
}

function AudioBooks() {
  const { addToCart, cart: globalCart } = useCart();
  const [addedBooks, setAddedBooks] = useState({});
  const [currency, setCurrency] = useState('FCFA');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = audioBooks.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = (book) => {
    addToCart({ id: book.id, type: 'audiobook', title: book.title, author: book.author, narrator: book.narrator, price: book.priceFCFA, cover: book.cover, category: 'Livre audio', duration: book.duration, rating: book.rating });
    setAddedBooks(p => ({ ...p, [book.id]: true }));
    setTimeout(() => setAddedBooks(p => ({ ...p, [book.id]: false })), 2000);
  };

  const isInCart = (id) => globalCart.some(i => i.id === id && i.type === 'audiobook');

  return (
    <>
      <style>{`
        @keyframes popIn {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1);   opacity: 1; }
        }
        .ab-section {
          background: linear-gradient(160deg, #f8faff 0%, #ffffff 55%, #f3f0ff 100%);
          padding: 56px 0 72px;
        }
        .ab-container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        /* Header */
        .ab-header {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; margin-bottom: 28px; flex-wrap: wrap;
        }
        .ab-title-group { display: flex; align-items: center; gap: 12px; }
        .ab-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(37,99,235,0.28);
          flex-shrink: 0;
        }
        .ab-title { font-size: clamp(1.2rem, 2vw, 1.55rem); font-weight: 800; color: #0f172a; margin: 0; letter-spacing: -0.02em; }
        .ab-title span { color: #2563eb; }
        .ab-count { font-size: 12.5px; font-weight: 500; color: #94a3b8; margin: 0; }

        /* Toolbar */
        .ab-toolbar {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px; flex-wrap: wrap;
        }
        .ab-search-wrap { position: relative; flex: 1; max-width: 360px; min-width: 180px; }
        .ab-search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #94a3b8; display: flex; pointer-events: none; }
        .ab-search-input {
          width: 100%; padding: 10px 34px 10px 38px;
          border-radius: 10px; border: 1.5px solid #e2e8f0;
          background: #fff; font-size: 13.5px; color: #0f172a;
          outline: none; transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .ab-search-input:focus { border-color: #93c5fd; box-shadow: 0 0 0 3px rgba(147,197,253,0.2); }
        .ab-clear { position: absolute; right: 9px; top: 50%; transform: translateY(-50%); background: #e2e8f0; border: none; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #64748b; }

        /* Grid */
        .ab-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .ab-empty { grid-column: 1/-1; text-align: center; padding: 60px 0; color: #94a3b8; }

        /* Responsive */
        @media (max-width: 1100px) { .ab-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 820px)  { .ab-grid { grid-template-columns: repeat(3, 1fr); } .ab-container { padding: 0 20px; } }
        @media (max-width: 580px)  {
          .ab-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .ab-container { padding: 0 16px; }
          .ab-section { padding: 40px 0 56px; }
          .ab-header { flex-direction: column; align-items: flex-start; }
          .ab-toolbar { flex-direction: column; align-items: stretch; }
          .ab-search-wrap { max-width: 100%; }
        }
      `}</style>

      <section className="ab-section">
        <div className="ab-container">

          {/* ── Header ── */}
          <div className="ab-header">
            <div className="ab-title-group">
              <div className="ab-icon-wrap">
                <Headphones size={20} color="#fff" />
              </div>
              <div>
                <h2 className="ab-title">Livres <span>audio</span> MTHS</h2>
                <p className="ab-count">{audioBooks.length} titres disponibles • Narrateurs professionnels</p>
              </div>
            </div>
          </div>

          {/* ── Toolbar ── */}
          <div className="ab-toolbar">
            <div className="ab-search-wrap">
              <span className="ab-search-icon"><Search size={15} /></span>
              <input
                className="ab-search-input"
                type="text"
                placeholder="Rechercher un titre…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="ab-clear" onClick={() => setSearchTerm('')}>
                  <X size={11} />
                </button>
              )}
            </div>

            <CurrencySwitcher currency={currency} onChange={setCurrency} />

            <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#94a3b8', whiteSpace: 'nowrap' }}>
              <b style={{ color: '#0f172a' }}>{filtered.length}</b> résultat{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* ── Grid ── */}
          <div className="ab-grid">
            {filtered.length > 0 ? (
              filtered.map(book => (
                <AudioCard
                  key={book.id}
                  book={book}
                  currency={currency}
                  onAdd={handleAdd}
                  inCart={isInCart(book.id)}
                  justAdded={!!addedBooks[book.id]}
                />
              ))
            ) : (
              <div className="ab-empty">
                <Headphones size={48} color="#bfdbfe" style={{ marginBottom: 12 }} />
                <p style={{ fontSize: '14px' }}>Aucun résultat pour « {searchTerm} »</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default AudioBooks;