import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Headphones,
  Download,
  User,
  Award,
  Shield,
  Star,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const navigate = useNavigate();

  const allProducts = [
    { id: 1, titre: "Chrétien africain face à la sorcellerie", auteur: "NGA Marie Constantin & SIDA ABENA Jean Paul Sylvain", desc: "Manuel de référence sur la confrontation chrétienne aux phénomènes de sorcellerie en Afrique.", prixFCFA: 6500, image: "/images/livre1/livre1_1.png", type: "Livre doctrinal", pages: 320, stock: 50 },
    { id: 2, titre: "Comment reconnaître à vue d'œil un sorcier", auteur: "SIDA ABENA Jean Paul Sylvain", desc: "Guide d'observation et de discernement des personnes impliquées dans les pratiques occultes.", prixFCFA: 6500, image: "/images/livre2/livre2_1.png", type: "Manuel clinique", pages: 240, stock: 35 },
    { id: 3, titre: "Comment se soigner des persécutions spirituelles", auteur: "SIDA ABENA Jean Paul Sylvain", desc: "Guide thérapeutique intégrant remèdes naturels, prières et rites de délivrance.", prixFCFA: 6500, image: "/images/livre3/livre3_1.png", type: "Guide thérapeutique", pages: 280, stock: 40 },
    { id: 4, titre: "À la rencontre de JPSSA", auteur: "Centre MTHS", desc: "Biographie spirituelle et doctrinale du fondateur de la Médecine Traditionnelle des Handicapés Spirituels.", prixFCFA: 6500, image: "/images/livre4/livre4_1.png", type: "E-book biographique", pages: 180, stock: 60 },
    { id: 5, titre: "Le musulman face à la sorcellerie", auteur: "Centre MTHS", desc: "Première approche interreligieuse adaptant les principes MTHS au contexte islamique africain.", prixFCFA: 6500, image: "/images/livre5/livre5_1.png", type: "Livre interreligieux", pages: 210, stock: 45 },
    { id: 6, titre: "Les dix commandements de Satan", auteur: "SIDA ABENA Jean Paul Sylvain", desc: "Étude théologique des principes spirituels inversés qui gouvernent les dynamiques occultes en Afrique.", prixFCFA: 6500, image: "/images/livre6/livre6_1.png", type: "Ouvrage théologique", pages: 290, stock: 30 },
    { id: 7, titre: "La transmission de la sorcellerie au sein d'une famille", auteur: "NGA Marie Constantin & SIDA ABENA Jean Paul Sylvain", desc: "Analyse des mécanismes héréditaires et transgénérationnels de transmission des liens occultes.", prixFCFA: 6500, image: "/images/livre7/livre7_1.png", type: "Analyse familiale", pages: 350, stock: 25 },
    { id: 8, titre: "La vie spirituelle du sorcier — Univers astral", auteur: "SIDA ABENA Jean Paul Sylvain", desc: "Exploration cartographique des dimensions spirituelles parallèles selon les traditions africaines.", prixFCFA: 6500, image: "/images/livre8/livre8_1.png", type: "Étude ésotérique", pages: 230, stock: 40 },
    { id: 9, titre: "Protocole thérapeutique MTHS", auteur: "Centre MTHS — Équipe clinique", desc: "Manuel technique standardisé des douze protocoles thérapeutiques de la Médecine Traditionnelle.", prixFCFA: 6500, image: "/images/livre9/livre9_1.png", type: "E-book technique", pages: 260, stock: 35 },
    { id: 10, titre: "La guerre des spiritualités en Afrique", auteur: "NGA Marie Constantin", desc: "Analyse géopolitique et théologique des conflits spirituels contemporains sur le continent africain.", prixFCFA: 6500, image: "/images/livre10/livre10_1.png", type: "Essai", pages: 200, stock: 50 },
    { id: 12, titre: "Religion chinoise face à la sorcellerie", auteur: "Centre MTHS", desc: "Étude comparée des traditions spirituelles chinoises et africaines face aux phénomènes occultes.", prixFCFA: 6500, image: "/images/livre12/livre12_1.png", type: "Étude comparée", pages: 310, stock: 20 },
    { id: 13, titre: "La vie après la mort", auteur: "Centre MTHS", desc: "Enquête théologique et anthropologique sur les conceptions africaines de l'au-delà.", prixFCFA: 6500, image: "/images/livre13/livre13_1.png", type: "Théologie", pages: 310, stock: 20 },
    { id: 14, titre: "Ange ou Démon", auteur: "Centre MTHS", desc: "Manuel pratique du discernement des esprits dans la tradition chrétienne africaine.", prixFCFA: 6500, image: "/images/livre14/livre14_1.png", type: "Manuel spirituel", pages: 310, stock: 20 },
    { id: 15, titre: "Chrétien africain et la maladie", auteur: "Centre MTHS", desc: "Guide holistique de guérison selon une approche intégrant foi chrétienne et thérapies africaines.", prixFCFA: 6500, image: "/images/livre15/livre15_1.png", type: "Guide santé", pages: 310, stock: 20 },
    { id: 16, titre: "Comment vivre ensemble avec les sorciers", auteur: "Centre MTHS", desc: "Stratégies pratiques de coexistence, de protection et de réconciliation communautaire.", prixFCFA: 6500, image: "/images/livre16/livre16_1.png", type: "Médiation", pages: 310, stock: 20 },
    { id: 17, titre: "Le Satanisme et la dérive du monde", auteur: "Centre MTHS", desc: "Analyse théologique et sociale du satanisme contemporain et de ses infiltrations dans la société.", prixFCFA: 6500, image: "/images/livre17/livre17_1.png", type: "Sociologie", pages: 310, stock: 20 },
    { id: 18, titre: "Tradition africaine et christianisme", auteur: "Centre MTHS", desc: "Dialogue approfondi entre les traditions ancestrales africaines et la foi chrétienne.", prixFCFA: 6500, image: "/images/livre18/livre18_1.png", type: "Inculturation", pages: 310, stock: 20 },
    { id: 19, titre: "Le bouddhisme face à la sorcellerie", auteur: "Centre MTHS", desc: "Étude comparative entre la philosophie bouddhiste et les phénomènes de sorcellerie.", prixFCFA: 6500, image: "/images/livre19/livre19_1.png", type: "Religions comparées", pages: 310, stock: 20 },
    { id: 20, titre: "Sectes et sociétés secrètes africaines", auteur: "Centre MTHS", desc: "Enquête documentée sur les organisations occultes et secrètes qui structurent le pouvoir en Afrique.", prixFCFA: 6500, image: "/images/livre20/livre20_1.png", type: "Enquête", pages: 310, stock: 20 },
    { id: 21, titre: "Comment comprendre et interpréter le Rêve", auteur: "Centre MTHS", desc: "Guide complet pour comprendre le langage des rêves selon la tradition africaine et chrétienne.", prixFCFA: 6500, image: "/images/livre21/livre21_1.png", type: "Onirologie", pages: 310, stock: 20 },
    { id: 22, titre: "Comment obtenir ta Délivrance et ta Victoire", auteur: "Centre MTHS", desc: "Guide complet pour obtenir la délivrance et la victoire contre le Diable, les Démons et les Sorciers.", prixFCFA: 6500, image: "/images/livre22/livre22_1.png", type: "Délivrance", pages: 310, stock: 20 },
    { id: 23, titre: "Le Remède Traditionnel Amélioré", auteur: "Centre MTHS", desc: "Guide complet pour obtenir la délivrance et la victoire contre le Diable, les Démons et les Sorciers.", prixFCFA: 6500, image: "/images/livre23/livre23_1.png", type: "Délivrance", pages: 310, stock: 20 },
    { id: 24, titre: "CULTURE DE LA PAIX ET LUTTE CONTRE LA DÉVIANCE SPIRITUELLE ", auteur: "Centre MTHS", desc: "Guide complet pour obtenir la délivrance et la victoire contre le Diable, les Démons et les Sorciers.", prixFCFA: 6500, image: "/images/livre24/livre24_1.png", type: "Délivrance", pages: 310, stock: 20 },
  ];

  const colorPalette = [
    { solid: "#2563eb", light: "#eff6ff", icon: <BookOpen /> },
    { solid: "#7c3aed", light: "#f5f3ff", icon: <Headphones /> },
    { solid: "#d97706", light: "#fffbeb", icon: <Shield /> },
    { solid: "#059669", light: "#ecfdf5", icon: <User /> },
    { solid: "#e11d48", light: "#fff1f2", icon: <Star /> },
    { solid: "#dc2626", light: "#fef2f2", icon: <Award /> },
    { solid: "#4f46e5", light: "#eef2ff", icon: <Sparkles /> },
    { solid: "#0891b2", light: "#ecfeff", icon: <Download /> },
  ];

  const slides = allProducts.map((p, i) => ({
    ...p,
    description: p.desc,
    ...colorPalette[i % colorPalette.length],
  }));

  const doTransition = (fn) => {
    if (animating) return;
    setAnimating(true);
    fn();
    setTimeout(() => setAnimating(false), 500);
  };
  const nextSlide = () => doTransition(() => setCurrentSlide((p) => (p + 1) % slides.length));
  const prevSlide = () => doTransition(() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length));
  const goTo = (i) => { if (i !== currentSlide) doTransition(() => setCurrentSlide(i)); };

  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [currentSlide, animating]);

  const handleImageError = (e) => { e.target.src = "/images/default-book.jpg"; e.target.onerror = null; };

  const goToProduct = (product) =>
    navigate(`/produit/${product.id}`, {
      state: {
        product: { ...product, prixFCFA: product.prixFCFA, image: product.image },
        category: { id: 0, name: "Livres Doctrinaux & Manuels Clinique", couleur: "from-blue-500 to-blue-600" },
        currency: "FCFA",
      },
    });

  const slide = slides[currentSlide];

  return (
    <>
      <style>{`
        /* ─── RESET / BASE ─── */
        *, *::before, *::after { box-sizing: border-box; }

        .h-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(140deg, #eff6ff 0%, #ffffff 50%, #eef2ff 100%);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .h-orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(70px); transition: background 0.9s ease; }
        .h-orb-1 { width: 500px; height: 500px; top: -15%; right: -10%; opacity: 0.10; }
        .h-orb-2 { width: 350px; height: 350px; bottom: -10%; left: -8%; opacity: 0.09; }
        .h-orb-3 { width: 200px; height: 200px; top: 50%; left: 40%; opacity: 0.07; background: #bfdbfe; }

        /* ─── SIDE ARROWS ─── */
        .h-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 30;
          width: 46px; height: 46px;
          border-radius: 50%;
          border: 2px solid #e2e8f0;
          background: #ffffff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #475569;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          transition: border-color 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .h-arrow:hover {
          border-color: #93c5fd;
          background: #eff6ff;
          color: #1d4ed8;
          box-shadow: 0 6px 20px rgba(59,130,246,0.22);
        }
        .h-arrow-left  { left: 16px; }
        .h-arrow-right { right: 16px; }

        /* ─── MAIN LAYOUT ─── */
        .h-body {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 100%;
          padding: 0 72px;
        }

        /* ─── LEFT (TEXT) ─── */
        .h-left {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 24px 40px 0;
          position: relative;
        }

        .h-slides-wrap { position: relative; }
        .h-slide { transition: opacity 0.4s ease, transform 0.4s ease; }
        .h-slide.active   { opacity: 1; transform: translateY(0); position: relative; }
        .h-slide.inactive { opacity: 0; transform: translateY(8px); position: absolute; top: 0; left: 0; width: 100%; pointer-events: none; }

        .h-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 4px 13px 4px 7px;
          border-radius: 100px; border: 1.5px solid transparent;
          margin-bottom: 14px; width: fit-content;
          transition: background 0.7s, border-color 0.7s;
        }
        .h-badge-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; transition: background 0.7s; }
        .h-badge-text { font-size: 10px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; transition: color 0.7s; }

        .h-title {
          font-weight: 800; line-height: 1.18; color: #0f172a;
          margin: 0 0 12px; letter-spacing: -0.022em;
          font-size: clamp(1.05rem, 2.8vw, 2.5rem);
        }

        .h-author { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 14px; }
        .h-author-icon {
          width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px; transition: background 0.7s;
        }
        .h-author-name { font-size: clamp(11px, 1.5vw, 13.5px); font-weight: 500; color: #475569; line-height: 1.5; }

        .h-price-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }
        .h-price-chip { display: inline-flex; align-items: baseline; gap: 4px; padding: 6px 16px; border-radius: 100px; transition: background 0.7s; }
        .h-price-num { font-size: clamp(14px, 2vw, 21px); font-weight: 800; line-height: 1; transition: color 0.7s; }
        .h-price-cur { font-size: 11px; font-weight: 600; letter-spacing: 0.05em; opacity: 0.65; transition: color 0.7s; }
        .h-stock-chip {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 11px; background: #f0fdf4; border: 1.5px solid #bbf7d0;
          border-radius: 100px; font-size: 11px; font-weight: 600; color: #15803d;
          white-space: nowrap;
        }
        .h-stock-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: stockPulse 2s infinite; }
        @keyframes stockPulse {
          0%,100% { opacity:1; transform: scale(1); }
          50% { opacity:0.45; transform: scale(0.7); }
        }

        .h-sep { height: 1px; background: #e2e8f0; margin: 2px 0 16px; }

        .h-desc { font-size: clamp(12px, 1.6vw, 14.5px); line-height: 1.72; color: #64748b; margin: 0 0 20px; }

        .h-stats { display: flex; gap: 16px; padding-top: 18px; border-top: 1px solid #e2e8f0; flex-wrap: wrap; }
        .h-stat { display: flex; align-items: center; gap: 8px; }
        .h-stat-icon { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.7s; }
        .h-stat-label { font-size: 9.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #94a3b8; }
        .h-stat-value { font-size: clamp(12px, 1.6vw, 15px); font-weight: 800; color: #0f172a; line-height: 1.2; }

        /* ─── RIGHT (BOOK) ─── */
        .h-right {
          flex: 0 0 auto;
          width: clamp(130px, 38%, 380px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 0 32px 12px;
          position: relative;
        }

        .h-book-stage { position: relative; width: 100%; }

        .h-book-slide { transition: opacity 0.45s ease, transform 0.45s ease; }
        .h-book-slide.active   { opacity: 1; transform: scale(1); position: relative; }
        .h-book-slide.inactive { opacity: 0; transform: scale(0.97); position: absolute; top: 0; left: 0; width: 100%; pointer-events: none; }

        .h-book-glow {
          position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);
          width: 60%; height: 32px; border-radius: 50%;
          filter: blur(18px); opacity: 0.22; transition: background 0.7s;
        }

        .h-book {
          position: relative; width: 100%; aspect-ratio: 3/4;
          max-height: clamp(180px, 55vw, 480px);
          border-radius: 4px 14px 14px 4px; overflow: hidden;
          box-shadow: -6px 4px 20px rgba(0,0,0,0.11), 0 16px 48px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.03);
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .h-book:hover {
          transform: perspective(800px) rotateY(-6deg) translateY(-4px);
          box-shadow: -12px 8px 28px rgba(0,0,0,0.15), 0 24px 64px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03);
        }
        .h-book-spine {
          position: absolute; left:0; top:0; bottom:0; width:18px; z-index:3;
          transition: background 0.7s;
          display: flex; align-items: center; justify-content: center;
        }
        .h-book-spine-text { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 7px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
        .h-book-bg { position: absolute; inset:0; transition: background 0.7s; }
        .h-book-img { position: absolute; inset:0; display: flex; align-items: center; justify-content: center; }
        .h-book-img img { width:100%; height:100%; object-fit: contain; padding: 8px 8px 8px 22px; }
        .h-book-gloss { position: absolute; inset:0; z-index:4; pointer-events:none; background: linear-gradient(130deg, rgba(255,255,255,0.13) 0%, transparent 52%, rgba(0,0,0,0.07) 100%); }
        .h-book-pages { position: absolute; right:0; top:4px; bottom:4px; width:6px; z-index:3; background: repeating-linear-gradient(90deg, #dde3ea 0px, #dde3ea 1px, #f8fafc 1px, #f8fafc 2.5px); }
        .h-book-curl { position: absolute; top:8px; right:8px; width:26px; height:26px; z-index:5; }
        .h-book-curl::before { content:''; position:absolute; inset:0; background: linear-gradient(135deg, #fff 0%, #f1f5f9 100%); clip-path: polygon(0 0, 100% 100%, 0 100%); border-radius: 0 0 0 5px; box-shadow: -2px 2px 4px rgba(0,0,0,0.09); }

        /* Info cards — non cliquables */
        .h-cards { display: flex; gap: 6px; margin-top: 12px; justify-content: center; flex-wrap: wrap; }
        .h-card {
          background: #fff; border: 1.5px solid #e8edf3; border-radius: 11px;
          padding: 8px 11px; display: flex; align-items: center; gap: 7px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
          min-width: 0; flex: 1 1 auto;
          /* pas de cursor: pointer */
        }
        .h-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(0,0,0,0.09);
          border-color: #bfdbfe;
        }
        .h-card-icon { width: 26px; height: 26px; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.7s; }
        .h-card-label { font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #94a3b8; white-space: nowrap; }
        .h-card-value { font-size: clamp(11px, 1.4vw, 13.5px); font-weight: 800; color: #0f172a; white-space: nowrap; }

        /* ─── BOTTOM NAV ─── */
        .h-nav {
          position: relative; z-index: 10;
          display: flex; align-items: center; justify-content: center;
          gap: 12px; padding: 14px 0 20px;
        }
        .h-dots { display: flex; align-items: center; gap: 4px; }
        .h-dot {
          height: 3px; border-radius: 2px; cursor: pointer; background: #cbd5e1;
          transition: width 0.35s ease, background 0.6s ease, opacity 0.3s; opacity: 0.4;
        }
        .h-dot.on { width: 24px; opacity: 1; }
        .h-dot:not(.on) { width: 5px; }
        .h-dot:hover:not(.on) { opacity: 0.7; }
        .h-counter { font-size: 12px; font-weight: 600; color: #94a3b8; letter-spacing: 0.04em; min-width: 40px; text-align: right; }
        .h-counter b { color: #1e293b; }

        /* ─── RESPONSIVE BREAKPOINTS ─── */
        @media (max-width: 900px) {
          .h-body { padding: 0 58px; }
          .h-left { padding: 28px 16px 28px 0; }
          .h-right { width: clamp(120px, 36%, 280px); }
          .h-stats { gap: 12px; }
          .h-stat-icon { display: none; }
        }

        @media (max-width: 640px) {
          .h-body { padding: 0 50px; }
          .h-left { padding: 20px 12px 20px 0; }
          .h-right { width: clamp(110px, 38%, 220px); }
          .h-desc { display: none; }
          .h-cards { display: none; }
          .h-stats { gap: 10px; flex-wrap: nowrap; overflow: hidden; }
          .h-stat:nth-child(3) { display: none; }
          .h-arrow { width: 38px; height: 38px; }
          .h-arrow-left  { left: 8px; }
          .h-arrow-right { right: 8px; }
          .h-book { max-height: clamp(160px, 50vw, 260px); }
        }

        @media (max-width: 380px) {
          .h-body { padding: 0 44px; }
          .h-right { width: clamp(100px, 40%, 170px); }
          .h-title { font-size: 0.95rem; }
          .h-price-row { gap: 6px; }
          .h-stock-chip { display: none; }
          .h-stats { display: none; }
          .h-arrow { width: 32px; height: 32px; }
          .h-arrow-left  { left: 6px; }
          .h-arrow-right { right: 6px; }
        }
      `}</style>

      <section className="h-section">
        <div className="h-orb h-orb-1" style={{ background: slide.solid }} />
        <div className="h-orb h-orb-2" style={{ background: slide.solid }} />
        <div className="h-orb h-orb-3" />

        <button className="h-arrow h-arrow-left" onClick={prevSlide} aria-label="Précédent">
          <ChevronLeft size={20} />
        </button>
        <button className="h-arrow h-arrow-right" onClick={nextSlide} aria-label="Suivant">
          <ChevronRight size={20} />
        </button>

        <div className="h-body">
          {/* LEFT - TEXT */}
          <div className="h-left">
            <div className="h-slides-wrap">
              {slides.map((s, i) => (
                <div key={s.id} className={`h-slide ${i === currentSlide ? "active" : "inactive"}`}>
                  <div className="h-badge" style={{ background: slide.light, borderColor: slide.solid + "35" }}>
                    <div className="h-badge-dot" style={{ background: slide.solid }} />
                    <span className="h-badge-text" style={{ color: slide.solid }}>{s.type}</span>
                  </div>

                  <h1 className="h-title">{s.titre}</h1>

                  <div className="h-author">
                    <div className="h-author-icon" style={{ background: slide.light }}>
                      <User size={12} color={slide.solid} />
                    </div>
                    <span className="h-author-name">{s.auteur}</span>
                  </div>

                  <div className="h-price-row">
                    <div className="h-price-chip" style={{ background: slide.light }}>
                      <span className="h-price-num" style={{ color: slide.solid }}>
                        {s.prixFCFA.toLocaleString("fr-FR")}
                      </span>
                      <span className="h-price-cur" style={{ color: slide.solid }}>FCFA</span>
                    </div>
                    <div className="h-stock-chip">
                      <div className="h-stock-dot" />
                      En stock ({s.stock})
                    </div>
                  </div>

                  <div className="h-sep" />

                  <p className="h-desc">{s.desc}</p>

                  <div className="h-stats">
                    <div className="h-stat">
                      <div className="h-stat-icon" style={{ background: slide.light }}>
                        <Star size={13} color={slide.solid} />
                      </div>
                      <div>
                        <div className="h-stat-label">Évaluation</div>
                        <div className="h-stat-value">4.9 / 5</div>
                      </div>
                    </div>
                    <div className="h-stat">
                      <div className="h-stat-icon" style={{ background: "#f0fdf4" }}>
                        <BookOpen size={13} color="#15803d" />
                      </div>
                      <div>
                        <div className="h-stat-label">Pages</div>
                        <div className="h-stat-value">{s.pages}</div>
                      </div>
                    </div>
                    <div className="h-stat">
                      <div className="h-stat-icon" style={{ background: "#f5f3ff" }}>
                        <Shield size={13} color="#6d28d9" />
                      </div>
                      <div>
                        <div className="h-stat-label">Formats</div>
                        <div className="h-stat-value">PDF · Papier</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - BOOK */}
          <div className="h-right">
            <div className="h-book-stage">
              {slides.map((s, i) => (
                <div key={s.id} className={`h-book-slide ${i === currentSlide ? "active" : "inactive"}`}>
                  <div className="h-book-glow" style={{ background: slide.solid }} />

                  {/* Le livre est cliquable (image uniquement) */}
                  <div className="h-book" onClick={() => goToProduct(s)}>
                    <div className="h-book-spine" style={{ background: `linear-gradient(180deg, ${slide.solid}dd 0%, ${slide.solid}88 100%)` }}>
                      <span className="h-book-spine-text">MTHS</span>
                    </div>
                    <div className="h-book-bg" style={{ background: `linear-gradient(155deg, ${slide.light} 0%, #f8fafc 100%)` }} />
                    <div className="h-book-img">
                      <img src={s.image} alt={s.titre} onError={handleImageError} />
                    </div>
                    <div className="h-book-gloss" />
                    <div className="h-book-pages" />
                    <div className="h-book-curl" />
                  </div>

                  {/* Cartes d'information — non cliquables (pas de onClick) */}
                  <div className="h-cards">
                    <div className="h-card">
                      <div className="h-card-icon" style={{ background: slide.light }}>
                        {React.cloneElement(s.icon, { size: 13, color: slide.solid })}
                      </div>
                      <div>
                        <div className="h-card-label">Format</div>
                        <div className="h-card-value">PDF · Papier</div>
                      </div>
                    </div>
                    <div className="h-card">
                      <div className="h-card-icon" style={{ background: "#fffbeb" }}>
                        <BookOpen size={13} color="#d97706" />
                      </div>
                      <div>
                        <div className="h-card-label">Pages</div>
                        <div className="h-card-value">{s.pages}</div>
                      </div>
                    </div>
                    <div className="h-card">
                      <div className="h-card-icon" style={{ background: "#f0fdf4" }}>
                        <Shield size={13} color="#15803d" />
                      </div>
                      <div>
                        <div className="h-card-label">Stock</div>
                        <div className="h-card-value">{s.stock}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-nav">
          <div className="h-dots">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-dot${i === currentSlide ? " on" : ""}`}
                style={i === currentSlide ? { background: slide.solid } : {}}
                onClick={() => goTo(i)}
                role="button"
                aria-label={`Livre ${i + 1}`}
              />
            ))}
          </div>
          <div className="h-counter">
            <b>{String(currentSlide + 1).padStart(2, "0")}</b>
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>

        <div
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX === null) return;
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
            setTouchStartX(null);
          }}
        />
      </section>
    </>
  );
}

export default Hero;