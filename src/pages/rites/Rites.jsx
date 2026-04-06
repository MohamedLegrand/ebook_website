import React, { useState } from "react";

function Rites() {
  const [activeTab, setActiveTab] = useState("tous");
  const [expandedRite, setExpandedRite] = useState(null);

  const rites = [
    {
      id: 1,
      nom: "Rite SO'O (Tso'o) Christianisé",
      description: "Rite ancestral Béti de purification et de délivrance, réinterprété à la lumière de la foi chrétienne. Fusion de la tradition africaine et du symbolisme de la Passion du Christ.",
      image: "/images/rites/rite-soo.jpg",
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
      image: "/images/rites/purification-spirituelle.jpg",
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
      image: "/images/rites/delivrance.jpg",
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
      image: "/images/rites/reconciliation.jpg",
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
      image: "/images/rites/guerison-holistique.jpg",
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
      image: "/images/rites/protection.jpg",
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
      image: "/images/rites/benediction.jpg",
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
      image: "/images/rites/passage.jpg",
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
    { id: "tous", label: "Tous les rites" },
    { id: "purification", label: "Purification" },
    { id: "delivrance", label: "Délivrance" },
    { id: "guerison", label: "Guérison" },
    { id: "protection", label: "Protection" },
    { id: "reinsertion", label: "Réinsertion" }
  ];

  const filteredRites = activeTab === "tous" 
    ? rites 
    : rites.filter(rite => rite.categorie === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* ==================== HEADER AVEC IMAGE DE FOND ==================== */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/rites/rites.jpg"
            alt="Rites sacramentaux"
            className="w-full h-full object-cover opacity-30"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
        <div className="relative py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rites & Inculturation MTHS
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Une fusion harmonieuse entre la spiritualité chrétienne et les traditions africaines,
            pour une guérison intégrale du corps, de l'âme et de l'esprit.
          </p>
          <div className="bg-blue-50/10 backdrop-blur-sm border border-blue-200/30 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <h3 className="font-bold">Révélation Fondatrice</h3>
                  <p className="text-blue-100 text-sm">
                    Apparition de la Vierge Marie à Jean Paul Sylvain SIDA ABENA, 12 mai 1979
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <h3 className="font-bold">Christianisation</h3>
                  <p className="text-blue-100 text-sm">
                    Les rites traditionnels réinterprétés à la lumière du Christ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des rites avec images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredRites.map((rite) => (
            <div
              key={rite.id}
              className="bg-white rounded-2xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image du rite en en-tête */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={rite.image}
                  alt={rite.nom}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/images/rites/default.jpg";
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${rite.couleur} opacity-60 mix-blend-multiply`}></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">
                  {rite.niveau}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{rite.nom}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span>Durée :</span> {rite.duree}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {rite.description}
                </p>

                {/* Détails extensibles */}
                <div className="mb-6">
                  <button
                    onClick={() => setExpandedRite(expandedRite === rite.id ? null : rite.id)}
                    className="flex items-center justify-between w-full text-left text-blue-600 font-medium"
                  >
                    <span>Détails du rite</span>
                    {expandedRite === rite.id ? (
                      <span>▲</span>
                    ) : (
                      <span>▼</span>
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
                    <div>
                      <p className="text-sm text-gray-600 italic">" {rite.testimonial} "</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Processus d'accompagnement */}
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
                action: "Télécharger"
              },
              { 
                title: "Témoignages Vidéo", 
                desc: "Expériences vécues des participants",
                action: "Regarder"
              },
              { 
                title: "Calendrier des Rites", 
                desc: "Programmation annuelle des cérémonies",
                action: "Consulter"
              }
            ].map((ressource, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-blue-100 p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{ressource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{ressource.desc}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                  {ressource.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final simplifié */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à Commencer Votre Chemin de Guérison ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe d'accompagnateurs spirituels est disponible pour vous guider 
              dans le rite approprié à votre situation.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              Consultation préalable gratuite • Confidentialité assurée • Approche respectueuse
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Rites;