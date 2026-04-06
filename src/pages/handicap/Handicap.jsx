import React, { useEffect, useRef, useState } from "react";
import { 
  AlertCircle, 
  Brain, 
  Heart, 
  Shield, 
  Zap, 
  Eye,
  Moon,
  Lock,
  TrendingDown,
  Users,
  Activity,
  MessageCircle,
  Clock,
  Target
} from "lucide-react";

function HandicapSpirituel() {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('symptoms');
  const sectionRefs = useRef([]);

  // Animation au scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [index]: true }));
              observer.unobserve(ref);
            }
          });
        },
        observerOptions
      );

      observer.observe(ref);
      return observer;
    }).filter(Boolean);

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const symptomCards = [
    { icon: Moon, title: "Cauchemars Récurrents", desc: "Rêves oppressants, visions nocturnes perturbantes qui empêchent le repos", color: "red" },
    { icon: MessageCircle, title: "Voix Intérieures", desc: "Voix oppressantes, pensées intrusives qui tourmentent l'esprit", color: "red" },
    { icon: AlertCircle, title: "Angoisses Inexpliquées", desc: "Peurs profondes sans cause apparente, anxiété persistante", color: "red" },
    { icon: TrendingDown, title: "Blocages Inexpliqués", desc: "Échecs répétés malgré les efforts, sentiment d'être bloqué", color: "red" },
    { icon: Activity, title: "Maladies Persistantes", desc: "Troubles de santé sans cause organique claire, maladies chroniques", color: "red" },
    { icon: Lock, title: "Sentiment d'Oppression", desc: "Poids spirituel, sensation d'être observé ou contrôlé", color: "red" }
  ];

  const psychologicalCards = [
    { icon: Brain, title: "Troubles du Comportement", desc: "Changements de personnalité, sautes d'humeur inexpliquées", color: "purple" },
    { icon: Heart, title: "Crises Spirituelles", desc: "Perte de repères, doutes profonds, errance morale", color: "purple" },
    { icon: Zap, title: "Impulsivité Destructrice", desc: "Actions irréfléchies, addictions soudaines", color: "purple" },
    { icon: Eye, title: "Perception Altérée", desc: "Visions, hallucinations, sentiment de présences", color: "purple" },
    { icon: Shield, title: "Méfiance Excessive", desc: "Paranoïa, peur constante de persécution", color: "purple" },
    { icon: Clock, title: "Désorientation Temporelle", desc: "Perte de notion du temps, confusion mentale", color: "purple" }
  ];

  const socialCards = [
    { icon: Users, title: "Isolement Social", desc: "Rupture avec la famille, perte de confiance communautaire", color: "blue" },
    { icon: Heart, title: "Blocages Affectifs", desc: "Incapacité à créer ou maintenir des liens affectifs sains", color: "blue" },
    { icon: Target, title: "Échecs Professionnels", desc: "Difficultés répétées dans le travail, malchance persistante", color: "blue" },
    { icon: Lock, title: "Blocages Familiaux", desc: "Conflits récurrents, ruptures générationnelles", color: "blue" },
    { icon: TrendingDown, title: "Déchéance Sociale", desc: "Perte de statut, marginalisation progressive", color: "blue" },
    { icon: AlertCircle, title: "Stigmatisation", desc: "Rejet de la communauté, accusations de sorcellerie", color: "blue" }
  ];

  const tabConfigs = [
    { id: 'symptoms', label: 'Symptômes', icon: AlertCircle },
    { id: 'psychological', label: 'Troubles Psychiques', icon: Brain },
    { id: 'social', label: 'Impact Social', icon: Users }
  ];

  const typesOfAfflictions = [
    {
      title: "Envoûtements",
      emoji: "🔮",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-200",
      desc: "L'âme est ligotée par des pactes invisibles. Transmission de l'EVU (esprit de rébellion) par des sorciers de la famille."
    },
    {
      title: "Possessions",
      emoji: "👤",
      color: "from-red-500 to-orange-500",
      borderColor: "border-red-200",
      desc: "Intrusion d'esprits étrangers qui prennent le contrôle du corps, de l'esprit ou des émotions de la personne."
    },
    {
      title: "Malédictions",
      emoji: "⚡",
      color: "from-slate-700 to-slate-900",
      borderColor: "border-slate-300",
      desc: "Malédictions familiales ou individuelles qui enferment dans des cycles de malheur générationnels."
    },
    {
      title: "Blocages Mystiques",
      emoji: "🔒",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-200",
      desc: "Paralysie du destin, de la fécondité de la vie, empêchant toute évolution spirituelle ou matérielle."
    },
    {
      title: "Esclavage Spirituel (Kong)",
      emoji: "⛓️",
      color: "from-amber-600 to-yellow-600",
      borderColor: "border-amber-200",
      desc: "La personne est exploitée dans le monde invisible, travaillant spirituellement pour des sorciers."
    },
    {
      title: "Troubles Comportementaux",
      emoji: "🌀",
      color: "from-emerald-600 to-green-600",
      borderColor: "border-emerald-200",
      desc: "Fruit d'une guerre intérieure entre la lumière et les ténèbres, manifestations de déviances."
    }
  ];

  const renderTabContent = () => {
    const cards = activeTab === 'symptoms' 
      ? symptomCards 
      : activeTab === 'psychological' 
      ? psychologicalCards 
      : socialCards;
    
    const borderColors = {
      red: "border-red-200 hover:border-red-400",
      purple: "border-purple-200 hover:border-purple-400",
      blue: "border-blue-200 hover:border-blue-400"
    };

    const gradientColors = {
      red: "from-red-100 to-orange-100",
      purple: "from-purple-100 to-pink-100",
      blue: "from-blue-100 to-cyan-100"
    };

    const iconColors = {
      red: "text-red-600",
      purple: "text-purple-600",
      blue: "text-blue-600"
    };

    return cards.map((item, index) => (
      <div
        key={index}
        className={`bg-white p-6 rounded-xl shadow-lg border-2 ${borderColors[item.color]} hover:shadow-xl transition-all duration-300 group`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className={`bg-gradient-to-br ${gradientColors[item.color]} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
          <item.icon className={`w-6 h-6 ${iconColors[item.color]}`} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-amber-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 border-4 border-purple-500 transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-emerald-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-4 border-pink-500 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-medium">
                Comprendre pour Guérir
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Comprendre le{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Handicap Spirituel
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Une souffrance profonde qui atteint le centre même de l'être : le lieu de la foi,
              de l'espérance, de la paix intérieure et de la relation à Dieu
            </p>

            <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500/20 to-purple-600/20 backdrop-blur-lg border-2 border-amber-400/50 rounded-2xl p-4 sm:p-6">
              <p className="text-lg sm:text-xl md:text-2xl font-bold italic text-amber-300 leading-relaxed">
                "Au Centre, nous voyons une personne qui souffre,
                <br className="hidden sm:block" />
                pas un problème à condamner."
              </p>
              <p className="text-sm sm:text-base text-blue-200 mt-2">
                — Centre Marie Reine de la Miséricorde d'Abili
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 sm:h-24 fill-current text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Section Définition */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 transition-all duration-1000 ${isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Eye className="w-4 h-4 text-blue-700" />
              <span className="text-blue-800 text-xs sm:text-sm font-semibold">
                Définition
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Qu'est-ce que le Handicap Spirituel ?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 border-purple-500">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Vision Africaine de l'Homme
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  Dans l'anthropologie africaine, l'homme ne se réduit jamais à sa chair.
                  Il est <strong className="text-purple-600">souffle</strong>,{" "}
                  <strong className="text-purple-600">parole</strong>,{" "}
                  <strong className="text-purple-600">mémoire</strong>,{" "}
                  <strong className="text-purple-600">lien</strong>,{" "}
                  <strong className="text-purple-600">héritage</strong>, et demeure
                  ouvert au monde invisible.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Lorsque cet équilibre est rompu, lorsque l'esprit est blessé, captif
                  ou envahi, survient ce que la MTHS nomme le{" "}
                  <strong className="text-purple-600">handicap spirituel</strong>.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-2xl border-2 border-purple-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-purple-600" />
                  Une Souffrance Profonde
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Le handicap spirituel est une souffrance profonde qui atteint le{" "}
                  <strong className="text-purple-600">centre même de l'être</strong> :
                  le lieu de la foi, de l'espérance, de la paix intérieure et de la
                  relation à Dieu, aux ancêtres et à la communauté.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-2xl border-2 border-amber-300">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                  Au-delà de la Biomédecine
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Ces troubles débordent les cadres de la biomédecine classique et
                  prennent racine dans des <strong className="text-amber-600">conflits mystiques</strong>,
                  des <strong className="text-amber-600">alliances occultes</strong>,
                  des <strong className="text-amber-600">ruptures spirituelles</strong> ou
                  des <strong className="text-amber-600">transmissions transgénérationnelles</strong>.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-purple-100 p-8 sm:p-10 rounded-3xl shadow-2xl border-4 border-white">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 border-4 border-purple-400 rounded-full opacity-60 animate-ping-slow"></div>
                    <div className="absolute top-8 right-8 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Âme
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-60 h-60 sm:w-72 sm:h-72 border-4 border-blue-400 rounded-full opacity-40"></div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Corps
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full border-4 border-emerald-400 rounded-full opacity-30"></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Communauté
                    </div>
                  </div>

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-amber-500 text-white p-2 rounded-lg text-xs font-bold shadow-lg">
                      Foi
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="bg-amber-500 text-white p-2 rounded-lg text-xs font-bold shadow-lg">
                      Espérance
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="bg-amber-500 text-white p-2 rounded-lg text-xs font-bold shadow-lg">
                      Paix
                    </div>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div className="bg-amber-500 text-white p-2 rounded-lg text-xs font-bold shadow-lg">
                      Relation
                    </div>
                  </div>
                </div>

                <p className="text-center text-slate-600 text-sm mt-6 font-medium">
                  Unité sacrée : Corps, Âme, Esprit, Communauté
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Symptômes */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-100 to-blue-100 transition-all duration-1000 ${isVisible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Activity className="w-4 h-4 text-red-700" />
              <span className="text-red-800 text-xs sm:text-sm font-semibold">
                Signes et Manifestations
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Comment se Manifeste-t-il ?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-8 sm:mb-12">
            {tabConfigs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200'
                  }`}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* Section Types d'Atteintes */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 transition-all duration-1000 ${isVisible[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Shield className="w-4 h-4 text-amber-700" />
              <span className="text-amber-800 text-xs sm:text-sm font-semibold">
                Classifications
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Types d'Atteintes Spirituelles
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {typesOfAfflictions.map((type, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>

                <div className="p-6 sm:p-8">
                  <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {type.emoji}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {type.title}
                  </h3>

                  <div className={`w-16 h-1 bg-gradient-to-r ${type.color} rounded-full mb-4`}></div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {type.desc}
                  </p>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-2">
                  Important à Savoir
                </h4>
                <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
                  Ces atteintes peuvent se combiner et créer des situations complexes. La MTHS
                  offre un diagnostic spirituel précis pour identifier les causes profondes et
                  proposer un accompagnement adapté. Chaque personne est unique et mérite un
                  parcours personnalisé de guérison.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Message Pastoral */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white relative overflow-hidden transition-all duration-1000 ${isVisible[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <span className="text-amber-300 text-xs sm:text-sm font-semibold">
              Notre Approche Pastorale
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            Regard Pastoral et Humain
          </h2>

          <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
              Face à ces réalités, la MTHS adopte un regard profondément pastoral et humain,
              fidèle à l'Évangile et à la sagesse africaine.
            </p>

            <div className="bg-gradient-to-r from-amber-400/20 to-pink-400/20 rounded-xl p-6 sm:p-8 border-2 border-amber-400/50">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold italic text-amber-300 leading-relaxed">
                "Au Centre, nous voyons une personne qui souffre,
                <br className="hidden sm:block" />
                pas un problème à condamner"
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-300">Une Âme en Quête</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Derrière chaque trouble se tient une âme en quête de paix
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-3">💔</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-pink-300">Une Histoire Blessée</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Derrière chaque dérive une histoire blessée qui mérite compassion
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-purple-300">Un Appel à la Liberté</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Derrière chaque possession un enfant de Dieu appelé à la liberté
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/parcours"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-2xl shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              Découvrir le Parcours de Guérison
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default HandicapSpirituel;