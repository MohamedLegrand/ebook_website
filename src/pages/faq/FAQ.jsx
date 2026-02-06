import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Cross, Heart, Shield, Mail, Clock, Users, MapPin, Phone, AlertCircle } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "Comprendre la MTHS",
      icon: <Heart className="w-5 h-5" />,
      items: [
        {
          question: "Qu'est-ce que la Médecine Traditionnelle des Handicapés Spirituels (MTHS) ?",
          answer: "La MTHS est une médecine holistique révélée qui considère l'être humain dans l'unité sacrée de son corps, de son âme, de son esprit et de son appartenance communautaire. Elle intègre harmonieusement les thérapies spirituelles chrétiennes, la pharmacopée traditionnelle africaine, la psychologie communautaire et les rituels inculturés de purification (notamment le rite SO'O). C'est une passerelle sacrée entre la sagesse des ancêtres et la Révélation chrétienne."
        },
        {
          question: "Quelle est l'origine de la MTHS ?",
          answer: "La MTHS trouve son origine dans l'apparition de la Sainte Vierge Marie à Jean Paul Sylvain SIDA ABENA le 12 mai 1979 à Abili, un village situé à 27 km de Yaoundé au Cameroun. La Vierge Marie lui a confié une mission divine de guérison, de conversion et de délivrance pour tous ceux dont l'âme est enchaînée et dont l'esprit est persécuté. De cette révélation est né le Centre MARIE REINE DE LA MISÉRICORDE D'ABILI."
        },
        {
          question: "Qu'est-ce qu'un handicap spirituel ?",
          answer: "Le handicap spirituel est une souffrance profonde qui atteint le centre même de l'être : le lieu de la foi, de l'espérance, de la paix intérieure et de la relation à Dieu, aux ancêtres et à la communauté. Il se manifeste par des troubles qui débordent les cadres de la biomédecine classique : angoisses inexpliquées, cauchemars récurrents, voix intérieures oppressantes, troubles du comportement, blocages affectifs et professionnels, maladies persistantes sans cause organique claire."
        },
        {
          question: "La MTHS remplace-t-elle la médecine moderne ?",
          answer: "Absolument pas. La MTHS vient en complément de la médecine moderne et ne remplace en aucun cas les soins hospitaliers ou les traitements biomédicaux lorsque ceux-ci sont nécessaires. Nous croyons en une approche intégrale qui reconnaît que Dieu agit aussi par la science médicale. Notre principe est la complémentarité avec l'hôpital, pas la substitution."
        }
      ]
    },
    {
      title: "Pathologies & Accompagnement",
      icon: <AlertCircle className="w-5 h-5" />,
      items: [
        {
          question: "Quelles pathologies la MTHS prend-elle en charge ?",
          answer: "La MTHS accompagne diverses atteintes spirituelles : possessions, sorcellerie subie ou transmise, envoûtements, malédictions familiales ou individuelles, épilepsie mystique, stérilité spirituelle, cauchemars chroniques et couches de nuit, malchance répétitive, blocages mystiques, esclavage spirituel (Kong), délinquance juvénile, addictions, troubles mentaux d'origine invisible, dysfonctions sexuelles, blocages professionnels et familiaux."
        },
        {
          question: "Comment se déroule le parcours d'accompagnement ?",
          answer: "Le parcours suit 6 étapes sacrées : 1) Accueil - vous êtes reçu avec dignité comme un enfant de Dieu, 2) Écoute - temps de parole libérée et thérapeutique, 3) Discernement - identification de l'origine visible et invisible du mal, 4) Orientation - proposition d'une voie thérapeutique adaptée, 5) Thérapie progressive - prières, remèdes naturels, rites de purification, délivrance et rééducation, 6) Suivi post-guérison - accompagnement dans la réintégration familiale, sociale et spirituelle."
        },
        {
          question: "Quels sont les 5 piliers thérapeutiques de la MTHS ?",
          answer: "Les 5 piliers sont : 1) Diagnostic spirituel et psychosomatique - discernement de l'origine du mal, 2) Naturopathie et remèdes traditionnels améliorés - médecine de la terre purifiée par la prière, 3) Rituels de purification (rite SO'O inculturé) - chemin de purification intérieure et de réconciliation, 4) Délivrance et désenvoûtement - libération des chaînes invisibles par l'autorité du Christ, 5) Rééducation morale et réinsertion sociale - accompagnement vers une vie durable dans la vérité et la responsabilité."
        },
        {
          question: "Qu'est-ce que l'envoûtement et comment se transmet-il ?",
          answer: "L'envoûtement désigne un procédé spirituel par lequel un sorcier introduit l'« Évu » (entité spirituelle) dans le corps d'une victime. Il existe trois types : l'envoûtement principal (transmission spirituelle dans l'astral, souvent pratiqué par un membre de la famille dès la naissance), l'envoûtement par contamination (via la nourriture ou les rapports sexuels), et l'envoûtement par possession (intrusion de démons et esprits maléfiques). La MTHS offre des protocoles spécifiques de délivrance pour chaque type."
        }
      ]
    },
    {
      title: "Rite SO'O & Inculturation",
      icon: <Cross className="w-5 h-5" />,
      items: [
        {
          question: "Qu'est-ce que le rite SO'O ?",
          answer: "Le rite SO'O est un ancien rite de passage du peuple Béti qui marquait l'entrée du jeune homme dans la maturité. Dans la MTHS, il a été inculturé et relu à la lumière du mystère du Christ pour devenir un chemin de purification intérieure, de repentance et de renaissance spirituelle. Il intègre la confession, la pénitence, la prière de délivrance, l'eau purificatrice et la Parole de Dieu."
        },
        {
          question: "Quel est le lien entre le rite SO'O et la Passion du Christ ?",
          answer: "Le passage initiatique du SO'O entre en résonance profonde avec la Passion du Christ : souffrance qui purifie, mort symbolique à l'homme ancien, et résurrection à une vie nouvelle. Ainsi, l'initié MTHS, comme le catéchumène des premiers temps de l'Église, passe par la nuit pour accéder à la lumière, par la croix pour entrer dans la gloire intérieure."
        },
        {
          question: "Le rite SO'O est-il reconnu par l'Église ?",
          answer: "La MTHS porte un plaidoyer respectueux en faveur de la reconnaissance des rites africains inculturés, afin que l'Église d'Afrique parle le langage symbolique de ses peuples sans trahir l'Évangile. Le SO'O, purifié, christianisé et théologiquement éclairé, devient un outil pastoral, thérapeutique et éducatif au service de la guérison intégrale. Nous œuvrons pour sa reconnaissance ecclésiale officielle."
        }
      ]
    },
    {
      title: "Boutique & Produits",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        {
          question: "Quels produits propose la Boutique du Centre ?",
          answer: "La boutique propose : des livres doctrinaux (enseignements fondamentaux de la MTHS), des manuels cliniques (protocoles thérapeutiques et méthodes de diagnostic), la Revue Le Monde Parallèle (articles sur la déviance spirituelle), des supports audio (prières et méditations guidées), des produits naturels certifiés (infusions, huiles, baumes), et des Remèdes Traditionnels Améliorés (RTA) validés par le Centre."
        },
        {
          question: "Les produits de la boutique garantissent-ils une guérison immédiate ?",
          answer: "Non. La MTHS n'offre aucune promesse magique ou instantanée. Chaque produit est accompagné d'informations claires et responsables sur son usage. Les produits soutiennent la santé spirituelle, mentale et corporelle dans le cadre d'un accompagnement global. La guérison véritable est un processus progressif qui demande foi, patience et engagement."
        },
        {
          question: "Les produits respectent-ils la législation camerounaise ?",
          answer: "Oui, absolument. Tous nos produits respectent les normes légales et la Loi N° 2068/PJL/AN promulguée en 2024 sur la médecine traditionnelle au Cameroun. Chaque produit est encadré par une éthique de soin rigoureuse et fait l'objet de contrôles qualité stricts."
        }
      ]
    },
    {
      title: "Rendez-vous & Contact",
      icon: <MapPin className="w-5 h-5" />,
      items: [
        {
          question: "Comment prendre rendez-vous au Centre ?",
          answer: "Vous pouvez prendre rendez-vous en remplissant notre formulaire sécurisé et confidentiel sur la page Contact. Le formulaire comprend : votre nom, votre situation, votre demande spécifique, la proposition de rendez-vous, et une option pour les urgences spirituelles. Tout ce que vous partagez est accueilli avec confidentialité, respect et absence totale de jugement."
        },
        {
          question: "Où se trouve le Centre MARIE REINE DE LA MISÉRICORDE ?",
          answer: "Le Centre est situé à Abili, un village à 27 kilomètres de Yaoundé, la capitale politique du Cameroun. C'est le lieu où la Sainte Vierge Marie est apparue à Jean Paul Sylvain SIDA ABENA le 12 mai 1979. Le Centre dispose d'infrastructures d'accueil et d'hébergement pour les personnes en parcours thérapeutique."
        },
        {
          question: "Proposez-vous des consultations à distance ?",
          answer: "Actuellement, l'accompagnement MTHS se fait principalement en présentiel au Centre d'Abili pour garantir la qualité du discernement spirituel et des rituels de purification. Cependant, nous travaillons sur le développement d'une plateforme de téléconsultation spirituelle pour les cas d'orientation initiale et de suivi post-guérison."
        },
        {
          question: "Que faire en cas d'urgence spirituelle ?",
          answer: "En cas d'urgence spirituelle (oppression invisible critique, perturbations spirituelles graves), utilisez le canal d'urgence dans notre formulaire de contact. Notre équipe priorise ces demandes et vous contacte dans les plus brefs délais pour vous orienter vers les soins appropriés."
        }
      ]
    },
    {
      title: "Confidentialité & Éthique",
      icon: <Shield className="w-5 h-5" />,
      items: [
        {
          question: "Mes informations personnelles sont-elles protégées ?",
          answer: "Oui, absolument. Toutes les informations personnelles et médicales sont protégées conformément aux normes en vigueur et à la charte éthique du Centre. Nous garantissons la confidentialité totale de votre parcours. Chaque thérapeute et collaborateur s'engage à la dignité humaine, au respect de la vie privée et à la protection des données."
        },
        {
          question: "Quelle est la position de la MTHS face au jugement ?",
          answer: "Au Centre, nous voyons une personne qui souffre, pas un problème à condamner. Notre approche est fondée sur l'absence totale de jugement. Derrière chaque trouble se tient une âme en quête de paix, derrière chaque dérive une histoire blessée, et derrière chaque possession un enfant de Dieu appelé à la liberté. Nous accueillons chacun avec dignité et compassion."
        },
        {
          question: "La MTHS est-elle reconnue légalement ?",
          answer: "Oui. Le Centre MARIE REINE DE LA MISÉRICORDE D'ABILI est enregistré et reconnu conformément aux réglementations camerounaises sur la médecine traditionnelle. Nos pratiques respectent la Loi N° 2068/PJL/AN de décembre 2024 qui encadre l'exercice et l'organisation de la médecine traditionnelle au Cameroun. Notre statut juridique est conforme à toutes les exigences légales."
        }
      ]
    },
    {
      title: "Témoignages & Résultats",
      icon: <Users className="w-5 h-5" />,
      items: [
        {
          question: "Puis-je consulter des témoignages de personnes accompagnées ?",
          answer: "Oui, notre rubrique Témoignages présente des vidéos immersives, des témoignages écrits, des récits de conversion, des guérisons spirituelles et des histoires de restauration familiale. Chaque témoignage illustre le passage de l'ombre à la lumière. Important : les témoignages ne constituent pas des promesses, mais des parcours humains. Chaque histoire est unique et le chemin de guérison se vit à son rythme."
        },
        {
          question: "Combien de temps dure un parcours de guérison ?",
          answer: "La durée varie selon la nature et la profondeur de l'atteinte spirituelle. Certaines personnes connaissent une libération rapide, d'autres nécessitent un accompagnement progressif sur plusieurs semaines ou mois. La guérison véritable ne s'arrête pas à la délivrance : elle se prolonge dans la rééducation morale et la réinsertion sociale. Notre engagement est de marcher à vos côtés jusqu'à la restauration durable."
        },
        {
          question: "La guérison spirituelle est-elle définitive ?",
          answer: "La délivrance spirituelle marque un tournant décisif, mais la liberté retrouvée doit être gardée et entretenue. C'est pourquoi notre parcours inclut le suivi post-guérison : accompagnement dans la foi, la discipline morale, l'équilibre communautaire, et la vigilance spirituelle. Nous enseignons à marcher dans la vérité, la responsabilité et la prière continue pour que la guérison devienne un état durable."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-700 text-white overflow-hidden">
          {/* Fond décoratif */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-cyan-300 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Texte et recherche */}
              <div className="lg:w-1/2">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">Centre d'aide MTHS</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    Questions
                    <span className="block text-cyan-200">Fréquentes</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl lg:max-w-none">
                    Trouvez des réponses sur la Médecine Traditionnelle des Handicapés Spirituels
                  </p>
                  
                  <p className="text-base text-blue-200 mb-8 italic">
                    « Au Centre, nous voyons une personne qui souffre, pas un problème à condamner. »
                  </p>
                  
                  {/* Search Bar améliorée */}
                  <div className="max-w-xl mx-auto lg:mx-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Recherchez une question sur la MTHS..."
                          className="w-full px-6 py-5 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-2xl text-lg"
                        />
                        <button className="absolute right-3 top-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg">
                          Rechercher
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                      <span className="text-sm text-blue-200 font-medium">Recherches populaires :</span>
                      <span className="text-sm text-blue-100 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 cursor-pointer">envoûtement</span>
                      <span className="text-sm text-blue-100 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 cursor-pointer">rite SO'O</span>
                      <span className="text-sm text-blue-100 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 cursor-pointer">parcours</span>
                      <span className="text-sm text-blue-100 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 cursor-pointer">délivrance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative mx-auto max-w-md lg:max-w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 transform lg:-rotate-1 group-hover:rotate-0 transition-transform duration-500">
                      <img
                        src="/images/centre-abili.jpg"
                        alt="Centre MARIE REINE DE LA MISÉRICORDE D'ABILI"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                        }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                      
                      <div className="absolute top-6 right-6 bg-white text-blue-600 px-4 py-3 rounded-xl shadow-2xl transform rotate-3">
                        <div className="flex items-center gap-2">
                          <Cross className="w-4 h-4" />
                          <span className="font-bold text-sm">Depuis 1979</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-xl shadow-2xl hidden lg:block">
                      <div className="text-center">
                        <div className="text-2xl font-bold">45+</div>
                        <div className="text-xs font-medium">Ans d'expérience</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-blue-100">Abili, Cameroun</span>
                    </div>
                    <div className="h-4 w-px bg-white/30"></div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-blue-100">Accompagnement disponible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vague décorative en bas */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".1"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".3"></path>
            </svg>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">1979</div>
                <div className="text-gray-600 font-medium">Année de révélation</div>
                <div className="mt-2 text-sm text-gray-500">12 mai à Abili</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-gray-600 font-medium">Piliers thérapeutiques</div>
                <div className="mt-2 text-sm text-gray-500">Approche holistique</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-600 font-medium">Étapes d'accompagnement</div>
                <div className="mt-2 text-sm text-gray-500">Parcours structuré</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-xl border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Confidentialité</div>
                <div className="mt-2 text-sm text-gray-500">Respect et dignité</div>
              </div>
            </div>

            {/* Message pastoral */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Notre engagement pastoral</h3>
                  <p className="text-gray-700 leading-relaxed">
                    « Au Centre MARIE REINE DE LA MISÉRICORDE D'ABILI, nous voyons une personne qui souffre, pas un problème à condamner. Derrière chaque trouble se tient une âme en quête de paix, derrière chaque dérive une histoire blessée, et derrière chaque possession un enfant de Dieu appelé à la liberté. »
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform hover:shadow-2xl transition-shadow duration-300">
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl text-white shadow-md">
                        {category.icon}
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                          {category.title}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                          {category.items.length} questions fréquentes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Items */}
                  <div className="divide-y divide-gray-100">
                    {category.items.map((item, itemIndex) => {
                      const isOpen = openIndex === `${categoryIndex}-${itemIndex}`;
                      return (
                        <div key={itemIndex} className="hover:bg-gray-50/70 transition-colors duration-200">
                          <button
                            onClick={() => toggleFAQ(`${categoryIndex}-${itemIndex}`)}
                            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:bg-blue-50/30 transition-colors duration-200"
                          >
                            <div className="flex items-start gap-4">
                              <div className="hidden sm:block mt-2">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-800 pr-8">
                                {item.question}
                              </h3>
                            </div>
                            <div className="flex-shrink-0 ml-4">
                              {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-cyan-600" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-cyan-500" />
                              )}
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5 animate-fadeIn">
                              <div className="pl-0 sm:pl-6 border-l-2 border-cyan-300 ml-1 sm:ml-0">
                                <p className="text-gray-700 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Need Help Section */}
            <div className="mt-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-300 blur-3xl"></div>
              </div>
              
              <div className="relative max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Accompagnement personnalisé</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Besoin d'un accompagnement spirituel ?
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Notre équipe est disponible pour vous écouter, vous orienter et marcher avec vous sur le chemin de la guérison
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 transform duration-300"
                  >
                    📧 Demander une orientation
                  </a>
                  
                  <a
                    href="/parcours"
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    🛤️ Découvrir le parcours
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-blue-200">Abili - 27 km de Yaoundé</span>
                  </div>
                  <div className="h-4 w-px bg-white/30"></div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-blue-200">Confidentialité garantie</span>
                  </div>
                  <div className="h-4 w-px bg-white/30"></div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    <span className="text-blue-200">Sans jugement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default FAQ;