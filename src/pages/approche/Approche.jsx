import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { 
  Stethoscope, 
  Leaf, 
  Droplet, 
  Zap, 
  Users,
  Search,
  Shield,
  BookOpen,
  Target,
  Sparkles,
  Heart,
  CheckCircle2,
  ArrowRight,
  RefreshCw
} from "lucide-react";

function Approche() {
  const [isVisible, setIsVisible] = useState({});
  const [activePillar, setActivePillar] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
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

  // Auto-rotation des piliers
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const pillars = [
    {
      id: 1,
      icon: Stethoscope,
      title: "Diagnostic Spirituel et Psychosomatique",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      description: "À l'image du devin traditionnel qui interroge les signes, mais à la lumière de l'Esprit Saint, le thérapeute MTHS discerne l'origine visible et invisible de la souffrance.",
      details: [
        "Écoute de l'histoire personnelle et familiale",
        "Observation des rêves, peurs et blocages",
        "Lecture des traces laissées par les conflits mystiques",
        "Discernement des héritages familiaux",
        "Identification des transgressions spirituelles",
        "Détection des attaques occultes"
      ],
      quote: "Le corps parle, l'âme murmure, l'esprit révèle."
    },
    {
      id: 2,
      icon: Leaf,
      title: "Naturopathie et Remèdes Traditionnels Améliorés",
      color: "from-emerald-600 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      description: "La médecine de la terre, don du Créateur à l'Afrique. Racines, feuilles, écorces, semences et produits de la ruche deviennent instruments de restauration.",
      details: [
        "Pharmacopée traditionnelle africaine purifiée",
        "Remèdes Traditionnels Améliorés (RTA) certifiés",
        "Tisanes thérapeutiques et aromiels",
        "Produits naturels (Moringa, Essingang)",
        "Encadrement par protocoles rigoureux",
        "Prière de purification sur les remèdes"
      ],
      quote: "La nature elle-même participe au combat pour la vie."
    },
    {
      id: 3,
      icon: Droplet,
      title: "Rituels de Purification (Rite SO'O Inculturé)",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      description: "Dans la tradition béti, le rite SO'O marquait la sortie de l'enfance. Inculturé dans la foi chrétienne, il devient chemin de purification intérieure.",
      details: [
        "Purification par l'eau sacrée",
        "Réconciliation avec Dieu et les ancêtres",
        "Pénitence et confession thérapeutique",
        "Prière de délivrance",
        "Réintégration dans l'ordre sacré",
        "Lien avec la Passion du Christ"
      ],
      quote: "Par l'eau, la parole et la prière, les souillures spirituelles sont lavées."
    },
    {
      id: 4,
      icon: Zap,
      title: "Délivrance et Désenvoûtement",
      color: "from-amber-600 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      description: "Le combat central : confrontation avec les puissances d'oppression, les esprits de servitude et les alliances de sorcellerie.",
      details: [
        "Autorité du Christ invoquée",
        "Intercession de la Vierge Marie",
        "Techniques thérapeutiques codifiées MTHS",
        "Libération de l'âme captive",
        "Rupture des chaînes invisibles",
        "Expulsion des esprits maléfiques"
      ],
      quote: "Les chaînes invisibles sont brisées, la lumière reprend possession de l'être."
    },
    {
      id: 5,
      icon: Users,
      title: "Rééducation Morale et Réinsertion Sociale",
      color: "from-red-600 to-rose-600",
      bgColor: "from-red-50 to-rose-50",
      description: "La guérison ne s'arrête pas à la délivrance. Le patient est accompagné dans la reconstruction de sa vie morale, familiale et communautaire.",
      details: [
        "Enseignement moral et spirituel",
        "Reconstruction de la vie familiale",
        "Accompagnement professionnel",
        "Réintégration dans la communauté",
        "Discipline de vie et responsabilité",
        "Formation à marcher dans la vérité"
      ],
      quote: "La liberté retrouvée doit être durable et féconde."
    }
  ];

  const protocol = [
    {
      number: 1,
      title: "Identification",
      icon: Search,
      color: "from-blue-600 to-cyan-600",
      description: "Reconnaître la nature spirituelle du mal et nommer ce qui opprime",
      details: [
        "Écoute attentive de la personne",
        "Analyse des symptômes spirituels",
        "Discernement des racines du mal",
        "Identification des esprits en cause"
      ]
    },
    {
      number: 2,
      title: "Maîtrise",
      icon: Shield,
      color: "from-emerald-600 to-green-600",
      description: "Contenir les forces en jeu et sécuriser la personne dans un cadre sacré",
      details: [
        "Protection spirituelle du patient",
        "Mise en sécurité dans un lieu saint",
        "Prières de protection",
        "Encadrement par des thérapeutes formés"
      ]
    },
    {
      number: 3,
      title: "Confession Thérapeutique",
      icon: BookOpen,
      color: "from-purple-600 to-pink-600",
      description: "Libérer la parole, révéler les alliances cachées, purifier la mémoire",
      details: [
        "Confession des péchés et transgressions",
        "Révélation des pactes occultes",
        "Pardon et réconciliation",
        "Purification de la mémoire familiale"
      ]
    },
    {
      number: 4,
      title: "Anéantissement de l'Envoûtement",
      icon: Zap,
      color: "from-amber-600 to-orange-600",
      description: "Briser les pactes, chasser les esprits, restaurer l'autorité de Dieu",
      details: [
        "Rupture des liens mystiques",
        "Exorcisme et délivrance",
        "Destruction de l'EVU (esprit de rébellion)",
        "Restauration de la souveraineté divine"
      ]
    },
    {
      number: 5,
      title: "Resocialisation",
      icon: Users,
      color: "from-red-600 to-rose-600",
      description: "Réintégrer l'initié dans la communauté des vivants, des croyants et des responsables",
      details: [
        "Réintégration familiale",
        "Accompagnement social",
        "Formation à la vie chrétienne",
        "Suivi post-guérison"
      ]
    }
  ];

  const CurrentPillarIcon = pillars[activePillar].icon;
  const currentPillar = pillars[activePillar];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-emerald-800 to-teal-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-amber-500 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-emerald-400"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border-4 border-pink-500 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/4 w-36 h-36 border-4 border-cyan-400 transform rotate-45"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span className="text-emerald-300 text-xs sm:text-sm font-medium">
                Guérison Holistique
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Notre{" "}
              <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                Approche Thérapeutique
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
              Dans la vision africaine de l'homme, la maladie n'est jamais un simple accident
              biologique. Elle est le signe d'un déséquilibre profond entre le corps, l'âme,
              l'esprit, la communauté et le monde invisible.
            </p>

            <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-500/20 to-emerald-600/20 backdrop-blur-lg border-2 border-amber-400/50 rounded-2xl p-4 sm:p-6">
              <p className="text-lg sm:text-xl font-bold italic text-amber-300 leading-relaxed">
                "Comme l'initié traverse l'ombre pour accéder à la lumière, le patient est
                conduit vers la restauration de son identité spirituelle, morale et sociale."
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

      {/* Section Les 5 Piliers */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 transition-all duration-1000 ${
          isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-blue-700" />
              <span className="text-blue-800 text-xs sm:text-sm font-semibold">
                Les Fondations de la MTHS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Les 5 Piliers de la MTHS
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-700 mx-auto rounded-full"></div>
            <p className="text-slate-600 text-base sm:text-lg mt-6 max-w-3xl mx-auto">
              Cinq piliers sacrés qui structurent toute l'œuvre thérapeutique,
              guidant le patient du diagnostic à la réinsertion.
            </p>
          </div>

          {/* Navigation Piliers */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
            {pillars.map((pillar, index) => {
              const PillarIcon = pillar.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                    activePillar === index
                      ? `bg-gradient-to-r ${pillar.color} text-white shadow-xl scale-105`
                      : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200'
                  }`}
                >
                  <PillarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden lg:inline">{pillar.title}</span>
                  <span className="lg:hidden">Pilier {index + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Contenu Pilier Actif */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Texte */}
            <div className="space-y-6">
              <div className={`bg-gradient-to-br ${currentPillar.bgColor} p-6 sm:p-8 rounded-2xl shadow-xl border-l-4 ${currentPillar.color.split(' ')[0].replace('from-', 'border-')}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${currentPillar.color} p-3 sm:p-4 rounded-xl flex-shrink-0`}>
                    <CurrentPillarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 mb-1">
                      PILIER {activePillar + 1}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  {currentPillar.description}
                </p>

                {/* Liste détails */}
                <div className="space-y-3">
                  {currentPillar.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-lg"
                    >
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${currentPillar.color} bg-clip-text text-transparent`} />
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Citation */}
              <div className={`bg-gradient-to-r ${currentPillar.color} p-6 sm:p-8 rounded-2xl shadow-2xl`}>
                <p className="text-white text-base sm:text-lg font-bold italic leading-relaxed text-center">
                  "{currentPillar.quote}"
                </p>
              </div>
            </div>

            {/* Visuel */}
            <div className="relative">
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border-4 border-slate-100">
                {/* Cercle central avec icône */}
                <div className="relative w-full aspect-square max-w-md mx-auto mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br ${currentPillar.color} rounded-full flex items-center justify-center shadow-2xl`}>
                      <CurrentPillarIcon className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${currentPillar.color} bg-clip-text text-transparent`}>
                      {activePillar + 1}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 mt-1">Pilier</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${currentPillar.color} bg-clip-text text-transparent`}>
                      {currentPillar.details.length}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 mt-1">Aspects</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${currentPillar.color} bg-clip-text text-transparent`}>
                      100%
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 mt-1">Holistique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Protocole */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden transition-all duration-1000 ${
          isVisible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm font-semibold">
                Protocole Initiatique
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Protocole en 5 Étapes
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full"></div>
            <p className="text-blue-100 text-base sm:text-lg mt-6 max-w-3xl mx-auto">
              Comparable aux grandes étapes de l'initiation africaine : de la nuit à l'aube,
              de la captivité à la liberté, de la mort spirituelle à la vie en Dieu.
            </p>
          </div>

          {/* Timeline Verticale */}
          <div className="max-w-4xl mx-auto">
            {protocol.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative flex gap-6 sm:gap-8 mb-8 sm:mb-12 last:mb-0 cursor-pointer transition-all duration-300 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-[1.02]'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Timeline Line */}
                  {index < protocol.length - 1 && (
                    <div className="absolute left-6 sm:left-8 top-16 sm:top-20 w-0.5 h-full bg-gradient-to-b from-amber-400 to-emerald-400 opacity-30"></div>
                  )}

                  {/* Number Circle */}
                  <div className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl z-10 ${
                    activeStep === index ? 'ring-4 ring-amber-400 ring-offset-4 ring-offset-slate-900' : ''
                  }`}>
                    <span className="text-xl sm:text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 bg-white/10 backdrop-blur-sm border-2 ${
                    activeStep === index ? 'border-amber-400 bg-white/20' : 'border-white/20'
                  } rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${step.color} p-2 sm:p-3 rounded-xl`}>
                        <StepIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Détails (visible si active) */}
                    {activeStep === index && (
                      <div className="mt-4 pt-4 border-t border-white/20 grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"
                          >
                            <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span className="text-blue-100 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Citation Finale */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-500/20 to-emerald-600/20 backdrop-blur-lg border-2 border-amber-400/50 rounded-2xl p-6 sm:p-8">
              <p className="text-lg sm:text-xl md:text-2xl font-bold italic text-amber-300 leading-relaxed">
                "Ainsi, la thérapie devient un véritable passage de la nuit à l'aube,
                de la captivité à la liberté, de la mort spirituelle à la vie en Dieu."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-emerald-50 transition-all duration-1000 ${
          isVisible[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 text-center border-4 border-slate-100">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 sm:px-6 py-2 mb-6">
              <Heart className="w-4 h-4 text-emerald-700" />
              <span className="text-emerald-800 text-xs sm:text-sm font-semibold">
                Commencez Votre Guérison
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              Prêt à Entamer Votre Parcours de Transformation ?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Le Centre MARIE REINE DE LA MISÉRICORDE D'ABILI vous accompagne avec les 5 piliers
              de la MTHS et un protocole éprouvé pour restaurer votre corps, âme et esprit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/parcours"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-emerald-900/30 transition-all duration-300 hover:scale-105"
              >
                <RefreshCw className="w-5 h-5" />
                Découvrir le Parcours Complet
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-700 hover:bg-emerald-50 text-emerald-900 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
              >
                <Heart className="w-5 h-5" />
                Prendre Rendez-vous
              </a>
            </div>

            {/* Info Contact */}
            <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-200">
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-blue-600 text-xs font-semibold mb-1">📞 URGENCE 24/7</div>
                  <div className="text-blue-900 font-bold text-sm sm:text-base">+237 693 21 54 31</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <div className="text-emerald-600 text-xs font-semibold mb-1">📧 EMAIL</div>
                  <div className="text-emerald-900 font-bold text-sm sm:text-base">contact@mths-abili.org</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl">
                  <div className="text-amber-600 text-xs font-semibold mb-1">📍 LOCALISATION</div>
                  <div className="text-amber-900 font-bold text-sm sm:text-base">Abili, 27km Yaoundé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Approche;