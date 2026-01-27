import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { 
  Heart, Sparkles, Quote, MapPin, Star, Calendar,
  PlayCircle, Share2, Filter, MessageCircle, Award,
  ChevronRight, ThumbsUp, Volume2, Download, CheckCircle,
  Users, Target, Clock, Shield, Zap
} from "lucide-react";

function Temoignages() {
  const [activeFilter, setActiveFilter] = useState("tous");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const temoignages = [
    {
      id: 1,
      nom: "Marie-Claire E.",
      ville: "Yaoundé, Cameroun",
      message: "J'étais tourmentée par des cauchemars incessants et une sensation d'oppression invisible. Après mon parcours à la MTHS, avec le rite SO'O et les prières de délivrance, j'ai retrouvé un sommeil paisible et une joie de vivre que je n'avais plus depuis des années.",
      type: "troubles-nocturnes",
      date: "Janvier 2025",
      duree: "6 mois d'accompagnement",
      video: "https://example.com/video1",
      rating: 5,
      avatar: "MC",
      categorie: "délivrance",
      motscles: ["cauchemars", "oppression", "sommeil"]
    },
    {
      id: 2,
      nom: "Paul B.",
      ville: "Douala, Cameroun",
      message: "Des blocages professionnels répétés et une malchance inexplicable m'empêchaient d'avancer. Grâce au diagnostic spirituel, aux remèdes traditionnels améliorés et à la rééducation morale, ces chaînes invisibles ont été brisées.",
      type: "blocages-professionnels",
      date: "Novembre 2024",
      duree: "4 mois de traitement",
      video: "https://example.com/video2",
      rating: 5,
      avatar: "PB",
      categorie: "prospérité",
      motscles: ["blocages", "carrière", "malchance"]
    },
    {
      id: 3,
      nom: "Anne-Marie N.",
      ville: "Bafoussam, Cameroun",
      message: "Ma famille souffrait d'une déviance spirituelle transmise de génération en génération. L'approche holistique de la MTHS a permis une véritable restauration familiale. Nous avons retrouvé l'harmonie et la paix.",
      type: "restauration-familiale",
      date: "Mars 2025",
      duree: "8 mois de suivi",
      video: "https://example.com/video3",
      rating: 4,
      avatar: "AM",
      categorie: "famille",
      motscles: ["famille", "générationnel", "harmonie"]
    },
    {
      id: 4,
      nom: "Joseph K.",
      ville: "Limbe, Cameroun",
      message: "J'ai été accompagné avec beaucoup de dignité et sans jugement. Le parcours en 6 étapes m'a aidé à identifier la racine spirituelle de mes addictions. Aujourd'hui, je témoigne de la puissance de la guérison intégrale.",
      type: "addictions",
      date: "Février 2025",
      duree: "7 mois de thérapie",
      video: "https://example.com/video4",
      rating: 5,
      avatar: "JK",
      categorie: "dépendances",
      motscles: ["addictions", "dépendances", "libération"]
    },
    {
      id: 5,
      nom: "Élisabeth T.",
      ville: "Bamenda, Cameroun",
      message: "Après des années de stérilité spirituelle et physique, le rite de purification et la prière fervente au Centre ont ouvert les portes de la bénédiction. J'ai maintenant un enfant et une vie transformée.",
      type: "fécondité",
      date: "Avril 2025",
      duree: "9 mois d'accompagnement",
      video: "https://example.com/video5",
      rating: 5,
      avatar: "ET",
      categorie: "fécondité",
      motscles: ["fécondité", "bénédiction", "transformation"]
    },
    {
      id: 6,
      nom: "Samuel D.",
      ville: "Garoua, Cameroun",
      message: "Victime d'envoûtements professionnels, ma carrière stagnait malgré mes compétences. Le rite de désenvoûtement a brisé ces chaînes. En 3 mois, j'ai obtenu une promotion et mon entreprise prospère.",
      type: "envoûtements",
      date: "Décembre 2024",
      duree: "3 mois intensifs",
      video: "https://example.com/video6",
      rating: 4,
      avatar: "SD",
      categorie: "prospérité",
      motscles: ["envoûtement", "carrière", "prospérité"]
    },
    {
      id: 7,
      nom: "Chantal M.",
      ville: "Bertoua, Cameroun",
      message: "Des attaques spirituelles répétées affectaient ma santé. La combinaison de pharmacopée africaine et de prières m'a complètement guérie. Aujourd'hui, je me sens protégée et en pleine santé.",
      type: "santé",
      date: "Octobre 2024",
      duree: "5 mois de traitement",
      video: "https://example.com/video7",
      rating: 5,
      avatar: "CM",
      categorie: "santé",
      motscles: ["santé", "protection", "guérison"]
    },
    {
      id: 8,
      nom: "David F.",
      ville: "Ebolowa, Cameroun",
      message: "Une malédiction familiale pesait sur notre lignée. Après le rite de purification générationnelle, toute ma famille a connu une libération totale. Les conflits ont cessé, la paix est revenue.",
      type: "malédictions",
      date: "Juin 2024",
      duree: "6 mois de travail",
      video: "https://example.com/video8",
      rating: 5,
      avatar: "DF",
      categorie: "famille",
      motscles: ["malédiction", "famille", "libération"]
    }
  ];

  const statistiques = [
    { valeur: "95%", label: "de guérison complète", icon: <Heart className="w-6 h-6" /> },
    { valeur: "2,500+", label: "personnes accompagnées", icon: <Users className="w-6 h-6" /> },
    { valeur: "18", label: "mois de suivi moyen", icon: <Calendar className="w-6 h-6" /> },
    { valeur: "98%", label: "de satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const categories = [
    { id: "tous", label: "Tous les témoignages", icon: <Sparkles className="w-5 h-5" /> },
    { id: "délivrance", label: "Délivrance", icon: <Zap className="w-5 h-5" /> },
    { id: "famille", label: "Famille", icon: <Users className="w-5 h-5" /> },
    { id: "santé", label: "Santé", icon: <Heart className="w-5 h-5" /> },
    { id: "prospérité", label: "Prospérité", icon: <Target className="w-5 h-5" /> },
    { id: "fécondité", label: "Fécondité", icon: <Award className="w-5 h-5" /> },
    { id: "dépendances", label: "Dépendances", icon: <Shield className="w-5 h-5" /> }
  ];

  const filteredTemoignages = activeFilter === "tous" 
    ? temoignages 
    : temoignages.filter(t => t.categorie === activeFilter);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowVideoModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Témoignages de Transformation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez les parcours réels de personnes libérées et restaurées 
            grâce à la Médecine Traditionnelle des Handicapés Spirituels.
          </p>
          
          {/* Note importante */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">Note importante</h3>
                <p className="text-gray-600">
                  Ces témoignages sont des récits authentiques partagés avec consentement. 
                  Chaque parcours est unique et les résultats peuvent varier selon l'engagement personnel. 
                  Notre approche s'inscrit dans un accompagnement holistique respectueux de la personne.
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

        {/* Filtres */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Filter className="w-6 h-6 mr-3 text-blue-600" />
              Témoignages par Catégorie
            </h2>
            <div className="text-sm text-gray-500">
              {filteredTemoignages.length} témoignage{filteredTemoignages.length > 1 ? 's' : ''}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.id
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

        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTemoignages.map((temoignage) => (
            <div
              key={temoignage.id}
              className="bg-white rounded-2xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* En-tête avec avatar */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {temoignage.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{temoignage.nom}</h3>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        {temoignage.ville}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < temoignage.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{temoignage.date}</span>
                  </div>
                </div>

                {/* Message */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 opacity-50" />
                  <p className="text-gray-700 leading-relaxed pl-4">
                    "{temoignage.message}"
                  </p>
                </div>

                {/* Informations complémentaires */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      {temoignage.duree}
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600">Recommande</span>
                    </div>
                  </div>
                  
                  {/* Mots-clés */}
                  <div className="flex flex-wrap gap-2">
                    {temoignage.motscles.map((mot, idx) => (
                      <span 
                        key={idx} 
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200"
                      >
                        {mot}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleVideoClick(temoignage.video)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Voir le témoignage vidéo
                  </button>
                  <button className="px-4 py-2.5 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section témoignage vidéo en vedette */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Témoignage en Vedette
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 text-white">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Témoignage du mois</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Transformation Complète</h3>
                  <p className="text-blue-100 mb-6">
                    Découvrez le parcours exceptionnel de Samuel D. qui a retrouvé 
                    la paix et la prospérité après des années de lutte spirituelle.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Guérison des attaques spirituelles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Restauration professionnelle</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>Paix familiale retrouvée</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleVideoClick("https://example.com/featured")}
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg flex items-center gap-3 transition-colors"
                  >
                    <PlayCircle className="w-6 h-6" />
                    Regarder le témoignage complet
                  </button>
                </div>
              </div>
              <div className="relative min-h-[300px] bg-blue-700">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <button
                  onClick={() => handleVideoClick("https://example.com/featured")}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <PlayCircle className="w-10 h-10 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section partager son témoignage */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Votre Témoignage Peut Inspirer
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Votre expérience peut apporter de l'espoir à d'autres personnes en difficulté. 
              Partagez votre parcours de guérison et devenez une source d'inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-200 flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Partager mon témoignage
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors flex items-center gap-3">
                <Download className="w-5 h-5" />
                Télécharger le formulaire
              </button>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl border border-blue-200 p-8 max-w-3xl mx-auto">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à Commencer Votre Propre Transformation ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Rejoignez les milliers de personnes qui ont retrouvé la paix, la santé 
              et la prospérité grâce à l'accompagnement holistique de la MTHS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-200">
                Prendre Rendez-vous
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors">
                Consulter un accompagnateur
                <ChevronRight className="w-4 h-4 ml-2 inline" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal pour les vidéos */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Témoignage vidéo</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Volume2 className="w-16 h-16 text-white/50 mx-auto mb-4" />
                <p className="text-white">Lecture du témoignage vidéo</p>
                <p className="text-white/70 text-sm mt-2">
                  (Le témoignage vidéo serait intégré ici)
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Temoignages;