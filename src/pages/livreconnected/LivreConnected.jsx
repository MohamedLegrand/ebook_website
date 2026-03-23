import React, { useState } from "react";
import HeaderConnected from "../../components/headerconnected/HeaderConnected";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Search, BookOpen, Shield, ShoppingCart, Menu, X,
  DollarSign, Euro, Coins, ChevronDown, Check, User,
  Eye, TrendingUp, Package, FileText, Clock, ArrowRight
} from "lucide-react";

function LivreConnected() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currency, setCurrency] = useState("FCFA");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [addedProducts, setAddedProducts] = useState({});
  const [viewMode, setViewMode] = useState("grid");
  const navigate = useNavigate();

  const { addToCart, cart: globalCart } = useCart();
  const { client } = useAuth();

  const exchangeRates = { "FCFA": 1, "USD": 0.00165, "EUR": 0.00152 };
  const currencyIcons = {
    "FCFA": <Coins className="w-4 h-4" />,
    "USD": <DollarSign className="w-4 h-4" />,
    "EUR": <Euro className="w-4 h-4" />
  };
  const currencyNames = { "FCFA": "Franc CFA", "USD": "Dollar US", "EUR": "Euro" };

  const formatPrice = (priceFCFA, currencyType) => {
    const converted = priceFCFA * exchangeRates[currencyType];
    switch (currencyType) {
      case "FCFA": return `${converted.toLocaleString("fr-FR")} FCFA`;
      case "USD": return `$${converted.toFixed(2)}`;
      case "EUR": return `€${converted.toFixed(2)}`;
      default: return `${converted.toLocaleString("fr-FR")} FCFA`;
    }
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      type: "mths-product",
      title: product.titre,
      author: product.auteur || "Centre MTHS",
      price: product.prixFCFA,
      cover: product.image,
      category: "Livres",
      format: product.format?.[0] || "Physique",
      pages: product.pages,
      stock: product.stock
    });
    setAddedProducts(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAddedProducts(prev => ({ ...prev, [product.id]: false })), 2000);
  };

  const isInCart = (productId) =>
    globalCart.some(item => item.id === productId && item.type === "mths-product");

  const handleViewDetails = (product) => {
    const productImages = [
      `/images/livre${product.id}/livre${product.id}_1.png`,
      `/images/livre${product.id}/livre${product.id}_2.png`,
      `/images/livre${product.id}/livre${product.id}_3.png`
    ];
    navigate(`/produit/${product.id}`, {
      state: { product: { ...product, images: productImages }, currency }
    });
  };

  // Uniquement les livres doctrinaux
  const allBooks = [
    { id: 1, titre: "Chretien africain face a la sorcellerie", auteur: "Centre MTHS", desc: "Manuel complet de la Médecine Traditionnelle des Handicapés Spirituels.", prixFCFA: 6500, image: "/images/livre1/livre1_1.png", format: ["Papier", "PDF"], pages: 320, stock: 50, type: "Livre", isbn: "978-2-954-12345-6", datePublication: "2023", langue: "Français" },
    { id: 2, titre: "Comment reconnaitre a vur d'oeil un sorcier", auteur: "Centre MTHS", desc: "Étude approfondie du rite SO'O dans sa version christianisée.", prixFCFA: 6500, image: "/images/livre2/livre2_1.png", format: ["Papier", "PDF", "EPUB"], pages: 240, stock: 35, type: "Livre", isbn: "978-2-954-12346-3", datePublication: "2023", langue: "Français" },
    { id: 3, titre: "Comment se soigner des persecutions spirituelles", auteur: "Centre MTHS", desc: "Guide des remèdes traditionnels améliorés et leur intégration.", prixFCFA: 6500, image: "/images/livre3/livre3_1.png", format: ["Papier"], pages: 280, stock: 40, type: "Livre", isbn: "978-2-954-12347-0", datePublication: "2023", langue: "Français" },
    { id: 4, titre: "A la rencontre de JPSSA", auteur: "Centre MTHS", desc: "Méthodologie du diagnostic des handicaps spirituels.", prixFCFA: 6500, image: "/images/livre4/livre4_1.png", format: ["PDF", "EPUB"], pages: 180, stock: 60, type: "E-book", datePublication: "2023", langue: "Français" },
    { id: 5, titre: "Le musulman face a la sorcellerie", auteur: "Centre MTHS", desc: "Guide pratique des rites de purification selon la tradition Béti.", prixFCFA: 6500, image: "/images/livre5/livre5_1.png", format: ["Papier", "PDF"], pages: 210, stock: 45, type: "Livre", isbn: "978-2-954-12348-7", datePublication: "2023", langue: "Français" },
    { id: 6, titre: "Les dix commendements de satan", auteur: "Centre MTHS", desc: "Fondements théologiques de l'intégration culturelle africaine.", prixFCFA: 6500, image: "/images/livre6/livre6_1.png", format: ["Papier"], pages: 290, stock: 30, type: "Livre", isbn: "978-2-954-12349-4", datePublication: "2023", langue: "Français" },
    { id: 7, titre: "La transmission de le sorcellerie au sein d'une famille", auteur: "Centre MTHS", desc: "Approche intégrative de la guérison selon la révélation de 1979.", prixFCFA: 6500, image: "/images/livre7/livre7_1.png", format: ["Papier", "PDF"], pages: 350, stock: 25, type: "Livre", isbn: "978-2-954-12350-0", datePublication: "2023", langue: "Français" },
    { id: 8, titre: "La vie spirituel du sorcier-univer astral de la sorcelerie", auteur: "Centre MTHS", desc: "Analyse et solutions pour briser les chaînes familiales.", prixFCFA: 6500, image: "/images/livre8/livre8_1.png", format: ["Papier"], pages: 230, stock: 40, type: "Livre", isbn: "978-2-954-12351-7", datePublication: "2023", langue: "Français" },
    { id: 9, titre: "Protocole therapeutique MTHS", auteur: "Centre MTHS", desc: "Interface entre psychologie moderne et spiritualité africaine.", prixFCFA: 6500, image: "/images/livre9/livre9_1.png", format: ["PDF", "EPUB"], pages: 260, stock: 35, type: "E-book", datePublication: "2023", langue: "Français" },
    { id: 10, titre: "La guerre des spiritualités en Afrique", auteur: "Centre MTHS", desc: "Rites de passage christianisés pour les étapes de la vie.", prixFCFA: 6500, image: "/images/livre10/livre10_1.png", format: ["Papier"], pages: 200, stock: 50, type: "Livre", isbn: "978-2-954-12352-4", datePublication: "2023", langue: "Français" },
    { id: 12, titre: "Religion Chinoise face à la Sorcellerie", auteur: "Centre MTHS", desc: "Analyse comparée des traditions spirituelles chinoises et africaines.", prixFCFA: 6500, image: "/images/livre12/livre12_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12354-8", datePublication: "2023", langue: "Français" },
    { id: 13, titre: "La vie apres la Mort", auteur: "Centre MTHS", desc: "Enquête sur les conceptions africaines de l'au-delà.", prixFCFA: 6500, image: "/images/livre13/livre13_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12355-5", datePublication: "2023", langue: "Français" },
    { id: 14, titre: "Ange ou Demon", auteur: "Centre MTHS", desc: "Discernement des esprits dans la tradition chrétienne africaine.", prixFCFA: 6500, image: "/images/livre14/livre14_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12356-2", datePublication: "2023", langue: "Français" },
    { id: 15, titre: "Chretien africain et la maladie", auteur: "Centre MTHS", desc: "Comprendre et guérir selon une approche holistique chrétienne-africaine.", prixFCFA: 6500, image: "/images/livre15/livre15_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12357-9", datePublication: "2023", langue: "Français" },
    { id: 16, titre: "Comment vivre ensemble avec les sorciers", auteur: "Centre MTHS", desc: "Stratégies de coexistence et de neutralisation dans la communauté.", prixFCFA: 6500, image: "/images/livre16/livre16_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" },
    { id: 17, titre: "LE SATANISME ET LA DERIVE DU MONDE", auteur: "Centre MTHS", desc: "Analyse des dérives spirituelles dans le monde contemporain.", prixFCFA: 6500, image: "/images/livre17/livre17_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" },
    { id: 18, titre: "Traditions africaines et Christianisme", auteur: "Centre MTHS", desc: "Pont entre les traditions ancestrales et la foi chrétienne.", prixFCFA: 6500, image: "/images/livre18/livre18_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" },
    { id: 19, titre: "Le bhoudisme face à la sorcellerie et au Satanisme", auteur: "Centre MTHS", desc: "Étude comparative des perspectives bouddhistes face au satanisme.", prixFCFA: 6500, image: "/images/livre19/livre19_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" },
    { id: 20, titre: "Sectes et Sociétés Secrètes africaines", auteur: "Centre MTHS", desc: "Analyse des organisations occultes et leurs influences.", prixFCFA: 6500, image: "/images/livre20/livre20_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" },
    { id: 21, titre: "Comment Comprendre et interpreter le Rêve", auteur: "Centre MTHS", desc: "Guide d'interprétation spirituelle des rêves.", prixFCFA: 6500, image: "/images/livre21/livre21_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" },
    { id: 22, titre: "Comment obtenir ta Délivrance et ta Victoire contre le Diable", auteur: "Centre MTHS", desc: "Manuel pratique de délivrance spirituelle.", prixFCFA: 6500, image: "/images/livre22/livre22_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" },
    { id: 23, titre: "Le Remède Traditionnel Amélioré", auteur: "Centre MTHS", desc: "Recueil de remèdes naturels issus de la tradition africaine.", prixFCFA: 6500, image: "/images/livre23/livre23_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" },
    { id: 24, titre: "CULTURE DE LA PAIX ET LUTTE CONTRE LA DÉVIANCE SPIRITUELLE", auteur: "Centre MTHS", desc: "Vers une culture de paix face aux déviances spirituelles.", prixFCFA: 6500, image: "/images/livre24/livre24_1.png", format: ["Papier", "PDF"], pages: 310, stock: 20, type: "Livre", isbn: "978-2-954-12358-6", datePublication: "2023", langue: "Français" }
  ];

  // Filtre uniquement par recherche — plus de catégories
  const filteredBooks = allBooks.filter(book =>
    book.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .book-card { animation: fadeInUp 0.4s ease-out both; }
        .book-card:nth-child(1){animation-delay:0.04s} .book-card:nth-child(2){animation-delay:0.08s}
        .book-card:nth-child(3){animation-delay:0.12s} .book-card:nth-child(4){animation-delay:0.16s}
        .book-card:nth-child(5){animation-delay:0.20s} .book-card:nth-child(6){animation-delay:0.24s}
        .img-zoom { transition: transform 0.5s ease; }
        .book-card:hover .img-zoom { transform: scale(1.07); }
        .add-btn { transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .add-btn:hover:not(:disabled) { transform: scale(1.03); }
        .add-btn:active:not(:disabled) { transform: scale(0.97); }
      `}</style>

      <HeaderConnected />

      {/* Bandeau de bienvenue */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-blue-200 text-sm font-medium">Bienvenue dans votre espace,</p>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              {client?.full_name || "Membre"} 👋
            </h1>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/20">
            <BookOpen className="w-4 h-4 text-blue-200" />
            <span className="text-sm font-medium">{allBooks.length} livres disponibles</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">

        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky lg:top-6 inset-y-0 left-0 lg:h-fit w-64 bg-white rounded-2xl shadow-sm border border-gray-200
          z-40 overflow-y-auto transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          {/* Recherche */}
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Bibliothèque MTHS
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un livre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Devise */}
          <div className="p-5 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Devise</p>
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors text-sm"
              >
                <div className="flex items-center gap-2 text-blue-600">
                  {currencyIcons[currency]}
                  <span className="font-medium text-gray-800">{currencyNames[currency]}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isCurrencyOpen ? "rotate-180" : ""}`} />
              </button>
              {isCurrencyOpen && (
                <>
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                    {Object.entries(currencyNames).map(([key, name]) => (
                      <button
                        key={key}
                        onClick={() => { setCurrency(key); setIsCurrencyOpen(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-blue-50 transition-colors ${currency === key ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`}
                      >
                        <span className={currency === key ? "text-blue-600" : "text-gray-400"}>{currencyIcons[key]}</span>
                        {name}
                        {currency === key && <Check className="w-3.5 h-3.5 ml-auto text-blue-500" />}
                      </button>
                    ))}
                  </div>
                  <div className="fixed inset-0 z-40" onClick={() => setIsCurrencyOpen(false)} />
                </>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="p-5 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Résultats</p>
            <div className="bg-blue-50 rounded-xl px-4 py-3 text-center">
              <p className="text-2xl font-black text-blue-700">{filteredBooks.length}</p>
              <p className="text-xs text-blue-500 font-medium">livre{filteredBooks.length > 1 ? "s" : ""} trouvé{filteredBooks.length > 1 ? "s" : ""}</p>
            </div>
          </div>

          {/* Vue grille/liste */}
          <div className="p-5 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Affichage</p>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/>
                  <rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/>
                </svg>
                Grille
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-colors ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <rect x="1" y="2" width="14" height="3" rx="1"/>
                  <rect x="1" y="7" width="14" height="3" rx="1"/>
                  <rect x="1" y="12" width="14" height="3" rx="1"/>
                </svg>
                Liste
              </button>
            </div>
          </div>

          {/* Badge sécurité */}
          <div className="m-5 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center gap-2 mb-1.5">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-800">Achat sécurisé</span>
            </div>
            <p className="text-xs text-blue-500 leading-relaxed">
              MTN MoMo • Orange Money • Carte bancaire
            </p>
          </div>
        </aside>

        {/* Overlay mobile */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/40 z-30" onClick={() => setIsSidebarOpen(false)} />
        )}

        {/* Contenu principal */}
        <main className="flex-1 min-w-0">

          {/* Barre top */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900">
              Livres disponibles
              <span className="ml-2 text-sm font-normal text-gray-400">({filteredBooks.length})</span>
            </h2>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:border-blue-300 transition-colors"
            >
              <Menu className="w-4 h-4" />
              Filtres
            </button>
          </div>

          {filteredBooks.length > 0 ? (
            viewMode === "grid" ? (
              /* ===== VUE GRILLE ===== */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    className={`book-card bg-white rounded-2xl border overflow-hidden flex flex-col group
                      ${isInCart(book.id) ? "border-green-300" : "border-gray-200 hover:border-blue-300"}
                      hover:shadow-lg transition-all duration-300`}
                  >
                    {/* Image */}
                    <div className="relative h-52 bg-gradient-to-br from-blue-100 to-indigo-50 overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.titre}
                        className="img-zoom w-full h-full object-cover"
                        onError={(e) => { e.target.src = "/images/default-book.jpg"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-white/95 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-full">
                          {book.type}
                        </span>
                        {book.format?.includes("PDF") && (
                          <span className="bg-indigo-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">PDF</span>
                        )}
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${book.stock <= 25 ? "bg-orange-500 text-white" : "bg-white/95 text-gray-700"}`}>
                          {book.stock <= 25 ? `⚡ ${book.stock} restants` : `${book.stock} en stock`}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-blue-600 text-white text-sm font-black px-3 py-1.5 rounded-full shadow-lg">
                          {formatPrice(book.prixFCFA, currency)}
                        </span>
                      </div>
                      {addedProducts[book.id] && (
                        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                          <div className="bg-green-500 text-white p-3 rounded-full shadow-lg">
                            <Check className="w-6 h-6" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Infos */}
                    <div className="flex-1 p-4">
                      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5 line-clamp-2">
                        {book.titre}
                      </h3>
                      <p className="text-xs text-blue-600 font-medium mb-2">{book.auteur}</p>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">{book.desc}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        {book.pages && (
                          <span className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                            <Clock className="w-3 h-3" />{book.pages} pages
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          <FileText className="w-3 h-3" />{book.format?.join(", ")}
                        </span>
                      </div>
                    </div>

                    {/* Boutons */}
                    <div className="p-4 pt-0 flex gap-2">
                      <button
                        onClick={() => handleViewDetails(book)}
                        className="flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-colors flex-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Détails
                      </button>
                      <button
                        onClick={() => handleAddToCart(book)}
                        className={`add-btn flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-2.5 rounded-xl flex-[2] ${
                          isInCart(book.id)
                            ? "bg-green-50 text-green-700 border border-green-300"
                            : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200"
                        }`}
                      >
                        {isInCart(book.id) ? (
                          <><Check className="w-3.5 h-3.5" />Dans le panier</>
                        ) : (
                          <><ShoppingCart className="w-3.5 h-3.5" />Ajouter au panier</>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* ===== VUE LISTE ===== */
              <div className="space-y-3">
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    className={`book-card bg-white rounded-2xl border overflow-hidden flex flex-row group
                      ${isInCart(book.id) ? "border-green-300" : "border-gray-200 hover:border-blue-300"}
                      hover:shadow-md transition-all duration-300`}
                  >
                    <div className="relative w-28 sm:w-36 flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-50 overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.titre}
                        className="img-zoom w-full h-full object-cover"
                        onError={(e) => { e.target.src = "/images/default-book.jpg"; }}
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 flex-1">{book.titre}</h3>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${book.stock <= 25 ? "bg-orange-100 text-orange-700" : "bg-blue-50 text-blue-700"}`}>
                            {book.stock <= 25 ? `⚡ ${book.stock}` : `✓ ${book.stock}`}
                          </span>
                        </div>
                        <p className="text-xs text-blue-600 font-medium mb-1">{book.auteur}</p>
                        <p className="text-xs text-gray-500 line-clamp-1 hidden sm:block mb-2">{book.desc}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">{book.type}</span>
                          {book.format?.map(f => (
                            <span key={f} className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3 gap-3">
                        <span className="text-base font-black text-blue-700">{formatPrice(book.prixFCFA, currency)}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleViewDetails(book)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Détails</span>
                          </button>
                          <button
                            onClick={() => handleAddToCart(book)}
                            className={`add-btn flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl ${
                              isInCart(book.id)
                                ? "bg-green-50 text-green-700 border border-green-300"
                                : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                          >
                            {isInCart(book.id) ? (
                              <><Check className="w-3.5 h-3.5" /><span className="hidden sm:inline">Ajouté</span></>
                            ) : (
                              <><ShoppingCart className="w-3.5 h-3.5" /><span className="hidden sm:inline">Ajouter</span></>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-700 mb-2">Aucun livre trouvé</h3>
              <p className="text-gray-400 text-sm">Modifiez votre recherche.</p>
            </div>
          )}

          {/* Footer réassurance */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <Shield className="w-5 h-5 text-blue-600" />, title: "Paiement sécurisé", desc: "MTN MoMo • Orange Money • Carte" },
              { icon: <Package className="w-5 h-5 text-blue-600" />, title: "Livraison rapide", desc: "Dans tout le Cameroun sous 48h" },
              { icon: <TrendingUp className="w-5 h-5 text-blue-600" />, title: "Satisfaction 98%", desc: "Des milliers de lecteurs satisfaits" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default LivreConnected;