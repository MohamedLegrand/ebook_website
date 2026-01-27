import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { 
  Sparkles, Heart, BookOpen, Cross, MapPin, Users, 
  Leaf, Shield, Clock, ArrowRight, Star, Award,
  Target, CheckCircle, Calendar, MessageCircle, Home,
  Brain, Activity, ShieldAlert, Globe, Book, Video,
  PhoneCall, Mail, ChevronDown
} from "lucide-react";

function Mths() {
  const [isVisible, setIsVisible] = useState({});
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeTestimony, setActiveTestimony] = useState(0);
  const sectionRefs = useRef([]);

  // Animation au scroll
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const nextTestimony = () => {
    setActiveTestimony((prev) => (prev + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setActiveTestimony((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };

  // Données pour les témoignages
  const testimonies = [
    {
      name: "Marie K.",
      age: 42,
      city: "Douala",
      condition: "Dépression chronique",
      testimony: "Après 10 ans de traitements sans succès, la MTHS m'a redonné l'espoir. En 6 mois, j'ai retrouvé la paix intérieure et le goût de vivre.",
      duration: "6 mois de suivi",
      rating: 5
    },
    {
      name: "Jean-Pierre N.",
      age: 35,
      city: "Yaoundé",
      condition: "Addictions multiples",
      testimony: "Le parcours MTHS m'a libéré de mes dépendances. L'approche holistique a traité la cause spirituelle de mes addictions.",
      duration: "8 mois de traitement",
      rating: 5
    },
    {
      name: "Amina D.",
      age: 28,
      city: "Garoua",
      condition: "Maladies inexpliquées",
      testimony: "Les médecins ne trouvaient pas la cause de mes maux. La MTHS a identifié un handicap spirituel familial. Aujourd'hui, je suis guérie.",
      duration: "4 mois d'accompagnement",
      rating: 5
    }
  ];

  // Données pour la FAQ
  const faqItems = [
    {
      question: "Quelle est la différence entre la MTHS et la médecine conventionnelle ?",
      answer: "La MTHS complète la médecine conventionnelle en traitant les dimensions spirituelle et psychologique des maladies. Alors que la médecine moderne traite les symptômes physiques, la MTHS s'attaque aux causes spirituelles profondes tout en respectant les traitements médicaux."
    },
    {
      question: "Combien de temps dure un parcours de guérison ?",
      answer: "La durée varie selon chaque personne et la complexité de sa situation. En moyenne, un parcours complet dure entre 3 et 12 mois, avec des séances régulières et un suivi personnalisé."
    },
    {
      question: "La MTHS est-elle reconnue par les autorités ?",
      answer: "Oui, la MTHS est reconnue par la loi camerounaise sur la médecine traditionnelle (Loi N° 2068/PJL/AN de 2024) et bénéficie du soutien des autorités ecclésiales locales."
    },
    {
      question: "Peut-on suivre un traitement à distance ?",
      answer: "Pour des raisons d'efficacité thérapeutique, nous recommandons fortement la présence physique au Centre d'Abili. Cependant, un suivi à distance est possible pour certaines étapes après une première évaluation sur place."
    },
    {
      question: "Quels sont les tarifs des soins ?",
      answer: "Les contributions sont adaptées aux possibilités de chacun. Le centre fonctionne sur le principe de la solidarité : ceux qui le peuvent contribuent davantage pour aider ceux qui ont moins de moyens."
    }
  ];

  // Données pour les pathologies
  const pathologies = [
    { name: "Dépression & Anxiété", icon: "😔", category: "Psychologique" },
    { name: "Addictions diverses", icon: "🚬", category: "Comportemental" },
    { name: "Maladies chroniques", icon: "🩺", category: "Physique" },
    { name: "Problèmes familiaux", icon: "👨‍👩‍👧‍👦", category: "Relationnel" },
    { name: "Échecs répétés", icon: "📉", category: "Existentiel" },
    { name: "Mauvais sorts", icon: "🔮", category: "Spirituel" },
    { name: "Solitude existentielle", icon: "🏝️", category: "Social" },
    { name: "Maladies inexpliquées", icon: "❓", category: "Médical" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white">
        {/* Motifs Décoratifs Africains */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-amber-500 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-emerald-500 transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rounded-full opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-fadeIn">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm font-medium">
                Médecine Holistique Révélée
              </span>
            </div>

            {/* Titre Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-slideInUp">
              Qu'est-ce que la{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                MTHS
              </span>{" "}
              ?
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: "0.2s" }}>
              La Médecine Traditionnelle des Handicapés Spirituels
            </p>

            <p className="text-sm sm:text-base md:text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: "0.4s" }}>
              Une médecine holistique révélée qui unit la sagesse ancestrale africaine,
              la spiritualité chrétienne et les thérapies naturelles pour guérir ce que
              l'œil humain ne voit pas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 animate-slideInUp" style={{ animationDelay: "0.6s" }}>
              <a
                href="/parcours"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-2xl shadow-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/70"
              >
                <Heart className="w-5 h-5" />
                Découvrir le Parcours
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Nous Contacter
              </a>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 sm:h-24 fill-current text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Section Origine et Révélation */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 transition-all duration-1000 ${
          isVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-blue-700" />
              <span className="text-blue-800 text-xs sm:text-sm font-semibold">
                Origine Divine
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Origine et Révélation
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-700 mx-auto rounded-full"></div>
          </div>

          {/* Contenu Principal */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Colonne Texte */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 sm:p-8 rounded-2xl border-l-4 border-amber-500 shadow-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-500 p-3 rounded-xl flex-shrink-0">
                    <Cross className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                      12 Mai 1979 - Abili, Cameroun
                    </h3>
                    <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                      Dans le silence des forêts d'Abili, là où la terre rouge du Cameroun
                      se mêle aux prières anciennes des ancêtres et aux supplications
                      montantes vers le Ciel, une histoire singulière a pris naissance.
                    </p>
                  </div>
                </div>

                <p className="text-blue-800 text-sm sm:text-base leading-relaxed mb-4">
                  Un adolescent orphelin, <strong>Jean Paul Sylvain SIDA ABENA</strong>,
                  brisé par la maladie, la solitude et la souffrance, se tient au seuil
                  de la vie, implorant Dieu de mettre fin à son calvaire.
                </p>

                <p className="text-blue-800 text-sm sm:text-base leading-relaxed mb-4">
                  C'est alors que l'invisible se fait lumière, et que le Ciel s'incline
                  vers la terre : <strong className="text-amber-600">la Sainte Vierge Marie lui apparaît</strong>.
                </p>

                <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-blue-200">
                  <p className="text-blue-900 text-sm sm:text-base italic leading-relaxed font-medium">
                    "Cette rencontre n'est pas seulement une consolation ; elle est une
                    investiture. La Mère de Miséricorde lui révèle une mission : devenir
                    instrument de guérison, de conversion et de délivrance."
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-200">
                <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  Chronologie de la Révélation
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      date: "12 Mai 1979",
                      title: "Première Apparition",
                      desc: "La Vierge Marie apparaît à Jean Paul Sylvain SIDA ABENA"
                    },
                    {
                      date: "1979-1980",
                      title: "Révélation de la MTHS",
                      desc: "Mission divine de guérison, conversion et délivrance"
                    },
                    {
                      date: "Années 1980",
                      title: "Fondation du Centre",
                      desc: "Création du Centre MARIE REINE DE LA MISÉRICORDE D'ABILI"
                    },
                    {
                      date: "Aujourd'hui",
                      title: "Rayonnement International",
                      desc: "La MTHS au service de l'humanité souffrante"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        {index < 3 && (
                          <div className="w-0.5 flex-1 bg-gradient-to-b from-amber-500 to-blue-300 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-amber-600 text-xs sm:text-sm font-bold mb-1">
                          {item.date}
                        </p>
                        <h5 className="text-blue-900 font-bold text-sm sm:text-base mb-1">
                          {item.title}
                        </h5>
                        <p className="text-blue-700 text-xs sm:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne Image/Visuel */}
            <div className="relative">
              {/* Card Principale */}
              <div className="relative bg-gradient-to-br from-blue-100 to-emerald-100 p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-white">
                {/* Halo lumineux */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-blue-600/20 rounded-3xl blur-2xl"></div>

                <div className="relative">
                  {/* Croix Centrale */}
                  <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-12 sm:p-16 rounded-2xl shadow-2xl mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                    <Cross className="w-full h-full text-amber-400 relative z-10" strokeWidth={3} />
                  </div>

                  {/* Texte Mission */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
                      Mission Divine
                    </h3>
                    <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-amber-300">
                      <p className="text-blue-800 text-sm sm:text-base italic font-medium leading-relaxed">
                        "Maintenant que j'ai fait de toi mon fils adoptif, le prophète de
                        la miséricorde divine et mon messager : vas révéler aux hommes
                        sur Terre la Médecine Traditionnelle des Handicapés Spirituels."
                      </p>
                      <p className="text-amber-600 font-bold text-xs sm:text-sm mt-3">
                        — La Vierge Marie à Jean Paul Sylvain SIDA ABENA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Décorations flottantes */}
              <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-amber-400 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-blue-600 rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Les 5 Piliers Fondamentaux */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white transition-all duration-1000 ${
          isVisible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm font-semibold">
                Fondements Doctrinaux
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Les 5 Piliers Fondamentaux de la MTHS
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                number: "01",
                title: "Spiritualité Chrétienne Inculturée",
                description: "Intégration de la foi chrétienne dans le contexte africain, respectant les traditions ancestrales purifiées par l'Évangile.",
                icon: "✝️",
                color: "from-amber-500 to-orange-600"
              },
              {
                number: "02",
                title: "Pharmacopée Traditionnelle Validée",
                description: "Utilisation scientifique des plantes médicinales africaines, étudiées et validées par la recherche moderne.",
                icon: "🌿",
                color: "from-emerald-500 to-green-600"
              },
              {
                number: "03",
                title: "Psychologie Communautaire Africaine",
                description: "Approche thérapeutique qui considère l'individu dans son contexte familial et communautaire.",
                icon: "👥",
                color: "from-blue-500 to-cyan-600"
              },
              {
                number: "04",
                title: "Rituels de Purification Sacrés",
                description: "Pratiques rituelles transformées à la lumière du Christ pour la délivrance et la guérison.",
                icon: "🔥",
                color: "from-purple-500 to-pink-600"
              },
              {
                number: "05",
                title: "Éthique de Solidarité Africaine",
                description: "Système de soins basé sur l'entraide communautaire et la responsabilité partagée.",
                icon: "🤝",
                color: "from-red-500 to-yellow-600"
              }
            ].map((pillar, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${pillar.color} text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold`}>
                    {pillar.number}
                  </div>
                  <div className="text-3xl">{pillar.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Note importante */}
          <div className="bg-white/10 backdrop-blur-lg border-2 border-amber-400/30 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-8 h-8 text-amber-400 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-amber-300 mb-2">⚠️ Avertissement Important</h4>
                <p className="text-blue-100 text-sm">
                  La MTHS <strong className="text-white">complète</strong> la médecine moderne et ne la remplace en aucun cas.
                  Nous insistons sur la nécessité de consulter un médecin pour tout problème de santé.
                  Notre approche traite les dimensions spirituelle et psychologique des maladies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parcours du Patient */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 transition-all duration-1000 ${
          isVisible[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Target className="w-4 h-4 text-blue-700" />
              <span className="text-blue-800 text-xs sm:text-sm font-semibold">
                Chemin de Guérison
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Parcours Thérapeutique MTHS
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-700 mx-auto rounded-full"></div>
          </div>

          {/* Étapes du parcours */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Accueil et Évaluation Initiale",
                description: "Premier contact, écoute bienveillante, analyse des besoins et évaluation globale de la situation.",
                duration: "1-2 séances",
                icon: "👂"
              },
              {
                step: "2",
                title: "Diagnostic Spirituel et Psychologique",
                description: "Identification des blocages spirituels, analyse des liens familiaux, compréhension des traumatismes.",
                duration: "2-3 séances",
                icon: "🔍"
              },
              {
                step: "3",
                title: "Prière et Sacrements de Guérison",
                description: "Confession, réconciliation, prières de délivrance, imposition des mains, Eucharistie.",
                duration: "Variables",
                icon: "🙏"
              },
              {
                step: "4",
                title: "Traitements Naturels et Traditionnels",
                description: "Utilisation de plantes médicinales, bains thérapeutiques, régimes alimentaires adaptés.",
                duration: "3-6 mois",
                icon: "🌿"
              },
              {
                step: "5",
                title: "Réconciliation Familiale et Communautaire",
                description: "Travail sur les relations familiales, pardon mutuel, réintégration sociale.",
                duration: "2-3 mois",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                step: "6",
                title: "Suivi et Consolidation",
                description: "Accompagnement à long terme, prévention des rechutes, intégration communautaire.",
                duration: "6-12 mois",
                icon: "🛡️"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-6 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">{step.icon}</span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-blue-900">{step.title}</h3>
                      <div className="flex items-center gap-2 text-blue-600 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pathologies Traitées */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white transition-all duration-1000 ${
          isVisible[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Activity className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm font-semibold">
                Domaines d'Intervention
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Pathologies et Situations Traitées
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pathologies.map((pathology, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{pathology.icon}</div>
                <div className="text-center mb-2">
                  <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {pathology.category}
                  </span>
                </div>
                <h3 className="text-center text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pathology.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Statistiques */}
          <div className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-center text-amber-300 mb-6">
              📊 Impact Thérapeutique
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { value: "85%", label: "Amélioration significative" },
                { value: "10.000+", label: "Personnes accompagnées" },
                { value: "40+", label: "Années d'expérience" },
                { value: "70%", label: "Guérison complète" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 transition-all duration-1000 ${
          isVisible[4] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 sm:px-6 py-2 mb-4">
              <MessageCircle className="w-4 h-4 text-blue-700" />
              <span className="text-blue-800 text-xs sm:text-sm font-semibold">
                Histoires de Vie
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Témoignages de Guérison
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-700 mx-auto rounded-full"></div>
          </div>

          {/* Carousel des témoignages */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border-2 border-blue-200">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Photo du témoin (placeholder) */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-4xl mb-4">
                        {testimonies[activeTestimony].name.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">{testimonies[activeTestimony].name}</h3>
                      <p className="text-blue-600">{testimonies[activeTestimony].age} ans • {testimonies[activeTestimony].city}</p>
                      <div className="mt-2 inline-flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
                        <Activity className="w-3 h-3 text-blue-600" />
                        <span className="text-blue-700 text-sm font-medium">{testimonies[activeTestimony].condition}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenu du témoignage */}
                <div className="lg:w-2/3">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-blue-800 text-lg italic leading-relaxed mb-6">
                      "{testimonies[activeTestimony].testimony}"
                    </p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{testimonies[activeTestimony].duration}</span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevTestimony}
                      className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <ArrowRight className="w-6 h-6 text-blue-700 transform rotate-180" />
                    </button>
                    <div className="flex gap-2">
                      {testimonies.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTestimony(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === activeTestimony ? 'bg-blue-700 w-6' : 'bg-blue-300'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextTestimony}
                      className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <ArrowRight className="w-6 h-6 text-blue-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section
        ref={addToRefs}
        className={`py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white transition-all duration-1000 ${
          isVisible[5] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400 rounded-full px-4 sm:px-6 py-2 mb-4">
              <Book className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-xs sm:text-sm font-semibold">
                Questions Fréquentes
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Questions Fréquentes sur la MTHS
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500/20 p-2 rounded-lg">
                      <span className="text-amber-300 font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-amber-400 transition-transform duration-300 ${
                      activeFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-white/20 pt-6">
                      <p className="text-blue-100 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact direct */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-amber-500/20 to-blue-600/20 backdrop-blur-lg border-2 border-amber-400/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4">
                Vous avez d'autres questions ?
              </h3>
              <p className="text-blue-100 mb-6">
                Notre équipe est disponible pour répondre à toutes vos interrogations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+237693215431"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                >
                  <PhoneCall className="w-5 h-5" />
                  Appeler maintenant
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Écrire un message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
            Prêt à Commencer Votre Parcours de Guérison ?
          </h2>
          <p className="text-base sm:text-lg text-blue-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Le Centre MARIE REINE DE LA MISÉRICORDE D'ABILI vous accompagne avec compassion,
            dignité et professionnalisme sur le chemin de la guérison intégrale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/parcours"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-blue-900/30 transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              Découvrir le Parcours
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-700 hover:bg-blue-50 text-blue-900 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              Nous Contacter
            </a>
          </div>

          {/* Info Contact Rapide */}
          <div className="mt-8 sm:mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-blue-200">
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <p className="text-blue-600 text-xs font-semibold mb-1">📞 TÉLÉPHONE</p>
                <p className="text-blue-900 font-bold text-sm sm:text-base">+237 693 21 54 31</p>
                <p className="text-blue-900 font-bold text-sm sm:text-base">+237 677 31 44 12</p>
              </div>
              <div>
                <p className="text-blue-600 text-xs font-semibold mb-1">📧 EMAIL</p>
                <p className="text-blue-900 font-bold text-sm sm:text-base">contact@mths-abili.org</p>
              </div>
              <div>
                <p className="text-blue-600 text-xs font-semibold mb-1">📍 ADRESSE</p>
                <p className="text-blue-900 font-bold text-sm sm:text-base">Abili, 27 km de Yaoundé</p>
                <p className="text-blue-900 font-bold text-sm sm:text-base">Cameroun</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-200">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Lun-Sam: 8h-18h</span>
                </div>
                <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Dim: Sur rendez-vous</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Styles Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default Mths;