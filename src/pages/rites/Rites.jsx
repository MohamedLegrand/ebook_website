import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { 
  Sparkles, Heart, BookOpen, Users, Shield, Leaf, 
  Cross, Droplets, Star, Target, Zap, Globe, 
  ChevronDown, ChevronRight, Calendar, Clock,
  Video, Download, Share2, BookMarked
} from "lucide-react";

function Rites() {
  const [activeTab, setActiveTab] = useState("tous");
  const [expandedRite, setExpandedRite] = useState(null);

  const rites = [
    {
      id: 1,
      nom: "Rite SO'O (Tso'o) Christianisé",
      description: "Rite ancestral Béti de purification et de délivrance, réinterprété à la lumière de la foi chrétienne. Fusion de la tradition africaine et du symbolisme de la Passion du Christ.",
      icon: <Shield className="w-10 h-10" />,
      details: [
        "Origine : Rite traditionnel de purification chez les peuples Béti (Ewondo, Eton) du Sud-Cameroun",
        "Christianisation : Lié à la Passion du Christ comme sacrifice rédempteur",
        "Objectif : Purification spirituelle et rupture des envoûtements",
        "Durée : 3 à 7 jours selon la gravité",
        "Public : Personnes souffrant d'oppressions spirituelles avérées"
      ],
      couleur: "from-blue-600 to-indigo-700",
      categorie: "purification",
      niveau: "Avancé",
      duree: "3-7 jours",
      testimonial: "Ce rite a transformé ma vie après des années d'oppression."
    },
    {
      id: 2,
      nom: "Rite de Purification Spirituelle",
      description: "Nettoyage énergétique profond des influences occultes et restauration de l'équilibre psychospirituel par des bains symboliques et prières ciblées.",
      icon: <Droplets className="w-10 h-10" />,
      details: [
        "Étapes : Diagnostic spirituel, bain symbolique, imposition des mains",
        "Outils : Remèdes Traditionnels Améliorés (RTA), eaux bénites inculturées",
        "But : Libérer des malédictions et influences négatives",
        "Fréquence : Séances hebdomadaires ou mensuelles",
        "Accompagnement : Suivi pendant 40 jours"
      ],
      couleur: "from-cyan-500 to-blue-600",
      categorie: "purification",
      niveau: "Intermédiaire",
      duree: "1-2 heures",
      testimonial: "Un sentiment de légèreté et de paix immédiat après la séance."
    },
    {
      id: 3,
      nom: "Rite de Délivrance et Désenvoûtement",
      description: "Procédure puissante pour briser les chaînes invisibles de la sorcellerie et des blocages mystiques par la prière et l'autorité spirituelle.",
      icon: <Zap className="w-10 h-10" />,
      details: [
        "Protocole : Exorcisme doux, prières de délivrance, confession thérapeutique",
        "Indications : Possessions, envoûtements, blocages mystiques",
        "Équipe : Minimum 3 accompagnateurs formés",
        "Préparation : 21 jours de préparation spirituelle",
        "Post-rituel : 40 jours de rééducation"
      ],
      couleur: "from-purple-600 to-indigo-700",
      categorie: "delivrance",
      niveau: "Avancé",
      duree: "4-6 heures",
      testimonial: "Libération totale après 10 ans de souffrance."
    },
    {
      id: 4,
      nom: "Rite de Réconciliation Communautaire",
      description: "Restauration des liens familiaux et sociaux brisés par les troubles spirituels, favorisant la réintégration harmonieuse.",
      icon: <Users className="w-10 h-10" />,
      details: [
        "Processus : Médiation, pardon mutuel, réparation symbolique",
        "Acteurs : Famille, communauté, accompagnateurs spirituels",
        "Objectif : Restaurer la dignité et l'appartenance",
        "Durée : Processus sur 3 mois minimum",
        "Outils : Cercles de parole, rituels de réconciliation"
      ],
      couleur: "from-teal-500 to-cyan-600",
      categorie: "reinsertion",
      niveau: "Tous niveaux",
      duree: "Variable",
      testimonial: "Retrouvé ma place dans ma famille après 5 ans de rupture."
    },
    {
      id: 5,
      nom: "Rite de Guérison Holistique",
      description: "Approche intégrative combinant rituels, pharmacopée africaine et prières pour guérir corps, âme et esprit simultanément.",
      icon: <Heart className="w-10 h-10" />,
      details: [
        "Fondement : Révélation de la Vierge Marie (12 mai 1979)",
        "Piliers : Foi chrétienne, tradition africaine, psychologie",
        "Outils : RTA, naturopathie, prières inculturées",
        "Indications : Handicaps spirituels complexes",
        "Suivi : Programme personnalisé sur 1 an"
      ],
      couleur: "from-pink-500 to-rose-600",
      categorie: "guerison",
      niveau: "Tous niveaux",
      duree: "Programme annuel",
      testimonial: "Guérison complète après des années de médecine conventionnelle."
    },
    {
      id: 6,
      nom: "Rite de Protection Spirituelle",
      description: "Établissement de boucliers spirituels contre les attaques occultes et renforcement des défenses psychiques.",
      icon: <Target className="w-10 h-10" />,
      details: [
        "Techniques : Prières de protection, onctions, objets bénis",
        "Durée : Efficace 3 à 6 mois",
        "Renouvellement : Rituel semestriel recommandé",
        "Indications : Personnes vulnérables aux attaques spirituelles",
        "Formation : Apprentissage des techniques d'auto-protection"
      ],
      couleur: "from-amber-500 to-orange-600",
      categorie: "protection",
      niveau: "Débutant",
      duree: "1 heure",
      testimonial: "Plus d'attaques nocturnes depuis ce rite."
    },
    {
      id: 7,
      nom: "Rite de Bénédiction Inculturé",
      description: "Bénédiction chrétienne enrichie d'éléments traditionnels africains pour les maisons, objets et projets importants.",
      icon: <Star className="w-10 h-10" />,
      details: [
        "Éléments : Prières chrétiennes, symboles africains, éléments naturels",
        "Objets : Maisons, véhicules, entreprises, outils de travail",
        "Célébrants : Prêtre + tradipraticien chrétien",
        "Préparation : Purification préalable des lieux",
        "Effet : Paix et prospérité spirituelle"
      ],
      couleur: "from-emerald-500 to-green-600",
      categorie: "benediction",
      niveau: "Débutant",
      duree: "2-3 heures",
      testimonial: "Mon entreprise a prospéré après la bénédiction."
    },
    {
      id: 8,
      nom: "Rite de Passage Spirituel",
      description: "Accompagnement dans les transitions importantes de la vie (naissance, adolescence, mariage, mort) selon une perspective chrétienne africaine.",
      icon: <Globe className="w-10 h-10" />,
      details: [
        "Transitions : Naissance, adolescence, mariage, décès",
        "Approche : Christianisation des rites de passage traditionnels",
        "Objectif : Sanctifier les étapes de la vie",
        "Communauté : Implication de la famille élargie",
        "Documentation : Livret personnalisé remis"
      ],
      couleur: "from-violet-500 to-purple-600",
      categorie: "passage",
      niveau: "Tous niveaux",
      duree: "Variable",
      testimonial: "Un mariage profondément significatif et enraciné."
    }
  ];

  const categories = [
    { id: "tous", label: "Tous les rites", icon: <Sparkles className="w-5 h-5" /> },
    { id: "purification", label: "Purification", icon: <Droplets className="w-5 h-5" /> },
    { id: "delivrance", label: "Délivrance", icon: <Zap className="w-5 h-5" /> },
    { id: "guerison", label: "Guérison", icon: <Heart className="w-5 h-5" /> },
    { id: "protection", label: "Protection", icon: <Shield className="w-5 h-5" /> },
    { id: "reinsertion", label: "Réinsertion", icon: <Users className="w-5 h-5" /> }
  ];

  const filteredRites = activeTab === "tous" 
    ? rites 
    : rites.filter(rite => rite.categorie === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rites & Inculturation MTHS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Une fusion harmonieuse entre la spiritualité chrétienne et les traditions africaines,
            pour une guérison intégrale du corps, de l'âme et de l'esprit.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <BookMarked className="w-12 h-12 text-blue-600" />
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Révélation Fondatrice</h3>
                  <p className="text-gray-600 text-sm">
                    Apparition de la Vierge Marie à Jean Paul Sylvain SIDA ABENA, 12 mai 1979
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Cross className="w-12 h-12 text-blue-600" />
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">Christianisation</h3>
                  <p className="text-gray-600 text-sm">
                    Les rites traditionnels réinterprétés à la lumière du Christ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Explorez nos Rites Sacramentaux
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-700 border border-blue-200 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des rites */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredRites.map((rite) => (
            <div
              key={rite.id}
              className="bg-white rounded-2xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* En-tête avec gradient */}
              <div className={`bg-gradient-to-r ${rite.couleur} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    {rite.icon}
                  </div>
                  <span className="bg-white/20 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {rite.niveau}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{rite.nom}</h3>
                <div className="flex items-center gap-4 text-sm text-blue-100">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {rite.duree}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Sur RDV
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {rite.description}
                </p>

                {/* Détails extensibles */}
                <div className="mb-6">
                  <button
                    onClick={() => setExpandedRite(expandedRite === rite.id ? null : rite.id)}
                    className="flex items-center justify-between w-full text-left text-blue-600 font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Détails du rite
                    </span>
                    {expandedRite === rite.id ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  
                  {expandedRite === rite.id && (
                    <div className="mt-4 pl-6 border-l-2 border-blue-200">
                      <ul className="space-y-3 text-sm text-gray-600">
                        {rite.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Témoignage */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600 italic">" {rite.testimonial} "</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2.5 rounded-lg font-medium text-sm transition-all duration-300">
                    Prendre RDV
                  </button>
                  <button className="px-4 py-2.5 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section supplémentaire : Processus d'accompagnement */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Notre Processus d'Accompagnement
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Diagnostic", desc: "Évaluation spirituelle et psychologique" },
                { step: "2", title: "Purification", desc: "Rituels de nettoyage spirituel" },
                { step: "3", title: "Délivrance", desc: "Libération des oppressions" },
                { step: "4", title: "Réinsertion", desc: "Réintégration communautaire" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section ressources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ressources Complémentaires
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Documentation Théologique", 
                desc: "Études sur l'inculturation des rites",
                icon: <BookOpen className="w-8 h-8" />,
                action: "Télécharger"
              },
              { 
                title: "Témoignages Vidéo", 
                desc: "Expériences vécues des participants",
                icon: <Video className="w-8 h-8" />,
                action: "Regarder"
              },
              { 
                title: "Calendrier des Rites", 
                desc: "Programmation annuelle des cérémonies",
                icon: <Calendar className="w-8 h-8" />,
                action: "Consulter"
              }
            ].map((ressource, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-blue-100 p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{ressource.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{ressource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{ressource.desc}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                  {ressource.action}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à Commencer Votre Chemin de Guérison ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe d'accompagnateurs spirituels est disponible pour vous guider 
              dans le rite approprié à votre situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-200">
                Prendre Rendez-vous
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors">
                Contacter un Accompagnateur
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Consultation préalable gratuite • Confidentialité assurée • Approche respectueuse
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Rites;