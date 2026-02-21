import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../context/CartContext";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  BookOpen,
  User,
  FileText,
  Clock,
  Package,
  Globe,
  Calendar,
  Tag,
  Shield,
  Truck,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Eye,
  Bookmark
} from "lucide-react";

// ─────────────────────────────────────────────
// Composant image robuste avec fallback garanti
// ─────────────────────────────────────────────
const SafeImage = ({ src, alt, className, fallbackSrc = null, style }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [failed, setFailed] = useState(false);

  const DEFAULT_COVER = (title = "") => {
    // Génère un placeholder SVG avec les initiales du titre
    const initials = title
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() || "")
      .join("");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1e3a5f;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#2d6a4f;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#bg)"/>
        <rect x="20" y="20" width="260" height="360" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" rx="4"/>
        <text x="150" y="180" font-family="Georgia,serif" font-size="64" fill="rgba(255,255,255,0.8)" text-anchor="middle" dominant-baseline="middle">${initials}</text>
        <text x="150" y="260" font-family="Georgia,serif" font-size="13" fill="rgba(255,255,255,0.6)" text-anchor="middle">MTHS</text>
        <text x="150" y="285" font-family="Georgia,serif" font-size="11" fill="rgba(255,255,255,0.4)" text-anchor="middle">Centre Marie Reine</text>
      </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };

  useEffect(() => {
    setImgSrc(src);
    setFailed(false);
  }, [src]);

  const handleError = () => {
    if (!failed && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setFailed(true);
      setImgSrc(DEFAULT_COVER(alt));
    }
  };

  return (
    <img
      src={imgSrc || DEFAULT_COVER(alt)}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      loading="lazy"
    />
  );
};

