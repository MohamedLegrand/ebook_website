import React, { useState, useEffect, useRef } from "react";
import {
  Compass,
  Leaf,
  Droplets,
  Shield,
  Users,
  Target,
  Heart,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Check,
  Star,
  Quote,
} from "lucide-react";

/* ─── Hook: observe si l'élément est visible (pour animations) ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ─── Animated Counter ─── */
function Counter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.5);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════════════ */
const Piliers = () => {
  const [activePillar, setActivePillar] = useState(0);
  const [heroRef, heroInView] = useInView(0.1);

  const pillars = [
    {
      id: 1,
      number: "01",
      title: "Diagnostic spirituel & psychosomatique",
      subtitle: "Voir au-delà du symptôme",
      icon: <Compass className="w-7 h-7" />,
      color: "#1d4ed8",
      colorLight: "#eff6ff",
      colorMid: "#bfdbfe",
      accentColor: "blue",
      description: "Toute guérison véritable commence par la vérité. Avant d'agir, nous écoutons. Profondément. Sans jugement. Le thérapeute MTHS pratique une écoute active qui dépasse le symptôme pour atteindre sa racine — qu'elle soit spirituelle, familiale, psychologique ou sociale.",
      details: "Un entretien approfondi en plusieurs temps permet de reconstituer l'histoire de la personne, de sa naissance aux générations qui la précèdent. Des grilles diagnostiques spécifiques, fruit de décennies de pratique clinique, permettent de distinguer les troubles d'origine purement médicale des souffrances à composante spirituelle.",
      benefits: [
        "Écoute sans jugement dans le respect total du secret",
        "Analyse de l'arbre généalogique spirituel",
        "Identification précise des portes d'entrée du mal",
        "Plan thérapeutique personnalisé et évolutif",
      ],
      quote: "On ne guérit pas ce qu'on ne comprend pas. On ne comprend pas ce qu'on refuse d'écouter.",
    },
    {
      id: 2,
      number: "02",
      title: "Naturopathie & pharmacopée africaine",
      subtitle: "La sagesse de la terre au service de l'âme",
      icon: <Leaf className="w-7 h-7" />,
      color: "#15803d",
      colorLight: "#f0fdf4",
      colorMid: "#bbf7d0",
      accentColor: "green",
      description: "L'Afrique possède un patrimoine phytothérapeutique d'une richesse inouïe, élaboré sur des millénaires par des peuples qui n'avaient que la nature comme pharmacie. La MTHS a systématisé ce savoir, l'a enrichi par les apports de la science moderne, et l'a intégré dans des protocoles rigoureux.",
      details: "Chaque plante, chaque préparation répond à une indication précise. Les dosages sont définis. Les contre-indications sont signalées. Les associations bénéfiques sont documentées. Loin d'être un amas de pratiques empiriques, la pharmacopée MTHS est une discipline structurée, à la fois ancrée dans la tradition et ouverte à la vérification scientifique.",
      benefits: [
        "Préparations à base de plantes médicinales africaines certifiées",
        "Protocoles dosés avec précision médicale",
        "Complémentarité avec les traitements conventionnels",
        "Bains, fumigations et décoctions thérapeutiques adaptés",
      ],
      quote: "La forêt africaine est une pharmacie qui n'a jamais fermé ses portes.",
    },
    {
      id: 3,
      number: "03",
      title: "Rituels de purification — Rite SO'O inculturé",
      subtitle: "Purifier pour libérer",
      icon: <Droplets className="w-7 h-7" />,
      color: "#0e7490",
      colorLight: "#ecfeff",
      colorMid: "#a5f3fc",
      accentColor: "cyan",
      description: "Le rite SO'O est le cœur symbolique de la MTHS. Issu de la tradition béti ancestrale, il a été entièrement réinterprété à la lumière de la foi chrétienne pour devenir un acte sacré d'une puissance singulière : la purification du corps, de l'espace de vie et du lignage familial.",
      details: "La purification n'est pas un simple geste magique. C'est un acte de rupture symbolique et réel avec tout ce qui souille — les pactes hérités, les présences indésirables, les mémoires blessées. Conduit par un thérapeute formé, accompagné de prières spécifiques et d'éléments naturels chargés de signification, le rite SO'O inculturé réconcilie la profondeur africaine avec la foi du baptisé.",
      benefits: [
        "Purification du foyer et des espaces de vie",
        "Rupture des liens occultes hérités",
        "Réconciliation de la tradition africaine avec la foi chrétienne",
        "Rites adaptés à chaque situation et à chaque culture",
      ],
      quote: "Quand la maison est purifiée, l'âme qui l'habite peut enfin respirer.",
    },
    {
      id: 4,
      number: "04",
      title: "Délivrance & désenvoûtement",
      subtitle: "Briser les chaînes de l'invisible",
      icon: <Shield className="w-7 h-7" />,
      color: "#7e22ce",
      colorLight: "#faf5ff",
      colorMid: "#e9d5ff",
      accentColor: "purple",
      description: "C'est le pilier le plus connu de la MTHS, et sans doute le plus mal compris. La délivrance n'est ni un spectacle ni une performance. C'est un acte thérapeutique et spirituel précis, conduit avec méthode, prière et discernement, pour libérer une personne des liens qui la tiennent captive sans qu'elle l'ait choisi.",
      details: "L'envoûtement, la possession, l'emprise familiale — ce sont des réalités que les thérapeutes MTHS ont appris à identifier, à graduer et à traiter selon des protocoles éprouvés. La délivrance s'inscrit toujours dans un accompagnement global : elle n'est jamais isolée du diagnostic, de la purification ni du suivi post-libération.",
      benefits: [
        "Protocoles de délivrance progressifs et sécurisés",
        "Accompagnement par prières spécifiques de rupture",
        "Utilisation des sacrements de l'Église catholique",
        "Suivi renforcé pour prévenir les rechutes",
      ],
      quote: "La vraie liberté ne s'achète pas. Elle se reconquiert, pas à pas, avec courage et foi.",
    },
    {
      id: 5,
      number: "05",
      title: "Rééducation morale & réinsertion sociale",
      subtitle: "Renaître parmi les siens",
      icon: <Users className="w-7 h-7" />,
      color: "#b45309",
      colorLight: "#fffbeb",
      colorMid: "#fde68a",
      accentColor: "amber",
      description: "La guérison ne s'arrête pas à la délivrance. Une personne libérée doit aussi apprendre à vivre libre — à reconstruire ses relations, à retrouver sa dignité, à réintégrer sa famille et sa communauté sans les vieilles peurs et les vieilles blessures.",
      details: "Ce cinquième pilier est peut-être le plus long et le plus délicat. La MTHS y consacre un suivi communautaire structuré, des ateliers de reconstruction identitaire, un accompagnement de la famille élargie, et un ancrage dans une communauté spirituelle vivante. Parce qu'une personne guérie qui reste isolée est une personne en danger.",
      benefits: [
        "Suivi communautaire hebdomadaire pendant 6 à 12 mois",
        "Ateliers de reconstruction de l'estime de soi",
        "Médiation familiale et réconciliation des liens",
        "Intégration dans un groupe d'anciens bénéficiaires",
      ],
      quote: "On ne guérit vraiment qu'en retrouvant sa place parmi les autres.",
    },
  ];

  const steps = [
    { id: 1, title: "Identification", short: "Nommer la souffrance", icon: <Target className="w-5 h-5" />, desc: "Reconnaître et nommer la souffrance spirituelle avec la personne, sans tabou ni jugement, dans un espace de confiance totale." },
    { id: 2, title: "Maîtrise", short: "Stabiliser la situation", icon: <Shield className="w-5 h-5" />, desc: "Stabiliser la situation par des prières, des soins adaptés et une mise à distance des sources de perturbation." },
    { id: 3, title: "Confession", short: "Libérer par la parole", icon: <Heart className="w-5 h-5" />, desc: "Libération intérieure par la parole, le pardon et la réconciliation — avec soi-même, avec les autres, avec Dieu." },
    { id: 4, title: "Anéantissement", short: "Briser les liens", icon: <Sparkles className="w-5 h-5" />, desc: "Rupture définitive et solennelle avec les liens du mal, par les sacrements, les rites de purification et la prière de délivrance." },
    { id: 5, title: "Resocialisation", short: "Retrouver sa place", icon: <Users className="w-5 h-5" />, desc: "Réintégration progressive dans la famille, la communauté et la vie active, avec un suivi bienveillant dans la durée." },
  ];

  const stats = [
    { value: 45, suffix: " ans", label: "d'expérience clinique", sub: "depuis 1979" },
    { value: 12, suffix: "", label: "protocoles thérapeutiques", sub: "standardisés et éprouvés" },
    { value: 5, suffix: " piliers", label: "d'une médecine intégrative", sub: "corps, âme et esprit" },
    { value: 20, suffix: "+", label: "ouvrages de référence", sub: "publiés par le Centre MTHS" },
  ];

  const ap = pillars[activePillar];

  // Références pour les sections (animations scroll)
  const [introRef, introInView] = useInView(0.3);
  const [piliersSectionRef, piliersInView] = useInView(0.2);
  const [protocoleRef, protocoleInView] = useInView(0.2);
  const [ctaRef, ctaInView] = useInView(0.3);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes slideRight { from { transform:scaleX(0); } to { transform:scaleX(1); } }
        @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-8px); } }
        @keyframes pulseGlow { 0%,100% { opacity:0.6; } 50% { opacity:1; } }
        @keyframes rotateSlow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes bounceSoft { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-3px); } }
        
        .anim-up { animation: fadeUp 0.7s ease both; }
        .anim-in { animation: fadeIn 0.9s ease both; }
        .line-grow { animation: slideRight 1s ease both; transform-origin: left; }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .pulse-anim { animation: pulseGlow 2s ease-in-out infinite; }
        .rotate-anim { animation: rotateSlow 12s linear infinite; }
        .bounce-soft { animation: bounceSoft 2s ease-in-out infinite; }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        
        .pillar-btn { transition: all 0.25s ease; }
        .pillar-btn:hover { transform: translateX(4px); }
        .pillar-btn.active { transform: translateX(6px); }
        
        .step-card { transition: all 0.3s ease; }
        .step-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(29,78,216,0.12); }
        
        .hero-pattern {
          background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 40%),
            repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px);
        }
        
        .card-hover { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.1); }
        
        .stat-divider { background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent); }
        .icon-hover { transition: transform 0.3s ease; }
        .icon-hover:hover { transform: rotate(8deg) scale(1.1); }
      `}</style>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden"
        style={{ minHeight: "88vh" }}
      >
        <div className="hero-pattern absolute inset-0" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-16 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl rotate-anim" />
        <div className="absolute top-40 left-1/3 w-64 h-64 bg-indigo-600/10 rounded-full blur-2xl float-anim" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16 min-h-[88vh]">

          {/* Left Content */}
          <div className={`flex-1 max-w-2xl ${heroInView ? "anim-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Star className="w-3.5 h-3.5 text-yellow-400 bounce-soft" />
              Médecine Traditionnelle des Handicapés Spirituels
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Les cinq <br />
              <span className="italic text-blue-300">piliers</span> <br />
              de la MTHS
            </h1>

            <div className={`w-20 h-1 bg-blue-400 rounded-full mb-8 line-grow delay-2 ${heroInView ? "" : "opacity-0"}`} />

            <p className={`text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 ${heroInView ? "anim-in delay-3" : "opacity-0"}`}>
              Une approche thérapeutique intégrative qui unit la foi chrétienne, la sagesse ancestrale africaine et les soins naturels — pour guérir l'être humain dans sa totalité : corps, âme et esprit.
            </p>

            <div className={`flex flex-wrap gap-4 ${heroInView ? "anim-up delay-4" : "opacity-0"}`}>
              <a href="#piliers"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95">
                Découvrir les piliers
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#protocole"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-all active:scale-95">
                Le protocole de soin
              </a>
            </div>
          </div>

          {/* Right — Quick access to pillars */}
          <div className={`flex-shrink-0 w-full lg:w-80 ${heroInView ? "anim-up delay-3" : "opacity-0"}`}>
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-5">Les 5 dimensions thérapeutiques</p>
            <div className="space-y-3">
              {pillars.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePillar(i);
                    document.getElementById("piliers")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full flex items-center gap-4 bg-white/8 border border-white/15 rounded-2xl px-5 py-4 text-left hover:bg-white/15 hover:border-white/30 transition-all group backdrop-blur-sm"
                >
                  <span className="text-xs font-bold text-blue-400 w-6 flex-shrink-0">{p.number}</span>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" 
                       style={{ backgroundColor: p.color + "33", color: "#93c5fd" }}>
                    {p.icon}
                  </div>
                  <span className="text-sm font-semibold text-white/90 leading-snug">{p.title}</span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/70 ml-auto flex-shrink-0 transition-all group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Défiler</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <div key={i} className="text-center px-6 py-4 relative">
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-px stat-divider" />
                )}
                <div className="text-3xl sm:text-4xl font-bold mb-1">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-blue-200 text-sm font-medium">{s.label}</div>
                <div className="text-blue-400 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section ref={introRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center transition-all duration-1000 ${introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div>
              <div className="w-1 h-16 bg-blue-600 mb-6 rounded-full line-grow" style={{ animationPlayState: introInView ? 'running' : 'paused' }} />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
                Une médecine<br /><em className="text-blue-700 not-italic">qui voit tout</em>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Née en 1979 de la révélation d'Abili, la MTHS repose sur une conviction fondatrice : l'être humain est indivisible. Soigner le corps sans soigner l'âme, c'est soigner à moitié.
              </p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 rotate-anim" />
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed relative z-10">
                La Médecine Traditionnelle des Handicapés Spirituels (MTHS) est née d'une conviction profonde : <strong className="text-blue-900">les souffrances spirituelles sont aussi réelles que les maladies physiques</strong>, et elles méritent une réponse thérapeutique aussi rigoureuse, aussi respectueuse et aussi efficace que n'importe quel soin médical.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mt-5 relative z-10">
                Ses cinq piliers ne sont pas des étapes séquentielles. Ce sont cinq dimensions d'un seul et même regard sur la personne — un regard qui ne fragmente pas, qui n'exclut pas, qui accueille l'humain dans sa complexité totale pour le guérir dans son intégralité.
              </p>
              <div className="mt-6 flex items-center gap-3 relative z-10">
                <div className="w-8 h-px bg-blue-400" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Centre Marie Reine d'Abili, Cameroun</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LES CINQ PILIERS — Interactive */}
      <section id="piliers" ref={piliersSectionRef} className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className={`text-center mb-14 lg:mb-20 transition-all duration-700 ${piliersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Notre approche</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 leading-tight">
              Les cinq piliers <em className="text-blue-700 not-italic">thérapeutiques</em>
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-5 rounded-full line-grow" style={{ animationPlayState: piliersInView ? 'running' : 'paused' }} />
          </div>

          {/* Desktop Selector */}
          <div className="hidden lg:flex items-stretch gap-1 bg-white rounded-2xl p-2 shadow-sm border border-slate-200 mb-10">
            {pillars.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActivePillar(i)}
                className={`flex-1 flex flex-col items-center gap-2 px-4 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${activePillar === i ? "text-white shadow-md scale-105" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"}`}
                style={activePillar === i ? { backgroundColor: p.color } : {}}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${activePillar === i ? "bg-white/20 rotate-3" : "bg-slate-100"}`}
                  style={activePillar === i ? {} : { color: p.color }}>
                  {p.icon}
                </div>
                <span className="text-xs text-center leading-snug">{p.number} — {p.title.split("&")[0].trim()}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar Detail */}
          <div key={activePillar} className="anim-up bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
              {/* Visual Panel */}
              <div className="relative p-10 flex flex-col justify-between min-h-[360px] transition-colors duration-300"
                style={{ backgroundColor: ap.color }}>
                <div>
                  <span className="text-[88px] font-bold leading-none" style={{ color: "rgba(255,255,255,0.12)" }}>
                    {ap.number}
                  </span>
                  <div className="flex items-center gap-3 -mt-6 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm icon-hover">
                      {ap.icon}
                    </div>
                    <div>
                      <div className="text-white/60 text-xs font-semibold uppercase tracking-wide">Pilier {ap.number}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                    {ap.title}
                  </h3>
                  <p className="text-white/70 text-sm italic mb-6">{ap.subtitle}</p>
                </div>

                <div className="border-t border-white/20 pt-5">
                  <div className="text-white leading-none mb-1 text-5xl opacity-30">"</div>
                  <p className="text-white/90 text-sm leading-relaxed italic">{ap.quote}</p>
                </div>

                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.05)", transform: "translate(30%, 30%)" }} />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                  {ap.description}
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 border-l-4 pl-5" style={{ borderColor: ap.color + "66" }}>
                  {ap.details}
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: ap.color }}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    Ce que ce pilier apporte
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ap.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 group">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" style={{ backgroundColor: ap.color + "1a" }}>
                          <Check className="w-3 h-3" style={{ color: ap.color }} />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Selector */}
            <div className="lg:hidden border-t border-slate-100 flex overflow-x-auto gap-2 p-4 snap-x snap-mandatory">
              {pillars.map((p, i) => (
                <button 
                  key={p.id} 
                  onClick={() => setActivePillar(i)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${activePillar === i ? "text-white scale-105" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                  style={activePillar === i ? { backgroundColor: p.color } : {}}
                >
                  {p.number} — {p.title.split(" ").slice(0, 3).join(" ")}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((p, i) => (
              <button 
                key={p.id} 
                onClick={() => setActivePillar(i)}
                className={`card-hover bg-white rounded-2xl p-5 text-left border-2 transition-all ${activePillar === i ? "shadow-lg" : "border-slate-200 hover:border-slate-300"}`}
                style={activePillar === i ? { borderColor: p.color } : {}}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 icon-hover" style={{ backgroundColor: p.colorLight }}>
                  <div style={{ color: p.color }}>{p.icon}</div>
                </div>
                <div className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: p.color }}>{p.number}</div>
                <h4 className="text-sm font-bold text-slate-800 leading-snug">{p.title}</h4>
                <p className="text-xs text-slate-500 mt-1.5 italic">{p.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROTOCOLE EN 5 ÉTAPES */}
      <section id="protocole" ref={protocoleRef} className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 items-start">
            <div className={`lg:sticky lg:top-24 transition-all duration-700 ${protocoleInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Notre méthode</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-3 leading-tight mb-5">
                Le parcours de<br /><em className="text-blue-700 not-italic">guérison</em>
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-6 line-grow" style={{ animationPlayState: protocoleInView ? 'running' : 'paused' }} />
              <p className="text-slate-600 leading-relaxed text-base mb-8">
                Le protocole MTHS n'est pas une procédure rigide. C'est un chemin — unique pour chaque personne, mais toujours guidé par les mêmes étapes fondamentales. Chaque étape prépare la suivante. Ensemble, elles conduisent à la liberté.
              </p>
              <p className="text-slate-500 text-sm italic border-l-4 border-blue-200 pl-4">
                Chaque parcours est unique et respecte entièrement le rythme de la personne. La durée totale varie de quelques semaines à plusieurs mois.
              </p>
            </div>

            <div className={`space-y-5 transition-all duration-700 delay-200 ${protocoleInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              {steps.map((step, i) => (
                <div key={step.id} className="step-card bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm group hover:shadow-lg">
                  <div className="flex items-stretch">
                    <div className="flex-shrink-0 w-16 sm:w-20 flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-700 text-white transition-all group-hover:from-blue-700 group-hover:to-blue-800">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{step.id}</div>
                        <div className="w-6 h-px bg-blue-400 mx-auto my-1" />
                        <div className="text-blue-300 transition-transform group-hover:scale-110" style={{ transform: "scale(0.85)" }}>{step.icon}</div>
                      </div>
                    </div>

                    <div className="flex-1 p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-0.5">
                            {step.title}
                          </h3>
                          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{step.short}</p>
                        </div>
                        {i < steps.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-slate-300 mt-1 flex-shrink-0 rotate-90 sm:rotate-0 group-hover:text-blue-400 transition-colors group-hover:translate-x-1" />
                        )}
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CITATION CENTRALE */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
        <div className="hero-pattern absolute inset-0" />
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-700/20 rounded-full blur-3xl pulse-anim" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-700/20 rounded-full blur-3xl rotate-anim" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Quote className="w-12 h-12 text-blue-400/50 mx-auto mb-8 float-anim" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-white mb-8 italic">
            "La MTHS ne soigne pas des maladies. Elle restaure des personnes."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-blue-400" />
            <p className="text-blue-300 text-sm font-semibold">JPSSA — Fondateur du Centre Marie Reine de la Miséricorde d'Abili</p>
            <div className="w-12 h-px bg-blue-400" />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section ref={ctaRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 p-10 sm:p-14 lg:p-20 relative overflow-hidden transition-all duration-1000 ${ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none rotate-anim" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-100/50 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none float-anim" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Premier pas</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-5 leading-tight">
                  Prêt à commencer<br /><em className="text-blue-700 not-italic">votre chemin de guérison ?</em>
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                  Nos équipes vous accueillent dans la confidentialité absolue et le respect total de votre histoire. Il n'y a pas de situation trop complexe, pas d'histoire trop lourde. Chaque parcours commence par un premier rendez-vous.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {["Confidentialité et respect absolu de votre vie privée","Accompagnement individuel adapté à votre situation","Thérapeutes formés et certifiés par le Centre MTHS"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 group">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 flex-shrink-0">
                <a href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-lg hover:shadow-xl active:scale-[0.97] flex items-center justify-center gap-2 group">
                  Demander un accompagnement
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/publications"
                  className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2 group">
                  Consulter nos publications
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Piliers;