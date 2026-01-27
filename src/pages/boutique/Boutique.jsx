import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Headphones,
  Leaf,
  Award,
  Shield,
  Heart,
  ShoppingCart,
  Menu,
  X,
  DollarSign,
  Euro,
  Coins,
  ChevronDown,
  Check,
  Star,
  Package,
  User,
  Clock,
  Eye,
  Tag,
  TrendingUp,
  Download,
  PlayCircle,
  Mic,
  Video,
  FileText,
  MapPin,
  Globe,
  Cross,
  Users,
  Target,
  Zap,
  Lock,
  Moon,
  Sun,
  Droplets,
  Wind
} from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../context/CartContext";

function Boutique() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currency, setCurrency] = useState("FCFA");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [addedProducts, setAddedProducts] = useState({});

  const { addToCart, cart: globalCart } = useCart();

  const exchangeRates = {
    "FCFA": 1,
    "USD": 0.00165,
    "EUR": 0.00152
  };

  const currencyIcons = {
    "FCFA": <Coins className="w-4 h-4" />,
    "USD": <DollarSign className="w-4 h-4" />,
    "EUR": <Euro className="w-4 h-4" />
  };

  const currencyNames = {
    "FCFA": "Franc CFA",
    "USD": "Dollar US",
    "EUR": "Euro"
  };

  const formatPrice = (priceFCFA, currencyType) => {
    const convertedPrice = priceFCFA * exchangeRates[currencyType];
    
    switch(currencyType) {
      case "FCFA":
        return `${convertedPrice.toLocaleString('fr-FR')} FCFA`;
      case "USD":
        return `$${convertedPrice.toFixed(2)}`;
      case "EUR":
        return `€${convertedPrice.toFixed(2)}`;
      default:
        return `${convertedPrice.toLocaleString('fr-FR')} FCFA`;
    }
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      type: 'mths-product',
      title: product.titre,
      author: product.auteur || "Centre MTHS",
      price: product.prixFCFA,
      cover: product.image,
      category: categories[selectedCategory]?.name,
      promo: product.promo,
      format: product.format?.[0] || "Physique"
    });
    
    setAddedProducts(prev => ({
      ...prev,
      [product.id]: true
    }));
    
    setTimeout(() => {
      setAddedProducts(prev => ({
        ...prev,
        [product.id]: false
      }));
    }, 2000);
  };

  const isInCart = (productId) => {
    return globalCart.some(item => item.id === productId && item.type === 'mths-product');
  };

  const categories = [
    {
      id: 0,
      name: "Livres Doctrinaux & Manuels Cliniques",
      icon: <BookOpen className="w-5 h-5" />,
      count: 15,
      description: "Ouvrages de référence sur la Médecine Traditionnelle des Handicapés Spirituels",
      couleur: "from-blue-500 to-blue-600",
      produits: [
        {
          id: 1,
          titre: "La MTHS : Fondements et Pratiques",
          auteur: "Dr. Jean Paul S. ABENA",
          desc: "Manuel complet de la Médecine Traditionnelle des Handicapés Spirituels.",
          prixFCFA: 15000,
          promo: 12000,
          image: "/images/boutique/livre-mths.jpg",
          format: ["Papier", "PDF"],
          pages: 320,
          rating: 4.8,
          stock: 50,
          type: "Livre",
          isbn: "978-2-954-12345-6"
        },
        {
          id: 2,
          titre: "Rites SO'O : Christianisation et Pratique",
          auteur: "Centre MTHS",
          desc: "Étude approfondie du rite SO'O dans sa version christianisée.",
          prixFCFA: 10000,
          promo: 8500,
          image: "/images/boutique/livre-rites.jpg",
          format: ["Papier", "PDF", "EPUB"],
          pages: 240,
          rating: 4.9,
          stock: 35,
          type: "Livre",
          isbn: "978-2-954-12346-3"
        },
        {
          id: 3,
          titre: "Pharmacopée Africaine Chrétienne",
          auteur: "Équipe Recherche MTHS",
          desc: "Guide des remèdes traditionnels améliorés et leur intégration.",
          prixFCFA: 12500,
          promo: 10500,
          image: "/images/boutique/livre-pharmacopee.jpg",
          format: ["Papier"],
          pages: 280,
          rating: 4.7,
          stock: 40,
          type: "Livre",
          isbn: "978-2-954-12347-0"
        },
        {
          id: 4,
          titre: "Diagnostic Spirituel en MTHS",
          auteur: "Dr. Marie-Thérèse N.",
          desc: "Méthodologie du diagnostic des handicaps spirituels.",
          prixFCFA: 9500,
          promo: null,
          image: "/images/boutique/livre-diagnostic.jpg",
          format: ["PDF", "EPUB"],
          pages: 180,
          rating: 4.6,
          stock: 60,
          type: "E-book"
        },
        {
          id: 5,
          titre: "Manuel de Purification Spirituelle",
          auteur: "Centre MTHS",
          desc: "Guide pratique des rites de purification selon la tradition Béti.",
          prixFCFA: 11000,
          promo: 9500,
          image: "/images/boutique/livre-purification.jpg",
          format: ["Papier", "PDF"],
          pages: 210,
          rating: 4.7,
          stock: 45,
          type: "Livre",
          isbn: "978-2-954-12348-7"
        },
        {
          id: 6,
          titre: "Théologie de l'Inculturation",
          auteur: "Dr. Jean Paul S. ABENA",
          desc: "Fondements théologiques de l'intégration culturelle africaine.",
          prixFCFA: 13500,
          promo: 12000,
          image: "/images/boutique/livre-theologie.jpg",
          format: ["Papier"],
          pages: 290,
          rating: 4.8,
          stock: 30,
          type: "Livre",
          isbn: "978-2-954-12349-4"
        },
        {
          id: 7,
          titre: "Guérison Holistique : Corps, Âme, Esprit",
          auteur: "Centre MTHS",
          desc: "Approche intégrative de la guérison selon la révélation de 1979.",
          prixFCFA: 16000,
          promo: 14500,
          image: "/images/boutique/livre-guerison-holistique.jpg",
          format: ["Papier", "PDF"],
          pages: 350,
          rating: 4.9,
          stock: 25,
          type: "Livre",
          isbn: "978-2-954-12350-0"
        },
        {
          id: 8,
          titre: "Les Malédictions Générationnelles",
          auteur: "Dr. Marie-Thérèse N.",
          desc: "Analyse et solutions pour briser les chaînes familiales.",
          prixFCFA: 12000,
          promo: 10500,
          image: "/images/boutique/livre-maledictions.jpg",
          format: ["Papier"],
          pages: 230,
          rating: 4.6,
          stock: 40,
          type: "Livre",
          isbn: "978-2-954-12351-7"
        },
        {
          id: 9,
          titre: "Psychologie Spirituelle Africaine",
          auteur: "Équipe Recherche MTHS",
          desc: "Interface entre psychologie moderne et spiritualité africaine.",
          prixFCFA: 14000,
          promo: 12500,
          image: "/images/boutique/livre-psychologie.jpg",
          format: ["PDF", "EPUB"],
          pages: 260,
          rating: 4.7,
          stock: 35,
          type: "E-book"
        },
        {
          id: 10,
          titre: "Manuel des Rites de Passage",
          auteur: "Centre MTHS",
          desc: "Rites de passage christianisés pour les étapes de la vie.",
          prixFCFA: 11500,
          promo: 10000,
          image: "/images/boutique/livre-rites-passage.jpg",
          format: ["Papier"],
          pages: 200,
          rating: 4.8,
          stock: 50,
          type: "Livre",
          isbn: "978-2-954-12352-4"
        },
        {
          id: 11,
          titre: "Exorcisme et Délivrance Chrétienne",
          auteur: "Dr. Jean Paul S. ABENA",
          desc: "Protocoles d'exorcisme selon la tradition chrétienne africaine.",
          prixFCFA: 17000,
          promo: 15500,
          image: "/images/boutique/livre-exorcisme.jpg",
          format: ["Papier", "PDF"],
          pages: 310,
          rating: 4.9,
          stock: 20,
          type: "Livre",
          isbn: "978-2-954-12353-1"
        },
        {
          id: 12,
          titre: "Les Symboles Sacrés Africains",
          auteur: "Centre MTHS",
          desc: "Décryptage des symboles traditionnels et leur signification chrétienne.",
          prixFCFA: 13000,
          promo: 11500,
          image: "/images/boutique/livre-symboles.jpg",
          format: ["Papier"],
          pages: 240,
          rating: 4.7,
          stock: 45,
          type: "Livre",
          isbn: "978-2-954-12354-8"
        },
        {
          id: 13,
          titre: "MTHS pour les Débutants",
          auteur: "Équipe Recherche MTHS",
          desc: "Introduction accessible à la Médecine Traditionnelle des Handicapés Spirituels.",
          prixFCFA: 9000,
          promo: 8000,
          image: "/images/boutique/livre-debutants.jpg",
          format: ["PDF", "EPUB"],
          pages: 180,
          rating: 4.5,
          stock: 65,
          type: "E-book"
        },
        {
          id: 14,
          titre: "Le Combat Spirituel Quotidien",
          auteur: "Dr. Marie-Thérèse N.",
          desc: "Stratégies de protection et de combat spirituel au quotidien.",
          prixFCFA: 12500,
          promo: 11000,
          image: "/images/boutique/livre-combat-spirituel.jpg",
          format: ["Papier"],
          pages: 220,
          rating: 4.8,
          stock: 40,
          type: "Livre",
          isbn: "978-2-954-12355-5"
        },
        {
          id: 15,
          titre: "Encyclopédie des Plantes Médicinales",
          auteur: "Centre MTHS",
          desc: "Répertoire complet des plantes utilisées dans la pharmacopée MTHS.",
          prixFCFA: 18000,
          promo: 16500,
          image: "/images/boutique/livre-encyclopedie.jpg",
          format: ["Papier"],
          pages: 420,
          rating: 4.9,
          stock: 15,
          type: "Livre",
          isbn: "978-2-954-12356-2"
        }
      ]
    },
    {
      id: 1,
      name: "Revue 'Le Monde Parallèle'",
      icon: <FileText className="w-5 h-5" />,
      count: 15,
      description: "Publications périodiques sur la déviance spirituelle et solutions holistiques",
      couleur: "from-emerald-500 to-emerald-600",
      produits: [
        {
          id: 16,
          titre: "Le Monde Parallèle - Édition 2025",
          auteur: "Rédaction MTHS",
          desc: "Analyses scientifiques et spirituelles des mécanismes de la sorcellerie.",
          prixFCFA: 5000,
          promo: 4500,
          image: "/images/boutique/revue-2025.jpg",
          format: ["Papier", "PDF"],
          pages: 120,
          rating: 4.8,
          stock: 100,
          type: "Revue",
          numero: "2025-01"
        },
        {
          id: 17,
          titre: "Édition Spéciale : Délivrance",
          auteur: "Rédaction MTHS",
          desc: "Dossier spécial sur les envoûtements et stratégies de protection.",
          prixFCFA: 6000,
          promo: null,
          image: "/images/boutique/revue-special.jpg",
          format: ["PDF"],
          pages: 150,
          rating: 4.9,
          stock: 75,
          type: "Revue",
          numero: "SPEC-2025"
        },
        {
          id: 18,
          titre: "Les Rêves et leurs Messages",
          auteur: "Rédaction MTHS",
          desc: "Décryptage des messages spirituels à travers les rêves.",
          prixFCFA: 4500,
          promo: 4000,
          image: "/images/boutique/revue-reves.jpg",
          format: ["Papier"],
          pages: 90,
          rating: 4.6,
          stock: 120,
          type: "Revue",
          numero: "2025-02"
        },
        {
          id: 19,
          titre: "La Sorcellerie Moderne",
          auteur: "Rédaction MTHS",
          desc: "Analyse des nouvelles formes de sorcellerie dans le monde contemporain.",
          prixFCFA: 5000,
          promo: 4500,
          image: "/images/boutique/revue-sorcellerie.jpg",
          format: ["PDF"],
          pages: 110,
          rating: 4.7,
          stock: 85,
          type: "Revue",
          numero: "2025-03"
        },
        {
          id: 20,
          titre: "Protection Spirituelle Familiale",
          auteur: "Rédaction MTHS",
          desc: "Techniques de protection pour toute la famille.",
          prixFCFA: 5500,
          promo: 5000,
          image: "/images/boutique/revue-protection.jpg",
          format: ["Papier", "PDF"],
          pages: 100,
          rating: 4.8,
          stock: 95,
          type: "Revue",
          numero: "2025-04"
        },
        {
          id: 21,
          titre: "Guérison des Traumatismes Spirituels",
          auteur: "Rédaction MTHS",
          desc: "Approche holistique de la guérison des blessures spirituelles.",
          prixFCFA: 4800,
          promo: null,
          image: "/images/boutique/revue-traumatismes.jpg",
          format: ["PDF"],
          pages: 95,
          rating: 4.7,
          stock: 110,
          type: "Revue",
          numero: "2025-05"
        },
        {
          id: 22,
          titre: "Les Anges et les Démons",
          auteur: "Rédaction MTHS",
          desc: "Étude sur les entités spirituelles dans la tradition chrétienne africaine.",
          prixFCFA: 5200,
          promo: 4700,
          image: "/images/boutique/revue-anges-demons.jpg",
          format: ["Papier"],
          pages: 105,
          rating: 4.8,
          stock: 80,
          type: "Revue",
          numero: "2025-06"
        },
        {
          id: 23,
          titre: "La Puissance de la Prière Inculturée",
          auteur: "Rédaction MTHS",
          desc: "Comment adapter la prière à la culture africaine.",
          prixFCFA: 4600,
          promo: 4200,
          image: "/images/boutique/revue-priere.jpg",
          format: ["PDF"],
          pages: 88,
          rating: 4.6,
          stock: 130,
          type: "Revue",
          numero: "2025-07"
        },
        {
          id: 24,
          titre: "Les Sacrements et la Tradition",
          auteur: "Rédaction MTHS",
          desc: "Réinterprétation des sacrements à la lumière de la culture africaine.",
          prixFCFA: 5100,
          promo: 4600,
          image: "/images/boutique/revue-sacrements.jpg",
          format: ["Papier", "PDF"],
          pages: 98,
          rating: 4.7,
          stock: 90,
          type: "Revue",
          numero: "2025-08"
        },
        {
          id: 25,
          titre: "MTHS et Médecine Moderne",
          auteur: "Rédaction MTHS",
          desc: "Complémentarité entre approche traditionnelle et médecine conventionnelle.",
          prixFCFA: 5400,
          promo: 4900,
          image: "/images/boutique/revue-medecine.jpg",
          format: ["PDF"],
          pages: 112,
          rating: 4.8,
          stock: 70,
          type: "Revue",
          numero: "2025-09"
        },
        {
          id: 26,
          titre: "Les Mystères de la Nuit",
          auteur: "Rédaction MTHS",
          desc: "Exploration des phénomènes spirituels nocturnes.",
          prixFCFA: 4700,
          promo: null,
          image: "/images/boutique/revue-nuit.jpg",
          format: ["Papier"],
          pages: 92,
          rating: 4.6,
          stock: 105,
          type: "Revue",
          numero: "2025-10"
        },
        {
          id: 27,
          titre: "La Libération Financière Spirituelle",
          auteur: "Rédaction MTHS",
          desc: "Comment briser les blocages financiers d'origine spirituelle.",
          prixFCFA: 5300,
          promo: 4800,
          image: "/images/boutique/revue-finance.jpg",
          format: ["PDF"],
          pages: 108,
          rating: 4.7,
          stock: 88,
          type: "Revue",
          numero: "2025-11"
        },
        {
          id: 28,
          titre: "Témoignages de Guérison",
          auteur: "Rédaction MTHS",
          desc: "Recueil de témoignages authentiques de personnes guéries par la MTHS.",
          prixFCFA: 4900,
          promo: 4400,
          image: "/images/boutique/revue-temoignages.jpg",
          format: ["Papier"],
          pages: 96,
          rating: 4.9,
          stock: 125,
          type: "Revue",
          numero: "2025-12"
        },
        {
          id: 29,
          titre: "Guide Pratique des Rites SO'O",
          auteur: "Rédaction MTHS",
          desc: "Édition spéciale dédiée à la pratique du rite SO'O.",
          prixFCFA: 5800,
          promo: 5300,
          image: "/images/boutique/revue-soo.jpg",
          format: ["PDF"],
          pages: 115,
          rating: 4.8,
          stock: 65,
          type: "Revue",
          numero: "SPEC-SOO"
        },
        {
          id: 30,
          titre: "L'Année Spirituelle 2026",
          auteur: "Rédaction MTHS",
          desc: "Prévisions et conseils spirituels pour l'année à venir.",
          prixFCFA: 5500,
          promo: 5000,
          image: "/images/boutique/revue-2026.jpg",
          format: ["Papier", "PDF"],
          pages: 102,
          rating: 4.7,
          stock: 95,
          type: "Revue",
          numero: "2026-01"
        }
      ]
    },
    {
      id: 2,
      name: "Supports Audio",
      icon: <Headphones className="w-5 h-5" />,
      count: 15,
      description: "Enregistrements de veillées, enseignements spirituels et méditations guidées",
      couleur: "from-purple-500 to-purple-600",
      produits: [
        {
          id: 31,
          titre: "Veillée de Délivrance Complète",
          auteur: "Centre MTHS",
          desc: "Enregistrement audio d'une veillée de prière et de délivrance.",
          prixFCFA: 8000,
          promo: 6500,
          image: "/images/boutique/audio-veillee.jpg",
          format: ["MP3", "WAV"],
          duree: "4h30",
          rating: 4.9,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 32,
          titre: "Méditations Guidées pour la Paix",
          auteur: "Accompagnateurs MTHS",
          desc: "Séries de méditations guidées pour la purification et la paix intérieure.",
          prixFCFA: 5000,
          promo: null,
          image: "/images/boutique/audio-meditation.jpg",
          format: ["MP3"],
          duree: "2h15",
          rating: 4.7,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 33,
          titre: "Psaumes de Protection",
          auteur: "Chœur MTHS",
          desc: "Psaumes chantés pour la protection spirituelle quotidienne.",
          prixFCFA: 4500,
          promo: 4000,
          image: "/images/boutique/audio-psaumes.jpg",
          format: ["MP3"],
          duree: "1h45",
          rating: 4.8,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 34,
          titre: "Enseignements sur la Délivrance",
          auteur: "Dr. Jean Paul S. ABENA",
          desc: "Série d'enseignements audio sur la délivrance spirituelle.",
          prixFCFA: 7000,
          promo: 6000,
          image: "/images/boutique/audio-enseignements.jpg",
          format: ["MP3"],
          duree: "3h20",
          rating: 4.9,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 35,
          titre: "Prières contre la Sorcellerie",
          auteur: "Centre MTHS",
          desc: "Prières spécifiques pour la protection contre la sorcellerie.",
          prixFCFA: 5500,
          promo: 5000,
          image: "/images/boutique/audio-prieres.jpg",
          format: ["MP3"],
          duree: "2h",
          rating: 4.7,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 36,
          titre: "Chants Sacrés Béti",
          auteur: "Chœur Traditionnel",
          desc: "Chants traditionnels Béti christianisés pour la louange.",
          prixFCFA: 6000,
          promo: 5500,
          image: "/images/boutique/audio-chants.jpg",
          format: ["MP3", "WAV"],
          duree: "2h30",
          rating: 4.8,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 37,
          titre: "Confession et Libération",
          auteur: "Accompagnateurs MTHS",
          desc: "Guide audio pour une confession libératrice.",
          prixFCFA: 4800,
          promo: null,
          image: "/images/boutique/audio-confession.jpg",
          format: ["MP3"],
          duree: "1h30",
          rating: 4.6,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 38,
          titre: "Rosaire Inculturé",
          auteur: "Centre MTHS",
          desc: "Rosaire prié selon la tradition africaine.",
          prixFCFA: 5200,
          promo: 4700,
          image: "/images/boutique/audio-rosaire.jpg",
          format: ["MP3"],
          duree: "1h50",
          rating: 4.8,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 39,
          titre: "Dormir en Paix",
          auteur: "Accompagnateurs MTHS",
          desc: "Méditations pour un sommeil paisible et protégé.",
          prixFCFA: 4900,
          promo: 4400,
          image: "/images/boutique/audio-sommeil.jpg",
          format: ["MP3"],
          duree: "1h40",
          rating: 4.7,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 40,
          titre: "Briser les Malédictions",
          auteur: "Dr. Marie-Thérèse N.",
          desc: "Prières spécifiques pour rompre les malédictions familiales.",
          prixFCFA: 6500,
          promo: 6000,
          image: "/images/boutique/audio-maledictions.jpg",
          format: ["MP3"],
          duree: "2h45",
          rating: 4.9,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 41,
          titre: "Guerre Spirituelle Intensive",
          auteur: "Centre MTHS",
          desc: "Séance intensive de combat spirituel.",
          prixFCFA: 7500,
          promo: 7000,
          image: "/images/boutique/audio-guerre.jpg",
          format: ["MP3"],
          duree: "3h",
          rating: 4.8,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 42,
          titre: "Purification des Lieux",
          auteur: "Accompagnateurs MTHS",
          desc: "Prières pour la purification des maisons et lieux de travail.",
          prixFCFA: 5800,
          promo: 5300,
          image: "/images/boutique/audio-purification.jpg",
          format: ["MP3"],
          duree: "2h10",
          rating: 4.7,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 43,
          titre: "Messages de la Vierge Marie",
          auteur: "Centre MTHS",
          desc: "Compilation des messages de la Vierge Marie révélés à Abili.",
          prixFCFA: 6800,
          promo: 6300,
          image: "/images/boutique/audio-vierge.jpg",
          format: ["MP3"],
          duree: "2h50",
          rating: 4.9,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 44,
          titre: "Méditation sur la Croix",
          auteur: "Centre MTHS",
          desc: "Méditation profonde sur le mystère de la Croix.",
          prixFCFA: 4700,
          promo: null,
          image: "/images/boutique/audio-croix.jpg",
          format: ["MP3"],
          duree: "1h35",
          rating: 4.6,
          stock: "Illimité",
          type: "Audio"
        },
        {
          id: 45,
          titre: "Pack Complet Audio MTHS",
          auteur: "Centre MTHS",
          desc: "Collection complète de tous les enregistrements audio MTHS.",
          prixFCFA: 25000,
          promo: 22000,
          image: "/images/boutique/audio-pack.jpg",
          format: ["MP3"],
          duree: "50h",
          rating: 4.9,
          stock: "Illimité",
          type: "Audio"
        }
      ]
    },
    {
      id: 3,
      name: "Remèdes Traditionnels Améliorés (RTA)",
      icon: <Leaf className="w-5 h-5" />,
      count: 15,
      description: "Produits naturels certifiés issus de la pharmacopée africaine",
      couleur: "from-amber-500 to-amber-600",
      produits: [
        {
          id: 46,
          titre: "Kit de Purification Spirituelle",
          auteur: "Centre MTHS",
          desc: "Ensemble de plantes sacrées préparées selon les protocoles MTHS.",
          prixFCFA: 25000,
          promo: 22000,
          image: "/images/boutique/kit-purification.jpg",
          composition: "7 plantes traditionnelles",
          usage: "Rituel de purification",
          rating: 4.9,
          stock: 25,
          type: "Produit naturel"
        },
        {
          id: 47,
          titre: "Huile de Protection Spirituelle",
          auteur: "Centre MTHS",
          desc: "Huile bénite pour l'onction et la protection contre les influences négatives.",
          prixFCFA: 12000,
          promo: 10500,
          image: "/images/boutique/huile-protection.jpg",
          composition: "Huiles essentielles africaines",
          usage: "Onction quotidienne",
          rating: 4.8,
          stock: 40,
          type: "Produit naturel"
        },
        {
          id: 48,
          titre: "Poudre de Purification",
          auteur: "Centre MTHS",
          desc: "Poudre sacrée pour les rituels de purification des lieux.",
          prixFCFA: 8000,
          promo: 7000,
          image: "/images/boutique/poudre-purification.jpg",
          composition: "Plantes réduites en poudre",
          usage: "Dispersion",
          rating: 4.7,
          stock: 60,
          type: "Produit naturel"
        },
        {
          id: 49,
          titre: "Encens Spirituel MTHS",
          auteur: "Centre MTHS",
          desc: "Encens spécial pour la prière et la méditation.",
          prixFCFA: 6500,
          promo: 6000,
          image: "/images/boutique/encens.jpg",
          composition: "Résines naturelles",
          usage: "Brûlage",
          rating: 4.8,
          stock: 75,
          type: "Produit naturel"
        },
        {
          id: 50,
          titre: "Eau Bénite Inculturée",
          auteur: "Centre MTHS",
          desc: "Eau bénite préparée avec des plantes traditionnelles.",
          prixFCFA: 5000,
          promo: 4500,
          image: "/images/boutique/eau-benite.jpg",
          composition: "Eau + plantes sacrées",
          usage: "Aspersion",
          rating: 4.7,
          stock: 100,
          type: "Produit naturel"
        },
        {
          id: 51,
          titre: "Savon de Purification",
          auteur: "Centre MTHS",
          desc: "Savon traditionnel pour la purification corporelle.",
          prixFCFA: 3500,
          promo: null,
          image: "/images/boutique/savon-purification.jpg",
          composition: "Plantes médicinales",
          usage: "Toilette",
          rating: 4.6,
          stock: 120,
          type: "Produit naturel"
        },
        {
          id: 52,
          titre: "Bougie de Protection",
          auteur: "Centre MTHS",
          desc: "Bougie bénite pour la protection du foyer.",
          prixFCFA: 4000,
          promo: 3500,
          image: "/images/boutique/bougie-protection.jpg",
          composition: "Cire naturelle",
          usage: "Allumage",
          rating: 4.7,
          stock: 90,
          type: "Produit naturel"
        },
        {
          id: 53,
          titre: "Kit Anti-sorcellerie",
          auteur: "Centre MTHS",
          desc: "Ensemble de produits pour la protection contre la sorcellerie.",
          prixFCFA: 18000,
          promo: 16500,
          image: "/images/boutique/kit-antisorcellerie.jpg",
          composition: "Multiple plantes",
          usage: "Protection",
          rating: 4.9,
          stock: 30,
          type: "Produit naturel"
        },
        {
          id: 54,
          titre: "Huile de Délivrance",
          auteur: "Centre MTHS",
          desc: "Huile spéciale pour les rites de délivrance.",
          prixFCFA: 15000,
          promo: 13500,
          image: "/images/boutique/huile-delivrance.jpg",
          composition: "Huiles sacrées",
          usage: "Onction",
          rating: 4.8,
          stock: 35,
          type: "Produit naturel"
        },
        {
          id: 55,
          titre: "Plantes Sacrées Séchées",
          auteur: "Centre MTHS",
          desc: "Mélange de plantes sacrées pour infusion ou bain.",
          prixFCFA: 7000,
          promo: 6500,
          image: "/images/boutique/plantes-sechees.jpg",
          composition: "5 plantes traditionnelles",
          usage: "Infusion/Bain",
          rating: 4.7,
          stock: 80,
          type: "Produit naturel"
        },
        {
          id: 56,
          titre: "Spray de Protection",
          auteur: "Centre MTHS",
          desc: "Spray pour la protection rapide des personnes et lieux.",
          prixFCFA: 8500,
          promo: 7800,
          image: "/images/boutique/spray-protection.jpg",
          composition: "Eau bénite + huiles",
          usage: "Vaporisation",
          rating: 4.8,
          stock: 55,
          type: "Produit naturel"
        },
        {
          id: 57,
          titre: "Charbon Actif Spirituel",
          auteur: "Centre MTHS",
          desc: "Charbon activé pour l'absorption des énergies négatives.",
          prixFCFA: 6000,
          promo: 5500,
          image: "/images/boutique/charbon.jpg",
          composition: "Charbon végétal",
          usage: "Absorption",
          rating: 4.6,
          stock: 70,
          type: "Produit naturel"
        },
        {
          id: 58,
          titre: "Sel de Purification",
          auteur: "Centre MTHS",
          desc: "Sel sacré pour la purification et la protection.",
          prixFCFA: 3000,
          promo: null,
          image: "/images/boutique/sel-purification.jpg",
          composition: "Sel marin + plantes",
          usage: "Dispersion",
          rating: 4.5,
          stock: 150,
          type: "Produit naturel"
        },
        {
          id: 59,
          titre: "Kit Rituel SO'O Complet",
          auteur: "Centre MTHS",
          desc: "Tout le nécessaire pour pratiquer le rite SO'O.",
          prixFCFA: 30000,
          promo: 28000,
          image: "/images/boutique/kit-soo.jpg",
          composition: "Plantes + accessoires",
          usage: "Rituel SO'O",
          rating: 4.9,
          stock: 20,
          type: "Produit naturel"
        },
        {
          id: 60,
          titre: "Baume de Guérison Spirituelle",
          auteur: "Centre MTHS",
          desc: "Baume pour les blessures spirituelles et émotionnelles.",
          prixFCFA: 9500,
          promo: 8800,
          image: "/images/boutique/baume-guerison.jpg",
          composition: "Beurre de karité + plantes",
          usage: "Application",
          rating: 4.7,
          stock: 45,
          type: "Produit naturel"
        }
      ]
    },
    {
      id: 4,
      name: "Produits Naturels Certifiés",
      icon: <Leaf className="w-5 h-5" />,
      count: 15,
      description: "Plantes, tisanes, huiles et préparations traditionnelles sélectionnées",
      couleur: "from-green-500 to-green-600",
      produits: [
        {
          id: 61,
          titre: "Tisane de Sérénité",
          auteur: "Centre MTHS",
          desc: "Mélange de plantes pour apaiser l'esprit et favoriser un sommeil réparateur.",
          prixFCFA: 8000,
          promo: null,
          image: "/images/boutique/tisane-serenite.jpg",
          composition: "Mélange de 5 plantes",
          usage: "Infusion quotidienne",
          rating: 4.6,
          stock: 60,
          type: "Tisane"
        },
        {
          id: 62,
          titre: "Baume de Guérison Holistique",
          auteur: "Centre MTHS",
          desc: "Baume à base de plantes africaines pour soutenir la guérison.",
          prixFCFA: 15000,
          promo: 13500,
          image: "/images/boutique/baume-guerison.jpg",
          composition: "Extraits naturels",
          usage: "Application locale",
          rating: 4.7,
          stock: 30,
          type: "Produit naturel"
        },
        {
          id: 63,
          titre: "Huile Essentielle de Neem",
          auteur: "Centre MTHS",
          desc: "Huile purifiante pour la protection spirituelle.",
          prixFCFA: 12000,
          promo: 11000,
          image: "/images/boutique/huile-neem.jpg",
          composition: "Huile de neem pure",
          usage: "Diffusion/Application",
          rating: 4.8,
          stock: 40,
          type: "Huile essentielle"
        },
        {
          id: 64,
          titre: "Thé de Vitalité",
          auteur: "Centre MTHS",
          desc: "Thé traditionnel pour restaurer l'énergie vitale.",
          prixFCFA: 9000,
          promo: 8500,
          image: "/images/boutique/the-vitalite.jpg",
          composition: "Plantes énergisantes",
          usage: "Infusion",
          rating: 4.7,
          stock: 50,
          type: "Tisane"
        },
        {
          id: 65,
          titre: "Beurre de Karité Sacré",
          auteur: "Centre MTHS",
          desc: "Beurre de karité bénit pour l'onction corporelle.",
          prixFCFA: 7000,
          promo: 6500,
          image: "/images/boutique/karite.jpg",
          composition: "Beurre de karité 100%",
          usage: "Application corporelle",
          rating: 4.8,
          stock: 65,
          type: "Produit naturel"
        },
        {
          id: 66,
          titre: "Miel de Purification",
          auteur: "Centre MTHS",
          desc: "Miel traditionnel des forêts sacrées.",
          prixFCFA: 10000,
          promo: 9500,
          image: "/images/boutique/miel-purification.jpg",
          composition: "Miel pur",
          usage: "Consommation",
          rating: 4.9,
          stock: 25,
          type: "Produit naturel"
        },
        {
          id: 67,
          titre: "Sirop Toux Spirituelle",
          auteur: "Centre MTHS",
          desc: "Sirop pour les toux d'origine spirituelle.",
          prixFCFA: 8500,
          promo: null,
          image: "/images/boutique/sirop-toux.jpg",
          composition: "Plantes + miel",
          usage: "Consommation",
          rating: 4.6,
          stock: 45,
          type: "Produit naturel"
        },
        {
          id: 68,
          titre: "Gel Douche Purifiant",
          auteur: "Centre MTHS",
          desc: "Gel douche aux plantes purifiantes.",
          prixFCFA: 5500,
          promo: 5000,
          image: "/images/boutique/gel-douche.jpg",
          composition: "Plantes purifiantes",
          usage: "Toilette",
          rating: 4.7,
          stock: 80,
          type: "Produit naturel"
        },
        {
          id: 69,
          titre: "Crème de Nuit Régénérante",
          auteur: "Centre MTHS",
          desc: "Crème pour la régénération nocturne.",
          prixFCFA: 11000,
          promo: 10500,
          image: "/images/boutique/creme-nuit.jpg",
          composition: "Plantes régénérantes",
          usage: "Application nocturne",
          rating: 4.8,
          stock: 35,
          type: "Produit naturel"
        },
        {
          id: 70,
          titre: "Huile de Massage Spirituel",
          auteur: "Centre MTHS",
          desc: "Huile pour massage thérapeutique spirituel.",
          prixFCFA: 13000,
          promo: 12000,
          image: "/images/boutique/huile-massage.jpg",
          composition: "Huiles mélangées",
          usage: "Massage",
          rating: 4.9,
          stock: 30,
          type: "Produit naturel"
        },
        {
          id: 71,
          titre: "Pommade Articulations",
          auteur: "Centre MTHS",
          desc: "Pommade pour les douleurs articulaires d'origine spirituelle.",
          prixFCFA: 9500,
          promo: 9000,
          image: "/images/boutique/pommade-articulations.jpg",
          composition: "Plantes analgésiques",
          usage: "Application locale",
          rating: 4.7,
          stock: 40,
          type: "Produit naturel"
        },
        {
          id: 72,
          titre: "Sels de Bain Détente",
          auteur: "Centre MTHS",
          desc: "Sels minéraux pour bain relaxant et purifiant.",
          prixFCFA: 6500,
          promo: 6000,
          image: "/images/boutique/sels-bain.jpg",
          composition: "Sels + plantes",
          usage: "Bain",
          rating: 4.6,
          stock: 70,
          type: "Produit naturel"
        },
        {
          id: 73,
          titre: "Complexe Immunitaire",
          auteur: "Centre MTHS",
          desc: "Mélange de plantes pour renforcer le système immunitaire.",
          prixFCFA: 14000,
          promo: 13500,
          image: "/images/boutique/complexe-immunitaire.jpg",
          composition: "10 plantes",
          usage: "Infusion",
          rating: 4.8,
          stock: 25,
          type: "Produit naturel"
        },
        {
          id: 74,
          titre: "Bâton d'Encens Purificateur",
          auteur: "Centre MTHS",
          desc: "Bâton d'encens pour la purification des lieux.",
          prixFCFA: 4000,
          promo: null,
          image: "/images/boutique/baton-encens.jpg",
          composition: "Résines naturelles",
          usage: "Brûlage",
          rating: 4.5,
          stock: 100,
          type: "Produit naturel"
        },
        {
          id: 75,
          titre: "Pack Bien-être Complet",
          auteur: "Centre MTHS",
          desc: "Collection complète de produits pour le bien-être holistique.",
          prixFCFA: 35000,
          promo: 33000,
          image: "/images/boutique/pack-bienetre.jpg",
          composition: "Multiple produits",
          usage: "Varié",
          rating: 4.9,
          stock: 15,
          type: "Pack"
        }
      ]
    },
    {
      id: 5,
      name: "Formations en Ligne",
      icon: <Award className="w-5 h-5" />,
      count: 15,
      description: "Cours certifiés sur les 5 piliers de la MTHS",
      couleur: "from-red-500 to-red-600",
      produits: [
        {
          id: 76,
          titre: "Formation Complète MTHS",
          auteur: "Centre MTHS",
          desc: "Programme certifié de 6 mois sur les 5 piliers de la Médecine Traditionnelle.",
          prixFCFA: 150000,
          promo: 135000,
          image: "/images/boutique/formation-complete.jpg",
          duree: "6 mois",
          certification: "Certificat MTHS",
          rating: 4.9,
          stock: "Places limitées",
          type: "Formation"
        },
        {
          id: 77,
          titre: "Atelier Rites SO'O",
          auteur: "Centre MTHS",
          desc: "Formation intensive sur la pratique christianisée du rite SO'O.",
          prixFCFA: 75000,
          promo: null,
          image: "/images/boutique/atelier-rites.jpg",
          duree: "3 jours",
          certification: "Attestation",
          rating: 4.8,
          stock: "20 places",
          type: "Atelier"
        },
        {
          id: 78,
          titre: "Certificat en Diagnostic Spirituel",
          auteur: "Centre MTHS",
          desc: "Formation spécialisée dans le diagnostic des handicaps spirituels.",
          prixFCFA: 90000,
          promo: 85000,
          image: "/images/boutique/formation-diagnostic.jpg",
          duree: "3 mois",
          certification: "Certificat",
          rating: 4.8,
          stock: "15 places",
          type: "Formation"
        },
        {
          id: 79,
          titre: "Formation Délivrance Spirituelle",
          auteur: "Centre MTHS",
          desc: "Apprentissage des techniques de délivrance et d'exorcisme doux.",
          prixFCFA: 120000,
          promo: 115000,
          image: "/images/boutique/formation-delivrance.jpg",
          duree: "4 mois",
          certification: "Certificat",
          rating: 4.9,
          stock: "10 places",
          type: "Formation"
        },
        {
          id: 80,
          titre: "Cours de Pharmacopée Africaine",
          auteur: "Centre MTHS",
          desc: "Étude des plantes médicinales et leur usage spirituel.",
          prixFCFA: 80000,
          promo: 75000,
          image: "/images/boutique/formation-pharmacopee.jpg",
          duree: "2 mois",
          certification: "Attestation",
          rating: 4.7,
          stock: "25 places",
          type: "Formation"
        },
        {
          id: 81,
          titre: "Formation Accompagnateur Spirituel",
          auteur: "Centre MTHS",
          desc: "Devenir accompagnateur spirituel certifié MTHS.",
          prixFCFA: 180000,
          promo: 170000,
          image: "/images/boutique/formation-accompagnateur.jpg",
          duree: "8 mois",
          certification: "Diplôme",
          rating: 4.9,
          stock: "12 places",
          type: "Formation"
        },
        {
          id: 82,
          titre: "Atelier Purification des Lieux",
          auteur: "Centre MTHS",
          desc: "Techniques pratiques de purification des maisons et entreprises.",
          prixFCFA: 50000,
          promo: 48000,
          image: "/images/boutique/atelier-purification.jpg",
          duree: "2 jours",
          certification: "Attestation",
          rating: 4.7,
          stock: "30 places",
          type: "Atelier"
        },
        {
          id: 83,
          titre: "Formation en Naturopathie Spirituelle",
          auteur: "Centre MTHS",
          desc: "Approche naturopathique intégrée à la spiritualité.",
          prixFCFA: 110000,
          promo: 105000,
          image: "/images/boutique/formation-naturopathie.jpg",
          duree: "5 mois",
          certification: "Certificat",
          rating: 4.8,
          stock: "18 places",
          type: "Formation"
        },
        {
          id: 84,
          titre: "Séminaire Guérison Holistique",
          auteur: "Centre MTHS",
          desc: "Séminaire intensif sur la guérison intégrale.",
          prixFCFA: 60000,
          promo: null,
          image: "/images/boutique/seminaire-guerison.jpg",
          duree: "5 jours",
          certification: "Attestation",
          rating: 4.8,
          stock: "40 places",
          type: "Séminaire"
        },
        {
          id: 85,
          titre: "Formation Rites de Passage",
          auteur: "Centre MTHS",
          desc: "Apprendre à célébrer les rites de passage christianisés.",
          prixFCFA: 70000,
          promo: 68000,
          image: "/images/boutique/formation-rites-passage.jpg",
          duree: "1 mois",
          certification: "Attestation",
          rating: 4.7,
          stock: "22 places",
          type: "Formation"
        },
        {
          id: 86,
          titre: "Masterclass MTHS Avancée",
          auteur: "Dr. Jean Paul S. ABENA",
          desc: "Masterclass réservée aux praticiens confirmés.",
          prixFCFA: 200000,
          promo: 195000,
          image: "/images/boutique/masterclass.jpg",
          duree: "10 jours",
          certification: "Diplôme avancé",
          rating: 5.0,
          stock: "8 places",
          type: "Masterclass"
        },
        {
          id: 87,
          titre: "Formation en Ligne - Module 1",
          auteur: "Centre MTHS",
          desc: "Premier module de formation MTHS à distance.",
          prixFCFA: 40000,
          promo: 38000,
          image: "/images/boutique/formation-enligne.jpg",
          duree: "1 mois",
          certification: "Attestation",
          rating: 4.6,
          stock: "Illimité",
          type: "Formation en ligne"
        },
        {
          id: 88,
          titre: "Atelier Protection Spirituelle",
          auteur: "Centre MTHS",
          desc: "Techniques de protection spirituelle personnelle et familiale.",
          prixFCFA: 45000,
          promo: 43000,
          image: "/images/boutique/atelier-protection.jpg",
          duree: "2 jours",
          certification: "Attestation",
          rating: 4.7,
          stock: "35 places",
          type: "Atelier"
        },
        {
          id: 89,
          titre: "Formation Conseil Spirituel",
          auteur: "Centre MTHS",
          desc: "Devenir conseiller spirituel certifié MTHS.",
          prixFCFA: 130000,
          promo: 125000,
          image: "/images/boutique/formation-conseil.jpg",
          duree: "6 mois",
          certification: "Certificat",
          rating: 4.8,
          stock: "15 places",
          type: "Formation"
        },
        {
          id: 90,
          titre: "Pack Toutes Formations MTHS",
          auteur: "Centre MTHS",
          desc: "Accès à toutes les formations MTHS pendant 1 an.",
          prixFCFA: 350000,
          promo: 330000,
          image: "/images/boutique/pack-formations.jpg",
          duree: "1 an",
          certification: "Diplôme complet",
          rating: 4.9,
          stock: "5 places",
          type: "Pack"
        }
      ]
    },
    {
      id: 6,
      name: "Accessoires Spirituels",
      icon: <Shield className="w-5 h-5" />,
      count: 15,
      description: "Objets bénis, chapelets inculturés, crucifix et supports pour la prière",
      couleur: "from-indigo-500 to-indigo-600",
      produits: [
        {
          id: 91,
          titre: "Chapelet Inculturé",
          auteur: "Centre MTHS",
          desc: "Chapelet bénit intégrant des symboles africains traditionnels et chrétiens.",
          prixFCFA: 12000,
          promo: 10500,
          image: "/images/boutique/chapelet-inculture.jpg",
          materiaux: "Bois et perles artisanales",
          usage: "Prière personnelle",
          rating: 4.9,
          stock: 50,
          type: "Accessoire"
        },
        {
          id: 92,
          titre: "Crucifix de Protection",
          auteur: "Centre MTHS",
          desc: "Crucifix bénit pour la protection spirituelle du foyer.",
          prixFCFA: 18000,
          promo: 16500,
          image: "/images/boutique/crucifix-protection.jpg",
          materiaux: "Bois massif",
          usage: "Protection du domicile",
          rating: 4.8,
          stock: 35,
          type: "Accessoire"
        },
        {
          id: 93,
          titre: "Médaille de la Vierge Marie d'Abili",
          auteur: "Centre MTHS",
          desc: "Médaille bénite à l'effigie de la Vierge Marie telle qu'apparue à Abili.",
          prixFCFA: 8000,
          promo: 7500,
          image: "/images/boutique/medaille-vierge.jpg",
          materiaux: "Argent sterling",
          usage: "Protection personnelle",
          rating: 4.9,
          stock: 60,
          type: "Accessoire"
        },
        {
          id: 94,
          titre: "Bracelet de Protection",
          auteur: "Centre MTHS",
          desc: "Bracelet tressé avec des fils bénits et des perles sacrées.",
          prixFCFA: 7000,
          promo: 6500,
          image: "/images/boutique/bracelet-protection.jpg",
          materiaux: "Fils + perles",
          usage: "Port quotidien",
          rating: 4.7,
          stock: 80,
          type: "Accessoire"
        },
        {
          id: 95,
          titre: "Tableau Sacré MTHS",
          auteur: "Centre MTHS",
          desc: "Tableau représentant la Vierge Marie d'Abili avec symboles africains.",
          prixFCFA: 25000,
          promo: 23500,
          image: "/images/boutique/tableau-sacre.jpg",
          materiaux: "Toile peinte",
          usage: "Décoration spirituelle",
          rating: 4.8,
          stock: 20,
          type: "Accessoire"
        },
        {
          id: 96,
          titre: "Encensoir Traditionnel",
          auteur: "Centre MTHS",
          desc: "Encensoir en terre cuite pour les rites de purification.",
          prixFCFA: 15000,
          promo: 14000,
          image: "/images/boutique/encensoir.jpg",
          materiaux: "Terre cuite",
          usage: "Rites de purification",
          rating: 4.7,
          stock: 30,
          type: "Accessoire"
        },
        {
          id: 97,
          titre: "Livre de Prières Inculturé",
          auteur: "Centre MTHS",
          desc: "Livre de prières avec des prières christianisées africaines.",
          prixFCFA: 10000,
          promo: null,
          image: "/images/boutique/livre-prieres.jpg",
          materiaux: "Cuir et papier",
          usage: "Prière quotidienne",
          rating: 4.8,
          stock: 45,
          type: "Accessoire"
        },
        {
          id: 98,
          titre: "Boule de Cristal de Protection",
          auteur: "Centre MTHS",
          desc: "Boule de cristal bénite pour la protection des lieux.",
          prixFCFA: 22000,
          promo: 21000,
          image: "/images/boutique/boule-cristal.jpg",
          materiaux: "Cristal",
          usage: "Protection des lieux",
          rating: 4.9,
          stock: 15,
          type: "Accessoire"
        },
        {
          id: 99,
          titre: "Set d'Onction Complet",
          auteur: "Centre MTHS",
          desc: "Set complet pour les onctions spirituelles.",
          prixFCFA: 18000,
          promo: 17000,
          image: "/images/boutique/set-onction.jpg",
          materiaux: "Verre + bois",
          usage: "Onction",
          rating: 4.8,
          stock: 25,
          type: "Accessoire"
        },
        {
          id: 100,
          titre: "Pendentif Croix Africaine",
          auteur: "Centre MTHS",
          desc: "Pendentif croix intégrant des motifs africains traditionnels.",
          prixFCFA: 9000,
          promo: 8500,
          image: "/images/boutique/pendentif-croix.jpg",
          materiaux: "Argent",
          usage: "Port quotidien",
          rating: 4.7,
          stock: 55,
          type: "Accessoire"
        },
        {
          id: 101,
          titre: "Châsse Reliquaire",
          auteur: "Centre MTHS",
          desc: "Petite châsse pour conserver des objets sacrés.",
          prixFCFA: 12000,
          promo: 11500,
          image: "/images/boutique/chasse-reliquaire.jpg",
          materiaux: "Bois sculpté",
          usage: "Conservation",
          rating: 4.6,
          stock: 40,
          type: "Accessoire"
        },
        {
          id: 102,
          titre: "Bâton de Prière",
          auteur: "Centre MTHS",
          desc: "Bâton traditionnel pour la prière et la méditation.",
          prixFCFA: 15000,
          promo: 14500,
          image: "/images/boutique/baton-priere.jpg",
          materiaux: "Bois sacré",
          usage: "Prières",
          rating: 4.8,
          stock: 30,
          type: "Accessoire"
        },
        {
          id: 103,
          titre: "Calendrier Liturgique MTHS",
          auteur: "Centre MTHS",
          desc: "Calendrier avec les fêtes liturgiques inculturées.",
          prixFCFA: 6000,
          promo: 5500,
          image: "/images/boutique/calendrier.jpg",
          materiaux: "Papier",
          usage: "Organisation spirituelle",
          rating: 4.5,
          stock: 90,
          type: "Accessoire"
        },
        {
          id: 104,
          titre: "Set Autel Personnel",
          auteur: "Centre MTHS",
          desc: "Tout le nécessaire pour créer un autel personnel.",
          prixFCFA: 30000,
          promo: 28500,
          image: "/images/boutique/set-autel.jpg",
          materiaux: "Multiples matériaux",
          usage: "Culte personnel",
          rating: 4.9,
          stock: 18,
          type: "Accessoire"
        },
        {
          id: 105,
          titre: "Coiffe Traditionnelle Bénie",
          auteur: "Centre MTHS",
          desc: "Coiffe traditionnelle africaine bénite pour les cérémonies.",
          prixFCFA: 25000,
          promo: 24000,
          image: "/images/boutique/coiffe-traditionnelle.jpg",
          materiaux: "Tissu + perles",
          usage: "Cérémonies",
          rating: 4.8,
          stock: 12,
          type: "Accessoire"
        }
      ]
    }
  ];

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  // Reste du code identique à la version précédente...
  // [Le reste du code reste exactement le même que dans la version précédente]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <div className="flex flex-1 relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar - Categories List */}
        <aside
          className={`
            fixed lg:sticky top-0 left-0 h-screen w-80 bg-white border-r border-blue-100 overflow-y-auto z-40
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <div className="p-6 border-b border-blue-200 sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Catégories MTHS</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher une catégorie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-200 focus:border-blue-400 focus:outline-none text-sm bg-blue-50"
              />
            </div>
          </div>

          {/* Sélecteur de devise */}
          <div className="p-4 border-b border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Devise</label>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                Taux en temps réel
              </span>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="w-full flex items-center justify-between p-3 bg-blue-50 border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">
                    {currencyIcons[currency]}
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-blue-900">{currencyNames[currency]}</div>
                    <div className="text-xs text-blue-600">
                      {currency === "FCFA" ? "Devise par défaut" : "Conversion active"}
                    </div>
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-blue-500 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCurrencyOpen && (
                <>
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-blue-200 rounded-lg shadow-lg z-50">
                    {Object.entries(currencyNames).map(([key, name]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrency(key);
                          setIsCurrencyOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 p-3 hover:bg-blue-50 transition-colors ${
                          currency === key ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        <div className={currency === key ? 'text-blue-600' : 'text-blue-500'}>
                          {currencyIcons[key]}
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{name}</div>
                          <div className="text-xs">
                            {key === "FCFA" ? "Devise locale" : `1 FCFA = ${exchangeRates[key]} ${key}`}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsCurrencyOpen(false)}
                  />
                </>
              )}
            </div>

            {/* Info sur les taux */}
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-700">
                <span className="font-medium">Note :</span> Les prix sont initialement en FCFA et convertis automatiquement.
              </p>
            </div>
          </div>

          {/* Liste des catégories */}
          <nav className="p-4">
            {filteredCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full text-left p-4 rounded-xl mb-2 transition-all duration-200
                  ${selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.couleur} text-white shadow-md`
                    : 'hover:bg-blue-50 text-gray-700'
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`
                      p-2 rounded-lg
                      ${selectedCategory === category.id ? 'bg-white/20' : 'bg-blue-100'}
                    `}
                  >
                    <div className={selectedCategory === category.id ? 'text-white' : 'text-blue-600'}>
                      {category.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-0.5">{category.name}</h3>
                    <p className={`text-xs ${selectedCategory === category.id ? 'text-blue-100' : 'text-blue-600'}`}>
                      {category.count} produit{category.count > 1 ? 's' : ''}
                    </p>
                    <p className={`text-xs mt-1 ${selectedCategory === category.id ? 'text-blue-200' : 'text-gray-500'}`}>
                      {category.description.length > 60 
                        ? `${category.description.substring(0, 60)}...` 
                        : category.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content - Products Display */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {currentCategory && (
            <>
              {/* Category Header avec indicateur de devise */}
              <div className="mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${currentCategory.couleur} text-white`}>
                      {currentCategory.icon}
                    </div>
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
                        {currentCategory.name}
                      </h1>
                      <p className="text-gray-600 mt-1">{currentCategory.description}</p>
                    </div>
                  </div>
                  
                  {/* Badge de devise active */}
                  <div className="flex items-center space-x-3 bg-white border border-blue-200 rounded-xl p-3 shadow-sm">
                    <div className="text-blue-600">
                      {currencyIcons[currency]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-900">Devise : {currencyNames[currency]}</div>
                      <div className="text-xs text-blue-600">
                        {currency !== "FCFA" && `1 FCFA = ${exchangeRates[currency]} ${currency}`}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {currentCategory.count} produit{currentCategory.count > 1 ? 's' : ''} disponible{currentCategory.count > 1 ? 's' : ''}
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Livraison Cameroun : 3-5 jours</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Produits certifiés et bénis</span>
                  </span>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCategory.produits.map((produit) => (
                  <div
                    key={produit.id}
                    className={`
                      relative rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border flex flex-col h-full
                      ${isInCart(produit.id) 
                        ? 'border-green-400 bg-green-50' 
                        : 'border-blue-100 bg-white'
                      }
                      group hover:scale-[1.02]
                    `}
                  >
                    {/* Animation de confirmation */}
                    {addedProducts[produit.id] && (
                      <div className="absolute top-3 right-3 animate-fadeIn z-10">
                        <div className="bg-green-500 text-white p-1.5 rounded-full shadow-lg">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="mb-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                      <img
                        src={produit.image}
                        alt={produit.titre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center text-6xl bg-gradient-to-br from-blue-50 to-indigo-50">
                        📚
                      </div>
                      
                      {/* Badge promotion */}
                      {produit.promo && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          -{((1 - produit.promo/produit.prixFCFA) * 100).toFixed(0)}%
                        </div>
                      )}
                      
                      {/* Format badge */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {produit.format?.[0] || produit.type}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 mb-2 text-base line-clamp-2 min-h-[3rem] group-hover:text-blue-700 transition-colors">
                        {produit.titre}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                        <User className="w-4 h-4" />
                        <span>{produit.auteur}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {produit.desc}
                      </p>
                      
                      {/* Caractéristiques */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {produit.format?.slice(0, 2).map((f, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                              {f}
                            </span>
                          ))}
                          {produit.composition && (
                            <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">
                              {produit.composition.length > 15 
                                ? `${produit.composition.substring(0, 15)}...` 
                                : produit.composition}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Rating et détails */}
                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-medium text-gray-900">{produit.rating}</span>
                          </div>
                          {produit.pages && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600">{produit.pages} pages</span>
                            </>
                          )}
                          {produit.duree && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {produit.duree}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Package className="w-4 h-4" />
                          <span className="text-xs">{typeof produit.stock === 'number' 
                            ? `${produit.stock} en stock` 
                            : produit.stock}</span>
                        </div>
                      </div>

                      {/* Prix */}
                      <div className="mt-2">
                        <div className="text-lg font-bold text-blue-700">
                          {formatPrice(produit.promo || produit.prixFCFA, currency)}
                        </div>
                        {produit.promo && (
                          <div className="text-sm text-gray-500 line-through mt-1">
                            {formatPrice(produit.prixFCFA, currency)}
                          </div>
                        )}
                        {currency !== "FCFA" && !produit.promo && (
                          <div className="text-xs text-gray-500 mt-1">
                            ≈ {produit.prixFCFA.toLocaleString('fr-FR')} FCFA
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer: Add to Cart */}
                    <div className="mt-4 pt-4 border-t border-blue-100">
                      <div className="flex items-center justify-between gap-3">
                        {/* Type de produit */}
                        <div className="flex-1">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Tag className="w-4 h-4 text-blue-500" />
                            <span className="capitalize">{produit.type}</span>
                          </div>
                        </div>
                        
                        {/* Boutons d'action */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAddToCart(produit)}
                            className={`
                              flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg font-medium transition-all duration-300
                              ${isInCart(produit.id)
                                ? 'bg-green-100 text-green-700 border border-green-300 hover:bg-green-200'
                                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:scale-105'
                              }
                            `}
                          >
                            {isInCart(produit.id) ? (
                              <>
                                <Check className="w-4 h-4" />
                                <span className="hidden sm:inline">Ajouté</span>
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="w-4 h-4" />
                                <span className="hidden sm:inline">Panier</span>
                              </>
                            )}
                          </button>
                          
                          {/* Bouton aperçu */}
                          <button className="p-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engagement éthique */}
              <div className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Notre Engagement Éthique</h3>
                      <p className="text-gray-600 text-sm max-w-2xl">
                        Aucune promesse magique • Complémentarité avec les soins médicaux • 
                        Conformité à la législation camerounaise • Produits 100% naturels et certifiés
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Satisfaction client : 98%
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      <Footer />

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Boutique;