// ─────────────────────────────────────────────
// Base de données complète des produits MTHS
// ─────────────────────────────────────────────
const ALL_PRODUCTS = [
  {
    id: 1,
    titre: "Chrétien africain face à la sorcellerie",
    auteur: "NGA Marie Constantin & SIDA ABENA Jean Paul Sylvain",
    desc: "Manuel de référence sur la confrontation chrétienne aux phénomènes de sorcellerie en Afrique.",
    prixFCFA: 15000,
    images: [
      "/images/livre1/livre1_1.png",
      "/images/livre1/livre1_2.png",
      "/images/livre1/livre1_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 320,
    stock: 50,
    type: "Livre",
    isbn: "978-2-9541234-1-6",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Définition biblique et africaine de la sorcellerie",
      "Discernement des manifestations spirituelles réelles",
      "Protocoles de protection du foyer chrétien",
      "Stratégies de témoignage auprès des personnes concernées"
    ],
    publicCible: ["Chrétiens africains", "Pasteurs et accompagnateurs", "Familles concernées"],
    resume: `Dans de nombreuses communautés africaines, la sorcellerie n'est pas une abstraction culturelle, mais une réalité quotidienne vécue avec intensité. Cet ouvrage fondamental, fruit de plus de deux décennies de recherches pastorales et de terrain, offre au chrétien africain une réponse théologiquement rigoureuse et culturellement ancrée face aux phénomènes occultes.

L'auteur y développe une grille de lecture chrétienne de la sorcellerie, distinguant avec clarté les dimensions mythiques, psychologiques et véritablement spirituelles du phénomène. S'appuyant sur les Écritures, la tradition théologique et l'anthropologie africaine, il propose des outils concrets de discernement, de protection et de libération.

Le lecteur y trouvera une approche qui ne renie ni la foi chrétienne ni la profondeur des traditions africaines, mais les articule dans une synthèse cohérente et libératrice. Des études de cas documentées dans plusieurs communautés d'Afrique centrale illustrent chaque concept, rendant l'ouvrage à la fois académique et immédiatement applicable.

Un guide indispensable pour tout chrétien africain soucieux de vivre sa foi avec lucidité, courage et discernement face aux défis spirituels de son environnement.`
  },
  {
    id: 2,
    titre: "Comment reconnaître à vue d'œil un sorcier",
    auteur: "SIDA ABENA Jean Paul Sylvain",
    desc: "Guide d'observation et de discernement des personnes impliquées dans les pratiques occultes.",
    prixFCFA: 10000,
    images: [
      "/images/livre2/livre2_1.png",
      "/images/livre2/livre2_2.png",
      "/images/livre2/livre2_3.png"
    ],
    format: ["Papier", "PDF", "EPUB"],
    pages: 240,
    stock: 35,
    type: "Livre",
    isbn: "978-2-9541234-2-3",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Signes comportementaux et attitudes révélatrices",
      "Symbolique corporelle dans la tradition béti",
      "Méthode de discernement en contexte communautaire",
      "Erreurs d'interprétation à éviter absolument"
    ],
    publicCible: ["Thérapeutes MTHS", "Leaders communautaires", "Accompagnateurs spirituels"],
    resume: `Ouvrage délicat et courageux, ce guide s'attaque à l'une des questions les plus redoutées dans les communautés africaines : comment identifier, parmi ses proches ou dans son environnement, une personne engagée dans des pratiques de sorcellerie ? La réponse de l'auteur est à la fois scientifique et spirituelle.

S'appuyant sur une méthodologie d'observation développée par les anciens de la tradition béti et enrichie par des décennies de pratique clinique au Centre MTHS, l'ouvrage présente une analyse comportementale rigoureuse. Il combine les données de l'anthropologie médicale africaine, la symbolique traditionnelle et le discernement spirituel chrétien pour proposer une lecture cohérente des signes observables.

L'auteur prend soin d'avertir contre les écueils de la suspicion et de la délation, en plaçant ce savoir au service de la guérison et non de la condamnation. Il rappelle avec fermeté que l'identification n'est jamais une fin en soi, mais le premier pas vers la libération et la réconciliation.

Un manuel pratique et nuancé, conçu pour les accompagnateurs spirituels et les thérapeutes MTHS qui ont besoin d'outils fiables dans leur mission de discernement pastoral.`
  },
  {
    id: 3,
    titre: "Comment se soigner des persécutions spirituelles",
    auteur: "SIDA ABENA Jean Paul Sylvain",
    desc: "Guide thérapeutique intégrant remèdes naturels, prières et rites de délivrance.",
    prixFCFA: 12500,
    images: [
      "/images/livre3/livre3_1.png",
      "/images/livre3/livre3_2.png",
      "/images/livre3/livre3_3.png"
    ],
    format: ["Papier"],
    pages: 280,
    stock: 40,
    type: "Livre",
    isbn: "978-2-9541234-3-0",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "47 protocoles de soins contre les persécutions spirituelles",
      "Intégration des plantes médicinales africaines et de la prière",
      "Rites de purification adaptés à chaque type d'attaque",
      "Guide de suivi post-guérison pour prévenir les récidives"
    ],
    publicCible: ["Personnes en situation de persécution spirituelle", "Thérapeutes MTHS", "Accompagnateurs chrétiens"],
    resume: `Face aux persécutions spirituelles — cauchemars chroniques, blocages répétitifs, maladies inexpliquées, oppressions nocturnes — ce guide thérapeutique complet offre une réponse méthodique et intégrée. L'auteur y compile quarante-sept protocoles de soins éprouvés, issus de la pratique clinique du Centre Marie Reine de la Miséricorde d'Abili.

Chaque protocole orchestre de manière précise trois niveaux d'intervention : les remèdes phytothérapeutiques tirés de la pharmacopée africaine traditionnelle, les prières spécifiques adaptées à chaque type d'oppression, et les rites symboliques de purification hérités du fond culturel béti et réinterprétés à la lumière de l'Évangile. Les dosages sont indiqués avec précision, les contre-indications signalées, les signes de guérison progressifs décrits.

L'ouvrage propose également un cadre de compréhension spirituelle permettant au patient de saisir la nature de ce qu'il traverse, d'en identifier l'origine probable et de s'engager activement dans son propre processus de libération. Car dans la vision MTHS, la guérison n'est pas un événement passif mais une conversion intérieure.

Un manuel de référence pour toute personne confrontée à des manifestations spirituelles négatives persistantes, désireuse de trouver une réponse sérieuse, éthique et efficace.`
  },
  {
    id: 4,
    titre: "À la rencontre de JPSSA",
    auteur: "Centre MTHS",
    desc: "Biographie spirituelle et doctrinale du fondateur de la Médecine Traditionnelle des Handicapés Spirituels.",
    prixFCFA: 9500,
    images: [
      "/images/livre4/livre4_1.png",
      "/images/livre4/livre4_2.png",
      "/images/livre4/livre4_3.png"
    ],
    format: ["PDF", "EPUB"],
    pages: 180,
    stock: 60,
    type: "E-book",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "L'apparition mariale d'Abili du 12 mai 1979 : récit complet",
      "La mission confiée à JPSSA et son déploiement progressif",
      "Les fondements doctrinaux de la révélation MTHS",
      "Témoignages inédits de ses premiers compagnons"
    ],
    publicCible: ["Fidèles du Centre MTHS", "Chercheurs en spiritualité africaine", "Grand public spirituel"],
    resume: `Le 12 mai 1979, dans le village d'Abili, à 27 kilomètres de Yaoundé, un adolescent orphelin et gravement malade reçoit une visite extraordinaire. Jean Paul Sylvain SIDA ABENA, au bord du désespoir, voit la Sainte Vierge Marie lui apparaître et lui confier une mission qui va transformer sa vie et celle de milliers de personnes : révéler au monde la Médecine Traditionnelle des Handicapés Spirituels.

Cette biographie spirituelle et intellectuelle retrace avec minutie le parcours exceptionnel d'un homme façonné par la souffrance, la révélation et l'engagement. Elle explore les circonstances de l'apparition, le contenu du message reçu, et la manière dont JPSSA a progressivement construit une doctrine cohérente à la croisée de la foi chrétienne, de la sagesse africaine et de l'anthropologie médicale.

Des documents d'archives inédits, des témoignages de ses premiers disciples et des extraits de ses enseignements fondateurs enrichissent ce portrait d'un prophète de la miséricorde dans l'Afrique contemporaine. L'ouvrage éclaire également les fondements théologiques de la MTHS et sa légitimité dans l'Église et dans la société camerounaise.

Une rencontre essentielle pour comprendre les sources vives d'une médecine de l'âme au service de l'homme total.`
  },
  {
    id: 5,
    titre: "Le musulman face à la sorcellerie",
    auteur: "Centre MTHS",
    desc: "Première approche interreligieuse adaptant les principes MTHS au contexte islamique africain.",
    prixFCFA: 11000,
    images: [
      "/images/livre5/livre5_1.png",
      "/images/livre5/livre5_2.png",
      "/images/livre5/livre5_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 210,
    stock: 45,
    type: "Livre",
    isbn: "978-2-9541234-5-4",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Convergences entre la doctrine islamique et les traditions africaines",
      "Formules coraniques de protection validées par des érudits",
      "Analyse comparée des rituels de purification",
      "Dialogue interreligieux autour de la sorcellerie"
    ],
    publicCible: ["Musulmans africains", "Accompagnateurs islamiques", "Chercheurs en religions africaines"],
    resume: `La sorcellerie est une réalité transconfessionnelle en Afrique. Elle touche les chrétiens, les animistes, mais aussi les musulmans qui, bien souvent, manquent d'outils adaptés à leur tradition pour y faire face. Cet ouvrage pionnier comble ce vide en proposant une approche de la sorcellerie africaine entièrement pensée dans le cadre de la spiritualité islamique.

L'auteur explore avec rigueur les points de convergence entre les traditions spirituelles africaines et la doctrine coranique concernant les djinns, le mauvais œil, les pactes occultes et la protection divine. Il montre comment les principes fondamentaux de la MTHS peuvent être traduits dans le langage et la pratique de l'islam, en s'appuyant sur des érudits coraniques reconnus qui ont validé les formules de protection proposées.

Des chapitres entiers sont consacrés aux rituels de purification islamiques comparés aux rites africains traditionnels, mettant en évidence une convergence profonde dans la compréhension du mal spirituel et des moyens de s'en protéger. Des cas concrets de fidèles musulmans ayant bénéficié de cet accompagnement illustrent chaque point théorique.

Une contribution majeure au dialogue interreligieux africain, qui démontre que la lutte contre le mal spirituel peut unir les croyants au-delà de leurs différences doctrinales.`
  },
  {
    id: 6,
    titre: "Les dix commandements de Satan",
    auteur: "SIDA ABENA Jean Paul Sylvain",
    desc: "Étude théologique des principes spirituels inversés qui gouvernent les dynamiques occultes en Afrique.",
    prixFCFA: 13500,
    images: [
      "/images/livre6/livre6_1.png",
      "/images/livre6/livre6_2.png",
      "/images/livre6/livre6_3.png"
    ],
    format: ["Papier"],
    pages: 290,
    stock: 30,
    type: "Livre",
    isbn: "978-2-9541234-6-1",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Décryptage des dix lois fondamentales du royaume de l'obscurité",
      "Analyse croisée : Écriture Sainte, traditions orales et cas cliniques",
      "Comment ces principes opèrent concrètement dans les vies",
      "Stratégies de résistance et de contre-offensive spirituelle"
    ],
    publicCible: ["Thérapeutes avancés MTHS", "Pasteurs et évangélistes", "Chercheurs en théologie pratique"],
    resume: `Ouvrage audacieux et fondamental, ce texte expose avec une clarté dérangeante les principes qui organisent et régissent le monde de l'obscurité spirituelle. L'auteur, fort de plusieurs décennies d'accompagnement de personnes libérées des griffes de la sorcellerie, a pu reconstruire une cartographie précise des lois non écrites qui gouvernent les réseaux occultes africains.

Ces "dix commandements" ne sont pas une invention littéraire. Ils émergent de la convergence entre des témoignages de repentis, des récits bibliques éclairants et une analyse rigoureuse des cas cliniques traités au Centre MTHS. Chaque "commandement" est présenté dans sa formulation originale telle qu'elle opère dans les milieux de sorcellerie, puis décrypté à la lumière des Écritures et de l'anthropologie spirituelle africaine.

La connaissance de ces principes inversés n'est pas une curiosité intellectuelle mais un outil de libération : comprendre comment fonctionne l'adversaire, c'est déjà l'avoir à moitié vaincu. L'auteur accompagne chaque chapitre de contre-stratégies spirituelles précises, permettant au lecteur de résister, de se protéger et d'accompagner efficacement les personnes sous emprise.

Un texte qui dérange, qui éclaire et qui libère — réservé aux personnes prêtes à regarder l'obscurité en face pour mieux y faire briller la lumière.`
  },
  {
    id: 7,
    titre: "La transmission de la sorcellerie au sein d'une famille",
    auteur: "NGA Marie Constantin & SIDA ABENA Jean Paul Sylvain",
    desc: "Analyse des mécanismes héréditaires et transgénérationnels de transmission des liens occultes dans les lignées africaines.",
    prixFCFA: 16000,
    images: [
      "/images/livre7/livre7_1.png",
      "/images/livre7/livre7_2.png",
      "/images/livre7/livre7_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 350,
    stock: 25,
    type: "Livre",
    isbn: "978-2-9541234-7-8",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Mécanismes de transmission de l'Évu de génération en génération",
      "Arbres généalogiques spirituels : construction et analyse",
      "Protocoles MTHS pour briser les chaînes transgénérationnelles",
      "150 études familiales sur trois générations"
    ],
    publicCible: ["Familles touchées par des schémas répétitifs", "Thérapeutes MTHS", "Chercheurs en anthropologie médicale"],
    resume: `Pourquoi certaines familles semblent-elles condamnées à répéter les mêmes malheurs de génération en génération ? Divorces, décès prématurés, échecs professionnels, maladies chroniques, conflits incessants — certains clans africains portent des fardeaux qui défient toute explication rationnelle. Cet ouvrage apporte une réponse rigoureuse et libératrice à cette question fondamentale.

Fruit d'une enquête sans précédent menée auprès de cent cinquante familles camerounaises sur trois générations, l'étude met en évidence les mécanismes précis par lesquels les alliances occultes, les initiations forcées et les envoûtements se transmettent au sein des lignées. L'auteur introduit le concept d'arbre généalogique spirituel, outil d'analyse permettant de visualiser les points d'entrée du mal dans une lignée et de comprendre sa propagation.

La seconde partie de l'ouvrage est consacrée aux protocoles thérapeutiques MTHS spécifiquement conçus pour briser ces chaînes transgénérationnelles. Combinant la confession générationnelle, les rites de réconciliation, la pharmacopée africaine et la prière de délivrance, ces protocoles ont démontré leur efficacité dans de nombreux cas documentés.

Un livre qui change des vies et libère des lignées entières — peut-être la contribution la plus importante de la MTHS à la thérapeutique familiale africaine.`
  },
  {
    id: 8,
    titre: "La vie spirituelle du sorcier — Univers astral de la sorcellerie",
    auteur: "SIDA ABENA Jean Paul Sylvain",
    desc: "Exploration cartographique des dimensions spirituelles parallèles selon les traditions africaines et la révélation MTHS.",
    prixFCFA: 12000,
    images: [
      "/images/livre8/livre8_1.png",
      "/images/livre8/livre8_2.png",
      "/images/livre8/livre8_3.png"
    ],
    format: ["Papier"],
    pages: 230,
    stock: 40,
    type: "Livre",
    isbn: "978-2-9541234-8-5",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Description des différents plans d'existence selon la MTHS",
      "Vie nocturne du sorcier dans le monde astral",
      "Fonctionnement de l'Évu comme pont entre les mondes",
      "Protection et neutralisation des influences astrales négatives"
    ],
    publicCible: ["Chercheurs en ésotérisme africain", "Thérapeutes avancés", "Personnes victimes d'attaques nocturnes"],
    resume: `Au-delà du monde visible que nos sens perçoivent s'étend un univers parallèle d'une complexité et d'une organisation que la tradition africaine a minutieusement cartographié depuis des siècles. Cet ouvrage, l'un des plus audacieux de la collection MTHS, plonge le lecteur au cœur de cet univers astral pour en dévoiler les structures, les habitants et les lois.

Basé sur la révélation directe reçue par JPSSA, sur des témoignages de personnes revenues de ces expériences et sur une analyse comparative des traditions ésotériques africaines, l'auteur décrit avec une précision troublante la géographie du "royaume de la sorcellerie" : ses lieux, ses hiérarchies, ses rituels nocturnes et ses modes de communication avec le monde visible. On y comprend comment fonctionne l'Évu comme véritable puce électronique spirituelle reliant le possédé à son maître.

Mais l'ouvrage ne se limite pas à la description. Il offre des clés concrètes pour neutraliser les influences astrales négatives, protéger le sommeil des attaques nocturnes et libérer les personnes dont l'esprit est captif dans ces dimensions parallèles. Chaque protocole est ancré dans la prière chrétienne et la pharmacopée traditionnelle.

Une plongée vertigineuse dans le monde invisible — pour mieux comprendre, et mieux libérer.`
  },
  {
    id: 9,
    titre: "Protocole thérapeutique MTHS",
    auteur: "Centre MTHS — Équipe clinique",
    desc: "Manuel technique standardisé des douze protocoles thérapeutiques de la Médecine Traditionnelle des Handicapés Spirituels.",
    prixFCFA: 14000,
    images: [
      "/images/livre9/livre9_1.png",
      "/images/livre9/livre9_2.png",
      "/images/livre9/livre9_3.png"
    ],
    format: ["PDF", "EPUB"],
    pages: 260,
    stock: 35,
    type: "E-book",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "12 protocoles thérapeutiques standardisés et éprouvés",
      "Grilles d'évaluation et fiches de suivi patient",
      "Critères de réussite mesurables et indicateurs de guérison",
      "Gestion des cas complexes et des résistances thérapeutiques"
    ],
    publicCible: ["Thérapeutes MTHS certifiés", "Professionnels de santé", "Chercheurs en médecine traditionnelle"],
    resume: `La Médecine Traditionnelle des Handicapés Spirituels n'est pas un ensemble de pratiques intuitives et empiriques — c'est une discipline structurée, avec ses protocoles, ses grilles d'évaluation et ses critères de réussite. Ce manuel technique, élaboré par l'équipe clinique du Centre Marie Reine de la Miséricorde d'Abili, en est la démonstration rigoureuse.

Les douze protocoles présentés couvrent l'ensemble du spectre des situations rencontrées en pratique MTHS : de l'envoûtement simple à la possession multiple, des blocages familiaux aux troubles transgénérationnels, des persécutions nocturnes aux addictions spirituelles. Chaque protocole articule de manière précise trois niveaux d'intervention : spirituel (prières, rites, délivrance), naturel (phytothérapie africaine, remèdes traditionnels améliorés) et psychologique (accompagnement, rééducation morale).

Des grilles d'évaluation diagnostique permettent au thérapeute de positionner précisément son patient dans le spectre des pathologies spirituelles. Des fiches de suivi structurent le processus thérapeutique semaine après semaine. Des indicateurs de guérison objectifs permettent de mesurer les progrès et d'adapter l'intervention en cours de route.

L'outil de travail indispensable pour tout praticien MTHS désireux d'exercer avec professionnalisme, éthique et efficacité.`
  },
  {
    id: 10,
    titre: "La guerre des spiritualités en Afrique",
    auteur: "NGA Marie Constantin",
    desc: "Analyse géopolitique et théologique des conflits spirituels contemporains sur le continent africain.",
    prixFCFA: 11500,
    images: [
      "/images/livre10/livre10_1.png",
      "/images/livre10/livre10_2.png",
      "/images/livre10/livre10_3.png"
    ],
    format: ["Papier"],
    pages: 200,
    stock: 50,
    type: "Livre",
    isbn: "978-2-9541234-0-9",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Cartographie des affrontements spirituels dans l'Afrique contemporaine",
      "Rôle des nouvelles sectes et églises évangéliques dans la recomposition",
      "Dialogue des traditions : animisme, christianisme, islam, MTHS",
      "Propositions pour une paix spirituelle durable"
    ],
    publicCible: ["Théologiens africains", "Leaders religieux", "Chercheurs en sciences sociales"],
    resume: `L'Afrique est un continent en guerre — non pas seulement dans ses dimensions politiques et économiques, mais au niveau le plus profond : celui de l'âme collective. Une guerre invisible, mais aux conséquences bien visibles, oppose depuis des décennies les traditions ancestrales, les religions importées, les nouvelles spiritualités syncrétiques et les mouvements évangéliques qui ont envahi le continent.

Cet essai courageux et lucide analyse avec rigueur académique les dynamiques de ces conflits spirituels. L'auteur cartographie les différentes forces en présence : le fond animiste jamais vraiment éradiqué, le christianisme dans ses multiples versions parfois contradictoires, l'islam aux visages divers, et la prolifération de nouvelles sectes qui exploitent la vulnérabilité spirituelle des populations.

Il montre comment ces affrontements façonnent profondément les identités individuelles et collectives, comment ils alimentent des violences sociales, des ruptures familiales et des crises de sens. Et il propose, à partir de l'expérience de la MTHS, des cadres de dialogue et d'intégration permettant de transcender ces guerres pour bâtir une paix spirituelle authentiquement africaine.

Un livre nécessaire, urgent et visionnaire — la contribution d'un intellectuel africain à la réconciliation de son continent avec lui-même.`
  },
  {
    id: 11,
    titre: "Chrétien africain face à la maladie",
    auteur: "NGA Marie Constantin, SIDA ABENA Jean Paul Sylvain, M'BOLO Raphaël Yves Guy, MANGA Élisabeth Angeline",
    desc: "Approche holistique des maladies dans le contexte africain, intégrant dimensions physiques, spirituelles et communautaires.",
    prixFCFA: 17000,
    images: [
      "/images/livre11/livre11_1.png",
      "/images/livre11/livre11_2.png",
      "/images/livre11/livre11_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-1-6",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Typologie des maladies spirituelles avec symptômes distinctifs",
      "Interface entre médecine moderne et médecine spirituelle",
      "Rituels de guérison complets avec prières spécifiques",
      "Cas cliniques documentés avec protocoles appliqués"
    ],
    publicCible: ["Chrétiens africains malades", "Professionnels de santé chrétiens", "Pasteurs et accompagnateurs"],
    resume: `En Afrique, la maladie n'est presque jamais vécue comme un simple dysfonctionnement biologique. Elle implique systématiquement des dimensions relationnelles, sociales, spirituelles et communautaires que la médecine occidentale est souvent ill-équipée pour traiter. Cet ouvrage collectif, réunissant quatre auteurs aux formations complémentaires, propose une synthèse inédite pour aborder la maladie dans toute sa complexité africaine.

Les auteurs développent d'abord une anthropologie de la maladie en contexte africain, distinguant ce qui relève du corps, de l'âme, de l'esprit et du collectif. Ils proposent ensuite une classification rigoureuse des "maladies spirituelles" : celles dont l'étiologie principale est occulte, celles où la dimension spirituelle aggrave un substrat organique réel, et celles qui résultent de ruptures relationnelles ou d'héritages transgénérationnels.

La seconde moitié de l'ouvrage est consacrée à des protocoles de guérison intégraux, combinant interventions médicales modernes, pharmacopée africaine, prières de délivrance et rites de réconciliation communautaire. Des dizaines de cas cliniques documentés illustrent l'efficacité de cette approche holistique.

Un livre qui réconcilie la foi et la science, la tradition et la modernité, au service de la guérison intégrale de l'homme africain.`
  },
  {
    id: 12,
    titre: "Religion chinoise face à la sorcellerie",
    auteur: "Centre MTHS",
    desc: "Étude comparée des traditions spirituelles chinoises et africaines face aux phénomènes occultes — un dialogue interculturel inédit.",
    prixFCFA: 17000,
    images: [
      "/images/livre12/livre12_1.png",
      "/images/livre12/livre12_2.png",
      "/images/livre12/livre12_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-2-3",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Parallèles entre le Qi négatif et l'Évu dans les deux traditions",
      "Rituels taoïstes et rites africains : convergences surprenantes",
      "Témoignages de pratiquants sino-africains",
      "Cadre d'intégration pour accompagnateurs interculturels"
    ],
    publicCible: ["Chercheurs en religions comparées", "Communautés sino-africaines", "Anthropologues"],
    resume: `Qui aurait imaginé que les traditions spirituelles chinoises et africaines, séparées par des millénaires et des océans, partageraient une compréhension similaire des forces invisibles qui affectent l'existence humaine ? Cet ouvrage novateur fait cette démonstration avec une érudition et une finesse remarquables.

L'auteur explore avec minutie les systèmes de pensée taoïste et chamanique chinois à travers le prisme des questions que la MTHS pose à l'Afrique : la nature des entités spirituelles malveillantes, les mécanismes de possession et d'envoûtement, les rites de protection et de purification. Les parallèles découverts sont saisissants : le Qi négatif et l'Évu obéissent à des logiques remarquablement similaires ; les rituels d'exorcisme taoïste et les rites de délivrance africains partagent une même compréhension de la séparation des mondes visible et invisible.

Des témoignages de membres des communautés chinoises d'Afrique centrale, confrontées à la rencontre entre leurs propres traditions et les réalités spirituelles africaines, apportent une dimension humaine et poignante à cette étude comparative. Ils témoignent de guérisons obtenues par des approches hybrides, intégrant les deux traditions.

Un livre d'une originalité rare, qui ouvre des horizons inattendus et contribue à l'émergence d'une spiritualité thérapeutique véritablement universelle.`
  },
  {
    id: 13,
    titre: "La vie après la mort",
    auteur: "Centre MTHS",
    desc: "Enquête théologique et anthropologique sur les conceptions africaines de l'au-delà et leur dialogue avec la foi chrétienne.",
    prixFCFA: 17000,
    images: [
      "/images/livre13/livre13_1.png",
      "/images/livre13/livre13_2.png",
      "/images/livre13/livre13_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-3-0",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Cartographie africaine des mondes après la mort",
      "Le rôle des ancêtres dans la vie des vivants",
      "Dialogue entre eschatologie africaine et doctrine chrétienne",
      "Récits d'expériences de mort imminente en contexte africain"
    ],
    publicCible: ["Chrétiens africains en deuil", "Théologiens", "Personnes cherchant un sens à la mort"],
    resume: `La mort est peut-être la seule certitude de l'existence humaine — et pourtant, elle reste le grand mystère devant lequel toutes les cultures ont élaboré des réponses, des rituels et des espérances. En Afrique, ces réponses sont d'une richesse et d'une profondeur souvent méconnues. Cet ouvrage leur rend justice en les mettant en dialogue avec la Révélation chrétienne.

L'auteur commence par dresser une cartographie détaillée des conceptions africaines de l'au-delà : le voyage de l'âme après la mort, les différents plans d'existence post-mortelle, le monde des ancêtres et leur relation avec les vivants, les conditions d'un repos paisible ou d'une errance tourmentée. Ces croyances, loin d'être de simples superstitions, constituent un système cohérent et sophistiqué qui a permis aux sociétés africaines de donner sens à la mort et de maintenir le lien entre générations.

Face à ces traditions, l'auteur convoque la théologie chrétienne : paradis, purgatoire, résurrection des corps, jugement final. Il montre les points de friction, mais aussi les convergences profondes qui permettent une synthèse enrichissante pour des chrétiens africains soucieux d'intégrer leur héritage culturel dans leur foi.

Des récits d'expériences de mort imminente vécues par des Africains, et des témoignages de personnes ayant eu des contacts avec des défunts dans le cadre de la MTHS, donnent à ce livre une dimension bouleversante et humaine.`
  },
  {
    id: 14,
    titre: "Ange ou Démon",
    auteur: "Centre MTHS",
    desc: "Manuel pratique du discernement des esprits dans la tradition chrétienne africaine — distinguer les manifestations bénéfiques des influences maléfiques.",
    prixFCFA: 17000,
    images: [
      "/images/livre14/livre14_1.png",
      "/images/livre14/livre14_2.png",
      "/images/livre14/livre14_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-4-7",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Critères théologiques et pratiques du discernement des esprits",
      "Catalogue des manifestations angéliques et démoniaques",
      "Protocoles d'évaluation pour les accompagnateurs",
      "Cas concrets d'interventions spirituelles ambiguës"
    ],
    publicCible: ["Accompagnateurs spirituels", "Pasteurs et prêtres", "Personnes vivant des expériences mystiques"],
    resume: `Dans le monde visible africain saturé de présences invisibles, la question du discernement est vitale : cette vision est-elle d'origine divine ou démoniaque ? Cette guérison subite est-elle une grâce ou un piège ? Ce rêve est-il une révélation ou une illusion ? L'enjeu spirituel et pastoral de ces questions est immense — et les erreurs de discernement peuvent avoir des conséquences dévastatrices.

Ce manuel pratique offre les outils théologiques et pratiques pour naviguer avec sagesse dans ces eaux troubles. L'auteur s'appuie sur la grande tradition du discernement des esprits héritée de l'Église (Ignace de Loyola, Jean de la Croix, les Pères du désert), enrichie par les catégories propres à l'anthropologie spirituelle africaine telles qu'elles ont été affinées par la pratique clinique de la MTHS.

Des critères objectifs de discernement sont proposés, organisés en une grille d'évaluation progressive permettant à tout accompagnateur de qualifier les phénomènes rencontrés avec rigueur et prudence. Un catalogue illustré des principales manifestations — tant angéliques que démoniaques — avec leurs caractéristiques distinctives, leurs fruits observables et les réponses pastorales appropriées, constitue le cœur opérationnel de l'ouvrage.

Des cas concrets — certains simples, d'autres vertigineux dans leur ambiguïté — permettent au lecteur d'exercer son jugement dans des situations proches de celles qu'il rencontrera sur le terrain.`
  },
  {
    id: 15,
    titre: "Chrétien africain et la maladie",
    auteur: "Centre MTHS",
    desc: "Guide holistique de compréhension et de guérison des maladies selon une approche intégrant foi chrétienne, médecine moderne et thérapies africaines.",
    prixFCFA: 17000,
    images: [
      "/images/livre15/livre15_1.png",
      "/images/livre15/livre15_2.png",
      "/images/livre15/livre15_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-5-4",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Les causes profondes des maladies selon l'anthropologie africaine",
      "Méthodes de guérison intégratives : prière, plantes, rites, médecine",
      "Accompagnement des malades dans leur parcours de foi",
      "Témoignages de guérisons documentées"
    ],
    publicCible: ["Malades et leurs familles", "Agents de santé chrétiens", "Communautés ecclésiales"],
    resume: `Compagnon de l'ouvrage "Chrétien africain face à la maladie", ce guide se veut plus accessible et plus immédiatement utile pour la personne malade elle-même et pour ceux qui l'entourent. Il part d'un constat simple et profond : en Afrique, la guérison est toujours une affaire collective, spirituelle et culturelle autant que biologique.

L'auteur explore d'abord les représentations africaines de la maladie — ses causes possibles, ses significations symboliques et sociales, les responsabilités qu'elle implique pour le malade, sa famille et sa communauté. Il montre comment une vision trop exclusivement médicale de la maladie peut parfois entraver la guérison en ignorant ces dimensions essentielles.

La partie centrale propose des méthodes de guérison intégratives adaptées à différents types de maladies : celles à prédominance biologique où la médecine moderne est première, celles à forte dimension psychosomatique où l'accompagnement spirituel est crucial, et celles d'étiologie principalement occulte où les protocoles MTHS sont indiqués. Dans chaque cas, des propositions concrètes de prières, de plantes médicinales, de rites symboliques et d'accompagnement communautaire sont formulées.

Des témoignages émouvants de personnes ayant vécu des guérisons remarquables à travers cette approche intégrative concluent un ouvrage qui restitue au malade africain sa dignité, sa foi et ses ressources propres face à l'épreuve.`
  },
  {
    id: 16,
    titre: "Comment vivre ensemble avec les sorciers",
    auteur: "Centre MTHS",
    desc: "Stratégies pratiques de coexistence, de protection et de réconciliation dans des communautés marquées par la sorcellerie.",
    prixFCFA: 17000,
    images: [
      "/images/livre16/livre16_1.png",
      "/images/livre16/livre16_2.png",
      "/images/livre16/livre16_3.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-6-1",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Stratégies de protection sans confrontation violente",
      "Gestion des dynamiques sociales autour des accusations",
      "Techniques de réconciliation et de restauration du lien",
      "Le pouvoir de l'amour comme désarmement spirituel ultime"
    ],
    publicCible: ["Communautés rurales africaines", "Leaders de quartier", "Médiateurs communautaires"],
    resume: `Dans de nombreux villages et quartiers africains, tout le monde sait — ou croit savoir — qui sont les sorciers de la communauté. Cette connaissance tacite crée une tension permanente, une méfiance diffuse qui empoisonne les relations sociales, fracture les familles et alimente des violences parfois tragiques. Comment vivre dans cet environnement sans sombrer dans la peur, la paranoïa ou la vengeance ?

Cet ouvrage porte une réponse profondément humaine et spirituellement audacieuse à cette question : il est possible de "désarmer" la sorcellerie non par la confrontation frontale, mais par la sagesse, l'amour et des stratégies de protection éprouvées. L'auteur puise dans des décennies d'expérience communautaire au Centre MTHS pour proposer un art de vivre ensemble qui transcende la menace occulte.

La première partie traite des dynamiques sociales autour de la sorcellerie : comment se forment et circulent les accusations, comment elles fracturent les communautés, comment les rumeurs amplifient les peurs au-delà de toute proportion. Des outils de gestion de ces dynamiques sont proposés aux leaders communautaires et aux médiateurs.

La seconde partie est consacrée aux stratégies concrètes : techniques de protection spirituelle au quotidien, rites symboliques de purification de l'espace, pratiques de réconciliation permettant de restaurer le lien avec des personnes soupçonnées. L'auteur montre, avec des exemples concrets et touchants, que l'amour véritable — armé de foi, de discernement et de courage — est la plus puissante des protections contre la sorcellerie.`
  }
];

function Produitdetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, cart: globalCart } = useCart();

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [currency, setCurrency] = useState("FCFA");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const exchangeRates = { FCFA: 1, USD: 0.00165, EUR: 0.00152 };

  const formatPrice = (priceFCFA, currencyType) => {
    const convertedPrice = priceFCFA * exchangeRates[currencyType];
    switch (currencyType) {
      case "USD": return `$${convertedPrice.toFixed(2)}`;
      case "EUR": return `€${convertedPrice.toFixed(2)}`;
      default: return `${convertedPrice.toLocaleString("fr-FR")} FCFA`;
    }
  };

  const loadProductFromId = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const foundProduct = ALL_PRODUCTS.find((p) => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setCategory({
          id: 0,
          name: "Livres Doctrinaux & Manuels Cliniques",
          description: "Ouvrages de référence sur la Médecine Traditionnelle des Handicapés Spirituels",
          couleur: "from-blue-500 to-blue-600"
        });
      }
      setIsLoading(false);
    }, 300);
  }, [id]);

  useEffect(() => {
    setCurrentImageIndex(0);
    if (location.state?.product) {
      // Enrichir le produit de l'état avec les données complètes depuis ALL_PRODUCTS
      const enriched = ALL_PRODUCTS.find((p) => p.id === location.state.product.id);
      setProduct(enriched || location.state.product);
      setCategory(location.state.category);
      setCurrency(location.state.currency || "FCFA");
      setIsLoading(false);
    } else {
      loadProductFromId();
    }
  }, [id, location.state, loadProductFromId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        type: "mths-product",
        title: product.titre,
        author: product.auteur || "Centre MTHS",
        price: product.prixFCFA,
        cover: product.images?.[0] || "/images/default-book.jpg",
        category: category?.name,
        format: product.format?.[0] || "Physique",
        pages: product.pages,
        stock: product.stock,
        quantity
      });
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 3000);
    }
  };

  const isInCart = () =>
    globalCart.some((item) => item.id === product?.id && item.type === "mths-product");

  const nextImage = () => {
    if (product?.images?.length) {
      setCurrentImageIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (product?.images?.length) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const getImages = () => {
    if (product?.images?.length) return product.images;
    const n = product?.id || 1;
    return [
      `/images/livre${n}/livre${n}_1.png`,
      `/images/livre${n}/livre${n}_2.png`,
      `/images/livre${n}/livre${n}_3.png`
    ];
  };

  // ─── ÉTATS DE CHARGEMENT / ERREUR ───
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-6" />
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Chargement du produit…</h2>
          <p className="text-gray-500">Veuillez patienter</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
          <BookOpen className="w-24 h-24 text-blue-200 mb-6" />
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Produit introuvable</h2>
          <p className="text-gray-600 mb-8">Ce produit n'existe pas ou a été retiré du catalogue.</p>
          <button
            onClick={() => navigate("/boutique")}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à la boutique
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = getImages();
  const labelImage = ["Première de couverture", "Quatrième de couverture", "Pages intérieures"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Bouton retour */}
        <button
          onClick={() => navigate("/boutique")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Retour à la boutique</span>
        </button>

        {/* ── Grille principale ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── Galerie ── */}
          <div className="space-y-6">
            {/* Image principale */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <SafeImage
                src={images[currentImageIndex]}
                alt={`${product.titre} — vue ${currentImageIndex + 1}`}
                className="w-full h-96 object-contain bg-gradient-to-br from-blue-50 to-blue-100 p-4"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="w-6 h-6 text-blue-600" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="w-6 h-6 text-blue-600" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentImageIndex ? "bg-blue-600 w-4" : "bg-white/70 w-2 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Miniatures */}
            {images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative overflow-hidden rounded-xl border-2 transition-all ${
                      idx === currentImageIndex
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <SafeImage
                      src={img}
                      alt={labelImage[idx] || `Vue ${idx + 1}`}
                      className="w-full h-24 object-contain bg-blue-50 p-1"
                    />
                    <div className="bg-blue-900/70 text-white text-[10px] text-center py-1 px-1">
                      {labelImage[idx] || `Vue ${idx + 1}`}
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Eye className="w-4 h-4 flex-shrink-0" />
              <span>Cliquez sur les miniatures pour naviguer entre les vues</span>
            </div>
          </div>

          {/* ── Infos produit ── */}
          <div className="space-y-6">
            {/* En-tête */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  {product.type || "Livre"} — {category?.name}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full transition-colors ${
                      isBookmarked ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    aria-label="Mettre en favori"
                  >
                    <Heart className={`w-5 h-5 ${isBookmarked ? "fill-red-500" : ""}`} />
                  </button>
                  <button
                    className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                    aria-label="Partager"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-3 leading-tight">
                {product.titre}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">{product.auteur}</span>
                </div>
                <span className="h-4 w-px bg-gray-300" />
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>{product.datePublication || "2023"}</span>
                </div>
              </div>
            </div>

            {/* Prix & stock & quantité */}
            <div className="bg-white border border-blue-200 rounded-2xl p-5 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-blue-700">
                    {formatPrice(product.prixFCFA, currency)}
                  </div>
                  {currency !== "FCFA" && (
                    <div className="text-xs text-gray-400 mt-0.5">
                      ≈ {product.prixFCFA.toLocaleString("fr-FR")} FCFA
                    </div>
                  )}
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                    product.stock < 10
                      ? "bg-orange-50 text-orange-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  <Package className="w-4 h-4" />
                  <div>
                    <div>{product.stock} disponible{product.stock > 1 ? "s" : ""}</div>
                    {product.stock < 10 && <div className="text-[10px]">Stock limité</div>}
                  </div>
                </div>
              </div>

              {/* Sélecteur quantité */}
              <div>
                <div className="text-sm font-medium text-gray-600 mb-2">Quantité</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-3 text-lg font-semibold min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">Max : {product.stock}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleAddToCart}
                disabled={isInCart()}
                className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isInCart() || isAddedToCart
                    ? "bg-green-100 text-green-700 border-2 border-green-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-lg active:scale-[0.98]"
                }`}
              >
                {isInCart() || isAddedToCart ? (
                  <>
                    <Check className="w-6 h-6" />
                    Ajouté au panier
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6" />
                    Ajouter au panier
                  </>
                )}
              </button>

              {isAddedToCart && !isInCart() && (
                <p className="text-center text-sm text-green-600 animate-pulse">
                  ✓ Produit ajouté au panier avec succès
                </p>
              )}
            </div>

            {/* Caractéristiques */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: <FileText className="w-5 h-5 text-blue-500" />,
                  label: "Format",
                  value: (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {product.format?.map((f, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  )
                },
                {
                  icon: <Clock className="w-5 h-5 text-blue-500" />,
                  label: "Pages",
                  value: <span className="text-2xl font-bold text-blue-700">{product.pages}</span>
                },
                {
                  icon: <Globe className="w-5 h-5 text-blue-500" />,
                  label: "Langue",
                  value: <span className="text-base font-medium text-blue-700">{product.langue || "Français"}</span>
                },
                {
                  icon: <Tag className="w-5 h-5 text-blue-500" />,
                  label: "ISBN",
                  value: <span className="text-xs font-mono text-gray-700">{product.isbn || "Non disponible"}</span>
                }
              ].map(({ icon, label, value }, i) => (
                <div key={i} className="bg-white border border-blue-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    {icon}
                    <span className="text-sm font-medium text-gray-600">{label}</span>
                  </div>
                  {value}
                </div>
              ))}
            </div>

            {/* Livraison & garantie */}
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-blue-900 text-sm">Livraison rapide</div>
                  <div className="text-xs text-blue-600">3–5 jours au Cameroun</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-blue-900 text-sm">Garanti certifié</div>
                  <div className="text-xs text-blue-600">Centre MTHS officiel</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Résumé complet ── */}
        <div className="mt-14 bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-5">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <Bookmark className="w-6 h-6" />
              Résumé de l'ouvrage
            </h2>
          </div>

          <div className="p-6 lg:p-10 space-y-8">
            {/* Résumé */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {product.resume || product.desc}
            </div>

            {/* Points clés */}
            {product.pointsCles?.length > 0 && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <h3 className="font-bold text-blue-900 mb-3">Points clés abordés</h3>
                <ul className="space-y-2">
                  {product.pointsCles.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Public cible */}
            {product.publicCible?.length > 0 && (
              <div>
                <h3 className="font-bold text-blue-900 mb-4">À qui s'adresse cet ouvrage ?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {product.publicCible.map((p, i) => (
                    <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center border border-blue-100">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <User className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-semibold text-blue-900">{p}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Livres connexes ── */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-blue-900">
              Autres titres de la collection
            </h2>
            <span className="text-sm text-blue-500 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              {ALL_PRODUCTS.filter((p) => p.id !== product.id).length} ouvrages
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {ALL_PRODUCTS.filter((p) => p.id !== product.id).map((rel) => (
              <button
                key={rel.id}
                onClick={() =>
                  navigate(`/produit/${rel.id}`, {
                    state: { product: rel, category, currency }
                  })
                }
                className="bg-white border border-blue-100 rounded-xl p-3 hover:border-blue-400 hover:shadow-lg transition-all duration-200 group text-left flex flex-col"
              >
                {/* Couverture */}
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 overflow-hidden flex-shrink-0">
                  <SafeImage
                    src={rel.images?.[0]}
                    alt={rel.titre}
                    className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Titre */}
                <div className="flex-1 flex flex-col justify-between gap-1.5">
                  <p className="text-xs font-semibold text-blue-900 line-clamp-3 group-hover:text-blue-700 leading-snug">
                    {rel.titre}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-bold text-blue-600">
                      {formatPrice(rel.prixFCFA, currency)}
                    </span>
                    {rel.stock < 10 && (
                      <span className="text-[9px] text-orange-500 font-medium">
                        Stock limité
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 truncate">
                    {rel.type || "Livre"}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Produitdetail;