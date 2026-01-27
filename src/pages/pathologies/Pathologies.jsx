import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { 
  AlertCircle, Moon, Heart, Lock, Baby, Zap, Users, 
  Pill, Brain, Activity, ShieldOff, Droplets, AlertTriangle,
  Cross, Skull, Target, Ghost, Eye, HeartPulse, Briefcase,
  Home, TrendingDown, UserX, ChevronRight, Filter,
  Search, Clock, UserCheck, Star, ArrowRight, BookOpen
} from "lucide-react";

function Pathologies() {
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "tous", label: "Toutes les pathologies", icon: <AlertCircle className="w-5 h-5" /> },
    { id: "spirituelles", label: "Pathologies Spirituelles", icon: <Ghost className="w-5 h-5" /> },
    { id: "mentales", label: "Troubles Mentaux", icon: <Brain className="w-5 h-5" /> },
    { id: "familiales", label: "Problématiques Familiales", icon: <Home className="w-5 h-5" /> },
    { id: "professionnelles", label: "Blocages Professionnels", icon: <Briefcase className="w-5 h-5" /> },
    { id: "addictions", label: "Addictions & Dépendances", icon: <Pill className="w-5 h-5" /> }
  ];

  const pathologies = [
    {
      id: 1,
      nom: "Possessions Spirituelles",
      description: "États d'influence ou de domination spirituelle invisible affectant le comportement, la volonté et la santé. La personne peut présenter des changements de personnalité brutaux, des paroles incohérentes et une résistance à la prière.",
      icon: <Ghost className="w-10 h-10" />,
      categorie: "spirituelles",
      symptomes: ["Changements de personnalité", "Paroles incohérentes", "Résistance aux prières"],
      duree: "Variable selon le cas",
      gravite: "Élevée",
      solution: "Rite de délivrance et purification"
    },
    {
      id: 2,
      nom: "Sorcellerie & Envoûtements",
      description: "Actions occultes visant à nuire, bloquer ou détruire la vie d'une personne. Ces attaques peuvent être directes (envoyées volontairement) ou indirectes (par le biais d'objets ou de lieux).",
      icon: <Skull className="w-10 h-10" />,
      categorie: "spirituelles",
      symptomes: ["Malchance persistante", "Sensation d'être observé", "Fatigue chronique"],
      duree: "Variable",
      gravite: "Moyenne à Élevée",
      solution: "Désenvoûtement et protection"
    },
    {
      id: 3,
      nom: "Épilepsie Mystique",
      description: "Crises convulsives ou troubles neurologiques d'origine spirituelle non expliqués médicalement. Ces crises peuvent survenir pendant la prière ou lors d'expositions spirituelles.",
      icon: <Zap className="w-10 h-10" />,
      categorie: "spirituelles",
      symptomes: ["Crises convulsives", "Perte de conscience", "Hallucinations"],
      duree: "Chronique",
      gravite: "Élevée",
      solution: "Purification et prières spécifiques"
    },
    {
      id: 4,
      nom: "Stérilité Spirituelle",
      description: "Blocages empêchant la conception ou la fécondité, souvent liés à des malédictions familiales ou influences occultes. Une cause spirituelle est suspectée quand les examens médicaux sont normaux.",
      icon: <Baby className="w-10 h-10" />,
      categorie: "familiales",
      symptomes: ["Stérilité inexpliquée", "Fausses couches répétées", "Problèmes gynécologiques"],
      duree: "Long terme",
      gravite: "Moyenne",
      solution: "Bris de malédictions et bénédiction"
    },
    {
      id: 5,
      nom: "Cauchemars Chroniques",
      description: "Rêves oppressants, terrifiants et récurrents perturbant le sommeil et la paix intérieure. Ces cauchemars peuvent être le signe d'attaques spirituelles nocturnes.",
      icon: <Moon className="w-10 h-10" />,
      categorie: "mentales",
      symptomes: ["Rêves récurrents", "Sueurs nocturnes", "Peur de dormir"],
      duree: "Chronique",
      gravite: "Modérée",
      solution: "Protection nocturne et purification"
    },
    {
      id: 6,
      nom: "Énurésie Nocturne",
      description: "Incontinence nocturne persistante chez l'enfant ou l'adulte, souvent signe d'une oppression spirituelle ou de liens avec des esprits d'eau dans la tradition africaine.",
      icon: <Droplets className="w-10 h-10" />,
      categorie: "spirituelles",
      symptomes: ["Incontinence nocturne", "Cauchemars liés à l'eau", "Peur des toilettes"],
      duree: "Variable",
      gravite: "Modérée",
      solution: "Purification et rupture de liens"
    },
    {
      id: 7,
      nom: "Malchance Répétitive",
      description: "Série d'échecs, accidents, pertes financières ou blocages inexpliqués dans tous les domaines de la vie. Une malédiction ou un blocage spirituel peut en être la cause.",
      icon: <TrendingDown className="w-10 h-10" />,
      categorie: "professionnelles",
      symptomes: ["Échecs répétés", "Pertes financières", "Accidents fréquents"],
      duree: "Variable",
      gravite: "Modérée",
      solution: "Diagnostic spirituel et déblocage"
    },
    {
      id: 8,
      nom: "Délinquance Juvénile",
      description: "Comportements déviants, rébellion, violence ou fugues chez les jeunes, souvent liés à des influences spirituelles ou à des malédictions générationnelles.",
      icon: <UserX className="w-10 h-10" />,
      categorie: "familiales",
      symptomes: ["Rébellion excessive", "Violence", "Fugues répétées"],
      duree: "Variable",
      gravite: "Moyenne à Élevée",
      solution: "Délivrance et rééducation morale"
    },
    {
      id: 9,
      nom: "Addictions",
      description: "Dépendances (alcool, drogues, sexe, jeux, etc.) d'origine invisible ou renforcées par des liens spirituels. Certaines addictions résistent aux traitements conventionnels.",
      icon: <Pill className="w-10 h-10" />,
      categorie: "addictions",
      symptomes: ["Dépendance persistante", "Rechutes fréquentes", "Comportements compulsifs"],
      duree: "Chronique",
      gravite: "Élevée",
      solution: "Délivrance et accompagnement holistique"
    },
    {
      id: 10,
      nom: "Troubles Mentaux d'Origine Invisible",
      description: "Dépressions, psychoses, hallucinations ou troubles psychiatriques sans cause organique évidente. Une dimension spirituelle peut être explorée quand la médecine échoue.",
      icon: <Brain className="w-10 h-10" />,
      categorie: "mentales",
      symptomes: ["Dépression résistante", "Hallucinations", "Délire"],
      duree: "Variable",
      gravite: "Élevée",
      solution: "Approche intégrative médicale et spirituelle"
    },
    {
      id: 11,
      nom: "Dysfonctions Sexuelles",
      description: "Impuissance, frigidité, compulsions ou troubles relationnels liés à des blocages mystiques, souvent associés à des pratiques occultes ou des malédictions.",
      icon: <Heart className="w-10 h-10" />,
      categorie: "familiales",
      symptomes: ["Impuissance", "Frigidité", "Compulsions sexuelles"],
      duree: "Variable",
      gravite: "Moyenne",
      solution: "Purification et restauration"
    },
    {
      id: 12,
      nom: "Blocages Professionnels",
      description: "Obstacles répétés dans le travail, les projets, le mariage ou les relations familiales d'origine spirituelle. Les portes semblent se fermer inexplicablement.",
      icon: <Briefcase className="w-10 h-10" />,
      categorie: "professionnelles",
      symptomes: ["Échecs professionnels", "Projets avortés", "Conflits relationnels"],
      duree: "Variable",
      gravite: "Modérée",
      solution: "Diagnostic et déblocage des obstacles"
    },
    {
      id: 13,
      nom: "Malédictions Générationnelles",
      description: "Problèmes récurrents transmis de génération en génération : stérilité, pauvreté, maladies, divorces, décès précoces, etc.",
      icon: <Users className="w-10 h-10" />,
      categorie: "familiales",
      symptomes: ["Schémas répétitifs", "Problèmes familiaux récurrents", "Échecs transgénérationnels"],
      duree: "Générationnelle",
      gravite: "Élevée",
      solution: "Bris de chaînes générationnelles"
    },
    {
      id: 14,
      nom: "Fatigue Spirituelle Chronique",
      description: "Épuisement persistant non expliqué médicalement, souvent accompagné de lourdeur, de manque de motivation et de sensibilité accrue aux atmosphères spirituelles.",
      icon: <Activity className="w-10 h-10" />,
      categorie: "spirituelles",
      symptomes: ["Fatigue constante", "Lourdeur", "Manque d'énergie"],
      duree: "Chronique",
      gravite: "Modérée",
      solution: "Purification et restauration énergétique"
    },
    {
      id: 15,
      nom: "Phobies Spirituelles",
      description: "Peur intense et irrationnelle de certains lieux, objets ou situations, souvent liée à des expériences spirituelles traumatisantes ou à des liens avec le monde invisible.",
      icon: <Eye className="w-10 h-10" />,
      categorie: "mentales",
      symptomes: ["Peur irrationnelle", "Attaques de panique", "Évitement compulsif"],
      duree: "Variable",
      gravite: "Modérée",
      solution: "Libération et guérison des mémoires"
    }
  ];

  const filteredPathologies = pathologies.filter(patho => {
    const matchesSearch = searchTerm === "" || 
      patho.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patho.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "tous" || patho.categorie === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const statistiques = [
    { valeur: "95%", label: "de cas améliorés", icon: <UserCheck className="w-6 h-6" /> },
    { valeur: "2,500+", label: "personnes accompagnées", icon: <Users className="w-6 h-6" /> },
    { valeur: "18", label: "mois de suivi moyen", icon: <Clock className="w-6 h-6" /> },
    { valeur: "98%", label: "de satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pathologies Prises en Charge par la MTHS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            La Médecine Traditionnelle des Handicapés Spirituels accompagne les personnes souffrant de troubles 
            dont l'origine est souvent invisible à l'œil humain, en complémentarité avec la médecine conventionnelle.
          </p>
          
          {/* Note importante */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">Approche Complémentaire</h3>
                <p className="text-gray-600">
                  Ces pathologies sont prises en charge en parallèle des soins médicaux conventionnels. 
                  Nous ne remplaçons pas la médecine moderne mais offrons une approche holistique intégrant 
                  la dimension spirituelle souvent négligée.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Notre Impact en Chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistiques.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl border border-blue-100 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.valeur}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Filter className="w-6 h-6 mr-3 text-blue-600" />
              Pathologies par Catégorie
            </h2>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher une pathologie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-blue-50"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-700 border border-blue-200 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des pathologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPathologies.map((patho) => (
            <div
              key={patho.id}
              className="bg-white rounded-2xl border border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* En-tête avec gradient */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    {patho.icon}
                  </div>
                  <div className="bg-white/20 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {patho.gravite}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{patho.nom}</h3>
                <div className="flex items-center gap-4 text-sm text-blue-100">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {patho.duree}
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {patho.solution}
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {patho.description}
                </p>

                {/* Symptômes */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-500" />
                    Symptômes courants
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {patho.symptomes.map((symptome, idx) => (
                      <span 
                        key={idx} 
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border border-blue-200"
                      >
                        {symptome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Solution recommandée */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Cross className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-2">Solution recommandée</h4>
                      <p className="text-gray-700 text-sm">{patho.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2.5 rounded-lg font-medium text-sm transition-all duration-300">
                    Prendre RDV pour diagnostic
                  </button>
                  <a
                    href="/parcours"
                    className="px-4 py-2.5 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
                  >
                    Parcours
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucune pathologie */}
        {filteredPathologies.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Aucune pathologie trouvée
            </h3>
            <p className="text-gray-500 mb-6">
              Aucune pathologie ne correspond à votre recherche dans cette catégorie.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("tous");
              }}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 mx-auto"
            >
              <ArrowRight className="w-4 h-4" />
              Voir toutes les pathologies
            </button>
          </div>
        )}

        {/* Section processus de guérison */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Notre Processus de Guérison
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Diagnostic", desc: "Évaluation spirituelle approfondie" },
                { step: "2", title: "Purification", desc: "Rituels de nettoyage spirituel" },
                { step: "3", title: "Délivrance", desc: "Libération des oppressions" },
                { step: "4", title: "Réinsertion", desc: "Réintégration et suivi" }
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
                title: "Témoignages de Guérison", 
                desc: "Découvrez les récits de personnes qui ont surmonté ces pathologies",
                icon: <BookOpen className="w-8 h-8" />,
                action: "Voir les témoignages"
              },
              { 
                title: "Notre Approche Thérapeutique", 
                desc: "Comprendre notre méthodologie holistique de prise en charge",
                icon: <HeartPulse className="w-8 h-8" />,
                action: "En savoir plus"
              },
              { 
                title: "Prendre Rendez-vous", 
                desc: "Contactez-nous pour une consultation préalable gratuite",
                icon: <UserCheck className="w-8 h-8" />,
                action: "Nous contacter"
              }
            ].map((ressource, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-blue-100 p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{ressource.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{ressource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{ressource.desc}</p>
                <a href={ressource.action === "Voir les témoignages" ? "/temoignages" : 
                         ressource.action === "En savoir plus" ? "/approche" : "/contact"} 
                   className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                  {ressource.action}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <AlertTriangle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'un Diagnostic Spirituel ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe d'accompagnateurs spirituels est disponible pour vous aider à identifier 
              la racine spirituelle de vos difficultés et vous proposer un parcours adapté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-200"
              >
                Prendre Rendez-vous
              </a>
              <a
                href="/urgence"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
              >
                Urgence Spirituelle
              </a>
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

export default Pathologies;