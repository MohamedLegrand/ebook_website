import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { 
  Heart, Users, Ear, Search, ArrowRightCircle, Stethoscope, 
  CheckCircle, Calendar, Clock, Shield, BookOpen, Target,
  ChevronDown, ChevronUp, MapPin, UserCheck, Star, Award,
  PlayCircle, Download, MessageCircle, Phone, Sparkles
} from "lucide-react";

function Parcours() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedDetails, setExpandedDetails] = useState(false);

  const etapes = [
    {
      id: 1,
      titre: "Accueil & Accueil Bienveillant",
      description: "Réception chaleureuse et bienveillante de la personne dans un esprit d'écoute et de respect total de sa dignité.",
      icon: <Users className="w-10 h-10" />,
      details: {
        duree: "30-45 minutes",
        lieu: "Centre MTHS ou en ligne",
        objectif: "Créer un climat de confiance et de sécurité",
        actions: [
          "Accueil personnalisé par un accompagnateur",
          "Présentation du centre et de l'approche MTHS",
          "Explication du processus confidentiel",
          "Séance de questions-réponses"
        ],
        resultat: "La personne se sent accueillie et en confiance pour partager"
      },
      couleur: "from-blue-400 to-blue-500"
    },
    {
      id: 2,
      titre: "Écoute Active & Diagnostic",
      description: "Entretien approfondi et confidentiel pour recueillir le vécu, les souffrances invisibles et les symptômes spirituels, psychiques et sociaux.",
      icon: <Ear className="w-10 h-10" />,
      details: {
        duree: "1-2 heures",
        lieu: "Cabinet privé ou en ligne",
        objectif: "Comprendre en profondeur la situation",
        actions: [
          "Écoute active sans jugement",
          "Recueil de l'histoire personnelle et familiale",
          "Identification des symptômes spirituels",
          "Évaluation des besoins spécifiques"
        ],
        resultat: "Une compréhension claire de la situation et des besoins"
      },
      couleur: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      titre: "Discernement & Analyse",
      description: "Analyse spirituelle et psychosomatique pour identifier la racine des troubles (envoûtements, possessions, blocages mystiques, etc.).",
      icon: <Search className="w-10 h-10" />,
      details: {
        duree: "24-48 heures d'analyse",
        lieu: "Centre de discernement MTHS",
        objectif: "Identifier les causes profondes",
        actions: [
          "Analyse spirituelle approfondie",
          "Évaluation psychosomatique",
          "Consultation d'équipe pluridisciplinaire",
          "Recherche de liens générationnels"
        ],
        resultat: "Diagnostic précis des causes spirituelles"
      },
      couleur: "from-blue-600 to-blue-700"
    },
    {
      id: 4,
      titre: "Orientation Personnalisée",
      description: "Proposition d'un parcours personnalisé adapté à la situation, en complémentarité avec les soins médicaux si nécessaire.",
      icon: <ArrowRightCircle className="w-10 h-10" />,
      details: {
        duree: "1 heure",
        lieu: "Centre MTHS",
        objectif: "Définir un plan d'accompagnement sur mesure",
        actions: [
          "Présentation des options thérapeutiques",
          "Explication des rites et protocoles adaptés",
          "Coordination avec les soins médicaux existants",
          "Établissement d'un calendrier personnalisé"
        ],
        resultat: "Un plan clair et adapté pour la guérison"
      },
      couleur: "from-blue-700 to-blue-800"
    },
    {
      id: 5,
      titre: "Thérapie Progressive",
      description: "Application des 5 piliers de la MTHS : diagnostic, naturopathie/RTA, rituels SO'O inculturés, délivrance, rééducation morale.",
      icon: <Stethoscope className="w-10 h-10" />,
      details: {
        duree: "Variable selon le cas (1-6 mois)",
        lieu: "Centre MTHS et à distance",
        objectif: "Mise en œuvre du traitement holistique",
        actions: [
          "Sessions de purification et de délivrance",
          "Utilisation de Remèdes Traditionnels Améliorés",
          "Rites SO'O christianisés",
          "Accompagnement psychospirituel continu"
        ],
        resultat: "Transformation et guérison progressive"
      },
      couleur: "from-blue-800 to-blue-900"
    },
    {
      id: 6,
      titre: "Suivi & Réinsertion",
      description: "Accompagnement durable pour consolider la guérison, favoriser la resocialisation et prévenir les rechutes, avec dignité et absence de jugement.",
      icon: <CheckCircle className="w-10 h-10" />,
      details: {
        duree: "3-12 mois de suivi",
        lieu: "À distance et rencontres périodiques",
        objectif: "Assurer une guérison durable",
        actions: [
          "Sessions de suivi régulières",
          "Accompagnement à la réinsertion sociale",
          "Support communautaire et groupe de parole",
          "Prévention des rechutes"
        ],
        resultat: "Guérison durable et réintégration réussie"
      },
      couleur: "from-blue-900 to-blue-950"
    }
  ];

  const statistiques = [
    { valeur: "95%", label: "de satisfaction client", icon: <Star className="w-6 h-6" /> },
    { valeur: "2,500+", label: "parcours accomplis", icon: <UserCheck className="w-6 h-6" /> },
    { valeur: "98%", label: "de guérison durable", icon: <Award className="w-6 h-6" /> },
    { valeur: "24/7", label: "support disponible", icon: <Phone className="w-6 h-6" /> }
  ];

  const temoignages = [
    {
      nom: "Marie K.",
      texte: "Le parcours MTHS m'a redonné la paix après 10 ans de souffrance. Chaque étape était claire et accompagnée avec beaucoup d'amour.",
      duree: "4 mois de parcours"
    },
    {
      nom: "Paul D.",
      texte: "L'approche progressive m'a permis de guérir à mon rythme. Le suivi post-guérison a été déterminant pour ma réinsertion.",
      duree: "6 mois de traitement"
    },
    {
      nom: "Anne-Marie T.",
      texte: "Je recommande ce parcours à tous ceux qui cherchent une guérison authentique. L'équipe est professionnelle et bienveillante.",
      duree: "3 mois d'accompagnement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Parcours d'Accompagnement MTHS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Un chemin structuré en 6 étapes pour une guérison intégrale du corps, de l'âme et de l'esprit.
            Chaque parcours est personnalisé, confidentiel et respectueux de votre dignité.
          </p>
          
          {/* Note importante */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">Notre Engagement</h3>
                <p className="text-gray-600">
                  Nous accompagnons avec dignité, sans jugement, en complémentarité avec les soins hospitaliers.
                  Votre confidentialité est garantie à chaque étape du parcours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Notre Parcours en Chiffres
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

        {/* Étapes du parcours - Version améliorée */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Les 6 Étapes de Votre Parcours
          </h2>
          
          {/* Timeline desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Ligne de timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-900"></div>
              
              {/* Étapes */}
              <div className="space-y-12">
                {etapes.map((etape, index) => (
                  <div 
                    key={etape.id}
                    className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Contenu de l'étape */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div 
                        className={`bg-white rounded-2xl border border-blue-100 p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                          activeStep === index ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${etape.couleur} text-white`}>
                            {etape.icon}
                          </div>
                          <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                            <h3 className="text-xl font-bold text-gray-900">{etape.titre}</h3>
                            <p className="text-sm text-gray-600 mt-1">Étape {etape.id}/6</p>
                          </div>
                        </div>
                        <p className="text-gray-700">{etape.description}</p>
                        
                        {/* Info rapide */}
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {etape.details.duree}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {etape.details.lieu.split(' ')[0]}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Point sur la timeline */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className={`w-8 h-8 rounded-full border-4 border-white bg-gradient-to-r ${etape.couleur} ${
                        activeStep === index ? 'scale-125 shadow-lg' : ''
                      } transition-all duration-300`}></div>
                    </div>

                    {/* Espace vide de l'autre côté */}
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Version mobile/tablette */}
          <div className="lg:hidden">
            <div className="space-y-6">
              {etapes.map((etape, index) => (
                <div 
                  key={etape.id}
                  className="bg-white rounded-2xl border border-blue-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${etape.couleur} text-white`}>
                        {etape.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{etape.titre}</h3>
                        <p className="text-sm text-gray-600">Étape {etape.id}/6</p>
                      </div>
                    </div>
                    {activeStep === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                  
                  <p className="text-gray-700 mt-4">{etape.description}</p>
                  
                  {/* Détails expandés */}
                  {activeStep === index && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span><strong>Durée :</strong> {etape.details.duree}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span><strong>Lieu :</strong> {etape.details.lieu}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Objectif</h4>
                        <p className="text-gray-700 text-sm">{etape.details.objectif}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Actions concrètes</h4>
                        <ul className="space-y-2">
                          {etape.details.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2">Résultat attendu</h4>
                        <p className="text-gray-700 text-sm">{etape.details.resultat}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section témoignages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Témoignages de Parcours Accomplis
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {temoignages.map((temoignage, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-blue-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {temoignage.nom.split(' ')[0].charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{temoignage.nom}</h4>
                    <p className="text-sm text-blue-600 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {temoignage.duree}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{temoignage.texte}"</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section ressources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Prêt à Commencer Votre Parcours ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Consultation Initiale", 
                desc: "Rencontre d'évaluation gratuite pour définir votre parcours",
                icon: <Calendar className="w-8 h-8" />,
                action: "Prendre RDV",
                link: "/contact"
              },
              { 
                title: "Documentation Complète", 
                desc: "Téléchargez notre guide détaillé du parcours MTHS",
                icon: <BookOpen className="w-8 h-8" />,
                action: "Télécharger",
                link: "/docs/parcours-mths.pdf"
              },
              { 
                title: "Questions Fréquentes", 
                desc: "Consultez nos réponses aux questions les plus courantes",
                icon: <MessageCircle className="w-8 h-8" />,
                action: "Consulter",
                link: "/faq"
              }
            ].map((ressource, idx) => (
              <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{ressource.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{ressource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{ressource.desc}</p>
                <a 
                  href={ressource.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  {ressource.action}
                  <ArrowRightCircle className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Commencez Votre Chemin de Guérison Aujourd'hui
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Rejoignez les milliers de personnes qui ont retrouvé la paix et l'équilibre 
                grâce à notre accompagnement holistique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre Rendez-vous Gratuit
                </a>
                <a
                  href="/urgence"
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Urgence : +237 693 21 54 31
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-200">
                Première consultation gratuite • Confidentialité garantie • Approche respectueuse
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Parcours;