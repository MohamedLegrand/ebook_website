import React, { useState } from "react";
import { Search, BookOpen, Code, Briefcase, Heart, Brain, Palette, Beaker, Globe, Utensils, Dumbbell, Music, Camera, Plane, TrendingUp, Users, Sparkles, Menu, X } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Categories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    { 
      id: 1, 
      name: "Informatique & Technologie", 
      icon: <Code className="w-5 h-5" />, 
      count: 1247, 
      description: "Programmation, IA, cybersécurité, développement web et mobile",
      books: [
        { id: 101, title: "Clean Code", author: "Robert C. Martin", price: "20 000 FCFA", cover: "/src/assets/images/informatique/clean-code.jpg" },
        { id: 102, title: "The Pragmatic Programmer", author: "Hunt & Thomas", price: "23 000 FCFA", cover: "/src/assets/images/informatique/pragmatic-programmer.jpg" },
        { id: 103, title: "Design Patterns", author: "Gang of Four", price: "20 000 FCFA", cover: "/src/assets/images/informatique/design-patterns.jpg" },
        { id: 104, title: "You Don't Know JS", author: "Kyle Simpson", price: "20 000 FCFA", cover: "/src/assets/images/informatique/you-dont-know-js.jpg" },
        { id: 105, title: "Refactoring", author: "Martin Fowler", price: "20 000 FCFA", cover: "/src/assets/images/informatique/refactoring.jpg" },
        { id: 106, title: "Introduction to Algorithms", author: "CLRS", price: "20 000 FCFA", cover: "/src/assets/images/informatique/intro-algorithms.jpg" },
        { id: 107, title: "Code Complete", author: "Steve McConnell", price: "20 000 FCFA", cover: "/src/assets/images/informatique/code-complete.jpg" },
        { id: 108, title: "The Art of Computer Programming", author: "Donald Knuth", price: "20 000 FCFA", cover: "/src/assets/images/informatique/art-programming.jpg" },
      ]
    },
    { 
      id: 2, 
      name: "Business & Finance", 
      icon: <Briefcase className="w-5 h-5" />, 
      count: 892, 
      description: "Entrepreneuriat, investissement, comptabilité, gestion d'entreprise",
      books: [
        { id: 201, title: "The Lean Startup", author: "Eric Ries", price: "20 000 FCFA", cover: "/src/assets/images/business/lean-startup.jpg" },
        { id: 202, title: "Zero to One", author: "Peter Thiel", price: "20 000 FCFA", cover: "/src/assets/images/business/zero-to-one.jpg" },
        { id: 203, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: "20 000 FCFA", cover: "/src/assets/images/business/rich-dad-poor-dad.jpg" },
        { id: 204, title: "Good to Great", author: "Jim Collins", price: "20 000 FCFA", cover: "/src/assets/images/business/good-to-great.jpg" },
        { id: 205, title: "The Intelligent Investor", author: "Benjamin Graham", price: "20 000 FCFA", cover: "/src/assets/images/business/intelligent-investor.jpg" },
        { id: 206, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: "20 000 FCFA", cover: "/src/assets/images/business/thinking-fast-slow.jpg" },
        { id: 207, title: "The 4-Hour Workweek", author: "Tim Ferriss", price: "20 000 FCFA", cover: "/src/assets/images/business/4-hour-workweek.jpg" },
        { id: 208, title: "Principles", author: "Ray Dalio", price: "20 000 FCFA", cover: "/src/assets/images/business/principles.jpg" },
      ]
    },
    { 
      id: 3, 
      name: "Développement Personnel", 
      icon: <Brain className="w-5 h-5" />, 
      count: 1543, 
      description: "Motivation, habitudes, productivité, réussite personnelle",
      books: [
        { id: 301, title: "Atomic Habits", author: "James Clear", price: "20 000 FCFA", cover: "/src/assets/images/developpement-personnel/atomic-habits.jpg" },
        { id: 302, title: "The Power of Now", author: "Eckhart Tolle", price: "20 000 FCFA", cover: "/src/assets/images/developpement-personnel/power-of-now.jpg" },
        { id: 303, title: "Mindset", author: "Carol Dweck", price: "20 000 FCFA", cover: "/src/assets/images/developpement-personnel/mindset.jpg" },
        { id: 304, title: "Deep Work", author: "Cal Newport", price: "20 000 FCFA", cover: "/src/assets/images/developpement-personnel/deep-work.jpg" },
        { id: 305, title: "The 7 Habits", author: "Stephen Covey", price: "20 000 FCFA", cover: "/src/assets/images/developpement-personnel/7-habits.jpg" },
        { id: 306, title: "Can't Hurt Me", author: "David Goggins", price: "20 000 FCFA", cover: "/src/assets/images/developpement-personnel/cant-hurt-me.jpg" },
        { id: 307, title: "The Subtle Art", author: "Mark Manson", price: "20 000 FCFA", cover: "/src/assets/images/developpement-personnel/subtle-art.jpg" },
        { id: 308, title: "Grit", author: "Angela Duckworth", price: "20 000 FCFA", cover: "/src/assets/images/developpement-personnel/grit.jpg" },
      ]
    },
    { 
      id: 4, 
      name: "Romans & Fiction", 
      icon: <BookOpen className="w-5 h-5" />, 
      count: 2156, 
      description: "Romans classiques, contemporains, science-fiction, fantasy",
      books: [
        { id: 401, title: "1984", author: "George Orwell", price: "18.99€", cover: "/src/assets/images/romans-fiction/984.jpg" },
        { id: 402, title: "To Kill a Mockingbird", author: "Harper Lee", price: "19.99€", cover: "/src/assets/images/romans-fiction/mockingbird.jpg" },
        { id: 403, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "17.99€", cover: "/src/assets/images/romans-fiction/great-gatsby.jpg" },
        { id: 404, title: "Pride and Prejudice", author: "Jane Austen", price: "16.99€", cover: "/src/assets/images/romans-fiction/pride-prejudice.jpg" },
        { id: 405, title: "The Catcher in the Rye", author: "J.D. Salinger", price: "18.99€", cover: "/src/assets/images/romans-fiction/catcher-rye.jpg" },
        { id: 406, title: "Lord of the Flies", author: "William Golding", price: "17.99€", cover: "/src/assets/images/romans-fiction/lord-flies.jpg" },
        { id: 407, title: "Animal Farm", author: "George Orwell", price: "15.99€", cover: "/src/assets/images/romans-fiction/animal-farm.jpg" },
        { id: 408, title: "Brave New World", author: "Aldous Huxley", price: "19.99€", cover: "/src/assets/images/romans-fiction/brave-new-world.jpg" },
      ]
    },
    { 
      id: 5, 
      name: "Arts & Créativité", 
      icon: <Palette className="w-5 h-5" />, 
      count: 678, 
      description: "Peinture, dessin, design graphique, arts visuels",
      books: [
        { id: 501, title: "Steal Like an Artist", author: "Austin Kleon", price: "20.99€", cover: "/src/assets/images/arts-creativite/steal-like-artist.jpg" },
        { id: 502, title: "The Artist's Way", author: "Julia Cameron", price: "22.99€", cover: "/src/assets/images/arts-creativite/artists-way.jpg" },
        { id: 503, title: "Creative Confidence", author: "Tom & David Kelley", price: "25.99€", cover: "/src/assets/images/arts-creativite/creative-confidence.jpg" },
        { id: 504, title: "Drawing on the Right Side", author: "Betty Edwards", price: "28.99€", cover: "/src/assets/images/arts-creativite/drawing-right-side.jpg" },
      ]
    },
    { 
      id: 6, 
      name: "Sciences & Nature", 
      icon: <Beaker className="w-5 h-5" />, 
      count: 934, 
      description: "Biologie, physique, astronomie, environnement",
      books: [
        { id: 601, title: "Sapiens", author: "Yuval Noah Harari", price: "26.99€", cover: "/src/assets/images/sciences-nature/sapiens.jpg" },
        { id: 602, title: "A Brief History of Time", author: "Stephen Hawking", price: "24.99€", cover: "/src/assets/images/sciences-nature/brief-history-time.jpg" },
        { id: 603, title: "The Selfish Gene", author: "Richard Dawkins", price: "23.99€", cover: "/src/assets/images/sciences-nature/selfish-gene.jpg" },
        { id: 604, title: "Cosmos", author: "Carl Sagan", price: "27.99€", cover: "/src/assets/images/sciences-nature/cosmos.jpg" },
      ]
    },
    { 
      id: 7, 
      name: "Histoire & Géographie", 
      icon: <Globe className="w-5 h-5" />, 
      count: 1089, 
      description: "Histoire mondiale, civilisations, géopolitique, voyages",
      books: [
        { id: 701, title: "Guns, Germs, and Steel", author: "Jared Diamond", price: "28.99€", cover: "/src/assets/images/histoire-geographie/guns-germs-steel.jpg" },
        { id: 702, title: "The Silk Roads", author: "Peter Frankopan", price: "29.99€", cover: "/src/assets/images/histoire-geographie/silk-roads.jpg" },
        { id: 703, title: "SPQR", author: "Mary Beard", price: "27.99€", cover: "/src/assets/images/histoire-geographie/spqr.jpg" },
        { id: 704, title: "1491", author: "Charles C. Mann", price: "26.99€", cover: "/src/assets/images/histoire-geographie/1491.jpg" },
      ]
    },
    { 
      id: 8, 
      name: "Cuisine & Gastronomie", 
      icon: <Utensils className="w-5 h-5" />, 
      count: 445, 
      description: "Recettes, techniques culinaires, pâtisserie, cuisine du monde",
      books: [
        { id: 801, title: "Salt, Fat, Acid, Heat", author: "Samin Nosrat", price: "32.99€", cover: "/src/assets/images/cuisine-gastronomie/salt-fat-acid-heat.jpg" },
        { id: 802, title: "The Joy of Cooking", author: "Irma Rombauer", price: "35.99€", cover: "/src/assets/images/cuisine-gastronomie/joy-cooking.jpg" },
        { id: 803, title: "Mastering the Art", author: "Julia Child", price: "38.99€", cover: "/src/assets/images/cuisine-gastronomie/mastering-art.jpg" },
        { id: 804, title: "Ottolenghi Simple", author: "Yotam Ottolenghi", price: "33.99€", cover: "/src/assets/images/cuisine-gastronomie/ottolenghi-simple.jpg" },
      ]
    },
    { 
      id: 9, 
      name: "Santé & Bien-être", 
      icon: <Heart className="w-5 h-5" />, 
      count: 721, 
      description: "Nutrition, fitness, méditation, santé mentale",
      books: [
        { id: 901, title: "How Not to Die", author: "Michael Greger", price: "26.99€", cover: "/src/assets/images/sante-bien-etre/how-not-to-die.jpg" },
        { id: 902, title: "Why We Sleep", author: "Matthew Walker", price: "24.99€", cover: "/src/assets/images/sante-bien-etre/why-we-sleep.jpg" },
        { id: 903, title: "The Body Keeps Score", author: "Bessel van der Kolk", price: "28.99€", cover: "/src/assets/images/sante-bien-etre/body-keeps-score.jpg" },
        { id: 904, title: "Breath", author: "James Nestor", price: "22.99€", cover: "/src/assets/images/sante-bien-etre/breath.jpg" },
      ]
    },
    { 
      id: 10, 
      name: "Sport & Fitness", 
      icon: <Dumbbell className="w-5 h-5" />, 
      count: 356, 
      description: "Entraînement, musculation, running, sports collectifs",
      books: [
        { id: 1001, title: "Starting Strength", author: "Mark Rippetoe", price: "34.99€", cover: "/src/assets/images/sport-fitness/starting-strength.jpg" },
        { id: 1002, title: "Born to Run", author: "Christopher McDougall", price: "23.99€", cover: "/src/assets/images/sport-fitness/born-to-run.jpg" },
        { id: 1003, title: "The Sports Gene", author: "David Epstein", price: "25.99€", cover: "/src/assets/images/sport-fitness/sports-gene.jpg" },
        { id: 1004, title: "Eat & Run", author: "Scott Jurek", price: "21.99€", cover: "/src/assets/images/sport-fitness/eat-run.jpg" },
      ]
    },
    { 
      id: 11, 
      name: "Musique & Audio", 
      icon: <Music className="w-5 h-5" />, 
      count: 512, 
      description: "Théorie musicale, histoire de la musique, biographies d'artistes",
      books: [
        { id: 1101, title: "This Is Your Brain on Music", author: "Daniel Levitin", price: "24.99€", cover: "/src/assets/images/musique-audio/brain-on-music.jpg" },
        { id: 1102, title: "How Music Works", author: "David Byrne", price: "27.99€", cover: "/src/assets/images/musique-audio/how-music-works.jpg" },
        { id: 1103, title: "The Rest Is Noise", author: "Alex Ross", price: "29.99€", cover: "/src/assets/images/musique-audio/rest-is-noise.jpg" },
        { id: 1104, title: "Music Theory", author: "Tom Kolb", price: "31.99€", cover: "/src/assets/images/musique-audio/music-theory.jpg" },
      ]
    },
    { 
      id: 12, 
      name: "Photographie", 
      icon: <Camera className="w-5 h-5" />, 
      count: 289, 
      description: "Techniques photo, composition, post-production, équipement",
      books: [
        { id: 1201, title: "Understanding Exposure", author: "Bryan Peterson", price: "29.99€", cover: "/src/assets/images/photographie/understanding-exposure.jpg" },
        { id: 1202, title: "The Photographer's Eye", author: "Michael Freeman", price: "32.99€", cover: "/src/assets/images/photographie/photographers-eye.jpg" },
        { id: 1203, title: "Magnum Contact Sheets", author: "Kristen Lubben", price: "44.99€", cover: "/src/assets/images/photographie/magnum-contact-sheets.jpg" },
        { id: 1204, title: "National Geographic", author: "Annie Griffiths", price: "38.99€", cover: "/src/assets/images/photographie/national-geographic.jpg" },
      ]
    },
  ];

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-1">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar - Categories List */}
        <aside className={`
          fixed lg:sticky top-0 left-0 h-screen w-80 bg-white border-r border-gray-200 overflow-y-auto z-40
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Catégories</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none text-sm"
              />
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
                  <div className={`
                    p-2 rounded-lg
                    ${selectedCategory === category.id ? 'bg-white/20' : 'bg-blue-100'}
                  `}>
                    <div className={selectedCategory === category.id ? 'text-white' : 'text-blue-600'}>
                      {category.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-0.5">{category.name}</h3>
                    <p className={`text-xs ${selectedCategory === category.id ? 'text-blue-100' : 'text-gray-500'}`}>
                      {category.count} livres
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

        {/* Main Content - Books Display */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          {currentCategory && (
            <>
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                    {currentCategory.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
                      {currentCategory.name}
                    </h1>
                    <p className="text-gray-600 mt-1">{currentCategory.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {currentCategory.count} livres disponibles
                  </span>
                </div>
              </div>

              {/* Books Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCategory.books.map((book) => (
                  <div 
                    key={book.id}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] flex items-center justify-center">
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center text-6xl bg-gradient-to-br from-blue-100 to-blue-200">
                        📚
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-base line-clamp-2 min-h-[3rem]">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xl font-bold text-blue-600">{book.price}</span>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-colors font-medium">
                        Détails
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="mt-10 text-center">
                <button className="bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-500 px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-md">
                  Charger plus de livres
                </button>
              </div>
            </>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;