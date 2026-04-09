import React, { useState, useEffect,  } from "react";
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
  const [touchStartY, setTouchStartY] = useState(null);
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
    { id: 23, titre: "Le Remède Traditionnel Amélioré", auteur: "Centre MTHS", desc: "Préparations validées par le Centre pour soutenir la santé spirituelle, mentale et corporelle.", prixFCFA: 6500, image: "/images/livre23/livre23_1.png", type: "Remèdes", pages: 310, stock: 20 },
    { id: 24, titre: "Culture de la Paix et Lutte contre la Déviance Spirituelle", auteur: "Centre MTHS", desc: "Stratégies spirituelles et communautaires pour instaurer la paix face aux forces de déviance.", prixFCFA: 6500, image: "/images/livre24/livre24_1.png", type: "Paix & Culture", pages: 310, stock: 20 },
    { id: 25, titre: "Hindouisme et Déviance Spirituelle", auteur: "Centre MTHS", desc: "Étude des interactions entre la tradition hindoue et les phénomènes de déviance spirituelle.", prixFCFA: 6500, image: "/images/livre25/livre25_1.png", type: "Religions comparées", pages: 310, stock: 20 },
    { id: 26, titre: "La puissance spirituelle du sexe", auteur: "Centre MTHS", desc: "Analyse théologique des implications spirituelles de la sexualité dans la tradition africaine.", prixFCFA: 6500, image: "/images/livre26/livre26_1.png", type: "Spiritualité", pages: 310, stock: 20 },
    { id: 27, titre: "Le Cameroun dans les flammes", auteur: "Centre MTHS", desc: "Lecture spirituelle et prophétique des crises qui traversent le Cameroun contemporain.", prixFCFA: 6500, image: "/images/livre27/livre27_1.png", type: "Prophétie", pages: 310, stock: 20 },
    { id: 28, titre: "L'Hygiène de l'âme", auteur: "Centre MTHS", desc: "Pratiques spirituelles quotidiennes pour maintenir la pureté et la santé de l'âme.", prixFCFA: 6500, image: "/images/livre28/livre28_1.png", type: "Spiritualité", pages: 310, stock: 20 },
    { id: 29, titre: "Conséquences spirituelles de la masturbation et de la pornographie", auteur: "Centre MTHS", desc: "Analyse des répercussions spirituelles des déviances sexuelles selon la tradition MTHS.", prixFCFA: 6500, image: "/images/livre29/livre29_1.png", type: "Morale", pages: 310, stock: 20 },
    { id: 30, titre: "Le bon choix de ton partenaire de mariage", auteur: "Centre MTHS", desc: "Guide spirituel pour discerner le bon conjoint selon les critères de la foi et de la tradition.", prixFCFA: 6500, image: "/images/livre30/livre30_1.png", type: "Mariage", pages: 310, stock: 20 },
    { id: 31, titre: "La Sorcellerie au-dessus de la foi", auteur: "Centre MTHS", desc: "Enquête sur les mécanismes par lesquels la sorcellerie peut affecter même les croyants.", prixFCFA: 6500, image: "/images/livre31/livre31_1.png", type: "Foi & Sorcellerie", pages: 310, stock: 20 },
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
        /* ════════════════════════════════════════
           HERO — MTHS   (mobile-first, then desktop)
        ════════════════════════════════════════ */

        *, *::before, *::after { box-sizing: border-box; margin: 0; }

        /* ── ROOT SECTION ── */
        .h-section {
          position: relative;
          background: linear-gradient(145deg, #f0f7ff 0%, #ffffff 55%, #f0f0ff 100%);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100svh;
        }

        /* ── AMBIENT ORBS ── */
        .h-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          transition: background 0.9s ease;
        }
        .h-orb-1 { width: 420px; height: 420px; top: -120px; right: -80px; opacity: 0.08; }
        .h-orb-2 { width: 300px; height: 300px; bottom: -60px; left: -60px; opacity: 0.07; }

        /* ══════════════════════════════════════
           MOBILE  (< 640 px)  — card layout
        ══════════════════════════════════════ */

        .h-mobile {
          display: flex;
          flex-direction: column;
          min-height: 100svh;
          position: relative;
          z-index: 2;
        }

        /* Top strip: type badge + counter */
        .h-mob-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px 0;
        }
        .h-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px 5px 8px;
          border-radius: 100px;
          border: 1.5px solid transparent;
          transition: background .6s, border-color .6s;
        }
        .h-badge-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; transition: background .6s; }
        .h-badge-text { font-size: 10px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: color .6s; }
        .h-mob-counter { font-size: 11px; font-weight: 600; color: #94a3b8; letter-spacing: .04em; }
        .h-mob-counter b { color: #1e293b; }

        /* Book card — full-width, aspect preserved */
        .h-mob-book-wrap {
          padding: 16px 24px 0;
          display: flex;
          justify-content: center;
        }
        .h-mob-book {
          position: relative;
          width: min(220px, 55vw);
          aspect-ratio: 3/4;
          border-radius: 4px 12px 12px 4px;
          overflow: hidden;
          cursor: pointer;
          box-shadow:
            -4px 3px 14px rgba(0,0,0,.10),
            0 12px 36px rgba(0,0,0,.13),
            0 0 0 1px rgba(0,0,0,.03);
          transition: transform .35s ease, box-shadow .35s ease;
          flex-shrink: 0;
        }
        .h-mob-book:active { transform: scale(0.97); }
        .h-mob-spine {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 16px;
          z-index: 3;
          display: flex; align-items: center; justify-content: center;
          transition: background .6s;
        }
        .h-mob-spine-txt {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 6px; font-weight: 800;
          letter-spacing: .2em; text-transform: uppercase;
          color: rgba(255,255,255,.55);
        }
        .h-mob-book-bg { position: absolute; inset: 0; transition: background .6s; }
        .h-mob-book-img {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .h-mob-book-img img { width: 100%; height: 100%; object-fit: contain; padding: 6px 6px 6px 20px; }
        .h-mob-book-gloss {
          position: absolute; inset: 0; z-index: 4; pointer-events: none;
          background: linear-gradient(130deg,rgba(255,255,255,.14) 0%,transparent 55%,rgba(0,0,0,.06) 100%);
        }
        .h-mob-book-pages {
          position: absolute; right: 0; top: 4px; bottom: 4px; width: 5px; z-index: 3;
          background: repeating-linear-gradient(90deg,#dde3ea 0,#dde3ea 1px,#f8fafc 1px,#f8fafc 2.5px);
        }
        .h-mob-glow {
          position: absolute;
          bottom: -12px; left: 50%; transform: translateX(-50%);
          width: 70%; height: 28px; border-radius: 50%;
          filter: blur(14px); opacity: .20; transition: background .6s;
          pointer-events: none;
        }

        /* Slide info card */
        .h-mob-card {
          margin: 16px 16px 0;
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #e8edf3;
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
          padding: 20px 18px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: border-color .5s;
        }

        .h-mob-title {
          font-size: clamp(1rem, 4.2vw, 1.15rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.28;
          letter-spacing: -.015em;
          margin-bottom: 8px;
        }

        .h-mob-author {
          display: flex; align-items: flex-start; gap: 7px;
          margin-bottom: 12px;
        }
        .h-mob-author-dot {
          width: 18px; height: 18px; border-radius: 50%;
          flex-shrink: 0; margin-top: 1px;
          display: flex; align-items: center; justify-content: center;
          transition: background .6s;
        }
        .h-mob-author-name {
          font-size: 11.5px; font-weight: 500; color: #64748b; line-height: 1.5;
        }

        .h-mob-sep { height: 1px; background: #f1f5f9; margin: 0 0 12px; }

        .h-mob-desc {
          font-size: 12.5px; line-height: 1.68; color: #64748b;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Price + stock row */
        .h-mob-price-row {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 14px; flex-wrap: wrap;
        }
        .h-mob-price {
          display: inline-flex; align-items: baseline; gap: 3px;
          padding: 5px 14px; border-radius: 100px;
          transition: background .6s;
        }
        .h-mob-price-num { font-size: 18px; font-weight: 900; line-height: 1; transition: color .6s; }
        .h-mob-price-cur { font-size: 10px; font-weight: 700; letter-spacing: .05em; opacity: .65; transition: color .6s; }
        .h-mob-stock {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 4px 10px; background: #f0fdf4;
          border: 1.5px solid #bbf7d0; border-radius: 100px;
          font-size: 10.5px; font-weight: 600; color: #15803d;
        }
        .h-mob-stock-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
          animation: stockPulse 2s infinite;
        }
        @keyframes stockPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.4; transform:scale(.65); }
        }

        /* Metadata chips row */
        .h-mob-meta {
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .h-mob-chip {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 11px;
          background: #f8fafc;
          border: 1px solid #e8edf3; border-radius: 10px;
          flex: 1; min-width: 80px;
        }
        .h-mob-chip-icon {
          width: 20px; height: 20px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background .6s;
        }
        .h-mob-chip-label { font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: #94a3b8; }
        .h-mob-chip-value { font-size: 12px; font-weight: 800; color: #0f172a; }

        /* CTA Button */
        .h-mob-cta {
          margin: 14px 16px 0;
          display: flex; gap: 8px;
        }
        .h-mob-btn-primary {
          flex: 1;
          padding: 14px;
          border-radius: 16px;
          border: none;
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: .01em;
          cursor: pointer;
          color: #fff;
          transition: background .5s, transform .18s, box-shadow .18s;
          box-shadow: 0 4px 14px rgba(0,0,0,.12);
        }
        .h-mob-btn-primary:active { transform: scale(.97); box-shadow: none; }
        .h-mob-btn-secondary {
          width: 50px;
          border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: border-color .2s, color .2s;
        }
        .h-mob-btn-secondary:active { border-color: #94a3b8; color: #1e293b; }

        /* Navigation row */
        .h-mob-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px 20px;
        }
        .h-mob-arrows { display: flex; gap: 8px; }
        .h-mob-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #64748b;
          box-shadow: 0 2px 8px rgba(0,0,0,.07);
          transition: border-color .2s, color .2s, background .2s;
        }
        .h-mob-arrow:active { background: #f8fafc; border-color: #93c5fd; color: #1d4ed8; }

        .h-mob-dots { display: flex; align-items: center; gap: 3px; overflow: hidden; max-width: 140px; }
        .h-mob-dot {
          height: 3px; border-radius: 2px; cursor: pointer;
          background: #cbd5e1; transition: width .35s ease, background .5s ease, opacity .3s;
        }
        .h-mob-dot.on { opacity: 1; }
        .h-mob-dot:not(.on) { width: 4px; opacity: .35; }

        /* ── SWIPE HINT (first load only) ── */
        .h-swipe-hint {
          position: absolute;
          bottom: 72px; left: 50%; transform: translateX(-50%);
          font-size: 10px; font-weight: 600; color: #94a3b8;
          letter-spacing: .08em; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
          animation: swipeHint 2.5s ease 1.5s forwards;
          opacity: 0; pointer-events: none;
        }
        .h-swipe-hint-line { height: 1px; width: 24px; background: #cbd5e1; }
        @keyframes swipeHint {
          0%   { opacity: 0; transform: translateX(-50%) translateY(4px); }
          15%  { opacity: 1; transform: translateX(-50%) translateY(0); }
          75%  { opacity: 1; }
          100% { opacity: 0; }
        }

        /* Hide mobile on desktop */
        @media (min-width: 641px) { .h-mobile { display: none; } }

        /* ══════════════════════════════════════
           DESKTOP  (≥ 641 px)
        ══════════════════════════════════════ */

        .h-desktop { display: none; }

        @media (min-width: 641px) {
          .h-desktop {
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
            min-height: 100svh;
          }

          /* ── side arrows ── */
          .h-arrow {
            position: absolute;
            z-index: 30;
            width: 46px; height: 46px; border-radius: 50%;
            border: 1.5px solid #e2e8f0; background: #fff;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; color: #475569;
            box-shadow: 0 4px 16px rgba(0,0,0,.12);
            transition: border-color .2s, background .2s, color .2s, box-shadow .2s;
          }
          .h-arrow:hover { border-color: #93c5fd; background: #eff6ff; color: #1d4ed8; box-shadow: 0 6px 20px rgba(59,130,246,.22); }
          .h-arrow-left  { top: 50%; left: 16px; transform: translateY(-50%); }
          .h-arrow-right { top: 50%; right: 16px; transform: translateY(-50%); }

          /* ── body layout ── */
          .h-body {
            flex: 1;
            display: flex;
            align-items: stretch;
            padding: 0 72px;
          }

          /* ── left (text) ── */
          .h-left {
            flex: 1 1 0; min-width: 0;
            display: flex; flex-direction: column; justify-content: center;
            padding: 40px 28px 40px 0;
          }
          .h-slide { transition: opacity .4s ease, transform .4s ease; }
          .h-slide.active   { opacity: 1; transform: translateY(0); position: relative; }
          .h-slide.inactive { opacity: 0; transform: translateY(8px); position: absolute; top: 0; left: 0; width: 100%; pointer-events: none; }
          .h-slides-wrap { position: relative; }

          .h-d-badge {
            display: inline-flex; align-items: center; gap: 7px;
            padding: 4px 13px 4px 7px; border-radius: 100px;
            border: 1.5px solid transparent; margin-bottom: 14px;
            width: fit-content; transition: background .7s, border-color .7s;
          }
          .h-d-badge-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; transition: background .7s; }
          .h-d-badge-text { font-size: 10px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; transition: color .7s; }

          .h-d-title {
            font-weight: 800; line-height: 1.18; color: #0f172a;
            margin: 0 0 12px; letter-spacing: -.022em;
            font-size: clamp(1.05rem, 2.8vw, 2.5rem);
          }
          .h-d-author { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 14px; }
          .h-d-author-icon {
            width: 24px; height: 24px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0; margin-top: 1px; transition: background .7s;
          }
          .h-d-author-name { font-size: clamp(11px,1.5vw,13.5px); font-weight: 500; color: #475569; line-height: 1.5; }
          .h-d-price-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }
          .h-d-price-chip { display: inline-flex; align-items: baseline; gap: 4px; padding: 6px 16px; border-radius: 100px; transition: background .7s; }
          .h-d-price-num { font-size: clamp(14px,2vw,21px); font-weight: 800; line-height: 1; transition: color .7s; }
          .h-d-price-cur { font-size: 11px; font-weight: 600; letter-spacing: .05em; opacity: .65; transition: color .7s; }
          .h-d-stock {
            display: inline-flex; align-items: center; gap: 5px;
            padding: 5px 11px; background: #f0fdf4;
            border: 1.5px solid #bbf7d0; border-radius: 100px;
            font-size: 11px; font-weight: 600; color: #15803d; white-space: nowrap;
          }
          .h-d-stock-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: stockPulse 2s infinite; }
          .h-d-sep { height: 1px; background: #e2e8f0; margin: 2px 0 16px; }
          .h-d-desc { font-size: clamp(12px,1.6vw,14.5px); line-height: 1.72; color: #64748b; margin: 0 0 20px; }
          .h-d-stats { display: flex; gap: 16px; padding-top: 18px; border-top: 1px solid #e2e8f0; flex-wrap: wrap; }
          .h-d-stat { display: flex; align-items: center; gap: 8px; }
          .h-d-stat-icon { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .7s; }
          .h-d-stat-label { font-size: 9.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: #94a3b8; }
          .h-d-stat-value { font-size: clamp(12px,1.6vw,15px); font-weight: 800; color: #0f172a; line-height: 1.2; }

          /* ── right (book) ── */
          .h-right {
            flex: 0 0 auto;
            width: clamp(130px,38%,380px);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            padding: 32px 0 32px 12px;
            position: relative;
          }
          .h-book-stage { position: relative; width: 100%; }
          .h-book-slide { transition: opacity .45s ease, transform .45s ease; }
          .h-book-slide.active   { opacity: 1; transform: scale(1); position: relative; }
          .h-book-slide.inactive { opacity: 0; transform: scale(.97); position: absolute; top: 0; left: 0; width: 100%; pointer-events: none; }
          .h-book-glow {
            position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);
            width: 60%; height: 32px; border-radius: 50%;
            filter: blur(18px); opacity: .22; transition: background .7s;
          }
          .h-book {
            position: relative; width: 100%; aspect-ratio: 3/4;
            max-height: clamp(180px,55vw,480px);
            border-radius: 4px 14px 14px 4px; overflow: hidden;
            box-shadow: -6px 4px 20px rgba(0,0,0,.11), 0 16px 48px rgba(0,0,0,.13), 0 0 0 1px rgba(0,0,0,.03);
            cursor: pointer;
            transition: transform .35s ease, box-shadow .35s ease;
          }
          .h-book:hover {
            transform: perspective(800px) rotateY(-6deg) translateY(-4px);
            box-shadow: -12px 8px 28px rgba(0,0,0,.15), 0 24px 64px rgba(0,0,0,.15), 0 0 0 1px rgba(0,0,0,.03);
          }
          .h-book-spine {
            position: absolute; left:0; top:0; bottom:0; width:18px; z-index:3;
            transition: background .7s; display: flex; align-items: center; justify-content: center;
          }
          .h-book-spine-text { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 7px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.6); }
          .h-book-bg { position: absolute; inset:0; transition: background .7s; }
          .h-book-img { position: absolute; inset:0; display: flex; align-items: center; justify-content: center; }
          .h-book-img img { width:100%; height:100%; object-fit: contain; padding: 8px 8px 8px 22px; }
          .h-book-gloss { position: absolute; inset:0; z-index:4; pointer-events:none; background: linear-gradient(130deg,rgba(255,255,255,.13) 0%,transparent 52%,rgba(0,0,0,.07) 100%); }
          .h-book-pages { position: absolute; right:0; top:4px; bottom:4px; width:6px; z-index:3; background: repeating-linear-gradient(90deg,#dde3ea 0px,#dde3ea 1px,#f8fafc 1px,#f8fafc 2.5px); }
          .h-d-cards { display: flex; gap: 6px; margin-top: 12px; justify-content: center; flex-wrap: wrap; }
          .h-d-card {
            background: #fff; border: 1.5px solid #e8edf3; border-radius: 11px;
            padding: 8px 11px; display: flex; align-items: center; gap: 7px;
            box-shadow: 0 2px 8px rgba(0,0,0,.05);
            transition: transform .2s, box-shadow .2s, border-color .2s;
            min-width: 0; flex: 1 1 auto;
          }
          .h-d-card:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(0,0,0,.09); border-color: #bfdbfe; }
          .h-d-card-icon { width: 26px; height: 26px; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .7s; }
          .h-d-card-label { font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: #94a3b8; white-space: nowrap; }
          .h-d-card-value { font-size: clamp(11px,1.4vw,13.5px); font-weight: 800; color: #0f172a; white-space: nowrap; }

          /* ── bottom nav ── */
          .h-nav {
            position: relative; z-index: 10;
            display: flex; align-items: center; justify-content: center;
            gap: 12px; padding: 14px 0 20px;
          }
          .h-dots { display: flex; align-items: center; gap: 4px; }
          .h-dot {
            height: 3px; border-radius: 2px; cursor: pointer; background: #cbd5e1;
            transition: width .35s ease, background .6s ease, opacity .3s; opacity: .4;
          }
          .h-dot.on { width: 24px; opacity: 1; }
          .h-dot:not(.on) { width: 5px; }
          .h-dot:hover:not(.on) { opacity: .7; }
          .h-counter { font-size: 12px; font-weight: 600; color: #94a3b8; letter-spacing: .04em; min-width: 40px; text-align: right; }
          .h-counter b { color: #1e293b; }

          @media (max-width: 900px) {
            .h-body { padding: 0 58px; }
            .h-left { padding: 28px 16px 28px 0; }
            .h-right { width: clamp(120px,36%,280px); }
          }
        }
      `}</style>

      <section className="h-section">
        <div className="h-orb h-orb-1" style={{ background: slide.solid }} />
        <div className="h-orb h-orb-2" style={{ background: slide.solid }} />

        {/* ════════════ MOBILE UI ════════════ */}
        <div
          className="h-mobile"
          onTouchStart={(e) => { setTouchStartX(e.touches[0].clientX); setTouchStartY(e.touches[0].clientY); }}
          onTouchEnd={(e) => {
            if (touchStartX === null) return;
            const dx = touchStartX - e.changedTouches[0].clientX;
            const dy = Math.abs(touchStartY - e.changedTouches[0].clientY);
            if (Math.abs(dx) > 44 && dy < 60) { dx > 0 ? nextSlide() : prevSlide(); }
            setTouchStartX(null); setTouchStartY(null);
          }}
        >
          {/* Top bar */}
          <div className="h-mob-topbar">
            <div
              className="h-badge"
              style={{ background: slide.light, borderColor: slide.solid + "35" }}
            >
              <div className="h-badge-dot" style={{ background: slide.solid }} />
              <span className="h-badge-text" style={{ color: slide.solid }}>{slide.type}</span>
            </div>
            <div className="h-mob-counter">
              <b>{String(currentSlide + 1).padStart(2, "0")}</b>
              {" / "}
              {String(slides.length).padStart(2, "0")}
            </div>
          </div>

          {/* Book visual */}
          <div className="h-mob-book-wrap">
            <div style={{ position: "relative" }}>
              <div
                className="h-mob-glow"
                style={{ background: slide.solid }}
              />
              <div className="h-mob-book" onClick={() => goToProduct(slide)}>
                <div
                  className="h-mob-spine"
                  style={{ background: `linear-gradient(180deg,${slide.solid}dd 0%,${slide.solid}88 100%)` }}
                >
                  <span className="h-mob-spine-txt">MTHS</span>
                </div>
                <div
                  className="h-mob-book-bg"
                  style={{ background: `linear-gradient(155deg,${slide.light} 0%,#f8fafc 100%)` }}
                />
                <div className="h-mob-book-img">
                  <img src={slide.image} alt={slide.titre} onError={handleImageError} />
                </div>
                <div className="h-mob-book-gloss" />
                <div className="h-mob-book-pages" />
              </div>
            </div>
          </div>

          {/* Info card */}
          <div
            className="h-mob-card"
            style={{ borderColor: slide.solid + "22" }}
          >
            <h2 className="h-mob-title">{slide.titre}</h2>

            <div className="h-mob-author">
              <div className="h-mob-author-dot" style={{ background: slide.light }}>
                <User size={10} color={slide.solid} />
              </div>
              <span className="h-mob-author-name">{slide.auteur}</span>
            </div>

            <div className="h-mob-sep" />

            <p className="h-mob-desc">{slide.desc}</p>

            <div className="h-mob-price-row">
              <div className="h-mob-price" style={{ background: slide.light }}>
                <span className="h-mob-price-num" style={{ color: slide.solid }}>
                  {slide.prixFCFA.toLocaleString("fr-FR")}
                </span>
                <span className="h-mob-price-cur" style={{ color: slide.solid }}>FCFA</span>
              </div>
              <div className="h-mob-stock">
                <div className="h-mob-stock-dot" />
                En stock ({slide.stock})
              </div>
            </div>

            <div className="h-mob-meta">
              <div className="h-mob-chip">
                <div className="h-mob-chip-icon" style={{ background: slide.light }}>
                  <BookOpen size={11} color={slide.solid} />
                </div>
                <div>
                  <div className="h-mob-chip-label">Pages</div>
                  <div className="h-mob-chip-value">{slide.pages}</div>
                </div>
              </div>
              <div className="h-mob-chip">
                <div className="h-mob-chip-icon" style={{ background: "#f5f3ff" }}>
                  <Shield size={11} color="#7c3aed" />
                </div>
                <div>
                  <div className="h-mob-chip-label">Format</div>
                  <div className="h-mob-chip-value">PDF · Papier</div>
                </div>
              </div>
              <div className="h-mob-chip">
                <div className="h-mob-chip-icon" style={{ background: "#fffbeb" }}>
                  <Star size={11} color="#d97706" />
                </div>
                <div>
                  <div className="h-mob-chip-label">Note</div>
                  <div className="h-mob-chip-value">4.9 / 5</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="h-mob-cta">
            <button
              className="h-mob-btn-primary"
              style={{ background: `linear-gradient(135deg, ${slide.solid} 0%, ${slide.solid}cc 100%)` }}
              onClick={() => goToProduct(slide)}
            >
              Voir ce livre
            </button>
            <button className="h-mob-btn-secondary">
              <Download size={18} />
            </button>
          </div>

          {/* Navigation */}
          <div className="h-mob-nav">
            <div className="h-mob-arrows">
              <button className="h-mob-arrow" onClick={prevSlide} aria-label="Précédent">
                <ChevronLeft size={18} />
              </button>
              <button className="h-mob-arrow" onClick={nextSlide} aria-label="Suivant">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Show only a window of dots */}
            <div className="h-mob-dots">
              {slides.slice(
                Math.max(0, Math.min(currentSlide - 5, slides.length - 11)),
                Math.max(11, currentSlide + 6)
              ).map((_, idx) => {
                const realIdx = Math.max(0, Math.min(currentSlide - 5, slides.length - 11)) + idx;
                return (
                  <div
                    key={realIdx}
                    className={`h-mob-dot${realIdx === currentSlide ? " on" : ""}`}
                    style={{
                      width: realIdx === currentSlide ? "22px" : "4px",
                      background: realIdx === currentSlide ? slide.solid : "#cbd5e1",
                    }}
                    onClick={() => goTo(realIdx)}
                    role="button"
                  />
                );
              })}
            </div>

            <div style={{ fontSize: "11px", fontWeight: 600, color: "#94a3b8", letterSpacing: ".04em" }}>
              <b style={{ color: "#1e293b" }}>{String(currentSlide + 1).padStart(2, "0")}</b>
              {" / "}
              {String(slides.length).padStart(2, "0")}
            </div>
          </div>

          <div className="h-swipe-hint">
            <div className="h-swipe-hint-line" />
            Glissez pour naviguer
            <div className="h-swipe-hint-line" />
          </div>
        </div>

        {/* ════════════ DESKTOP UI (inchangé) ════════════ */}
        <div className="h-desktop">
          <button className="h-arrow h-arrow-left" onClick={prevSlide} aria-label="Précédent">
            <ChevronLeft size={20} />
          </button>
          <button className="h-arrow h-arrow-right" onClick={nextSlide} aria-label="Suivant">
            <ChevronRight size={20} />
          </button>

          <div className="h-body">
            {/* LEFT */}
            <div className="h-left">
              <div className="h-slides-wrap">
                {slides.map((s, i) => (
                  <div key={s.id} className={`h-slide ${i === currentSlide ? "active" : "inactive"}`}>
                    <div className="h-d-badge" style={{ background: slide.light, borderColor: slide.solid + "35" }}>
                      <div className="h-d-badge-dot" style={{ background: slide.solid }} />
                      <span className="h-d-badge-text" style={{ color: slide.solid }}>{s.type}</span>
                    </div>
                    <h1 className="h-d-title">{s.titre}</h1>
                    <div className="h-d-author">
                      <div className="h-d-author-icon" style={{ background: slide.light }}>
                        <User size={12} color={slide.solid} />
                      </div>
                      <span className="h-d-author-name">{s.auteur}</span>
                    </div>
                    <div className="h-d-price-row">
                      <div className="h-d-price-chip" style={{ background: slide.light }}>
                        <span className="h-d-price-num" style={{ color: slide.solid }}>
                          {s.prixFCFA.toLocaleString("fr-FR")}
                        </span>
                        <span className="h-d-price-cur" style={{ color: slide.solid }}>FCFA</span>
                      </div>
                      <div className="h-d-stock">
                        <div className="h-d-stock-dot" />
                        En stock ({s.stock})
                      </div>
                    </div>
                    <div className="h-d-sep" />
                    <p className="h-d-desc">{s.desc}</p>
                    <div className="h-d-stats">
                      <div className="h-d-stat">
                        <div className="h-d-stat-icon" style={{ background: slide.light }}>
                          <Star size={13} color={slide.solid} />
                        </div>
                        <div>
                          <div className="h-d-stat-label">Évaluation</div>
                          <div className="h-d-stat-value">4.9 / 5</div>
                        </div>
                      </div>
                      <div className="h-d-stat">
                        <div className="h-d-stat-icon" style={{ background: "#f0fdf4" }}>
                          <BookOpen size={13} color="#15803d" />
                        </div>
                        <div>
                          <div className="h-d-stat-label">Pages</div>
                          <div className="h-d-stat-value">{s.pages}</div>
                        </div>
                      </div>
                      <div className="h-d-stat">
                        <div className="h-d-stat-icon" style={{ background: "#f5f3ff" }}>
                          <Shield size={13} color="#6d28d9" />
                        </div>
                        <div>
                          <div className="h-d-stat-label">Formats</div>
                          <div className="h-d-stat-value">PDF · Papier</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="h-right">
              <div className="h-book-stage">
                {slides.map((s, i) => (
                  <div key={s.id} className={`h-book-slide ${i === currentSlide ? "active" : "inactive"}`}>
                    <div className="h-book-glow" style={{ background: slide.solid }} />
                    <div className="h-book" onClick={() => goToProduct(s)}>
                      <div className="h-book-spine" style={{ background: `linear-gradient(180deg,${slide.solid}dd 0%,${slide.solid}88 100%)` }}>
                        <span className="h-book-spine-text">MTHS</span>
                      </div>
                      <div className="h-book-bg" style={{ background: `linear-gradient(155deg,${slide.light} 0%,#f8fafc 100%)` }} />
                      <div className="h-book-img">
                        <img src={s.image} alt={s.titre} onError={handleImageError} />
                      </div>
                      <div className="h-book-gloss" />
                      <div className="h-book-pages" />
                    </div>
                    <div className="h-d-cards">
                      <div className="h-d-card">
                        <div className="h-d-card-icon" style={{ background: slide.light }}>
                          {React.cloneElement(s.icon, { size: 13, color: slide.solid })}
                        </div>
                        <div>
                          <div className="h-d-card-label">Format</div>
                          <div className="h-d-card-value">PDF · Papier</div>
                        </div>
                      </div>
                      <div className="h-d-card">
                        <div className="h-d-card-icon" style={{ background: "#fffbeb" }}>
                          <BookOpen size={13} color="#d97706" />
                        </div>
                        <div>
                          <div className="h-d-card-label">Pages</div>
                          <div className="h-d-card-value">{s.pages}</div>
                        </div>
                      </div>
                      <div className="h-d-card">
                        <div className="h-d-card-icon" style={{ background: "#f0fdf4" }}>
                          <Shield size={13} color="#15803d" />
                        </div>
                        <div>
                          <div className="h-d-card-label">Stock</div>
                          <div className="h-d-card-value">{s.stock}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom nav */}
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
        </div>
      </section>
    </>
  );
}

export default Hero;