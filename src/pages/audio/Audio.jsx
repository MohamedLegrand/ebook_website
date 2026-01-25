import React, { useState } from "react";
import {
  Search,
  Headphones,
  Music,
  Podcast,
  Mic,
  Volume2,
  PlayCircle,
  Clock,
  Globe,
  BookOpen,
  Heart,
  Brain,
  Palette,
  Beaker,
  Utensils,
  Dumbbell,
  Camera,
  ShoppingCart,
  Menu,
  X,
  DollarSign,
  Euro,
  Coins,
  ChevronDown,
  Star,
  Users,
  Award,
  Check
} from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../context/CartContext"; // IMPORT CORRECT

function Audio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currency, setCurrency] = useState("FCFA");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [addedBooks, setAddedBooks] = useState({}); // Pour l'animation de confirmation

  // Utiliser le contexte global du panier
  const { addToCart, cart: globalCart } = useCart();

  // Taux de conversion (exemples)
  const exchangeRates = {
    "FCFA": 1,
    "USD": 0.00165,
    "EUR": 0.00152
  };

  // Icônes des devises
  const currencyIcons = {
    "FCFA": <Coins className="w-4 h-4" />,
    "USD": <DollarSign className="w-4 h-4" />,
    "EUR": <Euro className="w-4 h-4" />
  };

  // Noms des devises
  const currencyNames = {
    "FCFA": "Franc CFA",
    "USD": "Dollar US",
    "EUR": "Euro"
  };

  // Formater le prix selon la devise
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

  // Fonction pour ajouter au panier global
  const handleAddToCart = (audioBook) => {
    // Ajouter au panier global via le contexte
    addToCart({
      id: audioBook.id,
      type: 'audiobook', // Type "audiobook" pour les livres audio
      title: audioBook.title,
      author: audioBook.author,
      narrator: audioBook.narrator,
      price: audioBook.priceFCFA,
      cover: audioBook.cover,
      duration: audioBook.duration,
      rating: audioBook.rating,
      listeners: audioBook.listeners
    });
    
    // Animation de confirmation
    setAddedBooks(prev => ({
      ...prev,
      [audioBook.id]: true
    }));
    
    setTimeout(() => {
      setAddedBooks(prev => ({
        ...prev,
        [audioBook.id]: false
      }));
    }, 2000);
  };

  // Vérifier si un livre audio est dans le panier global
  const isInCart = (audioBookId) => {
    return globalCart.some(item => item.id === audioBookId && item.type === 'audiobook');
  };

  const categories = [
    { 
      id: 1,
      name: "Développement Personnel",
      icon: <Brain className="w-5 h-5" />,
      count: 342,
      description: "Audio-books pour la motivation, la croissance personnelle et le succès",
      audioBooks: [
        { 
          id: 101, 
          title: "Atomic Habits", 
          author: "James Clear", 
          narrator: "Jean Dupont",
          priceFCFA: 15000, 
          duration: "5h 42m",
          rating: 4.8,
          listeners: 12500,
          cover: "/src/assets/images/audio/developpement-personnel/atomic-habits.jpg" 
        },
        { 
          id: 102, 
          title: "The Power of Now", 
          author: "Eckhart Tolle", 
          narrator: "Marie Laurent",
          priceFCFA: 14500, 
          duration: "6h 15m",
          rating: 4.7,
          listeners: 9800,
          cover: "/src/assets/images/audio/developpement-personnel/power-of-now.jpg" 
        },
        { 
          id: 103, 
          title: "Mindset", 
          author: "Carol Dweck", 
          narrator: "Pierre Martin",
          priceFCFA: 13500, 
          duration: "4h 50m",
          rating: 4.6,
          listeners: 11200,
          cover: "/src/assets/images/audio/developpement-personnel/mindset.jpg" 
        },
        { 
          id: 104, 
          title: "Deep Work", 
          author: "Cal Newport", 
          narrator: "Sophie Bernard",
          priceFCFA: 14000, 
          duration: "5h 20m",
          rating: 4.5,
          listeners: 8700,
          cover: "/src/assets/images/audio/developpement-personnel/deep-work.jpg" 
        },
        { 
          id: 105, 
          title: "The 7 Habits", 
          author: "Stephen Covey", 
          narrator: "Thomas Leroy",
          priceFCFA: 16000, 
          duration: "7h 10m",
          rating: 4.9,
          listeners: 15600,
          cover: "/src/assets/images/audio/developpement-personnel/7-habits.jpg" 
        },
        { 
          id: 106, 
          title: "Can't Hurt Me", 
          author: "David Goggins", 
          narrator: "Marc Dubois",
          priceFCFA: 15500, 
          duration: "6h 45m",
          rating: 4.8,
          listeners: 13200,
          cover: "/src/assets/images/audio/developpement-personnel/cant-hurt-me.jpg" 
        },
        { 
          id: 107, 
          title: "The Subtle Art", 
          author: "Mark Manson", 
          narrator: "Julie Moreau",
          priceFCFA: 13000, 
          duration: "4h 55m",
          rating: 4.4,
          listeners: 10500,
          cover: "/src/assets/images/audio/developpement-personnel/subtle-art.jpg" 
        },
        { 
          id: 108, 
          title: "Grit", 
          author: "Angela Duckworth", 
          narrator: "Alexandre Petit",
          priceFCFA: 14200, 
          duration: "5h 30m",
          rating: 4.6,
          listeners: 9200,
          cover: "/src/assets/images/audio/developpement-personnel/grit.jpg" 
        },
      ]
    },
    {
      id: 2,
      name: "Business & Finance",
      icon: <BookOpen className="w-5 h-5" />,
      count: 289,
      description: "Audio-books sur l'entrepreneuriat, l'investissement et la gestion",
      audioBooks: [
        { 
          id: 201, 
          title: "The Lean Startup", 
          author: "Eric Ries", 
          narrator: "Paul Richard",
          priceFCFA: 16500, 
          duration: "6h 20m",
          rating: 4.7,
          listeners: 14300,
          cover: "/src/assets/images/audio/business/lean-startup.jpg" 
        },
        { 
          id: 202, 
          title: "Zero to One", 
          author: "Peter Thiel", 
          narrator: "Catherine Blanc",
          priceFCFA: 15500, 
          duration: "5h 45m",
          rating: 4.6,
          listeners: 11800,
          cover: "/src/assets/images/audio/business/zero-to-one.jpg" 
        },
        { 
          id: 203, 
          title: "Rich Dad Poor Dad", 
          author: "Robert Kiyosaki", 
          narrator: "Michel Durand",
          priceFCFA: 14500, 
          duration: "5h 10m",
          rating: 4.8,
          listeners: 16700,
          cover: "/src/assets/images/audio/business/rich-dad-poor-dad.jpg" 
        },
        { 
          id: 204, 
          title: "Good to Great", 
          author: "Jim Collins", 
          narrator: "Isabelle Marchand",
          priceFCFA: 16000, 
          duration: "6h 50m",
          rating: 4.5,
          listeners: 9900,
          cover: "/src/assets/images/audio/business/good-to-great.jpg" 
        },
      ]
    },
    {
      id: 3,
      name: "Santé & Bien-être",
      icon: <Heart className="w-5 h-5" />,
      count: 187,
      description: "Audio-books sur la nutrition, le fitness et la santé mentale",
      audioBooks: [
        { 
          id: 301, 
          title: "How Not to Die", 
          author: "Michael Greger", 
          narrator: "Dr. Laurent Simon",
          priceFCFA: 17500, 
          duration: "8h 15m",
          rating: 4.9,
          listeners: 12500,
          cover: "/src/assets/images/audio/sante-bien-etre/how-not-to-die.jpg" 
        },
        { 
          id: 302, 
          title: "Why We Sleep", 
          author: "Matthew Walker", 
          narrator: "Dr. Sarah Cohen",
          priceFCFA: 16000, 
          duration: "7h 30m",
          rating: 4.8,
          listeners: 10800,
          cover: "/src/assets/images/audio/sante-bien-etre/why-we-sleep.jpg" 
        },
        { 
          id: 303, 
          title: "The Body Keeps Score", 
          author: "Bessel van der Kolk", 
          narrator: "Dr. Pierre Leroux",
          priceFCFA: 17000, 
          duration: "8h 45m",
          rating: 4.7,
          listeners: 9600,
          cover: "/src/assets/images/audio/sante-bien-etre/body-keeps-score.jpg" 
        },
        { 
          id: 304, 
          title: "Breath", 
          author: "James Nestor", 
          narrator: "Jean-Michel Lambert",
          priceFCFA: 15500, 
          duration: "6h 20m",
          rating: 4.6,
          listeners: 8200,
          cover: "/src/assets/images/audio/sante-bien-etre/breath.jpg" 
        },
      ]
    },
    {
      id: 4,
      name: "Romans & Fiction",
      icon: <Globe className="w-5 h-5" />,
      count: 456,
      description: "Romans audio, science-fiction et fantasy narrés par des professionnels",
      audioBooks: [
        { 
          id: 401, 
          title: "1984", 
          author: "George Orwell", 
          narrator: "Pierre-Henri Cami",
          priceFCFA: 12500, 
          duration: "11h 30m",
          rating: 4.9,
          listeners: 23400,
          cover: "/src/assets/images/audio/romans-fiction/1984.jpg" 
        },
        { 
          id: 402, 
          title: "To Kill a Mockingbird", 
          author: "Harper Lee", 
          narrator: "Marie-France Brière",
          priceFCFA: 13500, 
          duration: "12h 15m",
          rating: 4.8,
          listeners: 18700,
          cover: "/src/assets/images/audio/romans-fiction/mockingbird.jpg" 
        },
        { 
          id: 403, 
          title: "The Great Gatsby", 
          author: "F. Scott Fitzgerald", 
          narrator: "Julien Courbet",
          priceFCFA: 12000, 
          duration: "5h 45m",
          rating: 4.7,
          listeners: 15600,
          cover: "/src/assets/images/audio/romans-fiction/great-gatsby.jpg" 
        },
        { 
          id: 404, 
          title: "Pride and Prejudice", 
          author: "Jane Austen", 
          narrator: "Camille de Bois",
          priceFCFA: 13000, 
          duration: "15h 20m",
          rating: 4.9,
          listeners: 19800,
          cover: "/src/assets/images/audio/romans-fiction/pride-prejudice.jpg" 
        },
      ]
    },
    {
      id: 5,
      name: "Histoire & Culture",
      icon: <Award className="w-5 h-5" />,
      count: 234,
      description: "Audio-books sur l'histoire mondiale et les civilisations",
      audioBooks: [
        { 
          id: 501, 
          title: "Sapiens", 
          author: "Yuval Noah Harari", 
          narrator: "Samuel Labarthe",
          priceFCFA: 18500, 
          duration: "15h 25m",
          rating: 4.9,
          listeners: 28700,
          cover: "/src/assets/images/audio/histoire-culture/sapiens.jpg" 
        },
        { 
          id: 502, 
          title: "A Brief History of Time", 
          author: "Stephen Hawking", 
          narrator: "François Berléand",
          priceFCFA: 16500, 
          duration: "7h 50m",
          rating: 4.7,
          listeners: 14200,
          cover: "/src/assets/images/audio/histoire-culture/brief-history-time.jpg" 
        },
        { 
          id: 503, 
          title: "Guns, Germs, and Steel", 
          author: "Jared Diamond", 
          narrator: "Patrick Poivre d'Arvor",
          priceFCFA: 19500, 
          duration: "18h 30m",
          rating: 4.8,
          listeners: 16700,
          cover: "/src/assets/images/audio/histoire-culture/guns-germs-steel.jpg" 
        },
        { 
          id: 504, 
          title: "The Silk Roads", 
          author: "Peter Frankopan", 
          narrator: "Bernard Giraudeau",
          priceFCFA: 20000, 
          duration: "20h 15m",
          rating: 4.6,
          listeners: 11300,
          cover: "/src/assets/images/audio/histoire-culture/silk-roads.jpg" 
        },
      ]
    },
    {
      id: 6,
      name: "Podcasts & Conférences",
      icon: <Podcast className="w-5 h-5" />,
      count: 567,
      description: "Collections de podcasts et conférences inspirantes",
      audioBooks: [
        { 
          id: 601, 
          title: "The Tim Ferriss Show", 
          author: "Tim Ferriss", 
          narrator: "Tim Ferriss",
          priceFCFA: 12500, 
          duration: "Collection 50h",
          rating: 4.9,
          listeners: 45600,
          cover: "/src/assets/images/audio/podcasts/tim-ferriss.jpg" 
        },
        { 
          id: 602, 
          title: "The Joe Rogan Experience", 
          author: "Joe Rogan", 
          narrator: "Joe Rogan",
          priceFCFA: 15000, 
          duration: "Collection 100h",
          rating: 4.8,
          listeners: 67800,
          cover: "/src/assets/images/audio/podcasts/joe-rogan.jpg" 
        },
        { 
          id: 603, 
          title: "TED Talks", 
          author: "Divers", 
          narrator: "Divers",
          priceFCFA: 13500, 
          duration: "Collection 75h",
          rating: 4.7,
          listeners: 89200,
          cover: "/src/assets/images/audio/podcasts/ted-talks.jpg" 
        },
        { 
          id: 604, 
          title: "The Daily", 
          author: "The New York Times", 
          narrator: "Michael Barbaro",
          priceFCFA: 14500, 
          duration: "Collection 60h",
          rating: 4.6,
          listeners: 56700,
          cover: "/src/assets/images/audio/podcasts/the-daily.jpg" 
        },
      ]
    },
    {
      id: 7,
      name: "Musique & Arts",
      icon: <Music className="w-5 h-5" />,
      count: 189,
      description: "Audio-books sur la musique, les arts et la créativité",
      audioBooks: [
        { 
          id: 701, 
          title: "This Is Your Brain on Music", 
          author: "Daniel Levitin", 
          narrator: "Daniel Levitin",
          priceFCFA: 16500, 
          duration: "9h 20m",
          rating: 4.7,
          listeners: 12500,
          cover: "/src/assets/images/audio/musique-arts/brain-on-music.jpg" 
        },
        { 
          id: 702, 
          title: "How Music Works", 
          author: "David Byrne", 
          narrator: "David Byrne",
          priceFCFA: 17500, 
          duration: "8h 45m",
          rating: 4.6,
          listeners: 9800,
          cover: "/src/assets/images/audio/musique-arts/how-music-works.jpg" 
        },
        { 
          id: 703, 
          title: "The Rest Is Noise", 
          author: "Alex Ross", 
          narrator: "Alex Ross",
          priceFCFA: 18500, 
          duration: "12h 30m",
          rating: 4.8,
          listeners: 7600,
          cover: "/src/assets/images/audio/musique-arts/rest-is-noise.jpg" 
        },
        { 
          id: 704, 
          title: "Steal Like an Artist", 
          author: "Austin Kleon", 
          narrator: "Austin Kleon",
          priceFCFA: 14000, 
          duration: "3h 45m",
          rating: 4.5,
          listeners: 14300,
          cover: "/src/assets/images/audio/musique-arts/steal-like-artist.jpg" 
        },
      ]
    },
    {
      id: 8,
      name: "Cuisine & Lifestyle",
      icon: <Utensils className="w-5 h-5" />,
      count: 123,
      description: "Audio-books culinaires et conseils lifestyle",
      audioBooks: [
        { 
          id: 801, 
          title: "Salt, Fat, Acid, Heat", 
          author: "Samin Nosrat", 
          narrator: "Samin Nosrat",
          priceFCFA: 15500, 
          duration: "7h 20m",
          rating: 4.8,
          listeners: 12500,
          cover: "/src/assets/images/audio/cuisine-lifestyle/salt-fat-acid-heat.jpg" 
        },
        { 
          id: 802, 
          title: "The Joy of Cooking", 
          author: "Irma Rombauer", 
          narrator: "Julia Child",
          priceFCFA: 16500, 
          duration: "10h 15m",
          rating: 4.9,
          listeners: 9800,
          cover: "/src/assets/images/audio/cuisine-lifestyle/joy-cooking.jpg" 
        },
        { 
          id: 803, 
          title: "Mastering the Art", 
          author: "Julia Child", 
          narrator: "Julia Child",
          priceFCFA: 17500, 
          duration: "12h 30m",
          rating: 4.7,
          listeners: 7600,
          cover: "/src/assets/images/audio/cuisine-lifestyle/mastering-art.jpg" 
        },
        { 
          id: 804, 
          title: "Ottolenghi Simple", 
          author: "Yotam Ottolenghi", 
          narrator: "Yotam Ottolenghi",
          priceFCFA: 16000, 
          duration: "6h 45m",
          rating: 4.6,
          listeners: 8200,
          cover: "/src/assets/images/audio/cuisine-lifestyle/ottolenghi-simple.jpg" 
        },
      ]
    },
  ];

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <Header />

      <div className="flex flex-1 relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar - Categories List */}
        <aside
          className={`
            fixed lg:sticky top-0 left-0 h-screen w-80 bg-white/95 backdrop-blur-sm border-r border-gray-200 overflow-y-auto z-40
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <div className="p-6 border-b border-gray-200 sticky top-0 bg-white/95 z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">Livres Audio</h2>
                <p className="text-xs text-gray-500">Écoutez et apprenez</p>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher un audio-book..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Sélecteur de devise */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">Devise</label>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                Taux en temps réel
              </span>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">
                    {currencyIcons[currency]}
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">{currencyNames[currency]}</div>
                    <div className="text-xs text-gray-500">
                      {currency === "FCFA" ? "Devise par défaut" : "Conversion active"}
                    </div>
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCurrencyOpen && (
                <>
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {Object.entries(currencyNames).map(([key, name]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrency(key);
                          setIsCurrencyOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors ${
                          currency === key ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        <div className={currency === key ? 'text-blue-600' : 'text-gray-500'}>
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
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700">
                <span className="font-medium">Note :</span> Les prix sont initialement en FCFA et convertis automatiquement.
              </p>
            </div>
          </div>

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
                    ? 'bg-blue-500 text-white shadow-md'
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
                    <p className={`text-xs ${selectedCategory === category.id ? 'text-blue-100' : 'text-gray-500'}`}>
                      {category.count} audios
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

        {/* Main Content - Audio Books Display */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {currentCategory && (
            <>
              {/* Category Header avec indicateur de devise */}
              <div className="mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-xl text-white">
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
                  <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                    <div className="text-blue-600">
                      {currencyIcons[currency]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Devise : {currencyNames[currency]}</div>
                      <div className="text-xs text-gray-500">
                        {currency !== "FCFA" && `1 FCFA = ${exchangeRates[currency]} ${currency}`}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full font-medium">
                    {currentCategory.count} livres audio disponibles
                  </span>
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Tous les prix en {currency}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Headphones className="w-4 h-4 text-blue-500" />
                    <span>Écoutez partout, à tout moment</span>
                  </span>
                </div>
              </div>

              {/* Audio Books Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCategory.audioBooks.map((audioBook) => (
                  <div
                    key={audioBook.id}
                    className={`
                      relative rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border flex flex-col h-full
                      ${isInCart(audioBook.id) 
                        ? 'border-green-400 bg-green-50' 
                        : 'border-gray-100 bg-white'
                      }
                    `}
                  >
                    {/* Animation de confirmation */}
                    {addedBooks[audioBook.id] && (
                      <div className="absolute top-3 right-3 animate-fadeIn z-10">
                        <div className="bg-green-500 text-white p-1.5 rounded-full shadow-lg">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    )}

                    {/* Audio Book Cover */}
                    <div className="mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center relative">
                      <img
                        src={audioBook.cover}
                        alt={audioBook.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center text-6xl bg-gradient-to-br from-blue-50 to-indigo-50">
                        🎧
                      </div>
                      {/* Play Button Overlay */}
                      <div className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full">
                        <PlayCircle className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Audio Book Info */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-base line-clamp-2 min-h-[3rem]">
                        {audioBook.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{audioBook.author}</p>
                      <p className="text-xs text-gray-500 mb-3">Narrateur : {audioBook.narrator}</p>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-3 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{audioBook.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span>{audioBook.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-blue-500" />
                          <span>{audioBook.listeners.toLocaleString('fr-FR')}</span>
                        </div>
                      </div>
                      
                      {/* Prix avec indication de conversion */}
                      <div className="mt-2">
                        <div className="text-lg font-bold text-blue-700">
                          {formatPrice(audioBook.priceFCFA, currency)}
                        </div>
                        {currency !== "FCFA" && (
                          <div className="text-xs text-gray-500 mt-1">
                            ≈ {audioBook.priceFCFA.toLocaleString('fr-FR')} FCFA
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer: Add to Cart */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            {currencyIcons[currency]}
                            <span>Prix en {currency}</span>
                          </div>
                        </div>
                        {/* Bouton Ajouter au panier */}
                        <button
                          onClick={() => handleAddToCart(audioBook)}
                          className={`
                            flex items-center gap-1 text-sm px-3 py-2 rounded-lg font-medium transition-all duration-300
                            ${isInCart(audioBook.id)
                              ? 'bg-green-100 text-green-700 border border-green-300 hover:bg-green-200'
                              : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 hover:scale-105'
                            }
                          `}
                        >
                          {isInCart(audioBook.id) ? (
                            <>
                              <Check className="w-4 h-4" />
                              Ajouté
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              Acheter
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="mt-10 text-center">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-105">
                  Charger plus de livres audio
                </button>
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

export default Audio;