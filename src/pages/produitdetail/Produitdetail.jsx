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

// Composant image robuste avec fallback garanti
const SafeImage = ({ src, alt, className, fallbackSrc = null, style }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [failed, setFailed] = useState(false);

  const DEFAULT_COVER = (title = "") => {
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

// Base de données complète des produits MTHS
const ALL_PRODUCTS = [
  {
    id: 1,
    titre: "Chrétien africain face à la sorcellerie",
    auteur: "NGA Marie Constantin & SIDA ABENA Jean Paul Sylvain",
    desc: "Manuel de référence sur la confrontation chrétienne aux phénomènes de sorcellerie en Afrique.",
    prixFCFA: 6500,
    images: [
      "/images/livre1/livre1_1.png",
      "/images/livre1/livre1_3.png",
      "/images/livre1/livre1_2.png",
      "/images/livre1/livre1_4.png"
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
    resume: `Imaginez un instant que quelqu'un dans votre famille tombe malade sans explication médicale. Les médecins sont impuissants. Les prières semblent rester sans réponse. Votre entourage chuchote. Et vous, chrétien sincère, vous ne savez plus quoi croire ni quoi faire.

C'est exactement la situation que cet ouvrage fondamental affronte avec courage et clarté.

Fruit de plus de deux décennies de recherches pastorales et de terrain en Afrique centrale, ce livre n'esquive rien. Il vous dit la vérité sur la sorcellerie : ce qu'elle est réellement, ce qu'elle n'est pas, et — surtout — ce que vous pouvez faire face à elle sans trahir votre foi ni ignorer votre culture.

Vous y découvrirez une chose que peu d'ouvrages chrétiens osent reconnaître : la foi chrétienne et la profondeur des traditions africaines ne sont pas des ennemies. Elles peuvent s'articuler dans une synthèse libératrice, cohérente, et redoutablement efficace.

Des dizaines de cas documentés dans des communautés réelles — des histoires de familles comme la vôtre — illustrent chaque concept. Vous reconnaîtrez des situations vécues. Vous trouverez des réponses que vous attendiez depuis longtemps.

Ce livre ne vous fera pas peur. Il vous donnera des armes. Et après l'avoir lu, vous ne regarderez plus jamais votre foi, votre culture, ni les épreuves spirituelles de votre vie de la même façon.`
  },
  {
    id: 2,
    titre: "Comment reconnaître à vue d'œil un sorcier",
    auteur: "SIDA ABENA Jean Paul Sylvain",
    desc: "Guide d'observation et de discernement des personnes impliquées dans les pratiques occultes.",
    prixFCFA: 6500,
    images: [
      "/images/livre2/livre2_1.png",
      "/images/livre2/livre2_3.png",
      "/images/livre2/livre2_2.png",
      "/images/livre2/livre2_4.png"
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
    resume: `Il y a des choses que les anciens voient et que les jeunes ne remarquent pas. Des attitudes. Des gestes. Des regards. Des comportements qui, pour celui qui sait lire les signes, racontent une histoire que les mots ne diront jamais.

Cet ouvrage vous enseigne à lire cette histoire.

Construit sur des décennies d'observation clinique au Centre Marie Reine d'Abili et sur le savoir ancestral des anciens de la tradition béti, ce guide vous offre quelque chose de rare : une méthode rigoureuse et éprouvée pour identifier les signes d'implication dans les pratiques occultes — non pour juger, non pour condamner, mais pour aider, libérer, guérir.

L'auteur vous met en garde avec fermeté contre les pièges de la suspicion et de la délation. Ce savoir n'est pas une arme. C'est un scalpel — et tout scalpel, entre des mains irresponsables, blesse. Entre des mains compétentes, il sauve.

Vous apprendrez à distinguer les signes réels des projections culturelles, à éviter les erreurs d'interprétation qui brisent des familles, à construire un regard à la fois affûté et miséricordieux.

Après avoir refermé ce livre, vous ne verrez plus les gens qui vous entourent de la même façon. Pas dans la méfiance — dans la lucidité. Et cette lucidité peut changer des vies.`
  },
  {
    id: 3,
    titre: "Comment se soigner des persécutions spirituelles",
    auteur: "SIDA ABENA Jean Paul Sylvain",
    desc: "Guide thérapeutique intégrant remèdes naturels, prières et rites de délivrance.",
    prixFCFA: 6500,
    images: [
      "/images/livre3/livre3_1.png",
      "/images/livre3/livre3_3.png",
      "/images/livre3/livre3_2.png"
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
    resume: `Vous vous réveillez épuisé après des nuits peuplées de cauchemars qui semblent trop réels. Une oppression incompréhensible pèse sur votre quotidien. Des maladies réapparaissent sans cause médicale. Des portes se ferment inexplicablement devant vous depuis des années.

Vous n'êtes peut-être pas fou. Et vous n'êtes pas seul.

Ce guide thérapeutique d'une précision remarquable compile quarante-sept protocoles de soins éprouvés, développés et affinés au fil de centaines de cas traités au Centre MTHS. Chaque protocole orchestre avec méthode trois niveaux d'intervention complémentaires : les remèdes de la pharmacopée africaine traditionnelle, les prières ciblées adaptées à chaque forme d'oppression, et les rites symboliques de purification.

Ce qui rend ce livre unique : il ne vous traite pas comme un patient passif. Il vous explique ce que vous traversez, pourquoi, et comment vous pouvez devenir acteur de votre propre libération. Parce que dans la vision MTHS, la guérison n'est pas un événement qui vous arrive — c'est une transformation que vous choisissez.

Les dosages sont indiqués avec précision. Les signes de guérison progressive sont décrits. Les contre-indications sont signalées. Vous avez entre les mains un vrai manuel clinique — pas des vœux pieux.

Si vous souffrez ou si vous accompagnez quelqu'un qui souffre, ce livre peut changer la donne. Lisez-le avec un crayon en main.`
  },
  {
    id: 4,
    titre: "À la rencontre de JPSSA",
    auteur: "Centre MTHS",
    desc: "Biographie spirituelle et doctrinale du fondateur de la Médecine Traditionnelle des Handicapés Spirituels.",
    prixFCFA: 6500,
    images: [
      "/images/livre4/livre4_1.png",
      "/images/livre4/livre4_3.png",
      "/images/livre4/livre4_2.png",
      "/images/livre4/livre4_4.png",
      "/images/livre4/livre4_5.png",
      "/images/livre4/livre4_6.png"
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
    resume: `12 mai 1979. Village d'Abili, à 27 kilomètres de Yaoundé. Un adolescent orphelin, gravement malade, sans ressources et sans espoir, est au bord du gouffre.

Ce soir-là, quelque chose d'inexplicable se produit.

La Sainte Vierge Marie lui apparaît. Et elle lui confie une mission qui va transformer des milliers de vies — dont la vôtre, si vous lisez ce livre jusqu'au bout.

Qui est vraiment Jean Paul Sylvain SIDA ABENA ? Comment un jeune homme brisé par la souffrance et l'abandon devient-il le fondateur d'une médecine qui guérit là où toutes les autres ont échoué ? Quels sont les secrets de la révélation d'Abili, et pourquoi cette mission a-t-elle traversé les décennies avec une force toujours intacte ?

Cette biographie spirituelle répond à toutes ces questions avec des documents d'archives inédits, des témoignages de ceux qui l'ont connu aux premières heures, et des extraits de ses enseignements les plus profonds. Elle ne cache rien — ni les doutes, ni les combats, ni les miracles.

Comprendre JPSSA, c'est comprendre la MTHS dans ses racines les plus vives. Et comprendre la MTHS, c'est peut-être comprendre pourquoi votre propre chemin vous a conduit jusqu'à ce livre aujourd'hui.

Certaines rencontres changent une vie. Celle-ci peut être l'une d'elles.`
  },
  {
    id: 5,
    titre: "Le musulman face à la sorcellerie",
    auteur: "Centre MTHS",
    desc: "Première approche interreligieuse adaptant les principes MTHS au contexte islamique africain.",
    prixFCFA: 6500,
    images: [
      "/images/livre5/livre5_1.png",
      "/images/livre5/livre5_3.png",
      "/images/livre5/livre5_2.png"
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
    resume: `La sorcellerie ne demande pas votre religion avant de frapper à votre porte. Elle touche les chrétiens, les animistes — et les musulmans. Pourtant, quand un fidèle de l'islam est confronté à l'envoutement, au mauvais œil ou aux pactes occultes hérités de sa lignée, il trouve rarement des réponses adaptées à sa tradition.

Ce livre comble ce vide avec une intelligence et une rigueur remarquables.

Pour la première fois, les principes thérapeutiques de la MTHS sont entièrement traduits dans le langage et la pratique de l'islam africain. L'auteur montre avec précision les convergences profondes entre la doctrine coranique sur les djinns et les entités spirituelles africaines, entre les rites de purification islamiques et les pratiques traditionnelles de protection. Des érudits coraniques reconnus ont validé les formules proposées.

Ce livre est aussi un acte de dialogue rare et courageux : il démontre que la lutte contre le mal spirituel peut unir les croyants par-delà leurs différences doctrinales, parce qu'au fond, toutes les traditions humaines partagent la même aspiration — vivre libre, vivre en paix, vivre dans la lumière.

Si vous êtes musulman et que vous cherchez des réponses à des réalités que votre entourage refuse de nommer, vous les trouverez ici. Et si vous êtes accompagnateur de fidèles musulmans, ce livre est simplement indispensable.`
  },
  {
    id: 6,
    titre: "Les dix commandements de Satan",
    auteur: "SIDA ABENA Jean Paul Sylvain",
    desc: "Étude théologique des principes spirituels inversés qui gouvernent les dynamiques occultes en Afrique.",
    prixFCFA: 6500,
    images: [
      "/images/livre6/livre6_1.png",
      "/images/livre6/livre6_3.png",
      "/images/livre6/livre6_2.png"
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
    resume: `Il existe des règles dans le royaume des ténèbres. Des lois précises, organisées, implacables. Et tant que vous ne les connaissez pas, vous jouez une partie d'échecs sans connaître les mouvements de votre adversaire.

Ce livre vous les révèle toutes.

Ces "dix commandements" ne sont pas une métaphore littéraire. Ils ont émergé de la convergence entre des témoignages de personnes sorties des milieux de sorcellerie, des textes des Écritures éclairés d'une façon que vous n'avez probablement jamais vue, et des cas cliniques documentés au Centre MTHS sur plusieurs décennies.

L'auteur vous les présente tels qu'ils opèrent réellement dans les vies — dans votre quartier, dans votre famille, peut-être dans la vôtre. Il vous montre comment chacun de ces principes inversés travaille en silence à semer la confusion, la division, la dépossession.

Et pour chaque "commandement", il vous donne une contre-stratégie précise. Parce que connaître l'ennemi, c'est déjà l'avoir à moitié vaincu.

Ce livre est dérangeant. Il est éclairant. Il est libérateur. Il est réservé à ceux qui ont la lucidité de regarder l'obscurité en face — non par fascination morbide, mais parce que c'est la seule façon d'y faire briller la lumière.

Êtes-vous prêt à vraiment comprendre ce contre quoi vous combattez ?`
  },
  {
    id: 7,
    titre: "La transmission de la sorcellerie au sein d'une famille",
    auteur: "NGA Marie Constantin & SIDA ABENA Jean Paul Sylvain",
    desc: "Analyse des mécanismes héréditaires et transgénérationnels de transmission des liens occultes dans les lignées africaines.",
    prixFCFA: 6500,
    images: [
      "/images/livre7/livre7_1.png",
      "/images/livre7/livre7_3.png",
      "/images/livre7/livre7_2.png",
      
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
    resume: `Votre père a divorcé. Son père aussi. Et son père avant lui. Votre famille enterre ses enfants avant l'heure depuis des générations. Chaque fois qu'une réussite semble à portée, quelque chose l'effondre. Les conflits se répètent comme des disques rayés, d'une génération à l'autre, avec d'autres visages mais la même douleur.

Ce n'est peut-être pas une coïncidence. Et ce livre vous explique pourquoi.

Fruit d'une enquête sans précédent menée auprès de cent cinquante familles camerounaises sur trois générations, cet ouvrage révèle les mécanismes précis par lesquels les alliances occultes, les initiations forcées et les envoûtements se transmettent dans les lignées — comme un héritage maudit que personne n'a demandé mais que tout le monde porte.

L'auteur introduit le concept révolutionnaire d'arbre généalogique spirituel : un outil d'analyse permettant de visualiser les points d'entrée du mal dans une lignée et de comprendre sa propagation dans le temps.

Mais ce livre ne s'arrête pas au diagnostic. Il va jusqu'à la libération. Les protocoles MTHS spécifiquement conçus pour briser ces chaînes transgénérationnelles sont présentés en détail, avec des cas documentés de familles qui ont retrouvé la paix et l'avenir.

Peut-être que votre famille attend que quelqu'un lise ce livre. Peut-être que c'est vous.`
  },
  {
    id: 8,
    titre: "La vie spirituelle du sorcier — Univers astral de la sorcellerie",
    auteur: "SIDA ABENA Jean Paul Sylvain",
    desc: "Exploration cartographique des dimensions spirituelles parallèles selon les traditions africaines et la révélation MTHS.",
    prixFCFA: 6500,
    images: [
      "/images/livre8/livre8_1.png",
      "/images/livre8/livre8_3.png",
      "/images/livre8/livre8_2.png"
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
    resume: `Pendant que vous dormez, il se passe des choses. Les traditions africaines le savent depuis toujours. La révélation reçue par JPSSA en a dressé la carte avec une précision qui laisse sans voix.

Ce livre vous emmène dans cet univers parallèle que vos yeux ne voient pas mais que votre âme, elle, ressent parfaitement.

Avec une rigueur troublante, l'auteur décrit la géographie du monde astral de la sorcellerie : ses lieux, ses hiérarchies, ses rituels nocturnes, ses modes d'opération. Vous comprendrez enfin pourquoi certaines personnes se réveillent épuisées, pourquoi certains rêves semblent plus réels que la réalité, comment l'Évu fonctionne comme une véritable interface entre le monde visible et l'invisible.

Basé sur la révélation directe de JPSSA, sur des témoignages de personnes revenues de ces expériences, et sur une analyse comparative des traditions ésotériques africaines, cet ouvrage est l'un des plus audacieux jamais publiés sur ce sujet.

Mais il ne se limite pas à la description. Il vous donne des clés concrètes pour neutraliser les influences astrales négatives, protéger votre sommeil, et libérer les personnes dont l'esprit est captif dans ces dimensions. Chaque protocole s'appuie sur la prière chrétienne et la pharmacopée traditionnelle africaine.

Une plongée vertigineuse dans le monde invisible. Pour mieux comprendre — et mieux libérer.`
  },
  {
    id: 9,
    titre: "Protocole thérapeutique MTHS",
    auteur: "Centre MTHS — Équipe clinique",
    desc: "Manuel technique standardisé des douze protocoles thérapeutiques de la Médecine Traditionnelle des Handicapés Spirituels.",
    prixFCFA: 6500,
    images: [
      "/images/livre9/livre9_1.png",
      "/images/livre9/livre9_3.png",
      "/images/livre9/livre9_2.png"
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
    resume: `La MTHS n'est pas une intuition. Ce n'est pas un ensemble de pratiques empiriques transmises à l'oreille. C'est une discipline. Avec des protocoles. Des grilles d'évaluation. Des critères mesurables. Une rigueur clinique que peu osaient imaginer possible dans ce domaine.

Ce manuel en est la preuve absolue.

Élaboré par l'équipe clinique du Centre Marie Reine de la Miséricorde d'Abili, il présente les douze protocoles qui couvrent l'intégralité du spectre des situations rencontrées en pratique MTHS : de l'envoûtement simple à la possession multiple, des blocages familiaux aux troubles transgénérationnels, des persécutions nocturnes aux addictions spirituelles.

Pour chaque situation : une intervention spirituelle précise, une intervention naturelle par la phytothérapie africaine, et un accompagnement psychologique structuré. Des grilles diagnostiques permettent de positionner le patient. Des fiches de suivi structurent le processus semaine après semaine. Des indicateurs objectifs permettent de mesurer les progrès.

Si vous êtes thérapeute ou accompagnateur, ce manuel est votre colonne vertébrale. Il vous permettra d'exercer avec professionnalisme, éthique et — surtout — une efficacité que vous ne laisserez plus jamais au hasard.

La médecine de l'âme mérite autant de rigueur que la médecine du corps. Ce livre en est la démonstration lumineuse.`
  },
  {
    id: 10,
    titre: "La guerre des spiritualités en Afrique",
    auteur: "NGA Marie Constantin",
    desc: "Analyse géopolitique et théologique des conflits spirituels contemporains sur le continent africain.",
    prixFCFA: 6500,
    images: [
      "/images/livre10/livre10_1.png",
      "/images/livre10/livre10_3.png",
      "/images/livre10/livre10_2.png"
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
    resume: `L'Afrique saigne. Pas seulement de ses guerres politiques ou de ses crises économiques. Elle saigne d'une blessure plus profonde, moins visible, mais tout aussi dévastatrice : la guerre des âmes.

Une guerre entre l'animisme jamais vraiment mort et le christianisme importé aux visages souvent contradictoires. Entre l'islam aux multiples visages et les nouvelles sectes qui prolifèrent en exploitant la vulnérabilité spirituelle des populations. Une guerre où chaque communauté, chaque famille, parfois chaque individu, est un champ de bataille.

Cet essai lucide et courageux cartographie ces conflits avec une rigueur académique rare. L'auteur ne prend parti pour personne — il observe, analyse, et révèle des dynamiques que peu de gens ont le courage ou la compétence de nommer clairement.

Il montre comment ces guerres invisibles façonnent les identités, alimentent des violences sociales, fracturent des familles et provoquent des crises de sens à grande échelle. Et il propose — à partir de l'expérience unique de la MTHS — des cadres de dialogue et d'intégration pour bâtir enfin une paix spirituelle authentiquement africaine.

Ce livre vous donnera les clés pour comprendre l'Afrique profonde. Pas l'Afrique des cartes postales ou des discours politiques — l'Afrique de l'intérieur, celle des âmes en combat.

Un livre nécessaire. Un livre urgent. Un livre que l'Afrique attendait.`
  },
  {
    id: 12,
    titre: "Religion chinoise face à la sorcellerie",
    auteur: "Centre MTHS",
    desc: "Étude comparée des traditions spirituelles chinoises et africaines face aux phénomènes occultes — un dialogue interculturel inédit.",
    prixFCFA: 6500,
    images: [
      "/images/livre12/livre12_1.png",
      "/images/livre12/livre12_3.png",
      "/images/livre12/livre12_2.png",
      "/images/livre12/livre12_4.png"
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
    resume: `Deux civilisations. Deux continents. Des millénaires et des océans de distance. Et pourtant — une compréhension presque identique des forces invisibles qui affectent la vie humaine.

Comment est-ce possible ? Ce livre vous le révèle, et la réponse va vous stupéfier.

L'auteur compare avec une érudition remarquable les systèmes spirituels taoïste et chamanique chinois avec les traditions africaines telles que la MTHS les a cartographiées. Les parallèles sont saisissants : le Qi négatif et l'Évu obéissent à des logiques quasi identiques. Les rituels d'exorcisme taoïste et les rites de délivrance africains partagent une même compréhension de la frontière entre monde visible et invisible. Les méthodes de protection, de purification, de guérison — étrangement semblables.

Des témoignages bouleversants de membres des communautés chinoises d'Afrique centrale — confrontées à la rencontre entre leurs propres traditions et les réalités spirituelles africaines — donnent à ce livre une dimension humaine et poignante. Certains témoignent de guérisons obtenues par des approches hybrides intégrant les deux traditions.

Ce livre pose une question radicale : et si la compréhension spirituelle profonde était universelle ? Et si toutes les grandes traditions humaines, depuis toujours, avaient capté quelque chose de vrai sur la nature de l'invisible ?

Un livre d'une originalité absolue — qui élargit l'horizon de tout ce que vous croyiez savoir.`
  },
  {
    id: 13,
    titre: "La vie après la mort",
    auteur: "Centre MTHS",
    desc: "Enquête théologique et anthropologique sur les conceptions africaines de l'au-delà et leur dialogue avec la foi chrétienne.",
    prixFCFA: 6500,
    images: [
      "/images/livre13/livre13_1.png",
      "/images/livre13/livre13_3.png",
      "/images/livre13/livre13_2.png"
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
    resume: `Que se passe-t-il vraiment après la mort ? Pas ce que vous espérez. Pas ce que vous craignez. Ce qui se passe réellement — selon les anciens d'Afrique, selon la révélation chrétienne, selon les témoignages de ceux qui en sont revenus.

Ce livre ose aller là où peu d'ouvrages ont le courage de s'aventurer.

L'auteur dresse une cartographie détaillée et fascinante des conceptions africaines de l'au-delà : le voyage de l'âme après la mort, les différents plans d'existence post-mortelle, le monde des ancêtres et leur relation réelle avec les vivants, les conditions d'un repos paisible ou d'une errance tourmentée. Ces croyances ne sont pas de simples superstitions — elles forment un système cohérent et sophistiqué, élaboré sur des millénaires.

Face à ces traditions, l'auteur convoque la théologie chrétienne dans toute sa richesse — et les dialogues révèlent des convergences profondes qui éclairent la foi des chrétiens africains d'une lumière nouvelle.

Des récits d'expériences de mort imminente vécues par des Africains, et des témoignages de personnes ayant eu des contacts avec des défunts dans le cadre de la MTHS, donnent à ce livre une dimension bouleversante que vous n'oublierez pas.

Si vous avez perdu quelqu'un. Si vous craignez la mort. Si vous cherchez à comprendre ce que les ancêtres savent et que les vivants ont oublié — ce livre est pour vous.`
  },
  {
    id: 14,
    titre: "Ange ou Démon",
    auteur: "Centre MTHS",
    desc: "Manuel pratique du discernement des esprits dans la tradition chrétienne africaine — distinguer les manifestations bénéfiques des influences maléfiques.",
    prixFCFA: 6500,
    images: [
      "/images/livre14/livre14_1.png",
      "/images/livre14/livre14_3.png",
      "/images/livre14/livre14_2.png"
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
    resume: `Quelqu'un vous raconte une vision. Un rêve extraordinaire. Une voix qui lui parle la nuit. Une guérison subite et inexpliquée. Et vous, l'accompagnateur, le pasteur, le proche — vous devez répondre à la question la plus difficile qui soit : est-ce de Dieu ou non ?

Une erreur dans un sens peut briser une vocation. Une erreur dans l'autre peut livrer une âme à l'illusion ou au danger.

Ce manuel pratique vous donne les outils pour ne jamais errer seul dans ces eaux troubles.

S'appuyant sur la grande tradition du discernement des esprits héritée de l'Église — Ignace de Loyola, Jean de la Croix, les Pères du désert — enrichie par les catégories propres à l'anthropologie spirituelle africaine telles qu'elles ont été affinées au Centre MTHS, l'auteur propose une grille d'évaluation progressive, rigoureuse et maniable.

Un catalogue illustré des principales manifestations — angéliques et démoniaques — avec leurs caractéristiques distinctives, leurs fruits observables et les réponses pastorales appropriées, constitue le cœur de l'ouvrage.

Des cas concrets — certains simples, d'autres vertigineux dans leur ambiguïté — vous permettent d'exercer votre jugement avant de vous retrouver en situation réelle.

Ce livre ne vous rendra pas infaillible. Mais il vous rendra infiniment plus sage. Et parfois, dans l'accompagnement spirituel, c'est la sagesse qui fait la différence entre la libération et le naufrage.`
  },
  {
    id: 15,
    titre: "Chrétien africain et la maladie",
    auteur: "Centre MTHS",
    desc: "Guide holistique de compréhension et de guérison des maladies selon une approche intégrant foi chrétienne, médecine moderne et thérapies africaines.",
    prixFCFA: 6500,
    images: [
      "/images/livre15/livre15_1.png",
      "/images/livre15/livre15_3.png",
      "/images/livre15/livre15_2.png"
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
    resume: `Tomber malade en Afrique, ce n'est pas la même chose que tomber malade ailleurs. En Afrique, quand quelqu'un est malade, toute la famille est malade. Toute la communauté se mobilise — ou se divise. Les questions qu'on ne pose jamais à voix haute se mettent à résonner partout : Pourquoi lui ? Pourquoi maintenant ? Qui est derrière ça ?

Ce guide comprend ces questions. Et il y répond avec douceur, profondeur et efficacité pratique.

Plus accessible que son grand frère académique, ce livre s'adresse directement au malade et à ceux qui l'entourent. Il part d'un constat simple et profond : en Afrique, la guérison est toujours collective, spirituelle et culturelle autant que biologique. Ignorer l'une de ces dimensions, c'est soigner à moitié.

L'auteur vous explique comment identifier la nature profonde d'une maladie — biologique, psychosomatique ou spirituelle — et quelles ressources mobiliser dans chaque cas. Des prières concrètes. Des plantes médicinales éprouvées. Des rites symboliques accessibles à tous. Un accompagnement communautaire structuré.

Des témoignages émouvants de personnes ayant vécu des guérisons remarquables grâce à cette approche intégrative vous attendent dans ces pages. Des histoires réelles. Des noms. Des visages. Des vies retrouvées.

Ce livre vous restitue quelque chose de précieux : votre dignité de malade africain, avec toutes vos ressources spirituelles et culturelles intactes.`
  },
  {
    id: 16,
    titre: "Comment vivre ensemble avec les sorciers",
    auteur: "Centre MTHS",
    desc: "Stratégies pratiques de coexistence, de protection et de réconciliation dans des communautés marquées par la sorcellerie.",
    prixFCFA: 6500,
    images: [
      "/images/livre16/livre16_1.png",
      "/images/livre16/livre16_3.png",
      "/images/livre16/livre16_2.png"
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
    resume: `Dans votre village, tout le monde le sait. Dans votre quartier, tout le monde chuchote. Les accusations circulent. Les regards changent. La méfiance s'installe comme une mauvaise saison qui ne finit plus. Et vous, au milieu de tout ça, vous devez continuer à vivre — à côté de gens que vous craignez, à côté de gens qui vous craignent.

Comment fait-on ?

Ce livre porte une réponse que vous n'attendez pas — et qui va peut-être changer votre façon de voir les choses pour toujours : il est possible de "désarmer" la sorcellerie non par la confrontation frontale, mais par la sagesse, la protection stratégique et — oui — l'amour.

L'auteur puise dans des décennies d'expérience communautaire au Centre MTHS pour proposer un art de vivre ensemble qui transcende la menace occulte. Il vous explique comment se forment et circulent les accusations, pourquoi les rumeurs amplifient les peurs au-delà de toute proportion, et comment les leaders communautaires peuvent reprendre le contrôle de ces dynamiques destructrices.

Il vous enseigne ensuite des techniques concrètes de protection au quotidien, des rites de purification de l'espace communautaire, et des pratiques de réconciliation permettant de restaurer le lien même avec des personnes soupçonnées.

Parce que la coexistence n'est pas la capitulation. C'est la sagesse la plus haute qui soit.`
  },
  {
    id: 17,
    titre: "Le Satanisme et la dérive du monde",
    auteur: "Centre MTHS",
    desc: "Analyse théologique et sociale du satanisme contemporain et de ses infiltrations dans la société africaine et mondiale.",
    prixFCFA: 6500,
    images: [
      "/images/livre17/livre17_1.png",
      "/images/livre17/livre17_3.png",
      "/images/livre17/livre17_2.png",
      "/images/livre17/livre17_4.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-6-1",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Origines et structures du satanisme contemporain",
      "Infiltrations dans la musique, la mode, les médias et la politique",
      "Signes de reconnaissance et rituels sataniques décryptés",
      "Stratégies de résistance chrétienne et africaine"
    ],
    publicCible: ["Chrétiens en quête de discernement culturel", "Parents et éducateurs", "Pasteurs et leaders d'opinion"],
    resume: `Vous regardez un clip musical et quelque chose vous dérange sans que vous sachiez exactement quoi. Vous voyez certains symboles partout — dans la mode, dans les films, dans les gestes de certains artistes — et une inquiétude sourde s'installe. Votre enfant écoute des musiques dont les paroles, traduites, vous glacent le sang.

Vous n'êtes pas paranoïaque. Et ce livre est écrit pour vous.

Le satanisme contemporain n'est pas une curiosité marginale réservée à quelques illuminés en marge de la société. Il est organisé, structuré, financé, et ses tentacules atteignent des domaines que vous fréquentez chaque jour : la musique, la mode, les réseaux sociaux, le cinéma, parfois même la politique.

Cet ouvrage l'analyse avec une clarté et un courage rares. Il décrypte les origines idéologiques du satanisme moderne, ses rituels, ses symboles, ses modes d'infiltration culturelle. Il montre comment il opère spécifiquement en Afrique, comment il se greffe sur les vulnérabilités spirituelles locales, et comment distinguer une influence sataniste réelle d'une simple esthétique provocatrice.

Mais il ne vous laisse pas dans la peur. Il vous arme d'un discernement culturel solide et de stratégies de résistance ancrées dans la foi chrétienne et la sagesse africaine.

Parce que comprendre la dérive du monde, c'est refuser d'en être emporté.`
  },
  {
    id: 18,
    titre: "Tradition africaine et christianisme",
    auteur: "Centre MTHS",
    desc: "Dialogue approfondi entre les traditions ancestrales africaines et la foi chrétienne — vers une synthèse authentique et libératrice.",
    prixFCFA: 6500,
    images: [
      "/images/livre18/livre18_1.png",
      "/images/livre18/livre18_3.png",
      "/images/livre18/livre18_2.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-6-1",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Ce que le christianisme doit aux traditions africaines",
      "Les pratiques traditionnelles compatibles avec la foi chrétienne",
      "Frontières claires entre inculturation et syncrétisme",
      "Vers une identité chrétienne africaine pleinement assumée"
    ],
    publicCible: ["Chrétiens africains en quête d'identité", "Théologiens de l'inculturation", "Catéchistes et leaders d'Église"],
    resume: `On vous a appris à choisir : soit vous êtes africain, soit vous êtes chrétien. Soit vous honorez vos ancêtres, soit vous priez Jésus. Soit vous gardez vos traditions, soit vous embrassez l'Évangile. Comme si votre identité devait être une capitulation.

Ce livre vous libère de ce faux choix.

Avec une profondeur théologique et une sensibilité culturelle rares, l'auteur démontre que le christianisme et les traditions africaines ne sont pas des ennemis — ils sont, à bien des égards, deux langages pour dire des vérités profondes sur l'homme, Dieu et le sacré. Des vérités qui se complètent, s'enrichissent et se fécondent mutuellement.

Vous découvrirez ce que le christianisme africain a à gagner à puiser dans ses racines traditionnelles — sans syncrétisme, sans confusion, mais avec une intelligence qui élève les deux héritages. Vous comprendrez quelles pratiques traditionnelles sont pleinement compatibles avec la foi chrétienne, et où se situent les frontières réelles à ne pas franchir.

Ce livre vous donnera quelque chose que beaucoup de chrétiens africains cherchent sans trouver : une identité intégrale. Être chrétien jusqu'au bout. Être africain jusqu'au bout. Et découvrir que ces deux plénitudes ne se contredisent pas — elles se révèlent.

Vous n'aurez plus jamais à choisir.`
  },
  {
    id: 19,
    titre: "Le bouddhisme face à la sorcellerie et au Satanisme",
    auteur: "Centre MTHS",
    desc: "Étude comparative entre la philosophie bouddhiste et les phénomènes de sorcellerie et de satanisme — convergences et divergences.",
    prixFCFA: 6500,
    images: [
      "/images/livre19/livre19_1.png",
      "/images/livre19/livre19_3.png",
      "/images/livre19/livre19_2.png",
      "/images/livre19/livre19_4.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-6-1",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "La notion bouddhiste du karma face aux malédictions africaines",
      "Méditation et prière de délivrance : outils comparés",
      "Le vide bouddhiste face au plein spirituel africain",
      "Ce que chaque tradition peut apprendre de l'autre"
    ],
    publicCible: ["Curieux de spiritualités comparées", "Accompagnateurs interculturels", "Chercheurs en philosophie religieuse"],
    resume: `Le bouddhisme parle de souffrance, d'attachement, de karma, de délivrance. La MTHS parle d'oppression, de liens occultes, de transmission, de libération. Deux langages. Deux civilisations. Et une question commune : comment l'être humain se libère-t-il de ce qui l'enchaîne ?

Ce livre fait dialoguer ces deux traditions avec une intelligence qui dépasse toutes les attentes.

L'auteur explore les convergences troublantes entre la philosophie bouddhiste et la compréhension africaine des forces spirituelles : la notion de karma face aux malédictions héréditaires, la pratique de la méditation face aux protocoles de purification MTHS, la conception bouddhiste des entités maléfiques face aux réalités démoniaques africaines.

Mais il n'efface pas les différences — il les met en lumière avec la même honnêteté, montrant où les deux traditions se séparent et pourquoi ces divergences importent.

Ce livre vous donnera une chose rare : la capacité de penser votre propre foi et votre propre culture à partir d'un regard extérieur, neuf, déstabilisant — et finalement enrichissant.

Que vous soyez croyant, chercheur ou simplement curieux de comprendre comment l'humanité, à travers ses grandes traditions, a toujours su qu'il existait quelque chose au-delà du visible, ce livre est une invitation à un voyage intellectuel et spirituel inoubliable.`
  },
  {
    id: 20,
    titre: "Sectes et sociétés secrètes africaines",
    auteur: "Centre MTHS",
    desc: "Enquête documentée sur les organisations occultes et secrètes qui structurent les rapports de pouvoir en Afrique.",
    prixFCFA: 6500,
    images: [
      "/images/livre20/livre20_1.png",
      "/images/livre20/livre20_3.png",
      "/images/livre20/livre20_2.png",
      "/images/livre20/livre20_4.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-6-1",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Cartographie des principales sociétés secrètes africaines",
      "Rituels d'initiation et pactes de sang documentés",
      "Lien entre sociétés secrètes, politique et économie",
      "Comment reconnaître et se protéger de leur influence"
    ],
    publicCible: ["Chrétiens en quête de discernement social", "Leaders politiques et communautaires", "Chercheurs en sciences sociales africaines"],
    resume: `Il y a une autre Afrique, cachée sous celle que vous voyez. Une Afrique de loges, de fraternités, de pactes nocturnes et de serments de sang. Une Afrique où certaines réussites s'achètent à un prix que personne ne prononce à voix haute. Une Afrique où les rapports de pouvoir — politiques, économiques, familiaux — sont souvent gouvernés par des règles que seuls les initiés connaissent.

Ce livre vous ouvre les portes de cette Afrique-là.

Avec une rigueur documentaire et un courage intellectuel rares, l'auteur cartographie les principales sociétés secrètes et sectes qui opèrent sur le continent africain : leurs origines, leurs structures, leurs rituels d'initiation, leurs pactes, et la façon dont elles s'infiltrent dans les sphères politiques, économiques et religieuses.

Vous comprendrez des choses que vous aviez toujours senties confusément — pourquoi certaines personnes montent si vite et tombent si brutalement, pourquoi certains milieux semblent régis par des loyautés impossibles à comprendre de l'extérieur, pourquoi certaines décisions politiques semblent obéir à une logique invisible.

Ce livre ne cherche pas à alimenter la paranoïa. Il cherche à vous donner la lucidité nécessaire pour naviguer dans ces réalités, protéger votre famille, et faire des choix éclairés dans une société africaine dont les codes les plus profonds sont souvent les moins connus.

Ce que vous ne savez pas peut vous contrôler. Ce que vous savez peut vous libérer.`
  },
  {
    id: 21,
    titre: "Comment comprendre et interpréter le Rêve",
    auteur: "Centre MTHS",
    desc: "Guide complet pour comprendre le langage des rêves selon la tradition africaine, la psychologie et la spiritualité chrétienne.",
    prixFCFA: 6500,
    images: [
      "/images/livre21/livre21_1.png",
      "/images/livre21/livre21_3.png",
      "/images/livre21/livre21_2.png",
      "/images/livre21/livre21_4.png"
    ],
    format: ["Papier", "PDF"],
    pages: 310,
    stock: 20,
    type: "Livre",
    isbn: "978-2-9541234-6-1",
    datePublication: "2023",
    langue: "Français",
    pointsCles: [
      "Typologie des rêves : révélation, avertissement, attaque spirituelle, refoulement",
      "Symbolique africaine des rêves les plus fréquents",
      "Comment répondre spirituellement à un rêve alarmant",
      "Journal de rêves et méthode d'interprétation progressive"
    ],
    publicCible: ["Personnes troublées par leurs rêves", "Accompagnateurs spirituels", "Tout chrétien africain"],
    resume: `La nuit dernière, vous avez rêvé. Et à votre réveil, quelque chose ne vous a pas lâché — une image, une sensation, une certitude que ce rêve voulait vous dire quelque chose d'important. Mais quoi ?

Depuis toujours, l'Afrique sait que les rêves ne sont pas des accidents de la nuit. Ils sont des messages. Des avertissements. Des révélations. Parfois des attaques spirituelles. Et savoir les lire peut changer le cours de votre vie.

Ce guide complet vous enseigne à déchiffrer ce langage.

L'auteur croise avec une intelligence remarquable trois traditions d'interprétation : la symbolique ancestrale africaine — notamment béti — forgée sur des siècles d'observation ; la psychologie moderne des rêves héritée de Jung et ses successeurs ; et la grande tradition biblique de l'interprétation des songes, de Joseph à Daniel.

Vous apprendrez à distinguer un rêve de révélation divine d'un rêve d'attaque spirituelle, un rêve d'avertissement d'un simple refoulement psychologique. Vous découvrirez la symbolique des images les plus fréquentes dans les rêves africains — l'eau, le serpent, les défunts, les poursuites, les maisons — et ce qu'elles signifient vraiment dans votre contexte.

Un protocole de réponse spirituelle est proposé pour les rêves alarmants. Une méthode de journal de rêves structure votre pratique dans la durée.

La nuit vous parle. Il est temps d'apprendre à l'écouter.`
  },
 {
  id: 22,
  titre: "Comment obtenir ta Délivrance et ta Victoire contre le Diable, les Démons et les Sorciers",
  auteur: "Centre MTHS",
  desc: "Guide pratique de délivrance et de guerre spirituelle selon les protocoles éprouvés du Centre MTHS.",
  prixFCFA: 6500,
  images: [
    "/images/livre22/livre22_1.png",
    "/images/livre22/livre22_3.png",
    "/images/livre22/livre22_2.png",
    "/images/livre22/livre22_4.png"
  ],
  format: ["Papier", "PDF"],
  pages: 310,
  stock: 20,
  type: "Livre",
  isbn: "978-2-9541234-6-1",
  datePublication: "2023",
  langue: "Français",
  pointsCles: [
    "Comprendre la nature de l'oppression spirituelle : modes opératoires du diable, des démons et des sorciers",
    "Identifier les portes d'entrée des forces obscures dans une vie (traumatismes, pactes, lignées)",
    "Protocole de délivrance en trois phases : rupture des liens, nettoyage intérieur, restauration de l'identité",
    "Stratégies concrètes pour maintenir sa victoire et prévenir les rechutes",
    "Témoignages édifiants de personnes libérées et accompagnées au Centre MTHS"
  ],
  publicCible: ["Personnes troublées par leurs rêves", "Accompagnateurs spirituels", "Tout chrétien africain"],
  resume: `Vous avez tout essayé. Les prières, les jeûnes, les consultations, les onctions. Pourtant, la même oppression revient. Les mêmes cauchemars. Les mêmes blocages. Les mêmes échecs répétés. Et au fond de vous, une question vous ronge : est‑ce que la délivrance existe vraiment pour moi ?

Oui. Elle existe. Et ce livre vous montre le chemin.

Élaboré à partir de centaines de cas traités au Centre Marie Reine de la Miséricorde d’Abili, ce guide pratique vous livre les protocoles éprouvés qui ont libéré des milliers de personnes des griffes de l’ennemi. Pas des théories, pas des formules toutes faites : une méthode progressive, concrète, qui respecte votre rythme et votre histoire.

Vous découvrirez d’abord comment fonctionne réellement l’oppression spirituelle : comment le diable, les démons et les sorciers opèrent ensemble ou séparément, quelles sont leurs cibles favorites, et surtout quelles sont les portes par lesquelles ils entrent dans une vie – parfois sans que vous le sachiez.

Ensuite, vous serez guidé pas à pas à travers un processus de délivrance en trois phases : la rupture des liens, le nettoyage intérieur, et la restauration de votre identité spirituelle. Chaque phase est détaillée avec des prières spécifiques, des actes de guerre spirituelle et des accompagnements concrets.

Mais ce livre va plus loin. Il vous apprend à garder votre victoire. Parce que beaucoup sont délivrés, mais peu le restent. Vous saurez comment construire des défenses durables, comment discerner les retours offensifs de l’ennemi, et comment vivre chaque jour dans la liberté que le Christ a gagnée pour vous.

Des témoignages poignants ponctuent ces pages – des histoires de personnes qui étaient liées depuis l’enfance, qui avaient tout perdu, et qui aujourd’hui marchent dans une liberté totale.

La délivrance n’est pas un événement. C’est un processus. Et ce processus peut commencer aujourd’hui, avec ce livre entre vos mains. Préparez‑vous à vivre ce que vous n’osiez plus espérer. Votre victoire est à portée.`
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
        setCurrentImageIndex(0); // Réinitialisation ici
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
    if (location.state?.product) {
      const enriched = ALL_PRODUCTS.find((p) => p.id === location.state.product.id);
      setProduct(enriched || location.state.product);
      setCategory(location.state.category);
      setCurrency(location.state.currency || "FCFA");
      setCurrentImageIndex(0); // Réinitialisation ici aussi
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
        <button
          onClick={() => navigate("/boutique")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Retour à la boutique</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Galerie */}
          <div className="space-y-6">
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

          {/* Infos produit */}
          <div className="space-y-6">
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

              {/* BOUTON "LIRE UN EXTRAIT" (PDF) */}
              <a
                href={`/images/extrait/livre${product.id}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 mt-3"
              >
                <BookOpen className="w-6 h-6" />
                Lire un extrait (PDF)
              </a>
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

        {/* Résumé complet */}
        <div className="mt-14 bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-5">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <Bookmark className="w-6 h-6" />
              Résumé de l'ouvrage
            </h2>
          </div>

          <div className="p-6 lg:p-10 space-y-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {product.resume || product.desc}
            </div>

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

        {/* Livres connexes */}
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
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 overflow-hidden flex-shrink-0">
                  <SafeImage
                    src={rel.images?.[0]}
                    alt={rel.titre}
                    className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

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